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

  CreateInputFromTrack(ID, title, artist);
};

const CreateInputFromTrack = (ID, title, artist) => {
  const trackItem = document.createElement("input");

  trackItem.type = "text";
  trackItem.name = "tracks";
  trackItem.readOnly = true;
  trackItem.value = ID;
  trackItem.style.display = "none";

  const label = document.createElement("span");
  label.innerHTML = `${artist} - ${title}`;

  const deleteButton = document.createElement("button");
  deleteButton.className = "btn-close";
  deleteButton.id = ID;

  deleteButton.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    HandleDelete(e.target);
  });

  const trackItemLabel = document.createElement("div");
  trackItemLabel.classList.add("d-flex", "justify-content-between");

  trackItemLabel.appendChild(label);
  trackItemLabel.appendChild(deleteButton);
  trackItemLabel.appendChild(trackItem);

  document.getElementById("tracks").appendChild(trackItemLabel);
};

const InitPlaylistTracks = (tracks) => {
  const playlistTracks = JSON.parse(tracks);

  playlistTracks.forEach((track) => {
    CreateInputFromTrack(track._id, track.title, track.artist);
  });
};

const HandleDelete = (button) => {
  document.getElementById("tracks").removeChild(button.parentNode);
};
