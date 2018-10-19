//获取相对路径
var pathName = document.location.pathname;
var index = pathName.substr(1).indexOf("/");
var projectPath = pathName.substr(0,index+1);

//获取绝对路径
var localObj = window.location;
var contextPath = localObj.pathname.split("/")[1];
var basePath = localObj.protocol + "//" + localObj.host + "/"+ contextPath;

//获取地址栏参数
function getUrlParams(){
	var loc = location.href;
	var n1 = loc.length;//地址的总长度
	var n2 = loc.indexOf("?");//取得?号的位置
	var urlParams = decodeURI(loc.substr(n2+1, n1-n2));//从?号后面的内容
	return urlParams;
}
//获取地址栏参数的值
function getUrlParamValue(name){
  var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
  var r = decodeURI(window.location.search.substr(1)).match(reg);
  if(r!=null)
	  return unescape(r[2]);
  return null;
}

//保留2位小数，如：2，会在2后面补上00.即2.00
function toDecimal2(x) {
    var f = Math.round(x * 100) / 100;
    var s = f.toString();
    var rs = s.indexOf('.');
    if (rs < 0) {
        rs = s.length;
        s += '.';
    }
    while (s.length <= rs + 2) {
        s += '0';
    }
    return s;
}