const mongoose = require('mongoose');
exporterOrderSchema = mongoose.Schema({
    coyname: String,
    coyaddress: String,
    coystate: String,
    coyemail: String,
    cocoa: Number,
    coconut: Number,
    cashew: Number,
    cassava: Number,
    ginger: Number,
    maize: Number,
    oilpalm: Number,
    plantain: Number,
    sesame: Number,
    soya: Number,
    yam: Number
})
const orderModel = mongoose.model('exporterOrder_tbs', exporterOrderSchema);
module.exports = orderModel;