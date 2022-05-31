import fs from 'fs'
import os from 'os'
import { sizeFormatter } from 'human-readable'
let formatSize = sizeFormatter({
	std: 'JEDEC',
	decimalPlaces: '2',
	keepTrailingZeroes: false,
	render: (literal, symbol) => `${literal} ${symbol}B`
})

let handler = async (m, { conn }) => {
	let chats = Object.entries(conn.chats).filter(([a, b]) => a && b.isChats)
	let groups = chats.filter(([a]) => a.endsWith('g.us'))
	let session = fs.statSync(authFile)
	let txt = `
*BOT:*
- ${groups.length} Group Chats
- ${chats.length - groups.length} Personal Chats
- ${chats.length} Total Chats
- Runtime: (${new Date(~~(process.uptime()) * 1000).toTimeString().split(' ')[0]})

*SERVER:*
- Platform: ${process.platform}
- Nodejs: ${process.version}
- Session Size: ${formatSize(session.size)}
- Memory: ${formatSize(os.totalmem() - os.freemem())} / ${formatSize(os.totalmem())}
`
	m.reply(txt.trim())
}
handler.alias = ['stats']
handler.command = /^(stats)$/i

export default handler
