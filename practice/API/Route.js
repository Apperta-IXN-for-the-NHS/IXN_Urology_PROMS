const express = require('express');
const mongoose = require('mongoose');
const Symptom = require('../DB/dbmodels');
const route = express.Router();

route.post('/', async (req, res) => {
  const { symptomDescription, symptomDate } = req.body;
  let symptom = {};
  symptom.symptomDescription = symptomDescription;
  symptom.symptomDate = symptomDate;
  let symptomModel = new Symptom(symptom);
  await symptomModel.save();
  res.json(symptomModel);
});

module.exports = route;