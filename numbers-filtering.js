
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
   var new_score = userScore.filter(function(a){
        if(a > 12)
       console.log(new_score);
        
    });
   
    
    //2.  to sort
    
   userScore.sort(function(a,b) {
      return b.score - a.score;
       
  })
   console.log(userScore);
  
   
   
   
   //3. looping through the array
   userScore.map(function(item, index) {
    item.index = index + 1;  
   });
   console.log(userScore);
   
    
    

    //5. merge
    var newUserscore
    newUserscore = [
        
            {id: 5, name: 'wale', score: 34},  
            {id: 6, name: 'wole', score: 12},  
            {id: 4, name: 'bobby', score: 27}
    ];
        var merge = userScore.concat(newUserscore);
        console.log(merge);
        
    
    
 