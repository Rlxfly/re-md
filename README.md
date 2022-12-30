# SIMPLE MD BOT

### Thanks To: 
**All member of [`WhatsAppCode`](https://tinyurl.com/2c7k5wtl) team**

#### Special Thanks to
[![Ryn](https://github.com/Rainprjkt.png?size=100)](https://github.com/Rainprjkt)
[![Hijer bilek](https://github.com/Hyzerr.png?size=100)](https://github.com/Hyzerr)
[![Rlxfly](https://github.com/Rlxfly.png?size=100)](https://github.com/Rlxfly)
[![Arp](https://github.com/Akkun3704.png?size=100)](https://github.com/Akkun3704)
[![Lua](https://github.com/xxirfanx.png?size=100)](https://github.com/xxirfanx)
[![Dolpin bilek](https://github.com/Vynn-SOLO.png?size=100)](https://github.com/Vynn-SOLO)

> ` For help me create/fix this bot `

> Open member for discussion group [`Come here`](https://chat.whatsapp.com/J26yYsYdxLBJdbKdDrddEv)
## `READ README FIRST BEFORE USE THIS BOT!`

--------
# 📑 List Of This Readme

| Name | LINK |
|--------|--------|
| **TITTLE** |[here](https://github.com/Rlxfly/re-md/#simple-md-bot) |
| **ESM BOT** | [here](https://github.com/Rlxfly/re-md/#note-this-bot-is-esm-bot) |
| **PRIVIEW** |[here](https://github.com/Rlxfly/re-md/#preview-bot) |
| **NOTE** |[here](https://github.com/Rlxfly/re-md/#-english-) |
| **TERMUX INSTALATION** |[here](https://github.com/Rlxfly/re-md/#for-termux-user) |
| **TERMUX W/ UBUNTU** |[here](https://github.com/Rlxfly/re-md/#install-on-termux-with-ubuntu) |
| **WINDOWS INSTALATION** |[here](https://github.com/Rlxfly/re-md/#for-windowsvpsrdp-user) | 
| **ARGUMENTS OF RUNNING BOT** |[here](https://github.com/Rlxfly/re-md/#arguments-node----options-session-name) |
| **FAQ** |[here](https://github.com/Rlxfly/re-md/#faq) | 
| **CONTRIBUTE!!** |[here](https://github.com/Rlxfly/re-md/#want-to-contribute) |
| **THANKS TO** |[here](https://github.com/Rlxfly/re-md/#thanks-to) | 

--------
## NOTE: THIS BOT IS [ESM](https://nodejs.org/api/esm.html) BOT
> I opened discussiond for asking any problem or new feature, if i agree with that i will invite you in my repo/pull request your idea in this source code :)
## BASE ORI BY [BochilGaming](https://github.com/BochilGaming/games-wabot/tree/multi-device)
--------
### Preview bot

- [x] Welcome   *_Same as welcome in repo bot-tzy_
- [x] Menu <details><summary>Screenshot</summary><img src="https://telegra.ph/file/abe9435cec00f6afb81d3.jpg"></details>
- [x] Button Doccumment (_Still in experiment state_) <details><summary>Screenshot</summary><img src="https://telegra.ph/file/a2d24c71e7d0d67dcd05e.jpg"></details>



## _「 ENGLISH 」_
> You can also recode this bot, it's easy for newbie in code/whatsapp bot, `If you have problem chat me` in [this](http://wa.me/6283820073017) or [this one](http://wa.me/6287827659529) `NOTE!` if you chat to me impolitely, then I won't answer it, get used to greeting first :)

## _「 INDONESIA 」_
> Kamu juga bisa membuat ulang bot ini, ini sangat mudah untuk pemula dalam programing/bot whatsapp `Jika kamu punya masalah chat sy` ke [ini](http://wa.me/6283820073017) atau [yang ini](http://wa.me/6287827659529) `CATATAN!` jika kamu chat ke saya dengan tidak sopan 'p, woi', maka saya tidak akan menjawabnya, biasakan sapa terlebih dahulu :)
#### Deploy to Heroku
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/Rlxfly/re-md)
-----------
### Deploy to Replit
[![Run on Repl.it](https://repl.it/badge/github/Rlxfly/re-md)](https://repl.it/github/Rlxfly/re-md)

#### Heroku Buildpack
| BuildPack | LINK |
|--------|--------|
| **FFMPEG** |[here](https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest) |
| **IMAGEMAGICK** | [here](https://github.com/bogini/heroku-buildpack-graphicsmagick) |

### FOR TERMUX USER
1. Type mentioned below given commands one by one in Termux.
```sh
$ pkg upgrade && pkg update
$ pkg install git -y
$ pkg install nodejs -y
$ pkg install ffmpeg -y
$ pkg install imagemagick -y
$ git clone https://github.com/Rlxfly/re-md
$ cd re-md
$ npm i 
```
If error try using yarn instead of npm, see [here](https://github.com/BochilGaming/games-wabot/tree/multi-device#if-npm-install-failed--try--using-yarn-instead-of-npm)
```sh
$ node .
```
2. Wait for bot starting...
3. Scan QR code from 2nd device. (Go to whatsapp > Linked Devices > Join `Multi Device Beta` > Click on `link device`)
4. Now your bot is ready to rock n roll.

#### If npm install failed, try using yarn instead of npm
```sh
$ pkg install yarn -y
$ yarn install
```
---------

## INSTALL ON TERMUX WITH UBUNTU

[ INSTALLING UBUNTU ]

```bash
apt update && apt full-upgrade
apt install wget curl git proot-distro
proot-distro install ubuntu
echo "proot-distro login ubuntu" > $PREFIX/bin/ubuntu
ubuntu
```
---------

[ INSTALLING REQUIRED PACKAGES ]

```bash
ubuntu
apt update && apt full-upgrade
apt install wget curl git ffmpeg imagemagick build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev dbus-x11 ffmpeg2theora ffmpegfs ffmpegthumbnailer ffmpegthumbnailer-dbg ffmpegthumbs libavcodec-dev libavcodec-extra libavcodec-extra58 libavdevice-dev libavdevice58 libavfilter-dev libavfilter-extra libavfilter-extra7 libavformat-dev libavformat58 libavifile-0.7-bin libavifile-0.7-common libavifile-0.7c2 libavresample-dev libavresample4 libavutil-dev libavutil56 libpostproc-dev libpostproc55 graphicsmagick graphicsmagick-dbg graphicsmagick-imagemagick-compat graphicsmagick-libmagick-dev-compat groff imagemagick-6.q16hdri imagemagick-common libchart-gnuplot-perl libgraphics-magick-perl libgraphicsmagick++-q16-12 libgraphicsmagick++1-dev
```

---------

[ INSTALLING NODEJS ]

```bash
ubuntu
curl -fsSL https://deb.nodesource.com/setup_current.x | sudo -E bash -
apt install -y nodejs gcc g++ make
git clone https://github.com/Rlxfly/re-md
cd re-md
npm install
npm update
```

---------

## FOR WINDOWS/VPS/RDP USER

* Download And Install Git [`Click Here`](https://git-scm.com/downloads)
* Download And Install NodeJS [`Click Here`](https://nodejs.org/en/download)
* Download And Install FFmpeg [`Click Here`](https://ffmpeg.org/download.html) (**Don't Forget Add FFmpeg to PATH enviroment variables**)
* Download And Install ImageMagick [`Click Here`](https://imagemagick.org/script/download.php)

```bash
git clone https://github.com/Rlxfly/re-md
cd re-md
npm install
npm update
```

---------

## Run

```bash
node .
```

---------

## Arguments `node . [--options] [<session name>]`

### `--self`

Activate self mode (Ignores other)

### `--pconly`

If that chat not from private bot, bot will ignore

### `--gconly`

If that chat not from group, bot will ignore

### `--swonly`

If that chat not from status, bot will ignore

### `--prefix <prefixes>`

* `prefixes` are seperated by each character
Set prefix

### `--server`

Used for [heroku](https://heroku.com/) or scan through website

### `--restrict`

Enables restricted plugins (which can lead your number to be **banned** if used too often)

* Group Administration `add, kick`

### `--img`

Enable image inspector through terminal

### `--autoread`

If enabled, all incoming messages will be marked as read

### `--autocleartmp`

If enabled, **tmp* folder contain files will be auto delete

### `--nyimak`

No bot, just print received messages and add users to database

### `--test`

**Development** Testing Mode

### `--db`

pass mongodb url or cloud url to connect to database, by the default it will connect to database.json

---------

## FAQ
- How to send button image?
```js
// Syntax
conn.sendButton(
      jid, // jid of the user to send the message to
      text, // text to send
      foooter, // footer to send
      buffer, // buffer to send (optional), if you want to send button image, location, etc
      buttons, // buttons to send, example [['text1', 'id1'], ['text2', 'id2']]
      quoted, // quoted message to send (optional)
      options // options to send, example { asLocation: true }
)

// example 
conn.sendButton(m.chat, 'Hello world!', 'Re-', null, [
      ['Hello', 'hello'], ['Bye', 'bye']
])
// example button location
conn.sendButton(m.chat, 'Hello world!', 'Re-', 'https://github.com/Rlxfly', 
      [['Hello', 'hello'], ['Bye', 'bye']], 
      null, { asLocation: true }
)
```

- Why my plugins not working in this multi-device?
      
> Please cek syntax error on your plugins. and maybe your script still using CJS
> This multi-device script use ESM and CJS [(legacy code)](https://github.com/BochilGaming/games-wabot/tree/main) not support yet. Learn more about [ESM](https://nodejs.org/api/esm.html)

- How to delete session?

> You can delete folder `sessions` or run command ```rm -rf sessions```

- Why i can't scan qr code?

> if your error like this ```(node:7016) UnhandledPromiseRejectionWarning: TypeError [ERR_INVALID_ARG_TYPE]: The "key" argument must be of type string or an instance of Buffer, TypedArray, DataView, or KeyObject. Received undefined``` you can use [multi-device branch](https://github.com/BochilGaming/games-wabot/tree/multi-device)

- How to change owner number?

> You can change in `config.js`, on global.owner. make sure you use correct syntax.
```js
global.owner = [
  ['6288888888888', 'Name', true]
]
```
> First argument on array is number like `6288888888888`, second argument is name like `Name` (if this argument pass, if using `owner` command, this number will send as owner), third argument is developer like `true` (if this argument pass, if there have plugins error (not syntax error) the error will send to developer)
---------

### want to contribute?
1. fork this repository
2. Change/edit/create what you want. for example you can add features, fix bug, etc
3. **test** before making a pull req!!
4. make a pull req!
5. if your pull req is already in **acc/merge**, you can delete your branch or you can create pull req again :)

---------



