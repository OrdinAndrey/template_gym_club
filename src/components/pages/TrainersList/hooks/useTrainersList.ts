import { Trainer } from '../types'

const useTrainersList = () => {
  const trainers: Trainer[] = [
    {
      id: 1,
      name: 'Milena Powers',
      role: 'Leader',
      description:
        'non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
    },
    {
      id: 2,
      name: 'Patrick Cortez',
      role: 'Gym coach',
      description:
        'non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
    },
    {
      id: 3,
      name: 'Julia Wagner',
      role: 'Dance trainer',
      description:
        'non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
    }
  ]
  return { trainers }
}

export default useTrainersList
