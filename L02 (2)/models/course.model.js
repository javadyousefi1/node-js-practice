const courses = require("../data/course.json");
const fs = require("fs")

async function find() {
  return new Promise((resolve, reject) => {
    resolve(courses);
  });
}

async function findById(id) {
  return new Promise((resolve, reject) => {
    resolve(courses.find(item => +item.id === +id));
  });
}

async function create(newCourse) {
  return new Promise((resolve, reject) => {
    fs.readFile(`${process.cwd()}/data/course.json`, function (err, data) {
      var json = JSON.parse(data)

      json.push(newCourse)

      fs.writeFile(`${process.cwd()}/data/course.json`, JSON.stringify(json), (err) => {
        if (err) reject({ message: "fail to write file" })
        else resolve({ message: "added succesfully", data: newCourse })
      })
    })


  })
}


async function update(id, payload) {
  return new Promise((resolve, reject) => {
    fs.readFile(`${process.cwd()}/data/course.json`, function (err, data) {
      // parse json
      var json = JSON.parse(data)

      // merge new data for updating
      const updatedCourse = json.map(item => {
        if (+item.id === +id) {
          Object.assign(item, JSON.parse(payload))
        }

        return item
      })


      fs.writeFile(`${process.cwd()}/data/course.json`, JSON.stringify(updatedCourse), (err) => {
        if (err) reject({ message: "fail to write file on update" })
        else resolve({ message: "updated succesfully" })
      })

    })
    resolve()
  })
}


async function remove(id) {
  return new Promise((resolve, reject) => {
    fs.readFile(`${process.cwd()}/data/course.json`, function (err, data) {
      const json = JSON.parse(data)

      const filteredData = json.filter(item => item.id != id)
      fs.writeFile(`${process.cwd()}/data/course.json`, JSON.stringify(filteredData), (err) => {
        if (err) reject({ message: "fail to write file" })
        else resolve({ message: "removed succesfully" })
      })

    })
  })
}


const courseModel = {
  find, findById, create, update, remove
};

module.exports = courseModel;
