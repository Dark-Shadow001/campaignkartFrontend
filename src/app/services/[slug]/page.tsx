"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import fetchServices from "@/apiHelper/fetchServices";
import ServicesDetails from "@/components/ServicesDetails";
import { IServices } from "@/types";
import CircularProgress from '@mui/material/CircularProgress';

const ServicesRoute = ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const [data, setData] = useState<IServices | null>(null);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
      const response = await fetchServices({slug:params.slug});
      setData(response.data?.allServices[0]);
      setLoading(false)
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data, 'DATA')

  if (!data && loading)
  return (
<div className="w-full flex justify-center items-center ">
    <div className="h-screen flex items-center">
      <CircularProgress/>
    </div>
</div>
    )

  if(data)
  return <div>
    <ServicesDetails data={data} />
    
  </div>;

};

export default ServicesRoute;
