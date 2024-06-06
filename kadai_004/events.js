// $(function() {
//         console.log("loadイベントが発生しました");

//         // $(window)
//         $(document).on('scroll', function() {
//             console.log("scrollイベントが発生しました");
           
//         });
//     });


$(function() {
    
    // load event
    $(window).on('load', function() {
        console.log("loadイベントが発生しました");
    });

    //  scroll event
    $(document).on('scroll', function() {
        console.log("scrollイベントが発生しました");
    });
});