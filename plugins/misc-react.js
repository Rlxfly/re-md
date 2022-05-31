let { proto } = (await import('@adiwajshing/baileys')).default

let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Emoji?'
  let q = m.quoted ? await m.getQuotedObj() : m
  conn.relayMessage(m.chat, { reactionMessage: proto.ReactionMessage.create({ key: q.key, text: args[0] }) }, { messageId: q.key.id })
}
handler.help = ['react']
handler.tags = ['misc']
handler.command = /^(react)$/i

export default handler
