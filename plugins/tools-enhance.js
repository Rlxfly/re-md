import deepai from 'deepai'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'
deepai.setApiKey('990cd8d3-5d3c-4b66-a30f-7fbb73c71049')

let handler = async (m, { conn, usedPrefix, command }) => {
	let msg = `Send/reply an image with command ${usedPrefix + command}`
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || q.mediaType || ''
	if (/image/g.test(mime)) {
		let resp, img = await q.download(), file = await webp2png(img)
		if (/hd|enhance/.test(command)) resp = await deepai.callStandardApi('waifu2x', { image: file })
		else if (/colorize/.test(command)) resp = await deepai.callStandardApi('colorizer', { image: file })
		conn.sendMessage(m.chat, { image: { url: resp.output_url }}, { quoted: m })
	} else throw msg
}
handler.help = ['enhance']
handler.tags = ['tools']
handler.command = /^(hd|enhance|colorize)$/i

export default handler
