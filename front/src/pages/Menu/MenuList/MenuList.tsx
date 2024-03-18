import { type FC } from 'react'
import { type MenuListProps } from './MenuListProps'
import ProductCard from '../../../components/ProductCard/ProductCard'
import styles from './MenuList.module.css'

const MenuList: FC<MenuListProps> = ({ products }) => {
  return <div className={styles.wrapper}>
    {
      products.map(p => (<ProductCard key={p.id}
                                      id={p.id}
                                      name={p.name}
                                      description={p.ingredients.join(', ')}
                                      image={p.image}
                                      price={p.price}
                                      rating={p.rating}/>
      ))
    }
  </div>
}

export default MenuList
