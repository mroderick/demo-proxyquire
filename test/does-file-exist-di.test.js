'use strict';

var sinon = require('sinon');
var assert = require('referee').assert;

var doesFileExist = require('../lib/does-file-exist-di');

describe('doesFileExist - dependency injection', function () {
    var fakeExistsSync;

    beforeEach(function () {
        fakeExistsSync = sinon.stub(); // create a stub for every test
    });

    describe('when a path exists', function () {
        beforeEach(function() {
            fakeExistsSync.returns(true); // set the re-turn value that we want
        });

        it('should return `true`', function () {
            var actual = doesFileExist(fakeExistsSync, '9d7af804-4719-4578-ba1d-5dd8a4dae89f');

            assert.isTrue(actual);
        });
    });
});
