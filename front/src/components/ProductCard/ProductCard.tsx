import styles from './ProductCard.module.css'
import { type FC } from 'react'
import { type ProductCardProps } from './ProductCardProps'
import { Link } from 'react-router-dom'

const ProductCard: FC<ProductCardProps> = (props) => {
  return <Link to={`/product/${props.id}`} className={styles.link}>
    <div className={styles.card}>
      <div className={styles.head} style={{ backgroundImage: `url('${props.image}')` }}>
        <div className={styles.price}>
          {props.price}&nbsp;
          <span className={styles.currency}>₽</span>
        </div>

        <button className={styles['add-to-cart']}>
          <img src={'/card-button-icon.svg'} alt={'add to cart'}/>
        </button>

        <div className={styles.rating}>
          {props.rating}&nbsp;
          <img src={'/star-icon.svg'} alt={'star icon'}/>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.title}>{props.name}</div>
        <div className={styles.description}>{props.description}</div>
      </div>
    </div>
  </Link>
}

export default ProductCard
