/*
import fetch from 'node-fetch'
import { Sticker } from 'wa-sticker-formatter'

export async function before(m, { match }) {
	let isCmd = (match[0] || '')[0], isChat = /net/.test(m.chat)
	/*
	if (/groupInvite/.test(m.mtype) && isChat) {
		let msg = m.message.groupInviteMessage
		await this.groupAcceptInviteV4(m.chat, msg)
	}
	*/
	/*
	if (/62895199754413/.test(this?.user?.jid)) {
		setInterval(async () => {
			
		}, 30 * 1000)
	}
	
	if (!isCmd && /image/.test(m.mtype) && isChat) {
		let sticker = await createSticker(await m.download())
		this.sendMessage(m.chat, { sticker }, { quoted: m })
	} else if (!isCmd && /video/.test(m.mtype) && isChat) {
		let sticker = await mp4ToWebp(await m.download())
		this.sendMessage(m.chat, { sticker }, { quoted: m })
	}
}

/* Function *//*
async function createSticker(img) {
	return (new Sticker(img, { type: 'full' })).toBuffer()
}

async function mp4ToWebp(file) {
	let getBase64 = file.toString('base64')
	const Format = {
		file: `data:video/mp4;base64,${getBase64}`,
		processOptions: {
			crop: false,
			startTime: '00:00:00.0',
			endTime: '00:00:06.0',
			loop: 0
		},
		stickerMetadata: {
			pack: '‎',
			author: '‎'
		},
		sessionInfo: {
			WA_VERSION: '2.2106.5',
			PAGE_UA: 'WhatsApp/2.2037.6 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36',
			WA_AUTOMATE_VERSION: '3.6.10 UPDATE AVAILABLE: 3.6.11',
			BROWSER_VERSION: 'HeadlessChrome/88.0.4324.190',
			OS: 'Windows Server 2016',
			START_TS: 1614310326309,
			NUM: '6247',
			LAUNCH_TIME_MS: 7934,
			PHONE_VERSION: '2.20.205.16'
		},
		config: {
			sessionId: 'session',
			headless: true,
			qrTimeout: 20,
			authTimeout: 0,
			cacheEnabled: false,
			useChrome: true,
			killProcessOnBrowserClose: true,
			throwErrorOnTosBlock: false,
			chromiumArgs: [
				'--no-sandbox',
				'--disable-setuid-sandbox',
				'--aggressive-cache-discard',
				'--disable-cache',
				'--disable-application-cache',
				'--disable-offline-load-stale-cache',
				'--disk-cache-size=0'
			],
			executablePath: 'C:\\\\Program Files (x86)\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe',
			skipBrokenMethodsCheck: true,
			stickerServerEndpoint: true
		 }
	}
	let res = await fetch('https://sticker-api.openwa.dev/convertMp4BufferToWebpDataUrl', {
		method: 'post',
		headers: {
			Accept: 'application/json, text/plain, /',
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify(Format)
	})
	return Buffer.from((await res.text()).split(';base64,')[1], 'base64')
}
*/