const countvowel = (str)=>{
    let count = 0;
    for(const char of str)
    {
            if(char === "a" || char === "A" || char === "e" || char === "E" || char === "i" || char === "I" || char ==="o" || char === "O" || char === "u" || char === "U")
            {
            count++;
            }
    }
   return count;
}