import { Components, Theme } from '@mui/material'

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h1: true
    caption: true
  }
}

export const MuiTypography: Components<Theme>['MuiTypography'] = {
  variants: [
    {
      props: { variant: 'h1' },
      style: () => ({
        fontSize: '1.5rem',
        fontWeight: 700,
        lineHeight: 1,
      }),
    },
    {
      props: { variant: 'caption' },
      style: ({ theme }) => ({
        fontSize: '0.75rem',
        color: theme.palette.text.secondary,
      }),
    },
  ],
}
