const expect = require("chai").expect;
const getPlaylistsMW = require("../../middleware/playlists/getPlaylistsMW");

describe("getPlaylistsMW", () => {
  it("should return all playlists", async () => {
    const req = {};
    const res = {
      locals: {},
    };

    const next = (err) => {
      expect(res.locals.playlists).to.eql(["Playlist1", "Playlist2"]);
      expect(err).to.eql(undefined);
    };

    const objRepo = {
      playlistModel: {
        find: (filter) => {
          return ["Playlist1", "Playlist2"];
        },
      },
    };

    await getPlaylistsMW(objRepo)(req, res, next);
  });

  it("should return error when a DB error occurs", async () => {
    const req = {};
    const res = {
      locals: {},
    };

    const next = (err) => {
      expect(res.locals.playlist).to.eql(undefined);
      expect(err).not.to.eql(undefined);
      expect(err.message).to.eql(
        "An error occurred while trying to process your request"
      );
    };

    const objRepo = {
      playlistModel: {
        find: (filter) => {
          throw new Error(
            "An error occurred while trying to process your request"
          );
        },
      },
    };

    await getPlaylistsMW(objRepo)(req, res, next);
  });
});
