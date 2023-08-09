import styles from './styles/aboutPage.module.scss'
import SectionHeroPage from '@/components/pages/SectionHeroPage'
import SectionAbout from '@/components/pages/SectionAbout'
import SectionAboutCounter from '@/components/pages/SectionAboutCounter'
import SectionGymAward from '@/components/pages/SectionGymAward'
import SectionBanner from '@/components/pages/SectionBanner'
import SectionTrainers from '@/components/pages/SectionTrainers'

const AboutPage = () => {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.container}>
          <SectionHeroPage page='About' />
        </div>
      </section>
      <section>
        <div className={styles.container}>
          <SectionAbout variantPage />
        </div>
      </section>
      <section>
        <div className={styles.container}>
          <SectionAboutCounter />
        </div>
      </section>
      <section>
        <div className={styles.container}>
          <SectionGymAward />
        </div>
      </section>
      <section className={styles.banner}>
        <div className={styles.container}>
          <SectionBanner />
        </div>
      </section>
      <section className={styles.trainer}>
        <div className={styles.sectionTitle}>
          <h2>Expert trainers</h2>
        </div>
        <div className={styles.container}>
          <SectionTrainers />
        </div>
      </section>
    </>
  )
}
export default AboutPage
