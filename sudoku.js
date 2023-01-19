var cells = document.getElementsByClassName('cell');
var space_num = document.getElementById('space_num');
var start_but = document.getElementById('start');
var cells_mas = [];
var member_mas_row = [[], [], [], [], [], [], [], [], []];
var member_mas_col = [[], [], [], [], [], [], [], [], []];
var check_mas = [[], [], [], [], [], [], [], [], []];
for (var _i = 0, cells_1 = cells; _i < cells_1.length; _i++) {
    var cell = cells_1[_i];
    cells_mas.push(cell);
}
function start() {
    for (var j = 0; j <= 8; j++) {
        for (var i = 0; i <= 8; i++) {
            member_mas_row[j][i] = 0;
            member_mas_col[i][j] = 0;
            cells_mas[j * 9 + i].value = '';
        }
    }
    for (var j = 0; j <= 8; j++) {
        for (var i = 0; i <= 8; i++) {
            if (j >= 6) {
                if (i + 1 + j * 3 + 2 > 9) {
                    if (i + 1 + j * 3 + 2 - 9 > 9) {
                        if (i + 1 + j * 3 + 2 - 9 > 9 * 2) {
                            // cells_mas[j*9+i].value = `${i+1+j*3+2-9*3}`
                            member_mas_row[j][i] = i + 1 + j * 3 + 2 - 9 * 3;
                            member_mas_col[i][j] = i + 1 + j * 3 + 2 - 9 * 3;
                        }
                        else {
                            // cells_mas[j*9+i].value = `${i+1+j*3+2-9*2}`
                            member_mas_row[j][i] = i + 1 + j * 3 + 2 - 9 * 2;
                            member_mas_col[i][j] = i + 1 + j * 3 + 2 - 9 * 2;
                        }
                    }
                    else {
                        // cells_mas[j*9+i].value = `${i+1+j*3+2-9}`
                        member_mas_row[j][i] = i + 1 + j * 3 + 2 - 9;
                        member_mas_col[i][j] = i + 1 + j * 3 + 2 - 9;
                    }
                }
                else {
                    // cells_mas[j*9+i].value = `${i+1+j*3+2}`
                    member_mas_row[j][i] = i + 1 + j * 3 + 2;
                    member_mas_col[i][j] = i + 1 + j * 3 + 2;
                }
            }
            else if (j >= 3 && j < 6) {
                if (i + 1 + j * 3 + 1 > 9) {
                    if (i + 1 + j * 3 + 1 - 9 > 9) {
                        if (i + 1 + j * 3 + 1 - 9 > 9 * 2) {
                            // cells_mas[j*9+i].value = `${i+1+j*3+1-9*3}`
                            member_mas_row[j][i] = i + 1 + j * 3 + 1 - 9 * 3;
                            member_mas_col[i][j] = i + 1 + j * 3 + 1 - 9 * 3;
                        }
                        else {
                            // cells_mas[j*9+i].value = `${i+1+j*3+1-9*2}`
                            member_mas_row[j][i] = i + 1 + j * 3 + 1 - 9 * 2;
                            member_mas_col[i][j] = i + 1 + j * 3 + 1 - 9 * 2;
                        }
                    }
                    else {
                        // cells_mas[j*9+i].value = `${i+1+j*3+1-9}`
                        member_mas_row[j][i] = i + 1 + j * 3 + 1 - 9;
                        member_mas_col[i][j] = i + 1 + j * 3 + 1 - 9;
                    }
                }
                else {
                    // cells_mas[j*9+i].value = `${i+1+j*3+1}`
                    member_mas_row[j][i] = i + 1 + j * 3 + 1;
                    member_mas_col[i][j] = i + 1 + j * 3 + 1;
                }
            }
            else {
                if (i + 1 + j * 3 > 9) {
                    if (i + 1 + j * 3 - 9 > 9) {
                        if (i + 1 + j * 3 - 9 > 9 * 2) {
                            // cells_mas[j*9+i].value = `${i+1+j*3-9*3}`
                            member_mas_row[j][i] = i + 1 + j * 3 - 9 * 3;
                            member_mas_col[i][j] = i + 1 + j * 3 - 9 * 3;
                        }
                        else {
                            // cells_mas[j*9+i].value = `${i+1+j*3-9*2}`
                            member_mas_row[j][i] = i + 1 + j * 3 - 9 * 2;
                            member_mas_col[i][j] = i + 1 + j * 3 - 9 * 2;
                        }
                    }
                    else {
                        // cells_mas[j*9+i].value = `${i+1+j*3-9}`
                        member_mas_row[j][i] = i + 1 + j * 3 - 9;
                        member_mas_col[i][j] = i + 1 + j * 3 - 9;
                    }
                }
                else {
                    // cells_mas[j*9+i].value = `${i+1+j*3}`
                    member_mas_row[j][i] = i + 1 + j * 3;
                    member_mas_col[i][j] = i + 1 + j * 3;
                }
            }
        }
    }
    var random_line = 1;
    var swap_line;
    function random_row() {
        random_line = Math.floor(Math.random() * 9);
        if ((random_line + 1) % 3 === 0) {
            var random_line_swap = Math.round(Math.random() + 1);
            swap_line = member_mas_row[random_line];
            member_mas_row[random_line] = member_mas_row[random_line - random_line_swap];
            member_mas_row[random_line - random_line_swap] = swap_line;
        }
        else if ((random_line + 1) % 3 === 2) {
            var random_line_swap = Math.pow((-1), Math.round(Math.random() + 1));
            swap_line = member_mas_row[random_line];
            member_mas_row[random_line] = member_mas_row[random_line - random_line_swap];
            member_mas_row[random_line - random_line_swap] = swap_line;
        }
        else if ((random_line + 1) % 3 === 1) {
            var random_line_swap = Math.round(Math.random());
            swap_line = member_mas_row[random_line];
            member_mas_row[random_line] = member_mas_row[random_line + random_line_swap];
            member_mas_row[random_line + random_line_swap] = swap_line;
        }
        for (var j = 0; j <= 8; j++) {
            for (var i = 0; i <= 8; i++) {
                member_mas_col[i][j] = member_mas_row[j][i];
            }
        }
    }
    function random_col() {
        random_line = Math.floor(Math.random() * 9);
        if ((random_line + 1) % 3 === 0) {
            var random_line_swap = Math.round(Math.random() + 1);
            swap_line = member_mas_col[random_line];
            member_mas_col[random_line] = member_mas_col[random_line - random_line_swap];
            member_mas_col[random_line - random_line_swap] = swap_line;
        }
        else if ((random_line + 1) % 3 === 2) {
            var random_line_swap = Math.pow((-1), Math.round(Math.random() + 1));
            swap_line = member_mas_col[random_line];
            member_mas_col[random_line] = member_mas_col[random_line - random_line_swap];
            member_mas_col[random_line - random_line_swap] = swap_line;
        }
        else if ((random_line + 1) % 3 === 1) {
            var random_line_swap = Math.round(Math.random());
            swap_line = member_mas_col[random_line];
            member_mas_col[random_line] = member_mas_col[random_line + random_line_swap];
            member_mas_col[random_line + random_line_swap] = swap_line;
        }
        for (var j = 0; j <= 8; j++) {
            for (var i = 0; i <= 8; i++) {
                member_mas_row[j][i] = member_mas_col[i][j];
            }
        }
    }
    for (var i = 0; i < 100; i++) {
        random_col();
        random_row();
    }
    for (var j = 0; j <= 8; j++) {
        for (var i = 0; i <= 8; i++) {
            check_mas[i][j] = member_mas_row[j][i];
        }
    }
    var new_col_mas;
    new_col_mas = member_mas_col;
    function space(num) {
        if (!num) {
            alert("Enter the number of empty cells");
        }
        for (var i = 0; i < num; i++) {
            var random_rowcell = Math.floor(Math.random() * 8);
            var random_colcell = Math.floor(Math.random() * 8);
            new_col_mas[random_rowcell][random_colcell] = 0;
        }
    }
    space(Number(space_num.value));
    for (var j = 0; j <= 8; j++) {
        for (var i = 0; i <= 8; i++) {
            if (new_col_mas[j][i] === 0) {
                cells_mas[j * 9 + i].value = "";
            }
            else {
                cells_mas[j * 9 + i].value = "".concat(new_col_mas[j][i]);
            }
        }
    }
}
function check() {
    var wrong_empty = 0;
    for (var _i = 0, cells_2 = cells; _i < cells_2.length; _i++) {
        var cell = cells_2[_i];
        cell.toggleAttribute("readonly");
    }
    start_but.toggleAttribute("disabled");
    for (var j = 0; j <= 8; j++) {
        for (var i = 0; i <= 8; i++) {
            if (Number(cells_mas[j * 9 + i].value) === 0) {
                cells_mas[j * 9 + i].classList.toggle("empty");
                wrong_empty++;
            }
            else if (Number(cells_mas[j * 9 + i].value) === check_mas[j][i]) {
                cells_mas[j * 9 + i].classList.toggle("right");
            }
            else if (Number(cells_mas[j * 9 + i].value) != check_mas[j][i]) {
                cells_mas[j * 9 + i].classList.toggle("wrong");
                wrong_empty++;
            }
        }
    }
    if (wrong_empty === 0) {
        alert("Victory!!!!");
    }
}
