# ReWear - Community Clothing Exchange

A sustainable fashion platform built with Next.js 14 (App Router) and PostgreSQL that enables users to exchange unused clothing through direct swaps or a point-based redemption system.

## � What's Included

✅ **Complete Project Structure** - All essential files and folders created  
✅ **Beautiful Landing Page** - Hero section, features, and sample items showcase  
✅ **Authentication System** - Login/register forms with validation (ready for NextAuth)  
✅ **Dashboard Interface** - User dashboard with stats, recent activity, and navigation  
✅ **Browse & Filter** - Items browsing page with category/size/condition filters  
✅ **Reusable Components** - Button, Input, Card, Modal, Badge, Spinner components  
✅ **Item Components** - ItemCard, ItemGrid, ItemGallery, ItemFilter components  
✅ **Form Components** - LoginForm, RegisterForm with React Hook Form + Zod validation  
✅ **Layout Components** - Header, Footer, responsive navigation  
✅ **Database Schema** - Complete Prisma schema with all relationships  
✅ **Type Safety** - TypeScript interfaces for all entities  
✅ **Utility Functions** - Date formatting, text truncation, className merging  
✅ **Seed Data** - Sample users and items for development  
✅ **Route Protection** - Middleware for protected routes (basic implementation)  

## 🚀 Development Status

The project is now **ready for development** with a solid foundation including:

- 🎨 **Modern UI** - Tailwind CSS with custom design system
- 🔒 **Authentication Ready** - Forms and validation prepared for NextAuth integration
- 📱 **Responsive Design** - Mobile-first approach throughout
- 🗄️ **Database Ready** - PostgreSQL schema with proper relationships
- 🧩 **Component Library** - Reusable, well-structured components
- 📝 **Form Handling** - React Hook Form with Zod validation
- 🛡️ **Type Safety** - Full TypeScript coverage

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- PostgreSQL database
- Cloudinary account (for image storage)

### Installation

1. **Clone and navigate to the project**
   ```bash
   git clone <repository-url>
   cd rewear-clothing-exchange
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with your actual values:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/rewear"
   NEXTAUTH_SECRET="your-secret-key"
   NEXTAUTH_URL="http://localhost:3000"
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your-cloud-name"
   CLOUDINARY_API_KEY="your-api-key"
   CLOUDINARY_API_SECRET="your-api-secret"
   ```

4. **Set up the database**
   ```bash
   # Push schema to database
   npx prisma db push
   
   # Generate Prisma client
   npx prisma generate
   
   # (Optional) Seed the database
   npm run db:seed
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/                    # App Router pages and layouts
│   ├── (auth)/            # Authentication pages
│   ├── dashboard/         # User dashboard
│   ├── browse/            # Browse items
│   ├── admin/             # Admin panel
│   └── api/               # API routes
├── components/            # Reusable components
│   ├── ui/                # Base UI components
│   ├── forms/             # Form components
│   ├── items/             # Item-related components
│   └── layout/            # Layout components
├── lib/                   # Utility functions and configurations
├── types/                 # TypeScript type definitions
└── styles/                # Global styles
```

## 🛠 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:push` - Push schema changes to database
- `npm run db:generate` - Generate Prisma client
- `npm run db:studio` - Open Prisma Studio
- `npm run db:seed` - Seed the database
- `npm run type-check` - Run TypeScript compiler

## 📊 Database Schema

The application uses PostgreSQL with the following main entities:

- **Users**: User accounts with authentication and profile data
- **Items**: Clothing items with images, descriptions, and metadata
- **Swaps**: Exchange requests and transactions between users
- **Categories**: Clothing categories (tops, bottoms, dresses, etc.)

See `prisma/schema.prisma` for the complete database schema.

## 🔐 Authentication

The app uses NextAuth.js with:
- Credentials provider for email/password authentication
- JWT tokens for session management
- Role-based access control (User/Admin)
- Protected routes using middleware

## 📱 Key Pages

- **Landing Page** (`/`) - Platform introduction and featured items
- **Browse** (`/browse`) - Browse and filter available items
- **Dashboard** (`/dashboard`) - User profile, items, and swaps
- **Item Details** (`/browse/[id]`) - Detailed item view with swap options
- **Admin Panel** (`/admin`) - Content moderation and management

## 🎨 Styling

- **Tailwind CSS** for utility-first styling
- **Custom color palette** for brand consistency
- **Responsive design** with mobile-first approach
- **Dark mode support** (optional)

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy automatically on every push

### Environment Variables for Production

```env
DATABASE_URL="postgresql://..."
NEXTAUTH_SECRET="your-production-secret"
NEXTAUTH_URL="https://your-domain.com"
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔧 Troubleshooting

### Common Issues

1. **Database connection errors**
   - Ensure PostgreSQL is running
   - Verify DATABASE_URL in .env.local
   - Check database credentials

2. **Prisma errors**
   - Run `npx prisma generate` after schema changes
   - Use `npx prisma db push` to sync schema

3. **Image upload issues**
   - Verify Cloudinary credentials
   - Check API key permissions

### Getting Help

- Check the [Project Overview](PROJECT_OVERVIEW.md) for detailed documentation
- Review Prisma schema in `prisma/schema.prisma`
- Examine API routes in `src/app/api/`

## 🏗 Development Roadmap

- [ ] Real-time chat for negotiations
- [ ] Mobile app with React Native
- [ ] AI-powered recommendations
- [ ] Social features (reviews, ratings)
- [ ] Shipping integration
- [ ] Sustainability impact tracking
- [ ] Community challenges and gamification

---

Made with 💚 for sustainable fashion
