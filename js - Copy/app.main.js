$(document).ready(function(){
    
    // set tab to default tabpanel on switching main panel
    $("#menuBar .nav-link").on('shown.bs.tab', function(event){
        var defaultTab = $(event.target).data("defaulttab");
        
        if($(event.target).data("defaulttab")){
            $('.lvl-2 a').removeClass('active');

            $('#mainContent>*').removeClass('active');
            $('#'+defaultTab).tab('show');

            $('.lvl-2 a[href="#'+defaultTab+'"').addClass('active');

        }

        // console.log($('#'+defaultTab));
        console.log('current :',$(event.target).text(),'<br/> prev:',$(event.relatedTarget).text());
    });
})