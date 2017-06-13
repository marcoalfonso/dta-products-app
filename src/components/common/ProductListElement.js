import React, { PropTypes } from "react";
import { Link } from "react-router";
import { Button, Glyphicon } from "react-bootstrap";

// Product List Element component
export default class ProductListElement extends React.Component {
  // render
  render() {
    const {product, showDelete} = this.props;
    return (
      <tr>
        <td>#{product.id}</td>
        <td>{product.product}</td>
        <td>{product.image}</td>
        <td>{product.code}</td>
        <td>
          <Link to={'product-edit/' + product.id}>
            <Button bsSize="xsmall">
              Edit <Glyphicon glyph="edit"/>
            </Button>
          </Link>
        </td>
        <td>
          <Button bsSize="xsmall" className="product-delete" onClick={() => showDelete(product)}>
            Delete <Glyphicon glyph="remove-circle"/>
          </Button>
        </td>
      </tr>
    );
  }
}

// prop checks
ProductListElement.propTypes = {
  product: PropTypes.object.isRequired,
  showDelete: PropTypes.func.isRequired,
}
