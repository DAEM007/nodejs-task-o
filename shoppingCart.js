// Constructor function for Product
function Product(name, price) {
  // Private properties
  var _name = name;
  var _price = price;

  // Public methods
  this.getName = function() {
    return _name;
  };

  this.getPrice = function() {
    return _price;
  };
}

// Constructor function for ShoppingCart
function ShoppingCart() {
  // Private property
  var _items = [];

  // Public methods
  this.addItem = function(product) {
    _items.push(product);
  };

  this.removeItem = function(product) {
    var index = _items.indexOf(product);
    if (index !== -1) {
      _items.splice(index, 1);
    }
  };

  this.getTotal = function() {
    var total = 0;
    _items.forEach(function(product) {
      total += product.getPrice();
    });
    return total;
  };

  this.getCartItems = function() {
    var cartItems = [];
    _items.forEach(function(product) {
      cartItems.push({
        name: product.getName(),
        price: product.getPrice()
      });
    });
    return cartItems;
  };
}

// Creating product instances
var product1 = new Product("Item 1", 10);
var product2 = new Product("Item 2", 20);

// Creating shopping cart instance
var cart = new ShoppingCart();

// Adding products to the cart
cart.addItem(product1);
cart.addItem(product2);

// Getting total and cart items
console.log("Total: $" + cart.getTotal());
console.log("Cart Items:", cart.getCartItems());

// Removing a product from the cart
cart.removeItem(product1);

// Getting updated total and cart items
console.log("Total after removal: $" + cart.getTotal());
console.log("Cart Items after removal:", cart.getCartItems());
