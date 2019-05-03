function getRepo() {
    fetch(`https://api.github.com/users/${$('input').val()}/repos`)
    .then (response => {
        if (response.ok) {
            return response.json()
        } throw new Error(response.statusText)
    })
    .then (responseJson => displayResults(responseJson))
    .catch (error => {
        $('.errorMessage').text(`Something went wrong: ${error.message}`);
    });
}

function displayResults(responseJson) {
    console.log(responseJson);
    $('.results').empty();
    for (let i = 0; i< responseJson.length; i++) {
    $('.results').append(
        `<h2>${responseJson[i].name}</h2><br>
        <a href='${responseJson[i].url}'>${responseJson[i].url}</a>`
    )};
}

function watchForm() {
    $('Form').submit(event => {
        event.preventDefault();
        getRepo();
    });
}

watchForm();
