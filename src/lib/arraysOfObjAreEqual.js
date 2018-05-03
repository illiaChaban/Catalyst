
let objectsAreEqual = (obj1, obj2) => {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}
export let arraysOfObjAreEqual = (arr1, arr2) => {
    return arr1.length === arr2.length && arr1.every( (obj, i) => objectsAreEqual(obj, arr2[i]));
}