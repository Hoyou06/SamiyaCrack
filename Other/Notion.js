/*************************************************************************/
使用

and(and(归档 ==false, empty(取消时间) == true), or(买断 == true, 试用 == false))

if(and(and(prop("归档") ==false, or(empty(prop("取消时间")) == true, and(empty(prop("取消时间")) == false, prop("下次付款") > now()))), or(prop("买断") == true, prop("试用") == false)), true, false)



/*************************************************************************/
试用

and(and(归档 ==false, empty(取消时间) == true), and(激活时间+试用时间>now, 买断 == false))

if(and(and(prop("归档") ==false, empty(prop("取消时间")) == true), and(dateAdd(prop("激活时间"), toNumber(prop("试用天数")), "days") > now() , prop("买断") == false)), true, false)

/*************************************************************************/
买断

and(and(归档 ==false, empty(取消时间) == true), and(prop("试用天数") == 99999, 付款周期 == 买断))


if(and(and(prop("归档") ==false, empty(prop("取消时间")) == true), and(prop("试用天数") == 99999, prop("付款周期") == "买断")), true, false)
/*************************************************************************/

合租

if(合租人数>1)
    true
else
    false

if(prop("合租人数") > 1, true, false)

/*************************************************************************/
周期金额

if(合租 == false)
    周期金额 = 实际付款
else
    周期金额 = 实际付款-(合租人数-1)*合租人均收费

round(if(prop("合租") == false, prop("实际付款"), prop("实际付款") - (prop("合租人数") - 1) * prop("合租人均收费")) * 100) / 100

/*************************************************************************/
月均花费

if(付款周期 == 日)
    月均花费 = 周期金额*30
else
    if(付款周期 == 月)
        月均花费 = 周期金额
    else
        if(付款周期 == 季)
            月均花费 = 周期金额 / 3
        else
            if(付款周期 == 年)
                月均花费 = 周期金额/12
            else
                if(付款周期 == 买断)
                    月均花费 == 周期金额/36
                else
                    月均花费 == 99999

round(if(prop("付款周期") == "日", prop("周期金额") * 30, if(prop("付款周期") == "月", prop("周期金额"), if(prop("付款周期") == "季", prop("周期金额") / 3, if(prop("付款周期") == "年", prop("周期金额") / 12, if(prop("付款周期") == "买断", prop("周期金额") / 36, 99999))))) * 100) / 100

/*************************************************************************/
年均花费

月均花费 * 12

round(if(prop("付款周期") == "日", prop("周期金额") * 365, if(prop("付款周期") == "月", prop("周期金额") *12, if(prop("付款周期") == "季", prop("周期金额") *4 , if(prop("付款周期") == "年", prop("周期金额") , if(prop("付款周期") == "买断", prop("周期金额") / 3, 99999))))) * 100) / 100

/*************************************************************************/
总计花费

if(付款周期 == ***)
    总计花费 = (下次付款-首次付款) * 周期金额

if(prop("付款周期") == "日", dateBetween(prop("下次付款"), prop("首次付款"), "days") * prop("周期金额"), if(prop("付款周期") == "季", dateBetween(prop("下次付款"), prop("首次付款"), "quarters") * prop("周期金额"), if(prop("付款周期") == "月", dateBetween(prop("下次付款"), prop("首次付款"), "months") * prop("周期金额"), if(prop("付款周期") == "年", dateBetween(prop("下次付款"), prop("首次付款"), "years") * prop("周期金额"), if(prop("付款周期") == "买断", prop("周期金额"), 999999)))))

/*************************************************************************/
首次付款

if(试用==true)
    首次付款=激活时间+试用天数
else 
    首次付款=激活时间

if(prop("试用") == true, dateAdd(prop("激活时间"), toNumber(prop("试用天数")), "days"), prop("激活时间"))


/*************************************************************************/
上次付款

if(归档 == true)
    上次付款 == 2222/2/22
else
    if(试用 == true)
        上次付款 = 首次付款
    else
        if(付款周期 == 日)
            if(empty(取消时间) == true)
                上次付款 = 首次付款+(取消时间 - 首次付款)
            else  
                上次付款 = 首次付款+(now - 首次付款)
        else   
            if(付款周期 == 月)
                if(empty(取消时间) == true)
                    上次付款 = 首次付款+(取消时间 - 首次付款)
                else  
                    上次付款 = 首次付款+(now - 首次付款)
            else
                if(付款周期 == 季)
                    if(empty(取消时间) == true)
                        上次付款 = 首次付款+(取消时间 - 首次付款)
                    else  
                        上次付款 = 首次付款+(now - 首次付款)
                else
                    if(付款周期 == 年)
                        if(empty(取消时间) == true)
                            上次付款 = 首次付款+(取消时间 - 首次付款)
                        else  
                            上次付款 = 首次付款+(now - 首次付款)
                    else
                        if(付款周期 == 买断)
                            上次付款 = 首次付款
                        else
                            上次付款 = 2222/2/23

