

var schoolsRepository = (function () {
	
	var people = [];
	var students = [];
	var teachers = [];
	var schools = [];
	
	
	// class School----------------------------
	
	var School = Class.create({
		init: function (name, town) {
			this.name = name;
			this.town = town;
			this.classes = [];
		},
		
		addClass: function(schoolClass) {
			this.classes.push(schoolClass);
		}
		
	})
	
	
	
	// class SchoolClass-------------------------------------
	
	
	var SchoolClass = Class.create({
		
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
		
	})
	
	
	
	// class Person----------------------------
	
	var Person = Class.create({
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
	  
	});
	
	
	
	
	// class Student------------------------------------------
	
	var Student = Class.create({
		init: function (fname, lname, age, grade) {
		
			this._super.init(fname, lname, age);
			this.grade = grade;

		},
			getGrade: function() {
			return this.grade;
		},
			introduce: function() {
			return this._super.introduce() + "grade: " + this.grade;
		}
	});
	
	// class Teacher------------------------------------------
	
	var Teacher = Class.create({
		init: function (fname, lname, age, speciality) {

		    this._super.init(fname, lname, age);
		    this.speciality = speciality;
	    },
	  
	  introduce: function() {
		return this._super.introduce() + "specialty: " + this.speciality;
	  }
	});
	
	
	Student.inherit(Person);
	Teacher.inherit(Person);
	
	
	
	
	
	
	function addPerson(fname, lname, age) {
		var per = new Person(fname, lname, age);
		people.push(per);
		return per;
	}
	
	function addStudent(fname, lname, age, grade) {
		var stu = new Student(fname, lname, age, grade);
		students.push(stu);
		return stu;
	}
	
	function addTeacher(fname, lname, age, speciality) {
		var te = new Teacher(fname, lname, age, speciality);
		teachers.push(te);
		return te;
	}
	
	function getClass(name, capacity) {
		var cl = new SchoolClass(name, capacity);
		return cl;
	}
	
	function getSchool(name, town) {
		var sc = new School(name, town);
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
