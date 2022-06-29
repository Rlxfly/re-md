let handler = async (m, { conn, text, participants }) => {
if (!text) throw `tag someone`
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(m.chat, [users], 'promote')
m.reply(`@${users.split("@")[0]} is Now admin`)
}
handler.help = ['promote', '^', '↑'].map(v => v+'@tag')
handler.tags = ["group"]
handler.command = /^(promote)$/i
handler.botAdmin = true
handler.admin = true
handler.group = true

export default handler


const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
