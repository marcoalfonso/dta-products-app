import React, { PropTypes } from "react";
import { Modal, Button } from "react-bootstrap";

// Product delete component
export default class ProductDeletePrompt extends React.Component {
  // render
  render() {
    const {show, product, hideDelete, productDelete} = this.props;
    return (
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>
            Are you sure you want to delete <strong>{product.product}</strong>?
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button onClick={hideDelete}>No</Button>
          <Button bsStyle="primary" onClick={productDelete}>Yes</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

// prop checks
ProductDeletePrompt.propTypes = {
  show: PropTypes.bool.isRequired,
  product: PropTypes.object.isRequired,
  hideDelete: PropTypes.func.isRequired,
  productDelete: PropTypes.func.isRequired,
}
