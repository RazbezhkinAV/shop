import styles from './Input.module.css'
import { forwardRef } from 'react'
import { type InputProps } from './InputProps'
import classNames from 'classnames'

const Input = forwardRef<HTMLInputElement, InputProps>(function Input ({
  isValid = true,
  className,
  ...props
}, ref) {
  return <input
    {...props}
    ref={ref}
    className={classNames(styles.input, {
      [styles.invalid]: !isValid
    })}
  />
})

export default Input
