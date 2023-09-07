import { ISlideWorkout } from '@/components/pages/Carousel/types'

const useSectionClasses = () => {
  const slides: ISlideWorkout[] = [
    { id: 1, role: 'Yoga', text: 'Ryan Knight' },
    { id: 2, role: 'Running', text: 'Randy Rivera' },
    { id: 3, role: 'Personal Training', text: 'Cole Robertson' },
    { id: 4, role: 'Karate', text: 'Kevin McCormick' },
    { id: 5, role: 'Dance', text: 'Russell Lane' },
    { id: 6, role: 'Weight Loss', text: ' Ryan Scott' },
    { id: 7, role: 'Personal Training', text: 'Cole Robertson' },
    { id: 8, role: 'Weight Loss', text: 'Ryan Scott' },
    { id: 9, role: 'Crossfit', text: 'Chester Bowen' }
  ]
  return { slides }
}
export default useSectionClasses
