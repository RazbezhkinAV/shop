import styles from './Button.module.css'
import type { ButtonProps } from './ButtonProps'
import classNames from 'classnames'
import { type FC } from 'react'

const Button: FC<ButtonProps> = ({
  children,
  className,
  appearance = 'small',
  ...props
}) => {
  return <button className={classNames(styles.button,
    styles.accent,
    className, {
      [styles.big]: appearance === 'big',
      [styles.small]: appearance === 'small'
    })}
                 {...props}
  >{children}</button>
}

export default Button
