import {prisma} from "@repo/db/client"
import bcrypt from "bcrypt"
import { NextResponse } from "next/server"

export const GET = async()=>{
 const user=await prisma.user.create({
    data:{
        name:"nishu",
        number:"000000000",
        password:await bcrypt.hash("nishu",10)
    }
 })
 return NextResponse.json({
    message:"User created successfully",
    user
 })
}

