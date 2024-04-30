import React from 'react'
import Stack from '@mui/material/Stack'
import map from 'lodash/map'

import { Alert } from '../Alert/Alert'
import { useNotifications } from '../../../core/providers/notifications'

function AlertList(): JSX.Element {
  const notifications = useNotifications()

  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      {map(notifications, (item) => (
        <Alert {...item} key={item.id} />
      ))}
    </Stack>
  )
}

export default AlertList
