'use strict';

(() => {

    const multiArr = [1, 2, [3, [4, [5], 6],[7, 8, [9, 0]]]];
    const simpleArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]; 

    function flatEmul(arr) {
        if (arguments.length > 1) throw new Error ('Function accepts only 1 argument, too much arguments provided');
        return arr.reduce((prev, item) => Array.isArray(item) ? prev.concat(flatEmul(item)) : prev.concat(item), []);
    }    

    console.log(flatEmul(multiArr));
    console.log(flatEmul(simpleArr));
    console.log(flatEmul(multiArr, simpleArr));

})();