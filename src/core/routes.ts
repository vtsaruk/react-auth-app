import React, { useEffect } from 'react'
import { useRoutes } from 'react-router-dom'

import lazyLoadRoutes from '../components/LazyLoadRoutes'
import { useUser } from '../core/providers/users'
import getUserData from './services/getUserData';

function RouterElement() {
  const { displayName } = useUser();

  useEffect(() => {
    !displayName && getUserData();
  }, []);
    
  if (displayName) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useRoutes([
      { path: '/', element: lazyLoadRoutes('Home') }
    ])
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useRoutes([
    { path: '/', element: lazyLoadRoutes('Login') },
  ])
}

export default RouterElement
