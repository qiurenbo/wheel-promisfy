module.exports = fn => {
  return function(...args) {
    return new Promise((resolve, reject) => {
      args.push((err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });

      fn.apply(this, args);
    });
  };
};
