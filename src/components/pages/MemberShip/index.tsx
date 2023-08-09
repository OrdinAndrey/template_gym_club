import styles from './styles/memberShip.module.scss'
import { PropsInterface } from './types'
import AppLink from '@/components/global/AppLink'
const MemberShip = ({ cost, title, trainer }: PropsInterface) => {
  return (
    <div className={styles.plan}>
      <div className={styles.planTitle}>
        <h4>{title}</h4>
        <div className={styles.triangle}></div>
      </div>
      <h2 className={styles.price}>
        ${cost}
        <span>/01 mo</span>
      </h2>
      <ul>
        <li>
          <p>Duration</p>
          <span>12 months</span>
        </li>
        <li>
          <p>Personal trainer</p>
          <span>{trainer} person</span>
        </li>
        <li>
          <p>Amount of people</p>
          <span>1 person</span>
        </li>
        <li>
          <p>Number of visits</p>
          <span>Unlimited</span>
        </li>
      </ul>
      <AppLink to='#' variant='secondary'>
        Start Now
      </AppLink>
    </div>
  )
}
export default MemberShip
