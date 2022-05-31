import fetch from 'node-fetch'
import { youtubeSearch } from '@bochilteam/scraper'

let handler = async (m, { conn, text, usedPrefix }) => {
	if (!text) throw 'Input Query'
	let vid = await (await fetch(API('rrul', '/api/yt/yts', { q: text }))).json()
	if (!vid.result.length) throw `Query "${query}" Not Found :/`
	let { url, title, description, image, seconds, timestamp, ago, views } = vid.result[0]
	let ytLink = `https://yt-downloader.akkun3704.repl.co/?url=${url}&filter=audioonly&quality=highestaudio&contenttype=audio/mpeg`
	let capt = `*Title:* ${title}\n*Published:* ${ago}\n*Duration:* ${timestamp}\n*Views:* ${views.toLocaleString()}\n*Url:* ${url}`
	let buttons = [{ buttonText: { displayText: 'Video' }, buttonId: `${usedPrefix}ytv ${url} 360` }]
	let msg = await conn.sendMessage(m.chat, { image: { url: image }, caption: capt, footer: '_Audio on progress..._', buttons }, { quoted: m })
	// if (seconds > 3600) return conn.sendMessage(m.chat, { document: { url: ytLink }, mimetype: 'audio/mpeg', fileName: `${title}.mp3` }, { quoted: m })
	conn.sendMessage(m.chat, { [seconds > 3600 ? 'document' : 'audio']: { url: ytLink }, mimetype: 'audio/mpeg', fileName: `${title}.mp3` }, { quoted: msg })
}
handler.help = handler.alias = ['play']
handler.tags = ['downloader']
handler.command = /^(play)$/i
handler.exp = 0

export default handler
