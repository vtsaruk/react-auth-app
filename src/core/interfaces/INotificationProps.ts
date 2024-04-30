export interface INotificationProps {
    id: number;
    description: string;
    type: 'success' | 'error',
    title: string;
}