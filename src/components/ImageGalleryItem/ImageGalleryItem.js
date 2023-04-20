import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({src, alt, largeImageURL, openModal}) => {
return (
<li className={css.ImageGalleryItem} onClick={() => openModal(largeImageURL)}>
    <img src={src} alt={alt} className={css.ImageGalleryItemImage}/>
</li>
);
};

ImageGalleryItem.propTypes = {
src: PropTypes.string,
alt: PropTypes.string,
largeImageURL: PropTypes.string,
openModal: PropTypes.func,
};

export default ImageGalleryItem;