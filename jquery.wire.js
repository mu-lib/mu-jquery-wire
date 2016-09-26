(function (modules, root, factory) {
  if (typeof define === "function" && define.amd) {
    define(modules, factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory.apply(root, modules.map(require));
  } else {
    root["mu-jquery-wire/jquery.wire"] = factory.apply(root, modules.map(function (m) {
      return {
        "jquery": root.jQuery
      }[m] || root[m];
    }));
  }
})(["jquery"], this, function ($) {
  var slice = Array.prototype.slice;

  function collect() {
    return slice.call(arguments);
  }

  return function (input, callback) {
    var self = this;
    var args = slice.call(arguments, 2);
    var resolved = $.Deferred(function (dfd) {
      dfd.resolveWith(self);
    });

    return self.length === 0
      ? resolved
      : $.when.apply(null, $.map(self, function (element, i) {
        var $element = self.constructor(element);
        return $.when($.isFunction(input) ? input.apply(self, [$element, i].concat(args)) : input).then(function (_input) {
          return _input === undefined || _input.length === 0
            ? resolved
            : $.when.apply(null, $.map($.isArray(_input) ? _input : [_input], function (output, index) {
              return $.when(callback.call(self, $element, index, output)).then(function (result) {
                return arguments.length > 1 ? slice.call(arguments) : result || output;
              });
            })).then(collect);
        });
      })).then(collect);
  }
});
