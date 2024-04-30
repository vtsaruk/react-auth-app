import createProvider from '../../../packages/provider/Provider'

import { INotificationProps } from '../../interfaces/INotificationProps'
import useReducer, {
  INotificationsProviderState,
  defaultUserState,
} from './reducer'

export const {
  Provider: NotificationProvider,
  useState: useNotificationState,
  useDispatch: useNotificationsDispatch,
  getState: getNotificationsState,
  dispatch: notificationsDispatch,
} = createProvider<INotificationsProviderState>(useReducer, defaultUserState)

export const useNotifications = (): INotificationProps[] =>
  useNotificationState().data
