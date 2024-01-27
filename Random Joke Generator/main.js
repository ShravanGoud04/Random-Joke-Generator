const btn = document.querySelector(".btn");
const joke = document.querySelector(".joke");

const getJoke = async () => {
  // joke.classList.remove("fade");
  const response = await fetch(
    "https://v2.jokeapi.dev/joke/any?type=single&amount=1"
  );
  const data = await response.json();
   joke.innerHTML = data.joke;

  // if (data) {
  //   console.log(data);
   
  //   // joke.classList.add("fade");
  // }
};

btn.addEventListener("click", getJoke);
