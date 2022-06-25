let handler = async (m, { conn, text }) => {
  if (!text) throw `uhm.. teksnya mana?`
  try {
    await conn.setStatus(text)
    m.reply('Berhasil!')
  } catch (e) {
    console.log(e)
    throw `Eror`
  }
}
handler.help = ['setbio <teks>']
handler.tags = ['owner']
handler.command = /^set(bio|status)$/i
handler.owner = true

export default handler
