const shuffleBtn = document.querySelector('#shuffle');
    let adviceId = document.querySelector('#advice-id');
    let advice = document.querySelector('#advice');

    const api_url = "https://api.adviceslip.com/advice";

    async function getapi(url){
       fetch(url)
      .then(res => res.json())
      .then(text => {
        advice.innerHTML = `"${text.slip.advice}"`;
        adviceId.innerHTML = `advice #${text.slip.id}`;
      })

     
      
    }
    window.onload = getapi(api_url);

    shuffleBtn.addEventListener('click', () => getapi(api_url));
    
    