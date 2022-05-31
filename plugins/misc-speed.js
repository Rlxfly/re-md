import speedtest from 'speedtest-net'
import { sizeFormatter } from 'human-readable'
const formatSize = sizeFormatter({
	std: 'JEDEC', decimalPlaces: 2, keepTrailingZeroes: false,
	render: (literal, symbol) => `${literal} ${symbol}B/s`
})

export default async function handler(m) {
	await m.reply('_Testing speed..._')
	let speed = speedtest()
	speed.on('data', ({ speeds, server }) => {
		['download', 'upload'].forEach(Reflect.deleteProperty.bind(null, speeds)),
		['lat', 'lon', 'distance', 'distanceMi', 'id'].forEach(Reflect.deleteProperty.bind(null, server))
		speeds = Object.keys(speeds).map(v => `- ${v}: ${formatSize(speeds[v])}`).join('\n')
		server = Object.keys(server).map(v => `- ${v.capitalize()}: ${server[v].isNumber() ? `${server[v]} ms` : server[v]}`).join('\n')
		m.reply(`*SPEED:*\n${speeds.replace(/original/g, '')}\n\n*SERVER:*\n${server}`)
	})
	speed.on('error', (err) => m.reply(String(err)))
}
handler.alias = ['ping', 'speed', 'speedtest']
handler.command = /^ping|speed(test)?$/i
