import fetch from 'node-fetch'
import { FormData, Blob } from 'formdata-node'
import { fileTypeFromBuffer } from 'file-type'

export default async buffer => {
    let { ext, mime } = await fileTypeFromBuffer(buffer)
    let form = new FormData()
    let blob = new Blob([buffer.toArrayBuffer()], { type: mime })
    form.append('file', blob, 'tmp.' + ext)
    let res = await fetch('https://ichikaa.xyz/upload', {
        method: 'post',
        body: form
    })
    if (!res.ok) throw await res.text()
    let img = await res.json()
    return img.result.url
}