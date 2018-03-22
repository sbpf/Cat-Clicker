$(document).ready(function(){
    $(function() {

    var model = {
        catData : [
            {
                catId : 1,
                catName : "Pretty Cat",
                clicks : 0,
                imageSource : "images/prettyCat.jpeg"
            },
            {
                catId : 2,
                catName : "Kitten",
                clicks : 0,
                imageSource : "images/kitten.jpg"
            },
            {
                catId : 3,
                catName : "Yawning Cat",
                clicks : 0,
                imageSource : "images/catYawn.jpg"
            },            
            {
                catId : 4,
                catName : "Sleeping Cat",
                clicks : 0,
                imageSource : "images/sleepingCat.jpg"
            },
            {
                catId : 5,
                catName : "Two Cats",
                clicks : 0,
                imageSource : "images/twoCats.jpg"
            }
        ]
    };
    
    var controller = {
        init : function(){            
            view.init();
        },
        displayCat : function(index){
            view.renderCatImage(model.catData[index]);
        },
        incrementClickCount : function(index){
           view.updateClicks(++(model.catData[index].clicks));
        }
    };

    var view = {
        init : function(){
            $(".list-group-item").click(function(){                
                // Make the selected list item as Active row
                $(".list-group-item").removeClass("active");
                $(this).addClass("active");

                // Pass the list - id to the Controller to display the corresponding Cat
                controller.displayCat(this.id);
            });

            $("img").click(function(){
                controller.incrementClickCount($(".active").attr("id"));
            });
        },
        renderCatImage : function(catObj){
            $(".catDisplayArea").show();
            $('#catName').text(catObj.catName).show();
            $('#score').text(catObj.clicks + "  clicks").show();
            $('.catImage').attr("src",catObj.imageSource).show();
        }, 
        updateClicks : function(clicks){
            $("#score").text(clicks + "  clicks");            
        }
    };
    controller.init();
}());
});

