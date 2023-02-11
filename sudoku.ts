let cells = document.getElementsByClassName(
  "cell"
) as HTMLCollectionOf<HTMLInputElement>;
let spaceNum = document.getElementById("space_num") as HTMLInputElement;
let startBut: HTMLElement | HTMLButtonElement | null =
  document.getElementById("start");
let cellsMas: Array<HTMLInputElement> = [];
let memberMasRow: number[][] = [[], [], [], [], [], [], [], [], []];
let memberMasCol: number[][] = [[], [], [], [], [], [], [], [], []];
let checkMas: number[][] = [[], [], [], [], [], [], [], [], []];

for (let cell of cells) {
  cellsMas.push(cell);
}

function start(): void {
  for (let j = 0; j <= 8; j++) {
    for (let i = 0; i <= 8; i++) {
      memberMasRow[j][i] = 0;
      memberMasCol[i][j] = 0;
      cellsMas[j * 9 + i].value = "";
    }
  }
  for (let j = 0; j <= 8; j++) {
    for (let i = 0; i <= 8; i++) {
      if (j >= 6) {
        if (i + 1 + j * 3 + 2 > 9) {
          if (i + 1 + j * 3 + 2 - 9 > 9) {
            if (i + 1 + j * 3 + 2 - 9 > 9 * 2) {
              memberMasRow[j][i] = i + 1 + j * 3 + 2 - 9 * 3;
              memberMasCol[i][j] = i + 1 + j * 3 + 2 - 9 * 3;
            } else {
              memberMasRow[j][i] = i + 1 + j * 3 + 2 - 9 * 2;
              memberMasCol[i][j] = i + 1 + j * 3 + 2 - 9 * 2;
            }
          } else {
            memberMasRow[j][i] = i + 1 + j * 3 + 2 - 9;
            memberMasCol[i][j] = i + 1 + j * 3 + 2 - 9;
          }
        } else {
          memberMasRow[j][i] = i + 1 + j * 3 + 2;
          memberMasCol[i][j] = i + 1 + j * 3 + 2;
        }
      } else if (j >= 3 && j < 6) {
        if (i + 1 + j * 3 + 1 > 9) {
          if (i + 1 + j * 3 + 1 - 9 > 9) {
            if (i + 1 + j * 3 + 1 - 9 > 9 * 2) {
              //
              memberMasRow[j][i] = i + 1 + j * 3 + 1 - 9 * 3;
              memberMasCol[i][j] = i + 1 + j * 3 + 1 - 9 * 3;
            } else {
              //
              memberMasRow[j][i] = i + 1 + j * 3 + 1 - 9 * 2;
              memberMasCol[i][j] = i + 1 + j * 3 + 1 - 9 * 2;
            }
          } else {
            memberMasRow[j][i] = i + 1 + j * 3 + 1 - 9;
            memberMasCol[i][j] = i + 1 + j * 3 + 1 - 9;
          }
        } else {
          memberMasRow[j][i] = i + 1 + j * 3 + 1;
          memberMasCol[i][j] = i + 1 + j * 3 + 1;
        }
      } else {
        if (i + 1 + j * 3 > 9) {
          if (i + 1 + j * 3 - 9 > 9) {
            if (i + 1 + j * 3 - 9 > 9 * 2) {
              memberMasRow[j][i] = i + 1 + j * 3 - 9 * 3;
              memberMasCol[i][j] = i + 1 + j * 3 - 9 * 3;
            } else {
              memberMasRow[j][i] = i + 1 + j * 3 - 9 * 2;
              memberMasCol[i][j] = i + 1 + j * 3 - 9 * 2;
            }
          } else {
            memberMasRow[j][i] = i + 1 + j * 3 - 9;
            memberMasCol[i][j] = i + 1 + j * 3 - 9;
          }
        } else {
          memberMasRow[j][i] = i + 1 + j * 3;
          memberMasCol[i][j] = i + 1 + j * 3;
        }
      }
    }
  }
  let random_line: number = 1;
  let swap_line: number[];

  function random_row(): void {
    random_line = Math.floor(Math.random() * 9);
    if ((random_line + 1) % 3 === 0) {
      let random_line_swap: number = Math.round(Math.random() + 1);
      swap_line = memberMasRow[random_line];
      memberMasRow[random_line] = memberMasRow[random_line - random_line_swap];
      memberMasRow[random_line - random_line_swap] = swap_line;
    } else if ((random_line + 1) % 3 === 2) {
      let random_line_swap: number = Math.pow(
        -1,
        Math.round(Math.random() + 1)
      );
      swap_line = memberMasRow[random_line];
      memberMasRow[random_line] = memberMasRow[random_line - random_line_swap];
      memberMasRow[random_line - random_line_swap] = swap_line;
    } else if ((random_line + 1) % 3 === 1) {
      let random_line_swap: number = Math.round(Math.random());
      swap_line = memberMasRow[random_line];
      memberMasRow[random_line] = memberMasRow[random_line + random_line_swap];
      memberMasRow[random_line + random_line_swap] = swap_line;
    }
    for (let j = 0; j <= 8; j++) {
      for (let i = 0; i <= 8; i++) {
        memberMasCol[i][j] = memberMasRow[j][i];
      }
    }
  }

  function random_col(): void {
    random_line = Math.floor(Math.random() * 9);
    if ((random_line + 1) % 3 === 0) {
      let random_line_swap: number = Math.round(Math.random() + 1);
      swap_line = memberMasCol[random_line];
      memberMasCol[random_line] = memberMasCol[random_line - random_line_swap];
      memberMasCol[random_line - random_line_swap] = swap_line;
    } else if ((random_line + 1) % 3 === 2) {
      let random_line_swap: number = Math.pow(
        -1,
        Math.round(Math.random() + 1)
      );
      swap_line = memberMasCol[random_line];
      memberMasCol[random_line] = memberMasCol[random_line - random_line_swap];
      memberMasCol[random_line - random_line_swap] = swap_line;
    } else if ((random_line + 1) % 3 === 1) {
      let random_line_swap: number = Math.round(Math.random());
      swap_line = memberMasCol[random_line];
      memberMasCol[random_line] = memberMasCol[random_line + random_line_swap];
      memberMasCol[random_line + random_line_swap] = swap_line;
    }
    for (let j = 0; j <= 8; j++) {
      for (let i = 0; i <= 8; i++) {
        memberMasRow[j][i] = memberMasCol[i][j];
      }
    }
  }

  for (let i = 0; i < 100; i++) {
    random_col();
    random_row();
  }

  for (let j = 0; j <= 8; j++) {
    for (let i = 0; i <= 8; i++) {
      checkMas[i][j] = memberMasRow[j][i];
    }
  }
  let new_col_mas: number[][];
  new_col_mas = memberMasCol;

  function space(num: number): void {
    if (!num) {
      alert("Enter the number of empty cells");
    }
    for (let i = 0; i < num; i++) {
      let random_rowcell: number = Math.floor(Math.random() * 8);
      let random_colcell: number = Math.floor(Math.random() * 8);
      new_col_mas[random_rowcell][random_colcell] = 0;
    }
  }
  space(Number(spaceNum!.value));

  for (let j = 0; j <= 8; j++) {
    for (let i = 0; i <= 8; i++) {
      if (new_col_mas[j][i] === 0) {
        cellsMas[j * 9 + i].value = "";
      } else {
        cellsMas[j * 9 + i].value = `${new_col_mas[j][i]}`;
      }
    }
  }
}

function check(): void {
  let wrong_empty: number = 0;
  for (let cell of cells) {
    cell.toggleAttribute("readonly");
  }
  startBut!.toggleAttribute("disabled");
  for (let j = 0; j <= 8; j++) {
    for (let i = 0; i <= 8; i++) {
      if (Number(cellsMas[j * 9 + i].value) === 0) {
        cellsMas[j * 9 + i].classList.toggle("empty");
        wrong_empty++;
      } else if (Number(cellsMas[j * 9 + i].value) === checkMas[j][i]) {
        cellsMas[j * 9 + i].classList.toggle("right");
      } else if (Number(cellsMas[j * 9 + i].value) != checkMas[j][i]) {
        cellsMas[j * 9 + i].classList.toggle("wrong");
        wrong_empty++;
      }
    }
  }
  if (wrong_empty === 0) {
    alert("Victory!!!!");
  }
}
