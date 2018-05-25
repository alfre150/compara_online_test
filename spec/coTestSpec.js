const expect = require('chai').expect;

const coTest = require('../src/coTest');
const CarInsurance = coTest.CarInsurance;
const Product = coTest.Product;

describe("Co Test", function() {

  it("should Medium Coverage", function() {
    const coTest = new CarInsurance([new Product('Medium Coverage', 10, 20) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("Medium Coverage");
  });

  it("should Full Coverage", function () {
    const coTest = new CarInsurance([new Product('Full Coverage', 2, 0)]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("Full Coverage");
  });

  it("should Super Sale", function () {
    const coTest = new CarInsurance([new Product('Super Sale', 3, 6)]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("Super Sale");
  });

});
