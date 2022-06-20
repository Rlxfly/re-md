import jimp from 'jimp'
import PhoneNumber from 'awesome-phonenumber'

let tags = {}
const defaultMenu = {
  before: 'Hi, %name 👋\n\n≻ ```Date: %date\n≻ Time: %time WIB\n≻ Runtime: %uptime```\n%readmore',
  header: '╭┉┉┉≻ *“%category”* ≺┉┉┉╮',
  body: `┆ \t ➦ _%cmd%islimit%isPremium_ `,
  footer: '┆',
  after: `╰┉┉┉≻\t _${me}_ \t`,
}

let handler = async (m, { conn, usedPrefix: _p }) => {
  try {
    let name = m.pushName || conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: 'Asia/Jakarta'
    })
    let time = d.toLocaleTimeString(locale, { timeZone: 'Asia/Jakarta' })
    time = time.replace(/[.]/g, ':')
    let _uptime
    if (process.send) {
      process.send('uptime')
      _uptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let uptime = clockString(_uptime)
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag].toUpperCase()) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Limit)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime,
      me: conn.getName(conn.user.jid),
      name, date, time,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])

const vi = ['https://telegra.ph/file/067b2cb3312837533239c.mp4',
'https://telegra.ph/file/e38881701692c74484a17.mp4',
'https://telegra.ph/file/de776d34ef058b7d2ec12.mp4', 'https://telegra.ph/file/bc82653506c301b40679c.mp4',     'https://telegra.ph/file/7f10b3624991bbcee9ded.mp4', 'https://telegra.ph/file/51aa9701839dcc29066e9.mp4',     'https://telegra.ph/file/4f26132ac0296a34a45a8.mp4']

var vid = vi[Math.floor(Math.random() * (vi.length))]

                         let hi = `\n\n\t\t _Have a good day ${name}_ \t\t\n\n`
                         
                         //Gif button
    // const pp = await conn.profilePictureUrl(conn.user.jid, 'image').catch(_ => './src/avatar_contact.png')
    // if (m.isGroup) return conn.sendButton(m.chat, text.trim(), conn.getName(conn.user.jid), pp, [['Speedtest', _p + 'ping'], ['Owner', _p + 'owner']], m)
    // conn.sendHydrated(m.chat, text.trim(), conn.getName(conn.user.jid), pp, null, null, null, null, [['Speedtest', _p + 'ping'], ['Owner', _p + 'owner']])
   // conn.sendMessage(m.chat, { video: { url: 'https://telegra.ph/file/c82d5c358495e8ef15916.mp4' }, gifPlayback: true, gifAttribution: ~~(Math.random() * 2), caption: text.trim(), footer: await conn.getName(conn.user.jid) , templateButtons: [{ quickReplyButton: { displayText: 'Speedtest', id: `${_p}ping` }}, { quickReplyButton: { displayText: 'Owner', id: `${_p}owner` }} ] })
     /*
     
     # Normal image button
conn.sendButton(m.chat, text.trim(), conn.user.name, await genProfile(conn, m), [['Speedtest', _p + 'ping'], ['Owner', _p + 'owner']], m)
*/

let ppl = await( await conn.profilePictureUrl(m.sender, 'image').catch(() => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'))

    let ppb = await( await conn.profilePictureUrl(conn.user.jid, 'image').catch(() => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'))
    
//Image button + externalAdReply
 /*
conn.sendButton(m.chat, hi, text.trim(), await( await conn.getFile(ppb)).data, [['OWNER', '-owner']], false, { quoted: m, contextInfo: { externalAdReply: { showAdAttribution: true,
mediaType:  2,
mediaUrl: 'https://youtu.be/Nq3x1AkwgpY',
title: time,
body: me,
sourceUrl: 'http://s.id/0x404', thumbnail: await( await conn.getFile(ppl)).data
*/

    await m.reply('_Ｌｏａｄｉｎｇ．．．_')
// Gif button
 conn.sendMessage(m.chat, { video: { url: vid }, gifPlayback: true, gifAttribution: ~~(Math.random() * 2), caption: text.trim(), footer: me , templateButtons: [{ quickReplyButton: { displayText: 'Speedtest', id: `${_p}ping` }}, { quickReplyButton: { displayText: 'Owner', id: `${_p}owner` }} ] })
  } catch (e) {
    m.reply('An error occurred')
    m.reply(e)
  }
}
handler.help = ['menu']
handler.tags = ['general']
handler.alias = ['menu', 'help']
handler.command = /^(menu|help|\?)$/i
handler.exp = 3

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
