import React from "react";
import { shallow } from "enzyme";
import assert from "assert";
import ProductListElement from "../../src/components/common/ProductListElement";

// unit tests for the ProductListElement component
describe('ProductListElement component', () => {
  describe('render()', () => {
    it('should render the component', () => {
      const props = {product: {}, showDelete: ()=>{}};
      const wrapper = shallow(<ProductListElement {...props} />);
      assert.equal(wrapper.length, 1);
    });
  });
});
