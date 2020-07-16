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
        if (data.meals[0].strIngredient1.length > 0) i += data.meals[0].strIngredient1 + " (" + data.meals[0].strMeasure1 + ") ";
        if (data.meals[0].strIngredient2.length > 0) i += data.meals[0].strIngredient2 + " (" + data.meals[0].strMeasure2 + ") ";
        if (data.meals[0].strIngredient3.length > 0) i += data.meals[0].strIngredient3 + " (" + data.meals[0].strMeasure3 + ") ";
        if (data.meals[0].strIngredient4.length > 0) i += data.meals[0].strIngredient4 + " (" + data.meals[0].strMeasure4 + ") ";
        if (data.meals[0].strIngredient5.length > 0) i += data.meals[0].strIngredient5 + " (" + data.meals[0].strMeasure5 + ") ";
        if (data.meals[0].strIngredient6.length > 0) i += data.meals[0].strIngredient6 + " (" + data.meals[0].strMeasure6 + ") ";
        if (data.meals[0].strIngredient7.length > 0) i += data.meals[0].strIngredient7 + " (" + data.meals[0].strMeasure7 + ") ";
        if (data.meals[0].strIngredient8.length > 0) i += data.meals[0].strIngredient8 + " (" + data.meals[0].strMeasure8 + ") ";
        if (data.meals[0].strIngredient9.length > 0) i += data.meals[0].strIngredient9 + " (" + data.meals[0].strMeasure9 + ") ";
        if (data.meals[0].strIngredient10.length > 0) i += data.meals[0].strIngredient10 + " (" + data.meals[0].strMeasure10 + ") ";
        if (data.meals[0].strIngredient11.length > 0) i += data.meals[0].strIngredient11 + " (" + data.meals[0].strMeasure11 + ") ";
        if (data.meals[0].strIngredient12.length > 0) i += data.meals[0].strIngredient12 + " (" + data.meals[0].strMeasure12 + ") ";
        if (data.meals[0].strIngredient13.length > 0) i += data.meals[0].strIngredient13 + " (" + data.meals[0].strMeasure13 + ") ";
        if (data.meals[0].strIngredient14.length > 0) i += data.meals[0].strIngredient14 + " (" + data.meals[0].strMeasure14 + ") ";
        if (data.meals[0].strIngredient15.length > 0) i += data.meals[0].strIngredient15 + " (" + data.meals[0].strMeasure15 + ") ";
        if (data.meals[0].strIngredient16.length > 0) i += data.meals[0].strIngredient16 + " (" + data.meals[0].strMeasure16 + ") ";
        if (data.meals[0].strIngredient17.length > 0) i += data.meals[0].strIngredient17 + " (" + data.meals[0].strMeasure17 + ") ";
        if (data.meals[0].strIngredient18.length > 0) i += data.meals[0].strIngredient18 + " (" + data.meals[0].strMeasure18 + ") ";
        if (data.meals[0].strIngredient19.length > 0) i += data.meals[0].strIngredient19 + " (" + data.meals[0].strMeasure19 + ") ";
        if (data.meals[0].strIngredient20.length > 0) i += data.meals[0].strIngredient20 + " (" + data.meals[0].strMeasure20 + ") ";
        $("#ingredients").html(i);
    })
    .catch(function(error){
        console.error(error);
    });
});