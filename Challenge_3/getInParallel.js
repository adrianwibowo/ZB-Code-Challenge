/**
 * 
 * Implement the getInParallel Function that should be used to invoke multiple API calls in parallel.
 * The function accepts an array of function that return a Promise. 
 * The function should return a promise that should resolve to an array of result from the apiCalls argument. 
 */
function getInParallel(apiCalls) {
    // Write your code here  
    return new Promise((resolve, reject) => {
        let results = [];
        for (let i = 0; i < apiCalls.length; i++) {
            apiCalls[i]()
                .then((data) => results.push(`Result: ${data}`))
                .catch((err) => results.push(`Error: ${err}`));
        }
        
        resolve(results);
    });

}

module.exports.getInParallel = getInParallel;