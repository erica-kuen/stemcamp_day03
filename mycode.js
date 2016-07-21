//for (var i = 1; i <= 12; i++)
    {
        //console.log (9 * i);
    }

//var favoriteFoods = ['pasta', 'ice cream', 'bagels'];
//for (var i = 0; i < favoriteFoods.length; i++)
    {
        //console.log(favoriteFoods[i]);
    }

//var favoriteRecipe = 
    {
    //recipeName: 'spaghetti',
    //servings: 2,
    //ingredients: ['pasta noodles', 'tomato sauce', 'garlic', 'pepper', 'italian seasoning']
    }
//var ingredients = favoriteRecipe.ingredients;
//function listInfo(info)
{
    //for (var i = 0; i < ingredients.length; i++)
    //document.getElementById("a").innerHTML += 'We are making ' + info.recipeName + ',  //which serves ' + info.servings + '. One ingredient is ' + info.ingredients[i] +'.';
}
    //listInfo(favoriteRecipe);

var pageNode = document.getElementsByTagName('div')[0];
var newParagraph = document.createElement('p');
var text = document.createTextNode('bbbbbbbbbbbb');
newParagraph.appendChild(text);
pageNode.appendChild(newParagraph);
