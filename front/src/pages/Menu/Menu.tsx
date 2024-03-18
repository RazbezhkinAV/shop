import Headling from '../../components/Headling/Headling'
import Search from '../../components/Search/Search'
import classNames from 'classnames'
import styles from './Menu.module.css'
import ProductCard from '../../components/ProductCard/ProductCard'

const Menu = () => {
  return <>
    <div className={classNames(styles.head)}>
      <Headling>Menu</Headling>
      <Search placeholder={'Введите блюдо или состав'}/>
    </div>
    <div>
      <ProductCard id={1}
                   title={'Питса'}
                   description={'Солями'}
                   image={'/product-demo.png'}
                   price={500}
                   rating={4.5}/>
    </div>
  </>
}

export default Menu
