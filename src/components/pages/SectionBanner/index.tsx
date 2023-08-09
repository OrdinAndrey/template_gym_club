import styles from './styles/sectionBanner.module.css'
import AppLink from '@/components/global/AppLink'

const SectionBanner = () => {
  return (
    <div className={styles.bannerWrap}>
      <div className={styles.bannerText}>
        <h2>Get training today</h2>
        <p>
          Gimply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry’s standard.
        </p>
        <AppLink to='#' variant='primary'>
          Contact Now
        </AppLink>
      </div>
      <div className={styles.bannerPerson}>
        <img src='./assets/img/trainers/banner-person.webp' alt='' />
      </div>
    </div>
  )
}
export default SectionBanner
