import { HashRouter, Route, Routes } from 'react-router-dom'
import RootLayout from './components/layout/RootLayout'
import MainPage from './pages/MainPage'

const Router = () => {
  return (
    <RootLayout>
      <HashRouter>
        <Routes>
          <Route path={'/'} element={<MainPage />} />
        </Routes>
      </HashRouter>
    </RootLayout>
  )
}
export default Router
