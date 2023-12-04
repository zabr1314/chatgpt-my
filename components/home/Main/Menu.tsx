/*
 * @Author: hyl 2126419009@qq.com
 * @Date: 2023-12-04 17:33:04
 * @LastEditors: hyl 2126419009@qq.com
 * @LastEditTime: 2023-12-04 18:26:52
 * @FilePath: /chatgpt-app/components/home/Main/Menu.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

"use client"
import  Button  from "@/components/common/Button";
import { LuPanelLeft } from "react-icons/lu";
import { useAppContext } from "@/components/AppContext"
import { ActionType } from "@/reducers/AppReducer";

export default function Menu(){
    const{state:{displayNavigation},dispatch} = useAppContext()
    return(
        <Button icon={LuPanelLeft} 
        className={`${displayNavigation ? "hidden" : ""} fixed left-2 top-2`}
        variant="outline" 
        onClick={()=>{
            dispatch({
                type:ActionType.UPDATE,
                field:"displayNavigation",
                value:true})
        }} 
        />
    )
}