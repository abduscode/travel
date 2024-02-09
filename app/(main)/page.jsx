import { destinations } from "@/_data";
import BlogList from "@/components/main/BlogList";
import DestList from "@/components/main/DestList";
import Hero from "@/components/main/Hero";
import Reviews from "@/components/main/Reviews";
import SearchDes from "@/components/main/SearchDes";



export default async function Home() {

  const data = destinations

  
  return (
      <div>
        <Hero data={data}/>
        <SearchDes/>
        <DestList data={data}/>
        <Reviews/> 
        <BlogList/>
      </div>

  );
}
