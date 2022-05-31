let handler = async (m, { conn }) => {
	if (!/viewOnce/.test(m.quoted?.mtype)) throw 'Reply a viewOnceMessage'
	let mtype = Object.keys(m.quoted.message)[0]
	let buffer = await m.quoted.download()
	let caption = m.quoted.message[mtype].caption || ''
	conn.sendMessage(m.chat, { [mtype.replace(/Message/, '')]: buffer, caption }, { quoted: m })
}
handler.help = ['readviewonce']
handler.tags = ['tools']
handler.command = /^(retrieve|rvo|readviewonce)$/i

export default handler
