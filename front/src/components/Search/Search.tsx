import styles from './Search.module.css'
import { forwardRef } from 'react'
import { type SearchProps } from './SearchProps'
import classNames from 'classnames'

const Search = forwardRef<HTMLInputElement, SearchProps>(function Search ({
  className,
  ...props
}, ref) {
  return <div className={styles['input-wrapper']}>
    <input
      {...props}
      ref={ref}
      className={classNames(styles.input)}
    />
    <img src={'/search-icon.svg'} alt={'search-icon'} className={styles.icon}/>
  </div>
})

export default Search
