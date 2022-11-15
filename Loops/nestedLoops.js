count=1;
const Grid=[];

for(let i=1 ; i<9; i++){
    let row=[];
    for(let j=1 ; j<9; j++){
        
         let temp=count++;
         row.push(temp)
         }
      Grid.push(row)
    }
console.table(Grid);
