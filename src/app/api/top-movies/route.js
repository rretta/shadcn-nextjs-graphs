import { NextResponse } from "next/server";


export async function GET() {


    console.log("HOLA")
    const apiKey = process.env.NEXT_PLUBIC_API_KEY;
    console.log('API Key:', apiKey);

    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 20 }, (_, i) => currentYear - i);

    try {
        const fetchTopMoviesByYear = async (year) => {
            const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&primary_release_year=${year}&sort_by=vote_average.desc&vote_count.gte=50`);
            const data = await response.json();
            console.log(`Top movies for year ${year}:`, data.results); // Verificar los datos obtenidos para cada año
            return data.results.slice(0, 10);
        };

        const topMovies = {};
        for (const year of years) {
            topMovies[year] = await fetchTopMoviesByYear(year);
        }

        return NextResponse.json(topMovies);

    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch top movies' });
    }



    // return NextResponse.json({
    //     student: "all student data"
    // })
}


