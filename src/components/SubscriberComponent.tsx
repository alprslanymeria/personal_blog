"use client"

// REACT & NEXT
import { useActionState, useEffect, useState } from "react"
// ACTIONS
import CreateSubscriber from "@/actions/Subscriber"

export default function SubscriberComponent() {

    // ACTION METOT
    const [state, formAction, isPending] = useActionState(CreateSubscriber,undefined)

    // STATES
    const [email, setEmail] = useState<string>("")
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

    // USEEFFECT
    useEffect(() => {

        if(!isPending)
        {
            setEmail("")
            setIsSubmitted(true)
        }

    }, [isPending])

    return (

        <div className="mx-auto bg-white p-6 rounded-lg w-full max-w-sm">
            <form action={formAction} className="space-y-4">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="flex-1">
                        <input
                            name="email"
                            type="email"
                            value={email}
                            required
                            className="mt-1 p-2 border border-gray-300 w-full"
                            placeholder="E-mail"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="mt-4 md:mt-0 py-2 px-4 bg-[#001489] text-white hover:bg-blue-700 focus:outline-none"
                    >
                        JOIN
                    </button>
                </div>

                <div
                    className={`mt-4 p-2 rounded-md text-center text-sm ${
                        isPending && isSubmitted ? isPending ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800' : 'bg-white-100'
                    }`}
                >
                    {isPending ? (
                        <div className="flex justify-center items-center">
                        <div className="w-4 h-4 border-4 border-t-transparent border-blue-500 rounded-full animate-spin mr-2"></div>
                        Loading...
                        </div>
                    ) : state != null ? (
                        state.status == 200 ? 'Abonelik başarılı!' : 'Abonelik başarısız'
                    ) : ''}
                </div>
            </form>
        </div>
    )
}