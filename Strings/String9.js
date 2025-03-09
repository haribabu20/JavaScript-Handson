// ✅ 4️⃣ Reverse the order of words in a sentence without using reverse().
// I/P: I am learning React
// O/P: React learning am I


const reverseSentence = (sentence) => {
  let word = '';
  let temp = '';

  for(let i=0; i<sentence.length; i++){
    if(sentence[i]===' '){
      word = temp + ' ' + word;
      temp = '';
    }else{
      temp += sentence[i]
    }
    
  }

  word = temp + ' ' + word
  return word.trim()
}



console.log(reverseSentence('I am learning React'));
