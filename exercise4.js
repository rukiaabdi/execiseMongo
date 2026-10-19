db.students.aggregate([
  { $match: { points: { $gt: 20 } } },
  { $unwind: "$courses" },
  {
    $group: {
      _id: "$courses",
      total: { $sum: 1 }
    }
  },
  {
    $project: {
      course: "$_id",
      total: 1,
      _id: 0
    }
  },
  { $sort: { total: -1 } }
])