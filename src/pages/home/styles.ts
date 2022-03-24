import { styled, keyframes } from '@/styles/stitches.config'

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(180deg)' },
})

export const StyledApp = styled('div', {
  textAlign: 'center',
  height: '100vh',
  text: '2xl',
  '.app-header': {
    background: '$slate-900',
    flexBox: 'center',
    flexDirection: 'column',
    color: '$white',
    height: '100vh',
  },
  '.app-logo': {
    height: '$32',
    pointerEvents: 'none',
    '@media (prefers-reduced-motion: no-preference)': {
      animation: `${spin} infinite 20s linear`,
    },
  },
  '.app-link': {
    color: '$cyan-400',
    text: '$base',
  },
  button: {
    text: '$base',
  },
})
