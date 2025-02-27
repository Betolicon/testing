const calculator = {
    add: function (num1, num2){
        return typeof num1 === 'number' && typeof num2 === 'number' ? num1 + num2 : 'You have not entered a number'
    },

    substract: function(num1, num2){
        return typeof num1 === 'number' && typeof num2 === 'number' ? num1 - num2 : 'You have not entered a number'
    },

    multiply: function (num1, num2){
        return typeof num1 === 'number' && typeof num2 === 'number' ? num1 * num2 : 'You have not entered a number'
    },

    divide: function (num1, num2){
        if (typeof num1 !== 'number' || typeof num2 !== 'number')
            return 'You have not entered a number'
        if (num2 === 0 )
            return 'A division by 0 cannot be solved'
        return num1 / num2  
    }
}

module.exports = calculator