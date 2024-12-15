import { useFetch } from "../hooks/useFetch";
import { GiffContainer } from "./GiffContainer";

type Iprops = {
  gif: string;
};

export const GiffCard = ({ gif }: Iprops) => {
  const { giffDataList } = useFetch(gif);

  return (
    <>
      <h2>{gif.toUpperCase()}</h2>
      <div className="card-grid">
        {giffDataList.map((item) => (
          <GiffContainer key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};

// export const Phrase: React.FC<PhraseProps> = ({ quote })
// export const BtnPhrase = ({ nextPhrase }: NextPhraseFunc)
// export const FormSearch: FC<Iprops> = ({ getInputSearchInfo })