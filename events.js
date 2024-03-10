$(function() {
        console.log("loadイベントが発生しました");

        // $(window)
        $(document).on('scroll', function() {
            console.log("scrollイベントが発生しました");
           
        });
    });