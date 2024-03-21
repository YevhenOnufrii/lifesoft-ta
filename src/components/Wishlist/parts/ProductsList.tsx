import {
  FormControlLabel,
  Paper,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { FC, useState } from 'react'

import ProductCard from './ProductCard'
import { Data } from '../../../types'

type ProductsListProps = {
  data: Data
  image: string
  setData: React.Dispatch<React.SetStateAction<Data>>
}

const ProductsList: FC<ProductsListProps> = ({ data, image, setData }) => {
  const [dense, setDense] = useState(false)

  const handleChangeDense = () => {
    setDense(!dense)
  }

  const deleteProduct = (id: number) => {
    const updateData = data.filter(product => product.id !== id)
    setData([...updateData])
  }

  const addFavorite = (id: number) => {
    const manageList = data.reduce((acc, prod) => {
      if (prod.id === id) {
        prod.isFavorite ? (prod['isFavorite'] = false) : (prod['isFavorite'] = true)
      }
      // @ts-ignore
      acc.push(prod)
      return acc
    }, [])
    setData([...manageList])
  }

  if (!data.length) return null

  return (
    <Paper
      sx={{
        width: '100%',
        overflow: 'hidden',
        boxShadow: 'none',
        bgcolor: 'transparent',
      }}
    >
      <TableContainer sx={{ maxHeight: '500px' }}>
        <Table stickyHeader sx={{ borderCollapse: 'separate', borderSpacing: '0 10px' }}>
          <TableHead>
            <TableRow>
              <TableCell>Photo</TableCell>
              <TableCell>Product code</TableCell>
              <TableCell sx={{ textAlign: 'left' }}>Name</TableCell>
              <TableCell>Stock</TableCell>
              <TableCell>QTY</TableCell>
              <TableCell>Price</TableCell>
              <TableCell></TableCell>
              <TableCell>
                <FormControlLabel
                  control={<Switch checked={dense} onChange={handleChangeDense} />}
                  label="Image"
                />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length &&
              data.map((product, idx) => (
                <ProductCard
                  key={idx}
                  image={image}
                  {...product}
                  deleteProduct={deleteProduct}
                  addFavorite={addFavorite}
                />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}

export default ProductsList
