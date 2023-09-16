import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Tu Junooniyat",
      artist: "Shrey Singhal, Akriti Kakkar",
      cover:
        "https://pagalsong.in/uploads//thumbnails/300x300/id3Picture_1549623292.jpg",
      id: uuidv4(),
      active: true,
      color: ["#1C2625", "#791713"],
      audio:
        "https://pagalsong.in/uploads/systemuploads/mp3/Junooniyat/06 - Tu Junooniyat (Climax Song) 128 Kbps.mp3",
    },
    {
      name: "Forever Young",
      artist: "C Y G N",
      cover:
        "https://chillhop.com/wp-content/uploads/2023/06/9180a7fabdc07fe2e221bb26bdd477cb66f6b69e-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#1C2625", "#791713"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=60614",
    },
    {
      name: "Sunset Drive",
      artist: "C Y G N",
      cover:
        "https://chillhop.com/wp-content/uploads/2023/06/9180a7fabdc07fe2e221bb26bdd477cb66f6b69e-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#1C2625", "#791713"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=60620",
    },
    {
      name: "The Catch",
      artist: "dryhope",
      cover:
        "data:image/jpeg;base64,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",
      id: uuidv4(),
      active: false,
      color: ["#25635d", "#412b2b"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=55138",
    },
  ];
}
export default chillHop;
