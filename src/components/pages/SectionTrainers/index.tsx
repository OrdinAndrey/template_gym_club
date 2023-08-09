import styles from './styles/sectionTrainers.module.css'
import TrainersList from '@/components/pages/TrainersList'

const SectionTrainers = () => {
  return (
    <div className={styles.trainerWrap}>
      <TrainersList />
    </div>
  )
}
export default SectionTrainers
