import fetch from 'node-fetch'

let handler = async (m, { conn, args }) => {
	if (!args[0]) throw false 
	let res = await fetch(API('https://zenzapis.xyz', '/downloader/xvideos', { apikey: 'B2CB95861FBF', url: args[0] }))
	let json = await res.json()
	if (json.result?.message) throw json.result.message
	let teks = '⭔ Title : '+json.result.title+'\n⭔ Duration : '+json.result.duration+'s' 
	await m.reply('*LOADING....*')
	conn.sendMessage(m.chat, { video: { url: json.result.files.high }, caption: teks }, { quoted: m })
}
handler.command = /^(xnxx)$/i

export default handler
