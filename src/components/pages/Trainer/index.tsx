import styles from './styles/trainer.module.scss'
import AppLink from '@/components/global/AppLink'
import { ReactComponent as Facebook } from '@/assets/icons/social/facebook-dark.svg'
import { ReactComponent as Vk } from '@/assets/icons/social/vk-dark.svg'
import { ReactComponent as Instagram } from '@/assets/icons/social/instagram-dark.svg'
import { ReactComponent as Telegram } from '@/assets/icons/social/telegram-dark.svg'
import { PropsInterface } from './types'
const Trainer = ({
  number,
  nameTrainer,
  role,
  description
}: PropsInterface) => {
  return (
    <div className={styles.singleTrainer}>
      <img
        src={`./assets/img/trainers/trainer-${number}.webp`}
        alt={`trainer №${number}`}
      />
      <div className={styles.text}>
        <h5>{nameTrainer}</h5>
        <span>{role}</span>
        <p>{description}</p>
        <div className={styles.social}>
          <AppLink to='#'>
            <Facebook className={styles.socIcon} />
          </AppLink>
          <AppLink to='#'>
            <Vk className={styles.socIcon} />
          </AppLink>
          <AppLink to='#'>
            <Instagram className={styles.socIcon} />
          </AppLink>
          <AppLink to='#'>
            <Telegram className={styles.socIcon} />
          </AppLink>
        </div>
      </div>
    </div>
  )
}
export default Trainer
