import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req) {
  try {
    const todos = await prisma.todoxxx.findMany();
    return new Response(JSON.stringify(todos), { status: 200 });
  } catch (error) {
    console.error('Error fetching todos:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}

export async function POST(req) {
  try {
    const { title } = await req.json();
    const todo = await prisma.todoxxx.create({
      data: { title },
    });
    return new Response(JSON.stringify(todo), { status: 201 });
  } catch (error) {
    console.error('Error creating todo:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
