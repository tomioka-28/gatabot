import { createHash } from 'crypto'
let handler = async function (m, { conn, text, usedPrefix }) {
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let user = global.db.data.users[m.sender]
if (user.registered === true) throw `${iig}๐๐ผ ๐๐๐๐ผ๐ ๐๐๐๐๐๐๐๐ผ๐ฟ๐(๐ผ)!!\n๐๐ ๐๐๐๐๐๐ ๐ผ๐๐๐๐ผ๐ ๐๐ ๐๐๐๐๐๐๐๐ ๐๐๐ ๐๐๐๐ ๐พ๐๐๐ผ๐๐ฟ๐\n*${usedPrefix}unreg numero de serie*\n\n๐๐ ๐๐ ๐๐๐พ๐๐๐๐ฟ๐ผ ๐๐ ๐๐๐๐๐๐ ๐ฟ๐ ๐๐๐๐๐ ๐๐๐ ๐๐๐๐ ๐พ๐๐๐ผ๐๐ฟ๐\n*${usedPrefix}myns*`
let name = conn.getName(m.sender)
let age = `${pickRandom(['10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40'])}`
age = parseInt(age)
user.name = name.trim()
user.age = age
user.regTime = + new Date
user.registered = true
let sn = createHash('md5').update(m.sender).digest('hex')
//global.db.data.users[m.sender].money += 1000
//global.db.data.users[m.sender].limit += 15
//global.db.data.users[m.sender].exp += 1500
//global.db.data.users[m.sender].joincount += 5
let caption = `โญโโโ[ *๐๐๐๐๐๐๐พ๐ผ๐ | ๐๐๐๐๐๐* ]โโโโโฌฃ
โ *NOMBRE* 
โ ${name} ${user.registered === true ? 'องององอฆ๊ถอฃอคโแฒแดณแดฎ' : ''}
โโโโโโโโโโโโโโโโโโ
โ *EDAD* 
โ *${age} aรฑos*
โฐโโโโโโโโโโโโโโโโโโโฌฃ`
//let author = global.author
await conn.sendButton(m.chat, caption, `๐๐ ๐๐๐๐๐๐ ๐ฟ๐ ๐๐๐๐๐ ๐๐ ๐๐๐๐๐๐๐ผ ๐๐ ๐พ๐ผ๐๐ ๐๐๐ ๐๐๐๐๐๐ผ ๐ฝ๐๐๐๐ผ๐ ๐๐ ๐๐๐๐๐๐๐๐\n๐๐๐๐๐๐๐\n${usedPrefix}unreg numero de serie\n${wm}`, [['๐ผ๐๐ค๐ง๐ ๐๐จ๐ฉ๐ค๐ฎ ๐๐๐ง๐๐๐๐๐๐๐ค(๐)!! โ', '/profile']], m)
await m.reply(`${sn}`) 

}
handler.help = ['verificar']
handler.tags = ['xp']
handler.command = /^(verify|register|verificar|registrar|verificado|verificada|verificarme)$/i
export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}

/*import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) throw `${iig}๐๐ผ ๐๐๐๐ผ๐ ๐๐๐๐๐๐๐๐ผ๐ฟ๐(๐ผ)!!\n๐๐ ๐๐๐๐๐๐ ๐ผ๐๐๐๐ผ๐ ๐๐ ๐๐๐๐๐๐๐๐ ๐๐๐ ๐๐๐๐ ๐พ๐๐๐ผ๐๐ฟ๐\n*${usedPrefix}unreg numero de serie*\n\n๐๐ ๐๐ ๐๐๐พ๐๐๐๐ฟ๐ผ ๐๐ ๐๐๐๐๐๐ ๐ฟ๐ ๐๐๐๐๐ ๐๐๐ ๐๐๐๐ ๐พ๐๐๐ผ๐๐ฟ๐\n*${usedPrefix}myns*`
  if (!Reg.test(text)) throw `โ?๏ธ ๐๐๐๐๐ผ๐๐ ๐๐๐พ๐๐๐๐๐พ๐๐\n\n โณ๏ธ ๐๐๐  ๐๐ ๐พ๐๐๐ผ๐๐ฟ๐: *${usedPrefix + command} nombre.edad*\n๐๐๐๐๐๐๐๐ : *${usedPrefix + command}* ${name2}.16`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '๐ El nombre no puede esta vacio'
  if (!age) throw '๐ La edad no puede esta vacia'
  if (name.length >= 30) throw '๐ Fua que basado, el nombre es muy largo que quiere un pueste como nombre๐น' 
  age = parseInt(age)
  if (age > 100) throw '๐ด๐ป Pa esta viejos'
  if (age < 5) throw '๐ผ  Basado, los bebes saber escribir.โ๏ธ๐ณ '
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
global.db.data.users[m.sender].money += 800
global.db.data.users[m.sender].limit += 6
global.db.data.users[m.sender].exp += 305
global.db.data.users[m.sender].joincount += 4
  let sn = createHash('md5').update(m.sender).digest('hex')
let caption = `โญโโโ[ *๐๐๐๐๐๐๐พ๐ผ๐ | ๐๐๐๐๐๐* ]โโโโโฌฃ
โ *NOMBRE* 
โ ${name}
โโโโโโโโโโโโโโโโโโ
โ *EDAD* 
โ *${age} aรฑos*
โโโโโโโโโโโโโโโโโโ
โ *BONO* 
โ *$350 XP*
โ *$200 GATACOINS*
โ *$2 DIAMANTES*
โฐโโโโโโโโโโโโโโโโโโโฌฃ`
//let author = global.author
await conn.sendButton(m.chat, caption, `๐๐ ๐๐๐๐๐๐ ๐ฟ๐ ๐๐๐๐๐ ๐๐ ๐๐๐๐๐๐๐ผ ๐๐ ๐พ๐ผ๐๐ ๐๐๐ ๐๐๐๐๐๐ผ ๐ฝ๐๐๐๐ผ๐ ๐๐ ๐๐๐๐๐๐๐๐\n๐๐๐๐๐๐๐\n${usedPrefix}unreg numero de serie\n${wm}`, [['๐ผ๐๐ค๐ง๐ ๐๐จ๐ฉ๐ค๐ฎ ๐๐๐ง๐๐๐๐๐๐๐ค(๐)!! โ', '/profile']], m)
await m.reply(`${sn}`) 
}
handler.help = ['daftar', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp']

handler.command = /^(verify|verificar|registrar|reg(ister)?)$/i

export default handler*/
