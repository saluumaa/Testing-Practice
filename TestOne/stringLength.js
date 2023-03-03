function stringLength(string){
    const strLength = string.length;
    if(strLength > 0 && strLength <= 10){
        return strLength;
    }
    if(strLength<=0 || strLength >10) {
        throw new Error("String length should not greater than 10 character");
    }
};

module.exports = stringLength;