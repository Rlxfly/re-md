import fetch from 'node-fetch'

let handler = async (m, { conn, args }) => {
	let regex = /(?:https?|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
	if (!args[0]) throw 'Ex: https://github.com/Nurutomo/wabot-aq' 
	if (!regex.test(args[0])) throw 'Invalid URL'
	let [, user, repo] = args[0].match(regex) || []
	repo = repo.replace(/.git$/, '')
	let url = `https://api.github.com/repos/${user}/${repo}/zipball`
	let res = await fetch(url, { method: 'head' })
	if (res.status !== 200) throw res.statusText
	let fileName = res.headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
	let mimetype = res.headers.get('content-type')
	await m.reply('_In progress, please wait..._')
	conn.sendMessage(m.chat, { document: { url }, fileName, mimetype }, { quoted: m })
}
handler.help = handler.alias = ['gitclone']
handler.tags = ['downloader']
handler.command = /^(gitclone)$/

export default handler
