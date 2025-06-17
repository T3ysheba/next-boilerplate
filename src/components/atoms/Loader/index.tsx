import { FC } from 'react'
import classNames from 'classnames'

import { TLoader } from './types'

import styles from './Loader.module.scss'

const Loader: FC<TLoader> = ({ className, color = '#000', size = 24 }) => (
  <div style={{ width: size, height: size, borderColor: color }} className={classNames(styles.loader, className)} />
)

export default Loader
