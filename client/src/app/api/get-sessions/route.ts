import { NextResponse } from "next/server";

export async function GET() {
  const url = `${process.env.PRIVATE_API_URL}/api/strapi-chat/get-all-sessions`;
  const token = process.env.PRIVATE_API_TOKEN;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      cache: "no-cache",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data from API");
    }

    const json = await response.json();
    console.log(json);
    
return NextResponse.json(json);

  } catch (error) {
    console.error(error);
  }
}



