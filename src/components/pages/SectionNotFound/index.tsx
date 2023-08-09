import styles from './styles/sectionNotFound.module.scss'
import AppLink from '@/components/global/AppLink'

const SectionNotFound = () => {
  return (
    <div className={styles.wrapper}>
      <h1>404</h1>
      <p>
        I'm afraid you've found a page that doesn't exist on GoGym. That can
        happen when you follow a link to something that has since been deleted.
        Or the link was incorrect to begin&nbsp;with.
      </p>
      <p>
        Sorry about that. We've logged the error for review, in case it's our
        fault.
      </p>
      <ul>
        <li>
          <AppLink to='/'>Go to the homepage</AppLink>
        </li>
        <li>
          <AppLink to='./contacts'>Contacts</AppLink>
        </li>
      </ul>
    </div>
  )
}
export default SectionNotFound
