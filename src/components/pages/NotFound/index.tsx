import styles from './styles/notFound.module.scss'
import SectionHeroPage from '@/components/pages/SectionHeroPage'
import SectionNotFound from '@/components/pages/SectionNotFound'
const NotFound = () => {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.container}>
          <SectionHeroPage page='404' />
        </div>
      </section>
      <section className={styles.notFound}>
        <div className={styles.container}>
          <SectionNotFound />
        </div>
      </section>
    </>
  )
}
export default NotFound
