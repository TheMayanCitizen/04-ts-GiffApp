import { FC, useState } from "react";

type Iprops = {
  getInputSearchInfo: (value: string) => void;
};

export const FormSearch: FC<Iprops> = ({ getInputSearchInfo }) => {
  const [inputSearch, setInputSearch] = useState<string>("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getInputSearchInfo(inputSearch);
    setInputSearch("");
  };

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputSearch(e.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Serach your favorite Giff"
        onChange={handleOnchange}
        value={inputSearch}
      />
    </form>
  );
};
