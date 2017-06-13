// API Products static class
export default class ApiProducts {
  // get a list of products
  static getList() {
    return new Promise(resolve => {
      setTimeout(() => {
        // build some dummy products list
        let products = [];
        for (let x = 1; x <= 28; x++) {
          products.push({
            id: x,
            product: 'Product ' + x,
            image: 'http://placehold.it/300x250&text=image ' + x,
            code: 'promo ' + x
          });
        }
        resolve(products);
      }, 1000);
    });
  }

  // add/edit a product
  static addEdit() {
    return new Promise(resolve => {
      setTimeout(() => {
        // do something here
        resolve();
      }, 1000);
    });
  }

  // delete a product
  static delete() {
    return new Promise(resolve => {
      setTimeout(() => {
        // do something here
        resolve();
      }, 500);
    });
  }
}
