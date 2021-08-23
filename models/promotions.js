import mongoose from 'mongoose';
import mongooseCurrency from 'mongoose-currency';
mongooseCurrency.loadType(mongoose);
const Currency = mongoose.Types.Currency;
const { Schema } = mongoose;

const promoSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: '',
  },
  price: {
    type: Currency,
    required: true,
    min: 0,
  },
  description: {
    type: String,
    required: true,
  },
  featured: {
    type: String,
    default: 'false',
  },
});
var Promotions = mongoose.model('promotion', promoSchema);
export default Promotions;