if(prop("归档") == true, prop("Test Time"), if(prop("试用") == true, prop("首次付款"), if(prop("付款周期") == "日", if(empty("取消时间") == true, dateAdd(prop("首次付款"), dateBetween(prop("取消时间"), prop("首次付款"), "days"), "days"), dateAdd(prop("首次付款"), dateBetween(now(), prop("首次付款"), "days"), "days")), if(prop("付款周期") == "月", if(empty("取消时间") == true, dateAdd(prop("首次付款"), dateBetween(prop("取消时间"), prop("首次付款"), "months"), "months"), dateAdd(prop("首次付款"), dateBetween(now(), prop("首次付款"), "months"), "months")), if(prop("付款周期") == "季", if(empty("取消时间") == true, dateAdd(prop("首次付款"), dateBetween(prop("取消时间"), prop("首次付款"), "quarters"), "quarters"), dateAdd(prop("首次付款"), dateBetween(now(), prop("首次付款"), "quarters"), "quarters")), if(prop("付款周期") == "年", if(empty("取消时间") == true, dateAdd(prop("首次付款"), dateBetween(prop("取消时间"), prop("首次付款"), "years"), "years"), dateAdd(prop("首次付款"), dateBetween(now(), prop("首次付款"), "years"), "years")), if(prop("买断") == true, prop("首次付款"), dateAdd(prop("Test Time"), 1, "days"))))))))

if(prop("买断") == true, prop("首次付款"), dateAdd(prop("Test Time"), 1, "days"))
/*************************************************************************/
下次付款

if(归档 == true)
    下次付款 == 2222/2/22
else
    if(试用 == true)
        下次付款 = 首次付款
    else
        if(付款周期 == 日)
            下次付款 = 上次付款 +1 
        else   
            if(付款周期 == 月)
                下次付款 = 上次付款 +1 
            else
                if(付款周期 == 季)
                    下次付款 = 上次付款 +1 
                else
                    if(付款周期 == 年)
                        下次付款 = 上次付款 +1 
                    else
                        下次付款 = 2222/2/23

if(prop("归档") == true, prop("Test Time"), if(prop("试用") == true, prop("首次付款"),if(prop("付款周期") == "日", dateAdd(prop("上次付款"), 1, "days"), if(prop("付款周期") == "月", dateAdd(prop("上次付款"), 30, "days"), if(prop("付款周期") == "季", dateAdd(prop("上次付款"), 1, "quarters"), if(prop("付款周期") == "年", dateAdd(prop("上次付款"), 1, "years"), dateAdd(prop("Test Time"), 1, "days")))))))


/*************************************************************************/
已用

if(使用 == true)
    ((上次付款-now) / (上次付款-下次付款))*100%
    +
    slice(◉◉◉◉◉◉◉◉◉◉,10 - ((上次付款-now) / (上次付款-下次付款))*10 )
else
    if(试用 == true)
        ((首次付款-now) / (首次付款-激活时间))*100%
        +
        slice(◉◉◉◉◉◉◉◉◉◉,10 - ((首次付款-now) / (首次付款-激活时间))*10 )
    else
        if(买断 == true)
            "已经买断啦"
        else
            "非正在使用中"

if(and(prop("使用") == true, prop("买断") == false), format(round(toNumber(dateBetween(prop("上次付款"), now(), "hours")) / toNumber(dateBetween(prop("上次付款"), prop("下次付款"), "hours")) * 100)) + "% " + slice("◉◉◉◉◉◉◉◉◉◉", 10 - toNumber(dateBetween(prop("上次付款"), now(), "hours")) / toNumber(dateBetween(prop("上次付款"), prop("下次付款"), "hours")) * 10), if(prop("试用") == true, format(round(toNumber(dateBetween(prop("首次付款"), now(), "hours")) / toNumber(dateBetween(prop("首次付款"), prop("激活时间"), "hours")) * 100)) + "% " + slice("◉◉◉◉◉◉◉◉◉◉", 10 - toNumber(dateBetween(prop("首次付款"), now(), "hours")) / toNumber(dateBetween(prop("首次付款"), prop("激活时间"), "hours")) * 10),if(prop("买断") == true,"已经买断啦", "非正在使用中")))


slice("‒‒‒‒‒‒‒‒‒‒", 0, floor(10 * dateBetween(now(), prop("上次付款"), "days") / dateBetween(prop("下次付款"), prop("上次付款"), "days"))) + "▶︎ " + format(round(100 * dateBetween(now(), prop("上次付款"), "days") / dateBetween(prop("下次付款"), prop("上次付款"), "days"))) + "%"


/*************************************************************************/
到期天数


    到期天数 = 首次付款 -now
 
if(归档 == true)
    -99999
if(empty(取消时间) == true)




round(if(and(prop("使用") == true,prop("买断") == false) == true,dateBetween(prop("下次付款"), now(), "hours")/24,if(prop("试用") == true, dateBetween(prop("首次付款"), now(), "hours")/24, if(prop("买断") == true, 99999, -99999))) *100)/100


/*************************************************************************/
描述

if(月均花费 >0)
    "每月支出 ¥ "+ 月均花费 + / + 付款周期
else
    if(月均花费 <0)
        "每月收入 ¥ "+月均花费 + / + 付款周期
    else
        "白嫖"
+ / + 分类

if(prop("月均花费")>0, "每月支出 ¥ "+ format(abs(prop("月均花费"))) + " / " + prop("付款周期") + "付", if(prop("月均花费")<0, "每月收入 ¥ "+ format(abs(prop("月均花费"))) + " / " + prop("付款周期") + "付" , "白嫖")) + " / " + prop("分类")

/*************************************************************************/