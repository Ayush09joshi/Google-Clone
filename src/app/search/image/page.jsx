import ImageSearchResults from '@/app/components/ImageSearchResults';
import Link from 'next/link';

export default async function ImageSearchPage({ searchParams }) {
    const startIndex = searchParams.start || '1';
    const response = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=AIzaSyA55hVLTLELzatpnpUX6N5PRycqY8wpK78&cx=f74080574d34a4b29&q=${searchParams.searchTerm}'}&searchType=image&start=${startIndex}`
    );
    if (!response.ok) throw new Error('Something went wrong');
    const data = await response.json();
    const results = data.items;

    if (!results) {
        return (
            <div className='flex flex-col justify-center items-center pt-10'>
                <h1 className='text-3xl mb-4'>
                    No results found for {searchParams.searchTerm}
                </h1>
                <p className='text-lg'>
                    Try searching the web or images for something else{' '}
                    <Link href='/' className='text-blue-500'>
                        Home
                    </Link>
                </p>
            </div>
        );
    }

    return <div>{results && <ImageSearchResults results={data} />}</div>;
}