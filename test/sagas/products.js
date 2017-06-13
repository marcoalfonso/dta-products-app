import { call, put } from "redux-saga/effects";
import assert from "assert";
import { productsFetchList, productsAddEdit, productsDelete } from "../../src/sagas/products";
import ApiProducts from "../../src/api/products";

// unit tests for the products saga
describe('Products saga', () => {
  describe('productsFetchList()', () => {
    const generator = productsFetchList();

    it('should return the ApiProducts.getList call', () => {
      assert.deepEqual(generator.next().value, call(ApiProducts.getList));
    });

    it('should return the PRODUCTS_LIST_SAVE action', () => {
      assert.deepEqual(generator.next().value, put({type: 'PRODUCTS_LIST_SAVE', products: undefined}));
    });

    it('should be finished', () => {
      assert.equal(generator.next().done, true);
    });
  });

  describe('productsAddEdit() - add', () => {
    const action = {
      product: {},
      callbackSuccess: () => {},
    };
    const generator = productsAddEdit(action);

    it('should return the ApiProducts.addEdit call', () => {
      assert.deepEqual(generator.next().value, call(ApiProducts.addEdit));
    });

    it('should return the PRODUCTS_ADD_SAVE action', () => {
      assert.deepEqual(generator.next().value, put({
        type: 'PRODUCTS_ADD_SAVE',
        product: action.product,
      }));
    });

    it('should be finished', () => {
      assert.equal(generator.next().done, true);
    });
  });

  describe('productsAddEdit() - edit', () => {
    const action = {
      product: {id: 1},
      callbackSuccess: () => {},
    };
    const generator = productsAddEdit(action);

    it('should return the ApiProducts.addEdit call', () => {
      assert.deepEqual(generator.next().value, call(ApiProducts.addEdit));
    });

    it('should return the PRODUCTS_EDIT_SAVE action', () => {
      assert.deepEqual(generator.next().value, put({
        type: 'PRODUCTS_EDIT_SAVE',
        product: action.product,
      }));
    });

    it('should be finished', () => {
      assert.equal(generator.next().done, true);
    });
  });

  describe('productsDelete()', () => {
    const action = {
      product_id: 1,
    };
    const generator = productsDelete(action);

    it('should return the ApiProducts.delete call', () => {
      assert.deepEqual(generator.next().value, call(ApiProducts.delete));
    });

    it('should return the PRODUCTS_DELETE_SAVE action', () => {
      assert.deepEqual(generator.next().value, put({
        type: 'PRODUCTS_DELETE_SAVE',
        product_id: action.product_id,
      }));
    });

    it('should be finished', () => {
      assert.equal(generator.next().done, true);
    });
  });
});
