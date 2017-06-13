import React from "react";
import ProductList from "./common/ProductList";

// Home page component
export default class Home extends React.Component {
  // render
  render() {
    return (
      <div className="page-home">
        <ProductList/>
      </div>
    );
  }
}