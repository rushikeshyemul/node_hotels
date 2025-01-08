const callback = () => {
  console.log("I am a CallBack Function Now I am Executing");
};

const add = (a, b, callback) => {
  let sum = a + b;
  console.log("I am Add Function my work is done");
  console.log("Addition is : " + sum);
  callback(); // Executing the callback function
};

add(5, 5, callback);
