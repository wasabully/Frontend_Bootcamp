/*
**Company** - класс описывающий IT компанию. Состоит из:
1. Св-ва:
- companyName
- currentProjects - текущий пулл проектов. Массив экземпляров класса Project
- completedProjects - пулл завершенных проектов. Массив экземпляров класса Project
- staff - весь пулл сотрудников компании. Это объект, у которого есть поля Developers, Managers. В этих полях лежат массивы экземпляров аналогичных классов.
2. Методы:
- addNewCompanyMember() - позволяет нанять нового сотрудника. В результате метода у выбранного сотрудника
должно смениться имя компании.
- addProject() - позволяет добавить проект в пулл текущих.
- getMembersQuantity() - позволяет получить кол-во сотрудников, работающих в данной компании
- completeProject(project) - позволяет закончить проект. В результате выполнения функции проект из currentProjects перемещается в completedProjects. У команды данного проекта должно увеличиться кол-во завершенных проектов.

1. Company (Класс описывает IT-компанию)
Свойства:
companyName — название компании (строка).
currentProjects — текущие проекты, массив экземпляров класса Project.
completedProjects — завершенные проекты, массив экземпляров класса Project.
staff — объект, содержащий сотрудников компании. Это объект с полями developers и managers, где:
developers — объект, содержащий два массива: для разработчиков фронтенда и бекенда (frontend и backend).
managers — массив экземпляров класса Manager.
Методы:
addNewCompanyMember(member) — метод для добавления нового сотрудника в компанию. Сотрудник может быть FrontendDeveloper, BackendDeveloper или Manager. В результате, сотруднику должно присваиваться название компании.
addProject(project) — метод для добавления нового проекта (экземпляра класса Project) в массив currentProjects.
getMembersQuantity() — метод возвращает общее количество сотрудников компании (сумма всех разработчиков и менеджеров).
completeProject(project) — метод перемещает проект из currentProjects в completedProjects. Количество завершенных проектов у членов команды увеличивается.
*/
class Company {
	constructor(companyName) {
		this.companyName = companyName;
		this.currentProjects = [];
		this.completedProjects = [];
		this.staff = {
			developers: {
				frontend: [],
				backend: [],
			},
			managers: [],
		};
	}

	addNewCompanyMember(member) {
		if (member instanceof FrontendDeveloper) {
			this.staff.developers.frontend.push(member);
		} else if (member instanceof BackendDeveloper) {
			this.staff.developers.backend.push(member);
		} else if (member instanceof Manager) {
			this.staff.managers.push(member);
		}
	}

	addProject(project) {
		if (project instanceof Project) {
			this.currentProjects.push(project);
		} else {
			console.log('err');
		}
	}

	getMembersQuantity() {
		return (
			this.staff.developers.frontend.length +
			this.staff.developers.backend.length +
			this.staff.managers.length
		);
	}

	//completeProject(project) — метод перемещает проект из currentProjects в completedProjects. Количество завершенных проектов у членов команды увеличивается.
	completeProject(project) {
		if (project instanceof Project) {
			const index = 
		}
	}
}
