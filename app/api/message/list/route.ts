/*
 * @Author: hyl 2126419009@qq.com
 * @Date: 2023-12-07 11:13:31
 * @LastEditors: hyl 2126419009@qq.com
 * @LastEditTime: 2023-12-07 11:56:49
 * @FilePath: /chatgpt-app/app/chat/list/route.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import prisma from "@/lib/prisma";
import { NextRequest,NextResponse } from "next/server";

export async function GET(request:NextRequest){
    const chatId = request.nextUrl.searchParams.get('chatId')
    if(!chatId){
        return NextResponse.json({code:-1})
    }
    const list = await prisma.message.findMany({
        where:{
            chatId
        },
        orderBy:{
            createTime:"asc"
        }
    })
    return NextResponse.json({code:0,data:{list}})
}