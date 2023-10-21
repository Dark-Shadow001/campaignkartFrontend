import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export const verifyToken = async (req: NextRequest) => {
  const authHeader = req.headers.get('authorization');
  
  if (!authHeader) {
    return NextResponse.json({ message: 'Authorization header missing' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, 'swift_Study_654!');
    (req as any).userData = decoded;
    return null;
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ message: 'Invalid token' });
  }
}
