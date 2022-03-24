import React from 'react'

import { preflight } from './preflight'

type ThemeProps = React.PropsWithChildren<{
  value?: any
}>

const ThemeContext = React.createContext<ThemeProps>({})

export const ThemeProvider = ({ children, ...props }: ThemeProps) => {
  preflight()
  return <ThemeContext.Provider value={props.value}>{children}</ThemeContext.Provider>
}
