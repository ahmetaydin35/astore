import { PrismaClient } from '@prisma/client';
import { sampleProducts } from '../lib/sample-data';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  // Delete existing products
  await prisma.product.deleteMany();
  console.log('🗑️  Cleared existing products');

  // Insert sample products
  for (const product of sampleProducts) {
    await prisma.product.create({
      data: product,
    });
  }

  console.log(`✅ Successfully seeded ${sampleProducts.length} products`);
  console.log('🎉 Database seeding completed!');
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
