let handler = async (m, { conn, usedPrefix: _p }) => {


let buttonMessage= {
'document':{'url': 'http://s.id/0x404' },
'mimetype': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
'fileName': `γ  π―ππππ πΎππππ γ`,
'fileLength': 22222222222222,
'pageCount': 200,
'contextInfo':{
'forwardingScore':200,
'isForwarded':true,
'externalAdReply':{
'mediaUrl': 'http://github.com/Rlxfly/re-md',
'mediaType': 2,
'previewType': 'pdf',
'title': 'Searching Source Code?',
'body': me,
'thumbnail': thumb2,
'sourceUrl': 'https://www.youtube.com/watch?v=qBJ0F9Ecax0'}},
'caption': 'http://github.com/Rlxfly/re-md',
'footer': me,
'buttons':[
{'buttonId': _p + 'menu','buttonText':{'displayText':'α΄α΄Ι΄α΄'},'type':1},
{'buttonId': _p + 'runtime','buttonText':{'displayText':'Κα΄Ι΄α΄Ιͺα΄α΄'},'type':1}
],
'headerType':6}
    await conn.sendMessage(m.chat,buttonMessage, { quoted: m })

}

handler.command = /^(sc)$/i

export default handler
