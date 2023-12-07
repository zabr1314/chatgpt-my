/*
 * @Author: hyl 2126419009@qq.com
 * @Date: 2023-12-05 21:40:16
 * @LastEditors: hyl 2126419009@qq.com
 * @LastEditTime: 2023-12-06 16:47:03
 * @FilePath: /chatgpt-app/app/api/chat/route.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { sleep } from "@/common/util";
import { MessageRequestBodey } from "@/types/chat";
import { NextRequest,NextResponse } from "next/server";
export async function POST(request:NextRequest) {
    const {messages} = (await request.json()) as MessageRequestBodey
    const encoder = new TextEncoder()
    const stream = new ReadableStream({
        async start(controller){
            const messageText = messages[messages.length-1].content
            for(let i=0; i<messageText.length;i++){
                await sleep(100)
                controller.enqueue(encoder.encode(messageText[i]))
            }
            controller.close()
        }
    })
    return new Response(stream)
}