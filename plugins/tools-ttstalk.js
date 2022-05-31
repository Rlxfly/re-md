import { fetchUser } from 'tiktok-scraper-ts'

let handler = async (m, { conn, text }) => {
	if (!text) throw 'Input username'
	text = text.replace(/@/, '')
	let res = await fetchUser(text), img = res.avatar
	delete res.id, delete res.secretUID, delete res.avatar
	let txt = Object.keys(res).map((v) => {
		return `*${v.capitalize()}:* ${res[v] ?? ''}`
	}).join`\n`
	conn.sendMessage(m.chat, { image: { url: img }, caption: txt }, { quoted: m })
}
handler.command = /^t(tstalk|iktokstalk)$/i

export default handler
