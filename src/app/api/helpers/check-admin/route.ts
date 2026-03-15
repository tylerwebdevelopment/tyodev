import {prisma} from '@/prisma/client';

import { NextResponse } from 'next/server';
export const POST = async (req: Request) => {
  const {email} = await req.json();

  if(!email) return NextResponse.json({exists: false, isAdmin: false});

  const user = await prisma.user.findUnique({
    where: {email},
    select: {isAdmin: true},
  });

  return NextResponse.json({
    exists: !!user,
    isAdmin: user?.isAdmin === true || false,
  })
}