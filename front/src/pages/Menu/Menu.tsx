import Headling from '../../components/Headling/Headling'
import Search from '../../components/Search/Search'
import classNames from 'classnames'
import styles from './Menu.module.css'
import ProductCard from '../../components/ProductCard/ProductCard'
import type { Product } from '../../interfaces/product.interface'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { PREFIX } from '../../helpers/API'

const Menu = () => {
  const [products, setProducts] = useState<Product[]>([])

  const getMenu = async () => {
    try {
      const { data } = await axios.get<Product[]>(`${PREFIX}/products`)
      setProducts(data)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    void getMenu()
  }, [])

  return <>
    <div className={classNames(styles.head)}>
      <Headling>Menu</Headling>
      <Search placeholder={'Введите блюдо или состав'}/>
    </div>
    <div>
      {
        products.map(p => {
          return <ProductCard key={p.id}
                              id={p.id}
                              name={p.name}
                              description={p.ingredients.join(', ')}
                              image={p.image}
                              price={p.price}
                              rating={p.rating}/>
        })
      }
    </div>
  </>
}

export default Menu
