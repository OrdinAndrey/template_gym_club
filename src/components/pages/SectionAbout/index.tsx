import AppLink from '@/components/global/AppLink'
import styles from './styles/sectionAbout.module.scss'
interface PropsInterface {
  variantPage?: boolean
}

const SectionAbout = ({ variantPage }: PropsInterface) => {
  return (
    <div className={styles.storyWrap}>
      <div className={styles.aboutVideo}>
        <img src='../assets/img/youtube.webp' alt='' />
      </div>
      <div className={styles.aboutText}>
        <h2>Story About Us</h2>
        <p>
          Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean
          pretium sollicitudin, nascetur auci elit consequat ipsutissem niuis
          sed odio sit amet nibh vulputate cursus a amet.
        </p>
        {variantPage ? (
          <>
            <p>
              Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,
              gravida quam semper libero sit amet.
            </p>
            <img src='./assets/img/about-signature.png.webp' alt='' />
            <div className={styles.author}>
              <h4>Lettie Chavez</h4>
              <span>CEO - Founder</span>
            </div>
          </>
        ) : (
          <>
            <p>
              Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,
              gravida quam semper libero sit amet. Etiam rhoncus. Maecenas
              tempus, tellus eget condimentum rhoncus, gravida quam semper
              libero sit amet.
            </p>
            <AppLink to='#' variant='primary'>
              Read More
            </AppLink>
          </>
        )}
      </div>
    </div>
  )
}
export default SectionAbout
