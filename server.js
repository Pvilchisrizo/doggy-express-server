const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Welcome to adopt a dog 🐶");
});

app.get("/small", (req, res) => {
  res.send(
    "🐩 Small dogs, generally weighing 20 to 25 pounds or less, are compact, intelligent, and often long-lived companions, making them ideal for apartment living or limited spaces. While many act as affectionate lap dogs, they often have huge personalities and high energy, requiring regular exercise and mental stimulation"
  );
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
