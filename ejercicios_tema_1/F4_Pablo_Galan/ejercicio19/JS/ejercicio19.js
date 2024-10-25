for (let i = 1; i <= 100; i++) {
    if (i % 2 != 0 && i % 3 != 0 && i % 7 != 0) {
        console.log(i);
    }
}

let i = 1;

while (i <= 100) {
    if (i % 2 != 0 && i % 3 != 0 && i % 7 != 0) {
        console.log(i);
    }
    i++;
}

i = 1;

do {
    if (i % 2 != 0 && i % 3 != 0 && i % 7 != 0) {
        console.log(i);
    }
    i++;
} while (i <= 100);