module.exports = function towelSort(matrix) {
  const arr = [];  
  if (!matrix) {
    return [];
  }
  matrix.map(function(val, i) {
    if (i % 2 === 0) {
      for (key of val) { 
        arr.push(key); 
      } 
    } else {
      for (key of val.reverse()) {  
        arr.push(key);
      } 
    }
  })
  return arr;
}
