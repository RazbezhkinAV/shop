import { Link, Outlet } from 'react-router-dom'
import styles from './Layout.module.css'
import Button from '../../components/Button/Button'

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
        <Link to={'/'} className={styles.link}>
          <img src={'/menu-icon.svg'} alt={'menu icon'}/>
          Menu
        </Link>
        <Link to={'/cart'} className={styles.link}>
          <img src={'/cart-icon.svg'} alt={'cart icon'}/>
          Cart
        </Link>
      </div>

      <Button className={styles.exit}>
        <img src={'/exit-icon.svg'} alt={'exit'}/>
        Exit
      </Button>
    </div>

    <div>
      <Outlet/>
    </div>

  </div>
}

export default Layout
