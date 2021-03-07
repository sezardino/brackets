module.exports = function check(str, bracketsConfig) {
  const strArr = str.split('');
  console.log(
    strArr.some((item) => typeof item !== '(' || typeof item !== ')')
  );
  console.log(strArr);
  if (strArr.some((item) => typeof item !== '(' || typeof item !== ')')) {
    return false;
  }
  if (bracketsConfig.some((item) => typeof +item === 'number')) {
    return false;
  }
  if (strArr.length / 2 === bracketsConfig.length) {
    let solution = [];
    for (let i = 0; i < strArr.length / 2; i++) {
      solution.push(...strArr.slice(i, i + 1), ...strArr.slice(-1 - i));
    }
    // console.log(solution);
    // console.log(bracketsConfig);
    const t = solution.map((item, index) => item === bracketsConfig[index]);
    if (t.some((item) => item === true)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
