export type SlideVariant = 'workout' | 'stories'

export interface PropsInterface {
  className?: string
  variant?: SlideVariant
  head?: string
  text?: string
  url?: string
  id?: number
  role?: string
}
