import styles from './styles/sectionGallery.module.css'
import BaseButton from '@/components/global/BaseButton'
import useGallery from '@/components/pages/SectionGallery/hooks/useGallery.tsx'

const SectionGallery = () => {
  const { activeCategory, handleCategoryChange, images } = useGallery()
  return (
    <div>
      <div className={styles.galleryBtn}>
        {['All', 'Fitness', 'Coaching', 'Event', 'Other'].map(
          (category, index) => (
            <BaseButton
              variant='clear'
              key={index}
              onClick={() => handleCategoryChange(category)}
              className={activeCategory === category ? styles.active : ''}
            >
              {category}
            </BaseButton>
          )
        )}
      </div>
      <div className={styles.imageGallery}>
        {images.map((image) => (
          <img
            key={image.id}
            src={`./assets/img/gallery/gallery-${image.id}.jpg.webp`}
            alt={image.categories.join(', ')}
            className={
              activeCategory === 'All' ||
              image.categories.includes(activeCategory)
                ? `${styles.image} ${styles.appear}`
                : `${styles.image} ${styles.disappear}`
            }
          />
        ))}
      </div>
    </div>
  )
}
export default SectionGallery
