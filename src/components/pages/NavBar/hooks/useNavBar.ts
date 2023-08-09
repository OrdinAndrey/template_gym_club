import { MutableRefObject, useEffect, useRef } from 'react'
interface ILinks {
  url: string
  link: string
}
const useNavBar = () => {
  const links: ILinks[] = [
    { url: '/', link: 'Home' },
    { url: '/about', link: 'About' },
    { url: '/classes', link: 'Classes' },
    { url: '/gallery', link: 'Gallery' },
    { url: '/contacts', link: 'Contacts' }
  ]
  const sidebarRef: MutableRefObject<HTMLDivElement | null> = useRef(null)
  const burgerRef: MutableRefObject<HTMLLabelElement | null> = useRef(null)
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        burgerRef.current &&
        !burgerRef.current.contains(event.target as HTMLElement) &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as HTMLElement)
      ) {
        if (checkbox && checkbox.checked) {
          checkbox.checked = false
        }
      }
    }
    const checkbox = document.getElementById('side-menu') as HTMLInputElement

    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  return { sidebarRef, burgerRef, links }
}
export default useNavBar
