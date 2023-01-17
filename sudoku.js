var cells = document.getElementsByTagName('input');
var cells_mas = [];
var member_mas_row = [[], [], [], [], [], [], [], [], []];
var member_mas_col = [[], [], [], [], [], [], [], [], []];
// let minitab_mas:number[][] = [];
for (var _i = 0, cells_1 = cells; _i < cells_1.length; _i++) {
    var cell = cells_1[_i];
    cells_mas.push(cell);
}
function clearing() {
    console.log(member_mas_row.length);
    for (var j = 0; j <= 8; j++) {
        for (var i = 0; i <= 8; i++) {
            member_mas_row[j][i] = 0;
            member_mas_col[i][j] = 0;
            cells_mas[j * 9 + i].value = '';
            console.log(i);
        }
    }
}
function start() {
    var _loop_1 = function (j) {
        var _loop_2 = function (i) {
            function calc() {
                var new_value = Math.floor(Math.random() * 9 + 1);
                if (member_mas_row[j].includes(new_value) || member_mas_col[i].includes(new_value)) {
                    calc();
                }
                else {
                    cells_mas[j * 9 + i].value = "".concat(new_value);
                    member_mas_row[j][i] = new_value;
                    member_mas_col[i][j] = new_value;
                }
            }
            calc();
        };
        for (var i = 0; i <= 8; i++) {
            _loop_2(i);
        }
    };
    // cells_mas[0].value=`${Math.floor(Math.random() * 9 + 1) }`;
    // member_mas_row[0][0]=Number(cells_mas[0].value);
    for (var j = 0; j <= 8; j++) {
        _loop_1(j);
    }
    alert(member_mas_col);
}
function check() {
    alert(member_mas_col);
}
