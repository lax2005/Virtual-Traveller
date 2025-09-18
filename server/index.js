// Upload video (admin)
app.post('/api/videos', upload.single('video'), (req, res) => {
  if(!req.file) return res.status(400).send({error:'No video'});
  const videosFile = path.join(__dirname, 'videos.json');
  let videos = fs.existsSync(videosFile) ? JSON.parse(fs.readFileSync(videosFile)) : [];
  const newVid = {
    id: Date.now(),
    title: req.body.title || 'Untitled',
    description: req.body.description || '',
    url: `/uploads/${req.file.filename}`
  };
  videos.push(newVid);
  fs.writeFileSync(videosFile, JSON.stringify(videos, null, 2));
  res.send(newVid);
});

// Public - get all videos
app.get('/api/videos', (req, res) => {
  const videosFile = path.join(__dirname, 'videos.json');
  if(!fs.existsSync(videosFile)) return res.send([]);
  res.send(JSON.parse(fs.readFileSync(videosFile)));
});
