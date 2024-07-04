import mongoose, { model, models, Schema } from "mongoose";

const ExtraPriceSchema = new Schema({
  name: String,
  price: Number,
});

const MenuItemSchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String },
  category: { type: mongoose.Types.ObjectId },
  basePrice: { type: Number },
  sizes: { type: String },
  extraIngredientPrices: { type: String },
  // Remove the image field and default it to 'pizza1.jpg'
  image: { type: String, default: 'pizza1.jpg' }
}, { timestamps: true });

export const MenuItem = models?.MenuItem || model('MenuItem', MenuItemSchema);
