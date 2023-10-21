import { NextRequest, NextResponse } from "next/server";
import { Category } from "@/models";
import dbConnect from "@/lib/dbconnect";

export async function GET(req: NextRequest) {
  try {
    await dbConnect();

    const allCategories = await Category.find();

    return NextResponse.json({ allCategories });
  } catch (error: any) {
    console.error(error, "API Error");
    return NextResponse.json({ message: error.message });
  }
}
