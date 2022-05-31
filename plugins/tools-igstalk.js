import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
	if (!text) throw 'Input Username'
	text = text.replace(/^@/, '')
	let res = await fetch(API('https://expressjs-akkun.up.railway.app', '/instagram/stalk', { user: text }))
	if (!res.ok) throw await res.text()
	let json = await res.json()
	if (!json.success) throw json.msg
	let data = json.result, img = data['hd_profile_pic_url_info'].url;
	['id', 'hd_profile_pic_url_info', 'account_type'].forEach(Reflect.deleteProperty.bind(null, data))
	let txt = Object.keys(data).map((v) => `*${v.replace(/[_]/g, ' ').capitalize()}:* ${data[v]}`).join`\n`
	conn.sendMessage(m.chat, { image: { url: img }, caption: txt.trim() }, { quoted: m })
}
handler.help = ['igstalk']
handler.tags = ['tools']
handler.command = /^igstalk|stalkig$/i

export default handler
