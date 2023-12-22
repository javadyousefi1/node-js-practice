const courseModel = require("../models/course.model");

async function get(req, res) {
  try {
    const courses = await courseModel.find();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(courses));
    setTimeout(() => {
      res.end();
    }, 4000);
  } catch (err) {}
}

const getCourseController = { get };

module.exports = getCourseController;
