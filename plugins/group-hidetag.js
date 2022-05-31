import { generateWAMessageFromContent } from '@adiwajshing/baileys'

let handler = async (m, { conn, text, participants }) => {
  let users = participants.map(u => conn.decodeJid(u.id))
  let q = m.quoted ? m.quoted : m
  let c = m.quoted ? m.quoted : m.msg
  let msg = conn.cMod(m.chat, generateWAMessageFromContent(m.chat, { [c.toJSON ? q.mtype : 'extendedTextMessage']: c.toJSON ? c.toJSON() : { text: c || '' }}, { quoted: null, userJid: conn.user.id }), text || q.text, conn.user.jid, { mentions: users })
  await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id })
}
handler.help = handler.alias = ['hidetag']
handler.tags = ['group']
handler.command = /^(hidetag)$/i
handler.group = handler.admin = true

export default handler
