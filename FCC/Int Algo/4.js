function whatIsInAName(collection, source) {
    var arr = [];
    // Only change code below this line
    arr = collection.filter(
        obj => {
            Object.keys(source).forEach(item => {
                if (obj[item] === source[item]) {
                    return false
                }
                // else{return false}
            })
        }
    )
    // Only change code above this line
    console.log(arr);
}

whatIsInAName([
    { "apple": 1, "bat": 2 },
    { "apple": 1 },
    { "apple": 1, "bat": 2, "cookie": 2 }],
    { "apple": 1, "cookie": 2 }
)