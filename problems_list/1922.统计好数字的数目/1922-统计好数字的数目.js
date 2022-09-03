const mod = BigInt(1000000007);
var superPow = function(a, b) {
	a = BigInt(a);
	b = BigInt(b);

	let ret = BigInt(1);
	a = a % mod;
	while (b) {
		if (b & BigInt(1)) ret = ret * a % mod;
		a = a * a % mod;
		b = b >> BigInt(1);
	}
	return ret;
};
var countGoodNumbers = function(n) {
	let ji = Math.floor(n / 2);
	let ou = n - ji;
	let ret = BigInt(1);

	ret = ret * BigInt(superPow(4, ji)) % mod;
	ret = ret * BigInt(superPow(5, ou)) % mod;
	return ret;
};
