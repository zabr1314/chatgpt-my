/*
 * @Author: hyl 2126419009@qq.com
 * @Date: 2023-12-07 11:13:31
 * @LastEditors: hyl 2126419009@qq.com
 * @LastEditTime: 2023-12-07 12:09:06
 * @FilePath: /chatgpt-app/app/chat/list/route.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import prisma from "@/lib/prisma";
import { NextRequest,NextResponse } from "next/server";

export async function GET(request:NextRequest){
    const param = request.nextUrl.searchParams.get('page')
    const page = param ? parseInt(param) :1
    const list = await prisma.chat.findMany({
        skip:(page-1)*20,
        take:20,
        orderBy:{
            updateTime:"desc"
        }
    })
    const count = await prisma.chat.count()
    const hasMore = count> page *20
    return NextResponse.json({code:0,data:{list,hasMore}})
}