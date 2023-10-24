export enum NotificationType {
    SUCCESS,
    DANGER,
    WARNING
}


export interface INotification {
    id: string;
    title: string;
    text: string;
    type: NotificationType;    
}