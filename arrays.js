var chocolateBars = [ "snickers", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray(array, element) {
  return chocolateBars.unshifted(element)
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  return [array, element]
}