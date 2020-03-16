
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

    //1. Where user score above 12
    for(var i = 0; i< userScore.length;i++){
        if (userScore[i].score > 12) {
            console.log(userScore[i]);
            
        }
    }
   if(userScore[0].score && userScore[1].score && userScore[2].score > 12){
    console.log();
   }
    
    //2.  to sort
    
   userScore.sort((a,b) => {
       if(a.score > b.score){
           return 1 
       }else{
           return -1
       }
   })
   console.log(userScore);
   
   //3. looping through the array
   for(var i=1; i < userScore.length; i++){
       console.log(userScore[i]);
       
   }
    
    //4. sum the total score
    var sum = userScore[0].score + userScore[1].score + userScore[2].score;
    console.log(sum);

    //5. merge
    var newUserscore
    newUserscore = [
        
            {id: 5, name: 'wale', score: 34},  
            {id: 6, name: 'wole', score: 12},  
            {id: 4, name: 'bobby', score: 27}
    ];
        var merge = userScore.concat(newUserscore);
        console.log(merge);
        
    
    
 