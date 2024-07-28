import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from "react"
import { updateUser, uploadImage } from "@/Api/userApi"
import { setUser } from "@/Redux/Features/GetUser"
import toast from "react-hot-toast"
import ImageUpload from "../ImageUpload";

interface Data {
    id: number;
    name: string;
    bio: string
    email: string
    profileImage: string
}

interface EditPrif {
    editModal: boolean
    setEdimodal: React.Dispatch<React.SetStateAction<boolean>>
    data: Data
}

const EditModel: React.FC<EditPrif> = ({ editModal, setEdimodal, data }) => {

    const [formData, setFormData] = useState({ ...data });
    const [profileImage, setProfileImage] = useState<File | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const onImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;
        if (target && target.files && target.files[0]) {
            let img = target.files[0];
            if (target.name === "profileImage") {
                setProfileImage(img);
            }
        }
    };

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const user = {
            email: data?.email,
            name: formData.name,
            bio: formData.bio,
            profileImage: profileImage?.name
        }
        const res = await updateUser(user)

        if (res.success) {
            setUser(res)
            setEdimodal(false)
            toast.success(res.message)
        } else {
            toast.error(res.message)
        }

        let UserData = formData;
        if (profileImage) {
            const data = new FormData();
            const fileName = Date.now() + profileImage.name;
            data.append("name", fileName);
            data.append("file", profileImage);
            UserData.profileImage = fileName;
            await uploadImage(data)
        }
    }

    return (
        editModal == true ?
            <div id="default-modal" className=" flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative p-4 w-full max-w-2xl max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Edit profile
                            </h3>
                            <button onClick={() => setEdimodal(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="p-4 md:p-5">
                            <form className="space-y-4" >
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                    <input type="file"
                                        onChange={onImageChange}
                                        // value={formData?.profileImage}
                                        name="profileImage" id="profileImage" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter name" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                    <input type="text"
                                        onChange={handleChange}
                                        value={formData?.name}
                                        name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter name" />
                                </div>
                                <div>
                                    <label htmlFor="bio" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bio</label>
                                    <input type="text" name="bio" id="bio"
                                        onChange={handleChange}
                                        value={formData?.bio}
                                        placeholder="Enter bio" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                                </div>
                                <div className="flex p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                    <button onClick={(e: any) => onSubmit(e)} type="button" className="ml-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div> : ''
    )
}

export default EditModel