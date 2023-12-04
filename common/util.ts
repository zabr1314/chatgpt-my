/*
 * @Author: hyl 2126419009@qq.com
 * @Date: 2023-12-04 21:20:07
 * @LastEditors: hyl 2126419009@qq.com
 * @LastEditTime: 2023-12-04 21:41:26
 * @FilePath: /chatgpt-app/common/util.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Chat } from "@/types/chat";   
import { LuPaintbrush2 } from "react-icons/lu";

export function groupByDate(chatList:Chat[]){
    const groupMap = new Map<string, Chat[]>();
    chatList.forEach((item)=>{
        const now = new Date();
        const updateTime = new Date(item.updateTime);
        let key = "未知时间"
        const dayDiff = Math.floor((now.getTime() - updateTime.getTime()) / (24 * 60 * 60 * 1000));
        if(dayDiff === 0 && now.getTime() === updateTime.getTime()){
            key = "今天"
        }
        else if(dayDiff<=7){
            key = "最近7天"
        }
        else if(dayDiff<=31){
            key = "最近一个月"
        }
        else{
            key = "更久之前"
        }
        if (groupMap.has(key)){
            groupMap.get(key)?.push(item)
        }else{
            groupMap.set(key,[item])
        }
    })
    groupMap.forEach((item)=>{
        item.sort((a,b)=>b.updateTime - a.updateTime)
    })
    const groupList= Array.from(groupMap).sort(([,list1],[,list2])=>{
        return(
            list2[list2.length-1].updateTime-
            list1[list1.length-1].updateTime
            )
    })
    return groupList
}