function handler(m) {
    if (m.quoted && m.quoted.fromMe) this.sendMessage(m.chat, { delete: m.quoted.vM.key })
}
handler.alias = ['del', 'delete']
handler.command = /^del(ete)?$/i

export default handler
