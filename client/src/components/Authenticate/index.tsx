import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'

import { UserStore } from '../../stores'

type AuthenticateProps = {
  options?: {
    mustLogin: boolean
  },
  children: JSX.Element
}

const Authenticate = (props: AuthenticateProps) => {
  const { options } = props
  const { mustLogin } = options
  const [user] = useContext(UserStore)

  if (mustLogin) {
    if (!user) {
      return <Navigate to='/' />
    }
  } else {
    if (user) {
      return <Navigate to='/' />
    }
  }

  return <>{props.children}</>
}

export default Authenticate
