const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000; // Replace with the port you want to use

app.use(express.json());
app.use(cors());

app.post('/process-frames', (req, res) => {
  const { frames } = req.body;

  // Replace with your logic to generate the video file
  // This code simply saves a sample video file using the current timestamp as the filename
  const timestamp = Date.now();
  const filename = `video-${timestamp}.mp4`;
  const filepath = path.join(__dirname, 'public', filename);
  const stream = fs.createWriteStream(filepath);

  // Write the video file using the captured frames
  // Replace this with your actual logic to generate the video file
  for (let i = 0; i < frames.length; i++) {
    const frame = frames[i];
    // Write the frame data to the stream
    stream.write(frame);
  }

  // Close the stream to complete the video file writing
  stream.end();

  // Return the filename to the client
  res.json({ filename });
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});