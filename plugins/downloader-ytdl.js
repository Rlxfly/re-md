import { 
    youtubedl,
    youtubedlv2 
} from '@bochilteam/scraper'

import fetch from 'node-fetch'


let handler = async (m, { conn, args, isPrems, isOwner }) => {
  
    if (!args[0]) return m.reply('Link?')
  


//  const ytv = await youtubedl(a).catch(async () => await  youtubedlv2(a))
// const ytv_dl = await ytv.video[q].download()

  let pp = await( await conn.profilePictureUrl(conn.user.jid, 'image').catch(() => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'))
  //or global.thumb
  let namae = conn.getName(m.sender)
  
const trol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 999999999999,
                            itemCoun : 404,
                            surface : 404,
                            message: `© ${conn.user.name}\n`,
                            orderTitle: 'B',
                            thumbnail: await (await fetch(pp)).buffer(), 
                            sellerJid: '0@s.whatsapp.net'
          
                          }
                        }
                      }
  
const sections = [
	{
	title: "Select Type Media Here !",
	rows: [
	    {title: "Audio", rowId: `-getaud ${args[0]} audio`}
	]
    },
    {
	title: "Video",
	rows: [
	    {title: "1080p", rowId: `-getvid ${args[0]} 1080`},
{title: "720p", rowId: `-getvid ${args[0]} 720`},
{title: "480p", rowId: `-getvid ${args[0]} 480`},
{title: "360p", rowId: `-getvid ${args[0]} 360`}

	]
    },
   
]

const listMessage = {
  text: `›  ᴩʟᴇᴀꜱᴇ ꜱᴇʟᴇᴄᴛ yᴏᴜʀ ᴍᴇᴅɪᴀ ᴛyᴩᴇ...`,
  footer: me,
  title: "『 - - - - - 𝚈𝚘𝚞𝚝𝚞𝚋𝚎 𝙳𝚘𝚠𝚗𝚕𝚘𝚊𝚍𝚎𝚛 - - - - - 』",
  buttonText: "Click Here !",
  sections
}

return conn.sendMessage(m.chat, listMessage, { quoted: trol  })
}


handler.help = ['yt', 'ytv', 'yta', 'ytmp3', 'ytmp4']
handler.tags = ['downloader']
handler.alias = ['yt', 'ytv', 'yta', 'ytmp3', 'ytmp4']
handler.command = /^yt(v|a|mp4|mp3)?$/i
handler.exp = 3

export default handler
