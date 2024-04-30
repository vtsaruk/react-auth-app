import { notificationsDispatch } from "../index";
import { NotificationActions } from "./notificationActionTypes";

const clearAllNotifications = (): void => {
    notificationsDispatch({ type: NotificationActions.CLEAR_ALL_NOTIFICATIONS });
}

export default clearAllNotifications;
