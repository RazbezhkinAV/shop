import Headling from '../../components/Headling/Headling'
import Search from '../../components/Search/Search'
import classNames from 'classnames'
import styles from './Menu.module.css'
import type { ProductEntity } from '../../interfaces/product.interface'
import { useEffect, useState } from 'react'
import axios, { AxiosError } from 'axios'
import { PREFIX } from '../../helpers/API'
import MenuList from './MenuList/MenuList'

const Menu = () => {
  const [products, setProducts] = useState<ProductEntity[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | undefined>()
  const getMenu = async () => {
    try {
      setIsLoading(true)
      const { data } = await axios.get<ProductEntity[]>(`${PREFIX}/products`)
      setProducts(data)
      setIsLoading(false)
    } catch (e) {
      console.error(e)
      if (e instanceof AxiosError) {
        setError(e.message)
      }
      setIsLoading(false)
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
        error != null && <>{error}</>
      }
      {
        !isLoading && <MenuList products={products}/>
      }
      {
        isLoading && 'Loading Products...'
      }
    </div>
  </>
}

export default Menu
