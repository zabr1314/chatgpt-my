/*
 * @Author: hyl 2126419009@qq.com
 * @Date: 2023-12-07 10:03:20
 * @LastEditors: hyl 2126419009@qq.com
 * @LastEditTime: 2023-12-07 10:03:44
 * @FilePath: /chatgpt-app/lib/prisma.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { PrismaClient } from "@prisma/client"

const prismaClientSingleton = () => {
    return new PrismaClient()
}

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClientSingleton | undefined
}

const prisma = globalForPrisma.prisma ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma