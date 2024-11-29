function igualPosicion(array1, array2) {
    let array3 = [];
    for (let i = 0; i < 4; i++) {
        array3[i] = [];
        for (let j = 0; j < 4; j++) {
            if (array1[i][j] == array2[i][j]) {
                array3[i][j] = array1[i][j];
            } else {
                array3[i][j] = 0;
            }
        }
    }
    return array3;
}

let array1 = [[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]];
let array2 = [[5,2,5,5], [8,6,6,5], [4,1,11,12], [13,4,5,6]];
let array3 = igualPosicion(array1, array2);
console.log(array3);
