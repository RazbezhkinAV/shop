import { NavLink, Outlet } from 'react-router-dom'
import styles from './Layout.module.css'
import Button from '../../components/Button/Button'
import classNames from 'classnames'

const Layout = () => {
  return <div className={styles.layout}>
    <div className={styles.sidebar}>

      <div className={styles.user}>
        <img src={'/avatar.png'}
             alt={'avatar'}
             className={styles.avatar}
        />
        <div className={styles.name}>
          John Doe
        </div>
        <div className={styles.email}>
          johon.doe@mail.ru
        </div>
      </div>

      <div className={styles.menu}>
        <NavLink to={'/'}
                 className={({ isActive }) => classNames(styles.link, {
                   [styles.active]: isActive
                 })}
        >
          <img src={'/menu-icon.svg'} alt={'menu icon'}/>
          Menu
        </NavLink>
        <NavLink to={'/cart'}
                 className={({ isActive }) => classNames(styles.link, {
                   [styles.active]: isActive
                 })}
        >
          <img src={'/cart-icon.svg'} alt={'cart icon'}/>
          Cart
        </NavLink>
      </div>

      <Button className={styles.exit}>
        <img src={'/exit-icon.svg'} alt={'exit'}/>
        Exit
      </Button>
    </div>

    <div className={styles.content}>
      <Outlet/>
    </div>

  </div>
}

export default Layout
