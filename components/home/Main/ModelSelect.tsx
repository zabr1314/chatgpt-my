/*
 * @Author: hyl 2126419009@qq.com
 * @Date: 2023-12-05 15:54:23
 * @LastEditors: hyl 2126419009@qq.com
 * @LastEditTime: 2023-12-05 16:25:40
 * @FilePath: /chatgpt-app/components/home/Main/ModelSelect.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useAppContext } from "@/components/AppContext";
import { ActionType } from "@/reducers/AppReducer";
import { PiLightningFill, PiShootingStarFill } from "react-icons/pi";

export default function ModelSelect() {
    const models = [
        {
            id: "gpt-3.5-turbo",
            name: "GPT-3.5",
            icon: PiLightningFill
        },
        {
            id: "gpt-4",
            name: "GPT-4",
            icon: PiShootingStarFill
        }
    ]
    const {
        state: { currentModel },
        dispatch
    } = useAppContext()
    return <div className="flex bg-gray-100 dark:bg-gray-900 p-1 rounded-xl">
        {
            models.map((item) => {
                const selected = item.id === currentModel
                return <button
                    key={item.id}
                    onClick={() => dispatch({ type: ActionType.UPDATE, field: "currentModel", value: item.id })}
                    className={`group hover:text-gray-900 hover:dark:text-gray-100 flex justify-center items-center space-x-2 py-2.5 min-w-[148px] text-sm font-medium border rounded-lg ${selected
                            ? "border-gray-200 bg-white text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
                            : "border-transparent text-gray-500"
                        }`}
                >
                    <span className={`group-hover:text-[#26cf8e] transition-colors duration-100 ${
                        selected ? "text-[#26cf8e": ""
                        }`}>
                            <item.icon />
                            </span>
                    <span className="transition-colors duration-100">{item.name}</span>
                </button>
            })
        }
    </div>
}