/*
 * @Author: hyl 2126419009@qq.com
 * @Date: 2023-12-04 18:17:36
 * @LastEditors: hyl 2126419009@qq.com
 * @LastEditTime: 2023-12-05 16:06:07
 * @FilePath: /chatgpt-app/reducers/AppReducer.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { type } from "os";

export type State = {
    displayNavigation: boolean;
    themeMode: "light" | "dark";
    currentModel:string
}

export enum ActionType {
    UPDATE = 'UPDATE'
}

type UpdateAction = {
    type: ActionType.UPDATE;
    field:string
    value:any
}
export type Action = UpdateAction;
export const initState: State = {
    displayNavigation:true,
    themeMode: "light",
    currentModel:"gpt-3.5-turbo"
}

export function reducer(state: State , action: Action){
    switch(action.type){
        case ActionType.UPDATE:
            return {
                ...state,
                [action.field]: action.value
        }
        default:throw new Error()
    }
}