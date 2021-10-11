export const getGifs = async (category) => {
  const GIF_URL = "api.giphy.com/v1/gifs/search";
  const apiKey = "Ph4pFgWwElK9iwz5toxhaFYs7MPsBZj9";
  const limit = 10;
  const URL = `https://${GIF_URL}?q=${encodeURI(
    category
  )}&limit=${limit}&api_key=${apiKey}`;

  const resp = await fetch(URL);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium?.url,
    };
  });
  return gifs;
};
