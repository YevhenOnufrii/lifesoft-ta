import { Components, Theme } from '@mui/material'

declare module '@mui/material/TableCell' {
  interface TableCellPropsVariantOverrides {
    boldDesc: true
  }
}

export const MuiTableCell: Components<Theme>['MuiTableCell'] = {
  styleOverrides: {
    root: () => ({
      textAlign: 'center',
      maxWidth: '600px',
      padding: '3.5px 10px',
      lineHeight: 1,
      margin: 0,
    }),
  },

  variants: [
    {
      props: { variant: 'boldDesc' },
      style: () => ({
        fontWeight: 700,
      }),
    },
  ],
}
