import sharp from "sharp";
import fs from "fs";
import path from "path";

const pasta = "./img";

const arquivos = fs.readdirSync(pasta);

for (const arquivo of arquivos) {
  const extensao = path.extname(arquivo).toLowerCase();

  if (extensao !== ".png" && extensao !== ".jpg" && extensao !== ".jpeg") {
    continue;
  }

  const nome = path.basename(arquivo, extensao);
  const origem = path.join(pasta, arquivo);
  const destino = path.join(pasta, `${nome}.webp`);

  await sharp(origem)
    .webp({ quality: 80 })
    .toFile(destino);

  console.log(`Convertido: ${arquivo} -> ${nome}.webp`);
}