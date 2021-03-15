module.exports = function check(str, bracketsConfig) {
    let bracketsConfigMap = new Map(bracketsConfig);
    let currentOpenBracket = [];
  
    for (let symbol of str) {
      if (currentOpenBracket.length === 0) {
               if (bracketsConfigMap.has(symbol)) {
          currentOpenBracket.push(symbol);
        } else {
          return false;
        }
      } else {
  
        if (symbol === bracketsConfigMap.get(currentOpenBracket[currentOpenBracket.length - 1])) {
          currentOpenBracket.pop();
        } else if (bracketsConfigMap.has(symbol)) {
          currentOpenBracket.push(symbol);
        } else {
          return false;
        }
      }
    }
    if (currentOpenBracket.length !== 0) {
      return false;
    }
    return true;
  }
