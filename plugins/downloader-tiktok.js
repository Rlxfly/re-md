import { tiktokdl, tiktokdlv2 } from '@bochilteam/scraper'
import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command }) => {
    await m.reply('Loading...')
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
    const { author: { nickname }, video, description } = await tiktokdl(args[0]).catch(async _ => await tiktokdlv2(args[0]))
    const url = video.no_watermark_raw || video.no_watermark || video.no_watermark_hd || video.with_watermark 
    if (!url) throw 'Can\'t download video!'

    conn.sendFile(m.chat, url, 'tiktok.mp4', `
${l} 🔗 ${r}*Url:* ${await shorten(url)}\n${l} 🔭 ${r} *Author:* ${nickname}${description ? `\n${l} 📝 ${r} *Description:* ${description}` : ''}
`.trim(), m)
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(tt|tiktok)(dl|nowm)?$/i

export default handler

async function shorten(url) {
	let res = await fetch(`https://tinyurl.com/api-create.php?url=${url}`)
	return await res.text()
}
