import styles from './styles/sectionServices.module.css'
import icon_1 from '@/assets/icons/service/service-icon-1.png.webp'
import icon_3 from '@/assets/icons/service/service-icon-3.png.webp'
import icon_2 from '@/assets/icons/service/service-icon-2.png.webp'
import icon_4 from '@/assets/icons/service/service-icon-4.png.webp'

const SectionServices = () => {
  return (
    <>
      <div className={styles.servicesPic}></div>
      <div className={styles.servicesItems}>
        <div className={styles.columnGray}>
          <div className={styles.item}>
            <img src={icon_1} alt='Strategies' />
            <h4>Strategies</h4>
            <p>
              Aenean massa. Cum sociis Theme et natoque penatibus et magnis dis
              part urient montes.
            </p>
          </div>
          <div className={styles.item}>
            <img src={icon_3} alt='Workout' />
            <h4>Workout</h4>
            <p>
              Aenean massa. Cum sociis Theme et natoque penatibus et magnis dis
              part urient montes.
            </p>
          </div>
        </div>

        <div className={styles.columnBlack}>
          <div className={styles.item}>
            <img src={icon_2} alt='Strategies' />
            <h4>Yoga</h4>
            <p>
              Aenean massa. Cum sociis Theme et natoque penatibus et magnis dis
              part urient montes.
            </p>
          </div>
          <div className={styles.item}>
            <img src={icon_4} alt='Workout' />
            <h4>Weight Loss</h4>
            <p>
              Aenean massa. Cum sociis Theme et natoque penatibus et magnis dis
              part urient montes.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
export default SectionServices
