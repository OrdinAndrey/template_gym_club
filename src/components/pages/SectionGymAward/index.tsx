import styles from './styles/sectionGymAward.module.css'

const SectionAboutCounter = () => {
  return (
    <div className={styles.awardWrap}>
      <div className={styles.text}>
        <h2>Best gym award</h2>
        <p>
          Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean
          pretium sollicitudin, nascetur auci elit consequat ipsutissem niuis
          sed odio sit amet nibh vulputate cursus a amet.
        </p>
        <p>
          Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,
          gravida quam semper libero sit amet. Etiam rhoncus. Maecenas tempus,
          tellus eget condimentum rhoncus, gravida quam semper libero sit amet.
        </p>
      </div>
      <img src='./assets/img/award.jpg.webp' alt='' />
    </div>
  )
}
export default SectionAboutCounter
