import type React from 'react'
import { type FC } from 'react'

interface WhereProps {
  condition: boolean
  children: React.ReactNode
}

const Where: FC<WhereProps> = ({
  condition,
  children
}) => {
  return condition ? <>{children}</> : null
}

export default Where
