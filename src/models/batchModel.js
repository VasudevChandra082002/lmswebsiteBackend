const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const batchSchema = new mongoose.Schema({
  batch_name: { type: String, required: true },
  start_date: { type: Date, required: true },
  no_of_classes: { type: Number, required: true },
  batch_image: { type: String },
  teacher_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  ],
  contentMaterial: { type: String },
  date: { type: Date, default: Date.now },

  meeting_link: { type: String },
});

batchSchema.plugin(mongoosePaginate);

batchSchema.set("toJSON", { virtuals: true });
batchSchema.set("toObject", { virtuals: true });

module.exports = mongoose.model("Batch", batchSchema);
