import sentiment from 'sentiment';
let isHurtful = false;
const detectHateSpeech = (text) => {
  
  console.log("Input Text:", text);
    var Sentiment = require('sentiment');
    var sentiment = new Sentiment();
    var result = sentiment.analyze(text);

    if (result.score < 0) {
        isHurtful = true;
    }
    else{
      isHurtful = false;
    }
    
  console.log("Sentiment Analysis Result:", result);
  console.log("Hurtful Speech Detected:", isHurtful);

  // You can perform any further logic or actions based on the result here
};

export {isHurtful, detectHateSpeech };
