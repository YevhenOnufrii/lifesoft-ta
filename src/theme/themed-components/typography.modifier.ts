import { Components, Theme } from '@mui/material'

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    gray: true
  }
}

export const MuiTypography: Components<Theme>['MuiTypography'] = {
  variants: [
    {
      props: { variant: 'gray' },
      style: ({ theme }) => ({
        fontsize: '0.75rem',
      }),
    },
  ],
}
