# ReWear Project Setup Guide

## Initial Project Structure to Create

After running `npm install`, create the following directory structure:

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   │
│   ├── (auth)/
│   │   ├── layout.tsx
│   │   ├── login/
│   │   │   └── page.tsx
│   │   └── register/
│   │       └── page.tsx
│   │
│   ├── dashboard/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── items/
│   │   │   ├── page.tsx
│   │   │   ├── new/
│   │   │   │   └── page.tsx
│   │   │   └── [id]/
│   │   │       ├── page.tsx
│   │   │       └── edit/
│   │   │           └── page.tsx
│   │   ├── swaps/
│   │   │   ├── page.tsx
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   └── profile/
│   │       └── page.tsx
│   │
│   ├── browse/
│   │   ├── page.tsx
│   │   └── [id]/
│   │       └── page.tsx
│   │
│   ├── admin/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── items/
│   │   │   ├── page.tsx
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   └── users/
│   │       └── page.tsx
│   │
│   └── api/
│       ├── auth/
│       │   └── [...nextauth]/
│       │       └── route.ts
│       ├── items/
│       │   ├── route.ts
│       │   └── [id]/
│       │       └── route.ts
│       ├── swaps/
│       │   ├── route.ts
│       │   └── [id]/
│       │       └── route.ts
│       ├── users/
│       │   └── [id]/
│       │       └── route.ts
│       └── upload/
│           └── route.ts
│
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Modal.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   └── Spinner.tsx
│   │
│   ├── forms/
│   │   ├── LoginForm.tsx
│   │   ├── RegisterForm.tsx
│   │   ├── ItemForm.tsx
│   │   └── SwapRequestForm.tsx
│   │
│   ├── items/
│   │   ├── ItemCard.tsx
│   │   ├── ItemGallery.tsx
│   │   ├── ItemFilter.tsx
│   │   └── ItemGrid.tsx
│   │
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Sidebar.tsx
│   │   └── Navigation.tsx
│   │
│   └── dashboard/
│       ├── StatsCard.tsx
│       ├── RecentActivity.tsx
│       └── PointsBalance.tsx
│
├── lib/
│   ├── auth.ts
│   ├── db.ts
│   ├── cloudinary.ts
│   ├── utils.ts
│   └── validations.ts
│
├── types/
│   ├── auth.ts
│   ├── item.ts
│   ├── swap.ts
│   └── user.ts
│
└── styles/
    └── globals.css
```

## Setup Commands in Order

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Create environment file**
   ```bash
   cp .env.example .env.local
   ```

3. **Setup database**
   ```bash
   npx prisma db push
   npx prisma generate
   ```

4. **Create initial directories**
   ```bash
   mkdir -p src/app src/components src/lib src/types src/styles
   mkdir -p src/app/{api,dashboard,browse,admin}
   mkdir -p src/components/{ui,forms,items,layout,dashboard}
   ```

5. **Start development**
   ```bash
   npm run dev
   ```

## Key Files to Create First

1. **src/app/layout.tsx** - Root layout with providers
2. **src/app/page.tsx** - Landing page
3. **src/app/globals.css** - Global styles with Tailwind
4. **src/lib/auth.ts** - NextAuth configuration
5. **src/lib/db.ts** - Prisma client setup
6. **src/components/ui/Button.tsx** - Base button component

## Database Setup

1. Create PostgreSQL database named `rewear`
2. Update DATABASE_URL in .env.local
3. Run `npx prisma db push` to create tables
4. Optionally create a seed file to populate initial data

## Authentication Setup

1. Configure NextAuth.js in `src/lib/auth.ts`
2. Create API route at `src/app/api/auth/[...nextauth]/route.ts`
3. Set up middleware for protected routes
4. Create login/register forms

## Image Upload Setup

1. Create Cloudinary account
2. Configure API keys in environment variables
3. Create upload API route
4. Implement image upload component with drag-and-drop

This structure provides a solid foundation for building the ReWear platform with all the features mentioned in the idea.txt file.
