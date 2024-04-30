import { IAction, IActionWithoutPayload } from '../../../interfaces/IAction'
import { INotificationProps } from '../../../interfaces/INotificationProps'

export enum NotificationActions {
  ADD_NOTIFICATION = 'ADD_NOTIFICATION',
  REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION',
  CLEAR_ALL_NOTIFICATIONS = 'CLEAR_ALL_NOTIFICATIONS',
}

export type TAddNotificationAction = IAction<
  NotificationActions.ADD_NOTIFICATION,
  INotificationProps
>
export type TRemoveNotificationAction = IAction<
  NotificationActions.REMOVE_NOTIFICATION,
  number
>
export type TClearAllNotificationsAction =
  IAction<NotificationActions.CLEAR_ALL_NOTIFICATIONS>
export type TNotificationAction =
  | TAddNotificationAction
  | TRemoveNotificationAction
  | TClearAllNotificationsAction
