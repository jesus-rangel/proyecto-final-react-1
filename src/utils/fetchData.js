export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "870810dd6cmshf66fa5444349d86p11a78bjsn25aa11e42036",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "870810dd6cmshf66fa5444349d86p11a78bjsn25aa11e42036",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
