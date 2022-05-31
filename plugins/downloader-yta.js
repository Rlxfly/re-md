let limit = 50
import fetch from 'node-fetch'
import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'

let handler = async (m, { conn, args, isPrems, isOwner }) => {
  if (args && /(?:https?:\/{2})?(?:w{3}|m|music)?\.?youtu(?:be)?\.(?:com|be)(?:watch\?v=|\/)([^\s&]+)/i.test(args[0])) {
    let res = await fetch(`https://yt-downloader.akkun3704.repl.co/yt?url=${args[0]}`)
    res = await res.json()
    if (!res) res = ''
    let { description, ownerChannelName, viewCount, uploadDate, likes, dislikes } = res.result.videoDetails
    let { thumbnail, audio: _audio, title } = await youtubedl(args[0]).catch(async _ => await youtubedlv2(args[0])).catch(async _ => await youtubedlv3(args[0]))
    await m.reply('_In progress, please wait..._')
    let limitedSize = (isPrems || isOwner ? 99 : limit) * 1024
    let audio, quality, link, lastError, isLimit //,source
    for (let i in _audio) {
      try {
        audio = _audio[i]
        quality = audio.quality
        console.log(audio)
        isLimit = audio.fileSize > limitedSize
        // if (isLimit) return conn.sendMessage(m.chat, { image: { url: thumbnail }, caption: `*Title:* ${title}\n*Link:* ${await shortUrl(`https://yt-downloader.akkun3704.repl.co/?url=${args[0]}&filter=audioonly&quality=highestaudio&contenttype=audio/mpeg`)}\n\n_Filesize too big_` }, { quoted: m })
        link = await audio.download()
        if (link) break
        // if (link) source = await (await fetch(link)).arrayBuffer()
        // if (source instanceof ArrayBuffer) break
      } catch (e) {
        audio = link = null
        lastError = e
        continue
      }
    }
    if (!link) throw 'Error: ' + (lastError || 'Can\'t download audio')
    await conn.sendMessage(m.chat, { [/^(?:-|--)doc$/i.test(args[1]) || isLimit ? 'document' : 'audio']: { url: link }, fileName: `${title}.mp3`, mimetype: 'audio/mpeg' }, { quoted: m }).then(async (msg) => {
      let caption = `*Title:* ${title}\n*Quality:* ${quality}\n*Channel:* ${ownerChannelName || ''}\n*Views:* ${viewCount}\n*Upload Date:* ${uploadDate}${likes ? `\n*Likes:* ${likes}` : ''}${dislikes ? `\n*Dislikes*: ${dislikes}` : ''}${description ? `\n*Description:*\n${description}` : ''}`.trim()
      await conn.sendMessage(m.chat, { image: { url: thumbnail }, caption }, { quoted: msg })
    })
  } else throw 'Invalid URL'
}
handler.help = ['ytmp3']
handler.tags = ['downloader']
handler.alias = ['yta', 'ytmp3']
handler.command = /^yt(a|mp3)$/i
handler.exp = 0

export default handler

async function shortUrl(url) {
  url = encodeURIComponent(url)
  let res = await fetch(`https://is.gd/create.php?format=simple&url=${url}`)
  if (!res.ok) throw false
  return await res.text()
}
