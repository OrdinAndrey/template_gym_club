import styles from './styles/sectionClasses.module.css'
import Slide from '@/components/pages/Slide'
import useSectionClasses from '@/components/pages/SectionClasses/hooks/useSectionClasses.ts'

const SectionClasses = () => {
  const { slides } = useSectionClasses()
  return (
    <div className={styles.classesWrap}>
      {slides.map((slide) => (
        <Slide
          className={styles.singleClass}
          key={slide.id}
          head={slide.role}
          text={slide.text}
          id={slide.id}
        />
      ))}
    </div>
  )
}
export default SectionClasses
