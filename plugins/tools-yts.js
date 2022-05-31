import fetch from 'node-fetch'

let handler = async (m, { text }) => {
	if (!text) throw 'Input Query'
	let res = await fetch(API('rrul', '/api/yt/yts', { q: text }))
	if (!res.ok) throw await res.text()
	let json = await res.json()
	if (!json.result.length) throw `Query "${text}" Not Found :/`
	let txt = json.result.map(v => {
		return `${v.title} (${v.url})\nDuration: ${v.timestamp}\n`
		+ `Uploaded ${v.ago}\n${parseInt(v.views).toLocaleString()} views`.trim()
	}).filter(v => v).join('\n\n')
	m.reply(txt)
}
handler.help = ['ytsearch']
handler.tags = ['tools']
handler.alias = ['yts', 'ytsearch']
handler.command = /^yts(earch)?$/i

export default handler
