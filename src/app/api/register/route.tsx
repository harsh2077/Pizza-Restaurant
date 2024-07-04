// import {User} from "@/models/User";
// import bcrypt from "bcrypt";
// import mongoose from "mongoose";

// export async function POST(req) {
//   const body = await req.json();
//   mongoose.connect(process.env.MONGO_URL);
//   const pass = body.password;
//   if (!pass?.length || pass.length < 5) {
//     new Error('password must be at least 5 characters');
//   }

  // const notHashedPassword = pass;
  // const salt = bcrypt.genSaltSync(10);
  // body.password = bcrypt.hashSync(notHashedPassword, salt);

//   const createdUser = await User.create(body);
//   return Response.json(createdUser);
// }
import React from "react";
import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/app/common/database";
import {User} from '@/models/User';
import bcrypt from "bcrypt";

export const POST = async (request: any) => {
  const { email, password } = await request.json();
  await dbConnect();

  const isUserExist = await User.findOne({ email });
  if (isUserExist) {
    return NextResponse.json({ msg: "User already existed" }, { status: 400 });
  }
  try {
    const password_hash =password;

    const newUser = new User({
      email,
      password: password_hash,
    });

    await newUser.save();
    return NextResponse.json(
      { msg: "User is ceated Successfully" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ msg: err }, { status: 500 });
  }
};
