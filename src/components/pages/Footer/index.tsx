import styles from './styles/footer.module.scss'
import BaseButton from '@/components/global/BaseButton'
import { ReactComponent as Send } from '@/assets/icons/send.svg'
import { ReactComponent as Facebook } from '@/assets/icons/social/facebook.svg'
import { ReactComponent as Vk } from '@/assets/icons/social/vk.svg'
import { ReactComponent as Instagram } from '@/assets/icons/social/instagram.svg'
import { ReactComponent as Telegram } from '@/assets/icons/social/telegram.svg'
import AppLink from '@/components/global/AppLink'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <>
      <section className={styles.footerBanner}>
        <div className={styles.containerFluid}>
          <div className={styles.bannerWrap}>
            <div className={styles.bannerLeft}>
              <span>New member</span>
              <h2>7 days for free</h2>
              <p>
                Complete the training sessions with us, surely you will be happy
              </p>
              <AppLink to='#' variant='primary'>
                Get Started
              </AppLink>
            </div>
            <div className={styles.bannerRight}>
              <span>contact us</span>
              <h2>09 746 204</h2>
              <p>
                If you trust us on your journey they dark sex does not
                disappoint you!
              </p>
              <AppLink to='#' variant='primary'>
                Get Started
              </AppLink>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.container}>
        <div className={styles.contacts}>
          <div>
            <span>Phone</span>
            <p>(495) 925 9999 - (495) 926 9999</p>
          </div>
          <div>
            <span>Address</span>
            <p>72 Kangnam, 45 Opal Point Suite 391</p>
          </div>
          <div>
            <span>Email</span>
            <p>contactcompany@Gojym.com</p>
          </div>
        </div>
        <div className={styles.subscribe}>
          <div className={styles.subscribeText}>
            <h4>Subscribe To Our Mailing List</h4>
            <p>Sign up to receive the latest information </p>
          </div>
          <form action='#' className={styles.subscribeForm}>
            <input type='text' placeholder='Enter Your Mail' />
            <BaseButton variant='clear' className={styles.subscribeBtn}>
              <Send className={styles.subIcon} />
            </BaseButton>
          </form>
        </div>
        <div className={styles.copyright}>
          <span>© Copyright ©{year} All rights reserved by</span>
          <ul>
            <li>
              <AppLink to='#'>Term&amp;Use</AppLink>
            </li>
            <li>
              <AppLink to='#'>Privacy Policy</AppLink>
            </li>
          </ul>
          <div className={styles.social}>
            <ul>
              <li>
                <AppLink to={'#'}>
                  <Facebook className={styles.socIcon} />
                </AppLink>
              </li>
              <li>
                <AppLink to={'#'}>
                  <Vk className={styles.socIcon} />
                </AppLink>
              </li>
              <li>
                <AppLink to={'#'}>
                  <Instagram className={styles.socIcon} />
                </AppLink>
              </li>
              <li>
                <AppLink to={'#'}>
                  <Telegram className={styles.socIcon} />
                </AppLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
