use dugsiiye

db.students.insertMany([
  {
    name: "Amina",
    age: 20,
    email: "amina@gmail.com",
    courses: ["HTML", "CSS"]
  },
  {
    name: "Mohamed",
    age: 22,
    email: "mohamed@gmail.com",
    courses: ["Java", "Python"]
  },
  {
    name: "Hodan",
    age: 19,
    email: "hodan@gmail.com",
    courses: ["React", "MongoDB"]
  }
])

db.students.find()

db.students.updateOne(
  { name: "Amina" },
  { $set: { email: "amina2026@gmail.com" } }
)

db.students.find({ name: "Qadra" })

db.students.deleteOne({ name: "Mohamed" })

db.students.find()