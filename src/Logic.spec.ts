import Logic from "./Logic";

describe("Specification for test logic", function () {
	it("Serve default page when user us undefined", () => {
		const logic = new Logic("/default", "/error");
		const page = logic.resolveUser(undefined);
		expect(page).toBe("/default");
	});
	it("Serves error page when user isn't found", () => {
		const logic = new Logic("/default", "/error");
		const page = logic.resolveUser("missing");
		expect(page).toBe("/error");
	});
	it("Throws exception when adding user with invalid name format", () => {
		const logic = new Logic("/default", "/error");
		const addUserWithSpaces = () => {
			logic.addUser({ name: "User with spaces", page: "/" });
		};
		expect(addUserWithSpaces).toThrow("Invalid User");
	});
	it("Throws exception when adding user with invalid page format", () => {
		const logic = new Logic("/default", "/error");

		const addPathWithSpaces = () => {
			logic.addUser({ name: "user", page: "/path with spaces" });
		};
		expect(addPathWithSpaces).toThrow("Invalid Path");

		const addPathWithoutSlash = () => {
			logic.addUser({ name: "user", page: "pathWithoutSlash" });
		};
		expect(addPathWithoutSlash).toThrow("Invalid Path");
	});
});
