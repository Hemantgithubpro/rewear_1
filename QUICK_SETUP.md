# ReWear Project - Quick Setup

## Fix Tailwind Configuration Issues

The error you're seeing is because the Tailwind plugins aren't installed. Here's how to fix it:

### 1. Install Missing Dependencies

```bash
# Install the missing packages for Tailwind
npm install clsx tailwind-merge

# Optional: Install Tailwind plugins if you want form styling
npm install @tailwindcss/forms @tailwindcss/typography
```

### 2. Verify Dependencies

Make sure all packages from package.json are installed:

```bash
npm install
```

### 3. Set up Database (if you have PostgreSQL)

```bash
# Create a .env.local file
cp .env.example .env.local

# Update .env.local with your database URL:
# DATABASE_URL="postgresql://username:password@localhost:5432/rewear"

# Push the schema to database
npx prisma db push

# Generate Prisma client
npx prisma generate

# (Optional) Seed with sample data
npm run db:seed
```

### 4. Start Development Server

```bash
npm run dev
```

## If You Don't Have PostgreSQL

You can still run the project in demo mode:

1. **Option A: Use a cloud database**
   - Supabase (free): https://supabase.com
   - Railway (free): https://railway.app
   - Neon (free): https://neon.tech

2. **Option B: Install PostgreSQL locally**
   ```bash
   # Windows (using chocolatey)
   choco install postgresql
   
   # Or download from: https://www.postgresql.org/download/
   ```

3. **Option C: Use Docker**
   ```bash
   docker run --name rewear-postgres -e POSTGRES_PASSWORD=password -e POSTGRES_DB=rewear -p 5432:5432 -d postgres
   ```

## Project Structure

The project includes:

✅ **Landing Page** - Beautiful hero section and features  
✅ **Authentication** - Login/Register forms with validation  
✅ **Dashboard** - User dashboard with stats and navigation  
✅ **Browse Items** - Item browsing with filters  
✅ **Components** - Complete UI component library  
✅ **Database Schema** - PostgreSQL with Prisma ORM  
✅ **Type Safety** - Full TypeScript coverage  

## Next Steps

1. Set up authentication with NextAuth.js
2. Build API routes for CRUD operations
3. Implement image upload functionality
4. Add swap/exchange features
5. Build admin panel

## Troubleshooting

### CSS/Tailwind Issues
- The @tailwind and @apply errors are normal in the editor
- They will work correctly when the dev server runs
- Make sure PostCSS is configured (postcss.config.js exists)

### Database Connection Issues
- Verify PostgreSQL is running
- Check DATABASE_URL in .env.local
- Ensure database exists and is accessible

### Import Errors
- Run `npm install` to ensure all dependencies are installed
- Check that file paths are correct
- Verify TypeScript configuration

## Demo Credentials

When you run the seed script, these accounts will be created:

**Admin User:**
- Email: admin@rewear.com
- Password: admin123

**Regular Users:**
- Email: john@example.com / Password: password123
- Email: jane@example.com / Password: password123
- Email: mike@example.com / Password: password123

---

**The project is now ready for development! 🚀**
