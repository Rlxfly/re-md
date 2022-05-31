export default Object.assign(async function handler(m, { text }) {
    global.DATABASE.data.sticker = global.DATABASE.data.sticker || {}
    if (!m.quoted) throw 'Reply Sticker!'
    if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
    if (!text) throw `Tidak ada teks`
    let sticker = global.DATABASE.data.sticker
    let hash = m.quoted.fileSha256.toString('hex')
    if (sticker[hash] && sticker[hash].locked) throw 'You have no permission to change this sticker command'
    sticker[hash] = {
        text,
        mentionedJid: m.mentionedJid,
        creator: m.sender,
        at: + new Date,
        locked: false,
    }
    m.reply(`Done!`)
}, {
    help: ['cmd'].map(v => 'set' + v + ' <text>'),
    tags: ['database'],
    command: ['setcmd'],
    premium: 'true'
})