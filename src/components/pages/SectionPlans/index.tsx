import styles from './styles/sectionPlans.module.scss'
import MemberShipsList from '@/components/pages/MemberShipsList'

const SectionPlans = () => {
  return (
    <div className={styles.plansWrap}>
      <MemberShipsList />
    </div>
  )
}
export default SectionPlans
