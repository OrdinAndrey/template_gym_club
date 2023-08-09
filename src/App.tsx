import MainLayout from '@/layouts/MainLayout'
import { useRoutes } from 'react-router-dom'
import { routes } from '@/router/routes.tsx'
import NavBar from '@/components/pages/NavBar'
import Footer from '@/components/pages/Footer'
function App() {
  const routing = useRoutes(routes)
  return (
    <MainLayout header={<NavBar />} content={routing} footer={<Footer />} />
  )
}

export default App
