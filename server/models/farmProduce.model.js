const mongoose = require('mongoose');
farmProduceSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    lga: String,
    state: String,
    number: Number,
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
const produceModel = mongoose.model('farmProduce_tb', farmProduceSchema);
module.exports = produceModel;