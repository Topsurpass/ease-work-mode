import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import setAuthToken, { setAuthTokenHTTP } from '@/lib/set-auth-token';

type TState = {
    id: string;
    expiresIn: number;
    accessToken: string;
    refreshToken: string;
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    roles: string[];
    location: string;
    bio: string;
    resumeUrl: string;
    createdAt: string;
    updatedAt: string;
    isAuthenticated: boolean;
    address: string;
};

type TAction = {
    setUser: (payload: any) => void;
    reset: () => void;
};

// define the initial state
const initialState: TState = {
    id: '',
    expiresIn: 0,
    accessToken: '',
    refreshToken: '',
    location: '',
    bio: '',
    createdAt: '',
    updatedAt: '',
    resumeUrl: '',
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    roles: [],
    isAuthenticated: false,
    address: '',
};

const useAuthStore = create<TState & TAction>()(
    immer(
        devtools(
            persist(
                (set) => ({
                    ...initialState,
                    setUser: (payload) =>
                        set((state) => {
                            state.expiresIn = payload.exp;
                            state.accessToken = payload.token;
                            state.refreshToken = payload.refreshToken;
                            state.email = payload.email;
                            state.firstname = payload.firstName;
                            state.lastname = payload.lastName;
                            state.roles = payload.roles;
                            state.isAuthenticated = true;
                            state.location = payload.location;
                            state.bio = payload.bio;
                            state.createdAt = payload.createdAt;
                            state.updatedAt = payload.updatedAt;
                            state.resumeUrl = payload.resumeUrl;
                            state.id = payload.id;
                            state.phone = payload.phone;
                            state.address = payload.address;
                        }),
                    reset: () => {
                        set(initialState);
                        setAuthToken(false);
                        setAuthTokenHTTP(false);
                    },
                }),
                {
                    name: 'storage-name',
                    // getStorage: ()=> sessionStorage
                }
            ),
            {
                enabled: process.env.NODE_ENV === 'development',
                name: 'user-auth-store',
            }
        )
    )
);

export default useAuthStore;
