# ReWear - Community Clothing Exchange

## Project Overview

ReWear is a sustainable fashion platform built with Next.js 14+ (App Router) and PostgreSQL that enables users to exchange unused clothing through direct swaps or a point-based redemption system. The platform promotes sustainable fashion and reduces textile waste by encouraging reuse of wearable garments.

## Tech Stack

- **Frontend**: Next.js 14+ with App Router
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Styling**: Tailwind CSS
- **Image Storage**: Cloudinary or AWS S3
- **Deployment**: Vercel
- **Type Safety**: TypeScript

## Database Schema

### Users Table
```sql
- id (UUID, Primary Key)
- email (String, Unique)
- password (String, Hashed)
- name (String)
- avatar_url (String, Optional)
- points_balance (Integer, Default: 0)
- role (Enum: USER, ADMIN)
- created_at (DateTime)
- updated_at (DateTime)
```

### Items Table
```sql
- id (UUID, Primary Key)
- user_id (UUID, Foreign Key → Users)
- title (String)
- description (Text)
- category (Enum: TOPS, BOTTOMS, DRESSES, OUTERWEAR, ACCESSORIES, SHOES)
- type (String)
- size (Enum: XS, S, M, L, XL, XXL)
- condition (Enum: NEW, EXCELLENT, GOOD, FAIR)
- tags (String[])
- images (String[])
- status (Enum: AVAILABLE, PENDING, SWAPPED, REDEEMED)
- points_value (Integer)
- is_approved (Boolean, Default: false)
- created_at (DateTime)
- updated_at (DateTime)
```

### Swaps Table
```sql
- id (UUID, Primary Key)
- requester_id (UUID, Foreign Key → Users)
- owner_id (UUID, Foreign Key → Users)
- requester_item_id (UUID, Foreign Key → Items, Optional)
- owner_item_id (UUID, Foreign Key → Items)
- swap_type (Enum: DIRECT_SWAP, POINTS_REDEMPTION)
- status (Enum: PENDING, ACCEPTED, REJECTED, COMPLETED)
- points_used (Integer, Optional)
- created_at (DateTime)
- updated_at (DateTime)
```

## App Router Structure

```
src/app/
├── globals.css
├── layout.tsx (Root layout with providers)
├── page.tsx (Landing page)
├── loading.tsx (Global loading UI)
├── not-found.tsx (404 page)
│
├── (auth)/
│   ├── layout.tsx (Auth layout)
│   ├── login/
│   │   └── page.tsx
│   └── register/
│       └── page.tsx
│
├── dashboard/
│   ├── layout.tsx (Dashboard layout with navigation)
│   ├── page.tsx (Dashboard overview)
│   ├── items/
│   │   ├── page.tsx (My items list)
│   │   ├── new/
│   │   │   └── page.tsx (Add new item)
│   │   └── [id]/
│   │       ├── page.tsx (Item details)
│   │       └── edit/
│   │           └── page.tsx (Edit item)
│   ├── swaps/
│   │   ├── page.tsx (My swaps)
│   │   └── [id]/
│   │       └── page.tsx (Swap details)
│   └── profile/
│       └── page.tsx (User profile)
│
├── browse/
│   ├── page.tsx (Browse items with filters)
│   └── [id]/
│       └── page.tsx (Item detail page)
│
├── admin/
│   ├── layout.tsx (Admin layout)
│   ├── page.tsx (Admin dashboard)
│   ├── items/
│   │   ├── page.tsx (Pending items for approval)
│   │   └── [id]/
│   │       └── page.tsx (Item moderation)
│   └── users/
│       └── page.tsx (User management)
│
└── api/
    ├── auth/
    │   └── [...nextauth]/
    │       └── route.ts
    ├── items/
    │   ├── route.ts (GET, POST)
    │   └── [id]/
    │       └── route.ts (GET, PUT, DELETE)
    ├── swaps/
    │   ├── route.ts (GET, POST)
    │   └── [id]/
    │       └── route.ts (GET, PUT)
    ├── users/
    │   └── [id]/
    │       └── route.ts
    └── upload/
        └── route.ts (Image upload)
```

