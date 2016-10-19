(function (modules, root, factory) {
  if (typeof define === "function" && define.amd) {
    define(modules, factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory.call(root);
  } else {
    root["mu-jquery-wire/jquery.wire"] = factory.call(root);
  }
})([], this, function () {
  var slice = Array.prototype.slice;

  function collect() {
    return slice.call(arguments);
  }

  return function (input, callback) {
    var me = this;
    var $ = me.constructor;
    var args = slice.call(arguments, 2);
    var resolved = $.Deferred(function (dfd) {
      dfd.resolveWith(me);
    });

    return me.length === 0
      ? resolved
      : $.when.apply(null, $.map(me, function (element, i) {
        var $element = $(element);
        return $.when($.isFunction(input) ? input.apply(me, [$element, i].concat(args)) : input).then(function (_input) {
          return _input === undefined || _input.length === 0
            ? resolved
            : $.when.apply(null, $.map($.isArray(_input) ? _input : [_input], function (output, index) {
              return $.when(callback.call(me, $element, index, output)).then(function (result) {
                return arguments.length > 1 ? slice.call(arguments) : result || output;
              });
            })).then(collect);
        });
      })).then(collect);
  }
});
