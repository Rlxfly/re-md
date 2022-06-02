import fetch from 'node-fetch'
import { JSDOM } from 'jsdom';
let handler = async (m, { conn, text }) => {
  
  //Usage reply text/input text

  conn.reply(m.chat, Object.entries(await stylizeText(text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text)).map(([name, value]) => `*「 ${name} 」*\n ${value}`).join`\n\n`, m)
}
handler.help = ['style'].map(v => v + ' <text>')
handler.tags = ['tools']
handler.command = /^(style)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

export default handler
