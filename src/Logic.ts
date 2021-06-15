interface User {
	name: string;
	page: string;
}

export default class Logic {
	private defaultPage: string;
	private errorPage: string;
	private userDB: Map<string, User>;

	constructor(defaultPage: string, errorPage: string) {
		this.defaultPage = defaultPage;
		this.errorPage = errorPage;
		this.userDB = new Map();
	}

	addUser(user: User) {
		if (user.name.includes(" ")) throw "Invalid User";
		if (user.page.includes(" ")) throw "Invalid Path";
		if (!user.page.startsWith("/")) throw "Invalid Path";
		this.userDB.set(user.name, user);
	}

	resolveUser(username: string | undefined) {
		if (!username) return this.defaultPage;

		const user = this.userDB.get(username);
		if (!user) return this.errorPage;

		return user;
	}
}
