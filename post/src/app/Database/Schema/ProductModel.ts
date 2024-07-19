import mongoose, { mongo } from "mongoose";

interface ProductAttrs {
    title: string
    description: string
    stock: number
    price: number
    image: string
}

interface ProductModel extends mongoose.Model<ProductDoc>{
    build(atters:ProductAttrs):ProductDoc
}

interface ProductDoc extends mongoose.Document {
    title: string;
    stock: number;
    description: string;
    image: string;
    price: number;
    updatedAt: string;
    version: number;
}

const productSchema = new mongoose.Schema(
    {
    title:{
        type:String,
        required:true
    },
    stock:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    }
},
{
    toJSON:{
        transform(doc,ret){
            ret.id=ret._id
            delete ret._id
        }
    }
}
)

productSchema.set("versionKey", "version");

productSchema.statics.build = (attrs: ProductAttrs) => {
  return new ProductModel(attrs);
};

const ProductModel =  mongoose.model<ProductDoc,ProductModel>('product',productSchema)
export {ProductModel}