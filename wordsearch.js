

// const wordSearch = (word) => { 
const wordSearch = (letters, word) => {

    let reverseWord = word.split("").reverse().join("");

    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true
        } else if (l.includes(reverseWord)) {
            return true
        }
    }


    let gridFlip = function (matrix) {

        let outerArray = []

        for (let x = 0; x < matrix.length; x++) {
            for (let y = 0; y < matrix[x].length; y++) {
                if (x === 0) {
                    outerArray[y] = [matrix[x][y]]
                } else {
                    outerArray[y].push(matrix[x][y])
                }
            }
        }
        return outerArray
    }

    let flip = gridFlip(letters)

    const verticalJoin = flip.map(ls => ls.join(''))
    for (l of verticalJoin) {
        if (l.includes(word)) {
            return true
        } else if (l.includes(reverseWord)) {
            return true
        }
    }


    let scanDiagonal = function(array, bottomLeft) {
      let YOflength = array.length;
      let XOflength = array[0].length;
      let maxLength = Math.max(XOflength, YOflength);
      let temp;
      let returnArray = [];
      for (let k = 0; k <= 2 * (maxLength - 1); ++k) {
          temp = [];
          for (let y = YOflength - 1; y >= 0; --y) {
              let x = k - (bottomLeft ? YOflength - y : y);
              if (x >= 0 && x < XOflength) {
                  temp.push(array[y][x]);
              }
          }
          if(temp.length > 0) {
              returnArray.push(temp.join(''));
          }
      }
      return returnArray;
    }
  return false
}



module.exports = wordSearch
