//A)
test("Testing balance greater than value", () => {
	const user: User = {
		name: "Joel",
		balance: 100
	};

	const result = performPurchase(user, 40);
	
	expect(result).toEqual({
		...user,
		balance: 60
	});
});

test("Testing balance greater than value", () => {
	const user: User = {
		name: "Joel",
		balance: 50
	};

	const result = performPurchase(user, 50);
	
	expect(result).toEqual({
		...user,
		balance: 0
	});
});

test("Testing balance greater than value", () => {
	const user: User = {
		name: "Joel",
		balance: 30
	};

	const result = performPurchase(user, 50);
	
	expect(result).not.toBeDefined();
});