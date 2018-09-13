var i = 1;

while (i <= 10) {
    console.log(i);

    i++;
}

console.log("------------------------");

i = 1;

while (i < 10) {
    i++;

    if (i === 5) {
        break;
    }

    console.log(i);
}

console.log("------------------------");

i = 1;

while (i < 10) {
    i++;

    if (i === 5) {
        continue;
    }

    console.log(i);
}

console.log("------------------------");

i = 0;

do {
    i++;
    console.log(i);
} while (i < 10);

console.log("------------------------");

i = 0;

do {
    i++;

    if (i === 5) {
        break;
    }

    console.log(i);
} while (i < 10);

console.log("------------------------");

i = 0;

do {
    i++;

    if (i === 5) {
        continue;
    }

    console.log(i);
} while (i < 10);