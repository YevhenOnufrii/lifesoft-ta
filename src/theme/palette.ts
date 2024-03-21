import { PaletteOptions } from '@mui/material'

type ButtonsBG = {
  default: string
  selected: string
}

declare module '@mui/material/styles' {
  interface Palette {
    buttonsBG: ButtonsBG
  }

  interface PaletteOptions {
    buttonsBG: ButtonsBG
  }
}

export const palette: PaletteOptions = {
  background: {
    default: '#F6F7F9',
  },
  common: {
    black: '#303031',
  },
  text: {
    secondary: '#999999',
  },
  buttonsBG: {
    default: '#e9ebef',
    selected: '#b2bac7',
  },
  secondary: {
    main: '#405EFF',
  },
}
