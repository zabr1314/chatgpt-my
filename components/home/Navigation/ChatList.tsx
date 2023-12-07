/*
 * @Author: hyl 2126419009@qq.com
 * @Date: 2023-12-04 20:57:52
 * @LastEditors: hyl 2126419009@qq.com
 * @LastEditTime: 2023-12-07 15:37:43
 * @FilePath: /chatgpt-app/components/home/Navigation/ChatList.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { groupByDate } from "@/common/util";
import { Chat } from "@/types/chat";
import { useEffect, useMemo, useState ,useRef} from "react";
import ChatItem from "./Chatltem";
import { useEventBusContext } from "@/components/EventBusContext";
import { useAppContext } from "@/components/AppContext";
import { ActionType } from "@/reducers/AppReducer";

export default function ChatList(){
    const [chatList,setChatList] = useState<Chat[]>([])
    const pageRef = useRef(1)
    const groupList = useMemo(()=>{
        return groupByDate(chatList)
    },[chatList])
    const {subscribe,unsubscribe} = useEventBusContext()
    const{state:{selectedChat},dispatch}=useAppContext()
    const loadMoreRef = useRef(null)
    const hasMoreRef = useRef(false)
    const loadingRef = useRef(false)

    async function getData() {
        if(loadingRef.current){
            return
        }
        loadingRef.current = true
        const response = await fetch(`/api/chat/list?page=${pageRef.current}`,{
            method: "GET"
        })
        if(!response.ok){
            loadingRef.current = false
            console.log("response.statusText")
            return
        }
        
        const {data} = await response.json()
        hasMoreRef.current = data.hasMore
        if(pageRef.current === 1){
            setChatList(data.list)
        }else{
            setChatList((list)=> list.concat(data.list))
        }
        pageRef.current++
        loadingRef.current = false
    }

    useEffect(()=>{
        getData()
    },[])


    useEffect(()=>{
        const callback: EventListener = ()=>{
            pageRef.current = 1
            getData()
        }
        subscribe("fetchChatList",callback)
        return ()=> unsubscribe("fetchChatList",callback)
    },[])

    useEffect(() => {
        let observer: IntersectionObserver | null = null
        let div = loadMoreRef.current
        if (div) {
            observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasMoreRef.current ) {
                    getData()
                }
            })
            observer.observe(div)
        }
        return () => {
            if (observer && div) {
                observer.unobserve(div)
            }
        }
    }, [])
    return <div className="flex-1 mb-[48px] mt-2 flex flex-col overflow-y-auto">
        {
        groupList.map(([data,list])=>{
            return (
            <div key={data}>
                <div className="sticky top-0 z-10 p-3 text-sm bg-gray-900 text-gra-500">
                    {data}
                </div>
                 <ul>
                {list.map((item)=>{
                const selected = selectedChat?.id ===item.id
                return <ChatItem 
                key={item.id}
                item={item}
                selected={selected}
                onSelected={(chat)=>{
                    dispatch({type:ActionType.UPDATE,
                    field:"selectedChat",
                    value:chat
                })
                }}
                ></ChatItem>
            })}
        </ul>
            </div>
            )
        })
        }
        <div
        ref={loadMoreRef}
        >&nbsp;</div>
    </div>
}