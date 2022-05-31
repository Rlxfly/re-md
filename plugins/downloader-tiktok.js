import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix }) => {
	if (!text) throw 'Input URL' 
	if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(text)) throw 'Invalid URL'
	let url = (await fetch(text)).url
	let res = await (await fetch(`https://api2.musical.ly/aweme/v1/aweme/detail/?aweme_id=${url.split('?')[0].split('/')[5]}`)).json()
	let data = res.aweme_detail.video.play_addr.url_list
	if (!data.length) throw 'Can\'t download video!'
	let meta = await getInfo(url).catch(_ => {})
	await m.reply('_In progress, please wait..._')
	let buttons = [{ buttonText: { displayText: 'Audio' }, buttonId: `${usedPrefix}tomp3` }]
	conn.sendMessage(m.chat, { video: { url: data[data.length - 1] }, caption: meta?.description || null, footer: await shortUrl(data[data.length - 1]), buttons }, { quoted: m })
	// conn.sendMessage(m.chat, { video : { url: res.link }, caption: description }, { quoted: m })
}
handler.help = ['tiktok']
handler.tags = ['downloader']
handler.alias = ['tiktok', 'tikdl', 'tiktokdl', 'tiktoknowm']
handler.command = /^(tt|tiktok)(dl|nowm)?$/i

export default handler

async function getInfo(url) {
	// url = (await fetch(url)).url
	let id = url.split('?')[0].split('/')
	let res = await (await fetch(`https://www.tiktok.com/node/share/video/${id[3]}/${id[5]}/`)).json()
	return res?.seoProps?.metaParams
}

async function shortUrl(url) {
	return await (await fetch(`https://tinyurl.com/api-create.php?url=${url}`)).text()
}
