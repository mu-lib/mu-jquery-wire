(function(root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["jquery"], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory(require("jquery"));
  } else {
    root["mu-jquery-wire/jquery.wire"] = factory(root.jQuery);
  }
})(this, function($) {
  var slice = Array.prototype.slice;

  return function(input, callback) {
    var args = slice.call(arguments, 2);

    return $.when.apply(null, this.map(function(i, element) {
      return $.when.apply(null, input
        .apply(element, args)
        .map(function(output, index) {
          return $.when(callback.call(element, output, index));
        }));
    }));
  };
});
