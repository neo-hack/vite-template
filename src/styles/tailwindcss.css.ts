import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles'
import { vars, responsive } from './vars.css'

const borderWidth = {
  '0': '0px',
  '1': '1px',
  '2': '2px',
  '4': '4px',
  '8': '8px',
}

// TODO: wild defined
const width = {
  xs: '20rem',
  sm: '24rem',
  md: '28rem',
  lg: '32rem',
  xl: '36rem',
  '2xl': '42rem',
  '3xl': '48rem',
  '4xl': '56rem',
  '5xl': '64rem',
  '6xl': '72rem',
  '7xl': '80rem',
}

// TODO:
// - container
const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': `screen and (min-width: ${responsive.md})` },
    desktop: { '@media': `screen and (min-width: ${responsive.lg})` },
    sm: { '@media': `screen and (min-width: ${responsive.sm})` },
    md: { '@media': `screen and (min-width: ${responsive.md})` },
    lg: { '@media': `screen and (min-width: ${responsive.lg})` },
    xl: { '@media': `screen and (min-width: ${responsive.xl})` },
    '2xl': { '@media': `screen and (min-width: ${responsive['2xl']})` },
  },
  defaultCondition: 'mobile',
  properties: {
    aspectRatio: ['auto', '1/1', '16/9'],
    display: ['none', 'flex'],
    flexDirection: ['row', 'column'],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    justifyContent: ['stretch', 'flex-start', 'center', 'flex-end'],
    gap: vars.space,
    paddingTop: vars.space,
    paddingBottom: vars.space,
    paddingLeft: vars.space,
    paddingRight: vars.space,
    marginTop: vars.space,
    marginBottom: vars.space,
    marginLeft: vars.space,
    marginRight: vars.space,
    boxShadow: vars.shadow,
    top: vars.space,
    left: vars.space,
    bottom: vars.space,
    right: vars.space,
    borderRadius: {
      none: '0px',
      sm: '0.125rem',
      DEFAULT: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      full: '9999px',
    },
    fontFamily: vars.fontFamily,
    fontSize: vars.fontSize,
    lineHeight: vars.lineHeight,
    textAlign: ['center'],
    pointerEvents: ['none'],
    fontWeight: {
      thin: 100,
      extralight: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    borderWidth,
    borderTopWidth: borderWidth,
    borderLeftWidth: borderWidth,
    borderRightWidth: borderWidth,
    borderBottomWidth: borderWidth,
    listStyleType: ['none', 'disc', 'decimal'],
    height: {
      screen: '100vh',
      ...vars.space,
    },
    width: {
      screen: '100vw',
      ...vars.space,
    },
    minHeight: {
      0: '0',
      full: '100%',
      screen: '100vh',
    },
    maxWidth: {
      none: 'none',
      0: '0rem',
      ...width,
      full: '100%',
      min: 'min-content',
      max: 'max-content',
      prose: '65ch',
    },
    inset: [0],
    textDecorationLine: ['underline', 'overline', 'line-through', 'none'],
    textDecorationStyle: ['solid', 'double', 'dotted', 'dashed', 'wavy'],
    textUnderlineOffset: borderWidth,
    textDecorationThickness: borderWidth,
    list: {
      none: {
        'list-style-type': 'none',
      },
    },
    items: {
      center: {
        'align-items': 'center',
      },
    },
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    placeItems: ['alignItems', 'justifyContent'],
    typeSize: ['fontSize', 'lineHeight'],
    rounded: ['borderRadius'],
    underlineOffset: ['textUnderlineOffset'],
  },
})

const colorModeProperties = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: { '@media': '(prefers-color-scheme: dark)' },
    hover: { selector: '&:hover' },
    focus: { selector: '&:focus' },
  },
  defaultCondition: 'lightMode',
  properties: {
    color: vars.color,
    borderColor: vars.color,
    background: vars.color,
    textDecorationColor: vars.color,
  },
})

export const sprinkles = createSprinkles(responsiveProperties, colorModeProperties)
