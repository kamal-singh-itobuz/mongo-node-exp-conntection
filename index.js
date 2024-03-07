import connectDB from "./mongodb.js";

//All Data from testdb database and products collection
// const dataFromDB =  async() => {
//     const result = await connectDB();
//     const productsData = await result.find().toArray();
//     console.log(productsData);
// }
// dataFromDB();

// Now I need data only for laptops
// const laptopData = async () => {
//     const result = await connectDB();
//     const laptopdata = await result.find({category: "Laptop"}).toArray();
//     console.log(laptopdata); 
// }
// laptopData();