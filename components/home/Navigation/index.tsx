/*
 * @Author: hyl 2126419009@qq.com
 * @Date: 2023-12-04 15:33:44
 * @LastEditors: hyl 2126419009@qq.com
 * @LastEditTime: 2023-12-04 21:01:51
 * @FilePath: /chatgpt-app/components/home/Navigation.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import Menubar from "./Menubar"
import { useAppContext } from "@/components/AppContext"
import Button from "@/components/common/Button"
import Toolbar from './Toolbar'
import ChatList from "./ChatList"
export default function Navigation() {
    const{state:{displayNavigation}} = useAppContext()
    return( 
    <nav className={`${displayNavigation ? "" : "hidden"} flex flex-col dark relative h-full w-[260px] bg-gray-900 text-gray-300 p-2`}>
        <Menubar></Menubar>
        <ChatList></ChatList>
        <Toolbar></Toolbar>
    </nav>
    )
}