import HomePage from '@/components/pages/HomePage'
import AboutPage from '@/components/pages/AboutPage'
import ClassesPage from '@/components/pages/ClassesPage'
import GalleryPage from '@/components/pages/GalleryPage'
import ContactsPage from '@/components/pages/ContactsPage'
import NotFound from '@/components/pages/NotFound'

export const routes = [
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/about',
    element: <AboutPage />
  },
  {
    path: '/classes',
    element: <ClassesPage />
  },
  {
    path: '/gallery',
    element: <GalleryPage />
  },
  {
    path: '/contacts',
    element: <ContactsPage />
  },
  {
    path: '*',
    element: <NotFound />
  }
]
