const student = require("../models/students");
const studentCtrl = {};

studentCtrl.getStudents = async (req, res, next) => {
  const students = await student.find(); //This method is used to search all the data in our db.
  res.json(students);
};

studentCtrl.createStudents = async (req, res) => {
  const studentCreated = new student({
    name: req.body.name,
    lastName: req.body.lastName,
    secondSurname: req.body.secondSurname
  });
  await studentCreated.save();
  res.json({
    status: "Student Save!"
  });
};

studentCtrl.getStudent = async (req, res) => {
  const studentFind = await student.findById(req.params.id);
  res.json(studentFind);
  //student.findById();
};

studentCtrl.editStudent = async (req, res,next) => {
  const { id } = req.params;
  const studentEdit = {
    name: req.body.name,
    lastName: req.body.lastName,
    secondSurname: req.body.secondSurname,
  };

  await student.findByIdAndUpdate(id, { $set: studentEdit }, { new: true });
  res.json({ satus: "Student updated!" });
};

studentCtrl.deleteStudent = async (req, res) => {
  await student.findByIdAndRemove(req.params.id);
  res.json({ status: "Deleted!" });
};

module.exports = studentCtrl;
