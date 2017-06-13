import assert from "assert";
import products from "../../src/reducers/products";

describe('Products reducer', () => {
  describe('PRODUCTS_LIST_SAVE', () => {
    it('should return a list of products', () => {
      assert.deepEqual(
        products({}, {
          type: 'PRODUCTS_LIST_SAVE',
          products: [{
            id: 1,
            product: 'Some name',
            image: 'Some image',
            code: 'Some promo'
          }],
        }), [{
          id: 1,
          product: 'Some name',
          image: 'Some image',
          code: 'Some promo'
        }]
      );
    });
  });

  describe('PRODUCTS_ADD_SAVE', () => {
    it('should return a new product array element', () => {
      assert.deepEqual(
        products([{
          id: 1,
          product: 'Some name',
          image: 'Some image',
          code: 'Some promo'
        }], {
          type: 'PRODUCTS_ADD_SAVE',
          product: {
            id: 2,
            product: 'Other name',
            image: 'Other image',
            code: 'Other promo'
          },
        }), [{
          id: 1,
          product: 'Some name',
          image: 'Some image',
          code: 'Some promo'
        }, {
          id: 2,
          product: 'Other name',
          image: 'Other image',
          code: 'Other promo'
        }]
      );
    });
  });

  describe('PRODUCTS_EDIT_SAVE', () => {
    it('should return an edited product array element', () => {
      assert.deepEqual(
        products([{
          id: 1,
          product: 'Some name',
          image: 'Some image',
          code: 'Some promo'
        }, {
          id: 2,
          product: 'Other name',
          image: 'Other image',
          code: 'Other promo'
        }], {
          type: 'PRODUCTS_EDIT_SAVE',
          product: {
            id: 2,
            product: 'Changed name',
            image: 'Changed image',
            code: 'Changed promo'
          },
        }), [{
          id: 1,
          product: 'Some name',
          image: 'Some image',
          code: 'Some promo'
        }, {
          id: 2,
          product: 'Changed name',
          image: 'Changed image',
          code: 'Changed promo'
        }]
      );
    });
  });

  describe('PRODUCTS_DELETE_SAVE', () => {
    it('should return the product array without the deleted element', () => {
      assert.deepEqual(
        products([{
          id: 1,
          product: 'Some name',
          image: 'Some image',
          code: 'Some promo'
        }, {
          id: 2,
          product: 'Other name',
          image: 'Other image',
          code: 'Other promo'
        }], {
          type: 'PRODUCTS_DELETE_SAVE',
          product_id: 2,
        }), [{
          id: 1,
          product: 'Some name',
          image: 'Some image',
          code: 'Some promo'
        }]
      );
    });
  });
});
