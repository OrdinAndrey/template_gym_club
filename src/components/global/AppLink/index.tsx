import styles from './styles/appLink.module.scss'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import { PropsInterface } from '@/components/global/AppLink/types'

const AppLink = ({
  to,
  className,
  children,
  variant = 'clear',
  ...otherProps
}: PropsInterface) => {
  return (
    <>
      <Link
        to={to}
        className={classNames(styles.appLink, className, styles[variant])}
        {...otherProps}
      >
        {children}
      </Link>
    </>
  )
}

export default AppLink
