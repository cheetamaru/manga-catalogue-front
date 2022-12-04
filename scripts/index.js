const path = require("path");
const { generateApi } = require("swagger-typescript-api");
const { config } = require("dotenv");

const ENV_KEY = "URL_SWAGGER_JSON_TYPES";
const envConfig = config({ path: ".env" });

if (envConfig.error) {
  throw new Error("Can`t parse .env config");
}

const createParams = (url) => {
  return {
    name: "Types.ts",
    output: path.resolve(process.cwd(), "./src/types"),
    url,
    generateClient: false,
    httpClientType: "fetch",
  };
};

const main = () => {
  const url = process.env[ENV_KEY];
  if (!url) {
    throw new Error(`Please add ${ENV_KEY} variable to env`);
  }
  return generateApi(createParams(url));
};

main();
