const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    company: { type: String, required: true },
    customer: { type: String, required: true },
    email: { type: String, required: true },
    name_eng: { type: String, required: true },
    name_kanji: { type: String, required: true },
    phone: { type: String, required: true },
    service: { type: String },
    detail: { type: String, required: true },
    status: { type: Boolean, default: false },
    topic: { type: String },
  },
  { timestamps: true }
);

// Custom JSON Response
schema.methods.toJSON = function () {
  return {
    id: this._id,
    company: this.company,
    customer: this.customer,
    email: this.email,
    name_eng: this.name_eng,
    name_kanji: this.name_kanji,
    phone: this.phone,
    service: this.service,
    detail: this.detail,
    status: this.status,
    topic: this.topic,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
  };
};

module.exports = mongoose.model("tb_formcontact", schema);
