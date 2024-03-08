import connectDB from "./mongodb.js";

const deleteItemsFromDB = async() => {
    const db = await connectDB();
    const result = await db.deleteOne({category: "Laptop"});
    console.log(result);
}

deleteItemsFromDB();

//IF we want to delete multiple items with same name, use deleteMany() function instead of deleteOne().
// if we want to know whether a record is deleted or not, check result.deletedCount is zero or not. 