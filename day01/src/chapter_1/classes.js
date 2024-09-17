/*
У экземпляра класса должны присутствовать св-ва:
-name string.
-grade string Для простоты предположим, что система грейдов будет иметь значения от L1 до L4.
-hardSkills string[].
-company string.


Так же должны иметься три метода:

-changeCompany(newCompanyName) - сотрудник может сменить компанию, либо же просто уволиться.
-upGrade() - сотрудник может повысить квалификацию.
-addSkill(newSkillName) - сотрудник может дополнить список своих скиллов.
*/

// export
class Employee {
	constructor(name, grade, hardSkills, company) {
		this.name = name;
		this.grade = grade;
		this.hardSkills = hardSkills;
		this.company = company;
	}

	toString() {
		return `Name : ${this.name} Grade : ${this.grade} HardSkills : ${this.hardSkills} Company : ${this.company}`;
	}

	changeCompany(newCompanyName) {
		if (!newCompanyName) {
			this.company = null;
		} else {
			this.company = newCompanyName;
		}
	}

	upGrade() {
		if (this.grade === 'L1') {
			this.grade = 'L2';
		} else if (this.grade === 'L2') {
			this.grade = 'L3';
		} else if (this.grade === 'L3') {
			this.grade = 'L4';
		} else {
			console.log('max grade');
		}
	}

	addSkill(newSkillName) {
		if (!this.hardSkills.includes(newSkillName)) {
			this.hardSkills.push(newSkillName);
		}
	}
}

// export default Employee;
// проверка
const employee = new Employee('John', 'L1', ['JavaScript'], 'Google');

console.log(employee.toString());

employee.changeCompany('Microsoft');
console.log(employee.toString());
// Ожидаемый результат: "Name: John, Grade: L1, Skills: JavaScript, Company: Microsoft"

employee.upGrade();
console.log(employee.toString());
// Ожидаемый результат: "Name: John, Grade: L2, Skills: JavaScript, Company: Microsoft"

employee.addSkill('React');
console.log(employee.toString());
// Ожидаемый результат: "Name: John, Grade: L2, Skills: JavaScript, React, Company: Microsoft"

employee.upGrade();
console.log(employee.toString());
// Ожидаемый результат: "Name: John, Grade: L3, Skills: JavaScript, React, Company: Microsoft"

employee.upGrade(); // должно повысить до L4
employee.upGrade(); // должно вывести "Maximum grade reached"
console.log(employee.toString());
// Ожидаемый результат: "Name: John, Grade: L4, Skills: JavaScript, React, Company: Microsoft"
