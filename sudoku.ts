let cells = document.getElementsByTagName('input');
let cells_mas:Array<any> = [];
let member_mas_row:number[][] = [[],[],[],[],[],[],[],[],[]];
let member_mas_col:number[][] = [[],[],[],[],[],[],[],[],[]];
// let minitab_mas:number[][] = [];


for(let cell of cells){
    cells_mas.push(cell);
}
function clearing(){
    console.log(member_mas_row.length)
    for(let j=0; j<=8; j++){
        for(let i=0; i<=  8; i++){
            member_mas_row[j][i] =0
            member_mas_col[i][j] =0
            cells_mas[j*9+i].value='';
            console.log(i)
        }
    }
}

function start(){

// cells_mas[0].value=`${Math.floor(Math.random() * 9 + 1) }`;
// member_mas_row[0][0]=Number(cells_mas[0].value);
    for(let j=0; j<=8; j++){
        for(let i=0; i<=8; i++){
            function calc(){
                let new_value:number =Math.floor(Math.random() * 9 + 1);
                if(member_mas_row[j].includes(new_value) || member_mas_col[i].includes(new_value)){
                    calc()
                } else{
                    cells_mas[j*9+i].value = `${new_value}`
                    member_mas_row[j][i] =new_value
                    member_mas_col[i][j] = new_value
                    
                } 
            }
            calc();       
        }
        
    }
    alert(member_mas_col)
}

function check(){
alert(member_mas_col)
}