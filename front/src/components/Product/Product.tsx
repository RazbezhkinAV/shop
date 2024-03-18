import { useLoaderData } from 'react-router-dom'
import { type ProductEntity } from '../../interfaces/product.interface'

const Product = () => {
  const data = useLoaderData() as ProductEntity
  return <div>Product - {data.name}</div>
}

export default Product
