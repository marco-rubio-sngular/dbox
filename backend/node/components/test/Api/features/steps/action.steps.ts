import assert from "assert";
import request from "supertest";
import { MainApp } from "../../../../src/MainApp";
const { Given, Then, AfterAll, BeforeAll } = require("@cucumber/cucumber");

let application: MainApp;
let _request: request.Test;
let _response: request.Response;

Given("I send a GET request to {string}", (route: string) => {
  _request = request(application.httpServer).get(route);
});

Then("the response status code should be {int}", async (status: number) => {
  _response = await _request.expect(status);
});

Given(
  "I send a PUT request to {string} with body:",
  (route: string, body: string) => {
    _request = request(application.httpServer)
      .put(route)
      .send(JSON.parse(body));
  }
);

Then("the response should be empty", () => {
  assert.deepStrictEqual(_response.body, {});
});

BeforeAll(async () => {
  application = new MainApp();
  await application.start();
});

AfterAll(async () => {
  await application.stop();
});
