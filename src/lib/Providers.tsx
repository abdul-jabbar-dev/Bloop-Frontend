'use client'
import React from 'react'
import StyledComponentsRegistry from './AntdRegistry'
import { Provider } from 'react-redux'
import { store } from '../redux/store'

export default function Providers({ children }: { children: React.ReactElement }) {
  return (
    <StyledComponentsRegistry>
      <Provider store={store}>
        {children}
      </Provider>

    </StyledComponentsRegistry>
  )
}
