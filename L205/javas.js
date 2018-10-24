
nextPrime:
for (var i = 2; i <= 20; i++) {
    for (var k = 2; k < i; k++) {
        if (i % k == 0) continue nextPrime;
    }
    alert(i);
}