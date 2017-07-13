let scott = {
	name: "Scott",
	friends: ["Pep", "Rocky", "Jay"],
	printFriends() {
		this.friends.forEach(f =>
			console.log(this.name + " knows " + f));
	}
}
scott.printFriends();