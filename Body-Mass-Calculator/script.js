const form = document.querySelector('.form')

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const height = document.querySelector('#Height').value
    const weight = document.querySelector('#Weight').value
    const result = document.querySelector('#result')

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please Give Valid Height ${height}`
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please Give Valid Weight ${weight}`
    }
    else {
        let heig = (height) / 100
        const Bmi = (weight / (heig * heig)).toFixed(2);
        if (Bmi < 18.5) {
            result.innerText = `${Bmi} Under weight`
        }
         else if (Bmi < 24.9 ) {
            result.innerText = `${Bmi} Normal`
        }
        else{
            result.innerText = `${Bmi} Over Weight`
        }
    }
})