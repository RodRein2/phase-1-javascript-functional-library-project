function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else if (typeof collection === 'object') {
      for (let key in collection) {
        callback(collection[key]);
      }
    }
    return collection;
  }
  
function myMap(collection, callback) {
    const result = [];
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            result.push(callback(collection[i]));
        }
    } else if (typeof collection === 'object') {
        for (let key in collection) {
            result.push(callback(collection[key]));
        }
    }
    return result;
}

function myReduce(collection, callback, acc) {
    let iniVal = 0;
    if (acc === undefined) {
      if (Array.isArray(collection)) {
        acc = collection[0];
        iniVal = 1;
      } else if (typeof collection === 'object') {
        const keys = Object.keys(collection);
        acc = collection[keys[0]];
        iniVal = 1;
      }
    }
  
    if (Array.isArray(collection)) {
      for (let i = iniVal; i < collection.length; i++) {
        acc = callback(acc, collection[i], i, collection);
      }
    } else if (typeof collection === 'object') {
      const keys = Object.keys(collection);
      for (let i = iniVal; i < keys.length; i++) {
        const key = keys[i];
        acc = callback(acc, collection[key], key, collection);
      }
    }
  
    return acc;
  }
  
function myFind (collection, predicate) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if(predicate(collection[i])) {
                return(collection[i]);
            }
        }
    } else if (typeof collection === 'object') {
        for (let key in collection) {
            if (predicate(collection[key])) {
                return collection[key];
            }
        }
    }
    return undefined;
}
  
function myFilter (collection, predicate) {
    const result = [];
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if(predicate(collection[i])) {
                result.push(collection[i])
            }
        }
    } else if (typeof collection === 'object') {
        for (let key in collection) {
            if(predicate(collection[key])) {
                result.push(collection[key]);
            }
        }
    }
    return result;
}
  
function mySize(collection) {
    if(Array.isArray(collection)) {
        return collection.length;
    } else if (typeof collection === 'object') {
        return Object.keys(collection).length;
    }
}
// Array Functions

function myFirst(array, n) {
    if (n !== undefined) {
        return array.slice (0, n);
    } else {
        return array[0];
    }
}

function myLast(array, n) {
    if (n !== undefined) {
        return array.slice (-n);
    } else {
        return array[array.length -1]
    }
}

// //bonus lab portion

function mySortBy(array, callback) {
    return [...array].sort((a, b) => {
      const valueA = callback(a);
      const valueB = callback(b);
  
      if (typeof valueA === 'number' && typeof valueB === 'number') {
        return valueA - valueB; //compares numbers
      } else {
        return valueA.localeCompare(valueB); //compares strings?
      }
    });
  }
  
function myFlatten(array, shallow = false, newArr = []) {
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i]) && !shallow) {
        myFlatten(array[i], false, newArr); //flatten inner arrays
      } else if (Array.isArray(array[i]) && shallow) {
        for (let j = 0; j < array[i].length; j++) { 
          newArr.push(array[i][j]);
        }
      } else {
        newArr.push(array[i]);
      }
    }
    return newArr;
  }

function myKeys(object) {
    return Object.keys(object);
  }

function myValues(object) {
    return Object.values(object);
}
