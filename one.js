/* exported move */
/* eslint-env browser */
/* eslint no-console: 0 */

function move(movv, inn, jnn) {
    var t = 3;
    t = movv[inn];
    movv[inn] = movv[jnn];
    movv[jnn] = t;
    document.write(movv + " <br> ");
    return movv;
}
console.log(move([1, 2, 3, 4, 5], 2, 3));
