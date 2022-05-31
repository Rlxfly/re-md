import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
	if (!text) throw 'Input text'
	let res = await fetch(`https://api-rull.herokuapp.com/api/cmd?code=${encodeURIComponent(text)}`)
	if (res.status !== 200) throw res.statusText
	conn.sendMessage(m.chat, { image: { url: res.url }}, { quoted: m })
}
handler.help = handler.alias = ['carbon']
handler.tags = ['misc']
handler.command = /^(carbon)$/i

export default handler
