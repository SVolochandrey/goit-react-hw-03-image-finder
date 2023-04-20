import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
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
console.log(prevState.page);
console.log(this.state.page);
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
console.log(hits, totalHits);
this.setState(prevState => ({
images: [...prevState.images, ...hits],
loadMore: this.state.page < Math.ceil(totalHits/this.state.per_page),
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
this.setState(prevState => ({page: prevState.page + 1}));
this.scrollOnMoreButton();
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
});
};

render() {
const {images, isLoading, loadMore, page, showModal, largeImageURL} = this.state;
return (
<>
<Searchbar onSubmit={this.formSubmit}/>

{isLoading ? (
<Loader />
) : (
<ImageGallery images={images} openModal={this.openModal}/>
)}

{loadMore && <Button onLoadMore={this.onLoadMore} page={page} />}

{showModal && (<Modal largeImageURL={largeImageURL} onClose={this.closeModal} />)}
</>
);
}
}