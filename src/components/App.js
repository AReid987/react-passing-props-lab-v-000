import React, { Component }  from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    }
  }

  render(){
    return(
      <div></div>
    )
  }
}

export default App;
