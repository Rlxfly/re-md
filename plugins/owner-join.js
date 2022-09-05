let linkRegex = /([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i

let handler = async (m, { conn, text, usedPrefix, command, isOwner }) => {

    let [_, code, expired] = text.match(linkRegex) || []
    if (!code) throw 'Link invalid'
    let res = await conn.groupAcceptInvite(code)
    if (!res) throw res.toString()
    let name = await conn.getName(res).catch(_ => null)
    
    let caption = `*Berhasil join grup* ${name || res}\n`
  
    let chats = global.db.data.chats[res]
    if (!chats) chats = global.db.data.chats[res] = {}
    if (expired) chats.expired = +new Date() + expired * 1000 * 60 * 60 * 24

return m.reply(caption) 
}
handler.command = /^join$/i
handler.rowner = true
export default handler
