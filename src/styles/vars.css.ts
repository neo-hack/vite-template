import { createGlobalTheme } from '@vanilla-extract/css'
import colors from 'tailwindcss/colors'

type TailwindColorStop =
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900;

function tailwindColorMap<T extends keyof typeof colors>(
  name: T
): {
  // eslint-disable-next-line prettier/prettier
  [P in keyof typeof colors[T] as `${T}-${TailwindColorStop}`]: string;
} {
  // @ts-ignore: I promise the type is correct:
  return Object.fromEntries(
    Object.entries(colors[name]).map(([num, value]) => [
      `${name}-${num}`,
      value,
    ])
  );
}

export const responsive = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

export const vars = createGlobalTheme(':root', {
  shadow: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    none: 'none',
  },
  space: {
    auto: 'auto',
    px: '1px',
    "0": '0px',
    "0.5": '0.125rem',
    "1": '0.25rem',
    "1.5": '0.375rem',
    "2": '0.5rem',
    "2.5": '0.625rem',
    "3": '0.75rem',
    "3.5": '0.875rem',
    "4": '1rem',
    "5": '1.25rem',
    "6": '1.5rem',
    "7": '1.75rem',
    "8": '2rem',
    "9": '2.25rem',
    "10": '2.5rem',
    "11": '2.75rem',
    "12": '3rem',
    "14": '3.5rem',
    "16": '4rem',
    "20": '5rem',
    "24": '6rem',
    "28": '7rem',
    "32": '8rem',
    "36": '9rem',
    "40": '10rem',
    "44": '11rem',
    "48": '12rem',
    "52": '13rem',
    "56": '14rem',
    "60": '15rem',
    "64": '16rem',
    "72": '18rem',
    "80": '20rem',
    "96": '24rem',
  },
  color: {
    white: colors.white,
    black: colors.black,
    transparent: "transparent",
    ...tailwindColorMap("blue"),
    ...tailwindColorMap("cyan"),
    ...tailwindColorMap("gray"),
    ...tailwindColorMap("red"),
    ...tailwindColorMap("green"),
    ...tailwindColorMap("indigo"),
    ...tailwindColorMap("purple"),
    ...tailwindColorMap("sky"),
    ...tailwindColorMap("slate"),
  },
  fontFamily: {
    body:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    code: "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
  },
  lineHeight: {
    xs: '1rem',
    sm: '1.25rem',
    base: '1.5rem',
    lg: '1.75rem',
    xl: '1.75rem',
    '2xl': '2rem',
    '3xl': '2.25rem',
    '4xl': '2.5rem',
    '5xl': '1',
    '6xl': '1',
    '7xl': '1',
    '8xl': '1',
    '9xl': '1',
  },
})
