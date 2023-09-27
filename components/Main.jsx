"use client"
import { useSession , signOut } from "next-auth/react"
import Link from "next/link";
import { signIn } from 'next-auth/react'
import { useRouter } from "next/navigation";
export default function SignInOut() {
    const { status } = useSession();
    const sign = ()=>{
      signIn();
  }
  return (
    <div className="h-[70vh] flex items-center bg-black text-white justify-center">
        {
        status === 'authenticated' ? (
             <button 
            onClick={()=> signOut()}
            className="mx-2 border-none bg-transparent hover:underline">
            Sign Out
          </button>
        ):(
            <button onClick={sign} className="mx-2 hover:underline">
            Sign in
          </button>
        )
    }
    </div>

  )
}
