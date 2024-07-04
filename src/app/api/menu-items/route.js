import {isAdmin} from "@/app/api/auth/[...nextauth]/route";
import {MenuItem} from "@/models/MenuItem";
import mongoose from "mongoose";

export async function POST(req) {
  const data = await req.json();
  mongoose.connect(process.env.MONGO_URL);
  if (await isAdmin()) {
    const menuItemDoc = await MenuItem.create(data);
    return Response.json(menuItemDoc);
  } else {
    return Response.json({});
  }
} 

export async function PUT(req) {
  // const data = await req.json();
  const requestData = await req.json();
  mongoose.connect(process.env.MONGO_URL);
  if (await isAdmin()) {
    // const {_id, ...data} = await req.json();
    const { _id, ...updatedData } = requestData;
    await MenuItem.findByIdAndUpdate({_id}, updatedData);
  }
  await mongoose.disconnect();
  return Response.json(true);
}

export async function GET() {
  mongoose.connect(process.env.MONGO_URL);
  return Response.json(
    await MenuItem.find()
  );
}

export async function DELETE(req) {
  mongoose.connect(process.env.MONGO_URL);
  const url = new URL(req.url);
  const _id = url.searchParams.get('_id');
  if (await isAdmin()) {
    await MenuItem.deleteOne({_id});
  }
  return Response.json(true);
}