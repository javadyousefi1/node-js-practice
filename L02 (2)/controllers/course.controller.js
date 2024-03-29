const courseModel = require("../models/course.model");

async function get(req, res) {
  try {
    const courses = await courseModel.find();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(courses));
    res.end();
  } catch (err) { }
}

async function getById(req, res) {
  const id = req.url.split("/")[3]
  try {
    const courses = await courseModel.findById(id);

    if (!courses) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.write(JSON.stringify({ message: "course not found" }));
      res.end();
    }

    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(courses));
    res.end();
  } catch (err) { }
}

async function create(req, res) {
  try {
    let body = ""
    req.on("data", (chunk) => {
      body += chunk.toString()
    })

    req.on("end", async () => {
      const newData = { id: new Date().getTime(), ...JSON.parse(body) }
      const result = await courseModel.create(newData);
      res.writeHead(201, { "Content-Type": "application/json" });
      res.write(JSON.stringify(result));
      res.end();
    })

  } catch (err) { }
}

async function update(req, res) {
  try {
    const paramsId = req.url.split("/")[3]
    const courses = await courseModel.findById(paramsId);

    if (!courses) {
      res.writeHead(404, { "Content-Type": "application/json" })
      res.write(JSON.stringify({ message: "course not found" }));
      res.end()
    }

    let body = ""
    req.on("data", (chunks) => {
      body += chunks
    })

    req.on("end", async () => {
      await courseModel.update(paramsId, body);
      res.writeHead(201, { "Content-Type": "application/json" });
      res.write(JSON.stringify({ message: "updated succsecfully" }));
      res.end()
    })



  } catch (err) {
    console.error(err)
  }
}

const getCourseController = { get, getById, create, update };

module.exports = getCourseController;
