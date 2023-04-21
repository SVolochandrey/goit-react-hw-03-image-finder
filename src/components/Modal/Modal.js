import PropTypes  from "prop-types";
import css from './Modal.module.css';
import { createPortal } from "react-dom";
import React, { Component } from "react";

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
componentDidMount() {
window.addEventListener('keydown', this.handleKeyDown);
}

componentWillUnmount() {
window.removeEventListener('keydown', this.handleKeyDown);
}

handleKeyDown = evt => {
if (evt.code === 'Escape') {
this.props.onClose();
}
};

handleBackDropClick = evt => {
if (evt.currentTarget === evt.target) {
this.props.onClose();
}
};

render() {
return createPortal (
<div className={css.overlay} onClick={this.handleBackDropClick}>
    <div className={css.modal}>
        <img src={this.props.largeImageURL} alt=""/>
    </div>
</div>,
modalRoot
);
}
};

Modal.propTypes = {
onClose: PropTypes.func.isRequired,
largeImageURL: PropTypes.string.isRequired,
};
  

export default Modal;