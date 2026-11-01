# Friday Quiz Night — public multiplayer website

This is a **deploy-ready website**, not an already published URL. It requires hosting to enable real-time multiplayer. Every player can scan the host's QR code and answer on their own phone from any network. No Claude account or local installation is needed for players.

## Publish online using GitHub + Render

1. Create a GitHub account (if needed), then create a **new repository** (e.g. `friday-quiz-night`).
2. Upload the **contents of this folder** to the repo (GitHub → Add file → Upload files → Commit changes), including `render.yaml`, `server.js`, `index.html`, `rounds.js`, and `package.json`. Do not upload just the ZIP as one file.
3. Sign in to [Render](https://dashboard.render.com/). Choose **New → Blueprint** and connect your GitHub repository. Render reads `render.yaml` and deploys the web service. If Blueprint isn't available, choose **New → Web Service**, select the repo, runtime **Node**, build `npm install`, start `npm start`, and add an environment variable `HOST_KEY` with a long random secret.
4. Once the deploy is live, copy the assigned `https://...onrender.com` site address. To create your **private host link**, use `https://...onrender.com/host?key=YOUR_HOST_KEY` (find the generated `HOST_KEY` under the service's Environment settings; if Render hides a generated secret, replace it with a new long secret of your choosing, then redeploy).
5. Open the host link on your laptop / TV. The on-screen QR code now links to `https://...onrender.com/join` automatically. Players scan and answer on any phone, including mobile data.

**Do not use the public homepage as the host.** The host needs its private link. Keep this link to yourself.

## Important hosting limitations

- The free Render instance can sleep when idle. Open the host page in advance to wake it up.
- Game data is stored in server memory. A restart, sleeping container, or new deployment will **reset players and scores**. For a critical event, use a paid always-on instance and plan persistence.
- One running service hosts both separate games, but not multiple simultaneous independent rooms. Up to 100 players; performance depends on hosting tier.
- The QR artwork loads from an external QR image service, so the host needs internet access.
- The original markdown included only the round structure, not the actual questions. The included `rounds.js` contains placeholder sample questions that should be checked and replaced before playing.

## Round format

Game 1 — Political History: typed (20), four options (20), closest wins (20). Complete this game and see its own final scores.

Game 2 — Football: typed elimination (20), four options (20), closest wins (20). Scores reset for the football final. Players re-use the same join QR code. Both games have independent scoreboards.

**Update existing deployment:** Replace `rounds.js`, `server.js`, `index.html`, and `README.md` in the same GitHub repository (do not create a new Render service). Commit the changes and allow Render to redeploy. Existing in-memory participants and scores reset on deployment.
