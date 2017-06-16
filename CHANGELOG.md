# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="6.0.1"></a>
## [6.0.1](https://github.com/mu-lib/mu-jquery-wire/compare/v6.0.0...v6.0.1) (2017-06-16)


### Bug Fixes

* UMD fixes ([e3183cf](https://github.com/mu-lib/mu-jquery-wire/commit/e3183cf))



<a name="6.0.0"></a>
# [6.0.0](https://github.com/mu-lib/mu-jquery-wire/compare/v5.0.8...v6.0.0) (2017-05-07)


### Features

* normalize array result ([c6f52db](https://github.com/mu-lib/mu-jquery-wire/commit/c6f52db))


### BREAKING CHANGES

* `undefined` results are now mapped to `[]`.



<a name="5.0.8"></a>
## [5.0.8](https://github.com/mu-lib/mu-jquery-wire/compare/v5.0.7...v5.0.8) (2017-04-23)


### Bug Fixes

* bumped deps ([3467cd8](https://github.com/mu-lib/mu-jquery-wire/commit/3467cd8))



<a name="5.0.7"></a>
## [5.0.7](https://github.com/mu-lib/mu-jquery-wire/compare/v5.0.6...v5.0.7) (2017-04-23)


### Bug Fixes

* use native .map ([007a075](https://github.com/mu-lib/mu-jquery-wire/commit/007a075))



<a name="5.0.6"></a>
## [5.0.6](https://github.com/mu-lib/mu-jquery-wire/compare/v5.0.5...v5.0.6) (2017-04-04)


### Bug Fixes

* **packaging:** bumped deps and remove unused module ([29e3c14](https://github.com/mu-lib/mu-jquery-wire/commit/29e3c14))
* use $.makeArray on _input ([6bfa07c](https://github.com/mu-lib/mu-jquery-wire/commit/6bfa07c))



<a name="5.0.5"></a>
## [5.0.5](https://github.com/mu-lib/mu-jquery-wire/compare/v5.0.4...v5.0.5) (2016-10-19)


### Bug Fixes

* **packaging:** bump jQuery version in dev ([ef0c981](https://github.com/mu-lib/mu-jquery-wire/commit/ef0c981))



<a name="5.0.4"></a>
## [5.0.4](https://github.com/mu-lib/mu-jquery-wire/compare/v5.0.3...v5.0.4) (2016-10-19)


### Bug Fixes

* **packaging:** jQuery versions ([2e9a75e](https://github.com/mu-lib/mu-jquery-wire/commit/2e9a75e))
* **wire:** use provided jQuery ([aef471b](https://github.com/mu-lib/mu-jquery-wire/commit/aef471b))



<a name="5.0.3"></a>
## [5.0.3](https://github.com/mu-lib/mu-jquery-wire/compare/v5.0.2...v5.0.3) (2016-10-12)


### Bug Fixes

* **packaging:** Updated package.json ([f94d9da](https://github.com/mu-lib/mu-jquery-wire/commit/f94d9da))



<a name="5.0.2"></a>
## [5.0.2](https://github.com/mu-lib/mu-jquery-wire/compare/v5.0.1...v5.0.2) (2016-09-26)


### Bug Fixes

* Use self.constructor() vs. $() ([1bd225f](https://github.com/mu-lib/mu-jquery-wire/commit/1bd225f))



<a name="5.0.1"></a>
## [5.0.1](https://github.com/mu-lib/mu-jquery-wire/compare/v5.0.0...v5.0.1) (2016-09-13)



<a name="5.0.0"></a>
# [5.0.0](https://github.com/mu-lib/mu-jquery-wire/compare/v4.0.2...v5.0.0) (2016-09-12)


### Bug Fixes

* results fom callback ([b0990ab](https://github.com/mu-lib/mu-jquery-wire/commit/b0990ab))


### Features

* New signatures and scope for input and callback ([09ea7d1](https://github.com/mu-lib/mu-jquery-wire/commit/09ea7d1))


* Qunit (#2) ([fc27d8f](https://github.com/mu-lib/mu-jquery-wire/commit/fc27d8f))


### BREAKING CHANGES

* new signatures is (input|callback)(element, index,
extra...)

* bug: Work around arguments[0] = undefined bug
* input and callback are now passed element and index as
input parameters. The scope of each also changes to the originating
element.



<a name="4.0.2"></a>
## [4.0.2](https://github.com/mu-lib/mu-jquery-wire/compare/v4.0.1...v4.0.2) (2016-09-08)


### Bug Fixes

* UMD fixes ([e010b13](https://github.com/mu-lib/mu-jquery-wire/commit/e010b13))



<a name="4.0.1"></a>
## [4.0.1](https://github.com/mu-lib/mu-jquery-wire/compare/v4.0.0...v4.0.1) (2016-09-06)


### Bug Fixes

* work around $.when() resolving with arguments.length = 1 ([2ba2d73](https://github.com/mu-lib/mu-jquery-wire/commit/2ba2d73))



<a name="4.0.0"></a>
# [4.0.0](https://github.com/mu-lib/mu-jquery-wire/compare/v3.0.1...v4.0.0) (2016-09-06)


### Features

* externalize seed function ([d273815](https://github.com/mu-lib/mu-jquery-wire/commit/d273815))


### BREAKING CHANGES

* Previously the first attribute was the name of an
attribute, now this should be a function that returns an array where each
element will be processed with `callback`.



<a name="3.0.1"></a>
## [3.0.1](https://github.com/mu-lib/mu-jquery-wire/compare/v3.0.0...v3.0.1) (2016-09-03)


### Bug Fixes

* UMD fixes ([58a2087](https://github.com/mu-lib/mu-jquery-wire/commit/58a2087))



<a name="3.0.0"></a>
# [3.0.0](https://github.com/mu-lib/mu-jquery-wire/compare/v2.0.0...v3.0.0) (2016-09-02)


### Features

* don't set $.fn.wire ([2b9e369](https://github.com/mu-lib/mu-jquery-wire/commit/2b9e369))


### BREAKING CHANGES

* From this version it's prefferred that users call wire
via `wire.call($element, attr, callback). Users who want the old behaviour
can use `$.fn.wire = require("mu-jquery-wire/jquery.wire");` or equivalent.



<a name="2.0.0"></a>
# [2.0.0](https://github.com/mu-lib/mu-jquery-wire/compare/v1.1.1...v2.0.0) (2016-09-02)


### Features

* callback should return instance not class ([c3c7b87](https://github.com/mu-lib/mu-jquery-wire/commit/c3c7b87))
* follow standard jQuery praxsis for 'this' ([42997c8](https://github.com/mu-lib/mu-jquery-wire/commit/42997c8))
* remove .find from $.fn.wire and instead rely on 'this' ([82d5f56](https://github.com/mu-lib/mu-jquery-wire/commit/82d5f56))


### BREAKING CHANGES

* Users have to $(element) on their own in callback.
* Callback now has to return an instance not a module.
* users will have to update their code to first select
elements. A simple way to do this is by adding .find('[attr_goes_here]')
right before the .wire call.



<a name="1.1.1"></a>
## [1.1.1](https://github.com/mu-lib/mu-jquery-wire/compare/v1.1.0...v1.1.1) (2016-09-02)


### Bug Fixes

* assignment to global typo ([ae23ea9](https://github.com/mu-lib/mu-jquery-wire/commit/ae23ea9))



<a name="1.1.0"></a>
# [1.1.0](https://github.com/mu-lib/mu-jquery-wire/compare/v1.0.0...v1.1.0) (2016-09-01)


### Features

* UMD packaging ([#1](https://github.com/mu-lib/mu-jquery-wire/issues/1)) ([05a278d](https://github.com/mu-lib/mu-jquery-wire/commit/05a278d))



<a name="1.0.0"></a>
# [1.0.0](https://github.com/mu-lib/mu-jquery-wire/compare/v0.0.1...v1.0.0) (2016-09-01)


### Features

* async factory support ([ea6769c](https://github.com/mu-lib/mu-jquery-wire/commit/ea6769c))


### BREAKING CHANGES

* new arguments $.fn.wire(attr, factory) and the return is
now a promise.



# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.
