const express = require('express');
const router = express.Router();

const students = require('../controllers/students.controller');

router.get('/', students.getStudents);    
router.post('/',students.createStudents);
router.get('/:id',students.getStudent);
router.put('/:id', students.editStudent);
router.delete('/:id',students.deleteStudent);


module.exports = router;