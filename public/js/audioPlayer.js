const StartAudioPlayer = (URL, artist, title) => {
  document.getElementById("audioPlayer").src = ToEmbeddedLink(URL);
  document.getElementById("title").innerHTML = `${artist} - ${title}`;
};

const ToEmbeddedLink = (URL) => {
  const skip = "https://www.youtube.com/watch?v=";
  const ID = URL.substring(skip.length);

  return `https://www.youtube.com/embed/${ID}?autoplay=1`;
};
