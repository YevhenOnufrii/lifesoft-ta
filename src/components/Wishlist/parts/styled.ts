import { Stack, styled } from '@mui/material'

export const CircleStack = styled(Stack)(({ theme }) => ({
  width: '40px',
  height: '40px',
  border: '1px solid',
  borderColor: theme.palette.buttonsBG.borderGray,
  borderRadius: '50%',

  alignItems: 'center',
  justifyContent: 'center',
}))
