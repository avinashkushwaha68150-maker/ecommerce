import { NextResponse } from 'next/server';
import { products } from '@/data/products';

export async function GET() {
  return NextResponse.json(products);
}

export async function POST(request: Request) {
  const body = await request.json();

  return NextResponse.json({
    success: true,
    product: {
      id: Date.now(),
      ...body,
    },
  });
}
