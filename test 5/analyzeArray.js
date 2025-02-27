function analyzeArray(array) {
    const average = () =>{
        if(length() == 0)
            return 0
        let sum = 0;
        for(let i=0; i<length(); i++)
            sum += array[i]
        return sum / length();
    }

    const min = () =>{
        if(length() == 0)
            return 0
        return Math.min.apply(null, array);        
    }

    const max = () =>{
        if(length() == 0)
            return 0
        return Math.max.apply(null, array);        
    }

    const length = () =>{
        return array.length;
    }
    
    return{
        get average(){
            return average()
        },
        get min(){
            return min()
        },
        get max(){
            return max()
        },
        get length(){
            return length()
        }
    }
}

module.exports = analyzeArray