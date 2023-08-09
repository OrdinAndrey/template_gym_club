import styles from '../styles/carousel.module.scss'
import { ReactComponent as Arrow } from '@/assets/icons/arrow.svg'
import { ArrowProps, ISlideStories, ISlideWorkout } from '../types'

const useCarousel = () => {
  const slidesWorkout: ISlideWorkout[] = [
    { id: 1, role: 'Yoga', text: 'Ryan Knight' },
    { id: 2, role: 'Running', text: 'Randy Rivera' },
    { id: 3, role: 'Personal Training', text: 'Cole Robertson' },
    { id: 4, role: 'Karate', text: 'Kevin McCormick' },
    { id: 5, role: 'Dance', text: 'Russell Lane' },
    { id: 6, role: 'Weight Loss', text: ' Ryan Scott' },
    { id: 7, role: 'Personal Training', text: 'Cole Robertson' },
    { id: 8, role: 'Weight Loss', text: 'Ryan Scott' }
  ]
  const slidesStories: ISlideStories[] = [
    {
      id: 1,
      name: 'Milena Powers',
      role: 'Actor',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor\n' +
        'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\n' +
        'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
    },
    {
      id: 2,
      name: 'Patrick Cortez',
      role: 'Teacher',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor\n' +
        'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\n' +
        'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
    },
    {
      id: 3,
      name: 'Julia Wagner',
      role: 'Doctor',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor\n' +
        'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\n' +
        'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
    }
  ]
  const settingsWorkout = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerPadding: '60px',
    rows: 2,
    appendDots: (dots: true) => (
      <div>
        <ul className={styles.customDots}>{dots}</ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  function NextArrow(props: ArrowProps) {
    const { onClick } = props
    return <Arrow className={styles.nextArrow} onClick={onClick} />
  }

  function PrevArrow(props: ArrowProps) {
    const { onClick } = props
    return <Arrow className={styles.prevArrow} onClick={onClick} />
  }
  const settingStories = {
    infinite: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    speed: 2500,
    autoplay: true,
    autoplaySpeed: 5000
  }

  return { slidesWorkout, settingsWorkout, settingStories, slidesStories }
}

export default useCarousel
