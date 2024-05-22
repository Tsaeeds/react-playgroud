let student = {
	details: function (section, rollnum) {
		return this.name + this.class
			+ " " + section + rollnum;
	}
}
let stud1 = {
	name: "Dinesh",
	class: "11th",
}
let stud2 = {
	name: "Vaibhav",
	class: "11th",
}

let x = student.details.apply(stud2, ["A", "24"]);
console.log(x);
