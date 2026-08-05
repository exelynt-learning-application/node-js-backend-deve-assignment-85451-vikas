function welcome(name) {
  if (!name) {
    return "Welcome!";
  }

  return `Welcome, ${name}!`;
}

module.exports = {
  welcome
};
