export async function all(m) {
	if (!m.isGroup) return
	let chats = global.db.data.chats[m.chat]
	if (!chats.expired) return !0
	if (+new Date() > chats.expired) {
		await this.sendMessage(m.chat, { text: 'Byee🖐 bot akan left!!' }).then(async () => {
			await this.groupLeave(m.chat)
			// chats.expired = null
		})
	}
}

export const disabled = true
