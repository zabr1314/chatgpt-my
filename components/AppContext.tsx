/*
 * @Author: hyl 2126419009@qq.com
 * @Date: 2023-12-04 17:10:12
 * @LastEditors: hyl 2126419009@qq.com
 * @LastEditTime: 2023-12-06 16:33:42
 * @FilePath: /chatgpt-app/components/AppContext.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
"use client"

import { Action, initState, reducer } from "@/reducers/AppReducer";
import { Message } from "@/types/chat";
import { Dispatch,createContext ,useMemo,useState,useContext, useReducer} from "react";

type State = {
    displayNavigation: boolean;
    themeMode: "light" | "dark";
    currentModel:string,
    messageList:Message[],
    streamingId: string,
}

type AppContextProps = {
    state: State;
    dispatch: Dispatch<Action>;
}

const AppContext = createContext<AppContextProps>(null!)

export function useAppContext(){
    return useContext(AppContext)
}

export default function AppContextProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(reducer,initState)
    const contextValue = useMemo(()=>{
        return {state, dispatch}
    },[state,dispatch])
    return <AppContext.Provider value ={contextValue}>{children}</AppContext.Provider>
}