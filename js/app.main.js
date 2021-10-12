$(document).ready(function(){
    $('.lvl-2 .nav-item:nth-child(2) .nav-link').addClass('adjacent')

    function statGradientQuery(currentStat,maxStat){
        var percentage=0;
        var query;

        percentage = currentStat/maxStat * 100;

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


    var currentHp = $('.health').data('currentHp');
    var maxHp = $('.health').data('maxHp');

    $('.health').css("background", statGradientQuery(currentHp,maxHp));

    $('.stat-bar').each(function(){
        var currentStat = $(this).data('currentStat');
        var maxStat = $(this).data('maxStat');
        
        $(this).css("background", statGradientQuery(currentStat,maxStat));
    })

    $('#menuBar .nav-link').on('click',function(e){
        // remode existing opacity
        $('#menuBar .lvl-2 .nav-link').removeClass('adjacent')

        // console.log($(e.target));

        // when the clicked obj was main menu, set the second lvl-2 menu to have .adjacent
        if(typeof ($(e.target).data('defaulttab')) !== 'undefined'){
            console.log(typeof ($(e.target).data('defaulttab')));
            $('.lvl-2 .nav-item:nth-child(2) .nav-link').addClass('adjacent')
        }

        //  set .active adjacent element to have .adjacent 
        $(this).parent().prev().children('.nav-link').addClass('adjacent')
        $(this).parent().next().children('.nav-link').addClass('adjacent')
    })
})