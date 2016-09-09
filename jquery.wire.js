(function(modules, root, factory) {
  if (typeof define === "function" && define.amd) {
    define(modules, factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory.apply(root, modules.map(require));
  } else {
    root["mu-jquery-wire/jquery.wire"] = factory.apply(root, modules.map(function(m) {
      return {
        "jquery": root.jQuery
      }[m] || root[m];
    }));
  }
})(["jquery"], this, function($) {
  var slice = Array.prototype.slice;
  var resolved = $.Deferred(function (dfd) {
    dfd.resolve();
  });

  return function(input, callback) {
    var args = slice.call(arguments, 2);
    var self = this;

    return self.length === 0 ? resolved : $.when.apply(null, self.map(function(i, element) {
      return $.when.apply(null, $.map(input.apply(self, [element, i].concat(args)), function(index, output) {
        return $.when(callback.call(self, element, output, index));
      }));
    }));
  };
});