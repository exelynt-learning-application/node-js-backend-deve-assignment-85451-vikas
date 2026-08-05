function fetchData(callback) {
  setTimeout(() => {
    const success = true;

    if (success) {
      callback(null, "Data fetched successfully!");
    } else {
      callback("Failed to fetch data.", null);
    }
  }, 2000);
}

// Promise-based Function
function fetchDataPromise() {
  return new Promise((resolve, reject) => {
    fetchData((error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
}

// Using Promise
fetchDataPromise()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
