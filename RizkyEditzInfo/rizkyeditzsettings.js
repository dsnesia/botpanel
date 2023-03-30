const fs = require('fs')
const chalk = require('chalk')

global.domain = "https://panel.dsnesia.my.id" // Isi Domain Lu
global.apikey = 'ptla_5FuUQHSzEypzaMbA4ENYXC6ZDAyZYVfQB6hyygMCzdn' // Isi Apikey Plta Lu
global.capikey = 'ptlc_3TaJMysi0XRtZdhsay8ZdqUqAByEXgww5GHljOXzBPc' // Isi Apikey Pltc Lu
global.creAtor = "6288220195739@s.whatsapp.net" // isi nomor lu
global.owner = ['6288220195739','6285786530730'] // isi nomor lu sama nomor bot lu
global.ownerNumber = ["6288220195739@s.whatsapp.net"] // nomor owner bot
global.nomerOwner = "6288220195739" // nomor owner lagi
global.namabotnya = 'SatirBot-Md' // nama bot lu
global.namaownernya = '' // nama owner
global.packname = ' ||+62🇲🇨\nI`m From Indonesia'
global.author = 'Wa : 0882-2019-5739\n'
global.sessionName = 'session'
global.email = 'darwantow758@gmail.com' // alamat email lu
global.group = 'https://chat.whatsapp.com/EzTmgJdpOCu1sDmRNWLWva' // group bot lu
global.youtube = 'https://youtube.com/@DS-fq1ij' // youtube lu
global.website = 'https://ruby927.blogspot.com/'
global.github = 'https://github.com/dsnesia'
global.nomorowner = 'https://wa.me/6288220195739'
global.region = 'I`m From Indonesia'
global.prefa = ['','!','.','#','-','•']
global.qris = fs.readFileSync(`./qris.jpeg`)
global.krmd = 
{
success: '```Success✅```',
admin: '```Fitur Khusus Admin Group!!!```',
botAdmin: '```Bot Harus Menjadi Admin Terlebih Dahulu!!!```',
owner: '```Fitur Khusus Owner!!!```',
group: '```Fitur Digunakan Hanya Untuk Group!!!```',
private: '```Fitur Digunakan Hanya Untuk Private Chat!!!```',
bot: '```Fitur Khusus Pengguna Nomor Bot!!!```',
error: '```Mungkin Lagi Error Kak Harap Lapor Bang Rizky         Biar Langsung Di Benerin🙏```',
wait: '```Waittt...```'
}

global.thumb = fs.readFileSync('./RizkyEditz/image/thumb.jpg')
global.imagekir = fs.readFileSync('./RizkyEditz/image/rizky.jpg')
global.videokir = fs.readFileSync('./RizkyEditz/image/rizky.mp4')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})