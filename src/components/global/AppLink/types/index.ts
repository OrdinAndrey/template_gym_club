import { LinkProps } from 'react-router-dom'

export type LinkVariant = 'clear' | 'primary' | 'secondary'

export interface PropsInterface extends LinkProps {
  className?: string
  variant?: LinkVariant
}
