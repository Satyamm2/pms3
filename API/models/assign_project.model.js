import mongoose from 'mongoose';
import UniqueValidator from 'mongoose-unique-validator';

const assignProjectSchema = mongoose.Schema({
  _id: Number,
  ptitle: {
    type: String,
    required: [true,"Project title is required"],
    lowercase: true,
    trim: true,
  },
  gname: {
    type: String,
    required: [true,"Group name is required"],
    lowercase: true,
    trim: true,
  },
  startDate: {
    type: String,
    required: [true,"Start date name is required"],
    trim: true
  },
  endDate: {
    type: String,
    required: [true,"End date is required"],
    trim: true
  },
  info:String
});

// Apply the uniqueValidator plugin to ProjectSchema
assignProjectSchema.plugin(UniqueValidator);

// compile schema to model
const assignProjectSchemaModel = mongoose.model('assigned_project_to_group_collection',assignProjectSchema);

export default assignProjectSchemaModel;