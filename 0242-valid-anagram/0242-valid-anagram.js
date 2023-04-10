/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let answer = true;
    s = s.split('');
    t = t.split('');
    for (let i = 0; i < s.length; i++) {
        let j = t.indexOf(s[i]);
        if (j === -1) {
            answer = false;
            break;
        } else {
            t.splice(j, 1);
        }
    }
    if (t.length !== 0) {
        answer = false;
    }
    return answer;
};
