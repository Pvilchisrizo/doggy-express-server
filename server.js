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

app.get("/medium", (req, res) => {
  res.send(
    "🐕 Medium-sized dogs generally weigh between 22 and 60 pounds (10-27 text{ kg) and stand (15-25) inches tall, offering a versatile happy medium between small and large breeds. They are often athletic, active, and highly trainable, making them excellent family companions, hiking partners, or apartment dogs depending on the specific breed."
  );
});

app.get("/large", (req, res) => {
  res.send(
    "🐕‍🦺 Large dogs are generally defined as breeds weighing between 50 and 100 pounds (23 to 45 kg) and standing over 22 to 24 inches tall at the shoulder. Often characterized as gentle giants, they are typically calm, loyal, and affectionate, yet require substantial space, training, and specialized nutritional care to manage health risks like hip dysplasia and bloat."
  );
});
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