## Key Components Structure

```
src/components/
├── ui/ (Reusable UI components)
│   ├── Button.tsx
│   ├── Input.tsx
│   ├── Modal.tsx
│   ├── Card.tsx
│   ├── Badge.tsx
│   └── Spinner.tsx
│
├── forms/
│   ├── LoginForm.tsx
│   ├── RegisterForm.tsx
│   ├── ItemForm.tsx
│   └── SwapRequestForm.tsx
│
├── items/
│   ├── ItemCard.tsx
│   ├── ItemGallery.tsx
│   ├── ItemFilter.tsx
│   └── ItemGrid.tsx
│
├── layout/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Sidebar.tsx
│   └── Navigation.tsx
│
└── dashboard/
    ├── StatsCard.tsx
    ├── RecentActivity.tsx
    └── PointsBalance.tsx
```

## Key Features Implementation

### 1. User Authentication
- NextAuth.js with credentials provider
- JWT tokens for session management
- Protected routes using middleware
- Role-based access control (User/Admin)

### 2. Item Management
- CRUD operations for clothing items
- Image upload with optimization
- Category and size filtering
- Admin approval workflow
- Search functionality

### 3. Swap System
- Direct item-to-item swaps
- Points-based redemption system
- Swap request workflow
- Status tracking (Pending, Accepted, Rejected, Completed)

### 4. Points System
- Users earn points for successful swaps
- Points can be used to redeem items
- Point values based on item condition and category
- Transaction history

### 5. Admin Panel
- Item moderation and approval
- User management
- Content moderation
- Platform analytics

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Items
- `GET /api/items` - List items (with filters)
- `POST /api/items` - Create new item
- `GET /api/items/[id]` - Get item details
- `PUT /api/items/[id]` - Update item
- `DELETE /api/items/[id]` - Delete item

### Swaps
- `GET /api/swaps` - List user's swaps
- `POST /api/swaps` - Create swap request
- `PUT /api/swaps/[id]` - Update swap status
- `GET /api/swaps/[id]` - Get swap details

### Users
- `GET /api/users/[id]` - Get user profile
- `PUT /api/users/[id]` - Update user profile

### Admin
- `GET /api/admin/items/pending` - Get pending items
- `PUT /api/admin/items/[id]/approve` - Approve item
- `PUT /api/admin/items/[id]/reject` - Reject item

## Environment Variables

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/rewear"

# NextAuth
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"

# Image Upload (Cloudinary)
CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"

# Email (Optional - for notifications)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"
```

## Getting Started

1. **Setup Database**
   ```bash
   # Install PostgreSQL and create database
   createdb rewear
   
   # Setup Prisma
   npx prisma init
   npx prisma db push
   npx prisma generate
   ```

2. **Install Dependencies**
   ```bash
   npm install next@latest react react-dom
   npm install @prisma/client prisma
   npm install next-auth
   npm install @next-auth/prisma-adapter
   npm install tailwindcss postcss autoprefixer
   npm install cloudinary
   npm install @types/node @types/react @types/react-dom typescript
   ```

3. **Development**
   ```bash
   npm run dev
   ```

## Deployment Considerations

- **Database**: Use PostgreSQL on Railway, Supabase, or Neon
- **Images**: Cloudinary for image storage and optimization
- **Hosting**: Vercel for seamless Next.js deployment
- **Domain**: Custom domain for production
- **SSL**: Automatic with Vercel
- **Environment**: Separate staging and production environments

## Future Enhancements

- Real-time chat for swap negotiations
- Mobile app using React Native
- AI-powered size and style recommendations
- Social features (reviews, ratings)
- Integration with shipping services
- Sustainability impact tracking
- Community challenges and gamification

This project structure provides a solid foundation for building a scalable, maintainable community clothing exchange platform using modern web technologies.
