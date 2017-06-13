import React from "react";
import { shallow } from "enzyme";
import assert from "assert";
import { ProductEdit } from "../../src/components/ProductEdit";

// unit tests for the ProductEdit component
describe('ProductEdit component', () => {
  describe('render()', () => {
    it('should render the add product form', () => {
      const props = {product: {}, handleSubmit: ()=>{}};
      const wrapper = shallow(<ProductEdit {...props} />);
      assert.equal(wrapper.length, 1);
    });
  });
});
