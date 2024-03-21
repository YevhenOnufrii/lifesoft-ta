import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from '@mui/material'
import { FC } from 'react'

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
          autoComplete="off"
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

export default AddCategoryDialog
