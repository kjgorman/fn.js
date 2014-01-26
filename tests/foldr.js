var fn = require('../build/fn');
var chai = require('chai');
var expect = chai.expect;

describe('.foldr()', function () {

	it('should return accumulator when empty list', function () {
		expect(fn.foldr(fn.id, 0, [])).to.equal(0);
	});

	it('should reduce a list', function () {
		expect(fn.foldr(fn.op['+'], 0, [1,2,3])).to.equal(6);
	});

	it('should have type foldr :: (a -> b -> b) -> b -> [a] -> a', function () {
    var f = function (string, integer) { return integer + string.length; };
    expect(fn.foldr(f, 0, ["foo", "bar"])).to.equal(6);
	});

	it('should evaluate right-to-left', function () {
		expect(fn.foldr(fn.op['/'], 4, [2,8])).to.equal(1);
	});

	it('should be using a different array of values at each step', function () {
		var vals = [1,2,3];
		fn.foldr(fn.identity, 0, vals);
		expect(vals.length).to.equal(3);
		expect(vals[0]).to.equal(1);
	});

});
