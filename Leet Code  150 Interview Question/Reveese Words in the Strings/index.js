var reverseWords = function(s) {
    const words=s.trim().split(/\s+/);
  
    words.reverse();
  
    return words.join(' ')  
  };