import Slider from 'react-slick'
import styles from './styles/carousel.module.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slide from '@/components/pages/Slide'
import useCarousel from './hooks/useCarousel.tsx'
import { PropsInterface } from '@/components/global/Carousel/types'
const Carousel = ({ type }: PropsInterface) => {
  const { slidesWorkout, settingsWorkout, settingStories, slidesStories } =
    useCarousel()
  if (type === 'workout')
    return (
      <div className={styles.containerWorkout}>
        <Slider {...settingsWorkout}>
          {slidesWorkout.map((slide) => (
            <Slide
              key={slide.id}
              head={slide.role}
              text={slide.text}
              id={slide.id}
            />
          ))}
        </Slider>
      </div>
    )
  if (type === 'stories')
    return (
      <div className={styles.containerStories}>
        <Slider {...settingStories}>
          {slidesStories.map((slide) => (
            <Slide
              variant='stories'
              key={slide.id}
              id={slide.id}
              head={slide.name}
              text={slide.text}
              role={slide.role}
            />
          ))}
        </Slider>
      </div>
    )
}
export default Carousel
