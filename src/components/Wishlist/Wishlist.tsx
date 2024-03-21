import { FC, useState } from 'react'

import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconProps,
  Stack,
  TextField,
  Typography,
  styled,
} from '@mui/material'
import MainBreadcrumbs from '../Common/MainBreadcrumbs'

import DeleteIcon from '@mui/icons-material/Delete'

const Wishlist: FC = () => {
  const [store, setStore] = useState({
    categories: ['All products', 'Phones', 'Accessories'],
    selectedCategory: '',
  })

  const [isDialogOpen, setDialogOpen] = useState(false)
  const [error, setError] = useState(false)

  const getSelectedCategory = (title: string) => {
    setStore({ ...store, selectedCategory: title })
  }

  const deleteCategory = (currCategory: string) => {
    const newItemsList = store.categories.filter(category => category !== currCategory)
    setStore({ ...store, categories: newItemsList })
  }

  const addNewCategory = (category: string) => {
    const alreadyExist = store.categories.find(
      item => item.toLocaleLowerCase() === category.toLocaleLowerCase()
    )
    if (!alreadyExist) {
      const newCategoriesList = [...store.categories, category]
      setStore({ ...store, categories: newCategoriesList })
      setError(false)
    } else {
      setError(true)
    }
  }

  const closeDialog = () => {
    setDialogOpen(false)
    setError(false)
  }
  const openDialog = () => {
    setDialogOpen(true)
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
        <Button variant="outlined" sx={{ width: 200, marginLeft: 'auto' }} onClick={openDialog}>
          New category
        </Button>
      </Stack>
      <AddCategoryDialog
        open={isDialogOpen}
        closeDialog={closeDialog}
        addNewCategory={addNewCategory}
        error={error}
      />
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
    color: theme.palette.error.main,
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
    <Button
      variant="category"
      sx={{
        bgcolor: theme => isSelected && theme.palette.buttonsBG.selected,
        color: theme => isSelected && theme.palette.common.white,
        flexGrow: 0,
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
  )
}

type AddCategoryDialogProps = {
  open: boolean
  error: boolean
  closeDialog: () => void
  addNewCategory: (category: string) => void
}

const AddCategoryDialog: FC<AddCategoryDialogProps> = ({
  open,
  closeDialog,
  addNewCategory,
  error,
}) => {
  return (
    <Dialog
      open={open}
      onClose={closeDialog}
      PaperProps={{
        component: 'form',
        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault()
          const formData = new FormData(event.currentTarget)
          const formJson = Object.fromEntries((formData as any).entries())
          const category = formJson.category
          addNewCategory(category)
          if (error) closeDialog()
        },
        sx: {
          width: '40%',
        },
      }}
    >
      <DialogTitle>Enter new category</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          required
          margin="dense"
          name="category"
          label="Category"
          fullWidth
          variant="standard"
          autoComplete="false"
        />
      </DialogContent>
      {error && (
        <Typography sx={{ color: theme => theme.palette.error.light, textAlign: 'center' }}>
          This category already exist
        </Typography>
      )}
      <DialogActions>
        <Button onClick={closeDialog}>Cancel</Button>
        <Button type="submit">Add category</Button>
      </DialogActions>
    </Dialog>
  )
}
