"use client"
import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { ChevronRight, CircleX } from 'lucide-react'

type FormComponentProps = {
  onEmailChange: (email: string) => void;  // Prop to receive the function from parent
};

function Introbg({ onEmailChange }: FormComponentProps) {
  const [email, setEmail] = useState<string>("")
  const [isfocus, setIsFocus] = useState<boolean>(false)
  const [error, setError] = useState<string>("")
  const emailRegex = /^(?!\.)(?!.*\.\.)([a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*)@([a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,63}$/;


  const handleSubmit = () => {
    if (email === "") {
      setError("Empty")
      return
    }
    else if (!emailRegex.test(email)) {
      setError("Invalid Email")
      return
    }
    setError("")
    onEmailChange(email)

  }


  return (
    <div className='w-full h-[70%] relative'>
      <div className='w-full h-[100%] bg-black' style={{ backgroundImage: "url('/bg.png')", backgroundSize: 'cover' }}>

      </div>
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>
      {/* Content */}
      <div className='absolute inset-0 z-10 flex justify-center items-center flex-col gap-9'>
        <div className='flex justify-center items-center flex-col gap-4'>
          <p className='text-white text-6xl font-extrabold'>Unlimited movies, TV</p>
          <p className='text-white text-6xl font-extrabold'>shows, and more</p>
          <p className='text-white text-xl'>Starts at USD 2.99. Cancel anytime.</p>
        </div>
        {/* Input and Button */}
        <div className='w-[30%] flex flex-col justify-center items-center gap-4'>
          <p className='text-white'>Ready to watch? Enter your email to create or restart your membership.</p>
          <div className='flex gap-2 w-full'>
            <label htmlFor='email' className={`text-gray-400 text-md absolute mt-4 ml-4 font-bold ${isfocus || email ? "text-[12px] mt-1 ml-3" : ""} animate-in transition-all`}>Email address</label>
            <Input
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              placeholder=''
              className={`${error ? "border-red-600" : "border-gray-400"} text-white`}
            />

            <Button className='text-2xl font-bold' size={"lg"} onClick={handleSubmit}>Get Started <ChevronRight size={24} /></Button>
          </div>
          {error &&
            <div className='flex gap-2 text-red-600'>
              <CircleX />
              {error === "Empty" ? <p>Please enter a valid email address</p> : <p>Invalid email address</p>}
            </div>
          }
        </div>
      </div>
      <div className='w-full h-20 bg-transparent absolute bottom-0' style={{ backgroundImage: "url('/Frame 5.svg')", backgroundSize: 'cover' }}>

      </div>

    </div>
  )
}

export default Introbg

//htmlfor is used to link input and label together htmlfor in label and id in input should have same value