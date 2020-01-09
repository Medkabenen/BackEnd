const request = require("supertest");

const server = require("./server.js");


describe("GET /", function () {
    it("should return a 200 OK", function () {
        // spin up the server
        return request(server)
            .get("/")
            .then(res => {
                expect(res.status).toBe(200);
            });
    });

    it("should return a JSON", function () {
        return request(server)
            .get("/")
            .then(res => {
                expect(res.type).toMatch(/json/i);
            });
    });


});
