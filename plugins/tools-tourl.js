import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, command, usedPrefix }) => {
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || q.mediaType || ''
	if (!mime) throw `Kirim foto/video yang ingin diubah ke url dengan caption *${usedPrefix}${command}* atau reply medianya`
	let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
	let media = await q.download()
	let link = await (isTele ? uploadImage : uploadFile)(media)
	m.reply(`${conn.user.name}

${link}
${media.length} Byte(s)
${isTele ? '(Tidak Ada Tanggal Kedaluwarsa)' : '(Tidak diketahui)'}`)
}
handler.help = ['tourl']
handler.tags = ['tools']
handler.command = /^(upload|tourl)$/i

export default handler


