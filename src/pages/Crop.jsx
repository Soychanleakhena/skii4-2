
import React, { useState, useEffect } from "react";
import Table from "../components/Table";
import { getCrop } from "../api/crop";
// import "../styles/Table.css";


export const Crop = () => {
  const [Crop, setCrop] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCrop();
        console.log("Data fetched:", data);

        const data1 = data.map((item) => {
          return {
            id: item.id,
            name: item.name,
            crop_type_name: item.crop_type.name,
            
          };
        });
        console.log(data1);

        setCrop(data1);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      
      <Table
        headers={[
          "id",
          "name",
          "crop_type",
          
        ]}
        data={Crop}
      />
    </>
  );
};

export default Crop;
