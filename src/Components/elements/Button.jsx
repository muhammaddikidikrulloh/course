import propTypes from 'prop-types';

export const Button = ({children, onClick, className, type = 'button'}) => {
  return (
    <button className={className} onClick={onClick} type={type}>{children}</button>
  )
}

Button.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  type: propTypes.string,
  onClick: propTypes.func
}