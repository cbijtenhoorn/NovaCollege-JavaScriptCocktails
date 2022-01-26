$(document).ready(function () {
    $('#search-btn').click(function () {
        //alert('hey');
        let search = $('#search-text').val();
        //alert(search);
        let search_url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + search;
        $.ajax({
            url: search_url,
            dataType: "json"
        }).done(function(result){
            // console.log(result);
            $('#search-result').empty();
            $.each(result.drinks, function(key, val){
                let drink_name = val.strDrink;
                let drink_instr = val.strInstructions;
                let drink_img = val.strDrinkThumb;

                $('#search-result').append(
                    '<div class="col-3">\n' +
                    '            <div class="card">\n' +
                    '                <img src=' + drink_img + ' class="card-img-top" alt="...">\n' +
                    '                <div class="card-body">\n' +
                    '                    <h5 class="card-title">' + drink_name + '</h5>\n' +
                    '                    <p class="card-text">' + drink_instr + '</p>\n' +
                    '                    <a href="#" class="btn btn-primary">Go somewhere</a>\n' +
                    '                </div>\n' +
                    '            </div>\n' +
                    '        </div>\n'
                )
            })
        })
    })
});