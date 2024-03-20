import { Components, Theme } from '@mui/material'

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h1: true
  }
}

export const MuiTypography: Components<Theme>['MuiTypography'] = {
  variants: [
    {
      props: { variant: 'h1' },
      style: ({ theme }) => ({
        fontsize: '1.5rem',
        fontWeight: 700,
        lineHeight: 1,
      }),
    },
  ],
}
