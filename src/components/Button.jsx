import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ children, variant = 'primary', size = 'medium', onClick, fullWidth = false, disabled = false }) => {
  const classNames = `btn btn--${variant} btn--${size} ${fullWidth ? 'btn--full-width' : ''}`;
  
  return (
    <button 
      className={classNames} 
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'ghost']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  onClick: PropTypes.func,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool
};

export default Button;
