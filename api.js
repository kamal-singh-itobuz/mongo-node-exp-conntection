import express from 'express';
import mongodb from 'mongodb';
import connectDB from './mongodb.js';

const app = express();
const PORT = 5000;

app.use(express.json()); // data will be posting in json format

//GET REQUEST 
// app.get('/', async(req, res) => {
//     const response = await connectDB(); //data is comming from mongodb
//     const data = await response.find().toArray();
//     res.send(data);
// });

//POST REQUEST
// app.post('/', async(req, res) => {
//     const dataToBeSent = req.body; //data is comming from POSTMAN OR THUNDER CLIENT
//     const dataBeforePost = await connectDB();
//     const result = await dataBeforePost.insertOne(dataToBeSent);
//     res.send(result);
//     console.log(result);
// });


//PUT REQUEST
// app.put('/', async(req, res) => {
//     const dataToBeUpdated = req.body; //data is comming from POSTMAN OR THUNDER CLIENT
//     const dataBeforeUpdate = await connectDB();
//     const result = await dataBeforeUpdate.updateOne({name:"Nokia 100"}, {$set: dataToBeUpdated});
//     res.send(result);
//     console.log(result);
// });
// if we want to update name, we can take it using req.params.name and then update


//DELETE REQUEST
app.delete('/:id', async(req, res) => {
    const idOfItem = req.params.id;
    const dataBeforeDelete = await connectDB();
    const result = await dataBeforeDelete.deleteOne({_id: new mongodb.ObjectId(idOfItem)});
    res.send(result);
    console.log(result);
})
app.listen(PORT, () => console.log(`Server is listening on the port ${PORT}`));