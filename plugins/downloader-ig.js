import fetch from 'node-fetch'

let handler = async (m, { conn, args }) => {
	if (args[0] && /(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(args[0])) { /* IG Post || Reel || TV */
		let res = await (await fetch('https://expressjs-akkun.up.railway.app/instagram/post?url=' + args[0])).json()
		if (!res.success) throw res.msg
		await m.reply('_In progress, please wait..._')
		let data = res.result
		for (let x = 0; x < data.links.length; x++) {
			let caption = x == 0 ? data.caption : ''
			await conn.sendMessage(m.chat, { [data.links[x].type]: { url: data.links[x].url }, caption }, { quoted: m })
		}
	} else if (args[0] && /\/s\/([^\s&]+)/.test(args[0])) { /* IG Highlights */
		let [, _, mediaId] = /https:\/\/www\.instagram\.com\/s\/(.*?)\?story_media_id=([\w-]+)/g.exec(args[0])
		let url = await (await fetch(args[0])).url
		let { user, highlight } = await (await fetch(url + '?__a=1')).json()
		let res = await (await fetch('http://expressjs-akkun.up.railway.app/instagram/highlight?user=' + user.username)).json()
		if (!res.success) throw res.msg
		// await m.reply('_In progress, please wait..._')
		let data = res.result.data.filter(v => v['highlights_id'] == highlight.id)[0]
		let filterHighlights = data.highlights.filter(v => v['media_id'].includes(mediaId))
		console.log(filterHighlights)
	} else if (args[0] && /\/stories\/([^\s&]+)/.test(args[0])) { /* IG Story */
		let [, user, id] = (new URL(args[0])).pathname.split`/`.filter(v => v)
		let res = await (await fetch('http://expressjs-akkun.up.railway.app/instagram/story?user=' + user)).json()
		if (!res.success) throw res.msg
		await m.reply('_In progress, please wait..._')
		let data = res.result.stories.filter(v => v.id.includes(id))[0]
		// console.log(user, id, data)
		await conn.sendMessage(m.chat, { [data.type]: { url: data.url }, caption: data.caption || '' }, { quoted: m })
	} else throw 'Invalid URL'
}
handler.help = ['instagram']
handler.tags = ['downloader']
handler.alias = ['ig', 'igdl', 'instagram', 'instagramdl']
handler.command = /^(ig(dl)?|instagram(dl)?)$/i

export default handler
