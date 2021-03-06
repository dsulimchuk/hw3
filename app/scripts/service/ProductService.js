(function () {
  'use strict';

  var ProductService = function ($http) {
    // Instance attributes go here:
    this.$http = $http;
  };

  /** List all dependencies required by the service. */
  ProductService.$inject = ['$http'];

  // Instance methods go here:
  ProductService.prototype = {

    /** Returns the list of all available products on the server. */
    getProducts: function () {
      return this.$http.get('data/products-featured.json')
          .then(function (resp) { return resp.data; });
    },

    /** Finds products with specified criteria.
      * NOTE: Search criteria are not implemented yet.
      */
    find: function () {
      return this.$http.get('data/products-search.json')
          .then(function (resp) { return resp.data; });
    },

    getProductById: function(productId) {
      return this.getProducts().then(function(allProducts) {
        for (var i = 0; i < allProducts.length; i++) {
          if (parseInt(allProducts[i].id) === productId) {
            //console.log(allProducts[i]);
            return allProducts[i];
          }
        }
      });
    }
  };

  // Register the service within AngularJS DI container.
  angular.module('auction').service('ProductService', ProductService);
}());
