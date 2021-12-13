var diff, image1, image2, imageA, imageB, matchText, matchTextWrap, matchWord, buttonText, score, emoji1, emoji2, emoji3, emoji4, emoji5, emoji6, emoji7, emoji8, emoji9, emoji10;

document.querySelectorAll('a.check-match').forEach(link => {
    link.addEventListener('click', () => {
      image1 = link.parentNode.parentNode.querySelector('div.your-code');
      image2 = link.parentNode.parentNode.querySelector('div.target-wrap');
      matchText = link.parentNode.parentNode.querySelector('span.match-text');
      matchWord = link.parentNode.parentNode.querySelector('span.match-word');
      matchTextWrap = link.parentNode.parentNode.querySelector('div.match-text-wrap');
      buttonText = link.parentNode.parentNode.querySelector('a.check-match');
      emoji1 = link.parentNode.parentNode.querySelector('img.emoji-1');
      emoji2 = link.parentNode.parentNode.querySelector('img.emoji-2');
      emoji3 = link.parentNode.parentNode.querySelector('img.emoji-3');
      emoji4 = link.parentNode.parentNode.querySelector('img.emoji-4');
      emoji5 = link.parentNode.parentNode.querySelector('img.emoji-5');
      emoji6 = link.parentNode.parentNode.querySelector('img.emoji-6');
      emoji7 = link.parentNode.parentNode.querySelector('img.emoji-7');
      emoji8 = link.parentNode.parentNode.querySelector('img.emoji-8');
      emoji9 = link.parentNode.parentNode.querySelector('img.emoji-9');
      emoji10 = link.parentNode.parentNode.querySelector('img.emoji-10');
      
      buttonText.innerHTML = ("Checking...");

        domtoimage.toPng(image1)
      .then(function (dataUrl) {
          imageA = new Image();
          imageA.src = dataUrl;
          // document.body.appendChild(imageA); 
      })
      .catch(function (error) {
          console.error('oops, something went wrong!', error);
      });

        domtoimage.toPng(image2)
      .then(function (dataUrl) {
          imageB = new Image();
          imageB.src = dataUrl;
          // document.body.appendChild(imageB);
      })
      .catch(function (error) {
          console.error('oops, something went wrong!', error);
      });  

        setTimeout(function(){ 
            diff = resemble(imageA.src)
                .compareTo(imageB.src);
                diff.ignoreLess();
                diff.onComplete(function (data) {
                		if (data.misMatchPercentage > 10) {score = 0;}
		                else {
                    score = 100-(data.misMatchPercentage*10);
                    score = Math.floor(score);}
                    if (score > 0 ) {matchText.innerHTML = (score+"%");}
                    else {
                    matchText.innerHTML = ("Score too low!");
                    matchWord.innerHTML = ("");
                    }
                    buttonText.style.display = "none";
                    $(matchTextWrap).addClass("show");
                    if(score == 100){$(emoji10).addClass("show");}
                    else if(score > 95){$(emoji9).addClass("show");}
                    else if(score > 90){$(emoji8).addClass("show");}
                    else if(score > 85){$(emoji7).addClass("show");}
                    else if(score > 80){$(emoji6).addClass("show");}
                    else if(score > 75){$(emoji5).addClass("show");}
                    else if(score > 70){$(emoji4).addClass("show");}
                    else if(score > 65){$(emoji3).addClass("show");}
                    else if(score > 0){$(emoji2).addClass("show");}
                    else {$(emoji1).addClass("show");}
                });
         }, 1000);
    });
  });
