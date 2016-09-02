(function(root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["jquery"], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory(require("jquery"));
  } else {
    root["mu-jquery-wire/jquery.wire"] = factory(root.jQuery);
  }
}(this, function($) {
  return function(attr, callback) {
    return $.when.apply(null, this.map(function(i, element) {
      return $.when.apply(null, ($(element).attr(attr) || "")
        .split(/\s+/)
        .map(function(module, index) {
          return $.when(callback.call(element, module, index));
        }));
    }));
  };
}));
