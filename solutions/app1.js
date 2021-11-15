const converterPromise = (array = []) => new Promise ((resolve, reject) => {
    const isString = (item) => typeof item === 'string'
    if (array.every(isString)) {
        resolve(array.map(item => item.toUpperCase()))
    }
    else {
        reject('Error: Not all elements are string type!')
    }}
)

export default converterPromise;
