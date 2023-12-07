/*
 * @Author: hyl 2126419009@qq.com
 * @Date: 2023-12-04 15:33:44
 * @LastEditors: hyl 2126419009@qq.com
 * @LastEditTime: 2023-12-07 11:57:55
 * @FilePath: /chatgpt-app/components/home/Navigation.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import Button from "@/components/common/Button"
import { HiPlus } from "react-icons/hi"
import {LuPanelLeft} from "react-icons/lu"
import { useAppContext } from "@/components/AppContext"
import { ActionType } from "@/reducers/AppReducer"

export default function Navigation() {
    const {dispatch} = useAppContext()
    return( 
    <div className="flex space-x-3">
        <Button 
        icon={HiPlus} 
        variant="outline" 
        className="flex-1" 
        onClick={()=>{
            dispatch({
                type:ActionType.UPDATE,
                field:"selectedChat",
                value:null
            })
        }}
        >创建对话
        </Button>
        <Button icon={LuPanelLeft} 
        variant="outline" 
        onClick={()=>{
            dispatch({
                type:ActionType.UPDATE,
                field:"displayNavigation",
                value:false
            })
        }} 
/>
    </div>
    
    )
}