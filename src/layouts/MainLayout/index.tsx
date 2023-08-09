import styles from './styles/mainLayout.module.scss'
import { ReactElement } from 'react'
import '@/styles/index.scss'
interface PropsInterface {
  header: ReactElement
  content: ReactElement | null
  footer: ReactElement
}
const MainLayout = ({ content, header, footer }: PropsInterface) => {
  return (
    <>
      <header className={styles.header}>{header}</header>
      <main className={styles.content}>{content}</main>
      <footer className={styles.footer}>{footer}</footer>
    </>
  )
}

export default MainLayout
