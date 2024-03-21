import { useState } from 'react'
import { Product } from '../../../types'

import initData from '../../../assets/data.json'

const useWishList = () => {
  const [categories, setCategories] = useState({
    list: ['All products', 'Phones', 'Accessories'],
    selectedCategory: '',
  })
  const [data, setData] = useState<Product[]>(initData)
  const [isDialogOpen, setDialogOpen] = useState(false)
  const [error, setError] = useState(false)

  const getSelectedCategory = (title: string) => {
    setCategories({ ...categories, selectedCategory: title })
  }

  const deleteCategory = (currCategory: string) => {
    const newItemsList = categories.list.filter(category => category !== currCategory)
    setCategories({ ...categories, list: newItemsList })
  }

  const addNewCategory = (category: string) => {
    const alreadyExist = categories.list.find(
      item => item.toLocaleLowerCase() === category.toLocaleLowerCase()
    )
    if (!alreadyExist) {
      const newCategoriesList = [...categories.list, category]
      setCategories({ ...categories, list: newCategoriesList })
      setError(false)
      setDialogOpen(false)
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

  return {
    categories,
    setCategories,
    data,
    setData,
    isDialogOpen,
    setDialogOpen,
    error,
    setError,
    getSelectedCategory,
    deleteCategory,
    addNewCategory,
    closeDialog,
    openDialog,
  }
}

export default useWishList
