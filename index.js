// Your code here
function createEmployeeRecord(arr) { 
  return { 
    firstName: arr[0],
    familyName: arr [1],
    title: arr [2],
    payPerHour: arr [3],
    timeInEvents: [], 
    timeOutEvents: []
  } 
} 

function createEmployeeRecords(arr) {
    let newArr = []
    arr.map((employee) => {
        newArr.push(createEmployeeRecord(employee))
  })
  return newArr
}

function createTimeInEvent (employee, dateStamp) {
    let timeIn = {
        type: "TimeIn",
        hour: parseInt(dateStamp.split(" ")[1]),
        date: dateStamp.split(" ")[0]
  }
  employee.timeInEvents.push(timeIn)
  return employee
}

function createTimeOutEvent (employee, dateStamp) { 
  let timeOut = { 
    type: "TimeOut", 
    hour: parseInt(dateStamp.split(" ")[1]),
    date: dateStamp.split(" ")[0]
  } 
  employee.timeOutEvents.push(timeOut)
  return employee 
} 

function hoursWorkedOnDate (employee, date) {
    let startHour = employee.timeInEvents.find(event => event.date === date).hour
    let endHour = employee.timeOutEvents.find(event => event.date === date).hour
    let hours = (endHour - startHour)  100
    return hours
} 
