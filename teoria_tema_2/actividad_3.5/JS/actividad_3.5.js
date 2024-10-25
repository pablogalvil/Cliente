let multiplos = [];
for (let i = 0; i < 10; i++) {
    let random = Math.floor(Math.random() * 21) * 5;
    multiplos.push(random);
}

while (multiplos[0] < 50) {
    multiplos.shift();
    let random = Math.floor(Math.random() * 21) * 5;
    multiplos.unshift(random);
}

while (multiplos[multiplos.length - 1] > 50) {
    multiplos.pop();
    let random = Math.floor(Math.random() * 21) * 5;
    multiplos.push(random);
}

for (let i = 0; i < multiplos.length; i++) {
    document.write(multiplos[i] + "<br>");
}