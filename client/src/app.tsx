import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { FormInstance, notification } from 'antd'

import { Layout } from './components'
import { HomePage, RegistryPage, ShareVideoPage } from './pages'
import { UserStore } from './stores'
import { cookies } from './utils'
import { loginApi } from './apis'

const routes = [
  {
    path: '/',
    component: (props?: any) => <HomePage {...props} />
  },
  {
    path: '/registry',
    component: (props?: any) => <RegistryPage {...props} />
  },
  {
    path: '/share-video',
    component: (props?: any) => <ShareVideoPage {...props} />
  }
]

const App = () => {
  const [user, setUser] = useContext(UserStore)

  const onLogin = async (values: any, form: FormInstance) => {
    const { email, password } = values
    try {
      const { data } = await loginApi(email, password)
      // Set User
      setUser({
        email
      })
      // Set Token to Cookie
      cookies.set('token', data.token)
    } catch (error) {
      notification.error({
        message: `Error`,
        description: error.response.data.error.message || 'Login Failed',
        placement: 'bottomRight'
      })
      form.resetFields()
    }
  }

  const onLogout = () => {
    setUser(null)
    cookies.remove('token')
  }

  return (
    <Router>
      <Layout user={user} onLogout={onLogout} onLogin={onLogin}>
        <div>
          <Routes>
            {routes.map((route, i) => (
              <Route path={route.path} key={i} element={route.component()} />
            ))}
          </Routes>
        </div>
      </Layout>
    </Router>
  )
}

export default App
