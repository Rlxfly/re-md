import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {
	let res = await fetch(`https://api.waifu.pics/sfw/${command}`)
	if (!res.ok) throw await res.text()
	let json = await res.json()
	conn.sendButton(m.chat, `Random Image ${command.capitalize()}`, json.url, json.url, [['Next', usedPrefix + command]], m)
}
handler.help = handler.alias = ['waifu', 'neko']
handler.tags = ['weebs']
handler.command = /^(waifu|neko)$/i

export default handler
