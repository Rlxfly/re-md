export async function all(m) {

  const stc = ['http://short.up.railway.app/qYCKWq',
              'http://short.up.railway.app/jOgajy',
              'http://short.up.railway.app/kEBa2O',
              'http://short.up.railway.app/ZI4QQk',
              'http://short.up.railway.app/uWMEQs',
              'http://short.up.railway.app/aSyMjP']
  var stcs = stc[Math.floor(Math.random() * (stc.length))]
if (m.isBaileys) return
    if (m.chat.endsWith('broadcast')) return

    // when tagged send sticker 
    try {
        if (m.mentionedJid.includes(this.user.jid) && m.isGroup) {
            await this.sendFile(m.chat, stcs, 'tag.webp', '', m, false, {sendEphemeral: true})
        }
    } catch (e) {
        return
    }
}
