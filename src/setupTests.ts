import * as helpers from "./helpers";

jest.spyOn(helpers, "randomString").mockImplementation(() => "randomString");
