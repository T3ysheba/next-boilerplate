import { Fragment, type FC } from 'react'
import { noop } from 'lodash'
import classNames from 'classnames'
import { useTranslation } from 'react-i18next'

import type { TText } from './types'

const Text: FC<TText> = ({
  LText,
  RText,
  emptyTag,
  text = '',
  LeftIcon,
  style,
  role = '',
  children,
  RightIcon,
  dataTestId,
  variable,
  tagName = 'p',
  className = '',
  onClick = noop,
}) => {
  const { t } = useTranslation()

  const Tag = tagName

  const content = (
    <Fragment>
      {LText && LText}
      {String(t(text, variable))}
      {RText && RText}
    </Fragment>
  )

  return Tag && !emptyTag ? (
    <Tag
      style={style}
      data-testid={dataTestId}
      onClick={event => onClick(event)}
      className={classNames({ [className]: className })}
      role={(tagName === 'button' && 'button') || role}
    >
      {LeftIcon && <LeftIcon />}

      {content}

      {children}

      {RightIcon && <RightIcon />}
    </Tag>
  ) : (
    content
  )
}

export default Text
