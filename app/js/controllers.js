var shoppingApp = angular.module('shoppingApp', []);

shoppingApp.controller('ProductListCtrl', function ($scope) {
  $scope.products = [
  { 'name': 'Almond Toe Court Shoes',
  'id' : 001,
  'description': 'Patent Black',
  'category': "Women's Footwear",
  'price': 99.00,
  'quantity': 5 },
  { 'name': 'Suede Shoes',
  'description': 'Blue',
  'category': "Women's Footwear",
  'price': 42.00,
  'quantity': 4 },
  { 'name': 'Leather Driver Saddle Loafers',
  'description': 'Tan',
  'category': "Men's Footwear",
  'price': 34.00,
  'quantity': 12 },
  { 'name': 'Flip Flops',
  'description': 'Red',
  'category': "Men's Footwear",
  'price': 19.00,
  'quantity': 6 },
  { 'name': 'Flip Flops',
  'description': 'Blue',
  'category': "Men's Footwear",
  'price': 19.00,
  'quantity': 0 },
  { 'name': 'Gold Button Cardigan',
  'description': 'Black',
  'category': "Women's Casualwear",
  'price': 167.00,
  'quantity': 6 },
  { 'name': 'Cotton Shorts',
  'description': 'Medium Red',
  'category': "Women's Casualwear",
  'price': 30.00,
  'quantity': 5},
  { 'name': 'Fine Stripe Short Sleeve Shirt',
  'description': 'Grey',
  'category': "Men's Casualwear",
  'price': 49.99,
  'quantity': 9 },
  { 'name': 'Fine Stripe Short Sleeve Shirt',
  'description': 'Green',
  'category': "Men's Casualwear",
  'price': 49.99,
  'quantity': 3 },
  { 'name': 'Sharkskin Waistcoat',
  'description': 'Charcoal',
  'category': "Men's Formalwear",
  'price': 75.00,
  'quantity': 2 },
  { 'name': 'Lightweight Patch Pocket Blazer',
  'description': 'Deer',
  'category': "Men's Formalwear",
  'price': 175.50,
  'quantity': 1 },
  { 'name': 'Bird Print Dress',
  'description': 'Black',
  'category': "Women's Formalwear",
  'price': 270.00,
  'quantity': 10 },
  { 'name': 'Mid Twist Cut-Out Dress',
  'description': 'Pink',
  'category': "Women's Formalwear",
  'price': 540.00,
  'quantity': 5 }
  ];
});
