argsArray = process.argv.slice(2);

//function that increments through array and calls reverse function
const arrayInc = function(arr){
  let pigged = '';
  for (i = 0; i < arr.length; i++){
    if (i < arr.length - 1) {
      pigged += pigLatin(arr[i]) + ' ';
    }
    else {
      pigged += pigLatin(arr[i]);
    }
  }
  return pigged;
}

//function that reverses string
const pigLatin = function(arg) {
  let pigLatinStr = '';
    for (j = 1; j < arg.length; j++){
      pigLatinStr += arg[j];
      //console.log(pigLatinStr);
    }
  pigLatinStr = pigLatinStr + arg[0] + 'ay';
  return pigLatinStr;
  };


console.log(arrayInc(argsArray));

