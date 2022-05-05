const Calculator = (function() {
 	const add = (x, y) => x + y;
 	const divide = (x, y) => x / y;
 	const multiply = (x, y) => x * y;
 	const substract = (x, y) => x - y;

 	return {
 		add, divide, multiply, substract
 	};
})();

console.log(Calculator.add(44, 99));