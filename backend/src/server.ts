import express from "express";
import cors from "cors";

const musicas = [
  {
    id: 1,
    titulo: "Blinding Lights",
    artista: "The Weeknd",
    capa: "https://i.scdn.co/image/ab67616d0000b273e9e1b1e7c7d7d9c8f5c5e5f1",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  },
  {
    id: 2,
    titulo: "Levitating",
    artista: "Dua Lipa",
    capa: "https://i.scdn.co/image/ab67616d0000b273e9e1b1e7c7d7d9c8f5c5e5f2",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  }
];

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Spotify 2.0 rodando");
});

app.get("/musicas", (req, res) => {
  res.send(musicas);
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});