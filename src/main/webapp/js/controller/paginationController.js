
app.controller('paginationController',function () {
	this.kata = "mallik";
	this.mk="jiyo";
   var nameList = ['Mallik', 'Reshma', 'Pravallika', 'Sushma', 'Arjun'],
        familyName = ['Dontamsetti', 'Sayad', 'Kappra', 'Chundru', 'Dontamsetti'];

    function createRandomItem() {
        var firstName = nameList[Math.floor(Math.random() * 4)],
            lastName = familyName[Math.floor(Math.random() * 4)],
            age = Math.floor(Math.random() * 100) + 19,
            email = firstName + lastName + '@whatever.com',
            balance = Math.random() * 3000;

        return{
            firstName: firstName,
            lastName: lastName,
            age: age,
            email: email,
            balance: balance
        };
    }

		this.itemsByPage=15;

    this.rowCollection = [];
    for (var j = 0; j < 20; j++) {
        this.rowCollection.push(createRandomItem());
    }
});