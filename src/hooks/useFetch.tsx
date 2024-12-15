import { useEffect, useState } from "react";
import { getGiffs } from "../../helpers/getGiffs";

type GiffProps = {
  id: string;
  title: string;
  img: string;
};

export const useFetch = (gif: string) => {
  const [giffDataList, setGiffDataList] = useState<GiffProps[]>([]);

  const handleGetGiffs = async () => {
    const gifData = await getGiffs(gif);
    setGiffDataList(gifData);
  };

  useEffect(() => {
    handleGetGiffs();
  }, [gif]);

  return { giffDataList };
};
