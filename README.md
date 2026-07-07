# HMorix Enterprise Platform

A full-stack enterprise platform built with React + Node.js in TypeScript, designed for Vercel deployment.

## Architecture

```
HMorix Cloud
├── BillingFlow (Invoicing & Payments)
├── PDF Automation (Document Processing)
├── AI Agent (Code & Content Generation)
├── Smart Home (IoT Division)
├── Support Center (Tickets & Knowledge Base)
├── Analytics (Dashboard & Reporting)
└── User Management (Auth & Roles)
```

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, TypeScript, Vite, Tailwind CSS |
| Backend | Node.js, Express, TypeScript |
| Database | SQLite (better-sqlite3) / Cloudflare D1 |
| Storage | Cloudflare R2 / Google Drive |
| Deployment | Vercel |
| Charts | Recharts |
| Icons | Lucide React |
| Animations | Framer Motion |

## Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Installation

```bash
# Install all dependencies
npm run install:all

# Or manually:
npm install
cd client && npm install
cd ../server && npm install
```

### Development

```bash
# Run both client and server
npm run dev

# Client only (http://localhost:5173)
npm run dev:client

# Server only (http://localhost:3001)
npm run dev:server
```

### Build

```bash
npm run build
```

## Project Structure

```
hmorix-platform/
├── package.json          # Root scripts
├── vercel.json           # Vercel deployment config
├── client/               # React frontend
│   ├── src/
│   │   ├── main.tsx
│   │   ├── App.tsx       # Router with all routes
│   │   ├── styles/       # Global CSS + Tailwind
│   │   ├── layouts/      # MainLayout
│   │   ├── components/   # Navbar, Footer, CommandPalette, AIAssistant
│   │   └── pages/        # All page components
│   │       ├── Home.tsx
│   │       ├── Dashboard.tsx
│   │       ├── Security.tsx
│   │       ├── Status.tsx
│   │       ├── Trust.tsx
│   │       ├── Compliance.tsx
│   │       ├── Developers.tsx
│   │       ├── Playground.tsx
│   │       ├── SmartHome.tsx
│   │       ├── Architecture.tsx
│   │       ├── auth/     # SignIn, ForgotPassword, Verify
│   │       └── products/ # BillingFlow, AIAgent, PDFAutomation
│   ├── index.html
│   ├── tailwind.config.js
│   └── vite.config.ts
└── server/               # Node.js backend
    ├── src/
    │   └── index.ts      # Express API with SQLite
    └── data/             # SQLite database file
```

## Routes

### Pages
| Route | Description |
|-------|-------------|
| `/` | Home page |
| `/about` | About HMorix |
| `/services` | All services |
| `/pricing` | Pricing plans |
| `/contact` | Contact form |
| `/blog` | Blog/articles |

### Enterprise Trust Layer
| Route | Description |
|-------|-------------|
| `/security` | Security Center |
| `/status` | System Status Page |
| `/trust` | Trust Center + Case Studies |
| `/compliance` | Compliance Center |
| `/support` | Support Ticket System |
| `/knowledge-base` | Knowledge Base |

### Product Ecosystem
| Route | Description |
|-------|-------------|
| `/billingflow` | BillingFlow overview |
| `/billingflow/features` | BillingFlow features |
| `/billingflow/pricing` | BillingFlow pricing |
| `/billingflow/docs` | BillingFlow documentation |
| `/agent` | AI Agent overview |
| `/agent/playground` | AI Agent playground |
| `/pdf-automation` | PDF Automation |
| `/smart-home` | Smart Home division |

### Platform
| Route | Description |
|-------|-------------|
| `/developers` | Developer platform |
| `/playground` | AI Playground (try before buy) |
| `/dashboard` | Enterprise Dashboard demo |
| `/architecture` | Technical architecture |

### Company
| Route | Description |
|-------|-------------|
| `/careers` | Job openings |
| `/investors` | Investor relations |
| `/partners` | Partner ecosystem |
| `/roadmap` | Public roadmap |

### Auth
| Route | Description |
|-------|-------------|
| `/signin` | Sign in page |
| `/forgot-password` | Password reset |
| `/verify` | Account verification |

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| POST | `/api/auth/signin` | Sign in |
| POST | `/api/auth/forgot-password` | Password reset |
| POST | `/api/auth/verify` | Verify account |
| GET | `/api/projects` | List projects |
| GET | `/api/invoices` | List invoices |
| POST | `/api/invoices` | Create invoice |
| GET | `/api/tickets` | List support tickets |
| POST | `/api/tickets` | Create ticket |
| GET | `/api/ai-jobs` | List AI jobs |
| GET | `/api/pdf-jobs` | List PDF jobs |
| POST | `/api/contact` | Submit contact form |
| GET | `/api/notifications` | Get notifications |
| GET | `/api/dashboard/stats` | Dashboard statistics |
| GET | `/api/status` | System status |

## Enterprise Features

- **Command Palette** (Ctrl+K) - Universal search and navigation
- **AI Assistant** - Floating chat widget
- **Notification Center** - Real-time alerts
- **Theme Toggle** - Dark/Light mode
- **Responsive Design** - Mobile-first approach
- **Animated Architecture Diagrams** - SVG-based

## Deployment to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deploy
vercel --prod
```

The `vercel.json` is pre-configured to:
- Build the React client
- Serve the SPA with client-side routing
- Route `/api/*` to serverless functions

## Database

The project uses SQLite locally (via better-sqlite3) with a schema compatible with Cloudflare D1. To migrate to D1:

1. Export the schema from `server/src/index.ts`
2. Create a D1 database in Cloudflare dashboard
3. Run the schema migrations
4. Update the server to use D1 bindings

## Storage

For file storage (images, documents), the project is designed to work with:
- **Cloudflare R2** - Primary object storage
- **Google Drive** - Alternative for document management

Configure via environment variables:
```
R2_ACCOUNT_ID=your_account_id
R2_ACCESS_KEY=your_access_key
R2_SECRET_KEY=your_secret_key
R2_BUCKET_NAME=hmorix-assets
```

## License

Proprietary - HMorix © 2024
