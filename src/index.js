module.exports = function check(str, bracketsConfig) {
    let arr = str.split('');
    let array = [];
    let keys = {};
    
    for (let i = 0; i < bracketsConfig.length; i++) {
        keys[bracketsConfig[i][0]] = bracketsConfig[i][1];
    }

    let onlyKeys = Object.keys(keys);
    let onlyValues = Object.values(keys);
    for (let i = 0; i < arr.length; i ++) {
        if (keys[arr[i]] == arr[i]) {
            let lisa = array.pop();
            if (lisa == undefined) {
                array.push(arr[i]);
            } else {
                if (arr[i] !== lisa) {
                    array.push(lisa);
                    array.push(arr[i]);                
                } 
            }  continue;  
        }

       if (onlyKeys.includes(arr[i])) {
           array.push(arr[i])
       } else {
            let checkKeys = array.pop();
            if (keys[checkKeys] == arr[i]) {
                continue;
            }  else {
                return false;
            }
       }
    }
    if (array.length == 0) {
        return true;
    } else {
        return false;
    }
    
}


