class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }
}

class CarInsurance {
  constructor(products = []) {
    this.products = products;
  }
  updatePrice() {
    for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].name == 'Mega Coverage') {
        this.products[i].price = 80;
      }else{
        if (this.products[i].price >= 0 && this.products[i].price <= 50) {
          if (this.products[i].name == 'Full Coverage') {
            this.products[i].price += 1;
          }
          if (this.products[i].name == 'Special Full Coverage') {
            if (this.products[i].sellIn >= 6 && this.products[i].sellIn <= 10) {
              this.products[i].price += 2;
            }
            if (this.products[i].sellIn >= 0 && this.products[i].sellIn <= 5) {
              this.products[i].price += 3;
            }
            if (this.products[i].sellIn == 0) {
              this.products[i].price = 0;
            }
          }
          if (this.products[i].name == 'Super Sale') {
            this.products[i].price -= 2;
          }
          if (this.products[i].name == 'Low Coverage') {
          }
          if (this.products[i].name == 'Medium Coverage') {
          }
          if (this.products[i].sellIn < 0) {
            this.products[i].price -= 2;
          }

        }
        if (this.products[i].price < 0) {
          this.products[i].price = 0;
        }
        if (this.products[i].price > 50) {
          this.products[i].price = 50;
        }
      }
      
    }

    return this.products;
  }
}

module.exports = {
  Product,
  CarInsurance
}
