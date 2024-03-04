import Headling from '../../components/Headling/Headling'
import Search from '../../components/Search/Search'
import classNames from 'classnames'
import styles from './Menu.module.css'

const Menu = () => {
  return <div className={classNames(styles.head)}>
    <Headling>Menu</Headling>
    <Search placeholder={'Введите блюдо или состав'}/>
  </div>
}

export default Menu
