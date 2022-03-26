var twoSum = function(numb, target) {
    for(let i=0; i<numb.length; i++) {
        for(let x=1; x<numb.length; x++){

            var sum = numb[i] + numb[x];

            if(i !== x && sum === target)
            return [i,x];
        }
    }
}


var numb = [2,5,8,7];
var target = 15;

const result = twoSum(numb, target);

console.log(result);