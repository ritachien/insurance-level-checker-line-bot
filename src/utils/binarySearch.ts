const binarySearch = (numArray: number[], target: number): number => {
  const middleIndex = Math.floor(numArray.length / 2) - 1

  if (target === numArray[middleIndex]) return numArray[middleIndex]
  if (numArray.length === 1) return numArray[0]

  if (target > numArray[middleIndex]) {
    return binarySearch(numArray.slice(middleIndex + 1, numArray.length), target)
  } else {
    return binarySearch(numArray.slice(0, middleIndex + 1), target)
  }
}

export default binarySearch
