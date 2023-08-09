import styles from './styles/galleryPage.module.scss'
import SectionHeroPage from '@/components/pages/SectionHeroPage'
import SectionGallery from '@/components/pages/SectionGallery'

const GalleryPage = () => {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.container}>
          <SectionHeroPage page='Gallery' />
        </div>
      </section>
      <section className={styles.gallery}>
        <div className={styles.container}>
          <SectionGallery />
        </div>
      </section>
    </>
  )
}
export default GalleryPage
