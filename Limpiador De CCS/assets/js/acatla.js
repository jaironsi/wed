/([\|\w]*:)?\w+: ([\/\w+]+)?/;var key;var options={};(function(){var adyen=window.adyen=window.adyen||{};adyen.cse=adyen.cse||{};adyen.cse.version="0_1_20";adyen.cse.id="4114507938303534";adyen.cse.available=true;adyen.cse.plugins=adyen.cse.plugins||{};adyen.cse.plugins.version="0_1_19";(function(){var adyen=window.adyen=window.adyen||{},cardTypes=(function(){var Cards=new makeArray(27);Cards[0]=new CardType("mc","51,52,53,54,55,22,23,24,25,26,27","16");var MasterCard=Cards[0];Cards[1]=new CardType("visadankort","4571","16");var VisaDankort=Cards[1];Cards[2]=new CardType("visa","4","13,16");var VisaCard=Cards[2];Cards[3]=new CardType("amex","34,37","15");var AmExCard=Cards[3];Cards[4]=new CardType("vias","9","16");var AdyenCard=Cards[4];Cards[5]=new CardType("diners","36","14");var DinersClubCard=Cards[5];Cards[6]=new CardType("maestrouk","6759","16,18,19");var MaestroUKCard=Cards[6];Cards[7]=new CardType("solo","6767","16,18,19");var SoloCard=Cards[7];Cards[8]=new CardType("laser","6304,6706,677117,677120","16,17,18,19");var LaserCard=Cards[8];Cards[9]=new CardType("discover","6011,644,645,646,647,648,649,65","16");var DiscoverCard=Cards[9];Cards[10]=new CardType("jcb","3528,3529,353,354,355,356,357,358","16,19");var JCBCard=Cards[10];Cards[11]=new CardType("bcmc","6703","16,17,18,19");var Bcmc=Cards[11];Cards[12]=new CardType("bijcard","5100081","16");var BijCard=Cards[12];Cards[13]=new CardType("dankort","5019","16");var Dankort=Cards[13];Cards[14]=new CardType("hipercard","606282","16");var Hipercard=Cards[14];Cards[15]=new CardType("maestro","50,56,57,58,6","16,17,18,19");var MaestroCard=Cards[15];Cards[16]=new CardType("elo","506699,50670,50671,50672,50673,50674,50675,50676,506770,506771,506772,506773,506774,506775,506776,506777,506778,401178,438935,451416,457631,457632,504175,627780,636297,636368","16");var Elo=Cards[16];Cards[17]=new CardType("uatp","1","15");var Uatp=Cards[17];Cards[18]=new CardType("cup","62","14,15,16,17,18,19");var Cup=Cards[18];Cards[19]=new CardType("cartebancaire","4,5,6","16");var CarteBancaire=Cards[19];Cards[20]=new CardType("visaalphabankbonus","450903","16");var VisAlphaBankBonus=Cards[20];Cards[21]=new CardType("mcalphabankbonus","510099","16");var McAlphaBankBonus=Cards[21];Cards[22]=new CardType("hiper","637095,637599,637609,637612","16");var Hiper=Cards[22];Cards[23]=new CardType("oasis","982616","16");var Oasis=Cards[23];Cards[24]=new CardType("karenmillen","98261465","16");var Karenmillen=Cards[24];Cards[25]=new CardType("warehouse","982633","16");var Warehouse=Cards[25];var LuhnCheckSum=Cards[26]=new CardType();function CheckCardNumber(cardNumber,expYear,expMon,cardType){var tmpyear;if(cardNumber.length==0){alert("Please enter a Card Number.");return false}
if(expYear.length==0){alert("Please enter the Expiration Year.");return false}
if(expYear>96){tmpyear="19"+expYear}else{if(expYear<21){tmpyear="20"+expYear}else{alert("The Expiration Year is not valid.");return false}}
tmpmonth=expMon;if(!(new CardType()).isExpiryDate(tmpyear,tmpmonth)){alert("This card has already expired.");return false}
card=cardType;var retval=eval(card+'.checkCardNumber("'+cardNumber+'", '+tmpyear+", "+tmpmonth+");");cardname="";if(retval){return true}else{for(var n=0;n<Cards.size;n++){if(Cards[n].checkCardNumber(cardNumber,tmpyear,tmpmonth)){cardname=Cards[n].getCardType();break}}
if(cardname.length>0){alert("This looks like a "+cardname+" number, not a "+card+" number.")}else{alert("This card number is not valid.")}}}
function CardType(){var f;var a=CardType.arguments;var d=CardType.arguments.length;this.objname="object CardType";var c=(d>0)?a[0]:"CardObject";var e=(d>1)?a[1]:"0,1,2,3,4,5,6,7,8,9";var b=(d>2)?a[2]:"13,14,15,16,19";this.setCardNumber=setCardNumber;this.setCardType=setCardType;this.setLen=setLen;this.setRules=setRules;this.setExpiryDate=setExpiryDate;this.setCardType(c);this.setLen(b);this.setRules(e);if(d>4){this.setExpiryDate(a[3],a[4])}
this.checkCardNumber=checkCardNumber;this.getExpiryDate=getExpiryDate;this.getCardType=getCardType;this.isCardNumber=isCardNumber;this.isExpiryDate=isExpiryDate;this.luhnCheck=luhnCheck;return this}
function checkCardNumber(){var a=checkCardNumber.arguments;var e=checkCardNumber.arguments.length;var c=(e>0)?a[0]:this.cardnumber;var b=(e>1)?a[1]:this.year;var d=(e>2)?a[2]:this.month;this.setCardNumber(c);this.setExpiryDate(b,d);if(!this.isCardNumber()){return false}
if(!this.isExpiryDate()){return false}
return true}
function getCardType(){return this.cardtype}
function getExpiryDate(){return this.month+"/"+this.year}
function isCardNumber(){var b=isCardNumber.arguments;var d=isCardNumber.arguments.length;var c=(d>0)?b[0]:this.cardnumber;if(!this.luhnCheck()){return false}
for(var f=0;f<this.len.size;f++){if(c.toString().length==this.len[f]){for(var a=0;a<this.rules.size;a++){var e=c.substring(0,this.rules[a].toString().length);if(e==this.rules[a]){return true}}
return false}}
return false}
function isExpiryDate(){var a=isExpiryDate.arguments;var b=isExpiryDate.arguments.length;year=b>0?a[0]:this.year;month=b>1?a[1]:this.month;if(!isNum(year+"")){return false}
if(!isNum(month+"")){return false}
today=new Date();expiry=new Date(year,month);if(today.getTime()>expiry.getTime()){return false}else{return true}}
function isNum(a){a=a.toString();if(a.length==0){return false}
for(var b=0;b<a.length;b++){if(a.substring(b,b+1)<"0"||a.substring(b,b+1)>"9"){return false}}
return true}
function luhnCheck(){var a=luhnCheck.arguments;var g=luhnCheck.arguments.length;var c=g>0?a[0]:this.cardnumber;if(!isNum(c)){return false}
var b=c.length;var d=b&1;var e=0;for(var f=0;f<b;f++){var h=parseInt(c.charAt(f));if(!((f&1)^d)){h*=2;if(h>9){h-=9}}
e+=h}
if(e%10==0){return true}else{return false}}
function makeArray(a){this.size=a;return this}
function setCardNumber(a){this.cardnumber=a;return this}
function setCardType(a){this.cardtype=a;return this}
function setExpiryDate(a,b){this.year=a;this.month=b;return this}
function setLen(a){if(a.length==0||a==null){a="13,14,15,16,19"}
var c=a;n=1;while(c.indexOf(",")!=-1){c=c.substring(c.indexOf(",")+1,c.length);n++}
this.len=new makeArray(n);n=0;while(a.indexOf(",")!=-1){var b=a.substring(0,a.indexOf(","));this.len[n]=b;a=a.substring(a.indexOf(",")+1,a.length);n++}
this.len[n]=a;return this}
function setRules(c){if(c.length==0||c==null){c="0,1,2,3,4,5,6,7,8,9"}
var b=c;n=1;while(b.indexOf(",")!=-1){b=b.substring(b.indexOf(",")+1,b.length);n++}
this.rules=new makeArray(n);n=0;while(c.indexOf(",")!=-1){var a=c.substring(0,c.indexOf(","));this.rules[n]=a;c=c.substring(c.indexOf(",")+1,c.length);n++}
this.rules[n]=c;return this}
function contains(b,d){var c=b.length;while(c--){if(b[c]===d){return true}}
return false}
function getBaseCard(e,c){for(var d=0;d<(Cards.size-1);d++){for(var h=0;h<Cards[d].len.size;h++){if(e.toString().length<=Cards[d].len[h]){for(var a=0;a<Cards[d].rules.size;a++){var b=Cards[d].rules[a].toString().length;if(b>e.toString().length){b=e.toString().length}
var g=e.substring(0,b);var f=Cards[d].rules[a].toString().substring(0,b);if(g===f){if(contains(c,Cards[d].cardtype)){return Cards[d]}
if(contains(c,MasterCard.cardtype)){if(Cards[d].cardtype===MaestroCard.cardtype){return MasterCard}}}}}}}
return null}
function getBaseCardByType(b){for(var a=0;a<(Cards.size-1);a++){if(Cards[a].cardtype==b){return Cards[a]}}
return null}
var availableTypes=[];adyen.cardTypes=Cards;for(var i=Cards.size;i-->0;){if(Cards[i]&&Cards[i].cardtype){availableTypes.push(Cards[i].cardtype)}}
var determineCache={};Cards.determine=function(variant){if(!determineCache.hasOwnProperty(variant)){var currentCardType=null,currentMatchSize=0;console.log("Determining card type for "+variant);console.log("Variants",availableTypes);for(var i=Cards.size;i-->0;){var card=Cards[i];if(!contains(availableTypes,card.cardtype)){console.log("  CardType Skipped",card.cardtype);continue}
for(var c=0;c<card.rules.size;c++){var len=Math.min(variant.length,card.rules[c].length);if(len<=1||variant.length<card.rules[c].length){continue}
if(variant.substring(0,len)===card.rules[c].substring(0,len)){if(len>currentMatchSize){console.log("Setting card type to ",card);currentCardType=card;currentMatchSize=len}}}
card.setCardNumber(null)}
if(currentCardType===null){console.log("Could not determine card type, so falling back to HPP implementation: "+variant);currentCardType=getBaseCard(variant,availableTypes)}
determineCache[variant]=currentCardType}
return determineCache[variant]};return Cards}()),nameForType={mc:"MasterCard",visadankort:"Visa Dankort",visa:"VISA",amex:"American Express",vias:"Adyen Card",diners:"Diners Club",maestrouk:"Maestro UK",solo:"Solo",laser:"Laser",discover:"Discover",jcb:"JCB",bcmc:"Bancontact/Mister Cash",bijcard:"de Bijenkorf Card",dankort:"Dankort",hipercard:"HiperCard",maestro:"Maestro",elo:"ELO",uatp:"UATP",cup:"China Union Pay",cartebancaire:"Carte Bancaire",visaalphabankbonus:"Alpha Bank Visa Bonus",mcalphabankbonus:"Alpha Bank Mastercard Bonus",karenmillen:"Karen Millen GiftCard",oasis:"Oasis GiftCard",warehouse:"Warehouse GiftCard"};adyen.CardTypeDetection={version:"0_1_19",getHandler:function(cardTypeElement){return function(ev){if(ev.cardTypeDetermined){return}
ev.cardTypeDetermined=true;var type=null,node=ev.target||ev.srcElement,val=(node||{}).value||"";val=val.replace(/\D/g,"");if(val.length>2){type=cardTypes.determine(val)}
var finalType=type&&type.cardtype||"unknown";if(typeof cardTypeElement==="function"){cardTypeElement(finalType,nameForType[finalType])}else{cardTypeElement.innerHTML='<span class="cse-cardtype-label">'+(nameForType[finalType]||finalType)+"</span>";cardTypeElement.className=(cardTypeElement.className||"").replace(/(^|\s)cse-cardtype-\w+/ig,"").replace(/^\s+|\s+$/g,"")+" cse-cardtype-"+finalType}}}}}());(function(root,fnDefine){var define,exports,df=function(){return ""};(function(){try{var b=[new Uint8Array(1),new Uint32Array(1),new Int32Array(1)];return}catch(g){}
function f(e,a){return this.slice(e,a)}
function c(j,e){if(arguments.length<2){e=0}
for(var a=0,h=j.length;a<h;++a,++e){this[e]=j[a]&255}}
function d(e){var a;if(typeof e==="number"){a=new Array(e);for(var h=0;h<e;++h){a[h]=0}}else{a=e.slice(0)}
a.subarray=f;a.buffer=a;a.byteLength=a.length;a.set=c;if(typeof e==="object"&&e.buffer){a.buffer=e.buffer}
return a}
try{window.Uint8Array=d}catch(g){}
try{window.Uint32Array=d}catch(g){}
try{window.Int32Array=d}catch(g){}})();(function(){try{if(typeof window==="undefined"){return}
if("btoa"in window){return}
var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";window.btoa=function(h){var f="";var g,e;for(g=0,e=h.length;g<e;g+=3){var l=h.charCodeAt(g)&255;var k=h.charCodeAt(g+1)&255;var j=h.charCodeAt(g+2)&255;var d=l>>2,c=((l&3)<<4)|(k>>4);var o=g+1<e?((k&15)<<2)|(j>>6):64;var m=g+2<e?(j&63):64;f+=a.charAt(d)+a.charAt(c)+a.charAt(o)+a.charAt(m)}
return f}}catch(b){}})();if(typeof JSON!=="object"){JSON={}}
(function(){function f(n){return n<10?"0"+n:n}
if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()}}
var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+string+'"'}
function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)}
if(typeof rep==="function"){value=rep.call(holder,key,value)}
switch(typeof value){case "string":return quote(value);case "number":return isFinite(value)?String(value):"null";case "boolean":case "null":return String(value);case "object":if(!value){return "null"}
gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||"null"}
v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";gap=mind;return v}
if(rep&&typeof rep==="object"){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==="string"){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}
v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";gap=mind;return v}}
if(typeof JSON.stringify!=="function"){JSON.stringify=function(value,replacer,space){var i;gap="";indent="";if(typeof space==="number"){for(i=0;i<space;i+=1){indent+=" "}}else{if(typeof space==="string"){indent=space}}
rep=replacer;if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")}
return str("",{"":value})}}
if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==="object"){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}
return reviver.call(holder,key,value)}
text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return "\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})}
if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j}
throw new SyntaxError("JSON.parse")}}}());var b64map="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var b64padchar="=";function hex2b64(d){var b;var e;var a="";for(b=0;b+3<=d.length;b+=3){e=parseInt(d.substring(b,b+3),16);a+=b64map.charAt(e>>6)+b64map.charAt(e&63)}
if(b+1==d.length){e=parseInt(d.substring(b,b+1),16);a+=b64map.charAt(e<<2)}else{if(b+2==d.length){e=parseInt(d.substring(b,b+2),16);a+=b64map.charAt(e>>2)+b64map.charAt((e&3)<<4)}}
while((a.length&3)>0){a+=b64padchar}
return a}
function b64tohex(e){var c="";var d;var a=0;var b;for(d=0;d<e.length;++d){if(e.charAt(d)==b64padchar){break}
v=b64map.indexOf(e.charAt(d));if(v<0){continue}
if(a==0){c+=int2char(v>>2);b=v&3;a=1}else{if(a==1){c+=int2char((b<<2)|(v>>4));b=v&15;a=2}else{if(a==2){c+=int2char(b);c+=int2char(v>>2);b=v&3;a=3}else{c+=int2char((b<<2)|(v>>4));c+=int2char(v&15);a=0}}}}
if(a==1){c+=int2char(b<<2)}
return c}
function b64toBA(e){var d=b64tohex(e);var c;var b=new Array();for(c=0;2*c<d.length;++c){b[c]=parseInt(d.substring(2*c,2*c+2),16)}
return b}
var dbits;var canary=244837814094590;var j_lm=((canary&16777215)==15715070);function BigInteger(e,d,f){if(e!=null){if("number"==typeof e){this.fromNumber(e,d,f)}else{if(d==null&&"string"!=typeof e){this.fromString(e,256)}else{this.fromString(e,d)}}}}
function nbi(){return new BigInteger(null)}
function am1(f,a,b,e,h,g){while(--g>=0){var d=a*this[f++]+b[e]+h;h=Math.floor(d/67108864);b[e++]=d&67108863}
return h}
function am2(f,q,r,e,o,a){var k=q&32767,p=q>>15;while(--a>=0){var d=this[f]&32767;var g=this[f++]>>15;var b=p*d+g*k;d=k*d+((b&32767)<<15)+r[e]+(o&1073741823);o=(d>>>30)+(b>>>15)+p*g+(o>>>30);r[e++]=d&1073741823}
return o}
function am3(f,q,r,e,o,a){var k=q&16383,p=q>>14;while(--a>=0){var d=this[f]&16383;var g=this[f++]>>14;var b=p*d+g*k;d=k*d+((b&16383)<<14)+r[e]+o;o=(d>>28)+(b>>14)+p*g;r[e++]=d&268435455}
return o}
if(j_lm&&(navigator.appName=="Microsoft Internet Explorer")){BigInteger.prototype.am=am2;dbits=30}else{if(j_lm&&(navigator.appName!="Netscape")){BigInteger.prototype.am=am1;dbits=26}else{BigInteger.prototype.am=am3;dbits=28}}
BigInteger.prototype.DB=dbits;BigInteger.prototype.DM=((1<<dbits)-1);BigInteger.prototype.DV=(1<<dbits);var BI_FP=52;BigInteger.prototype.FV=Math.pow(2,BI_FP);BigInteger.prototype.F1=BI_FP-dbits;BigInteger.prototype.F2=2*dbits-BI_FP;var BI_RM="0123456789abcdefghijklmnopqrstuvwxyz";var BI_RC=new Array();var rr,vv;rr="0".charCodeAt(0);for(vv=0;vv<=9;++vv){BI_RC[rr++]=vv}
rr="a".charCodeAt(0);for(vv=10;vv<36;++vv){BI_RC[rr++]=vv}
rr="A".charCodeAt(0);for(vv=10;vv<36;++vv){BI_RC[rr++]=vv}
function int2char(a){return BI_RM.charAt(a)}
function intAt(b,a){var d=BI_RC[b.charCodeAt(a)];return(d==null)?-1:d}
function bnpCopyTo(b){for(var a=this.t-1;a>=0;--a){b[a]=this[a]}
b.t=this.t;b.s=this.s}
function bnpFromInt(a){this.t=1;this.s=(a<0)?-1:0;if(a>0){this[0]=a}else{if(a<-1){this[0]=a+this.DV}else{this.t=0}}}
function nbv(a){var b=nbi();b.fromInt(a);return b}
function bnpFromString(h,c){var e;if(c==16){e=4}else{if(c==8){e=3}else{if(c==256){e=8}else{if(c==2){e=1}else{if(c==32){e=5}else{if(c==4){e=2}else{this.fromRadix(h,c);return}}}}}}
this.t=0;this.s=0;var g=h.length,d=false,f=0;while(--g>=0){var a=(e==8)?h[g]&255:intAt(h,g);if(a<0){if(h.charAt(g)=="-"){d=true}
continue}
d=false;if(f==0){this[this.t++]=a}else{if(f+e>this.DB){this[this.t-1]|=(a&((1<<(this.DB-f))-1))<<f;this[this.t++]=(a>>(this.DB-f))}else{this[this.t-1]|=a<<f}}
f+=e;if(f>=this.DB){f-=this.DB}}
if(e==8&&(h[0]&128)!=0){this.s=-1;if(f>0){this[this.t-1]|=((1<<(this.DB-f))-1)<<f}}
this.clamp();if(d){BigInteger.ZERO.subTo(this,this)}}
function bnpClamp(){var a=this.s&this.DM;while(this.t>0&&this[this.t-1]==a){--this.t}}
function bnToString(c){if(this.s<0){return "-"+this.negate().toString(c)}
var e;if(c==16){e=4}else{if(c==8){e=3}else{if(c==2){e=1}else{if(c==32){e=5}else{if(c==4){e=2}else{return this.toRadix(c)}}}}}
var g=(1<<e)-1,l,a=false,h="",f=this.t;var j=this.DB-(f*this.DB)%e;if(f-->0){if(j<this.DB&&(l=this[f]>>j)>0){a=true;h=int2char(l)}
while(f>=0){if(j<e){l=(this[f]&((1<<j)-1))<<(e-j);l|=this[--f]>>(j+=this.DB-e)}else{l=(this[f]>>(j-=e))&g;if(j<=0){j+=this.DB;--f}}
if(l>0){a=true}
if(a){h+=int2char(l)}}}
return a?h:"0"}
function bnNegate(){var a=nbi();BigInteger.ZERO.subTo(this,a);return a}
function bnAbs(){return(this.s<0)?this.negate():this}
function bnCompareTo(b){var d=this.s-b.s;if(d!=0){return d}
var c=this.t;d=c-b.t;if(d!=0){return(this.s<0)?-d:d}
while(--c>=0){if((d=this[c]-b[c])!=0){return d}}
return 0}
function nbits(a){var c=1,b;if((b=a>>>16)!=0){a=b;c+=16}
if((b=a>>8)!=0){a=b;c+=8}
if((b=a>>4)!=0){a=b;c+=4}
if((b=a>>2)!=0){a=b;c+=2}
if((b=a>>1)!=0){a=b;c+=1}
return c}
function bnBitLength(){if(this.t<=0){return 0}
return this.DB*(this.t-1)+nbits(this[this.t-1]^(this.s&this.DM))}
function bnpDLShiftTo(c,b){var a;for(a=this.t-1;a>=0;--a){b[a+c]=this[a]}
for(a=c-1;a>=0;--a){b[a]=0}
b.t=this.t+c;b.s=this.s}
function bnpDRShiftTo(c,b){for(var a=c;a<this.t;++a){b[a-c]=this[a]}
b.t=Math.max(this.t-c,0);b.s=this.s}
function bnpLShiftTo(j,e){var b=j%this.DB;var a=this.DB-b;var g=(1<<a)-1;var f=Math.floor(j/this.DB),h=(this.s<<b)&this.DM,d;for(d=this.t-1;d>=0;--d){e[d+f+1]=(this[d]>>a)|h;h=(this[d]&g)<<b}
for(d=f-1;d>=0;--d){e[d]=0}
e[f]=h;e.t=this.t+f+1;e.s=this.s;e.clamp()}
function bnpRShiftTo(g,d){d.s=this.s;var e=Math.floor(g/this.DB);if(e>=this.t){d.t=0;return}
var b=g%this.DB;var a=this.DB-b;var f=(1<<b)-1;d[0]=this[e]>>b;for(var c=e+1;c<this.t;++c){d[c-e-1]|=(this[c]&f)<<a;d[c-e]=this[c]>>b}
if(b>0){d[this.t-e-1]|=(this.s&f)<<a}
d.t=this.t-e;d.clamp()}
function bnpSubTo(d,f){var e=0,g=0,b=Math.min(d.t,this.t);while(e<b){g+=this[e]-d[e];f[e++]=g&this.DM;g>>=this.DB}
if(d.t<this.t){g-=d.s;while(e<this.t){g+=this[e];f[e++]=g&this.DM;g>>=this.DB}
g+=this.s}else{g+=this.s;while(e<d.t){g-=d[e];f[e++]=g&this.DM;g>>=this.DB}
g-=d.s}
f.s=(g<0)?-1:0;if(g<-1){f[e++]=this.DV+g}else{if(g>0){f[e++]=g}}
f.t=e;f.clamp()}
function bnpMultiplyTo(c,e){var b=this.abs(),f=c.abs();var d=b.t;e.t=d+f.t;while(--d>=0){e[d]=0}
for(d=0;d<f.t;++d){e[d+b.t]=b.am(0,f[d],e,d,0,b.t)}
e.s=0;e.clamp();if(this.s!=c.s){BigInteger.ZERO.subTo(e,e)}}
function bnpSquareTo(d){var a=this.abs();var b=d.t=2*a.t;while(--b>=0){d[b]=0}
for(b=0;b<a.t-1;++b){var e=a.am(b,a[b],d,2*b,0,1);if((d[b+a.t]+=a.am(b+1,2*a[b],d,2*b+1,e,a.t-b-1))>=a.DV){d[b+a.t]-=a.DV;d[b+a.t+1]=1}}
if(d.t>0){d[d.t-1]+=a.am(b,a[b],d,2*b,0,1)}
d.s=0;d.clamp()}
function bnpDivRemTo(n,h,g){var w=n.abs();if(w.t<=0){return}
var k=this.abs();if(k.t<w.t){if(h!=null){h.fromInt(0)}
if(g!=null){this.copyTo(g)}
return}
if(g==null){g=nbi()}
var d=nbi(),a=this.s,l=n.s;var v=this.DB-nbits(w[w.t-1]);if(v>0){w.lShiftTo(v,d);k.lShiftTo(v,g)}else{w.copyTo(d);k.copyTo(g)}
var p=d.t;var b=d[p-1];if(b==0){return}
var o=b*(1<<this.F1)+((p>1)?d[p-2]>>this.F2:0);var A=this.FV/o,z=(1<<this.F1)/o,x=1<<this.F2;var u=g.t,s=u-p,f=(h==null)?nbi():h;d.dlShiftTo(s,f);if(g.compareTo(f)>=0){g[g.t++]=1;g.subTo(f,g)}
BigInteger.ONE.dlShiftTo(p,f);f.subTo(d,d);while(d.t<p){d[d.t++]=0}
while(--s>=0){var c=(g[--u]==b)?this.DM:Math.floor(g[u]*A+(g[u-1]+x)*z);if((g[u]+=d.am(0,c,g,s,0,p))<c){d.dlShiftTo(s,f);g.subTo(f,g);while(g[u]<--c){g.subTo(f,g)}}}
if(h!=null){g.drShiftTo(p,h);if(a!=l){BigInteger.ZERO.subTo(h,h)}}
g.t=p;g.clamp();if(v>0){g.rShiftTo(v,g)}
if(a<0){BigInteger.ZERO.subTo(g,g)}}
function bnMod(b){var c=nbi();this.abs().divRemTo(b,null,c);if(this.s<0&&c.compareTo(BigInteger.ZERO)>0){b.subTo(c,c)}
return c}
function Classic(a){this.m=a}
function cConvert(a){if(a.s<0||a.compareTo(this.m)>=0){return a.mod(this.m)}else{return a}}
function cRevert(a){return a}
function cReduce(a){a.divRemTo(this.m,null,a)}
function cMulTo(a,c,b){a.multiplyTo(c,b);this.reduce(b)}
function cSqrTo(a,b){a.squareTo(b);this.reduce(b)}
Classic.prototype.convert=cConvert;Classic.prototype.revert=cRevert;Classic.prototype.reduce=cReduce;Classic.prototype.mulTo=cMulTo;Classic.prototype.sqrTo=cSqrTo;function bnpInvDigit(){if(this.t<1){return 0}
var a=this[0];if((a&1)==0){return 0}
var b=a&3;b=(b*(2-(a&15)*b))&15;b=(b*(2-(a&255)*b))&255;b=(b*(2-(((a&65535)*b)&65535)))&65535;b=(b*(2-a*b%this.DV))%this.DV;return(b>0)?this.DV-b:-b}
function Montgomery(a){this.m=a;this.mp=a.invDigit();this.mpl=this.mp&32767;this.mph=this.mp>>15;this.um=(1<<(a.DB-15))-1;this.mt2=2*a.t}
function montConvert(a){var b=nbi();a.abs().dlShiftTo(this.m.t,b);b.divRemTo(this.m,null,b);if(a.s<0&&b.compareTo(BigInteger.ZERO)>0){this.m.subTo(b,b)}
return b}
function montRevert(a){var b=nbi();a.copyTo(b);this.reduce(b);return b}
function montReduce(a){while(a.t<=this.mt2){a[a.t++]=0}
for(var c=0;c<this.m.t;++c){var b=a[c]&32767;var d=(b*this.mpl+(((b*this.mph+(a[c]>>15)*this.mpl)&this.um)<<15))&a.DM;b=c+this.m.t;a[b]+=this.m.am(0,d,a,c,0,this.m.t);while(a[b]>=a.DV){a[b]-=a.DV;a[++b]++}}
a.clamp();a.drShiftTo(this.m.t,a);if(a.compareTo(this.m)>=0){a.subTo(this.m,a)}}
function montSqrTo(a,b){a.squareTo(b);this.reduce(b)}
function montMulTo(a,c,b){a.multiplyTo(c,b);this.reduce(b)}
Montgomery.prototype.convert=montConvert;Montgomery.prototype.revert=montRevert;Montgomery.prototype.reduce=montReduce;Montgomery.prototype.mulTo=montMulTo;Montgomery.prototype.sqrTo=montSqrTo;function bnpIsEven(){return((this.t>0)?(this[0]&1):this.s)==0}
function bnpExp(h,j){if(h>4294967295||h<1){return BigInteger.ONE}
var f=nbi(),a=nbi(),d=j.convert(this),c=nbits(h)-1;d.copyTo(f);while(--c>=0){j.sqrTo(f,a);if((h&(1<<c))>0){j.mulTo(a,d,f)}else{var b=f;f=a;a=b}}
return j.revert(f)}
function bnModPowInt(b,a){var c;if(b<256||a.isEven()){c=new Classic(a)}else{c=new Montgomery(a)}
return this.exp(b,c)}
BigInteger.prototype.copyTo=bnpCopyTo;BigInteger.prototype.fromInt=bnpFromInt;BigInteger.prototype.fromString=bnpFromString;BigInteger.prototype.clamp=bnpClamp;BigInteger.prototype.dlShiftTo=bnpDLShiftTo;BigInteger.prototype.drShiftTo=bnpDRShiftTo;BigInteger.prototype.lShiftTo=bnpLShiftTo;BigInteger.prototype.rShiftTo=bnpRShiftTo;BigInteger.prototype.subTo=bnpSubTo;BigInteger.prototype.multiplyTo=bnpMultiplyTo;BigInteger.prototype.squareTo=bnpSquareTo;BigInteger.prototype.divRemTo=bnpDivRemTo;BigInteger.prototype.invDigit=bnpInvDigit;BigInteger.prototype.isEven=bnpIsEven;BigInteger.prototype.exp=bnpExp;BigInteger.prototype.toString=bnToString;BigInteger.prototype.negate=bnNegate;BigInteger.prototype.abs=bnAbs;BigInteger.prototype.compareTo=bnCompareTo;BigInteger.prototype.bitLength=bnBitLength;BigInteger.prototype.mod=bnMod;BigInteger.prototype.modPowInt=bnModPowInt;BigInteger.ZERO=nbv(0);BigInteger.ONE=nbv(1);function Arcfour(){this.i=0;this.j=0;this.S=new Array}
function ARC4init(c){var a,d,b;for(a=0;a<256;++a){this.S[a]=a}
d=0;for(a=0;a<256;++a){d=d+this.S[a]+c[a%c.length]&255;b=this.S[a];this.S[a]=this.S[d];this.S[d]=b}
this.i=0;this.j=0}
function ARC4next(){var a;this.i=this.i+1&255;this.j=this.j+this.S[this.i]&255;a=this.S[this.i];this.S[this.i]=this.S[this.j];this.S[this.j]=a;return this.S[a+this.S[this.i]&255]}
function prng_newstate(){return new Arcfour}
Arcfour.prototype.init=ARC4init;Arcfour.prototype.next=ARC4next;var rng_psize=256;var rng_state;var rng_pool;var rng_pptr;function rng_seed_int(a){rng_pool[rng_pptr++]^=a&255;rng_pool[rng_pptr++]^=(a>>8)&255;rng_pool[rng_pptr++]^=(a>>16)&255;rng_pool[rng_pptr++]^=(a>>24)&255;if(rng_pptr>=rng_psize){rng_pptr-=rng_psize}}
function rng_seed_time(){rng_seed_int(new Date().getTime())}
if(rng_pool==null){rng_pool=[];rng_pptr=0;var t;try{if(window.crypto&&window.crypto.getRandomValues){var ua=new Uint8Array(32);window.crypto.getRandomValues(ua);for(t=0;t<32;++t){rng_pool[rng_pptr++]=ua[t]}}else{if(window.msCrypto&&window.msCrypto.getRandomValues){var ua=new Uint8Array(32);window.msCrypto.getRandomValues(ua);for(t=0;t<32;++t){rng_pool[rng_pptr++]=ua[t]}}else{if(window.crypto&&window.crypto.random){var z=window.crypto.random(32);for(t=0;t<z.length;++t){rng_pool[rng_pptr++]=z.charCodeAt(t)&255}}}}}catch(e){}
while(rng_pptr<rng_psize){t=Math.floor(65536*Math.random());rng_pool[rng_pptr++]=t>>>8;rng_pool[rng_pptr++]=t&255}
rng_pptr=0;rng_seed_time()}
function rng_get_byte(){if(rng_state==null){rng_seed_time();rng_state=prng_newstate();rng_state.init(rng_pool);for(rng_pptr=0;rng_pptr<rng_pool.length;++rng_pptr){rng_pool[rng_pptr]=0}
rng_pptr=0}
return rng_state.next()}
function rng_get_bytes(b){var a;for(a=0;a<b.length;++a){b[a]=rng_get_byte()}}
function SecureRandom(){}
SecureRandom.prototype.nextBytes=rng_get_bytes;function parseBigInt(b,a){return new BigInteger(b,a)}
function pkcs1pad2(c,g){if(g<c.length+11){alert("Message too long for RSA");return null}
var f=new Array();var e=c.length-1;while(e>=0&&g>0){f[--g]=c[e--]}
f[--g]=0;var d=new SecureRandom();var a=new Array();while(g>2){a[0]=0;while(a[0]==0){d.nextBytes(a)}
f[--g]=a[0]}
f[--g]=2;f[--g]=0;return new BigInteger(f)}
function RSAKey(){this.n=null;this.e=0;this.d=null;this.p=null;this.q=null;this.dmp1=null;this.dmq1=null;this.coeff=null}
function RSASetPublic(b,a){if(b!=null&&a!=null&&b.length>0&&a.length>0){this.n=parseBigInt(b,16);this.e=parseInt(a,16)}else{alert("Invalid RSA public key")}}
function RSADoPublic(a){return a.modPowInt(this.e,this.n)}
function RSAEncrypt(b){var a=pkcs1pad2(b,(this.n.bitLength()+7)>>3);if(a==null){return null}
var e=this.doPublic(a);if(e==null){return null}
var d=e.toString(16);if((d.length&1)==0){return d}else{return "0"+d}}
function RSAEncryptB64(a){var b=this.encrypt(a);if(b){return hex2b64(b)}else{return null}}
RSAKey.prototype.doPublic=RSADoPublic;RSAKey.prototype.setPublic=RSASetPublic;RSAKey.prototype.encrypt=RSAEncrypt;RSAKey.prototype.encrypt_b64=RSAEncryptB64;"use strict";function q(b){throw b}
var t=void 0,u=!1;var sjcl={cipher:{},hash:{},keyexchange:{},mode:{},misc:{},codec:{},exception:{corrupt:function(b){this.toString=function(){return "CORRUPT: "+this.message};this.message=b},invalid:function(b){this.toString=function(){return "INVALID: "+this.message};this.message=b},bug:function(b){this.toString=function(){return "BUG: "+this.message};this.message=b},notReady:function(b){this.toString=function(){return "NOT READY: "+this.message};this.message=b}}};"undefined"!==typeof module&&module.exports&&(module.exports=sjcl);"function"===typeof define&&define([],function(){return sjcl});sjcl.cipher.aes=function(j){this.k[0][0][0]||this.D();var i,p,o,n,m=this.k[0][4],l=this.k[1];i=j.length;var k=1;4!==i&&(6!==i&&8!==i)&&q(new sjcl.exception.invalid("invalid aes key size"));this.b=[o=j.slice(0),n=[]];for(j=i;j<4*i+28;j++){p=o[j-1];if(0===j%i||8===i&&4===j%i){p=m[p>>>24]<<24^m[p>>16&255]<<16^m[p>>8&255]<<8^m[p&255],0===j%i&&(p=p<<8^p>>>24^k<<24,k=k<<1^283*(k>>7))}
o[j]=o[j-i]^p}
for(i=0;j;i++,j--){p=o[i&3?j:j-4],n[i]=4>=j||4>i?p:l[0][m[p>>>24]]^l[1][m[p>>16&255]]^l[2][m[p>>8&255]]^l[3][m[p&255]]}};sjcl.cipher.aes.prototype={encrypt:function(b){return y(this,b,0)},decrypt:function(b){return y(this,b,1)},k:[[[],[],[],[],[]],[[],[],[],[],[]]],D:function(){var R=this.k[0],Q=this.k[1],P=R[4],O=Q[4],N,x,w,v=[],r=[],s,j,o,i;for(N=0;256>N;N++){r[(v[N]=N<<1^283*(N>>7))^N]=N}
for(x=w=0;!P[x];x^=s||1,w=r[w]||1){o=w^w<<1^w<<2^w<<3^w<<4;o=o>>8^o&255^99;P[x]=o;O[o]=x;j=v[N=v[s=v[x]]];i=16843009*j^65537*N^257*s^16843008*x;j=257*v[o]^16843008*o;for(N=0;4>N;N++){R[N][x]=j=j<<24^j>>>8,Q[N][o]=i=i<<24^i>>>8}}
for(N=0;5>N;N++){R[N]=R[N].slice(0),Q[N]=Q[N].slice(0)}}};function y(ab,aa,Z){4!==aa.length&&q(new sjcl.exception.invalid("invalid aes block size"));var Y=ab.b[Z],X=aa[0]^Y[0],W=aa[Z?3:1]^Y[1],V=aa[2]^Y[2];aa=aa[Z?1:3]^Y[3];var U,S,T,Q=Y.length/4-2,R,P=4,N=[0,0,0,0];U=ab.k[Z];ab=U[0];var O=U[1],o=U[2],j=U[3],i=U[4];for(R=0;R<Q;R++){U=ab[X>>>24]^O[W>>16&255]^o[V>>8&255]^j[aa&255]^Y[P],S=ab[W>>>24]^O[V>>16&255]^o[aa>>8&255]^j[X&255]^Y[P+1],T=ab[V>>>24]^O[aa>>16&255]^o[X>>8&255]^j[W&255]^Y[P+2],aa=ab[aa>>>24]^O[X>>16&255]^o[W>>8&255]^j[V&255]^Y[P+3],P+=4,X=U,W=S,V=T}
for(R=0;4>R;R++){N[Z?3&-R:R]=i[X>>>24]<<24^i[W>>16&255]<<16^i[V>>8&255]<<8^i[aa&255]^Y[P++],U=X,X=W,W=V,V=aa,aa=U}
return N}
sjcl.bitArray={bitSlice:function(e,d,f){e=sjcl.bitArray.P(e.slice(d/32),32-(d&31)).slice(1);return f===t?e:sjcl.bitArray.clamp(e,f-d)},extract:function(f,e,h){var g=Math.floor(-e-h&31);return((e+h-1^e)&-32?f[e/32|0]<<32-g^f[e/32+1|0]>>>g:f[e/32|0]>>>g)&(1<<h)-1},concat:function(f,e){if(0===f.length||0===e.length){return f.concat(e)}
var h=f[f.length-1],g=sjcl.bitArray.getPartial(h);return 32===g?f.concat(e):sjcl.bitArray.P(e,g,h|0,f.slice(0,f.length-1))},bitLength:function(d){var c=d.length;return 0===c?0:32*(c-1)+sjcl.bitArray.getPartial(d[c-1])},clamp:function(e,d){if(32*e.length<d){return e}
e=e.slice(0,Math.ceil(d/32));var f=e.length;d&=31;0<f&&d&&(e[f-1]=sjcl.bitArray.partial(d,e[f-1]&2147483648>>d-1,1));return e},partial:function(e,d,f){return 32===e?d:(f?d|0:d<<32-e)+1099511627776*e},getPartial:function(b){return Math.round(b/1099511627776)||32},equal:function(f,e){if(sjcl.bitArray.bitLength(f)!==sjcl.bitArray.bitLength(e)){return u}
var h=0,g;for(g=0;g<f.length;g++){h|=f[g]^e[g]}
return 0===h},P:function(g,f,j,i){var h;h=0;for(i===t&&(i=[]);32<=f;f-=32){i.push(j),j=0}
if(0===f){return i.concat(g)}
for(h=0;h<g.length;h++){i.push(j|g[h]>>>f),j=g[h]<<32-f}
h=g.length?g[g.length-1]:0;g=sjcl.bitArray.getPartial(h);i.push(sjcl.bitArray.partial(f+g&31,32<f+g?j:i.pop(),1));return i},l:function(d,c){return[d[0]^c[0],d[1]^c[1],d[2]^c[2],d[3]^c[3]]},byteswapM:function(e){var d,f;for(d=0;d<e.length;++d){f=e[d],e[d]=f>>>24|f>>>8&65280|(f&65280)<<8|f<<24}
return e}};sjcl.codec.utf8String={fromBits:function(g){var f="",j=sjcl.bitArray.bitLength(g),i,h;for(i=0;i<j/8;i++){0===(i&3)&&(h=g[i/4]),f+=String.fromCharCode(h>>>24),h<<=8}
return decodeURIComponent(escape(f))},toBits:function(f){f=unescape(encodeURIComponent(f));var e=[],h,g=0;for(h=0;h<f.length;h++){g=g<<8|f.charCodeAt(h),3===(h&3)&&(e.push(g),g=0)}
h&3&&e.push(sjcl.bitArray.partial(8*(h&3),g));return e}};sjcl.codec.hex={fromBits:function(e){var d="",f;for(f=0;f<e.length;f++){d+=((e[f]|0)+263882790666240).toString(16).substr(4)}
return d.substr(0,sjcl.bitArray.bitLength(e)/4)},toBits:function(f){var e,h=[],g;f=f.replace(/\s|0x/g,"");g=f.length;f+="00000000";for(e=0;e<f.length;e+=8){h.push(parseInt(f.substr(e,8),16)^0)}
return sjcl.bitArray.clamp(h,4*g)}};sjcl.codec.base64={J:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",fromBits:function(j,i,p){var o="",n=0,m=sjcl.codec.base64.J,l=0,k=sjcl.bitArray.bitLength(j);p&&(m=m.substr(0,62)+"-_");for(p=0;6*o.length<k;){o+=m.charAt((l^j[p]>>>n)>>>26),6>n?(l=j[p]<<6-n,n+=26,p++):(l<<=6,n-=6)}
for(;o.length&3&&!i;){o+="="}
return o},toBits:function(j,i){j=j.replace(/\s|=/g,"");var p=[],o,n=0,m=sjcl.codec.base64.J,l=0,k;i&&(m=m.substr(0,62)+"-_");for(o=0;o<j.length;o++){k=m.indexOf(j.charAt(o)),0>k&&q(new sjcl.exception.invalid("this isn't base64!")),26<n?(n-=26,p.push(l^k>>>n),l=k<<32-n):(n+=6,l^=k<<32-n)}
n&56&&p.push(sjcl.bitArray.partial(n&56,l,1));return p}};sjcl.codec.base64url={fromBits:function(b){return sjcl.codec.base64.fromBits(b,1,1)},toBits:function(b){return sjcl.codec.base64.toBits(b,1)}};sjcl.hash.sha256=function(b){this.b[0]||this.D();b?(this.r=b.r.slice(0),this.o=b.o.slice(0),this.h=b.h):this.reset()};sjcl.hash.sha256.hash=function(b){return(new sjcl.hash.sha256).update(b).finalize()};sjcl.hash.sha256.prototype={blockSize:512,reset:function(){this.r=this.N.slice(0);this.o=[];this.h=0;return this},update:function(e){"string"===typeof e&&(e=sjcl.codec.utf8String.toBits(e));var d,f=this.o=sjcl.bitArray.concat(this.o,e);d=this.h;e=this.h=d+sjcl.bitArray.bitLength(e);for(d=512+d&-512;d<=e;d+=512){z(this,f.splice(0,16))}
return this},finalize:function(){var e,d=this.o,f=this.r,d=sjcl.bitArray.concat(d,[sjcl.bitArray.partial(1,1)]);for(e=d.length+2;e&15;e++){d.push(0)}
d.push(Math.floor(this.h/4294967296));for(d.push(this.h|0);d.length;){z(this,d.splice(0,16))}
this.reset();return f},N:[],b:[],D:function(){function f(b){return 4294967296*(b-Math.floor(b))|0}
var e=0,h=2,g;f:for(;64>e;h++){for(g=2;g*g<=h;g++){if(0===h%g){continue f}}
8>e&&(this.N[e]=f(Math.pow(h,0.5)));this.b[e]=f(Math.pow(h,1/3));e++}}};function z(V,U){var T,S,R,Q=U.slice(0),P=V.r,O=V.b,x=P[0],N=P[1],o=P[2],w=P[3],j=P[4],X=P[5],i=P[6],W=P[7];for(T=0;64>T;T++){16>T?S=Q[T]:(S=Q[T+1&15],R=Q[T+14&15],S=Q[T&15]=(S>>>7^S>>>18^S>>>3^S<<25^S<<14)+(R>>>17^R>>>19^R>>>10^R<<15^R<<13)+Q[T&15]+Q[T+9&15]|0),S=S+W+(j>>>6^j>>>11^j>>>25^j<<26^j<<21^j<<7)+(i^j&(X^i))+O[T],W=i,i=X,X=j,j=w+S|0,w=o,o=N,N=x,x=S+(N&o^w&(N^o))+(N>>>2^N>>>13^N>>>22^N<<30^N<<19^N<<10)|0}
P[0]=P[0]+x|0;P[1]=P[1]+N|0;P[2]=P[2]+o|0;P[3]=P[3]+w|0;P[4]=P[4]+j|0;P[5]=P[5]+X|0;P[6]=P[6]+i|0;P[7]=P[7]+W|0}
sjcl.mode.ccm={name:"ccm",encrypt:function(w,v,s,r,p){var o,n=v.slice(0),m=sjcl.bitArray,i=m.bitLength(s)/8,j=m.bitLength(n)/8;p=p||64;r=r||[];7>i&&q(new sjcl.exception.invalid("ccm: iv must be at least 7 bytes"));for(o=2;4>o&&j>>>8*o;o++){}
o<15-i&&(o=15-i);s=m.clamp(s,8*(15-o));v=sjcl.mode.ccm.L(w,v,s,r,p,o);n=sjcl.mode.ccm.p(w,n,s,v,p,o);return m.concat(n.data,n.tag)},decrypt:function(w,v,s,r,p){p=p||64;r=r||[];var o=sjcl.bitArray,n=o.bitLength(s)/8,m=o.bitLength(v),i=o.clamp(v,m-p),j=o.bitSlice(v,m-p),m=(m-p)/8;7>n&&q(new sjcl.exception.invalid("ccm: iv must be at least 7 bytes"));for(v=2;4>v&&m>>>8*v;v++){}
v<15-n&&(v=15-n);s=o.clamp(s,8*(15-v));i=sjcl.mode.ccm.p(w,i,s,j,p,v);w=sjcl.mode.ccm.L(w,i.data,s,r,p,v);o.equal(i.tag,w)||q(new sjcl.exception.corrupt("ccm: tag doesn't match"));return i.data},L:function(s,r,p,o,n,m){var k=[],j=sjcl.bitArray,i=j.l;n/=8;(n%2||4>n||16<n)&&q(new sjcl.exception.invalid("ccm: invalid tag length"));(4294967295<o.length||4294967295<r.length)&&q(new sjcl.exception.bug("ccm: can't deal with 4GiB or more data"));m=[j.partial(8,(o.length?64:0)|n-2<<2|m-1)];m=j.concat(m,p);m[3]|=j.bitLength(r)/8;m=s.encrypt(m);if(o.length){p=j.bitLength(o)/8;65279>=p?k=[j.partial(16,p)]:4294967295>=p&&(k=j.concat([j.partial(16,65534)],[p]));k=j.concat(k,o);for(o=0;o<k.length;o+=4){m=s.encrypt(i(m,k.slice(o,o+4).concat([0,0,0])))}}
for(o=0;o<r.length;o+=4){m=s.encrypt(i(m,r.slice(o,o+4).concat([0,0,0])))}
return j.clamp(m,8*n)},p:function(w,v,s,r,p,o){var n,m=sjcl.bitArray;n=m.l;var i=v.length,j=m.bitLength(v);s=m.concat([m.partial(8,o-1)],s).concat([0,0,0]).slice(0,4);r=m.bitSlice(n(r,w.encrypt(s)),0,p);if(!i){return{tag:r,data:[]}}
for(n=0;n<i;n+=4){s[3]++,p=w.encrypt(s),v[n]^=p[0],v[n+1]^=p[1],v[n+2]^=p[2],v[n+3]^=p[3]}
return{tag:r,data:m.clamp(v,j)}}};sjcl.mode.ocb2={name:"ocb2",encrypt:function(R,Q,P,O,N,x){128!==sjcl.bitArray.bitLength(P)&&q(new sjcl.exception.invalid("ocb iv must be 128 bits"));var w,v=sjcl.mode.ocb2.H,r=sjcl.bitArray,s=r.l,j=[0,0,0,0];P=v(R.encrypt(P));var o,i=[];O=O||[];N=N||64;for(w=0;w+4<Q.length;w+=4){o=Q.slice(w,w+4),j=s(j,o),i=i.concat(s(P,R.encrypt(s(P,o)))),P=v(P)}
o=Q.slice(w);Q=r.bitLength(o);w=R.encrypt(s(P,[0,0,0,Q]));o=r.clamp(s(o.concat([0,0,0]),w),Q);j=s(j,s(o.concat([0,0,0]),w));j=R.encrypt(s(j,s(P,v(P))));O.length&&(j=s(j,x?O:sjcl.mode.ocb2.pmac(R,O)));return i.concat(r.concat(o,r.clamp(j,N)))},decrypt:function(U,T,S,R,Q,P){128!==sjcl.bitArray.bitLength(S)&&q(new sjcl.exception.invalid("ocb iv must be 128 bits"));Q=Q||64;var O=sjcl.mode.ocb2.H,N=sjcl.bitArray,w=N.l,x=[0,0,0,0],o=O(U.encrypt(S)),v,j,V=sjcl.bitArray.bitLength(T)-Q,i=[];R=R||[];for(S=0;S+4<V/32;S+=4){v=w(o,U.decrypt(w(o,T.slice(S,S+4)))),x=w(x,v),i=i.concat(v),o=O(o)}
j=V-32*S;v=U.encrypt(w(o,[0,0,0,j]));v=w(v,N.clamp(T.slice(S),j).concat([0,0,0]));x=w(x,v);x=U.encrypt(w(x,w(o,O(o))));R.length&&(x=w(x,P?R:sjcl.mode.ocb2.pmac(U,R)));N.equal(N.clamp(x,Q),N.bitSlice(T,V))||q(new sjcl.exception.corrupt("ocb: tag doesn't match"));return i.concat(N.clamp(v,j))},pmac:function(j,i){var p,o=sjcl.mode.ocb2.H,n=sjcl.bitArray,m=n.l,l=[0,0,0,0],k=j.encrypt([0,0,0,0]),k=m(k,o(o(k)));for(p=0;p+4<i.length;p+=4){k=o(k),l=m(l,j.encrypt(m(k,i.slice(p,p+4))))}
p=i.slice(p);128>n.bitLength(p)&&(k=m(k,o(k)),p=n.concat(p,[-2147483648,0,0,0]));l=m(l,p);return j.encrypt(m(o(m(k,o(k))),l))},H:function(b){return[b[0]<<1^b[1]>>>31,b[1]<<1^b[2]>>>31,b[2]<<1^b[3]>>>31,b[3]<<1^135*(b[0]>>>31)]}};sjcl.mode.gcm={name:"gcm",encrypt:function(h,g,l,k,j){var i=g.slice(0);g=sjcl.bitArray;k=k||[];h=sjcl.mode.gcm.p(!0,h,i,k,l,j||128);return g.concat(h.data,h.tag)},decrypt:function(j,i,p,o,n){var m=i.slice(0),l=sjcl.bitArray,k=l.bitLength(m);n=n||128;o=o||[];n<=k?(i=l.bitSlice(m,k-n),m=l.bitSlice(m,0,k-n)):(i=m,m=[]);j=sjcl.mode.gcm.p(u,j,m,o,p,n);l.equal(j.tag,i)||q(new sjcl.exception.corrupt("gcm: tag doesn't match"));return j.data},Z:function(j,i){var p,o,n,m,l,k=sjcl.bitArray.l;n=[0,0,0,0];m=i.slice(0);for(p=0;128>p;p++){(o=0!==(j[Math.floor(p/32)]&1<<31-p%32))&&(n=k(n,m));l=0!==(m[3]&1);for(o=3;0<o;o--){m[o]=m[o]>>>1|(m[o-1]&1)<<31}
m[0]>>>=1;l&&(m[0]^=-520093696)}
return n},g:function(g,f,j){var i,h=j.length;f=f.slice(0);for(i=0;i<h;i+=4){f[0]^=4294967295&j[i],f[1]^=4294967295&j[i+1],f[2]^=4294967295&j[i+2],f[3]^=4294967295&j[i+3],f=sjcl.mode.gcm.Z(f,g)}
return f},p:function(U,T,S,R,Q,P){var O,N,w,x,o,v,j,V,i=sjcl.bitArray;v=S.length;j=i.bitLength(S);V=i.bitLength(R);N=i.bitLength(Q);O=T.encrypt([0,0,0,0]);96===N?(Q=Q.slice(0),Q=i.concat(Q,[1])):(Q=sjcl.mode.gcm.g(O,[0,0,0,0],Q),Q=sjcl.mode.gcm.g(O,Q,[0,0,Math.floor(N/4294967296),N&4294967295]));N=sjcl.mode.gcm.g(O,[0,0,0,0],R);o=Q.slice(0);R=N.slice(0);U||(R=sjcl.mode.gcm.g(O,N,S));for(x=0;x<v;x+=4){o[3]++,w=T.encrypt(o),S[x]^=w[0],S[x+1]^=w[1],S[x+2]^=w[2],S[x+3]^=w[3]}
S=i.clamp(S,j);U&&(R=sjcl.mode.gcm.g(O,N,S));U=[Math.floor(V/4294967296),V&4294967295,Math.floor(j/4294967296),j&4294967295];R=sjcl.mode.gcm.g(O,R,U);w=T.encrypt(Q);R[0]^=w[0];R[1]^=w[1];R[2]^=w[2];R[3]^=w[3];return{tag:i.bitSlice(R,0,P),data:S}}};sjcl.misc.hmac=function(g,f){this.M=f=f||sjcl.hash.sha256;var j=[[],[]],i,h=f.prototype.blockSize/32;this.n=[new f,new f];g.length>h&&(g=f.hash(g));for(i=0;i<h;i++){j[0][i]=g[i]^909522486,j[1][i]=g[i]^1549556828}
this.n[0].update(j[0]);this.n[1].update(j[1]);this.G=new f(this.n[0])};sjcl.misc.hmac.prototype.encrypt=sjcl.misc.hmac.prototype.mac=function(b){this.Q&&q(new sjcl.exception.invalid("encrypt on already updated hmac called!"));this.update(b);return this.digest(b)};sjcl.misc.hmac.prototype.reset=function(){this.G=new this.M(this.n[0]);this.Q=u};sjcl.misc.hmac.prototype.update=function(b){this.Q=!0;this.G.update(b)};sjcl.misc.hmac.prototype.digest=function(){var b=this.G.finalize(),b=(new this.M(this.n[1])).update(b).finalize();this.reset();return b};sjcl.misc.pbkdf2=function(N,x,w,v,s){w=w||1000;(0>v||0>w)&&q(sjcl.exception.invalid("invalid params to pbkdf2"));"string"===typeof N&&(N=sjcl.codec.utf8String.toBits(N));"string"===typeof x&&(x=sjcl.codec.utf8String.toBits(x));s=s||sjcl.misc.hmac;N=new s(N);var r,p,o,j,m=[],i=sjcl.bitArray;for(j=1;32*m.length<(v||1);j++){s=r=N.encrypt(i.concat(x,[j]));for(p=1;p<w;p++){r=N.encrypt(r);for(o=0;o<r.length;o++){s[o]^=r[o]}}
m=m.concat(s)}
v&&(m=i.clamp(m,v));return m};sjcl.prng=function(b){this.c=[new sjcl.hash.sha256];this.i=[0];this.F=0;this.s={};this.C=0;this.K={};this.O=this.d=this.j=this.W=0;this.b=[0,0,0,0,0,0,0,0];this.f=[0,0,0,0];this.A=t;this.B=b;this.q=u;this.w={progress:{},seeded:{}};this.m=this.V=0;this.t=1;this.u=2;this.S=65536;this.I=[0,48,64,96,128,192,256,384,512,768,1024];this.T=30000;this.R=80};sjcl.prng.prototype={randomWords:function(i,h){var n=[],m;m=this.isReady(h);var l;m===this.m&&q(new sjcl.exception.notReady("generator isn't seeded"));if(m&this.u){m=!(m&this.t);l=[];var k=0,j;this.O=l[0]=(new Date).valueOf()+this.T;for(j=0;16>j;j++){l.push(4294967296*Math.random()|0)}
for(j=0;j<this.c.length&&!(l=l.concat(this.c[j].finalize()),k+=this.i[j],this.i[j]=0,!m&&this.F&1<<j);j++){}
this.F>=1<<this.c.length&&(this.c.push(new sjcl.hash.sha256),this.i.push(0));this.d-=k;k>this.j&&(this.j=k);this.F++;this.b=sjcl.hash.sha256.hash(this.b.concat(l));this.A=new sjcl.cipher.aes(this.b);for(m=0;4>m&&!(this.f[m]=this.f[m]+1|0,this.f[m]);m++){}}
for(m=0;m<i;m+=4){0===(m+1)%this.S&&A(this),l=B(this),n.push(l[0],l[1],l[2],l[3])}
A(this);return n.slice(0,i)},setDefaultParanoia:function(d,c){0===d&&"Setting paranoia=0 will ruin your security; use it only for testing"!==c&&q("Setting paranoia=0 will ruin your security; use it only for testing");this.B=d},addEntropy:function(s,r,p){p=p||"user";var o,n,m=(new Date).valueOf(),k=this.s[p],j=this.isReady(),i=0;o=this.K[p];o===t&&(o=this.K[p]=this.W++);k===t&&(k=this.s[p]=0);this.s[p]=(this.s[p]+1)%this.c.length;switch(typeof s){case "number":r===t&&(r=1);this.c[k].update([o,this.C++,1,r,m,1,s|0]);break;case "object":p=Object.prototype.toString.call(s);if("[object Uint32Array]"===p){n=[];for(p=0;p<s.length;p++){n.push(s[p])}
s=n}else{"[object Array]"!==p&&(i=1);for(p=0;p<s.length&&!i;p++){"number"!==typeof s[p]&&(i=1)}}
if(!i){if(r===t){for(p=r=0;p<s.length;p++){for(n=s[p];0<n;){r++,n>>>=1}}}
this.c[k].update([o,this.C++,2,r,m,s.length].concat(s))}
break;case "string":r===t&&(r=s.length);this.c[k].update([o,this.C++,3,r,m,s.length]);this.c[k].update(s);break;default:i=1}
i&&q(new sjcl.exception.bug("random: addEntropy only supports number, array of numbers or string"));this.i[k]+=r;this.d+=r;j===this.m&&(this.isReady()!==this.m&&C("seeded",Math.max(this.j,this.d)),C("progress",this.getProgress()))},isReady:function(b){b=this.I[b!==t?b:this.B];return this.j&&this.j>=b?this.i[0]>this.R&&(new Date).valueOf()>this.O?this.u|this.t:this.t:this.d>=b?this.u|this.m:this.m},getProgress:function(b){b=this.I[b?b:this.B];return this.j>=b?1:this.d>b?1:this.d/b},startCollectors:function(){this.q||(this.a={loadTimeCollector:D(this,this.aa),mouseCollector:D(this,this.ba),keyboardCollector:D(this,this.$),accelerometerCollector:D(this,this.U)},window.addEventListener?(window.addEventListener("load",this.a.loadTimeCollector,u),window.addEventListener("mousemove",this.a.mouseCollector,u),window.addEventListener("keypress",this.a.keyboardCollector,u),window.addEventListener("devicemotion",this.a.accelerometerCollector,u)):document.attachEvent?(document.attachEvent("onload",this.a.loadTimeCollector),document.attachEvent("onmousemove",this.a.mouseCollector),document.attachEvent("keypress",this.a.keyboardCollector)):q(new sjcl.exception.bug("can't attach event")),this.q=!0)},stopCollectors:function(){this.q&&(window.removeEventListener?(window.removeEventListener("load",this.a.loadTimeCollector,u),window.removeEventListener("mousemove",this.a.mouseCollector,u),window.removeEventListener("keypress",this.a.keyboardCollector,u),window.removeEventListener("devicemotion",this.a.accelerometerCollector,u)):document.detachEvent&&(document.detachEvent("onload",this.a.loadTimeCollector),document.detachEvent("onmousemove",this.a.mouseCollector),document.detachEvent("keypress",this.a.keyboardCollector)),this.q=u)},addEventListener:function(d,c){this.w[d][this.V++]=c},removeEventListener:function(h,g){var l,k,j=this.w[h],i=[];for(k in j){j.hasOwnProperty(k)&&j[k]===g&&i.push(k)}
for(l=0;l<i.length;l++){k=i[l],delete j[k]}},$:function(){E(1)},ba:function(f){var e,h;try{e=f.x||f.clientX||f.offsetX||0,h=f.y||f.clientY||f.offsetY||0}catch(g){h=e=0}
0!=e&&0!=h&&sjcl.random.addEntropy([e,h],2,"mouse");E(0)},aa:function(){E(2)},U:function(d){d=(d.accelerationIncludingGravity||{}).x||(d.accelerationIncludingGravity||{}).y||(d.accelerationIncludingGravity||{}).z;if(window.orientation){var c=window.orientation;"number"===typeof c&&sjcl.random.addEntropy(c,1,"accelerometer")}
d&&sjcl.random.addEntropy(d,2,"accelerometer");E(0)}};function C(g,f){var j,i=sjcl.random.w[g],h=[];for(j in i){i.hasOwnProperty(j)&&h.push(i[j])}
for(j=0;j<h.length;j++){h[j](f)}}
function E(b){"undefined"!==typeof window&&window.performance&&"function"===typeof window.performance.now?sjcl.random.addEntropy(window.performance.now(),b,"loadtime"):sjcl.random.addEntropy((new Date).valueOf(),b,"loadtime")}
function A(b){b.b=B(b).concat(B(b));b.A=new sjcl.cipher.aes(b.b)}
function B(d){for(var c=0;4>c&&!(d.f[c]=d.f[c]+1|0,d.f[c]);c++){}
return d.A.encrypt(d.f)}
function D(d,c){return function(){c.apply(d,arguments)}}
sjcl.random=new sjcl.prng(6);a:try{var F,G,H,I;if(I="undefined"!==typeof module){var J;if(J=module.exports){var K;try{K=require("crypto")}catch(L){K=null}
J=(G=K)&&G.randomBytes}
I=J}
if(I){F=G.randomBytes(128),F=new Uint32Array((new Uint8Array(F)).buffer),sjcl.random.addEntropy(F,1024,"crypto['randomBytes']")}else{if("undefined"!==typeof window&&"undefined"!==typeof Uint32Array){H=new Uint32Array(32);if(window.crypto&&window.crypto.getRandomValues){window.crypto.getRandomValues(H)}else{if(window.msCrypto&&window.msCrypto.getRandomValues){window.msCrypto.getRandomValues(H)}else{break a}}
sjcl.random.addEntropy(H,1024,"crypto['getRandomValues']")}}}catch(M){"undefined"!==typeof window&&window.console&&(console.log("There was an error collecting entropy from the browser:"),console.log(M))}
sjcl.json={defaults:{v:1,iter:1000,ks:128,ts:64,mode:"ccm",adata:"",cipher:"aes"},Y:function(i,h,n,m){n=n||{};m=m||{};var l=sjcl.json,k=l.e({iv:sjcl.random.randomWords(4,0)},l.defaults),j;l.e(k,n);n=k.adata;"string"===typeof k.salt&&(k.salt=sjcl.codec.base64.toBits(k.salt));"string"===typeof k.iv&&(k.iv=sjcl.codec.base64.toBits(k.iv));(!sjcl.mode[k.mode]||!sjcl.cipher[k.cipher]||"string"===typeof i&&100>=k.iter||64!==k.ts&&96!==k.ts&&128!==k.ts||128!==k.ks&&192!==k.ks&&256!==k.ks||2>k.iv.length||4<k.iv.length)&&q(new sjcl.exception.invalid("json encrypt: invalid parameters"));"string"===typeof i?(j=sjcl.misc.cachedPbkdf2(i,k),i=j.key.slice(0,k.ks/32),k.salt=j.salt):sjcl.ecc&&i instanceof sjcl.ecc.elGamal.publicKey&&(j=i.kem(),k.kemtag=j.tag,i=j.key.slice(0,k.ks/32));"string"===typeof h&&(h=sjcl.codec.utf8String.toBits(h));"string"===typeof n&&(n=sjcl.codec.utf8String.toBits(n));j=new sjcl.cipher[k.cipher](i);l.e(m,k);m.key=i;k.ct=sjcl.mode[k.mode].encrypt(j,h,k.iv,n,k.ts);return k},encrypt:function(h,g,l,k){var j=sjcl.json,i=j.Y.apply(j,arguments);return j.encode(i)},X:function(i,h,n,m){n=n||{};m=m||{};var l=sjcl.json;h=l.e(l.e(l.e({},l.defaults),h),n,!0);var k,j;k=h.adata;"string"===typeof h.salt&&(h.salt=sjcl.codec.base64.toBits(h.salt));"string"===typeof h.iv&&(h.iv=sjcl.codec.base64.toBits(h.iv));(!sjcl.mode[h.mode]||!sjcl.cipher[h.cipher]||"string"===typeof i&&100>=h.iter||64!==h.ts&&96!==h.ts&&128!==h.ts||128!==h.ks&&192!==h.ks&&256!==h.ks||!h.iv||2>h.iv.length||4<h.iv.length)&&q(new sjcl.exception.invalid("json decrypt: invalid parameters"));"string"===typeof i?(j=sjcl.misc.cachedPbkdf2(i,h),i=j.key.slice(0,h.ks/32),h.salt=j.salt):sjcl.ecc&&i instanceof sjcl.ecc.elGamal.secretKey&&(i=i.unkem(sjcl.codec.base64.toBits(h.kemtag)).slice(0,h.ks/32));"string"===typeof k&&(k=sjcl.codec.utf8String.toBits(k));j=new sjcl.cipher[h.cipher](i);k=sjcl.mode[h.mode].decrypt(j,h.ct,h.iv,k,h.ts);l.e(m,h);m.key=i;return 1===n.raw?k:sjcl.codec.utf8String.fromBits(k)},decrypt:function(g,f,j,i){var h=sjcl.json;return h.X(g,h.decode(f),j,i)},encode:function(f){var e,h="{",g="";for(e in f){if(f.hasOwnProperty(e)){switch(e.match(/^[a-z0-9]+$/i)||q(new sjcl.exception.invalid("json encode: invalid property name")),h+=g+'"'+e+'":',g=",",typeof f[e]){case "number":case "boolean":h+=f[e];break;case "string":h+='"'+escape(f[e])+'"';break;case "object":h+='"'+sjcl.codec.base64.fromBits(f[e],0)+'"';break;default:q(new sjcl.exception.bug("json encode: unsupported type"))}}}
return h+"}"},decode:function(f){f=f.replace(/\s/g,"");f.match(/^\{.*\}$/)||q(new sjcl.exception.invalid("json decode: this isn't json!"));f=f.replace(/^\{|\}$/g,"").split(/,/);var e={},h,g;for(h=0;h<f.length;h++){(g=f[h].match(/^(?:(["']?)([a-z][a-z0-9]*)\1):(?:(\d+)|"([a-z0-9+\/%*_.@=\-]*)")$/i))||q(new sjcl.exception.invalid("json decode: this isn't json!")),e[g[2]]=g[3]?parseInt(g[3],10):g[2].match(/^(ct|salt|iv)$/)?sjcl.codec.base64.toBits(g[4]):unescape(g[4])}
return e},e:function(f,e,h){f===t&&(f={});if(e===t){return f}
for(var g in e){e.hasOwnProperty(g)&&(h&&(f[g]!==t&&f[g]!==e[g])&&q(new sjcl.exception.invalid("required parameter overridden")),f[g]=e[g])}
return f},ea:function(f,e){var h={},g;for(g in f){f.hasOwnProperty(g)&&f[g]!==e[g]&&(h[g]=f[g])}
return h},da:function(f,e){var h={},g;for(g=0;g<e.length;g++){f[e[g]]!==t&&(h[e[g]]=f[e[g]])}
return h}};sjcl.encrypt=sjcl.json.encrypt;sjcl.decrypt=sjcl.json.decrypt;sjcl.misc.ca={};sjcl.misc.cachedPbkdf2=function(f,e){var h=sjcl.misc.ca,g;e=e||{};g=e.iter||1000;h=h[f]=h[f]||{};g=h[g]=h[g]||{firstSalt:e.salt&&e.salt.length?e.salt.slice(0):sjcl.random.randomWords(2,0)};h=e.salt===t?g.firstSalt:e.salt;g[h]=g[h]||sjcl.misc.pbkdf2(f,h,e.iter);return{key:g[h].slice(0),salt:h.slice(0)}};(function(a){var b=a.codec.bytes=a.codec.bytes||{};b.fromBits=b.fromBits||function(c){var d=[],g=a.bitArray.bitLength(c),f,e;for(f=0;f<g/8;f++){if((f&3)===0){e=c[f/4]}
d.push(e>>>24);e<<=8}
return d};b.toBits=b.toBits||function(c){var d=[],f,e=0;for(f=0;f<c.length;f++){e=e<<8|c[f];if((f&3)===3){d.push(e);e=0}}
if(f&3){d.push(a.bitArray.partial(8*(f&3),e))}
return d}}(sjcl));var evLog;(function(){var a=new Date().getTime();function c(e,f,g,d){if(typeof e.addEventListener==="function"){e.addEventListener(f,g,d)}else{if(e.attachEvent){e.attachEvent("on"+f,g)}else{throw new Error(encrypt.errors.UNABLETOBIND+": Unable to bind "+f+"-event")}}}
evLog=evLog||(function(){var d={};return function(j,h,e){if(j==="bind"){evLog(e+"Bind");c(h,"change",function(i){evLog(e+"FieldChangeCount");evLog("log",e,"ch");try{evLog("set",e+"FieldEvHa",b(h))}catch(l){evLog("set",e+"FieldEvHa","Err")}},true);c(h,"click",function(){evLog(e+"FieldClickCount");evLog("log",e,"cl")},true);c(h,"focus",function(){evLog(e+"FieldFocusCount");evLog("log",e,"fo")},true);c(h,"blur",function(){evLog(e+"FieldBlurCount");evLog("log",e,"bl")},true);c(h,"touchstart",function(){evLog(e+"FieldTouchStartCount");evLog("log",e,"Ts")},true);c(h,"touchend",function(){evLog(e+"FieldTouchEndCount");evLog("log",e,"Te")},true);c(h,"touchcancel",function(){evLog(e+"FieldTouchCancelCount");evLog("log",e,"Tc")},true);c(h,"keyup",function(i){if(i.keyCode==16){evLog("log",e,"Su")}else{if(i.keyCode==17){evLog("log",e,"Cu")}else{if(i.keyCode==18){evLog("log",e,"Au")}}}});c(h,"keydown",function(i){evLog(e+"FieldKeyCount");switch(i&&i.keyCode){case 8:evLog("log",e,"Kb");break;case 16:evLog("log",e,"Sd");break;case 17:evLog("log",e,"Cd");break;case 18:evLog("log",e,"Ad");break;case 37:evLog("log",e,"Kl");break;case 39:evLog("log",e,"Kr");break;case 46:evLog("log",e,"Kd");break;case 32:evLog("log",e,"Ks");break;default:if(i.keyCode>=48&&i.keyCode<=57||i.keyCode>=96&&i.keyCode<=105){evLog("log",e,"KN")}else{if(i.keyCode>=65&&i.keyCode<=90){evLog("log",e,"KL")}else{evLog("log",e,"KU");evLog("log",e+"UnkKeys",i.keyCode)}}
break}},true);return}
if(j==="set"){d[h]=e;return}
if(j==="log"){var k=h+"FieldLog";var f=(new Date().getTime())-a;f=Math.round(f/100);if(!d.hasOwnProperty(k)){d[k]=e+"@"+f}else{d[k]+=","+e+"@"+f}
if(d[k].length>1500){d[k]=d[k].substring(d[k].length-1500);d[k]=d[k].substring(d[k].indexOf(",")+1)}
return}
if(j==="extend"){for(var g in d){if(g==="number"||g==="expiryMonth"||g==="expiryYear"||g==="generationtime"||g==="holderName"||g==="cvc"){continue}
if(d.hasOwnProperty(g)){h[g]=""+d[g]}}
return}
if(!d.hasOwnProperty(j)){d[j]=1}else{d[j]++}}})();function b(j){var p=function(){return{}};if(window.jQuery&&typeof window.jQuery._data=="function"){p=function(o){return window.jQuery._data(o,"events")}}
var n=j,d=0,q=[],u=["onmousedown","onmouseup","onmouseover","onmouseout","onclick","onmousemove","ondblclick","onerror","onresize","onscroll","onkeydown","onkeyup","onkeypress","onchange","onsubmit"],k="Own",s="Par",t=u.length;var i=0;while(n&&n!==n.documentElement){i++;var m=t,g,l,h=(n.nodeName||n.tagName||"").toUpperCase().substring(0,3);while(m--){g=u[m];if(n[name]){g=g+((n===j)?k:s)+h;d++;q[g]=q[g]||0;q[g]++}}
var r=p(n);if(typeof r==="object"){for(var g in r){if(r.hasOwnProperty(g)){l=r[g].length;g=g+((n===j)?k:s)+h;q[g]=q[g]||0;q[g]+=l;d+=l}}}
if(!n.parentNode){break}
n=n.parentNode}
var e=["total="+d];for(var f in q){if(q.hasOwnProperty(f)&&q[f]>0){e.push(f+"="+q[f])}}
return e.join("&")}
if(window&&(window.attachEvent||window.addEventListener)){c(window,"focus",function(){evLog("activate");if(window.location&&typeof window.location.href=="string"){evLog("set","referrer",window.location.href)}});c(window,"blur",function(){evLog("deactivate")})}}());var adyen=root.adyen=root.adyen||{};var encrypt=adyen.encrypt=adyen.encrypt||{createEncryptedForm:function(form,key,options){return new EncryptedForm(form,key,options)},createEncryption:function(key,options){return new Encryption(key,options)}};if(typeof fnDefine==="function"&&fnDefine.amd){fnDefine("adyen/encrypt",[],function(){return encrypt})}else{if(typeof module!=="undefined"&&module.exports){module.exports=encrypt}}
(function(document,window){if(document&&window&&document.getElementsByTagName){var _=_?_:{};_.X=function(d,h,g,f){f=new(window.ActiveXObject?ActiveXObject:XMLHttpRequest)("Microsoft.XMLHTTP");f.open(g?"POST":"GET",d,1);g?f.setRequestHeader("Content-type","application/x-www-form-urlencoded"):0;f.onreadystatechange=function(){f.readyState>3&&h?h(f.responseText,f):0};f.send(g)};_.E=function(g,f,h,e){if(g.attachEvent?(e?g.detachEvent("on"+f,g[f+h]):!0):(e?g.removeEventListener(f,h,!1):g.addEventListener(f,h,!1))){g["e"+f+h]=h;g[f+h]=function(){g["e"+f+h](window.event)};g.attachEvent("on"+f,g[f+h])}};_.G=function(b){return b.style?b:document.getElementById(b)};_.A=function(g,h,i,c,j){if(c===undefined){var c=new Object();c.value=0}
c.value?0:c.value=0;return j.value=setInterval(function(){i(c.value/g);++c.value>g?clearInterval(j.value):0},h)};_.F=function(g,d,h,f){g=g=="in";_.A(h?h:15,f?f:50,function(a){a=(g?0:1)+(g?1:-1)*a;d.style.opacity=a;d.style.filter="alpha(opacity="+100*a+")"})};_.S=function(h,o,i,p,f,d,c){h=h=="in";_.A(i?i:15,p?p:50,function(a){a=(h?0:1)+(h?1:-1)*a;o.style.width=parseInt(a*f)+"px"},c,d)};_.Q=function(k){var i=new Object();var m=new Array();for(var f=0;f<k.elements.length;f++){try{l=k.elements[f];n=l.name;if(n==""){continue}
switch(l.type.split("-")[0]){case "select":for(var e=0;e<l.options.length;e++){if(l.options[e].selected){if(typeof(i[n])=="undefined"){i[n]=new Array()}
i[n][i[n].length]=encodeURIComponent(l.options[e].value)}}
break;case "radio":if(l.checked){if(typeof(i[n])=="undefined"){i[n]=new Array()}
i[n][i[n].length]=encodeURIComponent(l.value)}
break;case "checkbox":if(l.checked){if(typeof(i[n])=="undefined"){i[n]=new Array()}
i[n][i[n].length]=encodeURIComponent(l.value)}
break;case "submit":break;default:if(typeof(i[n])=="undefined"){i[n]=new Array()}
i[n][i[n].length]=encodeURIComponent(l.value);break}}catch(j){}}
for(x in i){m[m.length]=x+"="+i[x].join(",")}
return m.join("&")};_.R=function(b){("\v"=="v"||document.documentElement.style.scrollbar3dLightColor!=undefined)?setTimeout(b,0):_.E(document,"DOMContentLoaded",b)};function dfGetPlug(){var u="";var q=0;try{if(navigator.plugins){var i=navigator.plugins;var e=[];for(var t=0;t<i.length;t++){e[t]=i[t].name+"; ";e[t]+=i[t].description+"; ";e[t]+=i[t].filename+";";for(var v=0;v<i[t].length;v++){e[t]+=" ("+i[t][v].description+"; "+i[t][v].type+"; "+i[t][v].suffixes+")"}
e[t]+=". "}
q+=i.length;e.sort();for(t=0;t<i.length;t++){u+="Plugin "+t+": "+e[t]}}
if(u===""){var w=[];w[0]="QuickTime";w[1]="Shockwave";w[2]="Flash";w[3]="WindowsMediaplayer";w[4]="Silverlight";w[5]="RealPlayer";var r;for(var y=0;y<w.length;y++){r=PluginDetect.getVersion(w[y]);if(r){u+=w[y]+" "+r+"; ";q++}}
u+=dfGetIEAV();q++}}catch(s){}
var p={nr:q,obj:u};return p}
function dfGetIEAV(){try{if(window.ActiveXObject){for(var x=2;x<10;x++){try{oAcro=eval("new ActiveXObject('PDF.PdfCtrl."+x+"');");if(oAcro){return "Adobe Acrobat version"+x+".?"}}catch(ex){}}
try{oAcro4=new ActiveXObject("PDF.PdfCtrl.1");if(oAcro4){return "Adobe Acrobat version 4.?"}}catch(ex){}
try{oAcro7=new ActiveXObject("AcroPDF.PDF.1");if(oAcro7){return "Adobe Acrobat version 7.?"}}catch(ex){}
return ""}}catch(e){}
return ""}
function dfGetFonts(){var j="";try{try{var i=document.getElementById("df_jfh");if(i&&i!==null){var p=i.getFontList();for(var k=0;k<p.length;k++){j=j+p[k]+", "}
j+=" (Java)"}}catch(e){}
if(j===""){j="No Flash or Java"}}catch(m){}
var o={nr:j.split(",").length,obj:j};return o}
function dfInitDS(){try{localStorage.dfValue="value"}catch(b){}
try{sessionStorage.dfValue="value"}catch(b){}}
function dfGetDS(){var d="";try{if(localStorage.dfValue==="value"){d+="DOM-LS: Yes"}else{d+="DOM-LS: No"}}catch(c){d+="DOM-LS: No"}
try{if(sessionStorage.dfValue==="value"){d+=", DOM-SS: Yes"}else{d+=", DOM-SS: No"}}catch(c){d+=", DOM-SS: No"}
return d}
function dfGetIEUD(){try{oPersistDiv.setAttribute("cache","value");oPersistDiv.save("oXMLStore");oPersistDiv.setAttribute("cache","new-value");oPersistDiv.load("oXMLStore");if((oPersistDiv.getAttribute("cache"))=="value"){return ", IE-UD: Yes"}else{return ", IE-UD: No"}}catch(b){return ", IE-UD: No"}}
function getWebglFp(){var z=document.createElement("canvas");var t=null;try{t=z.getContext("webgl")||z.getContext("experimental-webgl")}catch(q){return padString("",10)}
if(t===undefined||t===null){return padString("",10)}
var o=[];var r="attribute vec2 attrVert;varying vec2 varyTexCoord;uniform vec2 unifOffset;void main(){varyTexCoord=attrVert+unifOffset;gl_Position=vec4(attrVert,0,1);}";var w="precision mediump float;varying vec2 varyTexCoord;void main() {gl_FragColor=vec4(varyTexCoord*0.55,0,1);}";var v=-0.7;var y=0.7;var u=0.2;var A=t.canvas.width/t.canvas.height;try{s(t,v,y,u,A);s(t,v+u,y-u*A,u,A);s(t,v+u,y-2*u*A,u,A);s(t,v,y-2*u*A,u,A);s(t,v-u,y-2*u*A,u,A)}catch(q){}
if(t.canvas!==null){o.push(t.canvas.toDataURL()+"§")}
try{o.push(t.getParameter(t.RED_BITS));o.push(t.getParameter(t.GREEN_BITS));o.push(t.getParameter(t.BLUE_BITS));o.push(t.getParameter(t.DEPTH_BITS));o.push(t.getParameter(t.ALPHA_BITS));o.push((t.getContextAttributes().antialias?"1":"0"));o.push(p(t.getParameter(t.ALIASED_LINE_WIDTH_RANGE)));o.push(p(t.getParameter(t.ALIASED_POINT_SIZE_RANGE)));o.push(p(t.getParameter(t.MAX_VIEWPORT_DIMS)));o.push(t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS));o.push(t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE));o.push(t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS));o.push(t.getParameter(t.MAX_RENDERBUFFER_SIZE));o.push(t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS));o.push(t.getParameter(t.MAX_TEXTURE_SIZE));o.push(t.getParameter(t.MAX_VARYING_VECTORS));o.push(t.getParameter(t.MAX_VERTEX_ATTRIBS));o.push(t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS));o.push(t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS));o.push(t.getParameter(t.RENDERER));o.push(t.getParameter(t.SHADING_LANGUAGE_VERSION));o.push(t.getParameter(t.STENCIL_BITS));o.push(t.getParameter(t.VENDOR));o.push(t.getParameter(t.VERSION));o.push(t.getSupportedExtensions().join(""))}catch(q){return padString("",10)}
return o.join("");function s(i,b,c,a,d){var h=new Float32Array([b,c,b,c-a*d,b+a,c-a*d,b,c,b+a,c,b+a,c-a*d]);var f=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,f);i.bufferData(i.ARRAY_BUFFER,h,i.STATIC_DRAW);f.itemSize=2;f.numItems=h.length/f.itemSize;var j=i.createProgram();var g=i.createShader(i.VERTEX_SHADER);var e=i.createShader(i.FRAGMENT_SHADER);i.shaderSource(g,r);i.shaderSource(e,w);i.compileShader(g);i.compileShader(e);i.attachShader(j,g);i.attachShader(j,e);i.linkProgram(j);i.useProgram(j);j.vertexPosAttrib=i.getAttribLocation(j,"attrVert");j.offsetUniform=i.getUniformLocation(j,"unifOffset");i.enableVertexAttribArray(j.vertexPosArray);i.vertexAttribPointer(j.vertexPosAttrib,f.itemSize,i.FLOAT,!1,0,0);i.uniform2f(j.offsetUniform,1,1);i.drawArrays(i.TRIANGLE_STRIP,0,f.numItems)}
function p(a){t.clearColor(0,0.5,0,1);t.enable(t.DEPTH_TEST);t.depthFunc(t.LEQUAL);t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT);return a[0]+a[1]}}
function getJsFonts(){var E=function(){return(new Date()).getTime()};var D=E()+3000;try{var u=["monospace","sans-serif","serif"];var B="abcdefghijklmnopqrstuvwxyz";var s="80px";var C=document.body||document.getElementsByTagName("body")[0];var v=document.createElement("span");v.style.fontSize=s;v.innerHTML=B;var t={};var I={};var z=0;for(z=0;z<u.length;z++){v.style.fontFamily=u[z];C.appendChild(v);t[u[z]]=v.offsetWidth;I[u[z]]=v.offsetHeight;C.removeChild(v)}
var y=["Abril Fatface","Adobe Caslon","Adobe Garamond","ADOBE GARAMOND PRO","Affair","Ailerons","Alegreya","Aller","Altus","Amatic","Ambassador","American Typewriter","American Typewriter Condensed","Americane","Amsi Pro","Andale Mono","Anivers","Anonymous Pro","Arca Majora","Archivo Narrow","Arial","Arial Black","Arial Hebrew","Arial MT","Arial Narrow","Arial Rounded MT Bold","Arial Unicode MS","Arimo","Arvo","Asfalto","Asia","Audimat","AvantGarde Bk BT","AvantGarde Md BT","Bank Gothic","BankGothic Md BT","Barkentina","Baskerville","Baskerville Old Face","Bassanova","Batang","BatangChe","Bauhaus 93","Beauchef","Bebas Neue","Bellaboo","Berlin Sans FB","Berlin Sans FB Demi","Betm","Bitter","Blackout","Blox","Bodoni 72","Bodoni 72 Oldstyle","Bodoni 72 Smallcaps","Bodoni MT","Bodoni MT Black","Bodoni MT Condensed","Bodoni MT Poster Compressed","Bomb","Book Antiqua","Bookman Old Style","Bookshelf Symbol 7","Bosque","Bowling Script","Box","Brandon Text","Brandon Text Medium","Bree Serif","Bremen Bd BT","Britannic Bold","Broadway","Brooklyn Samuels","Brotherhood Script","Bukhari Script","Burford","Byker","Cabin","Caecilia","Calibri","Cambria","Cambria Math","Cathedral","Century","Century Gothic","Century Schoolbook","Cervo","Chalfont","Chaucer","Chivo","Chunk","Clarendon","Clarendon Condensed","Clavo","Clavo Regular","Clear Sans Screen","Code","Comic Sans","Comic Sans MS","Conifer","Copperplate","Copperplate Gothic","Copperplate Gothic Bold","Copperplate Gothic Light","CopperplGoth Bd BT","Corbel","Core Sans NR","Courier","Courier New","Curely","D Sert","Delicate","Delicious","DIN","Directors Gothic","Dogtown","Domine","Donau","Dosis","Droid Sans","Droid Serif","Emblema Headline","Endless Bummer","English 111 Vivace BT","Eras Bold ITC","Eras Demi ITC","Eras Light ITC","Eras Medium ITC","Exo","Exo 2","Fabfelt Script","Fanwood","Fedra Sans","Fela","Felice","Felice Regular","Fertigo Pro","FFF TUSJ","Fins","Fjalla One","Fontin","Franchise","Franklin Gothic","Franklin Gothic Book","Franklin Gothic Demi","Franklin Gothic Demi Cond","Franklin Gothic Heavy","Franklin Gothic Medium","Franklin Gothic Medium Cond","Free Spirit","FS Clerkenwell","Futura","Futura Bk BT","Futura Lt BT","Futura Md BT","Futura ZBlk BT","FuturaBlack BT","Galano Classic","Garamond","GEOM","Georgia","GeoSlab 703 Lt BT","GeoSlab 703 XBd BT","Giant","Gibbs","Gill Sans","Gill Sans MT","Gill Sans MT Condensed","Gill Sans MT Ext Condensed Bold","Gill Sans Ultra Bold","Gill Sans Ultra Bold Condensed","Glaser Stencil","Glober","Gloucester MT Extra Condensed","Gotham","GOTHAM","GOTHAM BOLD","Goudy Bookletter 1911","Goudy Old Style","Gravitas One","Hamster","Harman","Helena","Helvetica","Helvetica Neue","Herald","Hero","Hogshead","Home Brush","Horizontes Script","Hoverage","Humanst 521 Cn BT","HWT Artz","Ikaros","Impact","Inconsolata","Into The Light","Istok Web","Itoya","Ivory","Jack","Jekyll and Hyde","Jimmy","Josefin Slab","Junction","Kapra","Karla","Karol","Karol Regular","Karol Semi Bold Italic","Kautiva","Kelso","Knewave","Kurversbrug","Lato","League Gothic","League Script Number One","League Spartan","Libre Baskerville","Linden Hill","Linotte","Lobster","Lombok","Lora","Louize","Louize Italic","Louize Medium","Lucida Bright","Lucida Calligraphy","Lucida Console","Lucida Fax","LUCIDA GRANDE","Lucida Handwriting","Lucida Sans","Lucida Sans Typewriter","Lucida Sans Unicode","Lulo Clean","Manifesto","Maxwell","Merel","Merlo","Merriweather","Metro Nova","Metro Nova Light","Metro Nova Regular","Microsoft Himalaya","Microsoft JhengHei","Microsoft New Tai Lue","Microsoft PhagsPa","Microsoft Sans Serif","Microsoft Tai Le","Microsoft Uighur","Microsoft YaHei","Microsoft Yi Baiti","Modern Brush","Modern No. 20","MONO","Monthoers","Montserrat","Moon","Mrs Eaves","MS Gothic","MS LineDraw","MS Mincho","MS Outlook","MS PGothic","MS PMincho","MS Reference Sans Serif","MS Reference Specialty","MS Sans Serif","MS Serif","MS UI Gothic","MTT Milano","Muli","Museo Slab","Myriad Pro","Neo Sans","Neo-Noire","Neutron","News Gothic","News GothicMT","NewsGoth BT","Nickainley Script","Nobile","Old Century","Old English Text MT","Old Standard TT","Open Sans","Orbitron","Ostrich Sans","Oswald","Palatino","Palatino Linotype","Papyrus","Parchment","Pegasus","Perfograma","Perpetua","Perpetua Titling MT","Petala Pro","Petala Semi Light","Pipeburn","Playfair Display","Prociono","PT Sans","PT Serif","Pythagoras","Qandon","Qandon Regular","Questrial","Raleway","Razor","Reef","Roboto","Roboto Slab","Rockwell","Rockwell Condensed","Rockwell Extra Bold","Runaway","Sartorius","Schist","Scripta Pro","Seaside Resort","Selfie","Serendipity","Serifa","Serifa BT","Serifa Th BT","Shine Pro","Shoebox","Signika","Silver","Skolar","Skyward","Sniglet","Sortdecai","Sorts Mill Goudy","Source Sans Pro","Sparkle","Splandor","Springtime","Spruce","Spumante","Squoosh Gothic","Stadt","Stencil","Streamster","Sunday","Sunn","Swis721 BlkEx BT","Swiss911 XCm BT","Symbol","Tahoma","Technical","Texta","Ticketbook","Timber","Times","Times New Roman","Times New Roman PS","Titillium Web","Trajan","TRAJAN PRO","Trebuchet MS","Trend Rough","Troika","Twist","Ubuntu","Uniform","Univers","Univers CE 55 Medium","Univers Condensed","Unveil","Uomo","Varela Round","Verdana","Visby","Vollkorn","Wahhabi Script","Waterlily","Wayback","Webdings","Wendy","Wingdings","Wingdings 2","Wingdings 3","Woodland","Yonder","Zodiaclaw"];var F=[];while(y.length>0){var G=y.pop();var A=false;for(z=0;z<u.length&&!A;z++){if(E()>D){return padString("",10)}
v.style.fontFamily=G+","+u[z];C.appendChild(v);var H=(v.offsetWidth!==t[u[z]]||v.offsetHeight!==I[u[z]]);C.removeChild(v);A=A||H}
if(A){F.push(G)}}
return F.join(";")}catch(w){return padString("",10)}}
function dfGetProp(){var E={};var s={};s.plugins=10;s.nrOfPlugins=3;s.fonts=10;s.nrOfFonts=3;s.timeZone=10;s.video=10;s.superCookies=10;s.userAgent=10;s.mimeTypes=10;s.nrOfMimeTypes=3;s.canvas=10;s.cpuClass=5;s.platform=5;s.doNotTrack=5;s.webglFp=10;s.jsFonts=10;try{try{var B=dfGetPlug();E.plugins=padString(calculateMd5_b64(B.obj),s.plugins);E.nrOfPlugins=padString(String(B.nr),s.nrOfPlugins)}catch(u){E.plugins=padString("",s.plugins);E.nrOfPlugins=padString("",s.nrOfPlugins)}
E.fonts=padString("",s.fonts);E.nrOfFonts=padString("",s.nrOfFonts);try{var e=new Date();e.setDate(1);e.setMonth(5);var C=e.getTimezoneOffset();e.setMonth(11);var D=e.getTimezoneOffset();E.timeZone=padString(calculateMd5_b64(C+"**"+D),s.timeZone)}catch(u){E.timeZone=padString("",s.timeZone)}
try{E.video=padString(String((screen.width+7)*(screen.height+7)*screen.colorDepth),s.video)}catch(u){E.video=padString("",s.video)}
E.superCookies=padString(calculateMd5_b64(dfGetDS()),Math.floor(s.superCookies/2))+padString(calculateMd5_b64(dfGetIEUD()),Math.floor(s.superCookies/2));E.userAgent=padString(calculateMd5_b64(navigator.userAgent),s.userAgent);var v="";var y=0;if(navigator.mimeTypes){y=navigator.mimeTypes.length;for(var z=0;z<y;z++){var t=navigator.mimeTypes[z];v+=t.description+t.type+t.suffixes}}
E.mimeTypes=padString(calculateMd5_b64(v),s.mimeTypes);E.nrOfMimeTypes=padString(String(y),s.nrOfMimeTypes);E.canvas=padString(calculateMd5_b64(dfCanvasFingerprint()),s.canvas);E.cpuClass=(navigator.cpuClass)?padString(calculateMd5_b64(navigator.cpuClass),s.cpuClass):padString("",s.cpuClass);E.platform=(navigator.platform)?padString(calculateMd5_b64(navigator.platform),s.platform):padString("",s.platform);E.doNotTrack=(navigator.doNotTrack)?padString(calculateMd5_b64(navigator.doNotTrack),s.doNotTrack):padString("",s.doNotTrack);E.jsFonts=padString(calculateMd5_b64(getJsFonts()),s.jsFonts);E.webglFp=padString(calculateMd5_b64(getWebglFp()),s.webglFp);var A=0,i;for(i in E){if(E.hasOwnProperty(i)){A=0;try{A=E[i].length}catch(u){}
if(typeof E[i]==="undefined"||E[i]===null||A!==s[i]){E[i]=padString("",s[i])}}}}catch(w){}
return E}
function dfCanvasFingerprint(){var g=document.createElement("canvas");if(!!(g.getContext&&g.getContext("2d"))){var h=document.createElement("canvas");var e=h.getContext("2d");var f="#&*(sdfjlSDFkjls28270(";e.font="14px 'Arial'";e.textBaseline="alphabetic";e.fillStyle="#f61";e.fillRect(138,2,63,20);e.fillStyle="#068";e.fillText(f,3,16);e.fillStyle="rgba(105, 194, 1, 0.6)";e.fillText(f,5,18);return h.toDataURL()}
return padString("",10)}
function populateFontList(b){}
function dfGetEntropy(){var e=["iPad","iPhone","iPod"];var f=navigator.userAgent;if(f){for(var d=0;d<e.length;d++){if(f.indexOf(e[d])>=0){return "20"}}}
return "40"}
function dfSet(m,e){try{var i=dfGetProp();var p=dfHashConcat(i);var j=dfGetEntropy();var k=_.G(m);k.value=p+":"+j}catch(o){}}
function dfHashConcat(e){try{var f="";f=e.plugins+e.nrOfPlugins+e.fonts+e.nrOfFonts+e.timeZone+e.video+e.superCookies+e.userAgent+e.mimeTypes+e.nrOfMimeTypes+e.canvas+e.cpuClass+e.platform+e.doNotTrack+e.webglFp+e.jsFonts;f=f.replace(/\+/g,"G").replace(/\//g,"D");return f}catch(d){return ""}}
function dfDo(d){try{var f=_.G(d);if(!f){return}
if(f.value){return}
dfInitDS();_.R(function(){setTimeout(function(){dfSet(d,0)},500)})}catch(e){}}
function padString(f,e){if(f.length>=e){return(f.substring(0,e))}else{for(var d="";d.length<e-f.length;d+="0"){}
return(d.concat(f))}}
function calculateMd5_b64(b){return md5_binl2b64(md5_cmc5(md5_s2b(b),b.length*8))}
function md5_cmc5(g,a){g[a>>5]|=128<<((a)%32);g[(((a+64)>>>9)<<4)+14]=a;var h=1732584193;var i=-271733879;var j=-1732584194;var y=271733878;for(var e=0;e<g.length;e+=16){var b=h;var c=i;var d=j;var f=y;h=md5_ff(h,i,j,y,g[e+0],7,-680876936);y=md5_ff(y,h,i,j,g[e+1],12,-389564586);j=md5_ff(j,y,h,i,g[e+2],17,606105819);i=md5_ff(i,j,y,h,g[e+3],22,-1044525330);h=md5_ff(h,i,j,y,g[e+4],7,-176418897);y=md5_ff(y,h,i,j,g[e+5],12,1200080426);j=md5_ff(j,y,h,i,g[e+6],17,-1473231341);i=md5_ff(i,j,y,h,g[e+7],22,-45705983);h=md5_ff(h,i,j,y,g[e+8],7,1770035416);y=md5_ff(y,h,i,j,g[e+9],12,-1958414417);j=md5_ff(j,y,h,i,g[e+10],17,-42063);i=md5_ff(i,j,y,h,g[e+11],22,-1990404162);h=md5_ff(h,i,j,y,g[e+12],7,1804603682);y=md5_ff(y,h,i,j,g[e+13],12,-40341101);j=md5_ff(j,y,h,i,g[e+14],17,-1502002290);i=md5_ff(i,j,y,h,g[e+15],22,1236535329);h=md5_gg(h,i,j,y,g[e+1],5,-165796510);y=md5_gg(y,h,i,j,g[e+6],9,-1069501632);j=md5_gg(j,y,h,i,g[e+11],14,643717713);i=md5_gg(i,j,y,h,g[e+0],20,-373897302);h=md5_gg(h,i,j,y,g[e+5],5,-701558691);y=md5_gg(y,h,i,j,g[e+10],9,38016083);j=md5_gg(j,y,h,i,g[e+15],14,-660478335);i=md5_gg(i,j,y,h,g[e+4],20,-405537848);h=md5_gg(h,i,j,y,g[e+9],5,568446438);y=md5_gg(y,h,i,j,g[e+14],9,-1019803690);j=md5_gg(j,y,h,i,g[e+3],14,-187363961);i=md5_gg(i,j,y,h,g[e+8],20,1163531501);h=md5_gg(h,i,j,y,g[e+13],5,-1444681467);y=md5_gg(y,h,i,j,g[e+2],9,-51403784);j=md5_gg(j,y,h,i,g[e+7],14,1735328473);i=md5_gg(i,j,y,h,g[e+12],20,-1926607734);h=md5_hh(h,i,j,y,g[e+5],4,-378558);y=md5_hh(y,h,i,j,g[e+8],11,-2022574463);j=md5_hh(j,y,h,i,g[e+11],16,1839030562);i=md5_hh(i,j,y,h,g[e+14],23,-35309556);h=md5_hh(h,i,j,y,g[e+1],4,-1530992060);y=md5_hh(y,h,i,j,g[e+4],11,1272893353);j=md5_hh(j,y,h,i,g[e+7],16,-155497632);i=md5_hh(i,j,y,h,g[e+10],23,-1094730640);h=md5_hh(h,i,j,y,g[e+13],4,681279174);y=md5_hh(y,h,i,j,g[e+0],11,-358537222);j=md5_hh(j,y,h,i,g[e+3],16,-722521979);i=md5_hh(i,j,y,h,g[e+6],23,76029189);h=md5_hh(h,i,j,y,g[e+9],4,-640364487);y=md5_hh(y,h,i,j,g[e+12],11,-421815835);j=md5_hh(j,y,h,i,g[e+15],16,530742520);i=md5_hh(i,j,y,h,g[e+2],23,-995338651);h=md5_ii(h,i,j,y,g[e+0],6,-198630844);y=md5_ii(y,h,i,j,g[e+7],10,1126891415);j=md5_ii(j,y,h,i,g[e+14],15,-1416354905);i=md5_ii(i,j,y,h,g[e+5],21,-57434055);h=md5_ii(h,i,j,y,g[e+12],6,1700485571);y=md5_ii(y,h,i,j,g[e+3],10,-1894986606);j=md5_ii(j,y,h,i,g[e+10],15,-1051523);i=md5_ii(i,j,y,h,g[e+1],21,-2054922799);h=md5_ii(h,i,j,y,g[e+8],6,1873313359);y=md5_ii(y,h,i,j,g[e+15],10,-30611744);j=md5_ii(j,y,h,i,g[e+6],15,-1560198380);i=md5_ii(i,j,y,h,g[e+13],21,1309151649);h=md5_ii(h,i,j,y,g[e+4],6,-145523070);y=md5_ii(y,h,i,j,g[e+11],10,-1120210379);j=md5_ii(j,y,h,i,g[e+2],15,718787259);i=md5_ii(i,j,y,h,g[e+9],21,-343485551);h=md5_safe_add(h,b);i=md5_safe_add(i,c);j=md5_safe_add(j,d);y=md5_safe_add(y,f)}
return Array(h,i,j,y)}
function md5_cmn(a,j,k,m,b,i){return md5_safe_add(md5_bit_rol(md5_safe_add(md5_safe_add(j,a),md5_safe_add(m,i)),b),k)}
function md5_ff(m,o,a,b,p,c,d){return md5_cmn((o&a)|((~o)&b),m,o,p,c,d)}
function md5_gg(m,o,a,b,p,c,d){return md5_cmn((o&b)|(a&(~b)),m,o,p,c,d)}
function md5_hh(m,o,a,b,p,c,d){return md5_cmn(o^a^b,m,o,p,c,d)}
function md5_ii(m,o,a,b,p,c,d){return md5_cmn(a^(o|(~b)),m,o,p,c,d)}
function md5_safe_add(g,a){var b=(g&65535)+(a&65535);var h=(g>>16)+(a>>16)+(b>>16);return(h<<16)|(b&65535)}
function md5_bit_rol(a,b){return(a<<b)|(a>>>(32-b))}
function md5_s2b(c){var h=Array();var a=(1<<8)-1;for(var b=0;b<c.length*8;b+=8){h[b>>5]|=(c.charCodeAt(b/8)&a)<<(b%32)}
return h}
function md5_binl2b64(i){var c="";var j="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var p="";for(var b=0;b<i.length*4;b+=3){var a=(((i[b>>2]>>8*(b%4))&255)<<16)|(((i[b+1>>2]>>8*((b+1)%4))&255)<<8)|((i[b+2>>2]>>8*((b+2)%4))&255);for(var d=0;d<4;d++){if(b*8+d*6>i.length*32){p+=c}else{p+=j.charAt((a>>6*(3-d))&63)}}}
return p}
var PluginDetect={version:"0.7.5",name:"PluginDetect",handler:function(a,c,b){return function(){a(c,b)}},isDefined:function(b){return typeof b!="undefined"},isArray:function(b){return(/array/i).test(Object.prototype.toString.call(b))},isFunc:function(b){return typeof b=="function"},isString:function(b){return typeof b=="string"},isNum:function(b){return typeof b=="number"},isStrNum:function(b){return(typeof b=="string"&&(/\d/).test(b))},getNumRegx:/[\d][\d\.\_,-]*/,splitNumRegx:/[\.\_,-]/g,getNum:function(d,a){var b=this,c=b.isStrNum(d)?(b.isDefined(a)?new RegExp(a):b.getNumRegx).exec(d):null;return c?c[0]:null},compareNums:function(b,h,f){var g=this,e,d,c,a=parseInt;if(g.isStrNum(b)&&g.isStrNum(h)){if(g.isDefined(f)&&f.compareNums){return f.compareNums(b,h)}
e=b.split(g.splitNumRegx);d=h.split(g.splitNumRegx);for(c=0;c<Math.min(e.length,d.length);c++){if(a(e[c],10)>a(d[c],10)){return 1}
if(a(e[c],10)<a(d[c],10)){return-1}}}
return 0},formatNum:function(e,a){var b=this,d,c;if(!b.isStrNum(e)){return null}
if(!b.isNum(a)){a=4}
a--;c=e.replace(/\s/g,"").split(b.splitNumRegx).concat(["0","0","0","0"]);for(d=0;d<4;d++){if(/^(0+)(.+)$/.test(c[d])){c[d]=RegExp.$2}
if(d>a||!(/\d/).test(c[d])){c[d]="0"}}
return c.slice(0,4).join(",")},$hasMimeType:function(a){return function(d){if(!a.isIE&&d){var c,b,e,f=a.isString(d)?[d]:d;if(!f||!f.length){return null}
for(e=0;e<f.length;e++){if(/[^\s]/.test(f[e])&&(c=navigator.mimeTypes[f[e]])&&(b=c.enabledPlugin)&&(b.name||b.description)){return c}}}
return null}},findNavPlugin:function(d,k,h){var b=this,a=new RegExp(d,"i"),j=(!b.isDefined(k)||k)?/\d/:0,c=h?new RegExp(h,"i"):0,f=navigator.plugins,A="",m,g,e;for(m=0;m<f.length;m++){e=f[m].description||A;g=f[m].name||A;if((a.test(e)&&(!j||j.test(RegExp.leftContext+RegExp.rightContext)))||(a.test(g)&&(!j||j.test(RegExp.leftContext+RegExp.rightContext)))){if(!c||!(c.test(e)||c.test(g))){return f[m]}}}
return null},getMimeEnabledPlugin:function(e,d){var c=this,f,a=new RegExp(d,"i"),b="";if((f=c.hasMimeType(e))&&(f=f.enabledPlugin)&&(a.test(f.description||b)||a.test(f.name||b))){return f}
return 0},getPluginFileVersion:function(h,d){var b=this,g,f,a,c,e=-1;if(b.OS>2||!h||!h.version||!(g=b.getNum(h.version))){return d}
if(!d){return g}
g=b.formatNum(g);d=b.formatNum(d);f=d.split(b.splitNumRegx);a=g.split(b.splitNumRegx);for(c=0;c<f.length;c++){if(e>-1&&c>e&&f[c]!="0"){return d}
if(a[c]!=f[c]){if(e==-1){e=c}
if(f[c]!="0"){return d}}}
return g},AXO:window.ActiveXObject,getAXO:function(f){var c=null,b,a=this,d;try{c=new a.AXO(f)}catch(b){}
return c},convertFuncs:function(b){var d,c,a,g=/^[\$][\$]/,h={},f=this;for(d in b){if(g.test(d)){h[d]=1}}
for(d in h){try{c=d.slice(2);if(c.length>0&&!b[c]){b[c]=b[d](b);delete b[d]}}catch(a){}}},initScript:function(){var i=this,g=navigator,a="/",e=g.userAgent||"",c=g.vendor||"",h=g.platform||"",d=g.product||"";i.OS=100;if(h){var b,j=["Win",1,"Mac",2,"Linux",3,"FreeBSD",4,"iPhone",21.1,"iPod",21.2,"iPad",21.3,"Win.*CE",22.1,"Win.*Mobile",22.2,"Pocket\\s*PC",22.3,"",100];for(b=j.length-2;b>=0;b=b-2){if(j[b]&&new RegExp(j[b],"i").test(h)){i.OS=j[b+1];break}}}
i.convertFuncs(i);i.isIE=(function(){var m=(function(u,ae){var q="0.7.10",o="",p="?",U="function",ac="undefined",ag="object",W="string",af="major",R="model",ad="name",Y="type",Q="vendor",t="version",ai="architecture",ab="console",V="mobile",s="tablet",Z="smarttv",r="wearable",T="embedded";var ah={extend:function(z,w){for(var y in w){if("browser cpu device engine os".indexOf(y)!==-1&&w[y].length%2===0){z[y]=w[y].concat(z[y])}}
return z},has:function(w,y){if(typeof w==="string"){return y.toLowerCase().indexOf(w.toLowerCase())!==-1}else{return false}},lowerize:function(w){return w.toLowerCase()},major:function(w){return typeof(w)===W?w.split(".")[0]:ae}};var v={rgx:function(){var w,D=0,E,F,G,H,C,B,A=arguments;while(D<A.length&&!C){var y=A[D],z=A[D+1];if(typeof w===ac){w={};for(G in z){if(z.hasOwnProperty(G)){H=z[G];if(typeof H===ag){w[H[0]]=ae}else{w[H]=ae}}}}
E=F=0;while(E<y.length&&!C){C=y[E++].exec(this.getUA());if(!!C){for(G=0;G<z.length;G++){B=C[++F];H=z[G];if(typeof H===ag&&H.length>0){if(H.length==2){if(typeof H[1]==U){w[H[0]]=H[1].call(this,B)}else{w[H[0]]=H[1]}}else{if(H.length==3){if(typeof H[1]===U&&!(H[1].exec&&H[1].test)){w[H[0]]=B?H[1].call(this,B,H[2]):ae}else{w[H[0]]=B?B.replace(H[1],H[2]):ae}}else{if(H.length==4){w[H[0]]=B?H[3].call(this,B.replace(H[1],H[2])):ae}}}}else{w[H]=B?B:ae}}}}
D+=2}
return w},str:function(w,y){for(var z in y){if(typeof y[z]===ag&&y[z].length>0){for(var A=0;A<y[z].length;A++){if(ah.has(y[z][A],w)){return(z===p)?ae:z}}}else{if(ah.has(y[z],w)){return(z===p)?ae:z}}}
return w}};var X={browser:{oldsafari:{version:{"1.0":"/8","1.2":"/1","1.3":"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0","2000":"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0","7":"NT 6.1","8":"NT 6.2","8.1":"NT 6.3","10":["NT 6.4","NT 10.0"],RT:"ARM"}}}};var aa={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[ad,t],[/(OPiOS)[\/\s]+([\w\.]+)/i],[[ad,"Opera Mini"],t],[/\s(opr)\/([\w\.]+)/i],[[ad,"Opera"],t],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]+)*/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i],[ad,t],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[ad,"IE"],t],[/(edge)\/((\d+)?[\w\.]+)/i],[ad,t],[/(yabrowser)\/([\w\.]+)/i],[[ad,"Yandex"],t],[/(comodo_dragon)\/([\w\.]+)/i],[[ad,/_/g," "],t],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i,/(qqbrowser)[\/\s]?([\w\.]+)/i],[ad,t],[/(uc\s?browser)[\/\s]?([\w\.]+)/i,/ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i,/JUC.+(ucweb)[\/\s]?([\w\.]+)/i],[[ad,"UCBrowser"],t],[/(dolfin)\/([\w\.]+)/i],[[ad,"Dolphin"],t],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[ad,"Chrome"],t],[/XiaoMi\/MiuiBrowser\/([\w\.]+)/i],[t,[ad,"MIUI Browser"]],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i],[t,[ad,"Android Browser"]],[/FBAV\/([\w\.]+);/i],[t,[ad,"Facebook"]],[/fxios\/([\w\.-]+)/i],[t,[ad,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[t,[ad,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[t,ad],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[ad,[t,v.str,X.browser.oldsafari.version]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],[ad,t],[/(navigator|netscape)\/([\w\.-]+)/i],[[ad,"Netscape"],t],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]+)*/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[ad,t]]};var S=function(z,w){if(!(this instanceof S)){return new S(z,w).getResult()}
var y=z||((u&&u.navigator&&u.navigator.userAgent)?u.navigator.userAgent:o);var A=w?ah.extend(aa,w):aa;this.getBrowser=function(){var B=v.rgx.apply(this,A.browser);B.major=ah.major(B.version);return B};this.getUA=function(){return y};this.setUA=function(B){y=B;return this};this.setUA(y);return this};S.VERSION=q;S.BROWSER={NAME:ad,MAJOR:af,VERSION:t};S.CPU={ARCHITECTURE:ai};S.DEVICE={MODEL:R,VENDOR:Q,TYPE:Y,CONSOLE:ab,MOBILE:V,SMARTTV:Z,TABLET:s,WEARABLE:r,EMBEDDED:T};S.ENGINE={NAME:ad,VERSION:t};S.OS={NAME:ad,VERSION:t};return S})(typeof window==="object"?window:this);var k=new m();return /^IE|Edge$/.test((k.getBrowser()||{}).name)}());i.verIE=i.isIE&&(/MSIE\s*(\d+\.?\d*)/i).test(e)?parseFloat(RegExp.$1,10):null;i.ActiveXEnabled=false;if(i.isIE){var b,f=["Msxml2.XMLHTTP","Msxml2.DOMDocument","Microsoft.XMLDOM","ShockwaveFlash.ShockwaveFlash","TDCCtl.TDCCtl","Shell.UIHelper","Scripting.Dictionary","wmplayer.ocx"];for(b=0;b<f.length;b++){if(i.getAXO(f[b])){i.ActiveXEnabled=true;break}}
i.head=i.isDefined(document.getElementsByTagName)?document.getElementsByTagName("head")[0]:null}
i.isGecko=(/Gecko/i).test(d)&&(/Gecko\s*\/\s*\d/i).test(e);i.verGecko=i.isGecko?i.formatNum((/rv\s*\:\s*([\.\,\d]+)/i).test(e)?RegExp.$1:"0.9"):null;i.isSafari=(/Safari\s*\/\s*\d/i).test(e)&&(/Apple/i).test(c);i.isChrome=(/Chrome\s*\/\s*(\d[\d\.]*)/i).test(e);i.verChrome=i.isChrome?i.formatNum(RegExp.$1):null;i.isOpera=(/Opera\s*[\/]?\s*(\d+\.?\d*)/i).test(e);i.verOpera=i.isOpera&&((/Version\s*\/\s*(\d+\.?\d*)/i).test(e)||1)?parseFloat(RegExp.$1,10):null;i.addWinEvent("load",i.handler(i.runWLfuncs,i))},init:function(a){var c=this,b,a;if(!c.isString(a)){return-3}
if(a.length==1){c.getVersionDelimiter=a;return-3}
a=a.toLowerCase().replace(/\s/g,"");b=c[a];if(!b||!b.getVersion){return-3}
c.plugin=b;if(!c.isDefined(b.installed)){b.installed=b.version=b.version0=b.getVersionDone=null;b.$=c;b.pluginName=a}
c.garbage=false;if(c.isIE&&!c.ActiveXEnabled){if(b!==c.java){return-2}}
return 1},fPush:function(c,b){var a=this;if(a.isArray(b)&&(a.isFunc(c)||(a.isArray(c)&&c.length>0&&a.isFunc(c[0])))){b.push(c)}},callArray:function(c){var a=this,b;if(a.isArray(c)){for(b=0;b<c.length;b++){if(c[b]===null){return}
a.call(c[b]);c[b]=null}}},call:function(a){var c=this,b=c.isArray(a)?a.length:-1;if(b>0&&c.isFunc(a[0])){a[0](c,b>1?a[1]:0,b>2?a[2]:0,b>3?a[3]:0)}else{if(c.isFunc(a)){a(c)}}},getVersionDelimiter:",",$getVersion:function(a){return function(e,h,g){var b=a.init(e),d,c,f;if(b<0){return null}
d=a.plugin;if(d.getVersionDone!=1){d.getVersion(null,h,g);if(d.getVersionDone===null){d.getVersionDone=1}}
a.cleanup();c=(d.version||d.version0);c=c?c.replace(a.splitNumRegx,a.getVersionDelimiter):c;return c}},cleanup:function(){var a=this;if(a.garbage&&a.isDefined(window.CollectGarbage)){window.CollectGarbage()}},isActiveXObject:function(a,g){var b=this,d=false,c,f="<",h=f+'object width="1" height="1" style="display:none" '+a.getCodeBaseVersion(g)+">"+a.HTML+f+"/object>";if(!b.head){return d}
if(b.head.firstChild){b.head.insertBefore(document.createElement("object"),b.head.firstChild)}else{b.head.appendChild(document.createElement("object"))}
b.head.firstChild.outerHTML=h;try{b.head.firstChild.classid=a.classID}catch(c){}
try{if(b.head.firstChild.object){d=true}}catch(c){}
try{if(d&&b.head.firstChild.readyState<4){b.garbage=true}}catch(c){}
b.head.removeChild(b.head.firstChild);return d},codebaseSearch:function(h,b){var c=this;if(!c.ActiveXEnabled||!h){return null}
if(h.BIfuncs&&h.BIfuncs.length&&h.BIfuncs[h.BIfuncs.length-1]!==null){c.callArray(h.BIfuncs)}
var e,f=h.SEARCH,d;if(c.isStrNum(b)){if(f.match&&f.min&&c.compareNums(b,f.min)<=0){return true}
if(f.match&&f.max&&c.compareNums(b,f.max)>=0){return false}
e=c.isActiveXObject(h,b);if(e&&(!f.min||c.compareNums(b,f.min)>0)){f.min=b}
if(!e&&(!f.max||c.compareNums(b,f.max)<0)){f.max=b}
return e}
var g=[0,0,0,0],o=[].concat(f.digits),G=f.min?1:0,m,k,j,i,F,a=function(r,q){var p=[].concat(g);p[r]=q;return c.isActiveXObject(h,p.join(","))};if(f.max){i=f.max.split(c.splitNumRegx);for(m=0;m<i.length;m++){i[m]=parseInt(i[m],10)}
if(i[0]<o[0]){o[0]=i[0]}}
if(f.min){F=f.min.split(c.splitNumRegx);for(m=0;m<F.length;m++){F[m]=parseInt(F[m],10)}
if(F[0]>g[0]){g[0]=F[0]}}
if(F&&i){for(m=1;m<F.length;m++){if(F[m-1]!=i[m-1]){break}
if(i[m]<o[m]){o[m]=i[m]}
if(F[m]>g[m]){g[m]=F[m]}}}
if(f.max){for(m=1;m<o.length;m++){if(i[m]>0&&o[m]==0&&o[m-1]<f.digits[m-1]){o[m-1]+=1;break}}}
for(m=0;m<o.length;m++){j={};for(k=0;k<20;k++){if(o[m]-g[m]<1){break}
e=Math.round((o[m]+g[m])/2);if(j["a"+e]){break}
j["a"+e]=1;if(a(m,e)){g[m]=e;G=1}else{o[m]=e}}
o[m]=g[m];if(!G&&a(m,g[m])){G=1}
if(!G){break}}
return G?g.join(","):null},addWinEvent:function(b,a){var c=this,d=window,e;if(c.isFunc(a)){if(d.addEventListener){d.addEventListener(b,a,false)}else{if(d.attachEvent){d.attachEvent("on"+b,a)}else{e=d["on"+b];d["on"+b]=c.winHandler(a,e)}}}},winHandler:function(d,c){return function(){d();if(typeof c=="function"){c()}}},WLfuncs0:[],WLfuncs:[],runWLfuncs:function(a){a.winLoaded=true;a.callArray(a.WLfuncs0);a.callArray(a.WLfuncs);if(a.onDoneEmptyDiv){a.onDoneEmptyDiv()}},winLoaded:false,$onWindowLoaded:function(a){return function(b){if(a.winLoaded){a.call(b)}else{a.fPush(b,a.WLfuncs)}}},div:null,divWidth:50,pluginSize:1,emptyDiv:function(){var a=this,d,c,e,b=0;if(a.div&&a.div.childNodes){for(d=a.div.childNodes.length-1;d>=0;d--){e=a.div.childNodes[d];if(e&&e.childNodes){if(b==0){for(c=e.childNodes.length-1;c>=0;c--){e.removeChild(e.childNodes[c])}
a.div.removeChild(e)}else{}}}}},DONEfuncs:[],onDoneEmptyDiv:function(){var a=this,b,c;if(!a.winLoaded){return}
if(a.WLfuncs&&a.WLfuncs.length&&a.WLfuncs[a.WLfuncs.length-1]!==null){return}
for(b in a){c=a[b];if(c&&c.funcs){if(c.OTF==3){return}
if(c.funcs.length&&c.funcs[c.funcs.length-1]!==null){return}}}
for(b=0;b<a.DONEfuncs.length;b++){a.callArray(a.DONEfuncs)}
a.emptyDiv()},getWidth:function(a){if(a){var b=a.scrollWidth||a.offsetWidth,c=this;if(c.isNum(b)){return b}}
return-1},getTagStatus:function(f,m,g,h){var i=this,k,c=f.span,d=i.getWidth(c),A=g.span,b=i.getWidth(A),j=m.span,a=i.getWidth(j);if(!c||!A||!j||!i.getDOMobj(f)){return-2}
if(b<a||d<0||b<0||a<0||a<=i.pluginSize||i.pluginSize<1){return 0}
if(d>=a){return-1}
try{if(d==i.pluginSize&&(!i.isIE||i.getDOMobj(f).readyState==4)){if(!f.winLoaded&&i.winLoaded){return 1}
if(f.winLoaded&&i.isNum(h)){if(!i.isNum(f.count)){f.count=h}
if(h-f.count>=10){return 1}}}}catch(k){}
return 0},getDOMobj:function(d,f){var c,b=this,a=d?d.span:0,g=a&&a.firstChild?1:0;try{if(g&&f){a.firstChild.focus()}}catch(c){}
return g?a.firstChild:null},setStyle:function(g,d){var c=g.style,f,b,a=this;if(c&&d){for(f=0;f<d.length;f=f+2){try{c[d[f]]=d[f+1]}catch(b){}}}},insertDivInBody:function(b){var i,f=this,a="pd33993399",d=null,h=document,g="<",c=(h.getElementsByTagName("body")[0]||h.body);if(!c){try{h.write(g+'div id="'+a+'">o'+g+"/div>");d=h.getElementById(a)}catch(i){}}
c=(h.getElementsByTagName("body")[0]||h.body);if(c){if(c.firstChild&&f.isDefined(c.insertBefore)){c.insertBefore(b,c.firstChild)}else{c.appendChild(b)}
if(d){c.removeChild(d)}}else{}},insertHTML:function(k,f,m,b,D){var E,a=document,q=this,i,h=a.createElement("span"),c,o,j="<";var g=["outlineStyle","none","borderStyle","none","padding","0px","margin","0px","visibility","visible"];if(!q.isDefined(b)){b=""}
if(q.isString(k)&&(/[^\s]/).test(k)){i=j+k+' width="'+q.pluginSize+'" height="'+q.pluginSize+'" ';for(c=0;c<f.length;c=c+2){if(/[^\s]/.test(f[c+1])){i+=f[c]+'="'+f[c+1]+'" '}}
i+=">";for(c=0;c<m.length;c=c+2){if(/[^\s]/.test(m[c+1])){i+=j+'param name="'+m[c]+'" value="'+m[c+1]+'" />'}}
i+=b+j+"/"+k+">"}else{i=b}
if(!q.div){q.div=a.createElement("div");o=a.getElementById("plugindetect");if(o){q.div=o}else{q.div.id="plugindetect";q.insertDivInBody(q.div)}
q.setStyle(q.div,g.concat(["width",q.divWidth+"px","height",(q.pluginSize+3)+"px","fontSize",(q.pluginSize+3)+"px","lineHeight",(q.pluginSize+3)+"px","verticalAlign","baseline","display","block"]));if(!o){q.setStyle(q.div,["position","absolute","right","0px","top","0px"])}}
if(q.div&&q.div.parentNode){q.div.appendChild(h);q.setStyle(h,g.concat(["fontSize",(q.pluginSize+3)+"px","lineHeight",(q.pluginSize+3)+"px","verticalAlign","baseline","display","inline"]));try{if(h&&h.parentNode){h.focus()}}catch(E){}
try{h.innerHTML=i}catch(E){}
if(h.childNodes.length==1&&!(q.isGecko&&q.compareNums(q.verGecko,"1,5,0,0")<0)){q.setStyle(h.firstChild,g.concat(["display","inline"]))}
return{span:h,winLoaded:q.winLoaded,tagName:(q.isString(k)?k:"")}}
return{span:null,winLoaded:q.winLoaded,tagName:""}},quicktime:{mimeType:["video/quicktime","application/x-quicktimeplayer","image/x-macpaint","image/x-quicktime"],progID:"QuickTimeCheckObject.QuickTimeCheck.1",progID0:"QuickTime.QuickTime",classID:"clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B",minIEver:7,HTML:("<")+'param name="src" value="" />'+("<")+'param name="controller" value="false" />',getCodeBaseVersion:function(a){return 'codebase="#version='+a+'"'},SEARCH:{min:0,max:0,match:0,digits:[16,128,128,0]},getVersion:function(a){var d=this,b=d.$,e=null,c=null,f;if(!b.isIE){if(b.hasMimeType(d.mimeType)){c=b.OS!=3?b.findNavPlugin("QuickTime.*Plug-?in",0):null;if(c&&c.name){e=b.getNum(c.name)}}}else{if(b.isStrNum(a)){f=a.split(b.splitNumRegx);if(f.length>3&&parseInt(f[3],10)>0){f[3]="9999"}
a=f.join(",")}
if(b.isStrNum(a)&&b.verIE>=d.minIEver&&d.canUseIsMin()>0){d.installed=d.isMin(a);d.getVersionDone=0;return}
d.getVersionDone=1;if(!e&&b.verIE>=d.minIEver){e=d.CDBASE2VER(b.codebaseSearch(d))}
if(!e){c=b.getAXO(d.progID);if(c&&c.QuickTimeVersion){e=c.QuickTimeVersion.toString(16);e=parseInt(e.charAt(0),16)+"."+parseInt(e.charAt(1),16)+"."+parseInt(e.charAt(2),16)}}}
d.installed=e?1:(c?0:-1);d.version=b.formatNum(e,3)},cdbaseUpper:["7,60,0,0","0,0,0,0"],cdbaseLower:["7,50,0,0",null],cdbase2ver:[function(a,c){var b=c.split(a.$.splitNumRegx);return[b[0],b[1].charAt(0),b[1].charAt(1),b[2]].join(",")},null],CDBASE2VER:function(d){var c=this,a=c.$,f,e=c.cdbaseUpper,b=c.cdbaseLower;if(d){d=a.formatNum(d);for(f=0;f<e.length;f++){if(e[f]&&a.compareNums(d,e[f])<0&&b[f]&&a.compareNums(d,b[f])>=0&&c.cdbase2ver[f]){return c.cdbase2ver[f](c,d)}}}
return d},canUseIsMin:function(){var d=this,b=d.$,f,a=d.canUseIsMin,e=d.cdbaseUpper,c=d.cdbaseLower;if(!a.value){a.value=-1;for(f=0;f<e.length;f++){if(e[f]&&b.codebaseSearch(d,e[f])){a.value=1;break}
if(c[f]&&b.codebaseSearch(d,c[f])){a.value=-1;break}}}
d.SEARCH.match=a.value==1?1:0;return a.value},isMin:function(a){var c=this,b=c.$;return b.codebaseSearch(c,a)?0.7:-1}},flash:{mimeType:["application/x-shockwave-flash","application/futuresplash"],progID:"ShockwaveFlash.ShockwaveFlash",classID:"clsid:D27CDB6E-AE6D-11CF-96B8-444553540000",getVersion:function(){var k=function(i){if(!i){return null}
var e=/[\d][\d\,\.\s]*[rRdD]{0,1}[\d\,]*/.exec(i);return e?e[0].replace(/[rRdD\.]/g,",").replace(/\s/g,""):null};var b,f=this,c=f.$,g,d,h=null,a=null,j=null;if(!c.isIE){b=c.findNavPlugin("Flash");if(b&&b.description&&c.hasMimeType(f.mimeType)){h=k(b.description)}
if(h){h=c.getPluginFileVersion(b,h)}}else{for(d=15;d>2;d--){a=c.getAXO(f.progID+"."+d);if(a){j=d.toString();break}}
if(j=="6"){try{a.AllowScriptAccess="always"}catch(g){return "6,0,21,0"}}
try{h=k(a.GetVariable("$version"))}catch(g){}
if(!h&&j){h=j}}
f.installed=h?1:-1;f.version=c.formatNum(h);return true}},shockwave:{mimeType:"application/x-director",progID:"SWCtl.SWCtl",classID:"clsid:166B1BCA-3F9C-11CF-8075-444553540000",getVersion:function(){var f=null,g=null,d,c,b=this,a=b.$;if(!a.isIE){c=a.findNavPlugin("Shockwave\\s*for\\s*Director");if(c&&c.description&&a.hasMimeType(b.mimeType)){f=a.getNum(c.description)}
if(f){f=a.getPluginFileVersion(c,f)}}else{try{g=a.getAXO(b.progID).ShockwaveVersion("")}catch(d){}
if(a.isString(g)&&g.length>0){f=a.getNum(g)}else{if(a.getAXO(b.progID+".8")){f="8"}else{if(a.getAXO(b.progID+".7")){f="7"}else{if(a.getAXO(b.progID+".1")){f="6"}}}}}
b.installed=f?1:-1;b.version=a.formatNum(f)}},windowsmediaplayer:{mimeType:["application/x-mplayer2","application/asx","application/x-ms-wmp"],progID:"wmplayer.ocx",classID:"clsid:6BF52A52-394A-11D3-B153-00C04F79FAA6",getVersion:function(){var f=this,e=null,c=f.$,b,d=null,a;f.installed=-1;if(!c.isIE){if(c.hasMimeType(f.mimeType)){d=c.findNavPlugin("Windows\\s*Media.*Plug-?in",0,"Totem")||c.findNavPlugin("Flip4Mac.*Windows\\s*Media.*Plug-?in",0,"Totem");b=(c.isGecko&&c.compareNums(c.verGecko,c.formatNum("1.8"))<0);b=b||(c.isOpera&&c.verOpera<10);if(!b&&c.getMimeEnabledPlugin(f.mimeType[2],"Windows\\s*Media.*Firefox.*Plug-?in")){a=c.getDOMobj(c.insertHTML("object",["type",f.mimeType[2],"data",""],["src",""],"",f));if(a){e=a.versionInfo}}}}else{d=c.getAXO(f.progID);if(d){e=d.versionInfo}}
f.installed=d&&e?1:(d?0:-1);f.version=c.formatNum(e)}},silverlight:{mimeType:"application/x-silverlight",progID:"AgControl.AgControl",digits:[20,20,9,12,31],getVersion:function(){var K=this,u=K.$,i=document,f=null,q=null,a=null,e=true,o=[1,0,1,1,1],k=[1,0,1,1,1],h=function(d){return(d<10?"0":"")+d.toString()},r=function(t,s,d,p,v){return(t+"."+s+"."+d+h(p)+h(v)+".0")},J=function(d,s,p){return g(d,(s==0?p:k[0]),(s==1?p:k[1]),(s==2?p:k[2]),(s==3?p:k[3]),(s==4?p:k[4]))},g=function(d,v,t,s,p,w){var w;try{return d.IsVersionSupported(r(v,t,s,p,w))}catch(w){}
return false};if(!u.isIE){var b;if(u.hasMimeType(K.mimeType)){b=u.isGecko&&u.compareNums(u.verGecko,u.formatNum("1.6"))<=0;if(u.isGecko&&b){e=false}
a=u.findNavPlugin("Silverlight.*Plug-?in",0);if(a&&a.description){f=u.formatNum(a.description)}
if(f){k=f.split(u.splitNumRegx);if(parseInt(k[2],10)>=30226&&parseInt(k[0],10)<2){k[0]="2"}
f=k.join(",")}}
K.installed=a&&e&&f?1:(a&&e?0:(a?-0.2:-1))}else{q=u.getAXO(K.progID);var m,j,c;if(q&&g(q,o[0],o[1],o[2],o[3],o[4])){for(m=0;m<K.digits.length;m++){c=k[m];for(j=c+(m==0?0:1);j<=K.digits[m];j++){if(J(q,m,j)){e=true;k[m]=j}else{break}}
if(!e){break}}
if(e){f=r(k[0],k[1],k[2],k[3],k[4])}}
K.installed=q&&e&&f?1:(q&&e?0:(q?-0.2:-1))}
K.version=u.formatNum(f)}},realplayer:{mimeType:["audio/x-pn-realaudio-plugin"],progID:["rmocx.RealPlayer G2 Control","rmocx.RealPlayer G2 Control.1","RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)","RealVideo.RealVideo(tm) ActiveX Control (32-bit)","RealPlayer"],classID:"clsid:CFCDAA03-8BE4-11cf-B84B-0020AFBBCCFA",INSTALLED:{},q1:[[11,0,0],[999],[663],[663],[663],[660],[468],[468],[468],[468],[468],[468],[431],[431],[431],[372],[180],[180],[172],[172],[167],[114],[0]],q3:[[6,0],[12,99],[12,69],[12,69],[12,69],[12,69],[12,69],[12,69],[12,69],[12,69],[12,69],[12,69],[12,46],[12,46],[12,46],[11,3006],[11,2806],[11,2806],[11,2804],[11,2804],[11,2799],[11,2749],[11,2700]],compare:function(g,f){var d,i=g.length,e=f.length,h,c;for(d=0;d<Math.max(i,e);d++){h=d<i?g[d]:0;c=d<e?f[d]:0;if(h>c){return 1}
if(h<c){return-1}}
return 0},convertNum:function(h,d,c){var e=this,a=e.$,b,i,f,g=null;if(!h||!(b=a.formatNum(h))){return g}
b=b.split(a.splitNumRegx);for(f=0;f<b.length;f++){b[f]=parseInt(b[f],10)}
if(e.compare(b.slice(0,Math.min(d[0].length,b.length)),d[0])!=0){return g}
i=b.length>d[0].length?b.slice(d[0].length):[];if(e.compare(i,d[1])>0||e.compare(i,d[d.length-1])<0){return g}
for(f=d.length-1;f>=1;f--){if(f==1){break}
if(e.compare(d[f],i)==0&&e.compare(d[f],d[f-1])==0){break}
if(e.compare(i,d[f])>=0&&e.compare(i,d[f-1])<0){break}}
return c[0].join(".")+"."+c[f].join(".")},getVersion:function(b,d){var r=this,s=null,f=0,k=0,g=r.$,m,q,M,a;if(g.isString(d)&&/[^\s]/.test(d)){a=d}else{d=null;a=r.mimeType[0]}
if(g.isDefined(r.INSTALLED[a])){r.installed=r.INSTALLED[a];return}
if(!g.isIE){var t="RealPlayer.*Plug-?in",o=g.hasMimeType(r.mimeType),h=g.findNavPlugin(t,0);if(o&&h){f=1;if(d){if(g.getMimeEnabledPlugin(d,t)){k=1}else{k=0}}else{k=1}}
if(r.getVersionDone!==0){r.getVersionDone=0;if(o){var j=1,c=null,L=null;M=g.hasMimeType("application/vnd.rn-realplayer-javascript");if(M){c=g.formatNum(g.getNum(M.enabledPlugin.description))}
if(g.OS==1&&c){var i=c.split(g.splitNumRegx);L=true;if(r.compare(i,[6,0,12,200])<0){L=false}else{if(r.compare(i,[6,0,12,1739])<=0&&r.compare(i,[6,0,12,857])>=0){L=false}}}
if(L===false){j=0}
if(g.OS<=2){if(g.isGecko&&g.compareNums(g.verGecko,g.formatNum("1,8"))<0){j=0}
if(g.isChrome){j=0}
if(g.isOpera&&g.verOpera<10){j=0}}else{j=0}
if(j){M=g.insertHTML("object",["type",r.mimeType[0]],["src","","autostart","false","imagestatus","false","controls","stopbutton"],"",r);M=g.getDOMobj(M);try{s=g.getNum(M.GetVersionInfo())}catch(m){}
g.setStyle(M,["display","none"])}
if(!s&&c&&L===false){M=r.convertNum(c,r.q3,r.q1);s=M?M:c}}}else{s=r.version}
r.installed=f&&k&&s?1:(f&&k?0:(f?-0.2:-1))}else{M=null;for(q=0;q<r.progID.length;q++){M=g.getAXO(r.progID[q]);if(M){try{s=g.getNum(M.GetVersionInfo());break}catch(m){}}}
r.installed=s?1:-1}
if(!r.version){r.version=g.formatNum(s)}
r.INSTALLED[a]=r.installed}},zz:0};PluginDetect.initScript();df=function(){var dfValue;df=function(){return dfValue};setTimeout(function(){var targetField=document.createElement("input");dfInitDS();dfSet(targetField,0);dfValue=targetField.value},10);return ""}}else{df=function(){return ""}}}(document,window));encrypt.errors=encrypt.errors||{};encrypt.errors.UNABLETOBIND="CSEB01";function addEvent(element,event,callback,capture){if(typeof element.addEventListener==="function"){element.addEventListener(event,callback,capture)}else{if(element.attachEvent){element.attachEvent("on"+event,callback)}else{throw new Error(encrypt.errors.UNABLETOBIND+": Unable to bind "+event+"-event")}}}
function hasClass(elem,className){return elem&&new RegExp(" "+className+" ").test(" "+(elem.className||"")+" ")}
function addClass(elem,className){if(!elem){return}
if(!hasClass(elem,className)){elem.className+=" "+className}}
function removeClass(elem,className){if(!elem){return}
var newClass=" "+elem.className.replace(/[\t\r\n]/g," ")+" ";if(hasClass(elem,className)){while(newClass.indexOf(" "+className+" ")>=0){newClass=newClass.replace(" "+className+" "," ")}
elem.className=newClass.replace(/^\s+|\s+$/g,"")}}
function getAttribute(node,attribute,defaultValue){if(node&&node.getAttribute){return node.getAttribute(attribute)||defaultValue}else{return defaultValue}}
encrypt.version="0_1_20_1";if(!Function.prototype.bind){Function.prototype.bind=function(oThis){if(typeof this!=="function"){throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable")}
var aArgs=Array.prototype.slice.call(arguments,1),fToBind=this,fNOP=function(){},fBound=function(){return fToBind.apply(this instanceof fNOP&&oThis?this:oThis,aArgs.concat(Array.prototype.slice.call(arguments)))};fNOP.prototype=this.prototype;fBound.prototype=new fNOP();return fBound}}
if(!Date.prototype.toISOString){(function(){function pad(number){if(number<10){return "0"+number}
return number}
Date.prototype.toISOString=function(){return this.getUTCFullYear()+"-"+pad(this.getUTCMonth()+1)+"-"+pad(this.getUTCDate())+"T"+pad(this.getUTCHours())+":"+pad(this.getUTCMinutes())+":"+pad(this.getUTCSeconds())+"."+(this.getUTCMilliseconds()/1000).toFixed(3).slice(2,5)+"Z"}}())}
var validations={};validations.luhnCheck=(function(){var luhnCache={};return function(){var argv=arguments;var argc=arguments.length;var CardNumber=argc>0?argv[0]:this.cardnumber;if(isNaN(parseInt(CardNumber,10))){return false}
var no_digit=CardNumber.length;var oddoeven=no_digit&1;var sum=0;if(typeof luhnCache[CardNumber]==="undefined"){if(no_digit>=14){evLog("luhnCount")}
for(var count=0;count<no_digit;count++){var digit=parseInt(CardNumber.charAt(count),10);if(!((count&1)^oddoeven)){digit*=2;if(digit>9){digit-=9}}
sum+=digit}
if(sum%10===0){evLog("luhnOkCount");luhnCache[CardNumber]=true}else{evLog("luhnFailCount");luhnCache[CardNumber]=false}}
var luhnCacheTries=0;for(var i in luhnCache){if(luhnCache.hasOwnProperty(i)&&i.length===no_digit){luhnCacheTries++}}
evLog("set","luhnSameLengthCount",luhnCacheTries);return luhnCache[CardNumber]}})();validations.numberCheck=function(val){return((val||"").replace(/[^\d]/g,"").match(/^\d{10,20}$/)&&validations.luhnCheck(val))?true:false};validations.cvcCheck=function(val){return(val&&val.match&&val.match(/^\d{3,4}$/))?true:false};validations.yearCheck=function(val){if(!val||!val.match||!val.match(/^2\d{3}$/)){return false}
var year=parseInt(val,10),currentYear=(new Date()).getFullYear();return year>=currentYear-2&&year<=currentYear+15};validations.monthCheck=function(val){var myVal=(val||"").replace(/^0(\d)$/,"$1");return(myVal.match(/^([1-9]|10|11|12)$/)&&parseInt(myVal,10)>=1&&parseInt(myVal,10)<=12)?true:false};validations.holderNameCheck=function(val){return(val&&val.match&&val.match(/\S/))?true:false};validations.generationTimeValidDate=function(val){if(typeof val!=="string"){return false}
var m=val.match(/^(\d{4})-?(\d{2})-?(\d{2})$/);return(m&&(""+m[1]).match(/^20[1-9][0-9]$/)&&(""+m[2]).match(/^(12|11|10|0[1-9])$/)&&(""+m[3]).match(/^(31|30|20|10|[012][1-9])$/))?true:false};validations.generationTimeValidTime=function(val){if(typeof val!=="string"){return false}
var reZone=/(Z|[\+\-][012345][0-9]:?[012345][0-9])$/;if(!val.match(reZone)){return false}
var withoutZoneAndMs=val.replace(reZone,"").replace(/\.\d{3}$/,"");return withoutZoneAndMs.match(/^[012345][0-9]:?[012345][0-9]:?[012345][0-9]$/)};validations.generationTimeCheck=function(val){if(typeof val!=="string"){return false}
var parts=val.split("T");return(parts.length===2&&validations.generationTimeValidDate(parts[0])&&validations.generationTimeValidTime(parts[1]))?true:false};var Encryption=function(key,options){try{sjcl.random.startCollectors()}catch(e){}
try{df()}catch(e){}
this.key=key;this.options=options||{};if(typeof this.options.numberIgnoreNonNumeric==="undefined"){this.options.numberIgnoreNonNumeric=true}
if(typeof this.options.cvcIgnoreFornumber!=="undefined"){delete this.options.cvcIgnoreFornumber}
if(typeof this.options.fourDigitCvcForBins==="undefined"){this.options.fourDigitCvcForBins="34,37"}
if(typeof this.options.cvcLengthFornumber!=="undefined"){delete this.options.cvcLengthFornumber}
if(typeof this.options.cvcIgnoreBins==="string"){var binsToIgnore=[];this.options.cvcIgnoreBins.replace(/\d+/g,function(m){if(m.length>0&&!isNaN(parseInt(m,10))){binsToIgnore.push(m)}
return m});if(binsToIgnore.length>0){this.options.cvcIgnoreFornumber=new RegExp("^\\s*("+binsToIgnore.join("|")+")")}}else{if(typeof this.options.cvcIgnoreBins!=="undefined"){delete this.options.cvcIgnoreBins}}
if(typeof this.options.fourDigitCvcForBins==="string"){var cvcGroups=[];this.options.fourDigitCvcForBins.replace(/\d+/g,function(m){if(m.length>0&&!isNaN(parseInt(m,10))){cvcGroups.push(m)}
return m});if(cvcGroups.length>0){this.options.cvcLengthFornumber={matcher:new RegExp("^\\s*("+cvcGroups.join("|")+")"),requiredLength:4}}}
delete this.options.fourDigitCvcForBins;evLog("initializeCount")};Encryption.prototype.createRSAKey=function(){var k=this.key.split("|");if(k.length!==2){throw "Malformed public key"}
var exp=k[0];var mod=k[1];var rsa=new RSAKey();rsa.setPublic(mod,exp);return rsa};Encryption.prototype.createAESKey=function(){return new AESKey()};Encryption.prototype.encrypt=function(original){var data={};for(var i in original){if(original.hasOwnProperty(i)){data[i]=original[i]}}
var rsa,aes,cipher,keybytes,encrypted,prefix,validationObject={};if(typeof data.number!=="undefined"){validationObject.number=data.number}
if(typeof data.cvc!=="undefined"){validationObject.cvc=data.cvc}
if(typeof data.expiryMonth!=="undefined"){validationObject.month=data.expiryMonth}
if(typeof data.expiryYear!=="undefined"){validationObject.year=data.expiryYear}
if(typeof data.holderName!=="undefined"){validationObject.holderName=data.holderName}
if(typeof data.generationtime!=="undefined"){validationObject.generationtime=data.generationtime}
if(this.options.enableValidations!==false&&this.validate(validationObject).valid===false){return false}
for(var s=0;s<11;s++){if(sjcl.random&&sjcl.random.isReady(s)){evLog("set","sjclStrength",s)}else{break}}
evLog("extend",data);try{data.dfValue=df()}catch(e){}
rsa=this.createRSAKey();aes=this.createAESKey();cipher=aes.encrypt(JSON.stringify(data));keybytes=sjcl.codec.bytes.fromBits(aes.key());encrypted=rsa.encrypt_b64(keybytes);prefix="adyenjs_"+encrypt.version+"$";return[prefix,encrypted,"$",cipher].join("")};Encryption.prototype.validate=function(data){var result={};result.valid=true;if(typeof data!=="object"){result.valid=false;return result}
for(var field in data){if(!data.hasOwnProperty(field)||typeof data[field]==="undefined"){continue}
var val=data[field];if(this.options[field+"IgnoreNonNumeric"]){val=val.replace(/\D/g,"")}
if(this.options[field+"SkipValidation"]){continue}
for(var relatedField in data){if(data.hasOwnProperty(relatedField)){var possibleOption=this.options[field+"IgnoreFor"+relatedField];var lengthOption=this.options[field+"LengthFor"+relatedField];if(possibleOption&&data[relatedField].match(possibleOption)){result[field]=true;continue}else{if(lengthOption&&lengthOption.matcher&&lengthOption.requiredLength&&data[relatedField].match(lengthOption.matcher)){if(val.length!==lengthOption.requiredLength){result[field]=false;continue}}}}}
if(result.hasOwnProperty(field)){result.valid=result.valid&&result[field];continue}
switch(field){case "number":result.number=validations.numberCheck(val);result.luhn=result.number;result.valid=result.valid&&result.number;break;case "expiryYear":case "year":result.year=validations.yearCheck(val);result.expiryYear=result.year;result.valid=result.valid&&result.year;break;case "cvc":result.cvc=validations.cvcCheck(val);result.valid=result.valid&&result.cvc;break;case "expiryMonth":case "month":result.month=validations.monthCheck(val);result.expiryMonth=result.month;result.valid=result.valid&&result.month;break;case "holderName":result.holderName=validations.holderNameCheck(val);result.valid=result.valid&&result.holderName;break;case "generationtime":result.generationtime=validations.generationTimeCheck(val);result.valid=result.valid&&result.generationtime;break;default:result.unknown=result.unknown||[];result.unknown.push(field);result.valid=false}}
return result};Encryption.prototype.monitor=function(field,node){if(typeof field!=="string"||(field!=="number"&&field!=="cvc"&&field!=="holderName")){throw new Error("invalid fieldname. Expected 'number', 'cvc' or 'holderName', but received '"+field+"'")}
evLog("bind",node,field)};validations.createChangeHandler=function(cse,field,allowEmpty){var ceConfig={chained:false};var ce=function(ev){var node=ev.target||ev.srcElement,val=(node||{}).value||"";var isInitializing=(typeof ev.isInitializing==="boolean"&&ev.isInitializing);if(node.options&&typeof node.selectedIndex!=="undefined"){val=node.options[node.selectedIndex].value}
if(cse.options[field+"IgnoreNonNumeric"]){val=val.replace(/\D/g,"")}
var fieldData=cse.toJSON(cse.getEncryptedFields(cse.element));var validationData={year:fieldData.expiryYear,month:fieldData.expiryMonth,number:fieldData.number,cvc:fieldData.cvc,holderName:fieldData.holderName};var validationResult=cse.encryption.validate(validationData);for(var i in validationResult){if(validationResult.hasOwnProperty(i)){cse.validity[i]=validationResult[i]}}
if(cse.validity[field]){removeClass(node,"invalid-"+field);addClass(node,"valid-"+field)}else{if(!isInitializing||val!==""){addClass(node,"invalid-"+field)}
removeClass(node,"valid-"+field)}
cse.validity.luhn=cse.validity.number;if((node.className||"").match(/invalid-number/)){addClass(node,"invalid-luhn");removeClass(node,"valid-luhn")}else{if((node.className||"").match(/valid-number/)){removeClass(node,"invalid-luhn");addClass(node,"valid-luhn")}}
if(allowEmpty&&val===""){removeClass(node,"valid-"+field);removeClass(node,"invalid-"+field)}
if((node.className||"").match(/invalid-/)){addClass(node,"invalid")}else{removeClass(node,"invalid")}
if(cse.options.disabledValidClass!==true){if((node.className||"").match(/invalid-/)){removeClass(node,"valid")}else{addClass(node,"valid")}}
if(typeof ceConfig.chained==="function"){ceConfig.chained(ev)}else{if(!isInitializing){cse.toggleSubmit()}}};ce.chain=function(handler){ceConfig.chained=handler};return ce};var DEFAULT_FIELDNAME_ATTRIBUTE="data-encrypted-name";var EncryptedForm=function(element,key,options){if(typeof element!=="object"||typeof element.ownerDocument!=="object"){throw new Error("Expected target element to be a HTML Form element")}
if("form"!==(element.nodeName||element.tagName||"").toLowerCase()){throw new Error("Expected target element to be a HTML Form element")}
this.element=element;this.key=key;this.validity={};evLog("initializeFormCount");this.options=options=options||{};if(typeof options!=="object"){throw new Error("Expected options to be an object")}
if(typeof options.numberIgnoreNonNumeric==="undefined"){options.numberIgnoreNonNumeric=true}
options.generationtimeSkipValidation=(options.generationtimeSkipValidation===true);options.cvcSkipValidation=(options.cvcSkipValidation===true);if(typeof options.fieldNameAttribute!=="string"||!options.fieldNameAttribute.match(/^data(-\w+)+$/i)){options.fieldNameAttribute=DEFAULT_FIELDNAME_ATTRIBUTE}
this.name=options.name||"adyen-encrypted-data";this.fieldNameAttribute=options.fieldNameAttribute||DEFAULT_FIELDNAME_ATTRIBUTE;this.onsubmit=options.onsubmit||function(){};this.encryption=new Encryption(key,options);if(this.element.addEventListener){this.element.addEventListener("submit",this.handleSubmit.bind(this),false)}else{if(this.element.attachEvent){this.element.attachEvent("onsubmit",this.handleSubmit.bind(this))}}
if(options.enableValidations!==false){this.addValidations()}
for(var i=0,c=element.elements.length;i<c;i++){if(!element.elements[i]){continue}
var attr=getAttribute(element.elements[i],this.options.fieldNameAttribute);if(typeof attr!=="undefined"&&attr!==null&&attr!==""){evLog("bind",element.elements[i],attr)}}};EncryptedForm.prototype={constructor:EncryptedForm,hasAttribute:(document&&document.documentElement&&document.documentElement.hasAttribute)?function(node,attrName){return node.hasAttribute(attrName)}:function(node,attrName){return node.attributes&&node.attributes[attrName]},handleSubmit:function(e){if(this.options.enableValidations!==false){if(!this.isValid()){this.createEncryptedField("false");if(e.preventDefault){e.preventDefault()}
if(window.event){window.event.returnValue=false}
if(e.originalEvent){e.originalEvent.returnValue=false}
e.returnValue=false;return false}}
this.createEncryptedField(this.encrypt());this.onsubmit(e)},getEncryptedFields:function(node,fields){if(node.querySelectorAll){return node.querySelectorAll("["+this.fieldNameAttribute+"]")}
fields=fields||[];var children=node.children;var child;for(var i=0;i<children.length;i++){child=children[i];if(this.hasAttribute(child,this.fieldNameAttribute)){fields.push(child)}else{this.getEncryptedFields(child,fields)}}
return fields},toJSON:function(fields){var field,data={},key,value;for(var i=fields.length-1;i>=0;i--){field=fields[i];field.removeAttribute("name");key=field.getAttribute(this.fieldNameAttribute);value=field.value;if(field.options&&typeof field.selectedIndex!=="undefined"){value=field.options[field.selectedIndex].value}
data[key]=value}
return data},encrypt:function(){return this.encryption.encrypt(this.toJSON(this.getEncryptedFields(this.element)))},createEncryptedField:function(data){var element=document.getElementById(this.name);if(!element){element=document.createElement("input");element.type="hidden";element.name=element.id=this.name;this.element.appendChild(element)}
element.setAttribute("value",data)},addValidations:function(){var cse=this,elements=this.element.elements,c=elements.length,element,handlers={},elementsByName={};for(;c-->0;){element=elements[c];if(!element||!element.getAttribute){continue}
var fieldName=element.getAttribute(this.fieldNameAttribute);elementsByName[fieldName]=element;if(fieldName==="number"){handlers.luhnHandler=handlers.luhnHandler||validations.createChangeHandler(cse,"number",true);addEvent(element,"change",handlers.luhnHandler,false);addEvent(element,"keyup",handlers.luhnHandler,false);addEvent(element,"blur",handlers.luhnHandler,false);handlers.luhnHandler({target:element,isInitializing:true})}else{if(fieldName==="cvc"){handlers.cvcHandler=handlers.cvcHandler||validations.createChangeHandler(cse,"cvc",true);addEvent(element,"change",handlers.cvcHandler,false);addEvent(element,"keyup",handlers.cvcHandler,false);addEvent(element,"blur",handlers.cvcHandler,false);handlers.cvcHandler({target:element,isInitializing:true})}else{if(fieldName==="expiryYear"){handlers.expiryYearHandler=handlers.expiryYearHandler||validations.createChangeHandler(cse,"year",true);addEvent(element,"change",handlers.expiryYearHandler,false);addEvent(element,"keyup",handlers.expiryYearHandler,false);addEvent(element,"blur",handlers.expiryYearHandler,false);handlers.expiryYearHandler({target:element,isInitializing:true})}else{if(fieldName==="expiryMonth"){handlers.expiryMonthHandler=handlers.expiryMonthHandler||validations.createChangeHandler(cse,"month",true);addEvent(element,"change",handlers.expiryMonthHandler,false);addEvent(element,"keyup",handlers.expiryMonthHandler,false);addEvent(element,"blur",handlers.expiryMonthHandler,false);handlers.expiryMonthHandler({target:element,isInitializing:true})}else{if(fieldName==="holderName"){handlers.holderNameHandler=handlers.holderNameHandler||validations.createChangeHandler(cse,"holderName",false);addEvent(element,"change",handlers.holderNameHandler,false);addEvent(element,"keyup",handlers.holderNameHandler,false);addEvent(element,"blur",handlers.holderNameHandler,false);handlers.holderNameHandler({target:element,isInitializing:true})}}}}}}
if(handlers.luhnHandler&&handlers.cvcHandler&&elementsByName.number&&elementsByName.cvc){handlers.luhnHandler.chain(function(ev){handlers.cvcHandler({target:elementsByName.cvc,originalEvent:ev,type:(ev||{}).type,isInitializing:(ev||{}).isInitializing})})}},addCardTypeDetection:function(cardTypeElement){if(typeof adyen.CardTypeDetection==="undefined"||typeof adyen.CardTypeDetection.getHandler!=="function"){return window.console&&window.console.warn("[CSE] Card type detection not available")}
var updateCardTypeDetection=adyen.CardTypeDetection.getHandler(cardTypeElement);var cse=this,elements=this.element.elements,c=elements.length,element,handlers={};for(;c-->0;){element=elements[c];if(!element||!element.getAttribute){continue}else{if(element.getAttribute(this.fieldNameAttribute)==="number"){addEvent(element,"change",updateCardTypeDetection,false);addEvent(element,"input",updateCardTypeDetection,false);addEvent(element,"keyup",updateCardTypeDetection,false);updateCardTypeDetection({target:element})}}}},validate:function(){var fields=this.toJSON(this.getEncryptedFields(this.element));delete fields.generationtime;return this.encryption.validate(fields)||{valid:false}},isValid:function(){var valid=this.validate().valid;for(var i in this.validity){if(this.validity.hasOwnProperty(i)){valid=valid&&this.validity[i]}}
return valid},toggleSubmit:function(){var valid=this.isValid(),elements=this.element.elements,enabled;enabled=valid===true||(this.options&&this.options.submitButtonAlwaysEnabled===true);for(var c=elements.length;c-->0;){if(elements[c]&&(elements[c].type||"").toLowerCase()==="submit"){elements[c].disabled=!enabled}}
if(typeof this.options.onvalidate==="function"){try{this.options.onvalidate(this.validity)}catch(e){if(window.console&&window.console.warn&&window.console.log){console.warn("[CSE] Error in custom validationComplete handler");console.log("Caught error was ",e)}}}
return valid},getVersion:function(){return encrypt.version}};var AESKey=function(){};AESKey.prototype={constructor:AESKey,key:function(){this._key=this._key||sjcl.random.randomWords(8,6);return this._key},encrypt:function(text){return this.encryptWithIv(text,sjcl.random.randomWords(3,6))},encryptWithIv:function(text,iv){var aes,bits,cipher,cipherIV;aes=new sjcl.cipher.aes(this.key());bits=sjcl.codec.utf8String.toBits(text);cipher=sjcl.mode.ccm.encrypt(aes,bits,iv);cipherIV=sjcl.bitArray.concat(iv,cipher);return sjcl.codec.base64.fromBits(cipherIV)}}})(this,typeof define==="function"?define:null);if(typeof adyen.encrypt.createEncryptedForm==="function"){(function(){key="10001|88C8E6F21CC3C39548EFCABFEF177A1D7B7BEEFFD3AE0044657A000BD8D8A42F89A9EDD34D0D64D396EBB2CB765E9265D6505ABB3F53707C60160DB9A07BE419312F492B689F84E4622C75CE9BDD0FE7B4C87DDCAFD7C99781D0201453821DB3AC72A9D95DB34BA2ABF438568BEC1A46BEEBA58552B51CFC5B2D54B9EA5A17AB1BA50F8F287CEC57BF0272AC2F7901DDA4FAAC51F7331A0D5A6C44BE8C1588F31A9F7C9A305A117D5857EB65E7B7F15EE3657F2C45E2ACADDE3C4D74F7DED69E3FC6E838746B59048255B2A46808F66049110C29F8DCE60E8AA6BF94E185E86BA4FA3EBC0B53997AAC28003F3321B0B3D1BB8E949C66F6AED77055E964A41F57";adyen.createEncryptedForm=function(form,options){return adyen.encrypt.createEncryptedForm(form,key,options||{});};if(typeof adyen.encrypt.createEncryption==="function"){adyen.createEncryption=function(options){return adyen.encrypt.createEncryption(key,options||{});};}}());}else{adyen.cse.available=false;}}());var cseInstance=adyen.encrypt.createEncryption(key,options);function getEncryptedFormData(cardNumber,cvc,holderName,expiryMonth,expiryYear,generationtime){var postData={};var cardData={number:cardNumber,cvc:cvc,holderName:holderName,expiryMonth:expiryMonth,expiryYear:expiryYear,generationtime:generationtime};postData['adyen-encrypted-data']=cseInstance.encrypt(cardData);return postData;}