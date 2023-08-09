import styles from './styles/sectionContacts.module.scss'
import icon_1 from '@/assets/icons/contacts/icon-1.png.webp'
import icon_2 from '@/assets/icons/contacts/icon-2.png.webp'
import icon_3 from '@/assets/icons/contacts/icon-3.png.webp'
import AppLink from '@/components/global/AppLink'
const SectionContacts = () => {
  return (
    <div className={styles.contactsWrap}>
      <div className={styles.info}>
        <h4>Contacts Us</h4>
        <div className={styles.adress}>
          <div className={styles.widget}>
            <div className={styles.icon}>
              <img src={icon_1} alt='' />
            </div>
            <div className={styles.text}>
              <h5>Our Location</h5>
              <p>60-49 Burakova st. Moscow</p>
            </div>
          </div>
          <div className={styles.widget}>
            <div className={styles.icon}>
              <img src={icon_2} alt='' />
            </div>
            <div className={styles.text}>
              <h5>Phone:</h5>
              <p>495 925-8888</p>
            </div>
          </div>
          <div className={styles.widget}>
            <div className={styles.icon}>
              <img src={icon_3} alt='' />
            </div>
            <div className={styles.text}>
              <h5>Mail</h5>
              <p>hello@gojym.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.contactForm}>
        <h4>Leave A Comment</h4>
        <form action='#'>
          <div className={styles.row}>
            <input type='text' placeholder='Your name' />
            <input type='text' placeholder='Your email' />
          </div>
          <div className={styles.row}>
            <textarea placeholder='Your messages'></textarea>
          </div>
        </form>
        <AppLink to='#' variant='primary'>
          Send Message
        </AppLink>
      </div>
    </div>
  )
}

export default SectionContacts
