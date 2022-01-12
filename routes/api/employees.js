const express = require('express');
const router = express.Router();

require('dotenv').config();
const { check, validationResult } = require('express-validator');

const Employee = require('../../models/Employee');

// @route   POST api/employees
// @desc    Add Employee
router.post(
  '/',
  check('name', 'name is required').not().isEmpty(),
  check('birthDate', 'birthDate is required').not().isEmpty(),
  check('gender', 'gender is required').not().isEmpty(),
  check('salary')
    .isLength({ min: 5 })
    .withMessage('Choose an appropriate salary'),
  async (req, res) => {
    console.log(req.body);
    const { name, birthDate, gender, salary } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      //See if employee exists
      let employee = await Employee.findOne({ $and: [{ name }, { gender }] });

      if (employee) {
        return res.status(400).json({
          errors: [{ msg: 'Employee already exists' }],
        });
      }

      employee = new Employee({
        name,
        birthDate,
        gender,
        salary,
      });

      //Save to MongoDB
      await employee.save();

      res.json({ employee });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route   GET api/employees/
// @desc    Return Registered Employees
router.get('/', async (req, res) => {
  try {
    const employees = await Employee.find({});
    res.json(employees);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/employees/:employee_id
// @desc    Get an employee by id
router.get('/:employee_id', async (req, res) => {
  try {
    //Remove employee
    const employee = await Employee.findOne({ _id: req.params.employee_id });
    res.json(employee);
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(400).json({
        msg: 'There is no Employee with this id',
      });
    }
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/employees/:employee_id
// @desc    Update an employee by Id
router.put(
  '/:employee_id',
  check('name', 'name is required').not().isEmpty(),
  check('birthDate', 'birthDate is required').not().isEmpty(),
  check('gender', 'gender is required').not().isEmpty(),
  check('salary')
    .isLength({ min: 5 })
    .withMessage('Choose an appropriate salary'),
  async (req, res) => {
    let { name, birthDate, gender, salary } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      //Check If there is employee with the Id
      let employee = await Employee.findById(req.params.employee_id);
      if (!employee) {
        return res.status(400).json({
          errors: [{ msg: `Employee does not exists` }],
        });
      }

      //Check if there is a registered Employee with the Employee name and gender
      const nameexist = await Employee.findOne({
        $and: [{ name }, { gender }],
      });
      if (nameexist && nameexist.name !== employee.name) {
        return res.status(400).json({
          errors: [
            {
              msg: `There is an Employee registered with this name`,
            },
          ],
        });
      }

      const updatedEmployee = {};
      updatedEmployee.name = name;
      updatedEmployee.birthDate = birthDate;
      updatedEmployee.gender = gender;
      updatedEmployee.salary = salary;

      employee = await Employee.findOneAndUpdate(
        { _id: req.params.employee_id },
        { $set: updatedEmployee },
        { new: true }
      );

      await employee.save();

      res.json(employee);
    } catch (err) {
      console.error(err);
      if (err.kind == 'ObjectId') {
        return res.status(400).json({
          msg: 'There is no Employee with this id',
        });
      }
      res.status(500).send('Server Error');
    }
  }
);

// @route   DELETE api/employees/:employee_id
// @desc    Delete an employee by id
router.delete('/:employee_id', async (req, res) => {
  try {
    //Remove employee
    await Employee.findOneAndRemove({ _id: req.params.employee_id });
    res.json({ _id: req.params.employee_id });
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(400).json({
        msg: 'There is no Employee with this id',
      });
    }
    res.status(500).send('Server Error');
  }
});

module.exports = router;
