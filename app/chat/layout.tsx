/*
 * @Author: hyl 2126419009@qq.com
 * @Date: 2023-12-04 15:28:32
 * @LastEditors: hyl 2126419009@qq.com
 * @LastEditTime: 2023-12-04 15:29:46
 * @FilePath: /chatgpt-app/app/chat/layout.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='bg-orange-500 p-10'>{children}</div>
  )
}
