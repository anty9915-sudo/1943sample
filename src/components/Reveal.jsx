import { useReveal } from '../hooks/useReveal'

function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, isVisible] = useReveal()
  const delayClass = delay ? `reveal-delay-${delay}` : ''

  return (
    <Tag
      ref={ref}
      className={`reveal ${delayClass} ${isVisible ? 'is-visible' : ''} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export default Reveal
