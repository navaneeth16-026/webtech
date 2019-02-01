/* exported onne */
/* eslint-env browser */
/* eslint no-console: 0 */

function onne(k, j) {
    var i;
    var movv = new Array();
    for (i = k; i <= j; i++) {
        movv[i] = i;
    }

    document.write("["+movv +"]");
    return 26;
}
console.log(onne(-1, 5));
