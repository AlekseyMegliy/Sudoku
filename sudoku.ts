let cells = document.getElementsByTagName('input');
let cells_mas:Array<any> = [];
let member_mas:Array<number> = [];


for(let cell of cells){
        cells_mas.push(cell);
    }
function start(){
    cells_mas[0].value=`${Math.floor(Math.random() * 9 + 1) }`
    // for(let j =0; j<= 8; j++){
    //     cells_mas[j*9].value=`${Math.floor(Math.random() * 9 + 1) }`
        for(let i =0; i<=  8; i++){
            function calc(){
                let new_value:number =Math.floor(Math.random() * 9 + 1);
                if(member_mas.includes(new_value) ){
                    calc()
                } else{
                    cells_mas[i].value = `${new_value}`
                    member_mas.push(new_value)
                    
                } 
                }
                calc();  

            // if(i== 1){
            //     function calc(){
            //     let new_value:number =Math.floor(Math.random() * 9 + 1);
            //     if(Number(cells_mas[i-1].value) === new_value ){
            //         calc()
            //     } else{
            //         cells_mas[i].value = `${new_value}`
            //         member_mas.push(new_value)
            //     } 
            //     }
            //     calc();  
            // }
            // if(i== 2){
            //     function calc(){
            //     let new_value:number =Math.floor(Math.random() * 9 + 1);
            //     if(Number(cells_mas[i-1].value) === new_value || Number(cells_mas[i-2].value) === new_value ){
            //         calc()
            //     } else{
            //         cells_mas[i].value = `${new_value}`
            //         member_mas.push(new_value)
            //     } 
            //     }
            //     calc();  
            // }
            // if(i== 3){
            //     function calc(){
            //     let new_value:number =Math.floor(Math.random() * 9 + 1);
            //     if(Number(cells_mas[i-1].value) === new_value || Number(cells_mas[i-2].value) === new_value || Number(cells_mas[i-3].value) === new_value ){
            //         calc()
            //     } else{
            //         cells_mas[i].value = `${new_value}`
            //         member_mas.push(new_value)
            //     } 
            //     }
            //     calc();  
            // }
            // if(i== 4){
            //     function calc(){
            //     let new_value:number =Math.floor(Math.random() * 9 + 1);
            //     if(Number(cells_mas[i-1].value) === new_value || Number(cells_mas[i-2].value) === new_value || Number(cells_mas[i-3].value) === new_value || Number(cells_mas[i-4].value) === new_value){
            //         calc()
            //     } else{
            //         cells_mas[i].value = `${new_value}`
            //         member_mas.push(new_value)
            //     } 
            //     }
            //     calc();  
            // }
            // if(i== 5){
            //     function calc(){
            //     let new_value:number =Math.floor(Math.random() * 9 + 1);
            //     if(Number(cells_mas[i-1].value) === new_value || Number(cells_mas[i-2].value) === new_value || Number(cells_mas[i-3].value) === new_value || Number(cells_mas[i-4].value) === new_value || Number(cells_mas[i-5].value) === new_value){
            //         calc()
            //     } else{
            //         cells_mas[i].value = `${new_value}`
            //         member_mas.push(new_value)
            //     } 
            //     }
            //     calc();  
            // }
            // if(i== 6){
            //     function calc(){
            //     let new_value:number =Math.floor(Math.random() * 9 + 1);
            //     if(Number(cells_mas[i-1].value) === new_value || Number(cells_mas[i-2].value) === new_value || Number(cells_mas[i-3].value) === new_value || Number(cells_mas[i-4].value) === new_value || Number(cells_mas[i-5].value) === new_value  || Number(cells_mas[i-6].value) === new_value){
            //         calc()
            //     } else{
            //         cells_mas[i].value = `${new_value}`
            //         member_mas.push(new_value)
            //     } 
            //     }
            //     calc();  
            // }
            // if(i== 7){
            //     function calc(){
            //     let new_value:number =Math.floor(Math.random() * 9 + 1);
            //     if(Number(cells_mas[i-1].value) === new_value || Number(cells_mas[i-2].value) === new_value || Number(cells_mas[i-3].value) === new_value || Number(cells_mas[i-4].value) === new_value || Number(cells_mas[i-5].value) === new_value  || Number(cells_mas[i-6].value) === new_value  || Number(cells_mas[i-7].value) === new_value){
            //         calc()
            //     } else{
            //         cells_mas[i].value = `${new_value}`
            //         member_mas.push(new_value)
            //     } 
            //     }
            //     calc();  
            // }
            // if(i== 8){
            //     function calc(){
            //     let new_value:number =Math.floor(Math.random() * 9 + 1);
            //     if(Number(cells_mas[i-1].value) === new_value || Number(cells_mas[i-2].value) === new_value || Number(cells_mas[i-3].value) === new_value || Number(cells_mas[i-4].value) === new_value || Number(cells_mas[i-5].value) === new_value  || Number(cells_mas[i-6].value) === new_value  || Number(cells_mas[i-7].value) === new_value || Number(cells_mas[i-8].value) === new_value){
            //         calc()
            //     } else{
            //         cells_mas[i].value = `${new_value}`
            //         member_mas.push(new_value)
            //     } 
            //     }
            //     calc();  
            // }
            
        }
        for(let o = 1;o<=9;o++){
            for(let j=1; j<=8; j++){
                if(j== 1){
                    function calc_col(){
                    let new_value:number =Math.floor(Math.random() * 9 + 1);
                    if(Number(cells_mas[j*o*9-1].value) === new_value || Number(cells_mas[j*o*9-9].value) === new_value ){
                        calc_col()
                    } else{
                        cells_mas[j*9].value = `${new_value}`
                        member_mas.push(new_value)
                    } 
                    }
                    calc_col();  
                }
            }
        }
        
    // }
   alert(member_mas)
    
}
function check(){
    alert(cells_mas[0].value)
}
    