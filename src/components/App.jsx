import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';
import fetchImages from './Services/API';

import React, { Component } from 'react';
import { animateScroll } from 'react-scroll';

export class App extends Component {
state = {
searchQuery: '',
images: [],
page: 1,
per_page: 12,
isLoading: false,
loadMore: false,
error: null,
showModal: false,
largeImageURL: '',
id: null,
};

componentDidUpdate(_, prevState) {
const {searchQuery, page} = this.state;

if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
this.getImages(searchQuery, page);
}
}

getImages = async (query, page) => {
this.setState({isLoading: true});
if(!query) {
return;
}

try {
const {hits, totalHits} = await fetchImages (query, page);
this.setState(prevState => ({
images: [...prevState.images, ...hits],
loadMore: prevState.page < Math.ceil(totalHits/prevState.per_page),
error: null,
}));
}

catch (error) {
this.setState({error: error.massage});
}

finally {
this.setState({isLoading: false});
}
};


formSubmit = searchQuery => {
this.setState({
searchQuery,
images: [],
page: 1,
loadMore: false,
});
};

onLoadMore = () => {
const {loadMore} = this.state;
if (loadMore) {
this.setState(prevState => ({page: prevState.page + 1}));
this.scrollOnMoreButton();
}
};

scrollOnMoreButton = () => {
animateScroll.scrollToBottom({
duration: 1000,
delay: 10,
smooth: 'linear',
});
};

openModal = largeImageURL => {
this.setState({
showModal: true,
largeImageURL: largeImageURL,
});
};

closeModal = () => {
this.setState({
showModal: false,
largeImageURL: '',
});
};

render() {
const {images, loadMore, showModal, largeImageURL} = this.state;
return (
<>
<Searchbar onSubmit={this.formSubmit}/>

{images.length > 0 && <ImageGallery images={images} openModal={this.openModal}/>}

{loadMore && (
<Button onLoadMore={this.onLoadMore} />
)}

{!loadMore && images.length > 0 && (
<p>No more images to load.</p>
)}

{showModal && (
<Modal largeImageURL={largeImageURL} onClose={this.closeModal} />
)}
</>
);
}

}