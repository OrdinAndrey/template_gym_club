import styles from './styles/slide.module.scss'
import classNames from 'classnames'
import { PropsInterface } from './types'
import { ReactComponent as UserIcon } from '@/assets/icons/user.svg'

const Slide = ({
  className,
  variant = 'workout',
  head,
  text,
  role,
  id
}: PropsInterface) => {
  if (variant === 'workout')
    return (
      <div className={classNames(styles.slide, className, styles[variant])}>
        <img src={`./assets/img/workout/classes-${id}.jpg.webp`} alt='' />
        <div className={styles.text}>
          <h4>{head}</h4>
          <span>
            <UserIcon width={15} height={15} /> {text}
          </span>
        </div>
      </div>
    )
  if (variant === 'stories')
    return (
      <div className={classNames(styles.slide, className, styles[variant])}>
        <div className={styles.slideStory}>
          <p>{text}</p>
          <div className={styles.image}>
            <img src={`./assets/img/stories/story-${id}.jpg.webp`} alt='' />
            <div className={styles.quote}>
              <img src={'./assets/img/stories/quote-left.png.webp'} alt='' />
            </div>
          </div>
          <div className={styles.author}>
            <h4>{head}</h4>
            <span>{role}</span>
          </div>
        </div>
      </div>
    )
}
export default Slide
