import { FC, useState } from 'react'

import { Box, Button, Container, IconProps, Stack, Typography, styled } from '@mui/material'
import MainBreadcrumbs from '../Common/MainBreadcrumbs'

import DeleteIcon from '@mui/icons-material/Delete'

const Wishlist: FC = () => {
  const [store, setStore] = useState({
    categories: ['All products', 'Phones', 'Accessories'],
    selectedCategory: '',
  })

  const getSelectedCategory = (title: string) => {
    setStore({ ...store, selectedCategory: title })
  }

  const deleteCategory = (currCategory: string) => {
    const newItemsList = store.categories.filter(category => category !== currCategory)
    setStore({ ...store, categories: newItemsList })
  }

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

      <Stack sx={{ flexDirection: 'row', gap: '20px' }}>
        {store.categories &&
          store.categories.map((category, idx) => (
            <CategoryBtn
              key={idx}
              title={category}
              onClick={getSelectedCategory}
              selectedCategory={store.selectedCategory}
              deleteCategory={deleteCategory}
            />
          ))}
      </Stack>
    </Container>
  )
}

export default Wishlist

// ==================== Parts ====================

const CustomDeleteIcon = styled(DeleteIcon)<IconProps>(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '24px',
  marginLeft: '-4px',
  '&:active': {
    color: 'red',
  },
}))

type CategoryBtnProps = {
  title: string
  onClick: (title: string) => void
  deleteCategory: (title: string) => void
  selectedCategory: string
}
const CategoryBtn: FC<CategoryBtnProps> = ({
  title,
  onClick,
  selectedCategory,
  deleteCategory,
}) => {
  const isSelected = selectedCategory === title
  return (
    <Box>
      <Button
        variant="category"
        sx={{
          bgcolor: theme => isSelected && theme.palette.buttonsBG.selected,
          color: theme => isSelected && theme.palette.common.white,
        }}
        onClick={() => onClick(title)}
        endIcon={
          <CustomDeleteIcon
            onClick={e => {
              e.stopPropagation()
              deleteCategory(title)
            }}
            sx={{ color: theme => isSelected && theme.palette.common.white }}
          />
        }
      >
        {title}
      </Button>
    </Box>
  )
}
