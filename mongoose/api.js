import express from 'express';
import './config.js';
import productModel from './productsCollection.js';

const app = express();
const PORT = 5000;
app.use(express.json());

//POST METHOD
// app.post('/', async(req, res) => {
//     const dataFromUser = req.body;
//     const data  = new productModel(dataFromUser);
//     const result = await data.save();
//     console.log(result);
//     res.send(result);
// });


//GET METHOD
// app.get('/', async(req, res) => {
//     const data = await productModel.find();
//     res.send(data);
// });


//PUT METHOD
// app.put('/:_id', async(req, res) => {
//     const updateId = req.params;
//     const dataToUpdate = req.body;
//     // console.log(dataToUpdate);
//     const data = await productModel.updateOne(updateId, {$set: dataToUpdate});
//     res.send(data);
// })


//DELETE METHOD
// app.delete('/:_id', async(req, res) => {
//     const deleteId = req.params;
//     const data = await productModel.deleteOne(deleteId); //deleteId is already comming in object form, so we can directly pass it
//     res.send(data);
//     console.log(data);
// });


//SEARCHING
// app.get('/:key', async (req, res) => {
//     const keyToSearch = req.params.key;
//     // const searchOnOneProperty = await productModel.find({ "$or": [{ name: { $regex: keyToSearch } }] });
//     const searchOnMultipleProperty = await productModel.find({ "$or": [{ name: { $regex: keyToSearch } }, { brand: { $regex: keyToSearch } }] });
//     res.send(searchOnMultipleProperty);
// });

// app.listen(PORT, () => console.log('Server is listening on the port 5000'));
