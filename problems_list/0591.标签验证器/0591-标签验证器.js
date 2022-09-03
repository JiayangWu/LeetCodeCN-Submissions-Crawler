var isValid = function(code) {
    const n = code.length;
    const tags = [];

    let i = 0;
    while (i < n) {
        if (code[i] === '<') {
            if (i === n - 1) {
                return false;
            }
            if (code[i + 1] === '/') {
                const j = code.indexOf('>', i);
                if (j < 0) {
                    return false;
                }
                const tagname = code.slice(i + 2, j);
                if (tags.length === 0 || tags[tags.length - 1] !== tagname) {
                    return false;
                }
                tags.pop();
                i = j + 1;
                if (tags.length === 0 && i !== n) {
                    return false;
                }
            } else if (code[i + 1] === '!') {
                if (tags.length === 0) {
                    return false;
                }
                if (i + 9 > n) {
                    return false;
                }
                const cdata = code.slice(i + 2, i + 9);
                if ("[CDATA[" !== cdata) {
                    return false;
                }
                const j = code.indexOf("]]>", i);
                if (j < 0) {
                    return false;
                }
                i = j + 1;
            } else {
                const j = code.indexOf('>', i);
                if (j < 0) {
                    return false;
                }
                const tagname = code.slice(i + 1, j);
                if (tagname.length < 1 || tagname.length > 9) {
                    return false;
                }
                for (let k = 0; k < tagname.length; ++k) {
                    if (!(tagname[k] >= 'A' && tagname[k] <= 'Z')) {
                        return false;
                    }
                }
                tags.push(tagname);
                i = j + 1;
            }
        } else {
            if (tags.length === 0) {
                return false;
            }
            ++i;
        }
    }

    return tags.length === 0;
};