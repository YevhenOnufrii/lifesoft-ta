import { Components, Theme } from '@mui/material'

export const MuiCssBaseline: Components<Theme>['MuiCssBaseline'] = {
  styleOverrides: theme => ({
    body: {
      backgroundColor: theme.palette.background.default,
      color: theme.palette.common.black,
      lineHeight: 1,
      fontWeight: 400,

      [theme.breakpoints.up('xs')]: {
        padding: 16,
      },
      [theme.breakpoints.up('lg')]: {
        padding: '52px 30px 73px',
      },
    },
  }),
}
