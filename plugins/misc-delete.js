let handler = async (m, { conn, command }) => {
if (!m.quoted) throw 'Reply pesan yang ingin dihapus'
try {
let gada = m.message.extendedTextMessage.contextInfo.participant
let mana = m.message.extendedTextMessage.contextInfo.stanzaId
return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: mana, participant: gada }})}
 catch {
  return conn.sendMessage(m.chat, { delete: m.quoted.vM.key })
}}

handler.tags = ['misc']
handler.help = ['del', 'delete']
handler.command = /^del(ete)?$/i

export default handler
