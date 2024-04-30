import { notificationsDispatch } from '../index'
import { INotificationProps } from '../../../interfaces/INotificationProps'
import { NotificationActions } from './notificationActionTypes'

const addNotification = (notification: INotificationProps): void => {
  notificationsDispatch({
    type: NotificationActions.ADD_NOTIFICATION,
    payload: notification,
  })
}

export default addNotification
