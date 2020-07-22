argsArray = process.argv.slice(2);

//function that increments through array and calls reverse function
const arrayInc = function(arr){
  let final = '';
  for (i = 0; i < arr.length; i++){
    final = reverse(arr[i]);
  }
  console.log(final);
}

//function that reverses string
const reverse = function(arg) {
  let reverseStr = '';
    for (j = arg.length-1; j >= 0; j--){
      reverseStr = reverseStr + arg[j];
    }
    return reverseStr;
  };


console.log(arrayInc(argsArray));

