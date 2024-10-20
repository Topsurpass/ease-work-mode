import React, { createContext, useState, useContext, ReactNode } from 'react';

interface MenuContextType {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
}

// Create the context with default values
const MenuContext = createContext<MenuContextType | undefined>(undefined);

// Create a provider component
interface MenuProviderProps {
    children: ReactNode;
}

export const MenuProvider: React.FC<MenuProviderProps> = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

    // Function to toggle the sidebar open/close state
    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    return (
        <MenuContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
            {children}
        </MenuContext.Provider>
    );
};

// Create a custom hook to use the MenuContext
export const useMenu = (): MenuContextType => {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error('useMenu must be used within a MenuProvider');
    }
    return context;
};
