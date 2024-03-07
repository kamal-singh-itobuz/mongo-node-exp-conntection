import connectDB from "./mongodb.js";

const updateOneItem = async() => {
    const db = await connectDB();
    const result = await db.updateOne({name: "DELL x-15"}, {$set: {name: "X-15 dell", price: 60000}});
    console.log(result.acknowledged);
}
updateOneItem();

//we we want to update multiple items with same name, use update() function instead updateOne() function.