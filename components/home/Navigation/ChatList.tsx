/*
 * @Author: hyl 2126419009@qq.com
 * @Date: 2023-12-04 20:57:52
 * @LastEditors: hyl 2126419009@qq.com
 * @LastEditTime: 2023-12-07 10:17:05
 * @FilePath: /chatgpt-app/components/home/Navigation/ChatList.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { groupByDate } from "@/common/util";
import { Chat } from "@/types/chat";
import { useMemo, useState } from "react";
import ChatItem from "./Chatltem";

export default function ChatList(){
    const [chatList,setChatList] = useState<Chat[]>([
        {
            id:"1",
            title:"chat1",
            updateTime:Date.now(),
        },
        {
            id:"2",
            title:"chat2",
            updateTime:Date.now()+1,
        },
        {
            id:"3",
            title:"chat3",
            updateTime:Date.now()+2,
        },
        //帮我多生成像上面一样的数据
        {
            id:"4",
            title:"chat4",
            updateTime:Date.now()+3,
        },
        {   
            id:"5",
            title:"chat5",
            updateTime:Date.now()+4,
        },  
        {
            id:"6",
            title:"chat6",
            updateTime:Date.now()+5,
        },  
        {
            id:"7",
            title:"chat7",
            updateTime:Date.now()+6,
        },  
        {
            id:"8",
            title:"chat8",
            updateTime:Date.now()+7,
        },  
        {
            id:"9",
            title:"chat9",
            updateTime:Date.now()+8,
        },  
        {
            id:"10",
            title:"chat10",
            updateTime:Date.now()+9,
        },
        {
            id:"11",
            title:"chat11",
            updateTime:Date.now()+10,
        },
        {
            id:"12",
            title:"chat12",
            updateTime:Date.now()+11,
        },
        {
            id:"13",
            title:"chat13",
            updateTime:Date.now()+12,
        },
        {
            id:"14",
            title:"chat14",
            updateTime:Date.now()+13,
        },
        {
            id:"15",
            title:"chat15",
            updateTime:Date.now()+14,
        }
        
    ])
    const[selectedChat,setselectedChat] = useState<Chat>()
    const groupList = useMemo(()=>{
        return groupByDate(chatList)
    },[chatList])
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
                    setselectedChat(chat)
                }}
                ></ChatItem>
            })}
        </ul>
            </div>
            )
        })
        }
    </div>
}