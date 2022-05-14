const expect = require("chai").expect;
var getTracksMW = require("../../middleware/tracks/getTracksMW");

describe("getTracksMW", () => {
  it("should return all tracks", async () => {
    const req = {};
    const res = {
      locals: {},
    };

    const next = (err) => {
      expect(res.locals.tracks).to.eql(["Track1", "Track2"]);
      expect(err).to.eql(undefined);
    };

    const objRepo = {
      trackModel: {
        find: (filter) => {
          return ["Track1", "Track2"];
        },
      },
    };

    await getTracksMW(objRepo)(req, res, next);
  });

  it("should return error when a DB error occurs", async () => {
    const req = {};
    const res = {};

    const next = (err) => {
      expect(err.message).to.eql(
        "An error occurred while trying to process your request"
      );
    };

    const objRepo = {
      trackModel: {
        find: (filter) => {
          throw new Error(
            "An error occurred while trying to process your request"
          );
        },
      },
    };

    await getTracksMW(objRepo)(req, res, next);
  });
});
