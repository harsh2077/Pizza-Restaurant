import mongoose from "mongoose";
// this file added by nextauthurl file 
//you can more details on mmantratech.com
//youtube : techmalasi
 const MONGODB_URL = process.env.MONGO_URL;

if (!MONGODB_URL) {
  throw new Error(
    'Something went wrong'
  )
}
let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect () {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }

    cached.promise = mongoose.connect(MONGODB_URL,opts).then(mongoose => {
      console.log("You successfully Connected")
      return mongoose
    })
  }
  cached.conn = await cached.promise
  return cached.conn
}

export default dbConnect