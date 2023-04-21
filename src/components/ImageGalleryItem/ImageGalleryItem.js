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
src: PropTypes.string.isRequired,
alt: PropTypes.string.isRequired,
largeImageURL: PropTypes.string.isRequired,
openModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;