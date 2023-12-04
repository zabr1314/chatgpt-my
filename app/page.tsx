/*
 * @Author: hyl 2126419009@qq.com
 * @Date: 2023-12-04 11:34:52
 * @LastEditors: hyl 2126419009@qq.com
 * @LastEditTime: 2023-12-04 17:48:55
 * @FilePath: /chatgpt-app/app/page.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
"use client"

import Navigation from "@/components/home/Navigation"
import Main  from "@/components/home/Main"
import { useState } from "react"
import { useAppContext } from "@/components/AppContext"

export default function Home() {
    const {
        state:{themeMode}
    }=useAppContext()
  return (
    <main className={`${themeMode} h-full flex`}>
        <Navigation />
        <Main />
    </main> 
  )
}
