import { Components, Theme } from '@mui/material'

export const MuiSwitch: Components<Theme>['MuiSwitch'] = {
  styleOverrides: {
    switchBase: {
      color: '#405EFF',
    },
    colorPrimary: {
      '&.Mui-checked': {
        color: '#405EFF',
      },
    },
    track: {
      backgroundColor: '#405EFF',
      opacity: 0.3,
    },
  },
}
