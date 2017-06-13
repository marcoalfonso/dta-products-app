import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { Table, Pagination } from "react-bootstrap";
import ProductListElement from "./ProductListElement";
import ProductDeletePrompt from "./ProductDeletePrompt";

// Product list component
export class ProductList extends React.Component {
  // constructor
  constructor(props) {
    super(props);

    // default ui local state
    this.state = {
      delete_show: false,
      delete_product: {},
    };

    // bind <this> to the event method
    this.changePage = this.changePage.bind(this);
    this.showDelete = this.showDelete.bind(this);
    this.hideDelete = this.hideDelete.bind(this);
    this.productDelete = this.productDelete.bind(this);
  }

  // render
  render() {
    // pagination
    const {products, page} = this.props;
    const per_page = 10;
    const pages = Math.ceil(products.length / per_page);
    const start_offset = (page - 1) * per_page;
    let start_count = 0;

    // show the list of products
    return (
      <div>
        <Table bordered hover responsive striped>
          <thead>
          <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Image</th>
            <th>Code</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          </thead>
          <tbody>
          {products.map((product, index) => {
            if (index >= start_offset && start_count < per_page) {
              start_count++;
              return (
                <ProductListElement key={index} product={product} showDelete={this.showDelete}/>
              );
            }
          })}
          </tbody>
        </Table>

        <Pagination className="products-pagination pull-right" bsSize="medium" maxButtons={10} first last next
          prev boundaryLinks items={pages} activePage={page} onSelect={this.changePage}/>

        <ProductDeletePrompt show={this.state.delete_show} product={this.state.delete_product}
          hideDelete={this.hideDelete} productDelete={this.productDelete}/>
      </div>
    );
  }

  // change the product lists' current page
  changePage(page) {
    this.props.dispatch(push('/?page=' + page));
  }

  // show the delete product prompt
  showDelete(product) {
    // change the local ui state
    this.setState({
      delete_show: true,
      delete_product: product,
    });
  }

  // hide the delete product prompt
  hideDelete() {
    // change the local ui state
    this.setState({
      delete_show: false,
      delete_product: {},
    });
  }

  // delete the product
  productDelete() {
    // delete the product
    this.props.dispatch({
      type: 'PRODUCTS_DELETE',
      product_id: this.state.delete_product.id,
    });

    // hide the prompt
    this.hideDelete();
  }
}

// export the connected class
function mapStateToProps(state) {
  return {
    products: state.products,

    // https://github.com/reactjs/react-router-redux#how-do-i-access-router-state-in-a-container-component
    // react-router-redux wants you to get the url data by passing the props through a million components instead of
    // reading it directly from the state, which is basically why you store the url data in the state (to have access to it)
    page: Number(state.routing.locationBeforeTransitions.query.page) || 1,
  };
}
export default connect(mapStateToProps)(ProductList);
