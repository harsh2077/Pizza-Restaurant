// import clientPromise from "@/libs/mongoConnect";
// import {UserInfo} from "@/models/UserInfo";
// import bcrypt from "bcrypt";
// import * as mongoose from "mongoose";
// import {User} from '@/models/User';
// import NextAuth, {getServerSession} from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";
// import { MongoDBAdapter } from "@auth/mongodb-adapter"
// import { getSession } from "next-auth/react"
// export const authOptions = {
//   secret: process.env.SECRET,
//   adapter: MongoDBAdapter(clientPromise),
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//     CredentialsProvider({
//       name: 'Credentials',
//       id: 'credentials',
//       credentials: {
//         username: { label: "Email", type: "email", placeholder: "test@example.com" },
//         password: { label: "Password", type: "password" },
//       },
      
//       async authorize(credentials, req) {
//         const formData = req.session.get('formData');
//         let email, password,user,passwordOk;
//         if (formData) {
//           ({ email, password } = formData);
//   // Use the email and password for authentication logic
//   mongoose.connect(process.env.MONGO_URL);
//         user = await User.findOne({email});
//         passwordOk = user && bcrypt.compareSync(password, user.password);
// } else {
//   // Handle case where form data is not found in the session
// }
//         // const session = await getSession({ req });
//         // const { email, password } = req.body;
//         // console.log(email, password);
//         // logic for checking email and password 


//         if (passwordOk && user) {
//           res.status(200).json({ user });
//           req.session.set('user', sessionData);
//           await req.session.save();
//           return user;
//         }

//         return null
//       }
//     })
//   ],
// };

// export async function isAdmin() {
//   const session = await getServerSession(authOptions);
//   const userEmail = session?.user?.email;
//   if (!userEmail) {
//     return false;
//   }
//   const userInfo = await UserInfo.findOne({email:userEmail});
//   if (!userInfo) {
//     return false;
//   }
//   return userInfo.admin;
// }

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST }
// 2nd
// import clientPromise from "@/libs/mongoConnect";
// import {UserInfo} from "@/models/UserInfo";
// import bcrypt from "bcrypt";
// import * as mongoose from "mongoose";
// import {User} from '@/models/User';
// import NextAuth, {getServerSession} from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";
// import { MongoDBAdapter } from "@auth/mongodb-adapter"

// export const authOptions = {
//   secret: process.env.SECRET,
//   adapter: MongoDBAdapter(clientPromise),
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//     CredentialsProvider({
//       name: 'Credentials',
//       id: 'credentials',
//       credentials: {
//         username: { label: "Email", type: "email", placeholder: "test@example.com" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials, req) {
//         const email = credentials?.email;
//         const password = credentials?.password;

//         mongoose.connect(process.env.MONGO_URL);
//         const user = await User.findOne({email});
//         const passwordOk = user && bcrypt.compareSync(password, user.password);

//         if (passwordOk) {
//           return user;
//         }

//         return null
//       }
//     })
//   ],
// };

// export async function isAdmin() {
//   const session = await getServerSession(authOptions);
//   const userEmail = session?.user?.email;
//   if (!userEmail) {
//     return false;
//   }
//   const userInfo = await UserInfo.findOne({email:userEmail});
//   if (!userInfo) {
//     return false;
//   }
//   return userInfo.admin;
// }

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST }

//3rd 
// import clientPromise from "@/libs/mongoConnect";
// import { UserInfo } from "@/models/UserInfo";
// import bcrypt from "bcrypt";
// import * as mongoose from "mongoose";
// import { User } from '@/models/User';
// import NextAuth, { getServerSession } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";
// import { MongoDBAdapter } from "@auth/mongodb-adapter"

// export const authOptions = {
//   secret: process.env.SECRET,
//   adapter: MongoDBAdapter(clientPromise),
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//     CredentialsProvider({
//       name: 'Credentials',
//       id: 'credentials',
//       credentials: {
//         username: { label: "Email", type: "email", placeholder: "test@example.com" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials, req) {
//         const email = credentials?.email;
//         const password = credentials?.password;

//         mongoose.connect(process.env.MONGO_URL);
//         const user = await User.findOne({ email });
//         const passwordOk = user && bcrypt.compareSync(password, user.password);

//         if (passwordOk) {
//           return user;
//         }

//         throw new Error('Invalid email or password');
//       }
//     })
//   ],
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.id = user.id;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       session.user.id = token.id;
//       return session;
//     }
//   }
// };

// export async function isAdmin() {
//   const session = await getServerSession(authOptions);
//   const userEmail = session?.user?.email;
//   if (!userEmail) {
//     return false;
//   }
//   const userInfo = await UserInfo.findOne({ email: userEmail });
//   if (!userInfo) {
//     return false;
//   }
//   return userInfo.admin;
// }

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST }
// 4th
// import { User } from '@/models/User';
// import bcrypt from 'bcrypt';
// import mongoose from 'mongoose';
// import NextAuth from 'next-auth';
// import CredentialsProvider from 'next-auth/providers/credentials';
// import GoogleProvider from 'next-auth/providers/google';

// mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch((error) => {
//     console.error('Error connecting to MongoDB:', error);
//   });

// const handler = NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//     CredentialsProvider({
//       name: 'Credentials',
//       credentials: {
//         email: { label: 'Email', type: 'email' },
//         password: { label: 'Password', type: 'password' },
//       },
//       async authorize(credentials, req) {
//         const session = await getServerSession(req, res, authOptions);

//   if (session) {
//     res.send({
//       content:
//         "This is protected content. You can access this content because you are signed in.",
//     });
//   } else {
//     res.send({
//       error: "You must be signed in to view the protected content on this page.",
//     });}
//     console.log('Authorizing user...');
//     const user = await User.findOne({ email: credentials.email });
//     if (user && bcrypt.compareSync(credentials.password, user.password)) {
//       console.log('User authorized successfully');
//       return { success: true, user };
//     } else {
//       console.log('Invalid email or password');
//       return { success: false, message: 'Invalid email or password' };
//     }
//       }
//     })
//   ],
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.id = user._id.toString();
//       }
//       return token;
//     },
//     async session({ session, token, user }) {
//       session.user = user;
//       return session;
//     },
//     redirect: async ({ url, baseUrl }) => {
//       if (url.startsWith(baseUrl)) return url;
//       else if (url.startsWith('/')) return new URL(url, baseUrl).toString();
//       return baseUrl;
//     },
//     session: {
//       jwt: true, // Enable JWT sessions
//     },
//   },
// });

// // const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST }

// import { MongoClient } from 'mongodb';
// import clientPromise from "@/libs/mongoConnect";
// import {UserInfo} from "@/models/UserInfo";
// import bcrypt from "bcrypt";
// import * as mongoose from "mongoose";
// import {User} from '@/models/User';
// import NextAuth, {getServerSession} from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";
// import { MongoDBAdapter } from "@auth/mongodb-adapter"
// const handler = NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//     CredentialsProvider({
//       name: 'Credentials',
//       credentials: {
//         email: { label: 'Email', type: 'email' },
//         password: { label: 'Password', type: 'password' },
//       },
//       async authorize(credentials, req) {
        // mongoose.connect(process.env.MONGO_URL);
//         mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//         .then(() => {
//           console.log('Connected to MongoDB');
//         })
//         .catch((error) => {
//           console.error('Error connecting to MongoDB:', error);
//         });
//         const user = await User.findOne({ email: credentials.email });
//         const passwordOk = user && bcrypt.compareSync(password, user.password);
        // await client.connect();
        // const users = client.db('foodorderingtest').collection('users');
        // const userfind = await users.findOne({ email: credentials.email });
        
      //   const res = await fetch("/api/auth/[...nextauth]/route.js", {
      //     method: 'POST',
      //     body: JSON.stringify(credentials),
      //     headers: { "Content-Type": "application/json" }
      //   })
      //  const user = await res.json()
        
      //   if (res.ok && userfind && bcrypt.compareSync(credentials.password, userfind.password)) {
      //     return userfind;
      //   } else {
      //     throw new Error('Invalid email or password');
      //   }

        // another method 
        // const {email,password}= credentials;
        // if(email === user.email && password === user.password){
        //   return user;
        // } else {
        //   return null;
        // }
//         if (user && bcrypt.compareSync(credentials.password, passwordOk)) {
//           return { success: true, user };
//         } else {
//           return { success: false, message: 'Invalid email or password' };
//         }
//       }
//     })
//   ],
//   // session:{
//   //   strategy:"jwt",
//   // },
//   callbacks: {
//     async jwt({ token, userfind }) {
//       if (userfind) {
//         token.id = user._id;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       session.user = { id: token.id, email: token.email };
//       return session;
//     },
//   },
// });
// export { handler as GET, handler as POST }
// 
// src 

// src/app/api/auth/[...nextauth]/route.js 
// src/app/api/categories/route.js 
// src/app/api/checkout/route.js 
// src/app/api/menu-items/route.js 
// src/app/api/orders/route.js 
// src/app/api/profile/route.js 
// src/app/api/register/route.js 
// src/app/api/users/route.js 
// src/app/cart/page.js 
// src/app/categories/page.js 
// src/app/login/page.js 
// src/app/menu/page.js 
// src/app/menu-items/edit/[id]/page.js 
// src/app/menu-items/new/page.js 
// src/app/menu-items/page.js 
// src/app/orders/[id]/page.js 
// src/app/orders/page.js 
// src/app/profile/page.js
// src/app/register/page.js 
// src/app/users/[id]/page.js 
// src/app/users/page.js 
// src/app/favicon.ico 
// src/app/globals.css 
// src/app/layout.js 
// src/app/page.js 

