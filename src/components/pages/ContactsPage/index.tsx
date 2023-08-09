import styles from './styles/contactsPage.module.scss'
import SectionHeroPage from '@/components/pages/SectionHeroPage'
import SectionMap from '@/components/pages/SectionMap'
import SectionContacts from '@/components/pages/SectionContacts'

const ContactsPage = () => {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.container}>
          <SectionHeroPage page='Contacts' />
        </div>
      </section>
      <section>
        <div className={styles.containerFluid}>
          <SectionMap />
        </div>
      </section>
      <section className={styles.contact}>
        <div className={styles.container}>
          <SectionContacts />
        </div>
      </section>
    </>
  )
}
export default ContactsPage
