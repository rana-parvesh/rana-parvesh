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
    }, 3000);
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

// task1()
//   .then((res) => console.log(res))
//   .then(task2)
//   .then((res) => console.log(res))
//   .then(task3)
//   .then((res) => console.log(res))
//   .then(task4)
//   .then((res) => console.log(res));
//   .catch((err)=>console.log(err))

/*
// ohter waye
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
*/

// await function ES7
const callAllTask = async () => {
  try {
    let t1 = await task1();
    console.log(t1);

    let t2 = await task2();
    console.log(t2);

    let t3 = await task3();
    console.log(t3);

    let t4 = await task4();
    console.log(t4);
  } catch (err) {
    console.log(err);
  }
};
callAllTask();
