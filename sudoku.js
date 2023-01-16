var cells = document.getElementsByTagName('input');
var cells_mas = [];
var member_mas = [];
for (var _i = 0, cells_1 = cells; _i < cells_1.length; _i++) {
    var cell = cells_1[_i];
    cells_mas.push(cell);
}
function start() {
    cells_mas[0].value = "".concat(Math.floor(Math.random() * 9 + 1));
    var _loop_1 = function (i) {
        function calc() {
            var new_value = Math.floor(Math.random() * 9 + 1);
            if (member_mas.includes(new_value)) {
                calc();
            }
            else {
                cells_mas[i].value = "".concat(new_value);
                member_mas.push(new_value);
            }
        }
        calc();
    };
    // for(let j =0; j<= 8; j++){
    //     cells_mas[j*9].value=`${Math.floor(Math.random() * 9 + 1) }`
    for (var i = 0; i <= 8; i++) {
        _loop_1(i);
    }
    var _loop_2 = function (o) {
        var _loop_3 = function (j) {
            if (j == 1) {
                function calc_col() {
                    var new_value = Math.floor(Math.random() * 9 + 1);
                    if (Number(cells_mas[j * o * 9 - 1].value) === new_value || Number(cells_mas[j * o * 9 - 9].value) === new_value) {
                        calc_col();
                    }
                    else {
                        cells_mas[j * 9].value = "".concat(new_value);
                        member_mas.push(new_value);
                    }
                }
                calc_col();
            }
        };
        for (var j = 1; j <= 8; j++) {
            _loop_3(j);
        }
    };
    for (var o = 1; o <= 9; o++) {
        _loop_2(o);
    }
    // }
    alert(member_mas);
}
function check() {
    alert(cells_mas[0].value);
}
