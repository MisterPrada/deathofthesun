function sub(a, b) {
    let prefix = '0'.repeat(Math.abs(a.length - b.length));
    let flip = false;

    if (prefix.length) {
        if (a.length > b.length) {
            b = `${prefix}${b}`;
        } else if (b.length > a.length) {
            a = `${prefix}${a}`;

            a = [b, b = a][0];
            flip = true;
        }
    }

    const r_buffer = [];

    for (let i = a.length - 1; i >= 0; i--) {
        r_buffer[i] = parseInt(a[i]) - parseInt(b[i]);
    }

    for (let i = r_buffer.length - 1; i > 0; i--) {
        if (0 > r_buffer[i]) {
            r_buffer[i] = 10 + r_buffer[i];
            r_buffer[i - 1] = r_buffer[i - 1] - 1;
        }
    }

    while (r_buffer[0] === 0) {
        r_buffer.shift();
    }

    let c = r_buffer.length ? r_buffer.join('') : '0';

    return flip ? -c : c;
}

function getDeathSun(){
    let death = '156302555398979811';
    let today = Math.floor(new Date() / 1000);

    let seconds = sub(death, today.toString());

    document.querySelector('time').textContent = seconds;

    setTimeout(getDeathSun, 1000);
}

getDeathSun();