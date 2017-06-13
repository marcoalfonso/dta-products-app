import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { Field, SubmissionError, reduxForm } from "redux-form";
import { PageHeader, Form } from "react-bootstrap";
import FormField from "./common/FormField";
import FormSubmit from "./common/FormSubmit";

// Product add/edit page component
export class ProductEdit extends React.Component {
  // constructor
  constructor(props) {
    super(props);

    // bind <this> to the event method
    this.formSubmit = this.formSubmit.bind(this);
  }

  // render
  render() {
    const {product, handleSubmit, error, invalid, submitting} = this.props;
    return (
      <div className="page-product-edit">
        <PageHeader>{'Product ' + (product.id ? 'edit' : 'add')}</PageHeader>
        <Form horizontal onSubmit={handleSubmit(this.formSubmit)}>
          <Field component={FormField} name="product" label="Product" doValidate={true}/>
          <Field component={FormField} name="image" label="Image" doValidate={true}/>
          <Field component={FormField} name="code" label="Code"/>
          <FormSubmit error={error} invalid={invalid} submitting={submitting} buttonSaveLoading="Saving..."
            buttonSave="Save Product"/>
        </Form>
      </div>
    );
  }

  // submit the form
  formSubmit(values) {
    const {dispatch} = this.props;
    return new Promise((resolve, reject) => {
      dispatch({
        type: 'PRODUCTS_ADD_EDIT',
        product: {
          id: values.id || 0,
          product: values.product,
          image: values.image,
          code: values.code
        },
        callbackError: (error) => {
          reject(new SubmissionError({_error: error}));
        },
        callbackSuccess: () => {
          dispatch(push('/'));
          resolve();
        }
      });
    });
  }
}

// decorate the form component
const ProductEditForm = reduxForm({
  form: 'product_edit',
  validate: function (values) {
    const errors = {};
    const re = new RegExp("^(http)")
    if (!values.product) {
      errors.product = 'Product title is required';
    }
    if (values.product && values.product.length < 10) {
      errors.product = 'Product title must be at least 10 characters';
    }
    if (!re.test(values.image)) {
      errors.image = 'Image url must start with http';
    }
    return errors;
  },
})(ProductEdit);

// export the connected class
function mapStateToProps(state, own_props) {
  const product = state.products.find(x => Number(x.id) === Number(own_props.params.id)) || {};
  return {
    product: product,
    initialValues: product,
  };
}
export default connect(mapStateToProps)(ProductEditForm);
