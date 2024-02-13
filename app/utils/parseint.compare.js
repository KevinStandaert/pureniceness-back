function parseIntAndCompare(id, userId) {
  const idParsed = parseInt(id, 10);
  const userIdParsed = parseInt(userId, 10);
  if (idParsed !== userIdParsed) {
    return false;
  }
  return true;
}

export default parseIntAndCompare;
