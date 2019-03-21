const getLiteral = (literals, key) => {
  return literals
    ? literals[key]
    : `[[${key}]]`
}

export {
  getLiteral
};