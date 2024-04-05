import { Await, useLoaderData } from 'react-router-dom'
import { type ProductEntity } from '../../interfaces/product.interface'
import { Suspense } from 'react'

const Product = () => {
  const data = useLoaderData() as { data: ProductEntity }
  return <div>
    <Suspense fallback={'Loading...'}>
      <Await resolve={data.data}>
        {
          ({ data }: { data: ProductEntity }) => (
            <>Product - {data.name}</>
          )
        }
      </Await>
    </Suspense>
  </div>
}

export default Product
