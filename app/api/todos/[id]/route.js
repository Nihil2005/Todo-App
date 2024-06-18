import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function PUT(req, { params }) {
  const { id } = params;
  try {
    const { completed } = await req.json();
    const todo = await prisma.todoxxx.update({
      where: { id: String(id) },
      data: { completed },
    });
    return new Response(JSON.stringify(todo), { status: 200 });
  } catch (error) {
    console.error('Error updating todo:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  const { id } = params;
  try {
    await prisma.todoxxx.delete({
      where: { id: String(id) },
    });
    return new Response(null, { status: 204 });
  } catch (error) {
    console.error('Error deleting todo:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
