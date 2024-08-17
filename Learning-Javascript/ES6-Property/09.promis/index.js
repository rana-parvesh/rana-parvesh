// create a promis - pending-> resolve-> reject
// catch, then, finaly
/*
const promis1 = new Promise((resolve, reject) => {
  let completedPromis = true;
  Object = {
    name: "rana",
    age: 25,
    works: "web developement",
  };
  if (completedPromis) {
    resolve(Object);
  } else {
    reject(" the programe was rejected");
  }
});
promis1.then((params) => {
  console.log(params);
});
promis1.catch((err) => {
  console.log(err);
});
*/
// console.log(promis1);

// ekasthe sob promis run korar jonno proyojonio
// Promise.all([promis1, promis1]).then((res) => console.log(res));

//promis changeing

const task1 = () => {
  return new Promise((resolve, reject) => {
    resolve("task one is complete");
  });
};

const task2 = () => {
  return new Promise((resolve, reject) => {
    setInterval(() => {
      resolve("task two is complete");
    }, 5000);
  });
};

const task3 = () => {
  return new Promise((resolve, reject) => {
    reject("task three is not complete");
  });
};

const task4 = () => {
  return new Promise((resolve, reject) => {
    resolve("task four is complete");
  });
};
/*
task1()
  .then((res) => console.log(res))
  .then(task2)
  .then((res) => console.log(res))
  .then(task3)
  .then((res) => console.log(res))
  .then(task4)
  .then((res) => console.log(res));
  .catch((err)=>console.log(err))
*/
task1()
  .then((res) => {
    console.log(res);
    return task2();
  })
  .then((res) => {
    console.log(res);
    return task3();
  })
  .then((res) => {
    console.log(res);
    return task4();
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err); // This should now catch the rejection from task3
  });
