import { FC, useState } from 'react'
import { Product } from '../../types'

import { Button, Container, Stack, Typography } from '@mui/material'
import MainBreadcrumbs from '../Common/MainBreadcrumbs'
import AddCategoryDialog from './parts/AddCategoryDialog'
import CategoryBtn from './parts/CategoryBtn'
import ProductsList from './parts/ProductsList'

import initData from '../../assets/data.json'
import image from '../../assets/powerBank.jpg'
import useWishList from './parts/useWishlist'

const Wishlist: FC = () => {
  const {
    categories,
    data,
    setData,
    isDialogOpen,
    error,
    getSelectedCategory,
    deleteCategory,
    addNewCategory,
    closeDialog,
    openDialog,
  } = useWishList()

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
      <Stack sx={{ flexDirection: 'row', gap: '20px', marginBottom: '20px' }}>
        {categories.list &&
          categories.list.map((category, idx) => (
            <CategoryBtn
              key={idx}
              title={category}
              onClick={getSelectedCategory}
              selectedCategory={categories.selectedCategory}
              deleteCategory={deleteCategory}
            />
          ))}

        {/* add new category btn */}
        <Button variant="outlined" sx={{ width: 200, marginLeft: 'auto' }} onClick={openDialog}>
          New category
        </Button>

        {/* Dialog */}
      </Stack>
      <AddCategoryDialog
        open={isDialogOpen}
        closeDialog={closeDialog}
        addNewCategory={addNewCategory}
        error={error}
      />

      <ProductsList image={image} data={data} setData={setData} />
    </Container>
  )
}

export default Wishlist
