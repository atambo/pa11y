// This file is part of pa11y.
// 
// pa11y is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// 
// pa11y is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// 
// You should have received a copy of the GNU General Public License
// along with pa11y.  If not, see <http://www.gnu.org/licenses/>.

/* jshint maxlen: false, maxstatements: false */
/* global before, describe, it */
'use strict';

var assert = require('proclaim');
var pkg = require('../../package.json');
var runPa11y = require('./helper/run-pa11y');

describe('pa11y http://localhost:4117/normal (no useragent specified)', function () {

	before(function (done) {
		var that = this;
		runPa11y('http://localhost:4117/normal', function (err, result) {
			that.result = result;
			done();
		});
	});

	it('should be successful', function () {
		assert.isNull(this.result.err);
	});

	it('should use the useragent "pa11y/' + pkg.version + '"', function () {
		assert.strictEqual(this.site.lastUseragent, 'pa11y/' + pkg.version);
	});

});

describe('pa11y --useragent foo http://localhost:4117/normal', function () {

	before(function (done) {
		var that = this;
		runPa11y('--useragent foo http://localhost:4117/normal', function (err, result) {
			that.result = result;
			done();
		});
	});

	it('should be successful', function () {
		assert.isNull(this.result.err);
	});

	it('should use the useragent "foo"', function () {
		assert.strictEqual(this.site.lastUseragent, 'foo');
	});

});
