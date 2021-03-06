//Module version

import { jadwalTV } from '@bochilteam/scraper'

let handler = async (m, { conn, text, usedPrefix: _p }) => {

 if(!text) throw 'Input Chanel TV Name!'

let res = await jadwalTV(text)
	let txt = res.result.map((v) => `γ${v.date.replace('WIB', ' WIB')}γβ¦  ${v.event}`).join`\n`
	let ch = `\n\t\t γπΊγ Jadwal TV ${res.channel}\t\t\n`

  conn.sendButton(m.chat, ch, txt, [['γ ππ² γ', _p + 'sc']], false, { quoted: m })

}

handler.alias = ['jtv', 'jadwaltv']
handler.command = /^(jtv|jadwaltv)$/i

export default handler
