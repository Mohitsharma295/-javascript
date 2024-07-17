import fs from "fs";

const file = fs.readFile("./data.json", (err, data) => {
  if (err) {
    console.log("error", err);
  } else {
    const d = data.length ? JSON.parse(data) : [];
    console.log(d);
  }
});

function plus(a, b) {
  return a + b;
}

let a = (a, b) => {
  return a + b;
};
