let cells:HTMLCollectionOf<HTMLInputElement> = document.getElementsByClassName('cell');
let space_num:HTMLInputElement = document.getElementById('space_num')
let start_but:HTMLButtonElement = document.querySelector('.start')
let cells_mas:Array<HTMLInputElement> = [];
let member_mas_row:number[][] = [[],[],[],[],[],[],[],[],[]];
let member_mas_col:number[][] = [[],[],[],[],[],[],[],[],[]];

let check_mas:number[][]=[[],[],[],[],[],[],[],[],[]];

for(let cell of cells){
    cells_mas.push(cell);
}

function start(){
    
    
        for(let j=0; j<=8; j++){
            for(let i=0; i<=  8; i++){
                member_mas_row[j][i] =0
                member_mas_col[i][j] =0
                cells_mas[j*9+i].value='';
  
            }
        }
        for(let j=0; j<=8; j++){
            for(let i=0; i<=8; i++){
                if(j>=6){

                    if(i+1+j*3+2>9){
                        if(i+1+j*3+2-9 > 9){
                            if(i+1+j*3+2-9 > 9*2){
                                // cells_mas[j*9+i].value = `${i+1+j*3+2-9*3}`
                                member_mas_row[j][i] = i+1+j*3+2-9*3
                                member_mas_col[i][j] = i+1+j*3+2-9*3
                            }
                            else{
                                // cells_mas[j*9+i].value = `${i+1+j*3+2-9*2}`
                                member_mas_row[j][i] = i+1+j*3+2-9*2
                                member_mas_col[i][j] = i+1+j*3+2-9*2
                            }
                                
                        }
                        else{
                            // cells_mas[j*9+i].value = `${i+1+j*3+2-9}`
                            member_mas_row[j][i] = i+1+j*3+2-9
                            member_mas_col[i][j] = i+1+j*3+2-9
                        }
                        
                    }
                    else{
                        // cells_mas[j*9+i].value = `${i+1+j*3+2}`
                        member_mas_row[j][i] = i+1+j*3+2
                        member_mas_col[i][j] = i+1+j*3+2
                    }


                }
                else if(j>=3 && j<6){

                    if(i+1+j*3+1>9){
                        if(i+1+j*3+1-9 > 9){
                            if(i+1+j*3+1-9 > 9*2){
                                // cells_mas[j*9+i].value = `${i+1+j*3+1-9*3}`
                                member_mas_row[j][i] = i+1+j*3+1-9*3
                                member_mas_col[i][j] = i+1+j*3+1-9*3
                            }
                            else{
                                // cells_mas[j*9+i].value = `${i+1+j*3+1-9*2}`
                                member_mas_row[j][i] = i+1+j*3+1-9*2
                                member_mas_col[i][j] = i+1+j*3+1-9*2
                            }
                                
                        }
                        else{
                            // cells_mas[j*9+i].value = `${i+1+j*3+1-9}`
                            member_mas_row[j][i] = i+1+j*3+1-9
                            member_mas_col[i][j] = i+1+j*3+1-9
                        }
                        
                    }
                    else{
                        // cells_mas[j*9+i].value = `${i+1+j*3+1}`
                        member_mas_row[j][i] = i+1+j*3+1
                        member_mas_col[i][j] = i+1+j*3+1
                    }


                }
                else{

                    if(i+1+j*3>9){
                        if(i+1+j*3-9 > 9){
                            if(i+1+j*3-9 > 9*2){
                                // cells_mas[j*9+i].value = `${i+1+j*3-9*3}`
                                member_mas_row[j][i] = i+1+j*3-9*3
                                member_mas_col[i][j] = i+1+j*3-9*3
                            }
                            else{
                                // cells_mas[j*9+i].value = `${i+1+j*3-9*2}`
                                member_mas_row[j][i] = i+1+j*3-9*2
                                member_mas_col[i][j] = i+1+j*3-9*2
                            }
                                
                        }
                        else{
                            // cells_mas[j*9+i].value = `${i+1+j*3-9}`
                            member_mas_row[j][i] = i+1+j*3-9
                            member_mas_col[i][j] = i+1+j*3-9
                        }
                        
                    }
                    else{
                        // cells_mas[j*9+i].value = `${i+1+j*3}`
                        member_mas_row[j][i] = i+1+j*3
                        member_mas_col[i][j] = i+1+j*3
                    }

                }
        }
    
    }
    let random_line:number=1;
    let swap_line:number[];

    function random_row(){
        random_line = Math.floor(Math.random()*9)
        if((random_line+1)%3===0){
            let random_line_swap:number= Math.round(Math.random()+1)
            swap_line = member_mas_row[random_line];
            member_mas_row[random_line] = member_mas_row[random_line-random_line_swap]
            member_mas_row[random_line-random_line_swap]=swap_line  
        }
        else if((random_line+1)%3===2){
            let random_line_swap:number= Math.pow((-1),Math.round(Math.random()+1) )
            swap_line = member_mas_row[random_line];
            member_mas_row[random_line] = member_mas_row[random_line-random_line_swap]
            member_mas_row[random_line-random_line_swap]=swap_line  
        }
        else if((random_line+1)%3===1){
            let random_line_swap:number= Math.round(Math.random())
            swap_line = member_mas_row[random_line];
            member_mas_row[random_line] = member_mas_row[random_line+random_line_swap]
            member_mas_row[random_line+random_line_swap]=swap_line  
        }
        for(let j=0; j<=8; j++){
            for(let i=0; i<=  8; i++){
                member_mas_col[i][j]=member_mas_row[j][i] ;
            }
        }
    }

    function random_col(){
        random_line = Math.floor(Math.random()*9)
        if((random_line+1)%3===0){
            let random_line_swap:number= Math.round(Math.random()+1)
            swap_line = member_mas_col[random_line];
            member_mas_col[random_line] = member_mas_col[random_line - random_line_swap]
            member_mas_col[random_line - random_line_swap]=swap_line  
        }
        else if((random_line+1)%3===2){
            let random_line_swap:number= Math.pow((-1),Math.round(Math.random()+1) )
            swap_line = member_mas_col[random_line];
            member_mas_col[random_line] = member_mas_col[random_line - random_line_swap]
            member_mas_col[random_line - random_line_swap]=swap_line  
        }
        else if((random_line+1)%3===1){
            let random_line_swap:number= Math.round(Math.random())
            swap_line = member_mas_col[random_line];
            member_mas_col[random_line] = member_mas_col[random_line + random_line_swap]
            member_mas_col[random_line + random_line_swap]=swap_line  
        }
        for(let j=0; j<=8; j++){
            for(let i=0; i<=  8; i++){
                member_mas_row[j][i]=member_mas_col[i][j] ;
            }
        }
    }

    for(let i=0; i<100;i++){
        random_col();
        random_row();
        
        
    }

    for(let j=0; j<=8; j++){
        for(let i=0; i<=  8; i++){
            check_mas[i][j]=member_mas_row[j][i] ;
        }
    }
    let new_col_mas:number[][];
    new_col_mas = member_mas_col
   
   

    function space(num:number){
        for(let i=0; i<num; i++){
            let random_rowcell:number = Math.floor(Math.random()*8)
            let random_colcell:number = Math.floor(Math.random()*8)
            new_col_mas[random_rowcell][random_colcell] = 0

        }
    }
    space(Number(space_num.value));
    
    for(let j=0; j<=8; j++){
        for(let i=0; i<=  8; i++){
            if(new_col_mas[j][i]===0){
                cells_mas[j*9+i].value=""
            }else{ 
                cells_mas[j*9+i].value=`${new_col_mas[j][i] }`;
            }
           
        }
    }
    
    
}  

function check(){
    let wrong_empty:number=0
    for(let cell of cells){
        cell.toggleAttribute("readonly");
    }
    start_but.toggleAttribute("disabled")
    for(let j=0; j<=8; j++){
        for(let i=0; i<=  8; i++){
            if(Number(cells_mas[j*9+i].value)===0){
                cells_mas[j*9+i].classList.toggle("empty")
                wrong_empty++
            }
            else if(Number(cells_mas[j*9+i].value)===check_mas[j][i]){
                cells_mas[j*9+i].classList.toggle("right")
            } 
            else if(Number(cells_mas[j*9+i].value)!=check_mas[j][i]){
                cells_mas[j*9+i].classList.toggle("wrong")
                wrong_empty++

            }
            

        }
    }
    if(wrong_empty===0){
        alert("Victory!!!!")
    }
  
}