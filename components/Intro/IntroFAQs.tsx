import React, { useState } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import { Input } from '../ui/input'
import useUserStore from '@/lib/store'
import { Button } from '../ui/button'
import { ChevronRight, CircleX } from 'lucide-react'

const Questions = [
    {
        question: "What is Netflix?",
        answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices."
    },
    {
        question: "How much does Netflix costs?",
        answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD 2.99 to USD 9.99 a month. No extra costs, no contracts."
    },
    {
        question: "Where can I watch?",
        answer: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."
    },
    {
        question: "How do I cancel?",
        answer: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
    },
    {
        question: "What can I watch on Netflix?",
        answer: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
    },
    {
        question: "Is Netflix good for kids?",
        answer: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space."
    }
]

function IntroFAQs() {
    const [email, setEmail] = useState<string>("")
    const [isfocus, setIsFocus] = useState<boolean>(false)
    const [error, setError] = useState<string>("")
    const emailRegex = /^(?!\.)(?!.*\.\.)([a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*)@([a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,63}$/;

    const addUser = useUserStore((state) => state.addUser)
    const users = useUserStore((state) => state.users)
    console.log(users)

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

    }
    return (
        <div className='bg-black px-40 flex flex-col gap-4 h-[80%]'>
            <p className="text-white text-2xl">Frequently Asked Questions</p>
            <div className='flex flex-col gap-16'>
                {/* FAQs */}
                <div className='flex flex-col gap-2'>
                    {Questions.map((data, index) =>
                        <div className='bg-zinc-800 hover:bg-zinc-700 transition-all duration-500 animate-in' key={index}>
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className='h-[90px] px-5 text-2xl text-white'>{data.question}</AccordionTrigger>
                                    <AccordionContent className='p-5 text-2xl text-white'>
                                        {data.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    )}
                </div>

                {/* Input and Button */}
                <div className='flex flex-col justify-center items-center gap-4'>
                    <p className='text-white'>Ready to watch? Enter your email to create or restart your membership.</p>
                    <div className='flex gap-2 w-[50%]'>
                        <label htmlFor='email' className={`text-gray-400 text-md absolute mt-4 ml-4 font-bold ${isfocus || email ? "text-[12px] mt-[-1] py-1 ml-3" : ""} animate-in transition-all`}>Email address</label>
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
        </div>
    )
}

export default IntroFAQs