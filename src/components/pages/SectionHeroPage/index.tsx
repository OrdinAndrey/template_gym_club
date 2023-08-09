import AppLink from '@/components/global/AppLink'
import styles from './styles/sectionHeroPage.module.scss'
import { ReactComponent as Home } from '@/assets/icons/home.svg'
import { ReactComponent as ArrowWhite } from '@/assets/icons/arrowWhite.svg'
interface PropsInterface {
  page: string
}
const SectionHeroPage = ({ page }: PropsInterface) => {
  return (
    <div className={styles.text}>
      <h2>{page}</h2>
      <div className={styles.option}>
        <AppLink to='/'>
          <Home className={styles.icon} /> Home
          <ArrowWhite width={16} height={16} fill={'#fff'} />
        </AppLink>
        <span>{page}</span>
      </div>
    </div>
  )
}
export default SectionHeroPage
