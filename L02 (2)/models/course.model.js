const courses = require("../data/course.json");

async function find() {
  return new Promise((resolve, reject) => {
    resolve(courses);
  });
}

const courseModel = {
  find,
};

module.exports = courseModel;
