function findAllHobbyists(hobby, hobbies) {
    const result = [];
    for (let key in hobbies) {
        for (let value of hobbies[key]) {
            if (value === hobby) {
                result.push(key);
            }
        }


    }
    return result;

}

var hobbies = {

    "Steve": ['Fashion', 'Piano', 'Reading'],

    "Patty": ['Drama', 'Magic', 'Pets'],

    "Chad": ['Puzzles', 'Pets', 'Yoga']

};

console.log(findAllHobbyists('Pets', hobbies));