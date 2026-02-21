import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';

const app = express();
app.use(cors());

const apiDir = 'C:\\Users\\andon\\Desktop\\git\\aria-tools\\api';

app.get('/api/allTraits', (req, res) => {
  const filePath = path.join(apiDir, 'list-traits.json');
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Failed to read traits file' });
      return;
    }
    const traits = JSON.parse(data);
    res.json(traits);
  });
});

app.get('/api/allSkills', (req, res) => {
  const filePath = path.join(apiDir, 'list-skills.json');
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Failed to read skills file' });
      return;
    }
    const skills = JSON.parse(data);
    res.json(skills);
  });
});

app.get('/api/allItems', (req, res) => {
  const filePath = path.join(apiDir, 'list-items.json');
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Failed to read items file' });
      return;
    }
    const items = JSON.parse(data);
    res.json(items);
  });
});

app.listen(3000, () => console.log('API running on http://localhost:3000'));

