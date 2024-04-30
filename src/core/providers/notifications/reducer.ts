import filter from 'lodash/filter'

import { INotificationProps } from '../../interfaces/INotificationProps'
import {
  NotificationActions,
  TNotificationAction,
} from './actions/notificationActionTypes'

export type INotificationsProviderState = {
  data: INotificationProps[]
}

export const defaultUserState: INotificationsProviderState = {
  data: [],
}

export default (
  state: INotificationsProviderState,
  action: TNotificationAction
) => {
  const { type, payload } = action

  switch (type) {
    case NotificationActions.ADD_NOTIFICATION: {
      return { ...state, data: [...state.data, payload] }
    }
    case NotificationActions.REMOVE_NOTIFICATION: {
      const newList = filter(state.data, (item) => item.id !== payload)

      return { ...state, data: newList }
    }
    case NotificationActions.CLEAR_ALL_NOTIFICATIONS: {
      return { ...state, data: [] }
    }
    default: {
      return state
    }
  }
}
