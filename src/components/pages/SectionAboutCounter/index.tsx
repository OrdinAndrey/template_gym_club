import styles from './styles/sectionAboutCounter.module.css'

const SectionAboutCounter = () => {
  return (
    <div className={styles.text}>
      <div className={styles.counter}>
        <h1>98</h1>
        <p>Programs</p>
      </div>
      <div className={styles.counter}>
        <h1>14</h1>
        <p>Locations</p>
      </div>
      <div className={styles.counter}>
        <h1>50k+</h1>
        <p>Members</p>
      </div>
      <div className={styles.counter}>
        <h1>34</h1>
        <p>Coaches</p>
      </div>
    </div>
  )
}
export default SectionAboutCounter
