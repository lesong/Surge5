//贵州油价定时提醒 纯自用 请自行申请api key
//cron "0 10 10 ? * *" script-path=https://raw.githubusercontent.com/deezertidal/private/main/oil.js,tag=贵州油价提醒

const apiurl = "https://apis.tianapi.com/oilprice/index?key=cbeefc7507913f0718c085f0a2aa1b90&prov=%E8%B4%B5%E5%B7%9E"

$httpClient.get(apiurl,function(error,reponse,data){
    if (error){
        console.log(error);
        $done();                  
    } else {
        var obj=JSON.parse(data);
        console.log(obj);
        var prov =  obj.result.prov;
        var p0 = "0号柴油:" +"¥"+ obj.result.p0+"\xa0\xa0\xa0";
        var p92 = "92号汽油:" +"¥"+ obj.result.p92+"\xa0\xa0\xa0";
        var p95 = "95号汽油:" +"¥"+ obj.result.p95+"\xa0\xa0\xa0";
        var p98 = "98号汽油:" +"¥"+ obj.result.p98 +"\xa0\xa0\xa0";
        var time= obj.result.time
        $notification.post(prov+"油价提醒",time,p92+p95+p98+p0);
        $done();
    }
}
);
