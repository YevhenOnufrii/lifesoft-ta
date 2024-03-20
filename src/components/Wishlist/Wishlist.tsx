import { FC } from 'react'

import MainBreadcrumbs from '../Common/MainBreadcrumbs'
import { Container } from '@mui/material'

const Wishlist: FC = () => {
  return (
    <Container>
      <MainBreadcrumbs currentTitle="Wishlist" />
    </Container>
  )
}

export default Wishlist
