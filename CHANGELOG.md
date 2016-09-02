# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

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
