const handler = async (m, { isOwner, isAdmin, conn, participants, args, usedPrefix }) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    return;
  }

  const pesan = args.join(' ');
  const invocador = m.pushName || 'Administrador';
  const newsletterJid = '120363400360651198@newsletter'; // tu canal
  const newsletterName = '🩵̶۫̄͟Ⓜ︎𓏲𝐌500𓍲̈͜𝗨̴ᥣ̥𝗍̈rᥲ̄☦︎𝐁ᴏ𝐭⋆͙̈么͟͞──'; // o el nombre que gustes
  const thumbnailUrl = 'https://qu.ax/pJCKB.jpg';

  let teks = `╭─╮︹︹⊹︹︹⊹︹︹⊹︹︹╭─╮
  𝗜𝗡𝗩𝗢𝗖𝗔𝗡𝗗𝗢 𝗚𝗥𝗨𝗣𝗢
╚▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬▭╝

💎 Te invocó: ${invocador}

💎 Mensaje: ${pesan ? pesan : ''}

╭─⬣「 ✰𝗠𝗶𝗲𝗺𝗯𝗿𝗼𝘀✰ 」⬣\n`;
  for (const mem of participants) {
    teks += `│⁖ฺ۟̇࣪·֗٬̤⃟🩵 @${mem.id.split('@')[0]}\n`;
  }
  teks += '╰─⬣';

  // Descargar la miniatura como buffer
  let imgBuffer = null;
  try {
    imgBuffer = await (await fetch(thumbnailUrl)).buffer();
  } catch (e) {}

  await conn.sendMessage(m.chat, {
    text: teks,
    mentions: participants.map(a => a.id),
    contextInfo: {
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid,
        newsletterName,
        serverMessageId: -1,
      },
      forwardingScore: 999,
      externalAdReply: {
        title: 'M500 ULTRA BOT',
        body: 'Invocando al grupo',
        thumbnail: imgBuffer,
        mediaType: 1,
        renderLargerThumbnail: true,
        sourceUrl: '' // puedes poner un link si quieres
      }
    }
  }, { quoted: m });
};

handler.help = ['tagall *<mensaje>*', 'invocar *<mensaje>*'];
handler.tags = ['grupo'];
handler.command = ['tagall', 'invocar'];
handler.admin = true;
handler.group = true;
export default handler;