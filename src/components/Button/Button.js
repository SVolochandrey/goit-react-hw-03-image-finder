import PropTypes from 'prop-types';
import css from './Button.module.css';

const Button =({onLoadMore}) => {
return (
    <div className={css.buttonContainer} onClick={onLoadMore}>
        <button type='button'className={css.button}>
            Load more
        </button>
    </div>
);
};

Button.propTypes = {
onLoadMore: PropTypes.func,
};

export default Button;