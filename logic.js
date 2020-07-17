$("#random").click(function (){
    $("#bot").css("display", "block");
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        $("#name").html(data.meals[0].strMeal);
        $("#type").html(data.meals[0].strCategory);
        $("#imagine").attr('src', data.meals[0].strMealThumb);
        var instruction = data.meals[0].strInstructions;
        instruction = instruction.replace(/\n/g, "<br />");
        $("#instruction").html(instruction);
        var url = data.meals[0].strYoutube;
        url = url.replace("watch?v=", "embed/");
        $("#yt").attr('src', url);
        var i = "";
        if (data.meals[0].strIngredient1 != "") i += data.meals[0].strIngredient1 + " (" + data.meals[0].strMeasure1 + ") ";
        if (data.meals[0].strIngredient2 != "") i += data.meals[0].strIngredient2 + " (" + data.meals[0].strMeasure2 + ") ";
        if (data.meals[0].strIngredient3 != "") i += data.meals[0].strIngredient3 + " (" + data.meals[0].strMeasure3 + ") ";
        if (data.meals[0].strIngredient4 != "") i += data.meals[0].strIngredient4 + " (" + data.meals[0].strMeasure4 + ") ";
        if (data.meals[0].strIngredient5 != "") i += data.meals[0].strIngredient5 + " (" + data.meals[0].strMeasure5 + ") ";
        if (data.meals[0].strIngredient6 != "") i += data.meals[0].strIngredient6 + " (" + data.meals[0].strMeasure6 + ") ";
        if (data.meals[0].strIngredient7 != "") i += data.meals[0].strIngredient7 + " (" + data.meals[0].strMeasure7 + ") ";
        if (data.meals[0].strIngredient8 != "") i += data.meals[0].strIngredient8 + " (" + data.meals[0].strMeasure8 + ") ";
        if (data.meals[0].strIngredient9 != "") i += data.meals[0].strIngredient9 + " (" + data.meals[0].strMeasure9 + ") ";
        if (data.meals[0].strIngredient10 != "") i += data.meals[0].strIngredient10 + " (" + data.meals[0].strMeasure10 + ") ";
        if (data.meals[0].strIngredient11 != "") i += data.meals[0].strIngredient11 + " (" + data.meals[0].strMeasure11 + ") ";
        if (data.meals[0].strIngredient12 != "") i += data.meals[0].strIngredient12 + " (" + data.meals[0].strMeasure12 + ") ";
        if (data.meals[0].strIngredient13 != "") i += data.meals[0].strIngredient13 + " (" + data.meals[0].strMeasure13 + ") ";
        if (data.meals[0].strIngredient14 != "") i += data.meals[0].strIngredient14 + " (" + data.meals[0].strMeasure14 + ") ";
        if (data.meals[0].strIngredient15 != "") i += data.meals[0].strIngredient15 + " (" + data.meals[0].strMeasure15 + ") ";
        if (data.meals[0].strIngredient16 != "") i += data.meals[0].strIngredient16 + " (" + data.meals[0].strMeasure16 + ") ";
        if (data.meals[0].strIngredient17 != "") i += data.meals[0].strIngredient17 + " (" + data.meals[0].strMeasure17 + ") ";
        if (data.meals[0].strIngredient18 != "") i += data.meals[0].strIngredient18 + " (" + data.meals[0].strMeasure18 + ") ";
        if (data.meals[0].strIngredient19 != "") i += data.meals[0].strIngredient19 + " (" + data.meals[0].strMeasure19 + ") ";
        if (data.meals[0].strIngredient20 != "") i += data.meals[0].strIngredient20 + " (" + data.meals[0].strMeasure20 + ") ";
        $("#ingredients").html(i);
    })
    .catch(function(error){
        console.error(error);
    });
});