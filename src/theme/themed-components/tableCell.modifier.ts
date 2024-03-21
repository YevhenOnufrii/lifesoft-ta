import { Components, Theme } from '@mui/material'

declare module '@mui/material/TableCell' {
  interface TableCellPropsVariantOverrides {
    boldDesc: true
  }
}

export const MuiTableCell: Components<Theme>['MuiTableCell'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      textAlign: 'center',
      maxWidth: '600px',
      padding: '3.5px 5px',
      textWrap: 'nowrap',

      [theme.breakpoints.up('md')]: {
        padding: '3.5px 8px',
      },
      [theme.breakpoints.up('lg')]: {
        padding: '3.5px 10px',
      },
    }),
  },

  variants: [
    {
      props: { variant: 'boldDesc' },
      style: () => ({
        fontWeight: 700,
        textWrap: 'wrap',
      }),
    },
  ],
}
