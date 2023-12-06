/*
 * @Author: hyl 2126419009@qq.com
 * @Date: 2023-12-04 15:35:58
 * @LastEditors: hyl 2126419009@qq.com
 * @LastEditTime: 2023-12-05 21:08:37
 * @FilePath: /chatgpt-app/components/home/Main.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import ChatInput from "./ChatInput"
import Menu from "./Menu"
import MessageList from "./MessageList"
import Welcome from "./Welcome"


export default function Main() {
    return (
    <div className="flex-1 relative">
    <main className="overflow-y-auto w-full h-full bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100">
        <Menu />
        {/* <Welcome /> */}
        <MessageList />
        <ChatInput />
    </main>
    </div>
    )
}