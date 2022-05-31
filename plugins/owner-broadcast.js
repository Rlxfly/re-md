let handler = async (m, { conn, text }) => {
	let groups = Object.entries(await conn.groupFetchAllParticipating()).filter(([jid, chat]) => !chat?.announce).map(v => v[0]),
		cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m,
		teks = text ? text : cc.text
	await m.reply(`_Mengirim pesan broadcast ke ${groups.length} group_`)
	for (let id of groups) await conn.copyNForward(id, conn.cMod(m.chat, cc, /bc|broadcast/i.test(teks) ? teks : teks + '\n' + readMore() + '*_• Bʀᴏᴀᴅᴄᴀsᴛ Bᴏᴛ_*'), true).catch(_ => _)
	m.reply('Selesai Broadcast All Group')
}
handler.command = /^(broadcast|bc)(group|grup|gc)$/i
handler.owner = true

export default handler

function readMore() {
	return (String.fromCharCode(8206)).repeat(4001)
}
