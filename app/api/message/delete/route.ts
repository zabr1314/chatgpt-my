/*
 * @Author: hyl 2126419009@qq.com
 * @Date: 2023-12-07 10:38:02
 * @LastEditors: hyl 2126419009@qq.com
 * @LastEditTime: 2023-12-07 10:40:50
 * @FilePath: /chatgpt-app/app/api/message/delete/route.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {
    const id = request.nextUrl.searchParams.get("id");
    if (!id) {
        return NextResponse.json({code:-1})
    }
    await prisma.message.delete({
        where:{
            id
        }
    })
    return NextResponse.json({code:0})
}