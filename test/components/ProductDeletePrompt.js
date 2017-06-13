import React from "react";
import { shallow } from "enzyme";
import assert from "assert";
import ProductDeletePrompt from "../../src/components/common/ProductDeletePrompt";

// unit tests for the ProductDeletePrompt component
describe('ProductDeletePrompt component', () => {
  describe('render()', () => {
    it('should render the component', () => {
      const props = {show: true, product: {}, hideDelete: ()=>{}, productDelete: ()=>{}};
      const wrapper = shallow(<ProductDeletePrompt {...props}/>);
      assert.equal(wrapper.length, 1);
    });
  });
});
