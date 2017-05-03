/**
 * Created by Administrator on 2016/1/8.
 */
var defaultOptions = {
    beginyear:1920,                 //����--��--�ݿ�ʼ
    endyear:2020,                   //����--��--�ݽ���
    beginmonth:1,                   //����--��--�ݽ���
    endmonth:12,                    //����--��--�ݽ���
    beginday:1,                     //����--��--�ݽ���
    endday:31,                      //����--��--�ݽ���
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
