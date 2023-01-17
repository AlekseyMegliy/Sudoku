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
    for (var j = 0; j <= 8; j++) {
        for (var i = 0; i <= 8; i++) {
            member_mas_row[j][i] = 0;
            member_mas_col[i][j] = 0;
            cells_mas[j * 9 + i].value = '';
            console.log(i);
        }
    }
}
var done = false;
function start() {
    for (var j = 0; j <= 8; j++) {
        for (var i = 0; i <= 8; i++) {
            member_mas_row[j][i] = 0;
            member_mas_col[i][j] = 0;
            cells_mas[j * 9 + i].value = '';
            console.log(i);
        }
    }
    for (var j = 0; j <= 8; j++) {
        for (var i = 0; i <= 8; i++) {
            if (j >= 6) {
                if (i + 1 + j * 3 + 2 > 9) {
                    if (i + 1 + j * 3 + 2 - 9 > 9) {
                        if (i + 1 + j * 3 + 2 - 9 > 9 * 2) {
                            cells_mas[j * 9 + i].value = "".concat(i + 1 + j * 3 + 2 - 9 * 3);
                            member_mas_row[j][i] = i + 1 + j * 3 + 2 - 9 * 3;
                            member_mas_col[i][j] = i + 1 + j * 3 + 2 - 9 * 3;
                        }
                        else {
                            cells_mas[j * 9 + i].value = "".concat(i + 1 + j * 3 + 2 - 9 * 2);
                            member_mas_row[j][i] = i + 1 + j * 3 + 2 - 9 * 2;
                            member_mas_col[i][j] = i + 1 + j * 3 + 2 - 9 * 2;
                        }
                    }
                    else {
                        cells_mas[j * 9 + i].value = "".concat(i + 1 + j * 3 + 2 - 9);
                        member_mas_row[j][i] = i + 1 + j * 3 + 2 - 9;
                        member_mas_col[i][j] = i + 1 + j * 3 + 2 - 9;
                    }
                }
                else {
                    cells_mas[j * 9 + i].value = "".concat(i + 1 + j * 3 + 2);
                    member_mas_row[j][i] = i + 1 + j * 3 + 2;
                    member_mas_col[i][j] = i + 1 + j * 3 + 2;
                }
            }
            else if (j >= 3 && j < 6) {
                if (i + 1 + j * 3 + 1 > 9) {
                    if (i + 1 + j * 3 + 1 - 9 > 9) {
                        if (i + 1 + j * 3 + 1 - 9 > 9 * 2) {
                            cells_mas[j * 9 + i].value = "".concat(i + 1 + j * 3 + 1 - 9 * 3);
                            member_mas_row[j][i] = i + 1 + j * 3 + 1 - 9 * 3;
                            member_mas_col[i][j] = i + 1 + j * 3 + 1 - 9 * 3;
                        }
                        else {
                            cells_mas[j * 9 + i].value = "".concat(i + 1 + j * 3 + 1 - 9 * 2);
                            member_mas_row[j][i] = i + 1 + j * 3 + 1 - 9 * 2;
                            member_mas_col[i][j] = i + 1 + j * 3 + 1 - 9 * 2;
                        }
                    }
                    else {
                        cells_mas[j * 9 + i].value = "".concat(i + 1 + j * 3 + 1 - 9);
                        member_mas_row[j][i] = i + 1 + j * 3 + 1 - 9;
                        member_mas_col[i][j] = i + 1 + j * 3 + 1 - 9;
                    }
                }
                else {
                    cells_mas[j * 9 + i].value = "".concat(i + 1 + j * 3 + 1);
                    member_mas_row[j][i] = i + 1 + j * 3 + 1;
                    member_mas_col[i][j] = i + 1 + j * 3 + 1;
                }
            }
            else {
                if (i + 1 + j * 3 > 9) {
                    if (i + 1 + j * 3 - 9 > 9) {
                        if (i + 1 + j * 3 - 9 > 9 * 2) {
                            cells_mas[j * 9 + i].value = "".concat(i + 1 + j * 3 - 9 * 3);
                            member_mas_row[j][i] = i + 1 + j * 3 - 9 * 3;
                            member_mas_col[i][j] = i + 1 + j * 3 - 9 * 3;
                        }
                        else {
                            cells_mas[j * 9 + i].value = "".concat(i + 1 + j * 3 - 9 * 2);
                            member_mas_row[j][i] = i + 1 + j * 3 - 9 * 2;
                            member_mas_col[i][j] = i + 1 + j * 3 - 9 * 2;
                        }
                    }
                    else {
                        cells_mas[j * 9 + i].value = "".concat(i + 1 + j * 3 - 9);
                        member_mas_row[j][i] = i + 1 + j * 3 - 9;
                        member_mas_col[i][j] = i + 1 + j * 3 - 9;
                    }
                }
                else {
                    cells_mas[j * 9 + i].value = "".concat(i + 1 + j * 3);
                    member_mas_row[j][i] = i + 1 + j * 3;
                    member_mas_col[i][j] = i + 1 + j * 3;
                }
            }
        }
    }
}
function check() {
    alert(member_mas_row);
}
