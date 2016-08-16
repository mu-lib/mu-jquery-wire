(function($, slice) {
  function construct(F, args) {
    function C() {
      return F.apply(this, args);
    }

    C.prototype = F.prototype;

    return new C();
  }

  $.fn.wire = function(attr) {
    var self = this;
    var args = slice.call(arguments, 1);

    return self
      .find("[" + attr + "]")
      .attr(attr, function(index, modules) {
        var $element = $(this);

        (modules || "")
          .split(/\s+/)
          .forEach(function(module) {
            var c = self.data(module);

            switch ($.type(c)) {
              case "function":
                construct(c, [$element, module].concat(args));
                break;

              case "undefined":
                break;

              default:
                throw new Error(c + " is not a supported type");
            }
          });
      });
  };
})(jQuery, Array.prototype.slice);
