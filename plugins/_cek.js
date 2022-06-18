let handler = async ( m ) => {
  m.reply('Hello!')
}

handler.command = /^(cek|tes|a|p)$/i

export default handler
