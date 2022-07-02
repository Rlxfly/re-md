import axios from 'axios'
import cheerio from 'cheerio'

let handler = async (m, { conn, text }) => {
  if (!text) throw 'Input username!'
  let res = await twitterStalk(text), img = res?.pp_user
  delete res.pp_user
  let txt = Object.keys(res).map((v) => `*${v.capitalize()}:* ${res[v]}`).join`\n`
  await conn.sendFile(m.chat, img, '', txt, m)
}
handler.help = ['twitterstalk']
handler.tags = ['tools']
handler.command = /^(twitter|twt)stalk$/i

export default handler

export async function twitterStalk(user) {
  let res = await axios.get(`https://www.twuko.com/${user}/`)
  let $ = cheerio.load(res.data), obj = {}
  obj.pp_user = $('div[class="relative w-full h-full rounded-full cursor-pointer profile-image"] > img').attr('src')
  obj.name = $('div[class="p-3"] > p[class="text-center text-primary"]').text().trim()
  obj.username = $('div[class="p-3"] > div > span[class="font-bold text-center"]').text().trim()
  obj.followers = $('div[class="mb-4 text-4xl font-bold text-center"]').text()
  $('div[class="flex justify-center"] > div[class="px-4"]').each((idx, el) => {
    let text = $(el).find('div[class="text-xs font-bold text-center text-gray-600 uppercase"]').text()
    obj[text.toLowerCase()] = $(el).find('div[class="text-xl font-bold text-center"]').text()
  })
  obj.description = $('div[class="p-3 border-t border-gray-200"] > p').text().trim().replace(/\n/g, '')
  return obj 
}
