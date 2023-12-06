/*
 * @Author: hyl 2126419009@qq.com
 * @Date: 2023-12-04 21:20:07
 * @LastEditors: hyl 2126419009@qq.com
 * @LastEditTime: 2023-12-06 15:24:39
 * @FilePath: /chatgpt-app/common/util.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Chat } from "@/types/chat"

export function groupByDate(chatList: Chat[]) {
    const groupMap = new Map<string, Chat[]>()
    chatList.forEach((item) => {
        const now = new Date()
        const updateTime = new Date(item.updateTime)
        let key = "未知时间"
        const dayDiff = Math.floor(
            (now.getTime() - updateTime.getTime()) / (1000 * 60 * 60 * 24)
        )
        if (dayDiff === 0 && now.getDate() === updateTime.getDate()) {
            key = "今天"
        } else if (dayDiff <= 7) {
            key = "最近7天"
        } else if (dayDiff <= 31) {
            key = "最近一个月"
        } else if (now.getFullYear() === updateTime.getFullYear()) {
            key = `${updateTime.getMonth() + 1}月`
        } else {
            key = `${updateTime.getFullYear()}`
        }
        if (groupMap.has(key)) {
            groupMap.get(key)?.push(item)
        } else {
            groupMap.set(key, [item])
        }
    })
    groupMap.forEach((item) => {
        item.sort((a, b) => b.updateTime - a.updateTime)
    })
    const groupList = Array.from(groupMap).sort(([, list1], [, list2]) => {
        return (
            list2[list2.length - 1].updateTime -
            list1[list1.length - 1].updateTime
        )
    })
    return groupList
}

export function sleep(time: number) {
    return new Promise((resolve) =>
        setTimeout(() => {
            resolve('time is up')
        }, time)
    )
}