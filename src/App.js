import React, { Component } from "react";
import { Route } from 'react-router-dom';

import Homepage from "./component/Homepage";
import Pricing from "./component/Pricing";
import Carousels from "./component/Carousels";
import Cards from "./component/Cards";
import People from "./component/People";
import Contblock from "./component/Contblock";
import Form from "./component/Form";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Homepage}/>
        <Route path="/pricing" component={Pricing}/>
        <Route path="/Carousels" component={Carousels}/>
        <Route path="/Cards" component={Cards}/>
        <Route path="/People" component={People}/>
        <Route path="/Contblock" component={Contblock}/>
        <Route path="/Form" component={Form}/>
      </div>
    );
  }
}

export default App;
