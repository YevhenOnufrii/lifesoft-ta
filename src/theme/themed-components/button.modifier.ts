import { Components, Theme } from '@mui/material'

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    category: true
    add: true
    goBack: true
  }
}

export const MuiButton: Components<Theme>['MuiButton'] = {
  defaultProps: {
    disableRipple: true,
    disableTouchRipple: true,
    disableFocusRipple: true,
  },
  styleOverrides: {
    root: () => ({
      textTransform: 'none',
    }),
  },

  variants: [
    {
      props: { variant: 'category' },
      style: ({ theme: { palette } }) => ({
        backgroundColor: palette.buttonsBG.default,
        padding: '6px 10px',

        '&:hover': {
          backgroundColor: palette.buttonsBG.selected,
          color: palette.common.white,
        },
      }),
    },
    {
      props: { variant: 'outlined' },
      style: ({ theme: { palette } }) => ({
        borderColor: palette.secondary.main,
        color: palette.secondary.main,
        padding: '8px 13px',
        '&:hover': {
          backgroundColor: palette.secondary.main,
          color: palette.common.white,
          opacity: 0.5,
          boxShadow:
            '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
        },
        '&:active': {
          backgroundColor: palette.secondary.main,
          color: palette.common.white,
          opacity: 1,
          boxShadow:
            '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
        },
      }),
    },
    {
      props: { variant: 'contained' },
      style: ({ theme: { palette } }) => ({
        backgroundColor: palette.secondary.main,
        color: palette.common.white,
        padding: '8px 13px',
        boxShadow: 'none',
      }),
    },
    {
      props: { variant: 'goBack' },
      style: ({ theme }) => ({
        border: 'none',
        color: theme.palette.secondary.main,

        '&:hover': {
          backgroundColor: 'transparent',
        },
      }),
    },
  ],
}
