const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

let urls = [{
    original:"http://geeksforgeeks.com",
    short:"abc123",
    validity:10,
}
]; 
app.post("/shorturls", (req, res) => {
  const { url, validity } = req.body;
  if (!url || !validity) {
    return res.status(400).json({ message: "url and validity required" });
  }
  const short = "abc";
  urls.push({ original: url, short, validity: Number(validity) });
  res.status(201).json({ shortUrl: `http://localhost:${port}/${short}` });
});
app.get("/shorturls", (req, res) => {
  res.json(urls);
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
