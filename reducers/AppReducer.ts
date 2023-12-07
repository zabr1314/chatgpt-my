/*
 * @Author: hyl 2126419009@qq.com
 * @Date: 2023-12-04 18:17:36
 * @LastEditors: hyl 2126419009@qq.com
 * @LastEditTime: 2023-12-07 11:28:03
 * @FilePath: /chatgpt-app/reducers/AppReducer.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Message,Chat } from "@/types/chat";
import { type } from "os";
import { act } from "react-dom/test-utils";

export type State = {
    displayNavigation: boolean;
    themeMode: "light" | "dark";
    currentModel:string,
    messageList:Message[]
    streamingId: string
    selectedChat?:Chat
}

export enum ActionType {
    UPDATE = 'UPDATE',
    ADD_MESSAGE = "ADD_MESSAGE",
    UPDATE_MESSAGE = "UPDATE_MESSAGE",
    REMOVE_MESSAGE ="REMOVE_MESSAGE"
}

type MessageAction={
    type: ActionType.ADD_MESSAGE | ActionType.UPDATE_MESSAGE | ActionType.REMOVE_MESSAGE;
    message:Message
}

type UpdateAction = {
    type: ActionType.UPDATE;
    field:string
    value:any
} 
export type Action = UpdateAction | MessageAction;
export const initState: State = {
    displayNavigation:true,
    themeMode: "light",
    currentModel:"gpt-3.5-turbo",
    messageList:[],
    streamingId:"",
}

export function reducer(state: State , action: Action){
    switch(action.type){
        case ActionType.UPDATE:
            return {
                ...state,
                [action.field]: action.value
        }
        case ActionType.ADD_MESSAGE:{
            const messageList = state.messageList.concat([action.message])
            return {...state,messageList}
        }
        case ActionType.UPDATE_MESSAGE:{
            const messageList = state.messageList.map((message)=>{
                if(message.id === action.message.id){
                    return action.message
                }
                return message
            })
            return {...state,messageList}
        }
        case ActionType.REMOVE_MESSAGE:{
            const messageList = state.messageList.filter((message)=>{
                return message.id !== action.message.id
            })
            return {...state,messageList}
        }
        default:throw new Error()
    }
}