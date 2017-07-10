function factorialize(num) {
  var factor = 0;
  var factorArray = [];

  if (num !== 0) {
    for (var i = 0; i < num; i++) {
    factor = i + 1;
    factorArray.push(factor);
    }
  } else {
  	return 1;
  }

  var arrayMultiplication = factorArray.reduce(function(a,b) {
  return a * b;
  });

  return arrayMultiplication;
}
