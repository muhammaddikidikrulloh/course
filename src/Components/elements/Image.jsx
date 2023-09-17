import propTypes from 'prop-types';

export const Image = ({source, alt, className}) => {
  return <img src={source} className={className} alt={alt} />
}

Image.propTypes = {
  source: propTypes.string.isRequired,
  alt: propTypes.string,
  className: propTypes.string
}