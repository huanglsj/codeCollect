/**
 * Created by Administrator on 2016/1/8.
 */
var defaultOptions = {
    beginyear:1920,                 //日期--年--份开始
    endyear:2020,                   //日期--年--份结束
    beginmonth:1,                   //日期--月--份结束
    endmonth:12,                    //日期--月--份结束
    beginday:1,                     //日期--日--份结束
    endday:31,                      //日期--日--份结束
}

function year(data){
    var date = new Date();
    var year = date.getFullYear();
    var len = defaultOptions.endyear - defaultOptions.beginyear;
    var html = "";
    for(var i = 0;i<=len;i++){
        html += '<div class="td">'+(defaultOptions.beginyear+i)+'</div>';
    }
    $("#year").html(html);
}

function month(data){
    var html = "";
    for(var i = 0;i<=defaultOptions.endmonth;i++){

        $('div').addClass('td').text((defaultOptions.beginmonth+i)) ;
    }
    $("#month").html(html);
}

function day(data){
    var html = "";
    for(var i = 0;i<=defaultOptions.endday;i++){
        html += '<div class="td">'+(defaultOptions.beginmonth+i)+'</div>';
    }
    $("#day").html(html);
}
