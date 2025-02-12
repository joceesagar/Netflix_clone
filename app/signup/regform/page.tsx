"use client"
import { Input } from '@/components/ui/input'
import useUserStore from '@/lib/store'
import { CircleX } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

function RegForm() {
    const [email, setEmail] = useState<string>("")
    const [isfocus, setIsFocus] = useState<boolean>(false)
    const [error, setError] = useState<string>("")
    const emailRegex = /^(?!\.)(?!.*\.\.)([a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*)@([a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,63}$/;
    const router = useRouter()
    const Email = useUserStore((state) => state.users)
    const addUser = useUserStore((state) => state.addUser)
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
        addUser({ Email: email })
        router.push("/signup/register")

    }
    return (
        <div className='flex items-center justify-center h-[86vh] flex-col'>
            <div className='flex flex-col gap-2'>
                <div className='flex gap-1'>
                    <span className='text-sm'>STEP</span><span className='font-bold text-sm'>1</span><span className='text-sm'>OF</span><span className='font-bold text-sm'>3</span>
                </div>
                <div className='flex flex-col gap-1'>
                    <span className='font-[895] text-3xl '>Create a password to start</span>
                    <span className='font-[895] text-3xl'>your membership</span>
                </div>
                <div className='flex flex-col'>
                    <span className='font-[500]'>Just a few more steps and you're done!</span>
                    <span className='font-[500]'>We hate paperwork, too.</span>
                </div>
                <div>
                    <div className='flex gap-2 w-full'>
                        <label htmlFor='email' className={`text-gray-400 text-md absolute mt-4 ml-4 font-bold ${isfocus || email ? "text-[12px] mt-[-1] py-1 ml-3" : ""} animate-in transition-all`}>Email address</label>
                        <Input
                            id='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onFocus={() => setIsFocus(true)}
                            onBlur={() => setIsFocus(false)}
                            placeholder=''
                            className={`${error ? "border-red-600" : "border-gray-400"} text-black h-14`}
                        />
                        {error &&
                            <div className='flex gap-2 text-red-600'>
                                <CircleX />
                                {error === "Empty" ? <p>Please enter a valid email address</p> : <p>Invalid email address</p>}
                            </div>
                        }

                    </div>
                </div>

            </div>

        </div>
    )
}

export default RegForm