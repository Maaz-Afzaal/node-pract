import mongoose from 'mongoose';
import mongooseCurrency from 'mongoose-currency';
mongooseCurrency.loadType(mongoose);
const Currency = mongoose.Types.Currency;
const { Schema } = mongoose;

const leaderSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  abbr: {
    type: String,
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
var Leaders = mongoose.model('Leader', leaderSchema);
export default Leaders;
