import { notificationsDispatch } from "../index";
import { NotificationActions } from "./notificationActionTypes";

const removeNotification = (notificationId:number): void => {
    console.log('removeNotification', notificationId )
    notificationsDispatch({ type: NotificationActions.REMOVE_NOTIFICATION, payload: notificationId });
}

export default removeNotification;
