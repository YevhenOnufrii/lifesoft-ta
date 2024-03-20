import { Components, Theme } from '@mui/material'

export const MuiCssBaseline: Components<Theme>['MuiCssBaseline'] = {
  styleOverrides: theme => ({
    body: {
      backgroundColor: theme.palette.background.default,
      color: theme.palette.common.black,
      lineHeight: 1,

      [theme.breakpoints.up('lg')]: {
        padding: '52px 30px 73px',
      },
    },
  }),
}
