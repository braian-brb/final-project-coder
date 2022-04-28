import mongoose from 'mongoose';

const cartSchema = mongoose.Schema(
  {
    products: {
      type: Array,
    },
  },
  { timestamps: true }
);

export default cartSchema;
