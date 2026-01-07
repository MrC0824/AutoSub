
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 优先使用 Inter（如果已安装或Web模式加载），否则回退到原生系统字体
        // Microsoft YaHei 确保中文在 Windows 上显示良好
        sans: [
          'Inter', 
          'Microsoft YaHei', 
          'ui-sans-serif', 
          'system-ui', 
          '-apple-system', 
          'BlinkMacSystemFont', 
          'Segoe UI', 
          'Roboto', 
          'Helvetica Neue', 
          'Arial', 
          'sans-serif'
        ],
      },
    },
  },
  plugins: [],
}
