
var numbers = [1,2,3,4,5,6,7,8,9,10]

var evens = numbers.filter(function(x) {
   return x % 2 == 0;
 });
 console.log(evens);


 //4
 
 const userScore = [  
{
    id: 1, 
    name: 'Olarike',
    score: 34
    },  
{
    id: 2, 
    name: 'Taiwo', 
    score: 12
},  
{
    id: 3, 
    name: 'Kehinde',
     score: 27
    } 
    ];

    
    //to sort
    userScore.sort([].score);
    userScore.reverse([].score);

    //sum the total score
    var sum = userScore[0].score + userScore[1].score + userScore[2].score;
    console.log(sum);

    //merge
    var userScore = newUserscore
    newUserscore.push(
        
            {id: 5, name: 'wale', score: 34},  
            {id: 6, name: 'wole', score: 12},  
            {id: 4, name: 'bobby', score: 27}
    )
    console.log(newUserscore);
    
    
 