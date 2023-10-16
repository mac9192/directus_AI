import {FC} from 'react'

interface ChatHeaderProps {}


const ChatHeader: FC<ChatHeaderProps> = () =>{

    return (

        <div className='flex w-full gap-3 justify-start items-center text-zinc-800'>
            <div className='flex flex-col items-start text-sm'>
                <p>Chat With</p>
                <div className='flex gap-1.5 items-center'>
                    <p className='w-2 h-2 rounded-full bg-green-500'></p>
                    <p className="font-medium">Cheves Briceno Law AI Powered Chatbot</p>
                </div>
            </div>
        </div>
    )
}

export default ChatHeader