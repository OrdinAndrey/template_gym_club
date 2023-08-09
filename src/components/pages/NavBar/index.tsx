import styles from './styles/navBar.module.scss'
import AppLink from '@/components/global/AppLink'
import { ReactComponent as Logo } from '@/assets/icons/logo.svg'
import useNavBar from './hooks/useNavBar.ts'

const NavBar = () => {
  const { sidebarRef, burgerRef, links } = useNavBar()
  return (
    <div className={styles.headWrap}>
      <div className={styles.container}>
        <AppLink to='/' className={styles.logo}>
          <Logo width={120} height={35} />
        </AppLink>
        <input className={styles.sideMenu} type='checkbox' id='side-menu' />
        <label className={styles.burger} htmlFor='side-menu' ref={burgerRef}>
          <span className={styles.burgerLine}></span>
        </label>
        <nav className={styles.headNav} ref={sidebarRef}>
          <ul className={styles.mainMenu}>
            {links.map((link) => (
              <li key={link.link}>
                <AppLink to={link.url}>{link.link}</AppLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default NavBar
