import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw 'Input Query'
  let res = await fetch(API('https://wall.alphacoders.com/api2.0','/get.php', {
    auth: '3e7756c85df54b78f934a284c11abe4e',
    method: 'search',
    term: text
  }))
  await m.reply('_In progress, please wait..._')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  console.log(json.wallpapers)
  let img = json.wallpapers.getRandom()
  if (!img) throw 'Result Not Found :/'
  await conn.sendMessage(m.chat, { image: { url: img.url_image }, caption: `Result From: ${text.capitalize()}`, footer: img.url_image, buttons: [{ buttonText: { displayText: 'Next' }, buttonId: `${usedPrefix + command} ${text}` }] }, { quoted: m })
}
handler.help = ['wallpaper']
handler.tags = ['misc']
handler.alias = ['wp', 'wallpaper']
handler.command = /^w(p|allpaper)$/i

export default handler

