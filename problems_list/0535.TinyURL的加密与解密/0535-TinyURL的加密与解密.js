var encode = function(longUrl) {
    this.dataBase = new Map();
    this.id = 0;
    this.id++;
    this.dataBase.set(this.id, longUrl);
    return "http://tinyurl.com/" + this.id;
};

var decode = function(shortUrl) {
    const p = shortUrl.lastIndexOf('/') + 1;
    const key = parseInt(shortUrl.substring(p));
    return this.dataBase.get(key);
};