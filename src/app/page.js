import HomeHeader from './components/HomeHeader';
import Image from 'next/image';
import HomeSearch from './components/HomeSearch';




export default function Home() {

  return (
    <>
      <HomeHeader />
      <div className='flex flex-col items-center mt-28'>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
          alt='Google LOGO'
          width={300}
          height={100}
          priority //Resolved Warning
          style={{width: "auto"}} //Resolved Warning
        />
      </div>

      <HomeSearch />
    </>
  );
}
