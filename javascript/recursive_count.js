function recursiveCount(num = 0) {
  // type your code here
  if (num < 10) {
    console.log(num)
    num += 1
    return recursiveCount(num)

  }
}



if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file
  //set base condition < 10
  //log value of param
  //increment param
  //return function call with incremented param
// And a written explanation of your solution
