import React, { Component } from "react";
import CategoryList from "./Containers/CategoryList";
import NavBar from "./Components/NavBar";
import GetCategory from './Containers/GetCategory';
import {Route} from 'react-router-dom';
import CategoryForm from './Containers/CategoryForm'; 

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
     
        <Route exact path="/" component={CategoryList} />
        <Route path="/Category/:id" component={GetCategory} />
        <Route
          path="/createCategory"
          render={({ history }) => (
            <CategoryForm
              onCreateBook={(book) => {
                history.push("/");
              }}
            />
          )}
        />
      </div>
    );
  }
}
