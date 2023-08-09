import styles from './styles/homePage.module.scss'
import Carousel from '@/components/pages/Carousel'
import SectionHero from '@/components/pages/SectionHero'
import SectionAbout from '@/components/pages/SectionAbout'
import SectionServices from '@/components/pages/SectionServices'
import SectionTrainers from '@/components/pages/SectionTrainers'
import SectionBanner from '@/components/pages/SectionBanner'
import SectionPlans from '@/components/pages/SectionPlans'
const HomePage = () => {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.container}>
          <SectionHero />
        </div>
      </section>
      <section className={styles.story}>
        <div className={styles.container}>
          <SectionAbout />
        </div>
      </section>
      <section className={styles.services}>
        <div className={styles.containerFluid}>
          <SectionServices />
        </div>
      </section>
      <section className={styles.classes}>
        <div className={styles.container}>
          <div className={styles.sectionTitle}>
            <h2>Unlimited classes</h2>
          </div>
          <Carousel type='workout' />
        </div>
      </section>
      <section className={styles.trainer}>
        <div className={styles.container}>
          <div className={styles.sectionTitle}>
            <h2>Expert trainers</h2>
          </div>
          <SectionTrainers />
        </div>
      </section>
      <section className={styles.stories}>
        <div className={styles.container}>
          <div className={styles.sectionTitle}>
            <h2>Success stories</h2>
          </div>
          <Carousel type='stories' />
        </div>
      </section>
      <section className={styles.banner}>
        <div className={styles.container}>
          <SectionBanner />
        </div>
      </section>
      <section className={styles.membership}>
        <div className={styles.container}>
          <div className={styles.sectionTitle}>
            <h2>Membership plans</h2>
          </div>
          <SectionPlans />
        </div>
      </section>
    </>
  )
}
export default HomePage
