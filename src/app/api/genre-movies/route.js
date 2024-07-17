

import { NextResponse } from "next/server";

export async function GET() {
    const apiKey = process.env.NEXT_PLUBIC_API_KEY;
    try {
        const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return NextResponse.json(data.genres);

    } catch (error) {
        console.error('Error fetching dataa:', error);
        res.status(500).json({ error: 'Failed to fetch genre list' });
    }
}
