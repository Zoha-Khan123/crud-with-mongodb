import mongoose from "mongoose"

const ProductSchema = mongoose.Schema(
  {
    name : {
      type : String,
      required:[true , "Please enter product name"]
    },
    quantity : {
      type : Number,
      required:true,
      default:0
    },
    price:{
      type : Number,
      required : true,
      deafult : 0
    },
    image:{
        type : String,
        required : false,
    },
  },
  {
    timestamp : true,
  }
)


const Product = mongoose.model("Product", ProductSchema)

export default Product;

































// // const mongoose = require("mongoose");
// import mongoose from "mongoose"

// // Schema	Yeh batata hai ke data ka structure kya hoga

// const ProductSchema = mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: [true, "Please enter product name"],
//     },
//     quantity: {
//       type: Number,
//       required: true,
//       default: 0,
//     },
//     price: {
//       type: Number,
//       required: true,
//       default: 0,
//     },
//     image: {
//       type: String,
//       required: false,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );


// // Model mongoose ka wo part hai jo tumhare banaye huye schema ke rules follow karte hue MongoDB se data ka kaam (CRUD) karta hai.
// const Product = mongoose.model("Product",ProductSchema)

// export default Product
// // module.exports = Product