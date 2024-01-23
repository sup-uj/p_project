import '../db/connection';
import mongoose from 'mongoose';

const ItemDetailSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  quantity: Number,
  destription: String,
});

const ItemDetails = mongoose.model('userdetail', ItemDetailSchema);
export default ItemDetails;