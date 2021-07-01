import './App.css';
import React, { Component } from 'react';
/** **/
import fetchImage from './services/api';
import Btn from './components/header/btn';
import './components/header/btn.module.css';

// import Searchbar from './components/Searchbar/Searchbar';

class App extends Component {
  state = {
    searchQuery: '',
    currentPage: 1,
    images: [],
    isLoading: false,
    showModal: false,
    modalImg: '',
    modalAlt: '',
    error: null,
  };

  handeSubmitForm = searchQuery => {
    this.setState({
      hits: [],
      query: searchQuery,
      page: 1,
    });
  };
  render() {
    const { images, showModal, modalImg, modalAlt, error, isLoading } =
      this.props;
    return (
      <>
        <Btn title="React Home Work Image finder 03" />
        {/* <Searchbar onSubmit={this.handeSubmitForm} /> */}
      </>
    );
  }
}

export default App;
