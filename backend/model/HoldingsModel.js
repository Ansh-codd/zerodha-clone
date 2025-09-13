const { model } = require("mongoose");
const { HoldingSchema } = require('../schemas/HoldingSchema');

// ⚡ remove "new" keyword
const HoldingsModel = model("holding", HoldingSchema);

module.exports = { HoldingsModel };
