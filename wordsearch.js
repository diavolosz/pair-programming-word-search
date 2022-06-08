

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
  return false
}



module.exports = wordSearch
