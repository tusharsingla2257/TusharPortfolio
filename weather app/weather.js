// to change greetings

function updateGreeting() {

        let hour = new Date().getHours();

        if (hour >= 5 && hour < 12) {
            document.getElementById("greeting").innerText = "Good Morning ☀️";
        }
        else if (hour >= 12 && hour < 17) {
            document.getElementById("greeting").innerText = "Good Afternoon 🌤️";
        }
        else if (hour >= 17 && hour < 20) {
            document.getElementById("greeting").innerText = "Good Evening 🌇";
        }
        else {
            document.getElementById("greeting").innerText = "Good Night 🌙";
        }

    }
    updateGreeting();

    // to update Date
    function updateDate() {
        let now = new Date();
        let options = {
            weekday: "long",
            month: "long",
            day: "numeric",   
        };
        document.getElementById("Date").innerText = now.toLocaleDateString("en-US", options)
    }
    updateDate();

//to get weather data of a city

 async function getWeatherData() {
     const city = document.getElementById("city").value;
        const response = await fetch(`https://wttr.in/${city}?format=j1`);
        const result = await response.json();
        console.log(result)
         document.getElementById("temp")
         .innerHTML = `Temperature : ${result.current_condition[0].FeelsLikeC} <sup>o</sup>`
    }
    const form = document.getElementById("weather");
    form.addEventListener("submit" , (e) => {
        e.preventDefault();
        getWeatherData();
<<<<<<< HEAD
    });
=======
    });

    // to open searchbox

    let 
>>>>>>> 62381d1 (responsive design)
