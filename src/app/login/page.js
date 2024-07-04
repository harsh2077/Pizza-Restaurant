'use client';
import {signIn} from "next-auth/react";
import Image from "next/image";
import {useState} from "react";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginInProgress, setLoginInProgress] = useState(false);

  async function handleFormSubmit(ev) {
  ev.preventDefault();
  setLoginInProgress(true);

  // try {
    // Sign in using NextAuth credentials provider
    await signIn('credentials', { email, password, callbackUrl: '/' });

    // Make API call to handle authentication
  //   const response = await fetch("/api/auth/[...nextauth]/route.js", {
  //     method: 'POST',
  //     body: JSON.stringify({ email, password }),
  //     headers: { "Content-Type": "application/json" }
  //   });

  //   if (response.ok) {
  //     const user = await response.json();
  //     console.log('User authenticated:', user);
  //   } else {
  //     console.error('Authentication failed:', response.statusText);
  //   }
  // } catch (error) {
  //   console.error('Error during authentication:', error);
  // }

  setLoginInProgress(false);
}
  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">
        Login
      </h1>
      <form className="max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input type="email" name="email" placeholder="email" value={email}
               disabled={loginInProgress}
               onChange={ev => setEmail(ev.target.value)} />
        <input type="password" name="password" placeholder="password" value={password}
               disabled={loginInProgress}
               onChange={ev => setPassword(ev.target.value)}/>
        <button disabled={loginInProgress} type="submit">Login</button>
        <div className="my-4 text-center text-gray-500">
          or login with provider
        </div>
        <button type="button" onClick={() => signIn('google', {callbackUrl: '/'})}
                className="flex gap-4 justify-center">
          <Image src={'/google.png'} alt={''} width={24} height={24} />
          Login with google
        </button>
      </form>
    </section>
  );
}