import { test, expect } from "@playwright/test";

const url = "https://reqres.in";
test.describe("API Request", () => {

  test("testing GET request", async ({ request }) => {
    const res = await request.get(`${url}/api/users/2`);
    // console.log(res, "response");
    expect(res.status()).toBe(200);
    const resBody = JSON.parse(await res.text());
    console.log(resBody, "response body");
    expect.soft(resBody.data.id, `Id should be ${resBody.data.id}`).toBe(3); //toBe(2)
    expect(resBody.data.email).toBe("janet.weaver@reqres.in");
  });

  test("testing POST request", async ({ request }) => {
    const res = await request.post(`${url}/api/user`, {
      data: {
        id: 222,
      },
    });
    console.log(res, "response");
    const resBody = JSON.parse(await res.text());
    console.log(resBody, "response body");
  });

  test("testing POST request for registration", async ({ request }) => {
    const res = await request.post(`${url}/api/register`, {
      data: {
        email: "eve.holt@reqres.in",
        password: "pistol",
      },
    });
    console.log(res, "response");
    const resBody = JSON.parse(await res.text());
    console.log(resBody, "response body");
    expect(resBody.id).toBe(4);
    expect(resBody.token).toBe('QpwL5tke4Pnpja7X4');
  });

  test('testing PUT request', async ({ request }) => {
    const res = await request.put(`${url}/api/users/2`, {
      data: {
        name: "morpheus",
        job: "zion resident"
      }
    });
    console.log(res, "response");
    const resBody = JSON.parse(await res.text());
    console.log(resBody, "response body");
    expect(res.status()).toBe(200);
    expect(resBody.name).toBe('morpheus');
    expect(resBody.job).toBe('zion resident');
  })

  test('testing DELETE request', async ({ request }) => {
    const res = await request.delete(`${url}/api/users/2`);
    console.log(res, "response");
    expect(res.status()).toBe(204);
  })
  test.only('testing PATCH request', async ({ request }) => {
    const res = await request.patch(`${url}/api/users/2`, {
      data: {
        name: "Tania",
      }
    });
    console.log(res, "response");
    expect(res.status()).toBe(200);
    const  resBody = JSON.parse(await res.text());
    console.log(resBody, "resBody");
    expect(resBody.name).toBe("Tania");
});
})
