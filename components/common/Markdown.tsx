/*
 * @Author: hyl 2126419009@qq.com
 * @Date: 2023-12-05 21:28:49
 * @LastEditors: hyl 2126419009@qq.com
 * @LastEditTime: 2023-12-05 21:29:57
 * @FilePath: /chatgpt-app/components/common/Markdown.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%Aor
 */


import { memo } from "react"
import ReactMarkdown,{Options} from "react-markdown"

function Markdown({children,...props}:Options){
    return <ReactMarkdown {...props}>{children}</ReactMarkdown>
}

export default memo(Markdown)