// src/components/icons/Bars2.js 
// src/components/icons/ChevronDown.js 
// src/components/icons/ChevronUp.js 
// src/components/icons/Left.js 
// src/components/icons/Plus.js 
// src/components/icons/Right.js 
// src/components/icons/ShoppingCart.js 
// src/components/icons/Trash.js 
// src/components/layout/AddressInputs.js 
// src/components/layout/EditableImage.js 
// src/components/layout/Header.js 
// src/components/layout/Hero.js 
// src/components/layout/HomeMenu.js 
// src/components/layout/InfoBox.js 
// src/components/layout/MenuItemForm.js 
// src/components/layout/MenuItemPriceProps.js 
// src/components/layout/SectionHeaders.js 
// src/components/layout/SuccessBox.js 
// src/components/layout/UserForm.js 
// src/components/layout/UserTabs.js 
// src/components/menu/AddToCartButton.js 
// src/components/menu/CartProduct.js 
// src/components/menu/FlyingButton.js 
// src/components/menu/MenuItem.js 
// src/components/menu/MenuItemTile.js 
// src/components/AppContext.js 
// src/components/DeleteButton.js 
// src/components/UseProfile.js 
// src/libs/datetime.js 
// src/libs/mongoConnect.js 
// src/models/Category.js 
// src/models/MenuItem.js 
// src/models/Order.js 
// src/models/User.js 
// src/models/UserInfo.js 
// .env 
// .eslintrc.json 
// .gitignore 
// next-env.d.ts 
// next.config.mjs
// package-lock.json
// package.json
// postcss.config.mjs
// README.md
// tailwind.config.ts
// tsconfig.json
// yarn.lock
// isadmin
// import { connectToDatabase } from '../../../libs/mongoConnect';
// const options = {
//   providers: [
//     CredentialsProvider({
//       name: 'Credentials',
//       credentials: {
//         email: { label: 'Email', type: 'email' },
//         password: { label: 'Password', type: 'password' },
//       },
//       async authorize(credentials) {
//         // Connect to the database
//                 mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//                 .then(() => {
//                   console.log('Connected to MongoDB');
//                 })
//                 .catch((error) => {
//                   console.error('Error connecting to MongoDB:', error);
//                 });

//         // Find the user by email
//         const user = await User.findOne({ email: credentials.email });

//         // Validate the password
//         if (user && bcrypt.compareSync(credentials.password, user.password)) {
//           return user;
//         } else {
//           throw new Error('Invalid email or password');
//         }
//       },
//     }),
//     // Add more providers as needed
//   ],
//   secret: process.env.NEXTAUTH_SECRET,
//   session: {
//     jwt: true,
//   },
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.id = user._id;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       session.user.id = token.id;
//       return session;
//     },
//   },
//   pages: {
//     signIn: '/login',
//   },
//   debug: process.env.NODE_ENV === 'development',
// };

// export default (req, res) => NextAuth(req, res, options);
import NextAuth from "next-auth";
import { Account, User as AuthUser } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import {User} from '@/models/User';
import dbConnect from "@/app/common/database";
import { getServerSession } from "next-auth";
import { UserInfo } from "@/models/UserInfo";
export const authOptions: any = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      id: "credentials",  
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        await dbConnect();
        try {
          const user = await User.findOne({ email: credentials.email });
          if (user) {
            // const password = await bcrypt.compare(
            //   credentials.password,
            //   user.password
            // );
            if ( user.password === credentials.password) {
              return user;
            }
          }
        } catch (err: any) {
          throw new Error(err);
        }
      },
    }),
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID ?? "",
    //   clientSecret: process.env.GITHUB_SECRET ?? "",
    // }),
    GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
          }),
    //GoogleProvider()
    // ...any other provider hers
  ],
  callbacks: {
    async signIn({ user, account }: { user: AuthUser; account: Account }) {
      if (account?.provider == "credentials") {
        return true;
      }
      if (account?.provider == "google") {
        await dbConnect();
        try {
          const existingUser = await User.findOne({ email: user.email });
          if (!existingUser) {
            const newUser = new User({
              email: user.email,
            });

            await newUser.save();
            return true;
          }
          return true;
        } catch (err) {
          console.log("Error saving user", err);
          return false;
        }
      }
    },
  },
};
export async function isAdmin() {
  const session = await getServerSession(authOptions);
  const userEmail = session?.user?.email;
  if (!userEmail) {
    return false;
  }
  const userInfo = await UserInfo.findOne({email:userEmail});
  if (!userInfo) {
    return false;
  }
  return userInfo.admin;
}
export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };