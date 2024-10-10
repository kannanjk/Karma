import { getUserMessage } from '@/Api/ChatApi'
import React, { useEffect, useRef, useState } from 'react'
import LoadingModal from '../Modals/LoadingModel'
import { getSocket } from './Socket/socket'

interface ChatBoxProp {
    user: any
    chatId: any
}

const ChatBox: React.FC<ChatBoxProp> = ({ user, chatId }) => {
    const [loading, setLoading] = useState<boolean>(false)
    const [message, setMessage] = useState<any>([])
    const [receiveMessage, setReceiveMessage] = useState<any>(null)

    const socket = getSocket()
    const scroll = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // setLoading(true);
        getUserMessage(chatId).then((dat: any) => {
            if (dat) {
                setMessage(dat)
            }
            setLoading(false);
            scroll.current?.scrollIntoView({ behavior: "smooth" });
        });

        socket.on("message-from-server", (data) => {
            setReceiveMessage(data)
        });
        scroll.current?.scrollIntoView({ behavior: "smooth" });

        return () => {
            socket.off("message-from-server");
        };
    }, [chatId, socket]);

    useEffect(() => {
        if (receiveMessage !== null) {
            setMessage((prevMessages: any) => {
                const newMessages = [...prevMessages, receiveMessage];
                return newMessages;
            });
            scroll.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [receiveMessage]);

    return (
        <div className='w-full p-3 no-scrollbar sm:h-[80%] h-[63%] overflow-x-auto text-white'>
            <LoadingModal loading={loading} />
            {
                message?.map((data: any, ind: number) => (
                    <div
                        key={ind}
                        ref={ind === message.length - 1 ? scroll : null} // Attach ref to the last message
                    >
                        {
                            user?.id === data?.receverId ?
                                <div className="mb-4">
                                    <div className="flex items-end">
                                        <div className="max-w-xs mx-2 bg-gray-200 text-gray-700 rounded-lg px-4 py-2">
                                            <p>{data?.message}</p>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className="mb-4 flex justify-end">
                                    <div className="max-w-xs mx-2 bg-blue-600 text-white rounded-lg px-4 py-2">
                                        <p>{data?.message}</p>
                                    </div>
                                </div>
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default ChatBox;
