var fn = require('../build/fn');
var chai = require('chai');
var expect = chai.expect;

describe('.foldl()', function () {

	it('should return accumulator when empty list', function () {
		expect(fn.foldl(fn.id, 0, [])).to.equal(0);
	});

	it('should reduce a list', function () {
		expect(fn.foldl(fn.op['+'], 0, [1,2,3])).to.equal(6);
	});

	it('should have type foldl :: (a -> b -> a) -> a -> [b] -> a', function () {
		var f = function (integer, str) { return integer + str.length };
		expect(fn.foldl(f, 0, ["foo", "bar"])).to.equal(6);
	});

	it('should evaluate left-to-right', function () {
		expect(fn.foldl(fn.op['/'], 4, [2,8])).to.equal(0.25);
	});

	it('should be using a different array of values at each step', function () {
		var vals = [1,2,3];
		fn.foldl(fn.identity, 0, vals);
		expect(vals.length).to.equal(3);
		expect(vals[0]).to.equal(1);
	});

});
