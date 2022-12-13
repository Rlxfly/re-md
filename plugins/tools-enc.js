import obs from 'obfuscator'

let handler = async (m, { conn, text }) => {
	if (!text) throw 'Mana text nya?'
	let enc = await obs.utils.hex(text)
	m.reply(enc)
}
handler.help = ['enc', 'encrypt'].map(v => v + ' <text>')
handler.tags = ['tools']
handler.command = /^(enc2(rypt2)?)$/i

export default handler
