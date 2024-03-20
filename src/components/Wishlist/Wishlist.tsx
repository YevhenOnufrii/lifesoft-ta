import { FC } from 'react'

import { Container, Typography } from '@mui/material'
import MainBreadcrumbs from '../Common/MainBreadcrumbs'

const Wishlist: FC = () => {
  return (
    <Container>
      <MainBreadcrumbs currentTitle="Wishlist" />

      <Typography variant="h1" component={'h1'} sx={{ margin: '10px 0' }}>
        Wishlist
      </Typography>
    </Container>
  )
}

export default Wishlist
