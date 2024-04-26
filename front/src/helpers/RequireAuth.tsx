import { type FC, type ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { type RootState } from '../store/store'

interface RequireAuthProps {
  children: ReactNode
}

const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
  const jwt = useSelector((s: RootState) => s.user.jwt)
  if (jwt == null) {
    return <Navigate to={'/auth/login'} replace/>
  }

  return <>{children}</>
}

export default RequireAuth
