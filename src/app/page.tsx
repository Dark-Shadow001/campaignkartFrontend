import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import ServicesCarousel from "@/components/servicesCarousel";
import Team from "@/components/Team";
import Message from "@/components/Message";
import Testimonials from "@/components/Testimonials";
import { IServices } from "@/types";

async function getData() {
  try {
    const res = await fetch((`${process.env.NEXT_PUBLIC_DOMAIN}/api/services`),{ cache: "no-store" }); 
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    
    const apiResult = await res.json();
    const allServices = apiResult.allServices;
    if (allServices && allServices.length > 0) {
      return allServices;
    } // Additional logic for empty services can be here
  } catch (error: any) {
    // Handle unexpected errors
  }
}


export default async function Home() {
  const data: IServices[] = await getData();
  return (
    <div >
      <Hero />
      {data && data.length > 0 && <ServicesCarousel services={data} />}
      <About />
      { data && data.length > 0 && <Services services={data}  />}
      <Benefits />
      <Team />
      <Message />
      <Testimonials />
    </div>
  );
}
