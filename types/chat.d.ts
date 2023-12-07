/*
 * @Author: hyl 2126419009@qq.com
 * @Date: 2023-12-04 20:56:44
 * @LastEditors: hyl 2126419009@qq.com
 * @LastEditTime: 2023-12-07 10:35:35
 * @FilePath: /chatgpt-app/types/chat.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export interface Chat{
    id:string
    title:string
    updateTime:number
}
export interface Message{
    id:string
    role: "user" | "assistant"
    content:string
    chatId:string
}
export interface MessageRequestBody{
    messages:Message[],
    model:string    
}