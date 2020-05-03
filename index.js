// Your code here
function saturdayFun(activity='roller-skate'){
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function (activity="go to the office") {
    return  `This Monday, I will ${activity}.`
}

let wrapAdjective = function(wrap='*'){
    return function(adjective = 'a hard worker'){
        return `You are ${wrap}${adjective}${wrap}!`
    }
}

const Calculator = {
    add: (num1, num2) => {
        return num1 + num2
    },
    subtract: (a, b) => {
        return a - b
    },
    multiply: (a,b) => {
        return a * b 
    },
    divide: (a,b) => {
        return a / b
    }
};

let actionApplyer = (start, ray) => {
    let a = start
  
    for (let i = 0; i < ray.length; i++ ){
      a = ray[i](a)
    }
    return a
  }