// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var money=parseInt(currency);
    var change={ "H": 50, "Q": 25, "D": 10, "N":5, "P":1 };
    var obj={};
    for (var key in change) {
        if(money<=0){
            return obj;
            break;
        }else if(money >=10001){
            return obj={error: "You are rich, my friend! We don't have so much coins for exchange"};
            break; 
        }else{
            check=parseInt(money/change[key]);
            check_ost=money%change[key];
            if(check>0){
                obj[key]=check;
                if(check_ost==0){
                    return obj;
                    break; 
                }else{
                    money = money-(money-check_ost);
                }
            } 
        }
    }
}
