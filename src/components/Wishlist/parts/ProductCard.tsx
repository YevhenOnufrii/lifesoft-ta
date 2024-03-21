import { Button, IconButton, Stack, TableCell, TableRow, Typography } from '@mui/material'

import { FC } from 'react'
import { CircleStack } from './styled'

import CloseIcon from '@mui/icons-material/Close'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { Product } from '../../../types'

interface ProductCardProps extends Product {
  image: string
  deleteProduct: (id: number) => void
  addFavorite: (id: number) => void
}

const ProductCard: FC<ProductCardProps> = ({
  image,
  productCode,
  name,
  stock,
  qty,
  price,
  deleteProduct,
  addFavorite,
  id,
  isFavorite,
}) => {
  return (
    <TableRow
      sx={{
        maxHeight: '110px',
        overflow: 'hidden',
        bgcolor: theme => theme.palette.common.white,
      }}
    >
      <TableCell>
        <img src={image} width={100} alt="product image" />
      </TableCell>

      <TableCell>{productCode}</TableCell>
      <TableCell variant="boldDesc" sx={{ textAlign: 'left' }}>
        {name}
      </TableCell>
      <TableCell>{stock}</TableCell>
      <TableCell>
        <Typography fontWeight={700}>{qty} qty.</Typography>
      </TableCell>
      <TableCell>
        <Typography fontWeight={700}>{price.eur} €</Typography>
        <Typography>{price.usd} $</Typography>
      </TableCell>
      <TableCell>
        <Button variant="outlined">Add to card</Button>
      </TableCell>
      <TableCell>
        <Stack sx={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <CircleStack>
            <IconButton
              onClick={e => {
                e.stopPropagation()
                addFavorite(id)
              }}
            >
              <FavoriteIcon color={isFavorite ? 'secondary' : 'inherit'} />
            </IconButton>
          </CircleStack>
          <IconButton
            onClick={e => {
              e.stopPropagation()
              deleteProduct(id)
            }}
          >
            <CloseIcon />
          </IconButton>
        </Stack>
      </TableCell>
    </TableRow>
  )
}

export default ProductCard
