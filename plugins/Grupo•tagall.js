const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  // Solo admins pueden usarlo
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    return;
  }
  const pesan = args.join(' ');
  const invocador = m.pushName || 'Administrador';

  // Formato del mensaje
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

  // Download thumbnail image
  const thumbnailUrl = 'https://qu.ax/pJCKB.jpg';
  let jpegThumbnail = null;
  try {
    const res = await fetch(thumbnailUrl);
    jpegThumbnail = await res.buffer();
  } catch (e) {
    jpegThumbnail = null;
  }

  // ID del canal
  const channelJid = '120363400360651198@newsletter';

  // Enviar mensaje con miniatura y como canal
  await conn.sendMessage(channelJid, {
    text: teks,
    mentions: participants.map(a => a.id),
    contextInfo: {
      externalAdReply: {
        title: '💎 Frases y más 💎',
        body: 'Invocando al grupo',
        thumbnail: jpegThumbnail,
        mediaType: 1,
        renderLargerThumbnail: true,
        sourceUrl: '' // Puedes poner una URL si quieres que el mensaje tenga link
      }
    }
  });
};
handler.help = ['tagall *<mensaje>*', 'invocar *<mensaje>*'];
handler.tags = ['grupo'];
handler.command = ['tagall', 'invocar'];
handler.admin = true;
handler.group = true;
export default handler;