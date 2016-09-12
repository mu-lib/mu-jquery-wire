(function(modules, root, factory) {
  if (typeof define === "function" && define.amd) {
    define(modules, factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory.apply(root, modules.map(require));
  } else {
    root["mu-jquery-wire/tests/jquery.wire"] = factory.apply(root, modules.map(function(m) {
      return {
        "jquery": root.jQuery,
        "qunit": root.QUnit
      }[m = m.replace(/^\.{2}/, "mu-jquery-wire")] || root[m];
    }));
  }
})([
  "qunit",
  "jquery",
  "../jquery.wire",
], this, function(QUnit, $, wire) {
  var root = this;
  var setTimeout = root.setTimeout;
  var slice = Array.prototype.slice;

  QUnit.module("mu-jquery-wire/jquery.wire");
  
  QUnit.test("$noop", function(assert) {
    assert.expect(0);

    var $elements = $();

    return wire.call($elements,
      function () {
        assert.notOk(true, "should never be called");
      },
      function () {
        assert.notOk(true, "should never be called");
      });
  });

  QUnit.module("mu-jquery-wire/jquery.wire#input");

  QUnit.test("mandatory parameters", function(assert) {
    var $elements = $("<div></div><div></div>");

    assert.expect(2);

    return wire.call($elements,
      function ($element, index) {
        assert.ok($element.is($elements[index]), "element should match $elements[" + index + "]");
      },
      function () {
        assert.notOk(true, "should never be called");
      });
  });

  QUnit.test("extra parameters", function(assert) {
    var $elements = $("<div></div><div></div>");
    var o = {};

    assert.expect(2);

    return wire.call($elements,
      function (element, index, extra) {
        assert.deepEqual(extra, o, "extra should match o");
      },
      function () {
        assert.notOk(true, "should never be called");
      }, o);
  });

  QUnit.test("called in correct scope", function(assert) {
    var $elements = $("<div></div>");

    assert.expect(1);

    return wire.call($elements,
      function() {
        assert.deepEqual(this, $elements, "called in correct scope");
      },
      function () {
        assert.notOk(true, "should never be called");
      });
  });
  
  QUnit.test("return of non-array get treated as array of one", function(assert) {
    var $elements = $("<div></div><div></div>");

    assert.expect(3);

    return wire.call($elements,
      function() {
        return "one";
      },
      function (element, index, data) {
        assert.deepEqual(data, "one", "expect data to be one");
      }).done(function(result) {
        assert.deepEqual(result, [["one"],["one"]], "expect one result per element");
      });
  });

  QUnit.test("return array of one element not wrapped in result", function(assert) {
    var $elements = $("<div></div><div></div>");

    assert.expect(1);

    return wire.call($elements,
      function() {
        return [ "one" ];
      },
      function () {
      }).done(function(result) {
        assert.deepEqual(result, [["one"],["one"]]);
      });
  });

  QUnit.test("return array of many elements get wrapped in result", function(assert) {
    var $elements = $("<div></div><div></div>");
    var count = 0;

    assert.expect(1);

    return wire.call($elements,
      function() {
        return [ "one", "two" ];
      },
      function() {
      }).done(function(result) {
        assert.deepEqual(result, [["one","two"],["one","two"]]);
      });
  });

  QUnit.test("noop", function(assert) {
    var $elements = $("<div></div><div></div>");

    assert.expect(1);

    return wire.call($elements,
      function() {
      },
      function () {
        assert.notOk(true, "should never be called");
      }).done(function(result) {
        assert.deepEqual(result, [undefined,undefined]);
      });
  });

  QUnit.test("async result", function(assert) {
    var $elements = $("<div></div><div></div>");
    var count = 0;

    assert.expect(1);

    return wire.call($elements,
      function() {
        var result = "result-" + (++count);

        return $.Deferred(function(deferred) {
          setTimeout(function () {
            deferred.resolve(result);
          }, 0);
        }).promise();
      },
      function () {
      }).done(function(result) {
        assert.deepEqual(result, [["result-1"],["result-2"]]);
      });
  });

  QUnit.module("mu-jquery-wire/jquery.wire#callback");

  QUnit.test("called for each result from input", function(assert) {
    var $elements = $("<div></div><div></div>");

    assert.expect(8);

    return wire.call($elements,
      function (element) {
        return [ {
          "element": element,
          "index": 0 
        }, {
          "element": element,
          "index": 1
        } ];
      },
      function (element, index, o) {
        assert.deepEqual(element, o.element, "element should match o.element");
        assert.deepEqual(index, o.index, "index should match o.index");
      });
  });

  QUnit.test("called in correct scope", function(assert) {
    var $elements = $("<div></div>");

    assert.expect(1);

    return wire.call($elements,
      function() {
        return "test";
      },
      function () {
        assert.deepEqual(this, $elements, "called in correct scope");
      });
  });

  QUnit.test("undefined result passes data", function(assert) {
    var $elements = $("<div></div><div></div>");

    assert.expect(1);

    return wire.call($elements,
      function() {
        return "one";
      },
      function () {
      }).done(function(result) {
        assert.deepEqual(result, [["one"],["one"]]);
      });
  });

  QUnit.test("async result", function(assert) {
    var $elements = $("<div></div><div></div>");
    var count = 0;

    assert.expect(1);
    
    return wire.call($elements,
      function() {
        return "result-" + (++count);
      },
      function (element, index, data) {
        return $.when(data + "-" + (++count));
      }).done(function(result) {
        assert.deepEqual(result, [["result-1-3"], ["result-2-4"]]);
      });
  });
});