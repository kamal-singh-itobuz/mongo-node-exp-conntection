import mongoose from 'mongoose';
const nameOfCollection = 'products';
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    brand: String,
    price: Number,
    category: String
});

const productModel = mongoose.model(nameOfCollection, productSchema);
export default productModel;