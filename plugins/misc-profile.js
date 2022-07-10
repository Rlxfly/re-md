import PhoneNumber from 'awesome-phonenumber'
import moment from 'moment-timezone'

let handler = async (m, { conn, usedPrefix }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  var { status, setAt } = await conn.fetchStatus(who).catch(() => {
          return {
            status: "",
            setAt: "",
          };
        });
   let pp
  try {
    pp = await conn.profilePictureUrl(who, "image")
  } catch (e) {
    pp = "https://telegra.ph/file/e47d9ec693e5288ad9382.jpg"
  } finally {
    let username = conn.getName(who)
    let str = `
• Name: ${username}, \n• Tag: @${who.replace(/@.+/, '')}, ${status ? '\n• Bio: ' + status : ''}, \n• Set At Bio: ${(setAt && moment(setAt).format("DD MMMM YYYY")) || "Unknown"}, \n• Number: ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')},\n• Link: https://wa.me/${who.split`@`[0]}`.trim()

    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'pp.jpeg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['profile [@user]']
handler.tags = ['tools']
handler.command = /^(profile)$/i
handler.group = true

export default handler
