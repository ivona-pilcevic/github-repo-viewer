# GitHub Repository Viewer

A simple React app to search and explore GitHub repositories. View details like stars, forks, contributors, and languages.

## Features
- Search repositories by topic (React, Vue, Angular, etc.).
- Sort by stars or forks.
- View repository details: stars, forks, issues, contributors.
- Pagination for large results.

## Tech Stack
- **Frontend**: React, TypeScript, CSS
- **API**: GitHub REST API
- **Testing**: Jest, React Testing Library

## Setup
1. Clone the repo:  
   `git clone https://github.com/ivona-pilcevic/github-repo-viewer.git`
2. Install dependencies and start the server:  
   ```bash
   npm install && npm start
3. Visit http://localhost:3000

## Environment Variables
Create a `.env` file with:
- `REACT_APP_GITHUB_API_URL=https://api.github.com`
- `REACT_APP_GITHUB_TOKEN=<your_github_token>`

## Testing
Run tests:
```bash
   npm test