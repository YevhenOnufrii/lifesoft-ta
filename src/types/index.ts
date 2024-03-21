export type Product = {
  id: number
  productCode: number
  name: string
  stock: string
  qty: number
  price: {
    eur: number
    usd: number
  }
  isFavorite?: boolean
}

export type Data = Product[]
