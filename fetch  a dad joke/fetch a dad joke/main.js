document.getElementById("loadJoke").addEventListener("click", async () => {
    const res = await fetch("https://icanhazdadjoke.com/", {
    headers: {
    Accept: "application/json",
    },
    });
    const data = await res.json();
    document.getElementById("jokeResult").innerText = data.joke;
   })