import gis from 'async-g-i-s'
import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	// text = text.endsWith('SMH') ? text.replace('SMH', '') : text 
	if (!text) throw 'Input Query'
	let res = await gis(text)
	let data = res.filter(v => /jpg|png|jpeg/.test(v.url)).getRandom()
	if (!data?.url) throw `Query "${text}" Not Found :/`
	conn.sendButton(m.chat, `Result From: ${text.capitalize()}`, await shortUrl(data.url), data.url, [['Next', `${usedPrefix + command} ${text}`]], m)
}
handler.help = handler.alias = ['image']
handler.tags = ['general']
handler.command = /^image$/i

export default handler

async function shortUrl(url) {
	return await (await fetch(`https://tinyurl.com/api-create.php?url=${url}`)).text()
}
