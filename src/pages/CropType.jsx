import React, { useState, useEffect } from "react";
// import { getCropType } from "../api/CropType";

import Table from "../components/Table";

const CropType = () => {
  const [CropType, setCropType] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const CropTypeData = await getCropType();
        console.log("Data CropType: ", {
          CropTypeData,
        });

        setCropType(CropTypeData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return  <>
  <Table headers={["id","name",]} 
  data={CropType} /></>;
  
};

export default CropType;