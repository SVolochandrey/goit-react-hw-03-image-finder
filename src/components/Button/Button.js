import PropTypes from 'prop-types';
import './Button.module.css';

const Button =({onLoadMore}) => {
return (
    <div className='button-container' onClick={onLoadMore}>
        <button type='button'className='button'>
            Load more
        </button>
    </div>
);
};

Button.propTypes = {
loadMore: PropTypes.func,
};

export default Button;