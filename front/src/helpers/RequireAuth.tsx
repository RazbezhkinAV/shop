import { type FC, type ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

interface RequireAuthProps {
  children: ReactNode
}

const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
  const jwt = 'null'
  if (jwt == null) {
    return <Navigate to={'/auth/login'} replace/>
  }

  return <>{children}</>
}

export default RequireAuth
