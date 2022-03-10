const mongo = require("mongoose");
const schema = mongo.Schema;

const itemSchema = new schema(
  {
    name: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  },
  { typeKey: "$type" }
);

module.exports = item = mongo.model("item", itemSchema);
