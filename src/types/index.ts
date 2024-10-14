import { EntityType } from './enum';

export interface State {
    data: {
        id: string;
        title: string;
        type: string;
        location: string;
        company: string;
        posted: string;
        pay: string;
        aboutCompany: string;
        fullRoleDescription: string;
        keyResponsibility: string;
        qualificationAndExperience: string;
        methodOfApplication: string;
        deadline: string;
    };
    isModalOpen: boolean;
    formData: Record<string, any>;
    isEdit: boolean;
    isDelete: boolean;
    entity: EntityType | string;
}
export interface IEventFileUpload {
    file: any;
    setFile: React.Dispatch<React.SetStateAction<any>>;
    resetFile: () => void;
}

export type Action =
    | { type: 'OPEN_MODAL'; payload: Record<string, any> }
    | { type: 'CLOSE_MODAL' }
    | { type: 'SET_EDIT_MODE'; payload: Record<string, any> }
    | { type: 'OPEN_DELETE_MODAL'; payload: Record<string, any> };
