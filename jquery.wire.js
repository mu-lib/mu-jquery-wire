(function(root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["jquery"], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory(require("jquery"));
  } else {
    root["mu-jquery-wire/jquery.wire"] = factory(root.jQuery);
  }
}(this, function($) {
  var slice = Array.prototype.slice;

  function construct(F, args) {
    function C() {
      return F.apply(this, args);
    }

    C.prototype = F.prototype;

    return new C();
  }

  return $.fn.wire = function(attr, factory) {
    var args = slice.call(arguments, 2);

    return $.when.apply(null, this.map(function(index, element) {
      var $element = $(this);

      return $.when.apply(null, ($element.attr(attr) || "")
        .split(/\s+/)
        .map(function(module) {
          return $.when(factory.call($element, module)).then(function(c) {
            switch ($.type(c)) {
              case "function":
                return construct(c, [$element, module].concat(args));
                break;

              case "undefined":
                break;

              default:
                throw new Error(c + " is not a supported type");
            }
          });
        }));
    }));
  };
}));
