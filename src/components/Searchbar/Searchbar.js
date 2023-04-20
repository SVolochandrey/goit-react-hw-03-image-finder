import PropTypes from 'prop-types';
import css from './Searchbar.module.css';
import { Component } from 'react';
import { FiSearch } from 'react-icons/fi';

class Searchbar extends Component {
state = {
searchQuery: '',
};

handleChange = evt => {
this.setState ({searchQuery: evt.currentTarget.value.toLowerCase() });
};

handleSubmit = evt => {
evt.preventDefault();
if (this.state.searchQuery.trim() === '') {
return alert('Please enter your query!');
};

this.props.onSubmit(this.state.searchQuery);
this.setState({searchQuery: ''});
};

render () {
return (
<header className={css.searchbar}>
    <form onSubmit={this.handleSubmit} className={css.SearchForm}>
        <button type='submit' className={css.SearchFormButton}>
            <span>
                <FiSearch size={25} stroke='#3f51b5'/>
            </span>
        </button>

        <input 
        className={css.SearchFormInput}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        name="searchQuery"
        value={this.state.searchQuery}
        onChange={this.handleChange}
        />
    </form>
</header>
);
}
};

Searchbar.propTypes = {
onSubmit: PropTypes.func,
};

export default Searchbar;