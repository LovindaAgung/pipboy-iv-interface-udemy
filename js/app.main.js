$(document).ready(function(){

    function healtGradientQuery(currentHp,maxHp){
        var percentage=0;
        var query;

        percentage = currentHp/maxHp * 100;

        percentage > 0 ? query='linear-gradient(90deg, var(--text-100) '+percentage+'%, rgba(29,38,113,0) '+percentage+'%)':'';
        
        // console.log(query);
        return query;
    }
    
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
        // console.log('current :',$(event.target).text(),'<br/> prev:',$(event.relatedTarget).text());
    });


    var currentHp = parseInt($('#currentHealth').text());
    var maxHp = parseInt($('#maxHealth').text());

    $('.health').css("background", healtGradientQuery(currentHp,maxHp));
})