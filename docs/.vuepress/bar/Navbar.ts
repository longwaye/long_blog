/*
 * @Descripttion: 
 * @Author: LongWeiYi
 * @Date: 2023-02-28 21:33:19
 * @LastEditors: LWY😊
 * @LastEditTime: 2023-02-28 21:48:36
 * @FilePath: \LWY'blog\docs\.vuepress\bar\Navbar.ts
 */
import { navbar } from 'vuepress-theme-hope'

export default navbar([
  {
    text: 'HOME',
    link: '/',
    icon: 'home',
  },
  {
    text: 'FE',
    prefix: '',
    icon: '_qianduankaifa',
    children: [
      {
        text:'CSS',
        icon:'css',
        link:'/FE/CSS/CATALOG'
      },
       {
        text:'HTML',
        icon:'HTML',
        link:'/FE/HTML/CATALOG'
      },
      {
        text:'JS',
        icon:'JavaScript',
        link:'/FE/JS/CATALOG'
      }
      ,
      {
        text:'TS',
        icon:'typescript',
        link:'/FE/TS/CATALOG'
      }
      ,
      {
        text:'VUE',
        icon:'Vue',
        link:'/FE/VUE/CATALOG',
      }
      ,
      {
        text:'REACT',
        icon:'React',
        link:'/FE/REACT/CATALOG'
      }
    ]
  },
])
