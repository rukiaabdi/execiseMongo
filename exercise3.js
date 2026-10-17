db.students.insertMany([
  {
    name: "Ayaan",
    email: "ayaan@gmail.com",
    points: 50,
    courses: ["React", "HTML"]
  },
  {
    name: "Khalid",
    email: "khalid@gmail.com",
    points: 30,
    courses: ["Node.js", "JavaScript"]
  },
  {
    name: "Nasteexo",
    email: "nasteexo@gmail.com",
    points: 40,
    courses: ["React", "Node.js"]
  }
])

db.students.updateOne(
  { name: "Khalid" },
  { $set: { email: "khalid@example.com" } }
)

db.students.updateOne(
  { name: "Ayaan" },
  { $inc: { points: 20 } }
)

db.students.updateOne(
  { name: "Nasteexo" },
  { $push: { courses: "GraphQL" } }
)

db.students.updateOne(
  { name: "Ayaan" },
  { $pull: { courses: "React" } }
)

db.students.updateOne(
  { name: "Ayaan" },
  {
    $set: { email: "ayaan@dugsiiye.com" },
    $inc: { points: 10 },
    $push: { courses: "Next.js" }
  }
)