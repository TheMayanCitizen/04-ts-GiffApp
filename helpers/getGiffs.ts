export const getGiffs = async (giffWanted: string) => {
  const res = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=M6jZBW6hoZsUUtJ6B7nHAQwz6tyQe6Pu&q=${giffWanted}&limit=5`
  );

  const { data } = await res.json();
  const info = data.map((item: any) => ({
    id: item.id,
    title: item.title,
    img: item.images.downsized_medium.url,
  }));

  return info;
  // return data;
  // console.log(data);
};
