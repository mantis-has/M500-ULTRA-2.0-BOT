const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    return;
  }
  // Mensaje opcional
  const pesan = args.join(' ');
  // Nombre de quien usó el comando (admin/invocador)
  const invocador = m.pushName || 'Administrador';

  // Encabezado decorativo
  let teks = `╭─╮︹︹⊹︹︹⊹︹︹⊹︹︹╭─╮
  𝗜𝗡𝗩𝗢𝗖𝗔𝗡𝗗𝗢 𝗚𝗥𝗨𝗣𝗢
╚▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬▭╝

💎 Te invocó: ${invocador}

💎 Mensaje: ${pesan ? pesan : ''}

╭─⬣「 ✰𝗠𝗶𝗲𝗺𝗯𝗿𝗼𝘀✰ 」⬣\n`;

  // Mencionar a todos con el patrón pedido
  for (const mem of participants) {
    teks += `│⁖ฺ۟̇࣪·֗٬̤⃟🩵 @${mem.id.split('@')[0]}\n`;
  }
  teks += '╰─⬣';

  // Enviar mensaje con menciones
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)});
};
handler.help = ['tagall *<mensaje>*', 'invocar *<mensaje>*'];
handler.tags = ['grupo'];
handler.command = ['tagall', 'invocar'];
handler.admin = true;
handler.group = true;
export default handler;