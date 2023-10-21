import { NextRequest, NextResponse } from "next/server";
import { Services } from "@/models";
import dbConnect from "@/lib/dbconnect";
import convertParams, { FinalQuery } from "@/utils/api/convertParams";

export async function GET(req: NextRequest) {
  try {
    await dbConnect();

    // Utilizing NextRequest's nextUrl.searchParams
    const searchParams = req.nextUrl.searchParams;
    const searchParamsObject = Object.fromEntries(searchParams);

    const finalQuery: FinalQuery = await convertParams(
      Services,
      searchParamsObject
    );
    const allServices = await Services.find(finalQuery.find)
    .limit(finalQuery.limit);

    return NextResponse.json({ allServices });
  } catch (error: any) {
    console.error(error, "API Error");
    return NextResponse.json({ message: error.message });
  }
}

export const dynamic = "force-dynamic";
// 'auto' | 'force-dynamic' | 'error' | 'force-static'
