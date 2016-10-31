var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    productId: { type: String, unique: true, index: true },
    name: String,
    price: { type: Number, default: 0 },
    image: String,
    description: String,
    addToChart: { type: Boolean, default: false }
});

module.exports = mongoose.model('Product', productSchema);
