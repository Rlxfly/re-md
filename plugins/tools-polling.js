
let handler = async (m, { conn, text, args, usedPrefix, command }) => {

let name = await conn.getName(m.sender)
let a = []
let b = text.split('|')
if (!b[1]) throw 'Format\n' + usedPrefix + command + ' menghalo? |hai|tidak awikwok'
if (b[12]) throw 'Terlalu Banyak pilihan, Format\n' + usedPrefix + command + ' menghalo? |hai|tidak awikwok'

for (let c = 1; c < b.length; c++) {
a.push([b[c]])
			}
			
			let caption = `*ᴘᴏʟʟɪɴɢ ʀᴇǫᴜᴇsᴛ ʙʏ : * ${name}\n*Pesan:* ${text.split('|')[0]}`
			return conn.sendPoll(m.chat, caption, a, m)

}
handler.help = ['poll question|option|option']
handler.tags = ['group'] 
handler.alias = ['Polling', 'Options']
handler.command = /^po(l((l?ing|ls)|l)|ols?)$/i

export default handler
