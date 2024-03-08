import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost:27017/testdb');
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    price: Number,
    brand: String,
    category: String
});

//CREATE or INSERT
// const insertInDB = async() => {
//     const productModel = mongoose.model('products', productSchema);
//     const data = new productModel({price: 300000, brand: "Apple", category: "Mobile"});
//     const result = await data.save(); //save/insert into database
//     console.log(result);
// }
// insertInDB();


//UPDATE
const updateInDB = async() => {
    const productModel = mongoose.model('products', productSchema);
    const data = await productModel.updateOne({name: "Note 6"}, {$set: {name: "Note 7", price: 13000}});
    console.log(data);
}
updateInDB();


// DELETE
// const deleteInDB = async() => {
//     const productModel = mongoose.model('products', productSchema);
//     const data = await productModel.deleteOne({name: "Note 5"});
//     console.log(data);
// }
// deleteInDB();


//READ or FIND

// const readFromDB = async() => {
//     const productModel = mongoose.model('products', productSchema);
//     const data = await productModel.find();
//     console.log(data);
// }
// readFromDB();