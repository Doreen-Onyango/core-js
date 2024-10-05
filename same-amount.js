function sameAmount(str, regExp1, regExp2) {
    // ensure global flag g
    const reg1 = new RegExp(regExp1, 'g');
    const reg2 = new RegExp(regExp2, 'g');
    
    // Count the matches 
    const count1 = (str.match(reg1) || []).length;
    const count2 = (str.match(reg2) || []).length;
    
    return count1 === count2;
  }