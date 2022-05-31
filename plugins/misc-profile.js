import PhoneNumber from 'awesome-phonenumber'

let handler = async (m, { conn }) => {
	let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender,
		username = await conn.getName(who),
		about = (await conn.fetchStatus(who).catch(console.error) || {}).status || '-',
		number = PhoneNumber('+' + who.split('@')[0]).getNumber('international'),
		avatar = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
		url = API('violetics', '/api/canvas/whatsapp-profile', { username, about, number, avatar }, 'apikey')
	conn.sendMessage(m.chat, { image: { url }}, { quoted: m })
}
handler.command = /^(profile)$/i

export default handler
