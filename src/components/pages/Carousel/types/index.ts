type SlideType = 'workout' | 'stories'

export interface PropsInterface {
  type: SlideType
}
export interface ArrowProps {
  onClick?: () => void
}
export interface ISlideWorkout {
  id: number
  role: string
  text: string
}
export interface ISlideStories extends ISlideWorkout {
  name: string
}
