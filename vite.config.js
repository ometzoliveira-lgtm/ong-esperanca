import { defineConfig } from "vite";
import fs from "fs";
import path from "path";

export default defineConfig({
  base: "./",

  build: {
    rollupOptions: {
      input: "html/index.html"
    }
  },

  plugins: [
    {
      name: "copy-images",

      closeBundle() {
        const origem = path.resolve("img");
        const destino = path.resolve("dist/img");

        fs.cpSync(origem, destino, {
          recursive: true
        });
      }
    }
  ]
});