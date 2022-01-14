import { globalStyle } from '@vanilla-extract/css'
import { vars } from './styles/vars.css'

globalStyle('body', {
  margin: 0,
  fontFamily: vars.fontFamily.body,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'antialiased',
})

globalStyle('code', {
  fontFamily: vars.fontFamily.code,
})
