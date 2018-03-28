const randomHash = (count = 1) => {
  let i = 1;
  let hash = '';
  while (i <= count) {
    const calc = Math.random().toString(36).substring(2, 15);
    hash = hash.concat(calc);
    i++;
  }

  return hash;
};

export default randomHash;
