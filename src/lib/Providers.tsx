import React from 'react'
import StyledComponentsRegistry from './AntdRegistry'

export default function Providers({ children }: { children :any}) {
  return (
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
  )
}
