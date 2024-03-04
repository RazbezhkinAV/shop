import { type FC } from 'react'
import { type HeadlingProps } from './HeadlingProps'
import classNames from 'classnames'
import styles from './Headling.module.css'

const Headling: FC<HeadlingProps> = ({
  children,
  className,
  ...props
}) => {
  return <h1 className={classNames(styles.h1)} {...props}>
    {children}
  </h1>
}

export default Headling
