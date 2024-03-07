import connectDB from "./mongodb.js";

//insert one item at a time
const insertOneDataIntoDB = async () => {
    const db = await connectDB();
    const result = await db.insertOne({ name: "Note 5", brand: "Realme", price: 15000, category: "Mobile" });
    console.log(result.acknowledged);
}
insertOneDataIntoDB();


//insert many items at a time
const insertManyItemIntoDB = async () => {
    const db = await connectDB();
    const result = await db.insertMany([{ name: "HP f-14", brand: "HP", price: 40000, category: "Laptop" },
    { name: "DELL x-15", brand: "DELL", price: 60000, category: "Laptop" }]);

    console.log(result.acknowledged);
}
insertManyItemIntoDB();