const { model }= require("mongoose");
const {OrderSchema} = require('../schemas/OrderSchema');
const OrderModel =  model("orders", OrderSchema);
module.exports = {OrderModel};