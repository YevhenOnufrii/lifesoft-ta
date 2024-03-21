import { IconProps, Button, styled } from '@mui/material'
import { FC } from 'react'

import DeleteIcon from '@mui/icons-material/Delete'

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
        bgcolor: theme => (isSelected ? theme.palette.buttonsBG.selected : ''),
        color: theme => (isSelected ? theme.palette.common.white : ''),
        flexGrow: 0,
      }}
      onClick={() => onClick(title)}
      endIcon={
        <CustomDeleteIcon
          onClick={e => {
            e.stopPropagation()
            deleteCategory(title)
          }}
          sx={{ color: theme => (isSelected ? theme.palette.common.white : '') }}
        />
      }
    >
      {title}
    </Button>
  )
}

export default CategoryBtn

// ========== PARTS ==========

const CustomDeleteIcon = styled(DeleteIcon)<IconProps>(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '24px',
  marginLeft: '-4px',
  '&:active': {
    color: theme.palette.error.main,
  },
}))
