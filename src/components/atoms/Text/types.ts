import type { ReactNode } from 'react'

import type { TSVG } from '@/types'

export type TText = {
  text: string
  variable?: any
  style?: any
  emptyTag?: boolean
  className?: string
  dataTestId?: string
  onClick?: (event?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  LeftIcon?: TSVG | null
  role?: 'row' | 'button'
  LText?: string
  RText?: string
  RightIcon?: TSVG | null
  tagName?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'li' | 'button' | 'label' | 'sup' | 'sub'
  children?: ReactNode
}
