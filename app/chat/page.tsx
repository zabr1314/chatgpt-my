/*
 * @Author: hyl 2126419009@qq.com
 * @Date: 2023-12-04 15:11:13
 * @LastEditors: hyl 2126419009@qq.com
 * @LastEditTime: 2023-12-04 15:26:27
 * @FilePath: /chatgpt-app/app/chat/page.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'chat',
  }
  
export default function Chat() {
    return (
        <main className="bg-blue-500 p-10">
            <h1>Chat</h1>
        </main>
        );
    }