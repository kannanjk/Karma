import useLoginModal from "@/hooks/UseLoginModal"
import { useRegisterModal } from "@/hooks/UseRegisterModal"
import { useAppSelector } from "@/Redux/Store"
import React, { useCallback, useState } from "react"
import toast from "react-hot-toast"
import Button from "./Button"
import Avathar from "./Avathar"
import { createPost } from "@/Api/Post"
import LoadingModal from "./Modals/LoadingModel"
import { createComment } from "@/Api/Comments"

interface FormsProp {
    placeholder: string
    isComment?: boolean
    postId: any
}

const Forms: React.FC<FormsProp> = ({
    isComment, placeholder, postId
}) => {
    const loginModal = useLoginModal()
    const registerModal = useRegisterModal()
    const [loading, setLoading] = useState<boolean>(false)
    const [body, setBody] = useState('')

    const { user } = useAppSelector((state) =>
        state.user
    )

    const onSubmit = useCallback(async () => {
        try {
            if (body) {
                const post = {
                    content: body,
                    user: user?.id
                }
                if (isComment) {
                    setLoading(true)
                    const dat = {
                        postId: postId,
                        userId: user?.id,
                        content: body
                    }
                    createComment(dat).then((data: any) => {
                        toast.success(data?.message)
                    })
                    setBody('')
                    setLoading(false)
                } else {
                    setLoading(true)
                    const res = await createPost(post)
                    if (res?.success) {
                        toast.success(res?.message)
                        setBody('')
                        setLoading(false)
                    } else {
                        toast.error("try again")
                        setLoading(false)
                    }
                }
            } else {
                toast.success("say somthing")
            }
        } catch (error) {
            toast.error("Somthing went error")
        }
    }, [body, isComment, postId, user?.id]);
    return (
        <div className="border-b-[1px] border-neutral-800 px-5 py-2 ">
            {
                user?.id ? (
                    <div className="flex flex-row gap-4">
                        {/* <LoadingModal loading={loading} /> */}
                        <div>
                            <Avathar userId={user?.id} />
                        </div>
                        <div className="w-full">
                            <textarea
                                onChange={(e) => setBody(e.target.value)}
                                value={body}
                                className="
                            disabled:opacity-80 peer resize-none mt-3 w-full bg-black ring-0
                             outline-none text-[20px] placeholder-neutral-500 text-white
                            "
                                placeholder={placeholder}
                            >
                            </textarea>
                            <hr
                                className="opacity-0 peer-focus:opacity-100 h-[1px] w-full border-neutral-800 transition "
                            />
                            <div className="mt-4 flex flex-row justify-end">
                                <Button
                                    onClick={onSubmit}
                                    label="Tweet"
                                />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="py-8">
                        <h1 className="text-white text-2xl text-center mb-4 font-bold">
                            welcome to tiwtter
                        </h1>
                        <div className="flex flex-row items-center justify-center gap-4">
                            <Button label="Register"
                                onClick={registerModal.onOpen}
                            />
                            <Button
                                label="Login"
                                onClick={loginModal.onOpen}
                            />
                        </div>
                    </div >
                )
            }

        </div >
    )
}

export default Forms