var fn = require('../build/fn');
var chai = require('chai');
var expect = chai.expect;

describe('.identity()', function () {

	it('should return exactly the input argument', function () {
		var x = 1;
		var result = fn.identity(x);
		expect(result).to.equal(1);
	});

	it('should be aliased to `id` additionally', function () {
		var x = 1;
		var result = fn.id(x);
		expect(result).to.equal(1);
	});

	it('should return the first of many arguments', function () {
		var x = 1, y = 2, z = 3;
		var result = fn.identity(x, y, z);
		expect(result).to.equal(1);
	});

});
