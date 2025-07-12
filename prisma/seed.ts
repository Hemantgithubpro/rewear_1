import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Create admin user
  const adminPassword = await bcrypt.hash('admin123', 12)
  const admin = await prisma.user.upsert({
    where: { email: 'admin@rewear.com' },
    update: {},
    create: {
      email: 'admin@rewear.com',
      name: 'Admin User',
      password: adminPassword,
      role: 'ADMIN',
      pointsBalance: 1000,
    },
  })

  // Create sample users
  const userPassword = await bcrypt.hash('password123', 12)
  const users = await Promise.all([
    prisma.user.upsert({
      where: { email: 'john@example.com' },
      update: {},
      create: {
        email: 'john@example.com',
        name: 'John Doe',
        password: userPassword,
        role: 'USER',
        pointsBalance: 150,
      },
    }),
    prisma.user.upsert({
      where: { email: 'jane@example.com' },
      update: {},
      create: {
        email: 'jane@example.com',
        name: 'Jane Smith',
        password: userPassword,
        role: 'USER',
        pointsBalance: 200,
      },
    }),
    prisma.user.upsert({
      where: { email: 'mike@example.com' },
      update: {},
      create: {
        email: 'mike@example.com',
        name: 'Mike Johnson',
        password: userPassword,
        role: 'USER',
        pointsBalance: 75,
      },
    }),
  ])

  // Create sample items
  const sampleItems = [
    {
      title: 'Vintage Denim Jacket',
      description: 'Classic blue denim jacket from the 90s. Excellent condition with minimal wear. Perfect for layering in any season.',
      category: 'OUTERWEAR' as const,
      type: 'Jacket',
      size: 'M' as const,
      condition: 'EXCELLENT' as const,
      tags: ['vintage', 'denim', 'classic'],
      images: ['https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400'],
      pointsValue: 25,
      isApproved: true,
    },
    {
      title: 'Floral Summer Dress',
      description: 'Beautiful floral print dress perfect for summer occasions. Lightweight and comfortable fabric.',
      category: 'DRESSES' as const,
      type: 'Midi Dress',
      size: 'S' as const,
      condition: 'GOOD' as const,
      tags: ['floral', 'summer', 'midi'],
      images: ['https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400'],
      pointsValue: 20,
      isApproved: true,
    },
    {
      title: 'Leather Ankle Boots',
      description: 'High-quality leather ankle boots in black. Comfortable and stylish for both casual and formal wear.',
      category: 'SHOES' as const,
      type: 'Boots',
      size: 'L' as const,
      condition: 'EXCELLENT' as const,
      tags: ['leather', 'boots', 'black'],
      images: ['https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400'],
      pointsValue: 30,
      isApproved: true,
    },
    {
      title: 'Cozy Wool Sweater',
      description: 'Warm and cozy wool sweater in cream color. Perfect for cold weather and very comfortable.',
      category: 'TOPS' as const,
      type: 'Sweater',
      size: 'M' as const,
      condition: 'GOOD' as const,
      tags: ['wool', 'sweater', 'cozy'],
      images: ['https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400'],
      pointsValue: 18,
      isApproved: true,
    },
    {
      title: 'High-Waisted Jeans',
      description: 'Trendy high-waisted jeans in dark wash. Great fit and very comfortable for everyday wear.',
      category: 'BOTTOMS' as const,
      type: 'Jeans',
      size: 'M' as const,
      condition: 'EXCELLENT' as const,
      tags: ['jeans', 'high-waisted', 'dark-wash'],
      images: ['https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400'],
      pointsValue: 22,
      isApproved: true,
    },
  ]

  for (let i = 0; i < sampleItems.length; i++) {
    const item = sampleItems[i]
    const user = users[i % users.length]
    
    await prisma.item.create({
      data: {
        ...item,
        userId: user.id,
      },
    })
  }

  console.log('✅ Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
