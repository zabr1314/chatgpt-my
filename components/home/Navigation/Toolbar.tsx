/*
 * @Author: hyl 2126419009@qq.com
 * @Date: 2023-12-04 15:33:44
 * @LastEditors: hyl 2126419009@qq.com
 * @LastEditTime: 2023-12-04 18:31:11
 * @FilePath: /chatgpt-app/components/home/Navigation.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import Button from "@/components/common/Button"
import {MdLightMode,MdDarkMode,MdInfo} from "react-icons/md"
import { useAppContext } from "@/components/AppContext"
import { ActionType } from "@/reducers/AppReducer"

export default function Navigation() {
    const {state:{themeMode} ,dispatch} = useAppContext()
    return( 
    <div className="absolute bottom-0 left-0 right-0 bg-gray-800 flex p-2 justify-between">
        <Button 
        icon={themeMode ==="dark" ? MdDarkMode : MdLightMode} 
        variant="text" 
        onClick={()=>{
            dispatch({
                type:ActionType.UPDATE,
                field:"themeMode",
                value:themeMode ==="dark" ? "light" : "dark"
            })
        }}
        >

        </Button>
        <Button icon={MdInfo} 
        variant="text" 
         />
    </div>
    
    )
}