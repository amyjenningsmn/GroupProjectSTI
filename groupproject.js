function Person(empName,empNumber,salaryPreBonus,employeeRank) {
  this.empName = empName;
  this.empNumber = empNumber
  this.salaryPreBonus = salaryPreBonus;
  this.employeeRank = employeeRank;
}

var atticus = new Person("Atticus", "2405", "47000", 3);
var jem = new Person("Jem", "62347", "63500", 4);
var boo = new Person("Boo", "11435", "54000", 3);
var scout = new Person("Scout", "6243", "74750", 5);

var employees = [atticus, jem, boo, scout];
// these will then be an array of objects


for ( var i = 0; i < employees.length; i++) {
  console.log(generating(employees[i]));
}

function calcBonus(person) {
  var name = person.empName;
  var employeeNumber = person.empNumber;
  var salary = parseInt(person.salaryPreBonus);
  var rating=person.employeeRank;

  var bonusPercent=0;

  switch(rating){
    case 3:
      bonusPercent=0.04;
      break;
    case 4:
      bonusPercent=0.06;
      break;
    case 5:
      bonusPercent=0.10;
      break;
    default:
      bonusPercent=0;
  }

if (person.empNumber.length == 4){
    bonusPercent+=0.05;
  }

  if(salary > 65000){
    bonusPercent-=0.01;
  }

  if(bonusPercent > 0.13){
    bonusPercent = 0.13;
  }

  return bonusPercent;
}

function generating(person){
  var salary=parseInt(person.salaryPreBonus);
  var bonusPercent=calcBonus(person);
  var displayPercentage=(bonusPercent*100) + "%";
  var totalBonus=Math.round(bonusPercent * salary);
  var totalComp=totalBonus + salary;
  var newArray=[];

  newArray.push(person.empName);
  newArray.push(displayPercentage);
  newArray.push(addMoneyLabels(totalComp));
  newArray.push(addMoneyLabels(totalBonus));

  return newArray;
}

function addMoneyLabels(numberThing) {
  return '$' + numberThing.toLocaleString();
}
