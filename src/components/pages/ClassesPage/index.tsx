import styles from './styles/classesPage.module.scss'
import SectionHeroPage from '@/components/pages/SectionHeroPage'
import SectionClasses from '@/components/pages/SectionClasses'
import SectionTimeTable from '@/components/pages/SectionTimeTable'

const ClassesPage = () => {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.container}>
          <SectionHeroPage page='Classes' />
        </div>
      </section>
      <section className={styles.classes}>
        <div className={styles.container}>
          <div className={styles.sectionTitle}>
            <h2>Unlimited classes</h2>
          </div>
          <SectionClasses />
        </div>
      </section>
      <section>
        <div className={styles.container}>
          <div className={styles.sectionTitle}>
            <h2>Class timetable</h2>
          </div>
          <SectionTimeTable />
        </div>
      </section>
    </>
  )
}
export default ClassesPage
