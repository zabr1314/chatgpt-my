/*
 * @Author: hyl 2126419009@qq.com
 * @Date: 2023-12-04 11:34:52
 * @LastEditors: hyl 2126419009@qq.com
 * @LastEditTime: 2023-12-05 17:39:03
 * @FilePath: /chatgpt-app/tailwind.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        colors:{
            primary:{
                500:'#00B981',
                600:'#059669'
            }
        }
    },
  },
  plugins: [],
}
