

var schoolsRepository = (function () {
	
	var people = [];
	var students = [];
	var teachers = [];
	var schools = [];
	
	
	// class School----------------------------
	
	var School = {
		init: function (name, town) {
			this.name = name;
			this.town = town;
			this.classes = [];
		},
		
		addClass: function(schoolClass) {
			this.classes.push(schoolClass);
		}
		
	}
	
	
	
	// class SchoolClass-------------------------------------
	
	
	var SchoolClass = {
		
		init: function (name, capacity) {
			
			this.name = name;
			this.capacity = capacity;
			this.students = [];
			this.formTeacher = 'No formTeacher'
		},
		
		addStudent: function (student) {
			
			if (this.students.length == this.capacity) {
				alert('the class is full');
				
			} else {
				this.students.push(student);
			}
			
		},
		
		addTeacher: function (teacher) {
			
			if (this.formTeacher != 'No formTeacher') {
				alert('this class already has a form teacher');
				
			} else {
				this.formTeacher = teacher;
			}
			
		}
		
	}
	
	
	
	// class Person----------------------------
	
	var Person = {
	  init: function(fname, lname, age) {
		this.fname = fname;
		this.lname = lname;
		this.age = age;
	},
	  
	  introduce: function() {
		  var result = "Name: " + this.fname + " " + this.lname + ", ";
		  var prop;
		  for (prop in this) {
			if (this.hasOwnProperty(prop)) {
				 
				 if (prop == 'fname' || prop == 'lname') {
					 continue;
				 }
				 
				 result += prop + ': ' + this[prop] + ', ';
			}
		  }
		  return result;
	  }
	  
	};
	
	
	
	
	// class Student------------------------------------------
	
	var Student = Person.extend({
		init: function (fname, lname, age, grade) {
		
			Person.init.apply(this, arguments);
			this.grade = grade;

		},
			getGrade: function() {
			return this.grade;
		},
			introduce: function() {
			return Person.introduce.apply(this);
		}
	});
	
	// class Teacher------------------------------------------
	
	var Teacher = Person.extend({
		init: function (fname, lname, age, speciality) {

		    Person.init.apply(this, arguments);
		    this.speciality = speciality;
	    },
	  
	  introduce: function() {
		return Person.introduce.apply(this);
	  }
	});
	
	
	
	
	function addPerson(fname, lname, age) {
		var per = Object.create(Person);
		per.init(fname, lname, age);
		people.push(per);
		return per;
	}
	
	function addStudent(fname, lname, age, grade) {
		var stu = Object.create(Student);
		stu.init(fname, lname, age, grade)
		students.push(stu);
		return stu;
	}
	
	function addTeacher(fname, lname, age, speciality) {
		var te = Object.create(Teacher);
		te.init(fname, lname, age, speciality);
		teachers.push(te);
		return te;
	}
	
	function getClass(name, capacity) {
		var cl = Object.create(SchoolClass);
		cl.init(name, capacity);
		return cl;
	}
	
	function getSchool(name, town) {
		var sc = Object.create(School);
		sc.init(name, town);
		return sc;
	}
	
	
	
	
	
	
	return {
		addPerson: addPerson,
		addStudent: addStudent,
		addTeacher: addTeacher,
		getClass: getClass,
		getSchool: getSchool
	}
	
}());
