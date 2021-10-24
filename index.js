module.exports = {
  diff: (o1, o2) => {
    if (!o1 || !o2) {
      throw "At least 2 arguments";
    }
    if (typeof o1 !== "object" || typeof o2 !== "object") {
      throw "One of the 2 arguments is not an object";
    }
    let o = {};
    for (let key in o1) {
      if (o2.hasOwnProperty(key)) {
        if (o2[key] !== o1[key]) {
          o[key] = o2[key];
        }
      }
    }
    return o;
  }
};
