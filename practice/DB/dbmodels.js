const mongoose = require('mongoose');

//create mongoose schema for symptoms
const symptomSchema = new mongoose.Schema({
  symptomDescription: {
    type: String
  },
  symptomDate: { 
    type: Date, default: Date.now 
  }
});

//compile a model for the collection 'symptom'
module.exports = Symptom = mongoose.model('symptom', symptomSchema);