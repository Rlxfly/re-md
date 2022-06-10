import { instagramStalk } from '@bochilteam/scraper'

let handler= async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Example use ${usedPrefix}${command} <username>`
    const {
        username,
      avatar,
        name,
        description,
        followersH,
        followingH,
        postsH,
    } = await instagramStalk(args[0])

  let data = `
${username} » 「 ${name} 」

${followersH}  Fᴏʟʟᴏᴡᴇʀꜱ
${followingH}  Fᴏʟʟᴏᴡɪɴɢ
${postsH} Pᴏꜱᴛ
Bɪᴏ: ${description}
`.trim()

  let pp = await( await conn.getFile(avatar)).data
  
  conn.sendHydrated(m.chat, '「  𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢 𝙎𝙩𝙖𝙡𝙠 」' , data, pp, `https://instagram.com/${username.replace(/^@/, '')}`, 'Link Profile', '0', 'Nothing', [

      [null],

      [null],

      [null, null]

    ], null,  { asLocation: true })
}

handler.help = ['igstalk'].map(v => v + ' <username>')
handler.tags = ['tools']

handler.command = /^(igstalk)$/i

export default handler

//Kalo mau ambil start/follow dlu :v
