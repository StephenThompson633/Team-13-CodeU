fetch("./Mock data.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        results = data;
        showResults();
    });

    etch('SearchData.json')
    .then(function (response) {
      if (!response.ok) {
        throw new Error("HTTP error, status = " + response.status);
      }
      return response.json();
    })
    .then(function (json) {
      for (var i = 0; i < json.searchResults.length; i++) {


        var divone = document.createElement("DIV");

        divone.setAttribute("class", "card");
        divone.setAttribute("style", "width:200px");



        var divtwo = document.createElement("DIV");
        divtwo.setAttribute("class", "card-body");
        divone.appendChild(divtwo);
        console.log(divone);



        var h4 = document.createElement("H3");
        h4.textContent = json.searchResults[i].Name;
        console.log(h4);
        divtwo.appendChild(h4);
        console.log(divone);



        var img = new Image();

        img.src = json.searchResults[i].photo;

        img.setAttribute("class", "card-img-top");

        img.setAttribute("alt", "Card Image");

        divone.appendChild(img);



        //document.getElementById("hello world").textContent = obj.word;;

        document.getElementById("img-container").appendChild(divone);

      }
    })
    .catch(function (error) {
      var p = document.createElement('p');
      p.appendChild(
        document.createTextNode('Error: ' + error.message)
      );
      document.body.insertBefore(p, myList);
    });
    

