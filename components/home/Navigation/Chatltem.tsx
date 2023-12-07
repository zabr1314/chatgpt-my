/*
 * @Author: hyl 2126419009@qq.com
 * @Date: 2023-12-05 15:13:42
 * @LastEditors: hyl 2126419009@qq.com
 * @LastEditTime: 2023-12-07 15:49:13
 * @FilePath: /chatgpt-app/components/home/Navigation/Chatltem.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useAppContext } from "@/components/AppContext";
import { useEventBusContext } from "@/components/EventBusContext";
import { ActionType } from "@/reducers/AppReducer";
import { Chat } from "@/types/chat";
import { useEffect, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai"
import { MdCheck, MdClose, MdDeleteOutline } from "react-icons/md"
import { PiChatBold, PiTrashBold } from "react-icons/pi"

type Props = {
    item: Chat
    selected: boolean
    onSelected: (chat: Chat) => void
}

export default function ChatItem({ item, selected, onSelected }: Props) {
    const [editing, setEditing] = useState(false)
    const [deleting, setDeleting] = useState(false)
    const [title,setTitle]= useState(item.title)
    const {publish} = useEventBusContext()
    const {dispatch} = useAppContext()
    useEffect(() => {
        setEditing(false)
        setDeleting(false)
    }, [selected])

    async function updateChat(){
        const response = await fetch("/api/chat/update", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({id:item.id,title})
        })
        if (!response.ok) {
            console.log(response.statusText)
            return
        }
        const {code} =await response.json()
        if(code ==0){
            publish("fetchChatList")
        }
    }
    async function deleteChat(){
        const response = await fetch(`/api/chat/delete?id=${item.id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (!response.ok) {
            console.log(response.statusText)
            return
        }
        const {code} =await response.json()
        if(code ==0){
            publish("fetchChatList")
            dispatch({
                type:ActionType.UPDATE,
                field:"selectedChat",
                value:null
            })
        }
    }
    
    return <li
        onClick={() => onSelected(item)}
        key={item.id}
        className={`relative group flex items-center p-3 space-x-3 cursor-pointer rounded-md hover:bg-gray-800 ${selected ? "bg-gray-800 pr-[3.5em]" : ""
            }`}>
        <div>
            {deleting ? <PiTrashBold /> : <PiChatBold />}
        </div>
        {selected && editing ?
            <input
                autoFocus={true}
                className="flex-1 min-w-0 bg-transparent outline-none"
                value={title}
                onChange={(e)=>{
                    setTitle(e.target.value)
                }}
            />
            :
            <div className="flex-1 whitespace-nowrap overflow-hidden">
                {item.title}
                <span className={` group-hover:from-gray-800 absolute right-0 inset-y-0 w-8 from-gray-900 bg-gradient-to-l ${selected ? "from-gray-800" : ""
                    }`}></span>
            </div>
        }

        {selected && (
            <div className="absolute right-1 flex">
                {
                    editing || deleting ? <>
                        <button
                            onClick={(e) => {
                                if(deleting){
                                    deleteChat()
                                }
                                else{
                                    updateChat()
                                }
                                setDeleting(false)
                                setEditing(false)
                                e.stopPropagation()
                            }}
                            className="p-1 hover:text-white">
                            <MdCheck></MdCheck>
                        </button>
                        <button
                            onClick={(e) => {
                                setDeleting(false)
                                setEditing(false)
                                e.stopPropagation()
                            }}
                            className="p-1 hover:text-white">
                            <MdClose></MdClose>
                        </button>
                    </> :
                        <>
                            <button
                                onClick={(e) => {
                                    setEditing(true)
                                    e.stopPropagation()
                                }}
                                className="p-1 hover:text-white">
                                <AiOutlineEdit></AiOutlineEdit>
                            </button>
                            <button
                                onClick={(e) => {
                                    setDeleting(true)
                                    e.stopPropagation()
                                }}
                                className="p-1 hover:text-white">
                                <MdDeleteOutline></MdDeleteOutline>
                            </button>
                        </>
                }

            </div>
        )}

    </li>
}