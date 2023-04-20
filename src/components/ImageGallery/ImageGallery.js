import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

const ImageGallery =({images, openModal}) => (
<ul className={css.imageGallery}>
    {images.map(({id, webformatURL, tags, largeImageURL}) => (
    <ImageGalleryItem 
    key={id}
    src={webformatURL}
    alt={tags}
    largeImageURL={largeImageURL}
    openModal={openModal}
    />
    ))}
</ul>
);

ImageGallery.propTypes = {
images: PropTypes.array,
id: PropTypes.number,
webformatURL: PropTypes.string,
tags: PropTypes.string,
largeImageURL: PropTypes.string,
openModal: PropTypes.func
};

export default ImageGallery;