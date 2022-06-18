//Module version

import { jadwalTV } from '@bochilteam/scraper'

let handler = async (m, { conn, text, usedPrefix: _p }) => {

 if(!text) throw 'Input Chanel TV Name!'

let res = await jadwalTV(text)
	let txt = res.result.map((v) => `「${v.date.replace('WIB', ' WIB')}」➦  ${v.event}`).join`\n`
	let ch = `\n\t\t 「📺」 Jadwal TV ${res.channel}\t\t\n`

  conn.sendButton(m.chat, ch, txt, [['「 🅂🄲 」', _p + 'sc']], false, { quoted: m })

}

handler.alias = ['jtv', 'jadwaltv']
handler.command = /^(jtv|jadwaltv)$/i

export default handler
