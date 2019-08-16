module.exports = fn => {
  return function(...args) {
    return new Promise((resolve, reject) => {
      console.log(args);

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
