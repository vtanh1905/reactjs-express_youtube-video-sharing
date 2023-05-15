import React from 'react'
import { Layout as LayoutAntd, Button, Space, Spin, FormInstance } from 'antd'
import { Link, Outlet } from 'react-router-dom'
import { HomeOutlined, LoadingOutlined } from '@ant-design/icons'
import './style.scss'
import { useNavigate } from 'react-router-dom'

import Login from '../Login'

const { Header, Content } = LayoutAntd

type LayoutProps = {
  user?: {
    email: string
  }
  loading?: boolean
  onLogin?: (values: any, form: FormInstance) => Promise<void>
  onLogout?: () => void
}

const Layout = (props: LayoutProps) => {
  const { user, loading, onLogin, onLogout } = props

  const navigate = useNavigate()

  if (loading) {
    return (
      <div className='loading-container'>
        <Spin indicator={<LoadingOutlined style={{ fontSize: 100 }} spin />} />
      </div>
    )
  }

  return (
    <LayoutAntd className='layout'>
      <Header className='header'>
        <div className='header-content'>
          <Link to='/'>
            <h1 className='header-text-logo'>
              <HomeOutlined /> Funny Movies
            </h1>
          </Link>
          {!user ? (
            <div className='login-form'>
              <Login onSubmit={onLogin} />
              <Button onClick={() => navigate('/registry')}>Registry</Button>
            </div>
          ) : (
            <div className='user-info'>
              <Space wrap>
                <span>
                  Welcome <b>{user.email}</b>
                </span>
                <Button type='primary' onClick={() => navigate('/share-video')}>
                  Share Video
                </Button>
                <Button type='primary' danger onClick={onLogout}>
                  Logout
                </Button>
              </Space>
            </div>
          )}
        </div>
      </Header>
      <Content>
        <div className='content'>
          <Outlet />
        </div>
      </Content>
    </LayoutAntd>
  )
}

export default Layout
