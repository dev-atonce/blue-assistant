const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    company: { type: String, required: true },
    customer: { type: String, required: true },
    email: { type: String, required: true },
    inquiry: { type: String, required: true },
    name_eng: { type: String, required: true },
    name_kanji: { type: String, required: true },
    phone: { type: String, required: true },
    service: { type: String, required: true },
    detail: { type: String, required: true },
    status: { type: Boolean, default: false }
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
    inquiry: this.inquiry,
    name_eng: this.name_eng,
    name_kanji: this.name_kanji,
    phone: this.phone,
    service: this.service,
    detail: this.detail,
    status: this.status,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
  };
};

module.exports = mongoose.model("tb_formcontact", schema);
