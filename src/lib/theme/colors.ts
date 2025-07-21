export const Colors = {
  primary: '#E3FA51',
  white: '#FFFFFF',
  transparentWhite: '#FFFFFFBD',
  grayLight: '#EBEBEB',
  grayMedium: '#A5A5A5',
  grayDark: '#919191',
  gray300: '#B9B9B9',
  gray500: '#727272',
  black: '#000000',
  darCharcoal: '#0F0D0D',
  black500: '#0D0F0D',
  yellow: '#FFD256',
  transparent: 'transparent',
  red: '#DB1E1E',

  gradientMain: {
    colors: [
      'rgba(0, 0, 0, 0)',
      'rgba(0, 0, 0, 0.23)',
      'rgba(0, 0, 0, 0.47)',
      'rgba(0, 0, 0, 1)',
    ] as const,
    locations: {
      start: 0,
      firstStop: 0.227,
      secondStop: 0.4719,
      end: 1,
    } as const,
  },

  gradientHome: {
    colors: [
      'rgba(0, 0, 0, 0)',
      'rgba(0, 0, 0, 0.1)',
      'rgba(0, 0, 0, 0.25)',
      'rgba(0, 0, 0, 0.57)',
    ] as const,
    locations: {
      start: 0,
      firstStop: 0,
      secondStop: 0.8,
      end: 1,
    } as const,
  },
} as const;
