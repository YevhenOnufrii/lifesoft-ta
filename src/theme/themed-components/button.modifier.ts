import { Components, Theme } from '@mui/material'

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    category: true
    add: true
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
        },
        '&:active': {
          backgroundColor: palette.secondary.main,
          color: palette.common.white,
          opacity: 1,
        },
      }),
    },
  ],
}
