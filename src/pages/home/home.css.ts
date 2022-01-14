import { keyframes, style } from '@vanilla-extract/css'
import { sprinkles } from '@/styles/tailwindcss.css'

export const App = sprinkles({
  textAlign: 'center',
  height: 'screen',
  fontSize: '2xl',
})

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(180deg)' },
})

export const AppLogo = style([
  sprinkles({
    height: '32',
    pointerEvents: 'none',
  }),
  {
    '@media': {
      '(prefers-reduced-motion: no-preference)': {
        animation: `${spin} infinite 20s linear`,
      },
    },
  },
])

export const AppHeader = sprinkles({
  background: 'slate-900',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  height: 'screen',
})

export const AppLink = sprinkles({
  color: 'cyan-400',
  fontSize: 'base',
})

export const button = sprinkles({
  fontSize: 'base',
})
