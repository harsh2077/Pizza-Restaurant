"use client";
import {signIn} from "next-auth/react";
// import Image from "next/image";
// import Link from "next/link";
// import {useState} from "react";
import { setEngine } from "crypto";
import {useRouter} from "next/navigation";
import {useSession } from 'next-auth/react'
// import {signIn} from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";

// export default function RegisterPage() {
  const Register = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState(false);

  const [customerror, setCustomerror] = useState();
  const [data, setData] = useState({});
  const router = useRouter();

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async () => {

  //   const email = data.email;
  //   const password = data.password;
  // async function handleFormSubmit(ev) {
  //   ev.preventDefault();
  //   setCreatingUser(true);
  //   setError(false);
  //   setUserCreated(false);
  //   const response = await fetch('/api/register', {
  //     method: 'POST',
  //     body: JSON.stringify({email, password}),
  //     headers: {'Content-Type': 'application/json'},
  //   });
  //   if (response.ok) {
  //     setUserCreated(true);
  //     // signIn();
  //   }
  //   else {
  //     setError(true);
  //   }
  //   setCreatingUser(false);
  // }
  const handleSubmit = async () => {
    // const name = data.name;
    const email = data.email;
    const password = data.password;

    try{

       const response =await  fetch("/api/register",{
        method: "POST",
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify({email,password})
       });

       const res = await response.json();
       console.log(res.status);
       if(response.status==200)
       {
        router.push("/login")
       }
       if(response.status==400){
        setCustomerror(res.msg) ;
       }

    }catch(err){
      console.log(err);

    }
  }
  return (
    // <section className="mt-8">
    //   <h1 className="text-center text-primary text-4xl mb-4">
    //     Register
    //   </h1>
    //   {userCreated && (
    //     <div className="my-4 text-center">
    //       User created.<br />
    //       Now you can{' '}
    //       <Link className="underline" href={'/login'}>Login &raquo;</Link>
    //     </div>
    //   )}
    //   {customerror && (
    //     <div className="my-4 text-center">
    //       An error has occurred.<br />
    //       Please try again later
    //     </div>
    //   )}
    //   <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
    //     <input type="email" placeholder="email" value={email}
    //            disabled={creatingUser}
    //            onChange={ev => setEmail(ev.target.value)} />
    //     <input type="password" placeholder="password" value={password}
    //            disabled={creatingUser}
    //             onChange={ev => setPassword(ev.target.value)}/>
    //     <button type="submit" disabled={creatingUser}>
    //       Register
    //     </button>
    //     <div className="my-4 text-center text-gray-500">
    //       or login with provider
    //     </div>
    //     <button
    //       onClick={() => signIn('google', {callbackUrl:'/'})}
    //       className="flex gap-4 justify-center">
    //       <Image src={'/google.png'} alt={''} width={24} height={24} />
    //       Login with google
    //     </button>
    //     <div className="text-center my-4 text-gray-500 border-t pt-4">
    //       Existing account?{' '}
    //       <Link className="underline" href={'/login'}>Login here &raquo;</Link>
    //     </div>
    //   </form>
    // </section>
  // );
  <div className="flex min-h-screen flex-col  items-center justify-between p-24">
     <div className="border-2 border-gray-500 p-8 rounded-lg shadow-lg w-96">
       <h1 className="text-3xl text-center font-semibold mb-8">Register</h1>
       <input
         name="email"
         className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black text-[18px]"
           placeholder="Email"
           required
           onChange={handleChange}
         />
         <input
           name="password"
           className="w-full border border-gray-300 text-black rounded px-3 py-2 focus:outline-none focus:border-blue-400 focus:text-black text-[18px]"
         placeholder="password"
         required
         onChange={handleChange}
       />
       <div className="text-center">
         <button
           onClick={() =>  handleSubmit()}
           className=" w-1/2 bg-blue-500 text-white  py-2 rounded hover:bg-blue-600 mt-6 text-[16px]"
         >
           Register
         </button>
         <div className="text-red-500 text-[16px] mb-4">
           {customerror && customerror}
         </div>
       </div>
       <div className="text-center text-gray-500 mt-4 text-sm">- OR - </div>
       <Link
         href="/login"
         className="block text-center text-blue-500 mt-2 text-[16px] hover:underline"
       >
         Login with existing account
       </Link>
     </div>
   </div>
  );
}
export default Register;
// "use client";

// import Link from "next/Link";
// import React, { useState } from "react";



// const Register = () => {
  // const [customerror, setCustomerror] = useState();
  // const [data, setData] = useState({});
  // const router = useRouter();

  // const handleChange = (e: any) => {
  //   setData({ ...data, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = async () => {

  //   const email = data.email;
  //   const password = data.password;

  //   try{

  //      const response =await  fetch("/api/register",{
  //       method: "POST",
  //       headers:{"Content-Type": "application/json"},
  //       body:JSON.stringify({email,password})
  //      });

  //      const res = await response.json();
  //      console.log(res.status);
  //      if(response.status==200)
  //      {
  //       router.push("/login")
  //      }
  //      if(response.status==400){
  //       setCustomerror(res.msg) ;
  //      }

  //   }catch(err){
  //     console.log(err);

  //   }





//   };

//   return (
//     <div className="flex min-h-screen flex-col  items-center justify-between p-24">
//       <div className="border-2 border-gray-500 p-8 rounded-lg shadow-lg w-96">
//         <h1 className="text-3xl text-center font-semibold mb-8">Register</h1>

//         <input
//           name="email"
//           className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black text-[18px]"
//           placeholder="Email"
//           required
//           onChange={handleChange}
//         />
//         <input
//           name="password"
//           className="w-full border border-gray-300 text-black rounded px-3 py-2 focus:outline-none focus:border-blue-400 focus:text-black text-[18px]"
//           placeholder="password"
//           required
//           onChange={handleChange}
//         />
//         <div className="text-center">
//           <button
//             onClick={() =>  handleSubmit()}
//             className=" w-1/2 bg-blue-500 text-white  py-2 rounded hover:bg-blue-600 mt-6 text-[16px]"
//           >
//             Register
//           </button>
//           <div className="text-red-500 text-[16px] mb-4">
//             {customerror && customerror}
//           </div>
//         </div>

//         <div className="text-center text-gray-500 mt-4 text-sm">- OR - </div>
//         <Link
//           href="/login"
//           className="block text-center text-blue-500 mt-2 text-[16px] hover:underline"
//         >
//           Login with existing account
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Register;