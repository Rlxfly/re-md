import { 
    youtubedl,
    youtubedlv2 
} from '@bochilteam/scraper'

let handler = async (m, { conn, args, isPrems, isOwner }) => {


  let q = '128kbps'
  let v = args[0]


// Kocak
const yt = await youtubedl(v).catch(async () => await  youtubedlv2(v))
const dl_url = await yt.audio[q].download()
  const ttl = await yt.title
const size = await yt.audio[q].fileSizeH
  
 await m.reply(`▢ Tɪᴛᴛʟᴇ: ${ttl}
▢  Sɪᴢᴇ: ${size}

▢ Ｌｏａｄｉｎｇ. . .`)
  await conn.sendMessage(m.chat, { [/^(?:-|--)doc$/i.test(args[1]) || null ? 'document' : 'audio']: { url: dl_url }, fileName: `${me}.mp3`, mimetype: 'audio/mp3' }, { quoted: m })
}


handler.command = /^(getaud)$/i
export default handler
