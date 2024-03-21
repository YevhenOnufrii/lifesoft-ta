import { FC } from 'react'

import { Button, Container, Stack, Typography } from '@mui/material'
import MainBreadcrumbs from '../Common/MainBreadcrumbs'
import AddCategoryDialog from './parts/AddCategoryDialog'
import CategoryBtn from './parts/CategoryBtn'
import ProductsList from './parts/ProductsList'

import image from '../../assets/powerBank.jpg'
import useWishList from './parts/useWishlist'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'

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
      <Stack sx={{ flexDirection: 'row', gap: '20px', marginBottom: '20px', flexWrap: 'wrap' }}>
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

      <Stack direction={'row'} justifyContent={'space-between'} flexWrap={'wrap'}>
        <Button variant="goBack" startIcon={<ArrowBackIcon color="secondary" />}>
          Go back
        </Button>

        <Stack direction={'row'} spacing={2.5}>
          <Button variant="outlined" sx={{ width: '300px' }}>
            Add product
          </Button>
          <Button variant="contained" sx={{ width: '300px' }}>
            Add to card
          </Button>
        </Stack>
      </Stack>
    </Container>
  )
}

export default Wishlist
