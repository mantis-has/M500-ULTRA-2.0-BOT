let handler = async (m, { conn, args }) => {  
  let userId = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender  
  let userData = global.db.data.users[userId] || {};  
  let exp = userData.exp || 0;  
  let coin = userData.coin || 0;  
  let level = userData.level || 0;  
  let role = userData.role || 'Sin Rango';  

  let name = await conn.getName(userId);  
  let _uptime = process.uptime() * 1000;  
  let uptime = clockString(_uptime);  
  let totalreg = Object.keys(global.db.data.users).length;  
  let totalCommands = Object.values(global.plugins).filter((v) => v.help && v.tags).length;  

  let images = [
    'https://qu.ax/pJCKB.jpg',
    'https://qu.ax/pJCKB.jpg',
    'https://qu.ax/ymjOj.jpg',
    'https://qu.ax/ymjOj.jpg'
  ]
  let imgUrl = images[Math.floor(Math.random() * images.length)]  

  let txt = `
┏━━━━━━━━━━━━━━━┓
┃ 𝐌500 𝐔𝐋𝐓𝐑𝐀 𝐁𝐎𝐓     
┗━━━━━━━━━━━━━━━┛

¡𝐇𝐨𝐥𝐚! ${name} 𝐒𝐨𝐲 𝐌500-𝐔𝐥𝐭𝐫𝐚-𝐁𝐨𝐭 ${(conn.user.jid == global.conn.user.jid ? '💎 `OficialBot`' : '💎 `(Sub-Bot`')}

╔━━ INFO-BOT ━━━━╗
┃Creador: Félix Manuel 
┃Tiempo activo: ${uptime}
┃Comandos: ${totalCommands}
┃Registros: ${totalreg}
╚━━━━━━━━━━━━━━━╝

╔━━ INFO-USER ━━━╗
┃Exp: ${exp}
┃Diamantes: ${coin}
┃Nivel: ${level}
┃Rango: ${role}
╚━━━━━━━━━━━━━━━╝
> Conéctate Como Subbot usando #code o #qr y luego los pasos de la vinculación

✰ 𝗟𝗜𝗦𝗧𝗔 𝗗𝗘 𝗖𝗢𝗠𝗔𝗡𝗗𝗢𝗦 ✰


╭─⬣「 ✰𝐈𝐧𝐟𝐨✰ 」⬣
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #botreglas
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #comprarbot
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #uptime
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #menu
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #estado
╰─⬣

╭─⬣「 ✰𝐑𝐏𝐆✰ 」⬣
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #minar
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #depositar
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #daily
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #bal
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #buy
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #buyall
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #rob
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #rob2
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #robar
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #robarxp
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #soccer
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #rcjugador
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #rgjugador
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #vtjugador
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #w
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #retirar
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #tranferir
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #lb
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #levelup
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #lvl
╰─⬣

╭─⬣「 ✰𝐁𝐮𝐬𝐜𝐚𝐝𝐨𝐫𝐞𝐬✰ 」⬣
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #gitthubsearch 
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #google
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #imagen
╰─⬣

╭─⬣「 ✰𝐃𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐬✰ 」⬣
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #fb
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #play
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #playvid
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #ytmp3doc
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #ytmp4doc
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #ytmp4
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #ytmp3
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #tiktok
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #ig
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #twiter 
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #spotify
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #gitclone
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #mediafire
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #apk
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #apkmod
╰─⬣

╭─⬣「 ✰𝐆𝐫𝐮𝐩𝐨𝐬✰ 」⬣
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #group abrir 
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #group cerrar 
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #delete
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #demote 
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #promote 
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #encuesta
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #rentar
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #kick
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #kickall
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #tag
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #invite
╰─⬣

╭─⬣「 ✰𝐑𝐞𝐠𝐢𝐬𝐭𝐫𝐨𝐬✰ 」⬣
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #reg
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #unreg
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #profile
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #perfil
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #usuarios
╰─⬣

╭─⬣「 ✰𝐖𝐚𝐢𝐟𝐮✰ 」⬣
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #rollwaifu
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #robarpersonaje
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #waifu
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #rw
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #claim
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #carrw
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #guardar
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #confirmar
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #character
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #roll
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #obtenidos 
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #confirmar 
╰─⬣

╭─⬣「 ✰✰ 」⬣
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #abrazar
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #besar
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #dormir
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #kill
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #agarrar
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #acariciar
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #acertijo
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #ahorcado
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #pregunta
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #reto
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #bot
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #triste
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #consejo
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #dance
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #nombreninja
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #love
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #piropo
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #apostar
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #manco
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #gay
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #rata
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #meme
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #enamorada 
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #agarrar
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #sonrojarse
╰─⬣

╭─⬣「 ✰𝐒𝐢𝐬𝐭𝐞𝐦𝐚✰ 」⬣
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #repeat
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #repite
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #copiame
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #dalle2
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #artista
╰─⬣

╭─⬣「 ✰𝐈𝐧𝐟𝐨✰ 」⬣
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #code
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #qr
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #bots
╰─⬣

╭─⬣「 ✰𝐈𝐧𝐟𝐨✰ 」⬣
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #s
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #qc
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #brat
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #toimg
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #tovideo
╰─⬣

╭─⬣「 ✰𝐂𝐨𝐧𝐟𝐢𝐠𝐮𝐫𝐚𝐜𝐢𝐨́𝐧✰ 」⬣
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #on
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #off
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #enable
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #disable
╰─⬣

╭─⬣「 ✰𝐀-𝐈✰ 」⬣
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #toanime
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #tts
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #inspect
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #inspeccionar
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #hd
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #seguircanal
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #nuevafotochannel
╰─⬣

╭─⬣「 ✰Info-2✰ 」⬣
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #owner
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #creador
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #p
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #links
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #reportar 
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #report
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #ping
╰─⬣

╭─⬣「 ✰𝐂𝐫𝐞𝐚𝐝𝐨𝐫✰ 」⬣
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #addprem
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #addcoins
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #addcmd
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #addowner 
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #addsoporte
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #menusoporte
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #soporteinfo
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #soportekick
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #delprem
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #delowner
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #delsoporte 
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #copia
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #resetpersonaje
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #update
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #resetuser
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #autoadmin
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #join
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #banuser
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #banchat
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #unbanuser
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #unbanchat
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #block
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #unblock
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #lisblock
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #ip
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #prefix
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #ss
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #get
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #reiniciar
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #dsowner
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #ds
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #bc
│⁖ฺ۟̇࣪·֗٬̤⃟💎 #broadcast
╰─⬣

> © Desarrollado por Félix Manuel.
`.trim();

  let imgBuffer = await fetch(imgUrl).then(res => res.buffer());  

  await conn.sendMessage(m.chat, {   
    text: txt,  
    image: imgBuffer,  
    contextInfo: {  
      mentionedJid: [m.sender, userId],  
      isForwarded: true,  
      forwardedNewsletterMessageInfo: {  
        newsletterJid: '120363418804796632@newsletter',  
        newsletterName: '🩵̶۫̄͟Ⓜ︎𓏲𝐌500𓍲̈͜𝗨̴ᥣ̥𝗍̈rᥲ̄☦︎𝐁ᴏ𝐭⋆͙̈么͟͞──',  
        serverMessageId: -1,  
      },  
      forwardingScore: 999,  
      externalAdReply: {  
        title: 'M500 ULTRA BOT',  
        body: 'Powered by Félix',
        thumbnailUrl: imgUrl,  
        sourceUrl: redes,  
        mediaType: 1,  
        showAdAttribution: true,  
        renderLargerThumbnail: true,  
      },  
    },  
  }, { quoted: m });  
}  

handler.help = ['menu'];  
handler.tags = ['main'];  
handler.command = ['menu', 'menú', 'help', 'allmenú', 'allmenu', 'menucompleto'];

export default handler;  

function clockString(ms) {  
  let seconds = Math.floor((ms / 1000) % 60);  
  let minutes = Math.floor((ms / (1000 * 60)) % 60);  
  let hours = Math.floor((ms / (1000 * 60 * 60)) % 24);  
  return `${hours}H ${minutes}M ${seconds}S`;  
}