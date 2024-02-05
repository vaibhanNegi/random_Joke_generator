 const btnE1 = document.getElementById("btn");
 const jokeE1 = document.getElementById("joke");

 const apikey = "MAgkiBKlydfE+/tnj/TnJg==0nU5kx915iF7WodT";


const options = {
  method: "GET",
  headers: {
    "X-Api-Key" : apikey,
  },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke(){


  try {
    
  jokeE1.innerText = "processing....";
  btnE1.disabled = true;
  btnE1.innerText = "loading...";


  const response = await fetch(apiURL,options);
  const data = await response.json()

  btnE1.disabled = false;
  btnE1.innerText = "TELL ME A JOKE";

 jokeE1.innerText = data[0].joke;
    
  } catch (error) {
    jokeE1.innerText = "An error happened ,try again later";
    btnE1.disabled = false;
    btnE1.innerText = "TELL ME A JOKE";
    console.log(error);
  }


}


 btnE1.addEventListener("click",getJoke)