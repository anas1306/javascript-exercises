const sumAll = function(startNum, endNum) { 

    if (startNum < endNum) {
      starting = startNum;
      ending = endNum;
    } else {
      starting = endNum;
      ending = startNum;
    }

    let summation = 0

      for (i = starting; i <= ending; i++) {
        summation += i;
      }

    if (
        startNum < 0 || 
        endNum < 0 || 
        startNum % 1 != 0 || 
        endNum % 1 != 0 || 
        typeof startNum != "number" ||  
        typeof endNum != "number"
    ) {
        return "ERROR";
    } else {
        return summation;
    }

};

// Do not edit below this line
module.exports = sumAll;
