import Btn from './components/header/btn';
import './components/header/btn.module.css';

// import React, { Component } from 'react';

import Searchbar from './components/Searchbar/Searchbar';

const App = () => {
  handeSubmitForm = searchQuery => {
    this.setState({
      hits: [],
      query: searchQuery,
      page: 1,
    });
  };

  return (
    <>
      <Btn title="React Home Work Image finder 03" />
      <Searchbar onSubmit={this.handeSubmitForm} />
    </>
  );
};

export default App;
