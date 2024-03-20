import { Components, Theme } from '@mui/material'

export const MuiContainer: Components<Theme>['MuiContainer'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      [theme.breakpoints.up('xs')]: {
        padding: 0,
      },
      [theme.breakpoints.up('lg')]: {
        maxWidth: 1380,
      },
    }),
  },
}
