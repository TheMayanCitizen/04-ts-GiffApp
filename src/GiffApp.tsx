import { useState } from "react";
import { FormSearch } from "./components/FormSearch";
import { GiffCard } from "./components/GiffCard";

export const GiffApp = () => {
  const [giffList, setGiffList] = useState<string[]>([]);

  const getInputSearchInfo = (value: string) => {
    setGiffList([value, ...giffList]);
  };

  return (
    <>
      <h1>Awesome Giff App </h1>
      <FormSearch getInputSearchInfo={getInputSearchInfo} />

      {giffList.map((item, i) => (
        <GiffCard key={i} gif={item} />
      ))}
    </>
  );
};
