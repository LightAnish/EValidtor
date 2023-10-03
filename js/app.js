console.log("Hello User");

let result = {
  tag: "",
  free: true,
  role: false,
  user: "anish",
  email: "anish@gmail.com",
  score: 0.48,
  state: "undeliverable",
  domain: "gmail.com",
  reason: "invalid_mailbox",
  mx_found: true,
  catch_all: null,
  disposable: false,
  smtp_check: false,
  did_you_mean: "",
  format_valid: true,
};
// let container = document.getElementById('container_result')

let crosh = document.getElementById('crosh');
crosh.addEventListener('click',(e)=>{
  e = document.getElementById('container_result').classList.add('hide')
})



const btn = document.getElementById("submitbtn");
btn.addEventListener("click", async(e) => {
  e.preventDefault();
  console.log("Hello User");
  let list = document.getElementById('container_result').classList.remove('hide');
  const results_dash = document.getElementById("result");
 results_dash.innerHTML = `<img src="/img/loading.svg" width="20" alt="hahih"></img>`

  let key = "ema_live_KrVjdThI66yKe78d4ISn5SVQoPH8iDuceYXRZczQ";
  let email = document.getElementById("username").value;
  let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
  let res = await fetch(url)
  let result = await res.json()
  let str = ``
  for (key of Object.keys(result)) {
    if(result[key] !== ""  && result[key] !== " "){
        str = str + `<div>${key}: ${result[key]} </div>`
    }
    
  }
  results_dash.innerHTML = str;
});
