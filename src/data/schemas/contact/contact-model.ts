import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema(
  {
    firstName: String,
    surName: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Contact', contactSchema);