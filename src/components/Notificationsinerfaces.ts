export interface NotificationBoardProps {
    data: NotificationData[];
}

export interface NotificationData {
    id: number;
    message: string;
    type: string;
}
