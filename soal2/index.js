const bracketVal = (string) => {
  const inp = string.replace(/\(/g, "[").replace(/\)/g, "]");
  try {
    JSON.parse(inp);
    return true;
  } catch (e) {
    return false;
  }
  return true;
};

console.log(bracketVal("()))"));
