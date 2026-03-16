import { getCurrentAdminSession } from "@/lib/auth-session";
import { CreateProjectSchema } from "@/lib/schema/ProjectSchema";
import { CreateProject } from "@/lib/types/ProjectTypes";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";


export const POST = async (req : NextRequest) => {
  try{
    const session = await getCurrentAdminSession();

    if(!session){
      return NextResponse.json({error: 'Unauthorized'}, {status: 401});
    }
    if(!session.user.isAdmin){
      return NextResponse.json({error: 'Forbidden'}, {status: 403});
    }

    const body = await req.json();

    const data: CreateProject = CreateProjectSchema.parse(body);

    console.log(data);
    return NextResponse.json(data, {status: 201});

  }catch(error: unknown){
    console.error('Error Creating Project', error);

    if(error instanceof z.ZodError){
      return NextResponse.json({error: error.message}, {status: 400});
    }

    return NextResponse.json({error: 'Internal Server Error'}, {status: 500});
  }
}