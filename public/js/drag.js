const AllowDrop = (e) => {
  e.preventDefault();
};

const Drag = (e) => {
  const ID = e.target.id;
  const title = e.target.children[0].innerHTML;
  const artist = e.target.children[1].innerHTML;

  e.dataTransfer.setData("ID", ID);
  e.dataTransfer.setData("title", title);
  e.dataTransfer.setData("artist", artist);
};

const Drop = (e) => {
  e.preventDefault();

  const ID = e.dataTransfer.getData("ID");
  const title = e.dataTransfer.getData("title");
  const artist = e.dataTransfer.getData("artist");
  const trackItem = document.createElement("input");

  trackItem.type = "text";
  trackItem.name = "tracks";
  trackItem.readOnly = true;
  trackItem.value = ID;
  trackItem.style.display = "none";

  const trackItemLabel = document.createElement("p");
  trackItemLabel.innerHTML = `${artist} - ${title}`;

  e.target.appendChild(trackItemLabel);
  e.target.appendChild(trackItem);
};
