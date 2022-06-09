function handler(m) {
  
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)

  let i = global.owner.map(([number]) => number).map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net')
  
  
  this.sendContact(m.chat, data.map(([id, name]) => [id, this.getName(i[0])]), m)
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler

