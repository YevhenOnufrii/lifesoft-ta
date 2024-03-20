import { FC } from 'react'

import { Container, Typography } from '@mui/material'
import MainBreadcrumbs from '../Common/MainBreadcrumbs'

const Wishlist: FC = () => {
  return (
    <Container>
      <MainBreadcrumbs currentTitle="Wishlist" />

      {/* wishlist header */}

      <Typography variant="h1" component={'h1'} sx={{ margin: '10px 0' }}>
        Wishlist
      </Typography>
      <Typography variant="caption" component={'p'} marginBottom={'20px'}>
        158 products
      </Typography>

      {/* categories */}
    </Container>
  )
}

export default Wishlist
