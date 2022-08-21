function handler(m) {
  
  const kontak = {
	"displayName": 'My owner',
	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:${conn.getName('6283820073017@s.whatsapp.net')}\nitem1.TEL;waid=6283820073017:6283820073017\nitem1.X-ABLabel:Busy.\nURL;My Web: https://hi.rlxfly.my.id\nEMAIL;Email Owner: me@rlxfly.my.id\nORG: NOT A BOT + NO SAVE\nTEL;My number bot;waid=6287845646738:6287845646738\nEND:VCARD`
}

conn.sendMessage(m.chat, { contacts: { contacts: [kontak] }}, { quoted: m })
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler
