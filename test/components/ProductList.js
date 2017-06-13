import React from "react";
import { shallow } from "enzyme";
import assert from "assert";
import { ProductList } from "../../src/components/common/ProductList";

// unit tests for the ProductList component
describe('ProductList component', () => {
  describe('render()', () => {
    it('should render the progressbar', () => {
      const props = {products: []};
      const wrapper = shallow(<ProductList {...props} />);
      assert.equal(wrapper.length, 1);
    });
  });
});
