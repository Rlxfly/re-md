import axios from 'axios'

let handler = async ( m, { conn, args } ) => {

  if (!/^https?:\/\//.test(args[0])) throw 'Param *URL* must be starts with http:// or https://'
  
if(!args[0]) throw `Url?\n\nEx: .shorten http://github.com/Rlxfly Re7`

let form = new URLSearchParams()
form.append('url', args[0])
form.append('code', args[1] || '')

let res = await axios.post('https://s.rlxfly.my.id/', form)

 await m.reply(`${res.data.url}\n\nJika ingin custom url tambahkan text dibelakang url yg ingin kamu custom`)
}

handler.help = ['shorten']
handler.tags = ['tools']
handler.command = /^short(en|link|url)?$/i

export default handler
