let results = [];

let showResults = function () {
    for (let prop in results) {
        console.log(prop);
        console.log(results[prop]);
    };
}


fetch("./Mock data.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        results = data;
        showResults();
    });
    

