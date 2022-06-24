import fetch from "node-fetch"

let handler = async (m, { conn, text }) => {

  if(!text) throw 'Cari apa?'
  await m.reply('Loding...')
  let name = conn.getName(m.sender)
  let fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
  let res = await fetch(global.API('https://meme-api.herokuapp.com', '/gimme/' + encodeURI(text || ''), {}))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Media tidak ditemukan!'
  await conn.sendFile(m.chat, json.url, text, json.title, fkon, false, { thumbnail:thumb })
}
handler.help = ['subreddit <query>']
handler.tags = ['tools']
handler.command = /^(sr|subreddit)$/i

export default handler
