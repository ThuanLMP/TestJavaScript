function findShortest(vectors) {

    let shortestLength = Math.sqrt(vectors[0][0]*vectors[0][0] + vectors[0][1]*vectors[0][1] + vectors[0][2]*vectors[0][2]);

    let result = vectors.reduce((shortestVect, vect) => {
        let vectLength = Math.sqrt(vect[0]*vect[0] + vect[1]*vect[1] + vect[2]*vect[2]);

        if (shortestLength > vectLength) {
            shortestLength = vectLength;
            shortestVect = vect;
        }

        return shortestVect;
    })
    return result;
}

var vectors = [[1, 3, 4], [1, 5, 7], [2, 2, 2], [3, 3, 3]];

var shortest = findShortest(vectors);

console.log(shortest)