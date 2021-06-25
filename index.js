const express = require("express");
const axios = require("axios");

const server = express();
const port = 3000;

const getData = () =>
  new Promise((resolve, reject) => {
    axios
      .post("https://prodapi-app.tmoney.co.id/api/get-city")
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });

server.get("/", async (req, res) => {
  try {
    let name = req.query.name;
    let getRes = await getData();
    let cityRes = getRes.city.filter(function (x) {
      return x.name.toLowerCase().includes(name);
    });
    if (cityRes.length == 0) {
      return res.send({
        resultCode: 404,
        resultDesc: "SUKSES & di Approve oleh sistem",
        totalSearch: cityRes.length,
        city: cityRes,
        timeStamp: new Date(),
      });
    }
    return res.send({
      resultCode: 0,
      resultDesc: "SUKSES & di Approve oleh sistem",
      totalSearch: cityRes.length,
      city: cityRes,
      timeStamp: new Date(),
    });
  } catch (e) {
    console.log(e);
  }
});

server.listen(port, () => {
  console.log(`Service running on port http://localhost:${port}`);
});
