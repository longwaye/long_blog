/*
 * @Descripttion:
 * @Author: LongWeiYi
 * @Date: 2023-02-28 21:33:19
 * @LastEditors: LWY😊
 * @LastEditTime: 2023-02-28 21:47:56
 * @FilePath: \LWY'blog\docs\.vuepress\theme.ts
 */
import { hopeTheme } from 'vuepress-theme-hope'
import Navbar from './bar/Navbar'
import Sidebar from './bar/Sidebar'
export default hopeTheme({
	encrypt: {
		config: {},
	},
	hostname: 'https://www.longwaye.ml',
	contributors: false,
	editLink: false,
	author: {
		name: 'lwy',
		url: 'https://www.longwaye.ml',
	},
	darkmode: 'toggle',
	repoDisplay: false,
	iconAssets: '//at.alicdn.com/t/c/font_3921887_yecqcdzar9.css',
	logo: '/logo.png',
	pageInfo: [
		'Author',
		'Original',
		'Date',
		'Category',
		'Tag',
		'ReadingTime',
		'Word',
		'PageView',
	],
	navbar: Navbar,
	sidebar: Sidebar,
	breadcrumb: false,
	plugins: {
		copyright: true,
		blog: {
			excerpt: false,
		},
		comment: {
			dark: 'auto',
			provider: 'Waline',
			serverURL: 'https://www.longwaye.ml',
		},
		components: {
			components: ['Badge', 'CodePen', 'PDF', 'BiliBili'],
		},

		mdEnhance: {
			// 启用流程图
			flowchart: true,
			codetabs: true,
			container: true,
			demo: {
				jsfiddle: false,
				codepen: false,
			},
			align: true,
			imgSize: true,
			figure: true,
			mark: true,
			tabs: true,
			tasklist: true,
		},
	},
})
