import connectDB from "./mongodb.js";

//READ All Data from testdb database and products collection
// const readDataFromDB =  async() => {
//     const result = await connectDB();
//     const productsData = await result.find().toArray();
//     console.log(productsData);
// }
// readDataFromDB();

// Now I need to READ data only for laptops
// const readLaptopData = async () => {
//     const result = await connectDB();
//     const laptopdata = await result.find({category: "Laptop"}).toArray();
//     console.log(laptopdata); 
// }
// readLaptopData();