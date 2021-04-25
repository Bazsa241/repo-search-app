const listObjectKeys = (obj) => {
  const result = []
  for(const key in obj) {
    result.push(key)
  }
  return result
}

export default listObjectKeys