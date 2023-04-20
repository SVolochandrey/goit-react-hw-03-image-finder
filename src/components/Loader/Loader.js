import { RotatingLines } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
return (
<div className={css.Loader}>
    <RotatingLines 
    strokeColor='#3f51b590'
    strokeWidth='5'
    animationDuration='0.8'
    width='95'
    visible={true}
    />
</div>
);
};

export default Loader;