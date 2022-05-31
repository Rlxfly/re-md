import fetch from 'node-fetch'
let list = [
	'Twilight Sparkle', 'Fluttershy', 'Rarity', 'Rainbow Dash', 'Pinkie Pie', 'Applejack', 'SpongeBob SquarePants',
	'Kyu Sugardust', 'Rise Kujikawa', 'Sunset Shimmer', 'Adagio Dazzle', 'Aria Blaze', 'Sonata Dusk',
	'Miss Pauling', 'Scout', 'Soldier', 'Demoman', 'Heavy', 'Engineer', 'Medic', 'Sniper', 'Spy'
]

let handler = async (m, { conn, args, usedPrefix, command }) => {
	let [chara, text] = args.join` `.split`|`
	if (!(chara && text)) throw `Ex: ${usedPrefix + command} fluttershy|hello world`
	let res = await tts(chara, text)
	await conn.sendMessage(m.chat, { audio: { url: res }, ptt: true, mimetype: 'audio/mpeg' }, { quoted: m })
}
handler.help = ['tts']
handler.tags = ['misc']
handler.command = /^(tts)$/i

export default handler

async function tts(chara, text) {
	let character = list.findIndex(v => v.toLowerCase() == chara.toLowerCase())
	if (character == -1) throw `Character "${chara}" not found!\n\nList Characters:\n\n${list.join('\n')}`
	character = list[character]
	// if (text?.length < 5) throw 'Not enough text, minimum 5 characters' 
	let res = await fetch('https://api.15.ai/app/getAudioFile5', {
		method: 'post',
		headers: {
			'content-type': 'application/json' 
		},
		body: JSON.stringify({ text, character, emotion: 'Contextual' })
	})
	if (res.status !== 200) throw res.statusText
	let json = await res.json()
	return `https://cdn.15.ai/audio/${json.wavNames[0]}`
}
