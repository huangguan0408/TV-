var L_B,L_P,WNJP,time,url_s,url_p,jp_lb,lb_lb,lb_fy,pns,pn,mys,myx,myy,myld,myid,mymz,mysrc,mypng,myxo,fypp_lb;var times = new Date();
function MY_E2H(str) {
    var arrEntities = {'lt': '<','gt': '>','nbsp': ' ','amp': '&','quot': '"'};
    return str.replace(/&(lt|gt|nbsp|amp|quot);/ig, function(all, t) {
        return arrEntities[t];
    })
}
function G_Q_S(name) {
    var so_so, reg, r, r2;
    so_so = MY_E2H(window.location.search.substring(1)).replace(/\+/g, "%20");
    reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    r = decodeURIComponent(so_so).match(reg);
    r2 = (r[2]).split(/\?/)[0];
    if (r != null) return (r2);
    return null;
}
function FX_ZYS(lsrc) {
    myx = lsrc.match(/^([A-Z]+)@@@(.+)@@@(.+)@@@(.+)$/, "$1$2$3$4");
    myid = myx[1];
    mysrc = (myx[2]).replace('?', '%25253F').replace(/@/g, '%252540');
    mymz = myx[3];
    mypng = TH_PNG(myx[4]);
    $("#FX_ZY").attr('href', 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=http://fj365.ml/%3F' + myid + '%3D' + encodeURIComponent(mysrc) + '&title=' + encodeURIComponent(mymz) + '&desc=%E9%BE%92%E8%9C%97%E7%89%9BD%E6%BB%9A%E7%90%83%E5%BD%B1%E9%9F%B3&site=%E9%BE%92%E8%9C%97%E7%89%9BD&summary=%E9%BE%92%E8%9C%97%E7%89%9BD%E6%BB%9A%E7%90%83%E5%BD%B1%E9%9F%B3_Q%3A121027740%0A&pics=' + encodeURIComponent(mypng) + '&showcount=1');
}
$(document).ready(function() {
    var item,so_val,so_so,so_str,so_s1,so_s2;
    $('#MModal').modal('hide');
    so_so = (window.location.search.substring(1)).replace(/\+/g, "%20");
    if (so_so.indexOf('SO=') > -1) {
        QQYY(G_Q_S('SO'))
    } else if (so_so.match(/QQYY=/)) {
        QQYY(G_Q_S('QQYY'))
    } else if (so_so.match(/XMLYFM=/)) {
        XMLYFM(G_Q_S('XMLYFM'))
	} else if (so_so.match(/XMLYS=/)) {
        XMLYS(G_Q_S('XMLYS'))
	} else if (so_so.match(/ZDFS=/)) {
        XMLYS(G_Q_S('XMLYS'))
	} else if (so_so.match(/XMLYSO=/)) {
        ZDFS(G_Q_S('ZDFS'))
	} else if (so_so.match(/YKLFZB=/)) {
        YKLFZB(G_Q_S('YKLFZB'))
    } else if (so_so.match(/SGDJ=/)) {
        SGDJ(G_Q_S('SGDJ'))
	} else if (so_so.match(/YYHDJ=/)) {
		FX_ZYS('YYHDJ@@@'+G_Q_S('YYHDJ')+'@@@'+G_Q_S('YYHDJ')+'@@@APKPNG@6733512.png');
        YYHDJ(G_Q_S('YYHDJ'))
	} else if (so_so.match(/KUWOMV=/)) {
		FX_ZYS('KUWOMV@@@'+G_Q_S('KUWOMV')+'@@@'+G_Q_S('KUWOMV')+'@@@APKPNG@6684181.png');
        KUWOMVS(G_Q_S('KUWOMV'))
    } else if (so_so.match(/ZDZY=/)) {
        ZDZY(G_Q_S('ZDZY'))
	} else if (so_so.match(/ZYSO=/)) {
		if (G_Q_S('ZYSO').indexOf("--") > -1) {
			so_str = (/^(.+)--([0-9]+)$/g).exec(G_Q_S('ZYSO'));
			so_s1 = so_str[1];
			so_s2 = so_str[2];
			FX_ZYS('ZYSO@@@'+so_s1+'--'+so_s2+'@@@'+so_s1+'@@@APKPNG@6609198.png');
			ZYSOTXT(so_s1,so_s2)
		}else{
			FX_ZYS('ZYSO@@@'+G_Q_S('ZYSO')+'@@@'+G_Q_S('ZYSO')+'@@@APKPNG@6609198.png');
			ZYSOTXT(G_Q_S('ZYSO'),'1')
		}
    } else if (so_so.match(/YYSQ=/)) {
        YYSQ(G_Q_S('YYSQ'))
    } else if (so_so.match(/QQDJS=/)) {
        QQDJS(G_Q_S('QQDJS'))
    } else if (so_so.match(/WYYY=/)) {
		FX_ZYS('WYYY@@@'+G_Q_S('WYYY')+'@@@'+G_Q_S('WYYY')+'@@@APKPNG@5934938.png');
        WYYY(G_Q_S('WYYY'))
	} else if (so_so.match(/LRTS=/)) {
		FX_ZYS('LRTS@@@'+G_Q_S('LRTS')+'@@@'+G_Q_S('LRTS')+'@@@APKPNG@6843954.png');
        LRTS(G_Q_S('LRTS'))
    } else if (so_so.match(/KUGOU=/)) {
		FX_ZYS('KUGOU@@@'+G_Q_S('KUGOU')+'@@@'+G_Q_S('KUGOU')+'@@@APKPNG@6445467.png');
        KUGOU(G_Q_S('KUGOU'))
	} else if (so_so.match(/APK=/)) {
		FX_ZYS('APK@@@'+G_Q_S('APK')+'@@@'+G_Q_S('APK')+'@@@APKPNG@6445467.png');
        APKS(G_Q_S('APK'))
	} else if (so_so.match(/KANSP=/)) {
		FX_ZYS('KANSP@@@'+G_Q_S('KANSP')+'@@@'+G_Q_S('KANSP')+'@@@APKPNG@6729856.png');
        KANSP(G_Q_S('KANSP'))
	} else if (so_so.match(/KANDQ=/)) {
        KANDQ(G_Q_S('KANDQ'))
	} else if (so_so.match(/KUWO=/)) {
		FX_ZYS('KUWO@@@'+G_Q_S('KUWO')+'@@@'+G_Q_S('KUWO')+'@@@APKPNG@6684181.png');
        KUWOS(G_Q_S('KUWO'))
	} else if (so_so.match(/MIGU=/)) {
		FX_ZYS('MIGU@@@'+G_Q_S('MIGU')+'@@@'+G_Q_S('MIGU')+'@@@APKPNG@6732387.png');
        MIGUS(G_Q_S('MIGU'))
	} else if (so_so.match(/HUYATV=/)) {
        HUYATV(G_Q_S('HUYATV'))
	} else if (so_so.match(/VIPJX=/)) {
        VIPJX(G_Q_S('VIPJX'))
	} else if (so_so.match(/MAPNG=/)) {
        MAPNG(G_Q_S('MAPNG'))
	} else if (so_so.match(/PNGS=/)) {
        PNGS(G_Q_S('PNGS'))
	} else if (so_so.match(/YHDM=/)) {
        YHDM(G_Q_S('YHDM'))
    } else {
		//$(".DH_KG").show();
        //QQYY('http://fj365.gitee.io/cmp4/jsonp/@x@.json');
    }
    $("#selectTest").change(function() {
        item = $("#selectTest").val();
    });
    $("#button_sotxt").click(function() {
        so_val = $("#sotxt").val();
        switch (item) {
			case 'QQ_SO':
				FX_ZYS('QQYY@@@'+so_val+'@@@'+so_val+'@@@APKPNG@6383836.png');
                QQYY(so_val);
                break;
			case 'KG_SO':
				FX_ZYS('KUGOU@@@'+so_val+'@@@'+so_val+'@@@APKPNG@6445467.png');
                //KUGOU(so_val);
				if (so_val.indexOf("http") > -1) {
					QQYY(so_val);
				}else{
					KUGOU(so_val);
				}
                break;
			case 'APK_SO':
				FX_ZYS('APK@@@'+so_val+'@@@'+so_val+'@@@APKPNG@192906.png');
                APKS(so_val);
                break;
			case 'KANSP_SO':
				FX_ZYS('KANSP@@@'+so_val+'@@@'+so_val+'@@@APKPNG@6729856.png');
                KANSP(so_val);
                break;
			case 'MG_SO':
				FX_ZYS('MIGU@@@'+so_val+'@@@'+so_val+'@@@APKPNG@6732387.png');
                MIGUS(so_val);
                break;
			case 'KW_SO':
				FX_ZYS('KUWO@@@'+so_val+'@@@'+so_val+'@@@APKPNG@6684181.png');
                KUWOS(so_val);
                break;
			case 'KWMV_SO':
                FX_ZYS('KUWOMV@@@'+so_val+'@@@'+so_val+'@@@APKPNG@6684181.png');
                KUWOMVS(so_val);
                break;
            case 'WY_SO':
				FX_ZYS('WYYY@@@'+so_val+'@@@'+so_val+'@@@APKPNG@5934938.png');
                WYYY(so_val);
                break;
			case 'LR_SO':
				FX_ZYS('LRTS@@@'+so_val+'@@@'+so_val+'@@@APKPNG@6843954.png');
                LRTS(so_val);
                break;
            case 'SG_SO':
				FX_ZYS('SGDJ@@@'+so_val+'@@@'+so_val+'@@@APKPNG@6372775.png');
                SGDJ(so_val);
                break;
			case 'YYHDJ_SO':
				FX_ZYS('YYHDJ@@@'+so_val+'@@@'+so_val+'@@@APKPNG@6733512.png');
                YYHDJ(so_val);
                break;
            case 'ZD_SO':
				FX_ZYS('ZDZY@@@'+so_val+'@@@'+so_val+'@@@APKPNG@6609198.png');
                ZDZY(so_val);
                break;
			case 'ZYSOSO_TXT':
				FX_ZYS('ZYSO@@@'+so_val+'@@@'+so_val+'@@@APKPNG@6609198.png');
				if (so_val.indexOf("--") > -1) {
					so_str = (/^(.+)--([0-9]+)$/g).exec(so_val);
					so_s1 = so_str[1];
					so_s2 = so_str[2];
					ZYSOTXT(so_s1,so_s2);
				}else{
					ZYSOTXT(so_val,'1');
				}
                break;
            case 'XMLY_SO':
				FX_ZYS('XMLYSO@@@'+so_val+'@@@'+so_val+'@@@APKPNG@6389978.png');
                XMLYSO(so_val);
                break;
            case 'SGTP_SO':
                SGPNGS(so_val);
                break;
            case 'ERWMA':
				FX_ZYS('MAPNG@@@'+so_val+'@@@'+so_val+'@@@APKPNG@6609272.png');
                MAPNG(so_val);
                break;
            case 'VIPJX':
				FX_ZYS('VIPJX@@@'+so_val+'@@@'+so_val+'@@@APKPNG@6298559.png');
                VIPJX(so_val);
                break;
            default:
				if (so_val.indexOf("http") > -1) {
					QQYY(so_val);
				}else{
					FX_ZYS('KUGOU@@@'+so_val+'@@@'+so_val+'@@@APKPNG@6445467.png');
					KUGOU(so_val);
				}
				
        }
    })
});
$(document).ready(function() {
    WNJP = new jPlayerPlaylist({
        jPlayer: "#jquery_jplayer_1",
        cssSelectorAncestor: "#jp_container_1"
    }, [], {
        ready: function(event) {
		/*
            $("#jquery_jplayer_1").dblclick(function() {
                if ($(".jp-video-full").length > 0) {
                    $(".jp-restore-screen").click()
                } else {
                    $(".jp-full-screen").click()
                }
            })
			*/
        },
        playlistOptions: {
            autoPlay: true,
            playHead: '0',
            playHeadTime: '0',
            loopOnPrevious: false,
            shuffleOnLoop: false,
            enableRemoveControls: false,
            displayTime: '0',
            addTime: '0',
            removeTime: '0',
            shuffleTime: '0'
        },
		solution: 'html',
        supplied: "mp3,m4v,m4a,webma,webmv,ogg,oga,ogv,wav,aac,fla,flv,rtmpa,rtmpv,m3u,m3ua,m3uv",
        wmode: "window",
		errorAlerts: true,
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        size: {
            width: "100%",
            height: "1px",
            cssClass: "jp-video-360p"
        },
        keyEnabled: true,
        audioFullScreen: false,
        playHead: '0',
        playHeadTime: '0',
        preload: "auto",
        timeupdate: function(event) {
            if (event.jPlayer.status.currentTime > 0) {
                time = event.jPlayer.status.currentTime
            }
        },
        play: function(event) {
			//console.log(event.jPlayer.status);
            document.title = event.jPlayer.status.media.title;
            if (event.jPlayer.status.formatType === "m4v") {
				document.getElementById("jp_video_0").controls = true;
                $("#jquery_jplayer_1").css("height", JP_HG() + "px");
                $("#jp_video_0").css({"height": "100%","margin-top": "0px"});
                $("#BBZY").css({"margin-bottom": "" + (parseInt(JP_HG()) + 65) + "px"})
            }else if (event.jPlayer.status.formatType === "mp3" || event.jPlayer.status.formatType === "m4a") {
                $("#jquery_jplayer_1").css("height", "1px");
                $("#BBZY").css({"margin-bottom": "65px"})
            }
            if(typeof(event.jPlayer.status.media.poster) === 'undefined'){mypng = 'http://static.yingyonghui.com/icon/128/6375279.png';}else{mypng = (event.jPlayer.status.media.poster);}
        },
        pause: function(event) {
            $("#jquery_jplayer_1").css("height", "1px");
            $("#jp_video_0").css("margin-top", "65px");
            $("#BBZY").css({"margin-bottom": "65px"})
        },
        stop: function(event) {
            $("#jquery_jplayer_1").css("height", "1px");
            $("#jp_video_0").css("margin-top", "65px");
            $("#BBZY").css({"margin-bottom": "65px"})
        },
        error: function(event) {
            $("#jquery_jplayer_1").css("height", "1px");
            $("#jp_video_0").css("margin-top", "65px");
            $("#BBZY").css({"margin-bottom": "65px"})
        },
        ended: function(event) {
            $("#jquery_jplayer_1").css("height", "1px");
            $("#jp_video_0").css("margin-top", "65px");
            $("#BBZY").css({"margin-bottom": "65px"})
        }
    });
    $(document.documentElement).keydown(function(event) {
        if (event.which === 32) {
		/*
            if ($(".jp-jplayer").data("jPlayer").status.paused) {
                $(".jp-jplayer").jPlayer("play");
            } else {
                $(".jp-jplayer").jPlayer("pause");
            }
            event.preventDefault();
			*/
        }
        if (event.which === 27) {
		/*
            $(".jp-video-full .jp-restore-screen").click();
            event.preventDefault();
			*/
        }
        if (event.which === 13) {
            $("#button_sotxt").click();
        }
    })
});
function AJAX(lsrc) {
	$.ajax({
        cache: true,
        async: true,
        url: lsrc,
        type: "GET",
        dataType: "jsonp",
        jsonpCallback: "success_jsonpCallback",
        contentType: "application/jsonp; charset=utf-8",
        timeout: 15000,
        success: function(data) {
			/*
			var state = { 'pageurl':'http://s.wo0.cn/?QQYY='+lsrc,'pagetitle':document.title,'jsonurl':lsrc,};
			if(lsrc){
				//console.log("push state of "+state);
				history.pushState(state, document.title, 'http://s.wo0.cn/?QQYY='+lsrc);
			}
			*/
			if(lsrc.match(/@([0-9a-zA-Z_-]+)@/)){
				QQYYS_success_jsonpCallback(data, lsrc);
                $(".GS_KG").show();
				$(".DH_KG").hide();
				$(".JP_KG").hide();
                $('html,body').animate({
                    scrollTop: '0px'
                }, 200);
				$("#UUUU_P").remove();
                $("img.lazy").lazyload({
					placeholder_data_img : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC',
					placeholder : "http://webmap3.map.bdimg.com/yyfm/lazyload/0.0.1/img/placeholder.png",
                    effect: "fadeIn",
                    threshold: 200,
                    //event: 'click',
                    container: $("#BBZY"),
					skip_invisible : false,
					no_fake_img_loader:true,
                    failurelimit: 10
                })
            }else{
                QQYY_success_jsonpCallback(data, lsrc);
                $(".JP_KG").show();
				$(".DH_KG").hide();
				$(".GS_KG").hide();
                $('html,body').animate({
                    scrollTop: '0px'
                }, 200)
				if (lsrc.indexOf('KAN360_') > -1){
					$("#UUUU_P").remove();
				}
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {}
    })
}
/*
function HLS_ADD(data){
	var hlsvideo = document.getElementById('jp_video_0');var hls = new Hls();var src = data;
	if(Hls.isSupported()) {
		hls.loadSource(src);
		hls.attachMedia(hlsvideo);
		hls.on(Hls.Events.MANIFEST_PARSED,function(){hlsvideo.play();});
	}
}
*/
function JP_ADD(data){
	var myadd,myadds,myaddlb;
	myadd = data.match(/([a-z0-9]+),(.+),(.+)/, "$1$2$3");
	myadds = '{title:"'+myadd[2]+'",'+myadd[1]+':"'+myadd[3]+'"}';
	eval("myadds_add=" + myadds);
	WNJP.add(myadds_add,true);
	//WNJP.play(-1);
	/*
	L_B = '<div class="list-group-item" style="background-color: rgba(185, 185, 185, 0.5);"><span class="badge"><a href="' + myadd[3] + '" download="wn.' + myadd[1] + '"><span class="glyphicon glyphicon-download-alt" aria-hidden="true"></span></a></span><span class="glyphicon glyphicon-headphones" aria-hidden="true"></span>&nbsp;<a href="javascript:WNJP.play(0);">' + myadd[2] + '</a></div>';
	$("#JP_HL").append(L_B);
	*/
}
function QQYY(lsrc) {
    if (lsrc.indexOf("http") > -1) {
		url_s = decodeURIComponent(lsrc);
		if (url_s.indexOf(".apk") > -1 || url_s.indexOf(".html") > -1  || url_s.indexOf("https://vod.bunediy.com/share/") > -1) {
			window.open(url_s,'_blank');
		}else{
			AJAX(url_s);
		}
    } else {
        //url_s = 'http://fj365.ga/o.php/QQZY_' + decodeURIComponent(lsrc)+'.jsonp?&p=1';//http://s.wo0.cn/php/qqyy.php?type=jsonp&so=
		//AJAX(url_s); 
		KUGOU(decodeURIComponent(lsrc));
    }
}

function QQYY_success_jsonpCallback(data, fy) {
    var myhz,QQYY_src_pp,QQYY_src;
    jp_lb = '[';
    $.each(data, function(k, v) {
		if((v.src).indexOf("###") > -1){QQYY_src_pp = (v.src).split('###');QQYY_src = QQYY_src_pp[0];}else{QQYY_src = v.src;}
        jp_lb += '{' + v.type + ':"' + QQYY_src + '",title:"' + v.label + '"},'
    });
    jp_lb += ']';
    eval("qqyy_lb=" + jp_lb);
    WNJP.setPlaylist(qqyy_lb);
    WNJP.play(0);
	//
    if(fy.indexOf("http") > -1) {
        L_B = '<table class="table table-hover"><thead><tr><th>名称</th><th style="width: 50px;text-align: right;">操作</th></tr></thead><tbody>';
        $.each(data, function(k, v) {
            if((v.type).indexOf("m4v") > -1){myhz = '.mp4';}else{myhz = '.mp3';}
			if((v.src).indexOf(".html") > -1 || (v.src).indexOf("www.fun.tv") > -1 || (v.src).indexOf(".shtml") > -1 || (v.src).indexOf("bilibili.com/bangumi/play/") > -1 || (v.src).indexOf("bangumi.bilibili.com/anime/") > -1 || (v.src).indexOf("cntv.cn/video/") > -1){
				L_B += '<tr><td><p class="txt"><a href="#MModal" onclick="javascript:VIPJX(\'' + v.src + '\');"><span class="glyphicon glyphicon-headphones" aria-hidden="true"></span>&nbsp;' + v.label + '</a></p></td><td><a href="#MModal" onclick="javascript:VIPJX(\'' + v.src + '\');"style="float: right;"><span class="glyphicon glyphicon-option-horizontal" aria-hidden="true"></span></a></td></tr>';
            }else{
				if ((v.src).indexOf("###") > -1){var myddz = '<a href="javascript:DDZ_XZ(\'' + v.src + '\');"style="float: right;"><span class="glyphicon glyphicon-option-horizontal" aria-hidden="true"></span></a>';}else{myddz='<a href="' + v.src + '"download="' + v.label + myhz + '"style="float: right;"><span class="glyphicon glyphicon-download-alt" aria-hidden="true"></span></a>';}
				L_B += '<tr><td><p class="txt"><a href="javascript:WNJP.play(' + k + ');"><span class="glyphicon glyphicon-headphones" aria-hidden="true"></span>&nbsp;' + v.label + '</a></p></td><td><p class="tds">' + myddz + '</p></td></tr>';
            }
        });
        L_B += '</tbody></table>';
        if (fy.indexOf("&p=") > -1) {
            myx = fy.match(/(.+)&p=([0-9]+)/, "$1$2");mys = myx[1];pn = myx[2];
            if((parseInt(pn) - 5) <= 0){pns = 1;}else{pns = (parseInt(pn) - 5);}
            L_P = '</div><div class="text-center"><div class="pagination" id="UUUU_P" style="margin:3px 0 12px 0;"><ul class="pagination" style="margin:0 0 80px;"><li><a href="javascript:QQYY(\'' + mys + '&p=' + pns + '\');"><span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span></a></li>';
			if(parseInt(data.length) > 15){
				for (var j = parseInt(pn) + 1; j < parseInt(pn) + 5; j++) {
					L_P += '<li><a href="javascript:QQYY(\'' + mys + '&p=' + j + '\');">' + j + '</a></li>';
				}
				L_P += '<li><a href="javascript:QQYY(\'' + mys + '&p=' + (parseInt(pn) + 5) + '\');"><span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span></a></li><li><a class="back-to-top" href="#top"><span class="glyphicon glyphicon-chevron-up" aria-hidden="true"></span></a></li></ul></div>';
			}
        }
    }
	if(typeof(fy) == "undefined" || fy.indexOf("w.wo0.cn/jp/jsonp/") > -1 || fy.indexOf("fj365.ml/jsonp/") > -1 || fy.indexOf("KAN360_") > -1){
        L_P = '';
    }
    $("#JP_HL").html(L_B + L_P);
}

function QQYYS_success_jsonpCallback(data, fy) {
	var ZJS,ZJP,ZJ_png,ZJ_type;
	L_B = '<div class="bs-glyphicons"><ul class="bs-glyphicons-list">';
    $.each(data, function(k, v) {
        ZJ_type = fy.match(/@([0-9a-zA-Z_]+)@/,"$1")[1];ZJ_png = TH_PNG(v.PNG);
		if ((v.HTML).indexOf("@@@") > -1){
            ZJS = (/(.+)@@@(.+)@@@(.+)/g).exec(v.HTML);
			L_B += '<li><a href="javascript:' + ZJS[1] + '(\'' + ZJS[2] + '\');" onclick="javascript:FX_ZYS(\'' + v.HTML + '@@@' + ZJ_png + '\');"><img class="lazy" data-original="' + ZJ_png + '" width="50" height="58" class="r r-2x img-full"></a><span class="glyphicon-class"><a href="javascript:' + ZJS[1] + '(\'' + ZJS[2] + '\')" class="text-ellipsis" title="' + ZJS[3] + '">' + ZJS[3] + '</a></span></li>';
        }else{
            L_B += '<li><a href="javascript:' + ZJ_type + '(\'' + v.HTML + '\');" onclick="javascript:FX_ZYS(\'' + v.HTML + '@@@' + ZJ_png + '\');"><img class="lazy" data-original="' + ZJ_png + '" width="50" height="58" class="r r-2x img-full"></a><span class="glyphicon-class"><a href="javascript:' + ZJ_type + '(\'' + v.HTML + '\');" class="text-ellipsis" title="' + v.HTML + '">' + v.HTML + '</a></span></li>';
        }
    });
    L_B += '</ul></div>';
    if (fy.indexOf("&pg=") > -1) {
        ZJP = fy.match(/(.+)&pg=([0-9]+)/, "$1$2");mys = myx[1];pn = parseInt(ZJP[2]);
        if((parseInt(ZJP[2]) - 5) <= 0){pns = 1;}else{pns = (parseInt(ZJP[2]) - 5);}
		L_P = '</div><div class="text-center" style="margin: 0 1px 100px 1px;"><div class="PAGE"><ul class="pagination" id="UUUU_PG"><li><a href="javascript:QQYY(\'' + ZJP[1] + '&pg=' + pns + '&@all@\');"><span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span></a></li>';
		if(parseInt(data.length) > 15){
			for (var j = parseInt(ZJP[2]) + 1; j < parseInt(ZJP[2]) + 5; j++){
				L_P += '<li><a href="javascript:QQYY(\'' + ZJP[1] + '&pg=' + j + '&@all@\');">' + j + '</a></li>';
			}
			L_P += '<li><a href="javascript:QQYY(\'' + ZJP[1] + '&pg=' + (parseInt(ZJP[2]) + 5) + '&@all@\');"><span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span></a></li><li><a class="back-to-top" href="#top"><span class="glyphicon glyphicon-chevron-up" aria-hidden="true"></span></a></li></ul></div>';
		}
    }else{
		L_B += '<div class="text-center" style="margin: 0 1px 100px 1px;"></div>';
	}
    if(typeof(fy) == "undefined" || fy.indexOf("w.wo0.cn/jp/jsonp/") > -1 || fy.indexOf("fj365.ml/jsonp/") > -1 || fy.indexOf(".txt") > -1 || fy.indexOf("@KANSP@") > -1){L_P = '';}
    $('#GS_HL').html(L_B + L_P);
}
function init(){
	var xq_1,xq_2,xq_3,xq_4,xq_5,xq_6,xq_7,xq_8,xq_88,xq_888,J_00,J_01,J_02,J_03,xj_j,xq_j,tj_j,dh_j,dh_xj,lb_lbs,xq_666,Ds_xq=[1,2,3,4,5,6,0],Dt_xq=['一','二','三','四','五','六','日'],xingqiarr=[1,2,3,4,5,6,0,888],week = new Date().getDay();lb_fy = '';L_B = '';
/*
xj_j = [];
xq_j = [{'ZYSO_眷思量-1-S006.txt?@00@':'眷思量&_&APKPNG@6375279.png','ZYSO_30763-10-LL.jsonp':'眷思量_快云&_&APKPNG@6375279.png','ZYSO_78634-11-LL.jsonp':'眷思量_度云&_&APKPNG@6375279.png','ZYSO_20517-10-LL.jsonp':'无上神帝_快云&_&APKPNG@6375279.png','ZYSO_40989-11-LL.jsonp':'无上神帝_度云&_&APKPNG@6375279.png','ZYSO_22057-10-LL.jsonp':'万界仙踪_快云&_&APKPNG@6375279.png','ZYSO_13019-12-LL.jsonp':'万界仙踪_度云&_&APKPNG@6375279.png'},{'ZYSO_20537-10-LL.jsonp':'武神主宰_快云&_&APKPNG@6375279.png','ZYSO_41200-11-LL.jsonp':'武神主宰_度云&_&APKPNG@6375279.png','ZYSO_29272-10-LL.jsonp':'万界独尊_快云&_&APKPNG@6375279.png','ZYSO_72446-11-LL.jsonp':'万界独尊_度云&_&APKPNG@6375279.png','ZYSO_15466-11-LL.jsonp':'异世界中药铺_度云&_&APKPNG@6375279.png'},{'ZYSO_画江湖-1-S006.txt?@00@':'画江湖&_&APKPNG@6375279.png','ZYSO_21341-10-LL.jsonp':'一念永恒_快云&_&APKPNG@6375279.png','ZYSO_42851-11-LL.jsonp':'一念永恒_度云&_&APKPNG@6375279.png','ZYSO_23442-10-LL.jsonp':'绝世武魂_快云&_&APKPNG@6375279.png','ZYSO_51228-11-LL.jsonp':'绝世武魂_度云&_&APKPNG@6375279.png','ZYSO_30024-10-LL.jsonp':'画江湖之换世门生2_快云&_&APKPNG@6375279.png','ZYSO_76139-11-LL.jsonp':'画江湖之换世门生2_度云&_&APKPNG@6375279.png','ZYSO_20548-10-LL.jsonp':'首席御灵师_快云&_&APKPNG@6375279.png','ZYSO_41167-11-LL.jsonp':'首席御灵师_度云&_&APKPNG@6375279.png','ZYSO_11653-10-LL.jsonp':'西行纪_快云&_&APKPNG@6375279.png','ZYSO_78600-11-LL.jsonp':'西行纪_度云&_&APKPNG@6375279.png','ZYSO_64038-11-LL.jsonp':'星骸骑士_度云&_&APKPNG@6375279.png'},{'ZYSO_20499-10-LL.jsonp':'独步逍遥_快云&_&APKPNG@6375279.png','ZYSO_41171-11-LL.jsonp':'独步逍遥_度云&_&APKPNG@6375279.png','ZYSO_27342-10-LL.jsonp':'唯我独神_快云&_&APKPNG@6375279.png','ZYSO_27342-11-LL.jsonp':'唯我独神_度云&_&APKPNG@6375279.png','ZYSO_27148-10-LL.jsonp':'流星幻剑_快云&_&APKPNG@6375279.png','ZYSO_65864-11-LL.jsonp':'流星幻剑_度云&_&APKPNG@6375279.png','ZYSO_30297-10-LL.jsonp':'狂神魔尊_快云&_&APKPNG@6375279.png','ZYSO_78007-11-LL.jsonp':'狂神魔尊_度云&_&APKPNG@6375279.png','ZYSO_29684-10-LL.jsonp':'画江湖之不良人4季_快云&_&APKPNG@6375279.png','ZYSO_74032-11-LL.jsonp':'画江湖之不良人4季_度云&_&APKPNG@6375279.png'},{'ZYSO_完美世界-1-S006.txt?@00@':'完美世界&_&APKPNG@6375279.png','ZYSO_26340-10-LL.jsonp':'转生成蜘蛛又怎样_快云&_&APKPNG@6375279.png','ZYSO_64589-11-LL.jsonp':'转生成蜘蛛又怎样_度云&_&APKPNG@6375279.png','ZYSO_29487-10-LL.jsonp':'完美世界_快云&_&APKPNG@6375279.png','ZYSO_73489-11-LL.jsonp':'完美世界_度云&_&APKPNG@6375279.png','ZYSO_12016-10-LL.jsonp':'灵剑尊_快云&_&APKPNG@6375279.png','ZYSO_46461-11-LL.jsonp':'灵剑尊_度云&_&APKPNG@6375279.png','ZYSO_11729-10-LL.jsonp':'因为太怕痛就全点防御力了_快云&_&APKPNG@6375279.png','ZYSO_46603-11-LL.jsonp':'因为太怕痛就全点防御力了_度云&_&APKPNG@6375279.png',},{'ZYSO_斗罗大陆-1-S006.txt?@00@':'斗罗大陆&_&APKPNG@6375279.png','ZYSO_20498-10-LL.jsonp':'斗罗大陆第一季_快云&_&APKPNG@6375279.png','ZYSO_41343-11-LL.jsonp':'斗罗大陆第一季_度云&_&APKPNG@6375279.png','ZYSO_44235-11-LL.jsonp':'万界神主_度云&_&APKPNG@6375279.png','ZYSO_45528-11-LL.jsonp':'少年歌行_度云&_&APKPNG@6375279.png','ZYSO_51868-11-LL.jsonp':'无限系统树_度云&_&APKPNG@6375279.png','ZYSO_16558-10-LL.jsonp':'新世纪福音战士_快云&_&APKPNG@6375279.png','ZYSO_15720-11-LL.jsonp':'新世纪福音战士_度云&_&APKPNG@6375279.png','ZYSO_43123-11-LL.jsonp':'游戏人生_度云&_&APKPNG@6375279.png','ZYSO_12207-10-LL.jsonp':'加速世界_快云&_&APKPNG@6375279.png'},{'ZYSO_斗破苍穹-1-S006.txt?@00@':'斗破苍穹&_&APKPNG@6375279.png','ZYSO_海贼王-1-S006.txt?@00@':'海贼王&_&APKPNG@6375279.png','ZYSO_28657-10-LL.jsonp':'斗破苍穹第四季_快云&_&APKPNG@6375279.png','ZYSO_70683-11-LL.jsonp':'斗破苍穹第四季_度云&_&APKPNG@6375279.png','ZYSO_20893-10-LL.jsonp':'海贼王_快云&_&APKPNG@6375279.png','ZYSO_15741-11-LL.jsonp':'海贼王_度云&_&APKPNG@6375279.png','ZYSO_29765-10-LL.jsonp':'天宝伏妖录_快云&_&APKPNG@6375279.png','ZYSO_79789-11-LL.jsonp':'天宝伏妖录_度云&_&APKPNG@6375279.png','ZYSO_20883-10-LL.jsonp':'凡人修仙传_快云&_&APKPNG@6375279.png','ZYSO_41492-11-LL.jsonp':'凡人修仙传_度云&_&APKPNG@6375279.png','ZYSO_21073-10-LL.jsonp':'灵笼_快云&_&APKPNG@6375279.png','ZYSO_41602-11-LL.jsonp':'灵笼_度云&_&APKPNG@6375279.png','ZYSO_11737-10-LL.jsonp':'时钟机关之星_快云&_&APKPNG@6375279.png','ZYSO_51149-11-LL.jsonp':'DARLING in the FRANXX_度云&_&APKPNG@6375279.png','ZYSO_16038-10-LL.jsonp':'人形电脑天使心_快云&_&APKPNG@6375279.png','ZYSO_51564-11-LL.jsonp':'人形电脑天使心_度云&_&APKPNG@6375279.png'}];
*/
//,'https://qxkkk.cn/':'七星影视二&_&APKPNG@6375279.png','http://qx.iguanwang.cn/':'七星2&_&APKPNG@6375279.png','https://007ys1.com/':'小小影视&_&APKPNG@6375279.png','http://xijing.tv/movie/':'戏精&_&APKPNG@6375279.png'
dh_j = [{'http://qx.jsij.cn/xjj/ks.php':'抖音网页版&_&APK@6877481.png','@#QQYY##WWNJ@tv_cctv.jsonp#@':'CCTV&_&APK@5079046.png','@#QQYY##WWNJ@tv_ws.jsonp#@':'卫视&_&APK@5079046.png','@#QQYY##WWNJ@tv_fj.jsonp#@':'福建&_&APK@5079046.png','@#QQYY##WWNJ@tv_gat.jsonp#@':'港澳台&_&APK@5079046.png','@#QQYY##FWNJ@huya.json#@':'虎牙&_&APK@5079046.png','http://www.yhdm2.com/':'樱花动漫&_&APKPNG@6845388.png','http://www.yhdm02.com/':'樱花动漫02&_&APKPNG@6845388.png','http://qx.jsij.cn/':'七星影视&_&APKPNG@6375279.png','http://dilidili1.com/':'嘀哩嘀哩&_&APKPNG@6375279.png','http://halihali2.com/':'哈里哈里&_&APKPNG@6375279.png','https://enlienli.com/':'嗯里嗯里&_&APKPNG@6375279.png','https://www.cupfox.com/':'茶杯狐&_&APKPNG@6375279.png','https://www.9ehao.com/':'9亿看看&_&APKPNG@6375279.png','https://www.subaibai.com/':'素白白&_&APKPNG@6375279.png','https://www.bttwo.com/':'2个BT&_&APKPNG@6375279.png','http://cokemv.cn/':'可乐影院&_&APKPNG@6375279.png','http://dianying.im/':'电影先生&_&APKPNG@6375279.png','https://www.pianku.li/':'片库&_&APKPNG@6375279.png','http://www.czspp.com/':'厂长资源&_&APKPNG@6375279.png','https://bwl87.com/':'阿房影视&_&APKPNG@6375279.png','http://api.52sjmz.cn/mov/':'进少影视&_&APKPNG@6375279.png','http://waipian5.com/':'歪片星球&_&APKPNG@6375279.png','https://www.novipnoad.com/':'NO-VAD&_&APKPNG@6375279.png','https://tv.ci/':'大师兄&_&APKPNG@6375279.png','http://pilipali.cc/':'噼里啪喱&_&APKPNG@6375279.png','https://www.dikotv.com/':'顶空影视&_&APKPNG@6375279.png','https://www.wxtv.net/':'无限影视&_&APKPNG@6375279.png','https://www.jpysvip.net/':'极品影视&_&APKPNG@6375279.png','https://tvshan.com/':'电视山&_&APKPNG@6375279.png','https://555dy.fun/':'555&_&APKPNG@6375279.png','https://www.newqiy.com/':'新奇遇&_&APKPNG@6375279.png','https://www.pianba.net/':'片吧&_&APKPNG@6375279.png','https://www.dandanzan.cc/':'蛋蛋赞&_&APKPNG@6375279.png','http://www.aaqqs.com/':'手机网&_&APKPNG@6375279.png','https://www.tg3.net/':'万影网&_&APKPNG@6375279.png','https://m.tlyyy.cc/':'天狼网&_&APKPNG@6375279.png','https://dadatu.tv/':'达达兔&_&APKPNG@6375279.png','https://www.ckget.com/':'CK电影网&_&APKPNG@6375279.png','https://www.nunuyy.cc/':'努努影视&_&APKPNG@6375279.png','http://www.dmdm2020.com/':'哆咪动漫&_&APKPNG@6375279.png','https://www.libvio.com/':'libvio&_&APKPNG@6375279.png','https://www.wuguiyy.com/':'乌龟影视&_&APKPNG@6375279.png','https://yanetflix.com/':'奈飞影视&_&APKPNG@6375279.png','https://www.zxzj.me/':'在线之家&_&APKPNG@6375279.png','https://ddrk.me/':'低端影视&_&APKPNG@6375279.png','https://www.ai66.cc/':'6V影视&_&APKPNG@6375279.png','https://www.tv5box.com/':'电影盒子&_&APKPNG@6375279.png','https://www.wanmeikk.me/':'完美看看&_&APKPNG@6375279.png','https://www.kankanwu.com/':'看看屋&_&APKPNG@6375279.png','https://m.tonghuacun.com/':'童话村&_&APKPNG@6375279.png','https://www.tonghuacun.vip/':'童话村2&_&APKPNG@6375279.png','https://duboku.su/':'独播库&_&APKPNG@6375279.png','https://aidi.tv/':'爱迪影视&_&APKPNG@6375279.png','https://www.jpysvip.net/':'极品影视&_&APKPNG@6375279.png','https://www.recer.cn/':'rr影视&_&APKPNG@6375279.png','http://www.doubiekan.net/':'逗别看&_&APKPNG@6375279.png','https://123kubo.tv/':'123KU&_&APKPNG@6375279.png','https://v.kyikan.com/':'看一看影视&_&APKPNG@6375279.png','https://www.haimianys.com/':'海绵影视&_&APKPNG@6375279.png','https://www.88kan.com/':'88影视&_&APKPNG@6375279.png','http://downtv.gdwar.cn/':'magedn&_&APKPNG@6375279.png','https://www.appmovie.net/':'APP影院&_&APKPNG@6375279.png','https://www.zqm.me/':'朱雀门&_&APKPNG@6375279.png','https://www.ketv.cc/':'可视影院&_&APKPNG@6375279.png','http://www.tv552.com/':'迪迪影院&_&APKPNG@6375279.png','https://www.woobm.cn/':'白熊影院&_&APKPNG@6375279.png','https://www.baiyeys.com/':'白夜影院&_&APKPNG@6375279.png','https://www.97soo.cc/':'97影院&_&APKPNG@6375279.png','https://www.shancaowu.com/':'山草屋影院&_&APKPNG@6375279.png','https://v.youte.ml/vodtype/1.html':'一只鱼&_&APKPNG@6375279.png'},{'@#QQYY##WWNJ@@QQYY@2.json#@':'华语女歌手&_&APKPNG@6858484.png','@#QQYY##WWNJ@@QQYY@1.json#@':'华语男歌手&_&APKPNG@6858484.png','@#QQYY##WWNJ@@QQYY@3.json#@':'华语组合&_&APKPNG@6858484.png','@#QQYY##WWNJ@@QQYY@4.json#@':'韩国男歌手&_&APKPNG@6858484.png','@#QQYY##WWNJ@@QQYY@5.json#@':'韩国女歌手&_&APKPNG@6858484.png','@#QQYY##WWNJ@@QQYY@6.json#@':'韩国组合&_&APKPNG@6858484.png','@#QQYY##WWNJ@@QQYY@7.json#@':'日本男歌手&_&APKPNG@6858484.png','@#QQYY##WWNJ@@QQYY@8.json#@':'日本女歌手&_&APKPNG@6858484.png','@#QQYY##WWNJ@@QQYY@9.json#@':'日本组合&_&APKPNG@6858484.png','@#QQYY##WWNJ@@QQYY@10.json#@':'欧美男歌手&_&APKPNG@6858484.png','@#QQYY##WWNJ@@QQYY@11.json#@':'欧美女歌手&_&APKPNG@6858484.png','@#QQYY##WWNJ@@QQYY@12.json#@':'欧美组合&_&APKPNG@6858484.png','@#KUGOU##雷婷#@':'雷婷&_&GS@S/Q/001lvqww1XYOSQ.jpg','@#KUGOU##孙露#@':'孙露&_&GS@K/W/004dXznj3zlHKW.jpg','@#KUGOU##谭艳#@':'谭艳&_&GS@s/U/004VNvor4QqNsU.jpg','@#KUGOU##张玮伽#@':'张玮伽&_&GS@2/i/0034Ua3C3J4f2i.jpg','@#KUGOU##邓紫棋#@':'邓紫棋&_&GS@F/N/001fNHEf1SFEFN.jpg','@#KUGOU##庄心妍#@':'庄心妍&_&GS@M/O/003Cn3Yh16q1MO.jpg','@#KUGOU##冯曦妤#@':'冯曦妤&_&GS@D/K/001krjnH2OVWDK.jpg','@#KUGOU##冯提莫#@':'冯提莫&_&GS@T/V/001yMNFV23daTV.jpg','@#KUGOU##樊桐舟#@':'樊桐舟&_&https://y.gtimg.cn/music/photo_new/T002R300x300M0000038KL7x2khdIi.jpg','@#KUGOU##施艾敏#@':'施艾敏&_&https://y.gtimg.cn/music/photo_new/T001R300x300M000002Sz1iV3nGDD7.jpg','@#KUGOU##刘芳#@':'刘芳&_&https://y.gtimg.cn/music/photo_new/T001R300x300M000000ugTEO0bKTVi.jpg','@#KUGOU##馨予#@':'馨予&_&https://y.gtimg.cn/music/photo_new/T001R300x300M000003Jihgs46WMSH.jpg','@#XMLYFM##12627033#@':'一禅心灵庙语&_&APKPNG@6389978.png','@#XMLYSO##NJ#@':'NJ主播&_&APKPNG@6389978.png','@#XMLYSO##轻音乐#@':'轻音乐&_&APKPNG@6389978.png','@#QQYY##FWNJ@qcc.json#@':'QCC&_&APK@5399653.png','https://tonzhon.com/hot':'铜钟音乐&_&APKPNG@6583623.png','http://tool.liumingye.cn/music/?page=searchPage':'MYFreeMP3&_&APKPNG@6583623.png','http://music.jsososo.com/':'一起听音乐呀&_&APKPNG@6583623.png','http://47.112.23.238/':'天天静听&_&APKPNG@6583623.png','http://music.y444.cn/':'下载吧&_&APKPNG@6583623.png','http://music.moresound.ml/':'魔声&_&APKPNG@6583623.png','https://music.qier222.com/':'YesPlayMusic&_&APKPNG@6583623.png','https://listen1.github.io/listen1/':'listen1音乐&_&APKPNG@6583623.png','https://www.yin2s.com/':'音兔&_&APKPNG@6583623.png','https://music.postgraduate.top/':'MK音乐01&_&APKPNG@6583623.png','https://netease-music.fe-mm.com/#/music/toplist':'MK音乐02&_&APKPNG@6583623.png','http://music.runker.net/':'MK音乐03&_&APKPNG@6583623.png','https://music.youte.ml/':'MK音乐04&_&APKPNG@6583623.png','https://music.xiner.store/':'MK音乐05&_&APKPNG@6583623.png','https://www.asmrin.com/':'耳音&_&APKPNG@6583623.png','https://tide.fm/sounds':'潮汐&_&APKPNG@6583623.png','https://www.hifige.com/singer':'HIFI阁&_&APKPNG@6583623.png','http://m.ik123.com/':'深港DJ&_&APKPNG@6583623.png'},{'http://www.dooccn.com/php/':'在线编程&_&APKPNG@5047287.png','https://c.runoob.com/':'在线编程二&_&APKPNG@6575304.png','https://c.p2hp.com/':'在线编程三&_&APKPNG@6575304.png','https://tool.lu/':'在线工具&_&APKPNG@6575304.png','http://tool.mkblog.cn/':'在线工具二&_&APKPNG@6575304.png','http://tool.liumingye.cn/':'在线工具三&_&APKPNG@6575304.png','https://www.dute.org/':'在线工具四&_&APKPNG@6575304.png','http://www.ofmonkey.com/':'在线工具五&_&APKPNG@6575304.png','http://tools.bugscaner.com/':'在线工具六&_&APKPNG@6575304.png','https://tool.oschina.net/':'在线工具七&_&APKPNG@6575304.png','http://tool.eolinker.com/':'在线工具八&_&APKPNG@6575304.png','https://tool.lusongsong.com/':'在线工具九&_&APKPNG@6575304.png','https://htaccess.iapolo.com/':'htaccess&_&APKPNG@6575304.png','https://dns.iui.im/':'公共DNS&_&APKPNG@4145539.png','http://8090fc.cn/':'FC游戏&_&APKPNG@6575304.png','https://ixuanmo.com/s/ppt/%E5%85%8D%E8%B4%B9':'PPT&_&APKPNG@6850934.png','http://www.uugai.com/':'U钙网&_&APKPNG@6603205.png','https://www.logomaker.com.cn/':'标智网&_&APKPNG@6603205.png','http://www.diugai.com/':'丢盖网&_&APKPNG@6603205.png','https://greasyfork.org/zh-CN':'油猴浏览器插件&_&APKPNG@425130.png','https://chrome.zzzmh.cn/index#ext':'油猴插件02&_&APKPNG@425130.png','https://www.extfans.com/tampermonkey/':'油猴插件03&_&APKPNG@425130.png','https://www.xbext.com/docs/bookmark/the-most-popular-ad-blocking-rules/index.html':'X广告规则&_&APKPNG@6360837.png','https://www.banzhuti.com/2021-cdn-open-source-project-library.html':'CDN&_&APKPNG@6656491.png','https://www.qianqi.net/jscdn/':'CDN-2&_&APKPNG@6656491.png','https://msdn.itellyou.cn/':'系统下载&_&APKPNG@1217044.png'},{'https://www.ypojie.com/app':'亿破姐&_&APKPNG@192906.png','https://www.iapps.me/archives/category/app':'翻应用&_&APKPNG@192906.png','https://www.423down.com/apk':'423应用&_&APKPNG@192906.png','https://www.ghpym.com/category/all/android':'果核剥壳&_&APKPNG@192906.png','https://m.shouji.com.cn/soft_category.html':'手机之家&_&APKPNG@192906.png','https://www.mpyit.com/category/android':'殁漂遥&_&APKPNG@192906.png','https://www.sharerw.com/':'分享者TV&_&APKPNG@192906.png','https://www.hezibuluo.com/app':'盒子部落&_&APKPNG@192906.png','https://www.wandoujia.com/category/app':'豌豆荚&_&APKPNG@192906.png','http://www.appchina.com/soft':'应用汇&_&APKPNG@192906.png','https://www.gopojie.net/app/mobile-app':'GO破解&_&APKPNG@192906.png','https://www.appmiu.com/android/':'APP瞄&_&APKPNG@192906.png','https://www.sixyin.com/':'六音软件&_&APKPNG@192906.png','https://www.rjsos.com/':'WIN软件SOS&_&APKPNG@1217044.png'},{'https://widget-page.qweather.net/h5/index.html?md=0123456&bg=1&lc=auto&key=cbad6f4ad10742b387324c58d1179cc3&v=_1626754832624':'天气&_&APKPNG@6859536.png'}];
/*
tj_j = [{'@#ZDFS##70#@':'社交通讯&_&APKPNG@192906.png','@#ZDFS##71#@':'系统工具&_&APKPNG@192906.png','@#ZDFS##72#@':'理财购物&_&APKPNG@192906.png','@#ZDFS##73#@':'主题壁纸&_&APKPNG@192906.png','@#ZDFS##74#@':'旅游出行&_&APKPNG@192906.png','@#ZDFS##75#@':'影音播放&_&APKPNG@192906.png','@#ZDFS##76#@':'拍摄美化&_&APKPNG@192906.png','@#ZDFS##77#@':'生活实用&_&APKPNG@192906.png','@#ZDFS##78#@':'资讯阅读&_&APKPNG@192906.png','@#ZDFS##79#@':'办公学习&_&APKPNG@192906.png','@#ZDFS##80#@':'其它软件&_&APKPNG@192906.png','@#QQYY##FWNJ@qcc.json#@':'QCC&_&APK@5399653.png','@#WYYY##抖音#@':'抖音音乐&_&APK@5934938.png','@#XMLYFM##12627033#@':'一禅心灵庙语&_&http://imagev2.xmcdn.com/group23/M04/17/4A/wKgJL1pgRsLzVQOuAARmf4miRNg621.jpg!op_type=3&columns=140&rows=140','@#YYHDJ##车载#@':'车载&_&APKPNG@6849969.png','@#YYHDJ##英文#@':'英文&_&APKPNG@6849969.png','@#YYHDJ##重低音#@':'重低音&_&APKPNG@6849969.png','@#YYHDJ##越南鼓#@':'越南鼓&_&APKPNG@6849969.png','@#YYHDJ##电音#@':'电音&_&APKPNG@6849969.png','@#YYHDJ##情歌#@':'情歌&_&APKPNG@6849969.png','@#YYHDJ##HiFi#@':'HiFi&_&APKPNG@6849969.png','@#YYHDJ##女声#@':'女声&_&APKPNG@6849969.png','@#YYHDJ##DTS#@':'DTS&_&APKPNG@6849969.png','@#YYHDJ##3D#@':'3D&_&APKPNG@6849969.png','@#YYHDJ##8D#@':'8D&_&APKPNG@6849969.png','@#YYHDJ##伤感#@':'伤感&_&APKPNG@6849969.png','@#YYHDJ##香港#@':'香港&_&APKPNG@6849969.png','@#YYHDJ##欧美#@':'欧美&_&APKPNG@6849969.png'},{'@#KANDQ##dianying#@':'电影&_&APKPNG@6729856.png','@#KANDQ##dianshi#@':'电视剧&_&APKPNG@6729856.png','@#KANDQ##zongyi#@':'综艺&_&APKPNG@6729856.png','@#KANDQ##dongman#@':'动漫&_&APKPNG@6729856.png','@#QQYY##SWNP@MSJMV_1.jsonp?&p=1#@':'美食杰&_&APKPNG@6374881.png'},{'@#QQYY##WWNJ@tv_cctv.jsonp#@':'CCTV&_&APK@5079046.png','@#QQYY##WWNJ@tv_ws.jsonp#@':'卫视&_&APK@5079046.png','@#QQYY##WWNJ@tv_fj.jsonp#@':'福建&_&APK@5079046.png','@#QQYY##WWNJ@tv_gat.jsonp#@':'港澳台&_&APK@5079046.png','@#QQYY##SWNP@KUGOU_20.json?&p=1#@':'女神&_&APKPNG@6858951.png','@#QQYY##SWNP@KUGOU_24.json?&p=1#@':'舞蹈&_&APKPNG@6858951.png','@#QQYY##SWNP@KUGOU_25.json?&p=1#@':'乐器&_&APKPNG@6858951.png','@#QQYY##SWNP@KUGOU_38.json?&p=1#@':'玩乐&_&APKPNG@6858951.png','@#QQYY##SWNP@KUGOU_26.json?&p=1#@':'DJ&_&APKPNG@6858951.png','@#QQYY##SWNP@KUGOU_29.json?&p=1#@':'主播&_&APKPNG@6858951.png','@#QQYY##SWNP@KUGOU_43.json?&p=1#@':'搞笑&_&APKPNG@6858951.png','@#QQYY##SWNP@KUGOU_39.json?&p=1#@':'次元&_&APKPNG@6858951.png','@#YYSQ##10025#@':'动听&_&APKPNG@2203760.png','@#YYSQ##10026#@':'说唱&_&APKPNG@2203760.png','@#YYSQ##10028#@':'乐器&_&APKPNG@2203760.png','@#YYSQ##10027#@':'热舞&_&APKPNG@2203760.png','@#YYSQ##10029#@':'另类&_&APKPNG@2203760.png','@#YKLFZB##1016#@':'舞蹈&_&APKPNG@6856747.png','@#YKLFZB##1014#@':'音乐&_&APKPNG@6856747.png','@#YKLFZB##1015#@':'唱歌&_&APKPNG@6856747.png','@#YKLFZB##1023#@':'乐器&_&APKPNG@6856747.png','@#YKLFZB##1024#@':'喊麦&_&APKPNG@6856747.png','@#YKLFZB##1010#@':'颜值&_&APKPNG@6856747.png','@#YKLFZB##1011#@':'女神&_&APKPNG@6856747.png','@#YKLFZB##2062#@':'电台&_&APKPNG@6856747.png','@#YKLFZB##1019#@':'脱口秀&_&APKPNG@6856747.png','@#YKLFZB##1025#@':'搞笑&_&APKPNG@6856747.png','@#YKLFZB##1027#@':'情感&_&APKPNG@6856747.png','@#YKLFZB##1020#@':'游戏&_&APKPNG@6856747.png','@#YKLFZB##1031#@':'手游&_&APKPNG@6856747.png','@#YKLFZB##1026#@':'八卦&_&APKPNG@6856747.png','@#YKLFZB##1#@':'新人&_&APKPNG@6856747.png','@#QQYY##FWNJ@@qqdjs@.json#@':'企鹅电竞&_&APKPNG@6396439.png'},{'SWNP@LZWP_iJUeNjqbsqf.apk?pwd=woniu':'龒蜗牛D安卓应用&_&APKPNG@3710500.png'},{'@#XMLYS##tucao__yule#@':'吐槽&_&APKPNG@6389978.png','@#XMLYS##gaoxiao__yule#@':'搞笑&_&APKPNG@6389978.png','@#XMLYS##lianai__qinggan#@':'恋爱&_&APKPNG@6389978.png','@#XMLYS##qinggan__qinggan#@':'情感&_&APKPNG@6389978.png','@#XMLYS##mingrenyulu__gerenchengzhang#@':'名人语录&_&APKPNG@6389978.png','@#XMLYS##shenghuobaike__gerenchengzhang#@':'生活百科&_&APKPNG@6389978.png','@#XMLYS##keji__keji#@':'科技&_&APKPNG@6389978.png','@#XMLYS##chuangye__gerenchengzhang#@':'创业&_&APKPNG@6389978.png','@#XMLYS##hulianwang__gerenchengzhang#@':'互联网&_&APKPNG@6389978.png','@#XMLYS##liuxing__yinyue#@':'流行音乐&_&APKPNG@6389978.png','@#XMLYS##dianyin__yinyue#@':'电音音乐&_&APKPNG@6389978.png','@#XMLYS##qingyinyue__yinyue#@':'轻音乐&_&APKPNG@6389978.png','@#XMLYS##reci231__youshengshu#@':'言情&_&APKPNG@6389978.png','@#XMLYS##wenxue__youshengshu#@':'文学&_&APKPNG@6389978.png','@#XMLYS##reci232__youshengshu#@':'悬疑&_&APKPNG@6389978.png','@#XMLYS##shenghuo__youshengshu#@':'生活&_&APKPNG@6389978.png','@#XMLYS##reci235__youshengshu#@':'都市&_&APKPNG@6389978.png','@#XMLYS##reci238__youshengshu#@':'武侠&_&APKPNG@6389978.png','@#XMLYS##tongshu__youshengshu#@':'童书&_&APKPNG@6389978.png','@#XMLYS##lizhi__gerenchengzhang#@':'励志&_&APKPNG@6389978.png','@#XMLYS##licai__shangye#@':'商业&_&APKPNG@6389978.png','@#XMLYS##qikanzazhi__youshengshu#@':'杂志&_&APKPNG@6389978.png','@#XMLYS##yingyu__waiyu#@':'英语&_&APKPNG@6389978.png','@#XMLYS##riyu__waiyu#@':'日语&_&APKPNG@6389978.png','@#XMLYS##hanyu__waiyu#@':'韩语&_&APKPNG@6389978.png'}];
*/
J_00 = [{'66600':'视频','66601':'音乐','66602':'设计','66603':'应用','66604':'天气'}];
//J_01 = [{'55500':'电视剧','55501':'电影'}];
//J_02 = [{'88800':'音乐','88801':'视频','88802':'直播','88803':'应用','88804':'美图','88805':'电台'}];
	    /*--JSON.parse JSON.stringify--*/
	    L_B += "<div class=\"view\"style=\"margin-bottom:80px;\"><div class=\"tabbable\"id=\"tabs-000\"><ul class=\"nav nav-tabs\">";
/*--
		for(var io=0,lo=xq_j.length;io<lo;io++){
			if (week == Ds_xq[io]){xq_7="active";}else{xq_7="";}
			L_B += "<li class=\""+xq_7+"\"><a href=\"#panel-00"+parseInt(io+1)+"\"data-toggle=\"tab\"contenteditable=\"false\" style=\"padding: 4px 4px;\">"+Dt_xq[io]+"</a></li>";
		}
//<li class=\"\"><a href=\"#panel-888\"data-toggle=\"tab\"contenteditable=\"false\" style=\"padding: 4px 1px;\">推荐</a></li>
//<li class=\"\"><a href=\"#panel-555\"data-toggle=\"tab\"contenteditable=\"false\" style=\"padding: 4px 1px;\">戏精</a></li>
--*/
		L_B += "<li class=\"active\"><a href=\"#panel-666\"data-toggle=\"tab\"contenteditable=\"false\" style=\"padding: 4px 1px;\">导航</a></li><li class=\"\"><a href=\"#panel-999\"data-toggle=\"tab\"contenteditable=\"false\" style=\"padding: 4px 1px;\">留言</a></li></ul><div class=\"tab-content\"> <div class=\"tab-pane active\"id=\"panel-666\">"+ZY_ECHOS(J_00,''+ZY_DATA(dh_j,'XX','666')+'','66600')+"</div><div class=\"tab-pane\"id=\"panel-999\"><div class=\"text-center\"><a class=\"btn btn-default\" href=\"https://support.qq.com/embed/phone/336415?\" target=\"_Blank\">点击访问-腾讯兔小巢-给我留言反馈</a></div></div></div></div></div>";
	    /*--<div class=\"tab-pane\"id=\"panel-888\">"+ZY_ECHOS(J_02,''+ZY_DATA(tj_j,'XX','888')+'','88800')+"</div>  "+ZY_DATA(xq_j,'XQ','XQ')+" <div class=\"tab-pane\"id=\"panel-555\">"+ZY_ECHOS(J_01,''+ZY_DATA(xj_j,'L','555')+'','55500')+"</div>--*/
		$('#BBZYS').html(L_B);
		//
		$("img.lazy").lazyload({
			placeholder_data_img : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC',
			placeholder : "http://webmap3.map.bdimg.com/yyfm/lazyload/0.0.1/img/placeholder.png",
			effect: "fadeIn",
			threshold: 200,
			//event: 'click',
			container: $("#BBZY"),
			skip_invisible : false,
			no_fake_img_loader:true,
			failurelimit: 10
		})
		//
}
function ZY_DATA(json,type,active){
	var json,D_00,D_01,D_02,D_03,D_04,D_x,key,WN_url,WN_pp,D_a=['001','002','003','004','005','006','007'],D_b=['66601','66602','66603','66604','66605','66606','66607','66608'],D_xq=[1,2,3,4,5,6,0],week = new Date().getDay();var D_lb ='';
	//console.log(json);
	for(var i=0,l=json.length;i<l;i++){
		if(type === 'XQ'){
			if(active ==='XQ'){
				if (week == D_xq[i]){D_x="active";}else{D_x="";}
				D_03 = D_x;
			}
			D_04 = D_a[i];
		}else if(type === 'A'){
			D_04 = active+'0'+i;
			if(i==0){D_03="active";}else{D_03="";}
		}else if(type === 'L'){
			D_04 = active+'0'+i;
			if(i==0){D_03="active";}else{D_03="";}
		}else if(type === 'XX'){
			D_04 = active+'0'+i;
			if(i==0){D_03="active";}else{D_03="";}
		}
		D_lb +="<div class=\"tab-pane "+D_03+"\" id=\"panel-"+D_04+"\"><div class=\"bs-glyphicons\"><ul class=\"bs-glyphicons-list\">";
	　　for(key in json[i]){
			D_00 = (json[i][key]).match(/^(.+)&_&(.+)$/, "$1$2");
			D_02=TH_PNG(D_00[2]);
			if(type === 'XQ'){
				D_lb +="<li><a href=\"javascript:QQYY(\'http://fj365.ga/o.php/"+key+"\');\"onclick=\"javascript:FX_ZYS(\'QQYY@@@http://fj365.ga/o.php/"+key+"@@@"+D_00[1]+"@@@"+D_02+"\');\"><img class=\"lazy\"data-original=\""+D_02+"\"width=\"50\"height=\"58\"class=\"r r-2x img-full\"style=\"\"></a><span class=\"glyphicon-class\"><a href=\"javascript:QQYY(\'http://fj365.ga/o.php/"+key+"\')\"class=\"text-ellipsis\"title=\""+D_00[1]+"\">"+D_00[1]+"</a></span></li>";
			}else if(type === 'A'){
				D_lb +="<li><a href=\""+key+"\"target=\"_blank\"><img class=\"lazy\"data-original=\""+D_02+"\"width=\"50\"height=\"58\"class=\"r r-2x img-full\"style=\"\"></a><span class=\"glyphicon-class\"><a href=\""+key+"\"target=\"_blank\"class=\"text-ellipsis\"title=\""+D_00[1]+"\">"+D_00[1]+"</a></span></li>";
			}else if(type === 'L'){
				D_lb +="<li><a href=\"javascript:QQYY(\'http://fj365.ga/o.php/"+key+"\');\"onclick=\"javascript:FX_ZYS(\'QQYY@@@http://fj365.ga/o.php/"+key+"@@@"+D_00[1]+"@@@"+D_02+"\');\"><img class=\"lazy\"data-original=\""+D_02+"\"width=\"50\"height=\"58\"class=\"r r-2x img-full\"style=\"\"></a><span class=\"glyphicon-class\"><a href=\"javascript:QQYY(\'http://fj365.ga/o.php/"+key+"\')\"class=\"text-ellipsis\"title=\""+D_00[1]+"\">"+D_00[1]+"</a></span></li>";
			}else if(type === 'XX'){
				D_lb +="<li><a href=\""+TH_URL(key,'')+"\"onclick=\"javascript:FX_ZYS(\'"+TH_URL(key,'FX')+"@@@"+D_00[1]+"@@@"+D_02+"\');\"><img class=\"lazy\"data-original=\""+D_02+"\"width=\"50\"height=\"58\"class=\"r r-2x img-full\"style=\"\"></a><span class=\"glyphicon-class\"><a href=\""+TH_URL(key)+"\"class=\"text-ellipsis\"title=\""+D_00[1]+"\">"+D_00[1]+"</a></span></li>";
			}
		}
		D_lb +='</ul></div></div>';
	}
	return D_lb;
}
function ZY_ECHOS(json,str,active,type){
	var D_07,D_08;
		var jsons=json;var D_html ='';var D_htmi ='';
		if(type){D_08='tabs';}else{D_08='pills';}
		for(var i=0,l=jsons.length;i<l;i++){
			for(let k in jsons[i]){
				if(k==active){D_07='active';}else{D_07='';}
				D_htmi +='<li class="'+D_07+'"><a href="#panel-'+k+'"data-toggle="tab"contenteditable="false"style="padding: 5px 4px;">'+jsons[i][k]+'</a></li>';
			}
		}
		D_html +='<ul class="nav nav-'+D_08+'">'+D_htmi+'</ul><div class="tab-content">'+str+'</div>';
		return D_html;
	//}
}
function KUGOU(lsrc) {
    if (lsrc.indexOf("@") > -1){myx = (/^(.+)@([0-9]+)$/g).exec(lsrc);url_s = myx[1];url_p = myx[2];}else{url_s = lsrc;url_p = 1;}
    $.ajax({
        cache: true,
        async: true,
        url: "http://songsearch.kugou.com/song_search_v2?keyword=" + url_s + "&page=" + url_p + "&pagesize=100&showtype=10&plat=2&version=9168&tag=1&correct=1&privilege=1&sver=5&highlight=em&tag_aggr=1&tagtype=%E5%85%A8%E9%83%A8&api_ver=1&area_code=1",
		//http://ioscdn.kugou.com/api/v3/search/song?format=jsonp&iscorrect=1&pagesize=100&plat=2&sver=5&showtype=10&page=" + url_p + "&keyword=" + url_s + "&version=8550",
        type: "GET",
        dataType: "jsonp",
        jsonpCallback: 'success_jsonpCallback',
        contentType: "application/jsonp; charset=utf-8",
        timeout: 8e3,
        success: function(strdata) {
            kglist_success_jsonpCallback(strdata.data.lists, url_s, url_p, parseInt(parseInt(strdata.data.total)/100));//info
            $(".GS_KG").hide();
            $(".JP_KG").show();
			$(".DH_KG").hide();
            $('html,body').animate({
                scrollTop:'0px'
            }, 200)
        }
    })
}

function kglist_success_jsonpCallback(data, kid, pn, pns) {
    jp_lb = '[';var myss,mysss,myssss,pgs;
    $.each(data, function(k, v) {
        jp_lb += '{mp3:"http://www.fj365.ga/wp-content/themes/WebStack-1.1422/xmly.php?kgid=' + v.FileHash + '",title:"' + safeStr(v.FileName) + '"},'//hash filename HQFileHash MvHash SQFileHashhttp://fj365.ga/o.php/KUGOU_' + v.FileHash + '.mp3
    });
    jp_lb += ']';
    eval("kugou_lb=" + jp_lb);
    WNJP.setPlaylist(kugou_lb);
    WNJP.play(0);
    L_B = '<table class="table table-hover"><thead><tr><th>名称</th><th style="width: 50px;text-align: right;">操作</th></tr></thead><tbody>';
    $.each(data, function(k, v) {
        if (k % 2 == 0){myxo = 'style="background-color: rgba(255, 255, 255, 0.3);"';}else{myxo = 'style="background-color: rgba(185, 185, 185, 0.5);"';}
		/*
		if ((v.HQExtName).indexOf("mp3") > -1){
			myss = '&nbsp;<a href="http://fj365.ga/o.php/KUGOU_' + v.HQFileHash + '.mp3" download="' + safeStr(v.FileName) + '.mp3">HQ</a>&nbsp;'; 
		}else{myss = '&nbsp;'}
		if ((v.SQExtName).indexOf("flac") > -1){
			mysss = '&nbsp;<a href="http://fj365.ga/o.php/KUGOU_' + v.SQFileHash + '.mp3" download="' + safeStr(v.FileName) + '.flac">SQ</a>&nbsp;';
		}else{mysss = '&nbsp;'}
		
		
		*/
		//' + mysss + myss + '' + myssss + '
	    if (parseInt(v.MvType) > 0){
			myssss = '<a href="javascript:JP_ADD(\'m4v,mv,http://www.fj365.ga/wp-content/themes/WebStack-1.1422/xmly.php?kgmv=' + v.MvHash + '\')">MV</a>&nbsp;';// download="' + safeStr(v.FileName) + '.mkv"
		}else{myssss = '&nbsp;'}
		L_B += '<tr><td><p class="txt"><a href="javascript:WNJP.play(' + k + ');"><span class="glyphicon glyphicon-headphones" aria-hidden="true"></span>&nbsp;' + safeStr(v.FileName) + '</a></p></td><td><p class="tds">' + myssss + '<a href="http://www.fj365.ga/wp-content/themes/WebStack-1.1422/xmly.php?kgid=' + v.FileHash + '" download="' + safeStr(v.FileName) + '.mp3"style="float: right;"><span class="glyphicon glyphicon-download-alt" aria-hidden="true"></span></a></p></td></tr>';
    });
    L_B += '</tbody></table>';
    if((parseInt(pn) - 5) <= 0){pgs = 1;}else{pgs = (parseInt(pn) - 5);}
	L_P = '</div><div class="text-center"><div class="pagination" id="UUUU_P" style="margin:3px 0 12px 0;"><ul class="pagination" style="margin:0 0 80px;"><li><a href="javascript:KUGOU(\''+kid+'@' + pgs + '\');"><span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span></a></li>';
	if(parseInt(data.length) > 99){
		for (var j = parseInt(pn) + 1; j < parseInt(pn) + 5; j++) {
			L_P += '<li><a href="javascript:KUGOU(\''+kid+'@'+j+'\');">'+j+'</a></li>';
		}
		L_P += '<li><a href="javascript:KUGOU(\''+kid+'@'+(parseInt(pn)+5)+'\');"><span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span></a></li><li><a class="back-to-top" href="#top"><span class="glyphicon glyphicon-chevron-up" aria-hidden="true"></span></a></li></ul></div>';
	}
	if(typeof(kid) == "undefined" || parseInt(pn) < 1){
        L_B = '';L_P = '';
    }
    $("#JP_HL").html(L_B + L_P); 
	//$("#JP_HL").html(L_B+FY_TH('<ul class="pager"style="margin:0 0 80px;"id="FY_U">@FY_L@</ul>',pn,pns,'javascript:KUGOU(\''+kid+'@#P#\');'));
}
function SGDJ(lsrc) {
    if (lsrc.indexOf("/") > -1) {
        return QQYY('http://fj365.ga/ik123.php?lid=' + lsrc + '&p=1');
    } else {
        //return QQYY('http://fj365.ga/ik123.php?kid=' + lsrc + '')
		return QQYY('http://fj365.ga/o.php/SGDJ_' + lsrc + '.jsonp?&p=1');
    }
}
function KANSP(lsrc) {
    return QQYY('http://fj365.ga/o.php/KAN360_' + lsrc + '.jsonp?@KANSP@&pg=1');
}
function ZYSOTXT(lsrc,xxx) {
	return QQYY('http://fj365.ga/o.php/ZYSO_' + lsrc + '-1-S00' + xxx + '.txt?@all@&pg=1');
}
function LRTS(lsrc) {
	return QQYY('http://fj365.ga/o.php/LRTSFM_' + lsrc + '.so?@all@@&pg=1');
}
function ZDZY(lsrc) {
    return QQYY('http://fj365.ga/o.php/ZYSO_' + lsrc + '-1-SO.jsonp?@all@');
}
function ZDFS(lsrc) {
    return QQYY('http://fj365.ga/o.php/ZDFS_' + lsrc + '-1-1.jsonp?@QQYY@&pg=1');
}
function WYYY(lsrc) {
    return QQYY('http://fj365.ga/163.php?so=' + lsrc + '&p=1');
}
function YYHDJ(lsrc) {
    QQYY('http://fj365.ga/o.php/YYHDJ_'+lsrc+'.jsonp?&p=1');
}
function KUGOUS(lsrc) {
    return QQYY('http://fj365.ga/o.php/KUGOU_' + lsrc + '.jsonp?@KUGOU@');
}
function APKS(lsrc) {
    return QQYY('http://fj365.ga/o.php/ZDFS_' + lsrc + '.jsonp?@apk@&pg=1');
}
function KUWOS(lsrc) {
    return QQYY('http://fj365.ga/o.php/KUWO_' + lsrc + '.jsonp?&p=0');
}
function KUWOMVS(lsrc) {
    return QQYY('http://fj365.ga/o.php/KUWO_' + lsrc + '.json?&p=0');
}
function MIGUS(lsrc) {
    return QQYY('http://fj365.ga/o.php/MIGU_' + lsrc + '.jsonp?&p=1');
}
function YYSQ(lsrc) {
    return QQYY('http://fj365.ga/o.php/YYMV_' + lsrc + '.jsonp?&p=1');
}
function XMLYFM(lsrc) {
    return QQYY('http://www.fj365.ga/wp-content/themes/WebStack-1.1422/xmly.php?lid=' + lsrc + '&p=1');
}
function XMLYS(lsrc) {
	if (lsrc.indexOf("__") > -1) {
	myx = (/^([0-9a-z]+)__([0-9a-z]+)$/g).exec(lsrc);url_s = myx[1];url_p = myx[2];
	}else{url_s = lsrc;url_p = '';}
    return QQYY('http://www.fj365.ga/wp-content/themes/WebStack-1.1422/xmly.php?kid=' + url_s + '&cid=' + url_p + '&pg=1&@all@.json');
}
function QQDJS(lsrc) {
    return QQYY('http://fj365.ga/o.php/QQZB_' + lsrc + '.jsonp?&p=1');
}
function HUYATV(lsrc) {
    return QQYY('http://fj365.ga/o.php/HYZB_' + lsrc + '.jsonp?&p=1');
}
function YKLFZB(lsrc) {
    return QQYY('http://fj365.ga/o.php/YKZB_' + lsrc + '.json?&p=1');
}
function KANDQ(lsrc) {
    return QQYY('http://fj365.ga/o.php/KAN360_' + lsrc + '.json?@QQYY@&pg=1');
}
function YHDM(lsrc) {
    return QQYY('http://fj365.ga/o.php/ZYSO_' + lsrc + '-1-S006.txt?@00@');
}
function XMLYSO(lsrc) {
    if (lsrc.indexOf("@") > -1) {
        myx = (/^(.+)@([0-9]+)$/g).exec(lsrc);
        url_s = myx[1];
        url_p = myx[2];
        return QQYY('http://www.fj365.ga/wp-content/themes/WebStack-1.1422/xmly.php?so=' + url_s + '&pg=' + url_p + '&@xmlyfm@.json');
    } else {
        return QQYY('http://www.fj365.ga/wp-content/themes/WebStack-1.1422/xmly.php?so=' + lsrc + '&pg=1&@xmlyfm@.json');
    }
}

function VIPJX(data) {
    $(".jp-jplayer").jPlayer("stop");
    var sUserAgent = navigator.userAgent.toLowerCase();
    if (sUserAgent.match(/(iphone|ipad|ipod|android|symbianos|windows phone|ucweb|BlackBerry|midp|mobile)/i)) {
        mys = '<h5>友情提醒:以下为第三方-资源||且勿相信视频内广告信息</h5><a class="btn btn-default" href="https://api.sigujx.com/?url=' + data + '" target="_Blank">思古</a>&nbsp;<a class="btn btn-default" href="https://jx.ivito.cn/?url=' + data + '" target="_Blank">WD</a>&nbsp;<a class="btn btn-default" href="https://www.ckmov.vip/api.php?url=' + data + '" target="_Blank">MOV</a>&nbsp;<a class="btn btn-default" href="https://www.administratorw.com/video.php?url=' + data + '" target="_Blank">无名</a><a class="btn btn-default" href="http://17kyun.com/api.php?url=' + data + '" target="_Blank">17kyun</a>&nbsp;<a class="btn btn-default" href="https://jx.618g.com/?url=' + data + '" target="_Blank">-1</a>&nbsp;<a class="btn btn-default" href="http://jiexi.380k.com/?url=' + data + '" target="_Blank">黑云</a>&nbsp;<a class="btn btn-default" href="http://api.baiyug.vip/index.php?url=' + data + '" target="_Blank">百域</a><a class="btn btn-default" href="http://okjx.cc/?url=' + data + '" target="_Blank">OK</a>&nbsp;<a class="btn btn-default" href="https://www.1717yun.com/jx/ty.php?url=' + data + '" target="_Blank">-20</a>&nbsp;<a class="btn btn-default" href="http://jqaaa.com/jx.php?url=' + data + '" target="_Blank">金桥</a>&nbsp;</a>&nbsp;</a>&nbsp;<a class="btn btn-default" href="https://z1.m1907.cn/?jx=' + data + '" target="_Blank">1907</a>&nbsp;<a class="btn btn-default" href="https://cdn.yangju.vip/k/?url=' + data + '" target="_Blank">YJ</a><a class="btn btn-default" href="https://vip.mcyanyu.com/index.php?url=' + data + '" target="_Blank">33-JA</a>&nbsp;<a class="btn btn-default" href="https://jx.rdhk.net/?v=' + data + '" target="_Blank">34-RD</a>&nbsp;<a class="btn btn-default" href="https://www.kpezp.cn/jlexi.php?url=' + data + '" target="_Blank">35-XJ</a>&nbsp;<a class="btn btn-default" href="https://2.08bk.com/?url=' + data + '" target="_Blank">48-小七</a><a class="btn btn-default" href="https://api.lhh.la/vip/?url=' + data + '" target="_Blank">36-HHL</a>&nbsp;<a class="btn btn-default" href="https://jx.dianyingguan.cn/?url=' + data + '" target="_Blank">37-XL</a>&nbsp;<a class="btn btn-default" href="https://jx.mw0.cc/?url=' + data + '" target="_Blank">38-XL</a>&nbsp;<a class="btn btn-default" href="https://www.33tn.cn/?url=' + data + '" target="_Blank">39-33</a><a class="btn btn-default" href="https://py.ha12.xyz/sos/index.php?url=' + data + '" target="_Blank">40-HA12</a>&nbsp;<a class="btn btn-default" href="https://www.8090g.cn/?url=' + data + '" target="_Blank">41-8090</a>&nbsp;<a class="btn btn-default" href="https://vip.mpos.ren/v/?url=' + data + '" target="_Blank">42-人人</a>&nbsp;<a class="btn btn-default" href="http://jx.cesms.cn/?url=' + data + '" target="_Blank">43-大亨</a><a class="btn btn-default" href="https://660e.com/?url=' + data + '" target="_Blank">44-乐乐</a>&nbsp;<a class="btn btn-default" href="https://www.administratorw.com/video.php?url=' + data + '" target="_Blank">45-无名2</a>&nbsp;<a class="btn btn-default" href="http://j.zz22x.com/jx/?url=' + data + '" target="_Blank">46-花园</a>&nbsp;<a class="btn btn-default" href="https://api.123zx.net/m3u8/play.html?id=' + data + '" target="_Blank">447-33uu</a>&nbsp;<a class="btn btn-default" href="https://4k.1ii0.cn/player/?url=' + data + '" target="_Blank">49</a>&nbsp;<a class="btn btn-default" href="http://www.asys.vip/jx/?url=' + data + '" target="_Blank">50</a>&nbsp;<a class="btn btn-default" href="https://titan.mgtv.com.o8tv.com/jiexi/?url=' + data + '" target="_Blank">51</a>&nbsp;<a class="btn btn-default" href="https://www.kpezp.cn/jlexi.php?url=' + data + '" target="_Blank">52</a>&nbsp;<a class="btn btn-default" href="https://jx.xmflv.com/?url=' + data + '" target="_Blank">53</a>&nbsp;<a class="btn btn-default" href="https://vip.bljiex.com/?v=' + data + '" target="_Blank">54</a>&nbsp;<a class="btn btn-default" href="https://jx.m3u8.tv/jiexi/?url=' + data + '" target="_Blank">55</a>&nbsp;<a class="btn btn-default" href="https://jx.aidouer.net/?url=' + data + '" target="_Blank">56</a>&nbsp;';
        $('#MModal').modal({
            show: true
        })
    } else {
        mys = '<h5>友情提醒:以下为第三方-资源||且勿相信视频内广告信息</h5><p><a class="btn btn-default" href="https://api.sigujx.com/?url=' + data + '" target="_Blank">思古</a>&nbsp;<a class="btn btn-default" href="https://jx.ivito.cn/?url=' + data + '" target="_Blank">30-WD</a>&nbsp;<a class="btn btn-default" href="https://www.ckmov.vip/api.php?url=' + data + '" target="_Blank">MOV</a>&nbsp;<a class="btn btn-default" href="https://www.administratorw.com/video.php?url=' + data + '" target="_Blank">无名</a>&nbsp;<a class="btn btn-default" href="http://17kyun.com/api.php?url=' + data + '" target="_Blank">17kyun</a>&nbsp;<a class="btn btn-default" href="https://jx.618g.com/?url=' + data + '" target="_Blank">-1</a>&nbsp;<a class="btn btn-default" href="http://jiexi.380k.com/?url=' + data + '" target="_Blank">黑云</a>&nbsp;<a class="btn btn-default" href="http://api.baiyug.vip/index.php?url=' + data + '" target="_Blank">百域</a>&nbsp;<a class="btn btn-default" href="http://okjx.cc/?url=' + data + '" target="_Blank">OK</a>&nbsp;<a class="btn btn-default" href="https://www.1717yun.com/jx/ty.php?url=' + data + '" target="_Blank">-20</a>&nbsp;<a class="btn btn-default" href="http://jqaaa.com/jx.php?url=' + data + '" target="_Blank">金桥</a>&nbsp;</a>&nbsp;<a class="btn btn-default" href="https://z1.m1907.cn/?jx=' + data + '" target="_Blank">31-1907</a>&nbsp;<a class="btn btn-default" href="https://cdn.yangju.vip/k/?url=' + data + '" target="_Blank">YJ</a>&nbsp;<a class="btn btn-default" href="https://vip.mcyanyu.com/index.php?url=' + data + '" target="_Blank">33-JA</a>&nbsp;<a class="btn btn-default" href="https://jx.rdhk.net/?v=' + data + '" target="_Blank">34-RD</a>&nbsp;<a class="btn btn-default" href="https://www.kpezp.cn/jlexi.php?url=' + data + '" target="_Blank">35-XJ</a>&nbsp;<a class="btn btn-default" href="https://api.lhh.la/vip/?url=' + data + '" target="_Blank">36-HHL</a>&nbsp;<a class="btn btn-default" href="https://jx.dianyingguan.cn/?url=' + data + '" target="_Blank">37-XL</a>&nbsp;<a class="btn btn-default" href="https://jx.mw0.cc/?url=' + data + '" target="_Blank">38-XL</a>&nbsp;<a class="btn btn-default" href="https://www.33tn.cn/?url=' + data + '" target="_Blank">39-33</a>&nbsp;<a class="btn btn-default" href="https://py.ha12.xyz/sos/index.php?url=' + data + '" target="_Blank">40-HA12</a>&nbsp;<a class="btn btn-default" href="https://www.8090g.cn/?url=' + data + '" target="_Blank">41-8090</a>&nbsp;<a class="btn btn-default" href="https://vip.mpos.ren/v/?url=' + data + '" target="_Blank">42-人人</a>&nbsp;<a class="btn btn-default" href="http://jx.cesms.cn/?url=' + data + '" target="_Blank">43-大亨</a>&nbsp;<a class="btn btn-default" href="https://660e.com/?url=' + data + '" target="_Blank">44-乐乐</a>&nbsp;<a class="btn btn-default" href="https://www.administratorw.com/video.php?url=' + data + '" target="_Blank">45-无名2</a>&nbsp;<a class="btn btn-default" href="http://j.zz22x.com/jx/?url=' + data + '" target="_Blank">46-花园</a>&nbsp;<a class="btn btn-default" href="https://api.123zx.net/m3u8/play.html?id=' + data + '" target="_Blank">447-33uu</a>&nbsp;<a class="btn btn-default" href="https://2.08bk.com/?url=' + data + '" target="_Blank">48-小七</a>&nbsp;<a class="btn btn-default" href="https://4k.1ii0.cn/player/?url=' + data + '" target="_Blank">49</a>&nbsp;<a class="btn btn-default" href="http://www.asys.vip/jx/?url=' + data + '" target="_Blank">50</a>&nbsp;<a class="btn btn-default" href="https://titan.mgtv.com.o8tv.com/jiexi/?url=' + data + '" target="_Blank">51</a>&nbsp;<a class="btn btn-default" href="https://www.kpezp.cn/jlexi.php?url=' + data + '" target="_Blank">52</a>&nbsp;<a class="btn btn-default" href="https://jx.xmflv.com/?url=' + data + '" target="_Blank">53</a>&nbsp;<a class="btn btn-default" href="https://vip.bljiex.com/?v=' + data + '" target="_Blank">54</a>&nbsp;<a class="btn btn-default" href="https://jx.m3u8.tv/jiexi/?url=' + data + '" target="_Blank">55</a>&nbsp;<a class="btn btn-default" href="https://jx.aidouer.net/?url=' + data + '" target="_Blank">56</a>&nbsp;</p>';
        $('#MModal').modal({
            show: true
        })
    }
    $("#KJ_IF").html(mys);
}

function KJ_GB() {
    $('#MModal').on('hidden.bs.modal', function() {
        $("#word").hide();
        $("#play_header").empty().hide();
        $("#playad").empty().hide();
        $("#KJ_IF").attr("src", '');
        $("#KJ_IF").attr("height", '0');
        $("#KJ_IF").attr("width", '0');
        window.parent.getElementById("#KJ_IF").style.display = "none";
        $('#MModal').modal({
            hide: true
        })
    })
}
function PNGS(lid) {
    if (lid.indexOf("_") > -1) {
        mys = 's.wo0.cn';
        myx = (/^([0-9]+)_([0-9]+)$/g).exec(lid);
        url_s = myx[1];
        url_p = parseInt((myx[2]) * 60);
        myid = myx[2];
    } else {
        url_s = lid;
        url_p = 0;
    }
    $.ajax({
        cache: true,
        async: true,
        type: "GET",
        url: '//api.fj365.ml/apipng.php',
        data: "cid=" + url_s + "&start=" + url_p + "&count=30",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        timeout: 8e3,
        success: function(jsonData) {
            var datas = jsonData.data;
            L_B = '<div class="bs-glyphicons"><ul class="bs-glyphicons-list">';
            $.each(datas, function(k, v) {
                if (typeof(v.utag) == "undefined") {
                    mymz = '图片资源';
                } else {
                    mymz = v.utag;
                }
                mypng = decode360Url((v.url), 48, 48, 100);
                L_B += '<li><a href="#MModal" onclick="javascript:KJ_PNG(\'' + v.url + '\');"><img class="lazy" data-original="' + mypng + '" width="50" height="58" class="r r-2x img-full"></a><span class="glyphicon-class"><a href="#" class="text-ellipsis" title="' + mymz + '">' + mymz + '</a></span></li>';
            });
            L_B += '</ul></div>';
            pn = myid;
            if ((parseInt(pn) - 5) <= 0) {
                pns = 0;
            } else {
                pns = (parseInt(pn) - 5);
            }
            L_P = '</div><div class="text-center"><div class="pagination" style="margin:3px 0 12px 0;"><ul class="pagination" style="margin:0 0 38px;"><li><a href="javascript:PNGS(\'' + url_s + '_' + pns + '\');"><span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span></a></li>';
            for (var j = parseInt(pn) + 1; j < parseInt(pn) + 5; j++) {
                L_P += '<li><a href="javascript:PNGS(\'' + url_s + '_' + j + '\');">' + j + '</a></li>';
            }
            L_P += '<li><a href="javascript:PNGS(\'' + url_s + '_' + (parseInt(pn) + 5) + '\');"><span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span></a></li><li><a class="back-to-top" href="#top"><span class="glyphicon glyphicon-chevron-up" aria-hidden="true"></span></a></li></ul></div>';
            if (typeof(L_P) == "undefined" || parseInt(datas.length) <= 3) {
                L_P = '';
            }
			$('#GS_HL').html(L_B + L_P);
            $(".GS_KG").show();
			$(".DH_KG").hide();
			$(".JP_KG").hide();
            $('html,body').animate({
                scrollTop: '0px'
            }, 200);
            $("img.lazy").lazyload({
				placeholder_data_img : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC',
				placeholder : "http://webmap3.map.bdimg.com/yyfm/lazyload/0.0.1/img/placeholder.png",
				effect: "fadeIn",
				threshold: 200,
				//event: 'click',
				container: $("#BBZY"),
				skip_invisible : false,
				no_fake_img_loader:true,
				failurelimit: 10
            })
        }
    })
}
function KJ_PNG(data) {
    var png_0,png_1,png_2,png_3,png_4,png_5,png_6;
    png_0 = decode360Url(data, 0, 0, 100);png_6 = decode360Url(data, 480, 320, 100);png_5 = decode360Url(data, 600, 420, 100);png_1 = decode360Url(data, 800, 600, 100);png_2 = decode360Url(data, 1024, 768, 100);png_3 = decode360Url(data, 1440, 900, 100);png_4 = decode360Url(data, 2560, 1600, 100);
    mys = '<h5>以下为第三方-资源||且勿疯狂下载图片谢谢</h5><hr><div class="text-center"><img src="' + png_6 + '" width="100%" height="320"></div><hr><a class="btn btn-default" href="' + png_0 + '"  target="_Blank">原始尺寸</a><a class="btn btn-default" href="' + png_6 + '" target="_Blank">480x320</a><a class="btn btn-default" href="' + png_5 + '" target="_Blank">600x420</a><a class="btn btn-default" href="' + decode360Url(data, 640, 1136, 100) + '" target="_Blank">640x1136</a><a class="btn btn-default" href="' + png_1 + '" target="_Blank">800x600</a><a class="btn btn-default" href="' + decode360Url(data, 800, 1280, 100) + '" target="_Blank">800x1280</a><a class="btn btn-default" href="' + decode360Url(data, 1080, 1920, 100) + '" target="_Blank">1080x1920</a><a class="btn btn-default" href="' + png_2 + '" target="_Blank">1024x768</a><a class="btn btn-default" href="' + decode360Url(data, 1440, 2960, 100) + '" target="_Blank">1440x2960</a><a class="btn btn-default" href="' + png_3 + '" target="_Blank">1440x900</a><a class="btn btn-default" href="' + png_4 + '" target="_Blank">2560x1600</a>';
    $('#MModal').modal({
        show: true
    });
    $("#KJ_IF").html(mys)
}
function decode360Url(oldUrl, width, height, quality) {
    return oldUrl.replace("r\/__85", "m\/" + parseInt(width) + "_" + parseInt(height) + "_" + quality);
}
function SGPNGS(lsrc) {
    if (lsrc.indexOf("_") > -1) {
        myx = (/^(.+)_([0-9]+)$/g).exec(lsrc);
        url_s = myx[1];
        url_p = parseInt((myx[2]) * 60);
        myid = myx[2];
    } else {
        url_s = lsrc;
        url_p = 0;
        myid = 1;
    }
    $.ajax({
        cache: true,
        async: true,
        type: "POST",
        url: "//pic.sogou.com/pics/json.jsp",
        data: "query=" + url_s + "&st=5&start=" + url_p + "&xml_len=60&reqFrom=wap_result&",
        dataType: "jsonp",
        jsonpCallback: 'success_jsonpCallback',
        contentType: "application/jsonp; charset=utf-8",
        timeout: 8e3,
        success: function(jsonData) {
            var datas = jsonData.items;
            L_B = '<div class="bs-glyphicons"><ul class="bs-glyphicons-list">';
            $.each(datas, function(k, v) {
                if (typeof(v.title) == "undefined") {
                    mymz = '图片资源';
                } else {
                    mymz = safeStr(unescape((v.title).replace(/\\u/g, '%u')));
                }
                mypng = v.locImageLink;
                L_B += '<li><a href="#MModal" onclick="javascript:KJ_SGPNG(\'' + mypng + '\');"><img class="lazy" data-original="' + mypng + '" width="50" height="58" class="r r-2x img-full"></a><span class="glyphicon-class"><a href="#" class="text-ellipsis" title="' + mymz + '">' + mymz + '</a></span></li>';
            });
            L_B += '</ul></div>';
            pn = myid;
            if ((parseInt(pn) - 5) <= 0) {
                pns = 0;
            } else {
                pns = (parseInt(pn) - 5);
            }
            L_P = '</div><div class="text-center" style="margin:0 1px 100px 1px;"><div class="pagination"><ul class="pagination"><li><a href="javascript:SGPNGS(\'' + url_s + '_' + pns + '\');"><span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span></a></li>';
            for (var j = parseInt(pn) + 1; j < parseInt(pn) + 5; j++) {
                L_P += '<li><a href="javascript:SGPNGS(\'' + url_s + '_' + j + '\');">' + j + '</a></li>';
            }
            L_P += '<li><a href="javascript:SGPNGS(\'' + url_s + '_' + (parseInt(pn) + 5) + '\');"><span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span></a></li><li><a class="back-to-top" href="#top"><span class="glyphicon glyphicon-chevron-up" aria-hidden="true"></span></a></li></ul></div>';
            if (typeof(L_P) == "undefined" || parseInt(datas.length) <= 3) {
                L_P = '';
            }
			$('#GS_HL').html(L_B + L_P);
            $(".JP_KG").hide();
            $(".GS_KG").show();
			$(".DH_KG").hide();
            $('html,body').animate({
                scrollTop: '0px'
            }, 200);
            $("img.lazy").lazyload({
				placeholder_data_img : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC',
				placeholder : "http://webmap3.map.bdimg.com/yyfm/lazyload/0.0.1/img/placeholder.png",
				effect: "fadeIn",
				threshold: 200,
				//event: 'click',
				container: $("#BBZY"),
				skip_invisible : false,
				no_fake_img_loader:true,
				failurelimit: 10
            })
        }
    })
}
function DDZ_XZ(data) {
	var DDZ_XZ_pp,DDZ_XZ_htmi,DDZ_XZ_html;
	if (typeof(data) == "undefined"){
		DDZ_XZ_html = '';
	}else{
		DDZ_XZ_pp = data.split('###');
		for(var i=0,l=(data.split('###')).length;i<l;i++){
			DDZ_XZ_htmi +='<a class="btn btn-default" href="javascript:JP_ADD(\'m4v,'+(i+1)+','+DDZ_XZ_pp[i]+'\')">线路_'+(i+1)+'</a>&nbsp;';
		}
		DDZ_XZ_html = '<h5>多源多地址选择</h5><hr><div class="text-center">'+DDZ_XZ_htmi+'</div>';
	}
    $('#MModal').modal({
        show: true
    });
    $("#KJ_IF").html(DDZ_XZ_html.replace('undefined',''));
}
function KJ_SGPNG(data) {
    mys = '<h5>以下为第三方-资源||且勿疯狂下载图片谢谢</h5><hr><div class="text-center"><img src="' + data + '" width="120" height="120"></div><hr><a class="btn btn-default" href="' + data + '" target="_Blank">原始尺寸</a>';
    $('#MModal').modal({
        show: true
    });
    $("#KJ_IF").html(mys);
}
function MAPNG(data) {
    mys = '<h5>以下为虾米接口提供二维码图片生成</h5><hr><div class="text-center"><img src="https://qun.qq.com/qrcode/index?data=' + data + '" width="110" height="110"></div><hr><a class="btn btn-default" href="https://qun.qq.com/qrcode/index?data=' + data + '" target="_Blank">原始尺寸</a>';
    $('#MModal').modal({
        show: true
    });
    $("#KJ_IF").html(mys);
}
function TH_PNG(str) {
	if (str.indexOf("@") > -1){
		return str.replace('GS@','http://i.gtimg.cn/music/photo/mid_singer_150/').replace('APK@','http://static.yingyonghui.com/icon/128/').replace('APKPNG@','http://static.yingyonghui.com/icon/128/').replace('XJ@','http://192.129.175.188:8080/images').replace('XJPNG@','http://192.129.175.188:8080/images').replace('YG@','https://y.gtimg.cn/music/photo_new/');
	}else{
		if (str.indexOf("http") > -1){
			return str;
		}else{
			return "http:"+str;
		}
	}
}
function TH_URL(str,type){
	var pp,url,urls,urlp;
	if (str.indexOf("@#") > -1) {
		pp=(/@#([A-Z]+)##(.+)#@/g).exec(str);url=safeurl(pp[2]);
		if(type == 'FX'){
			urls=pp[1]+"@@@"+url;
		}else{
			urls="javascript:"+pp[1]+"(\'"+url+"\');";
		}
	}else{urls=safeurl(str)+'"target="_blank';}
	return urls;
}
function safeurl(str){
    return str.replace('SWNP@','http://fj365.ga/o.php/').replace('WWNJ@','http://w.wo0.cn/jp/jsonp/').replace('FWNJ@','http://fj365.ml/jsonp/').replace('EWNJ@','http://fj365.gitee.io/cmp4/jsonp/').replace('WNPG@','.jsonp?@QQYY@&pg=1').replace('@S','-1-S006.txt?@00@');
}
function safeStr(str){
    return str.replace(/<1>/g, "").replace(/<\/1>/g, "").replace(/</g, '').replace(/>/g, '').replace(/"/g, "").replace(/'/g, "");
}
$("#BT_JPS").on("click", function() {
    if ($(".JP_KG").is(":visible")) {} else {
        $(".JP_KG").show();
        $(".GS_KG").hide();
		$(".DH_KG").hide();
    }
});
$("#BT_ZYS").on("click", function() {
    if ($(".GS_KG").is(":visible")) {} else {
		$(".GS_KG").show();
        $(".DH_KG").hide();
        $(".JP_KG").hide();
    }
});
$("#BT_DH").on("click", function() {
    if ($(".DH_KG").is(":visible")) {} else {
        $(".DH_KG").show();
		$(".GS_KG").hide();
        $(".JP_KG").hide();
    }
});
function FY_TH(FY,P,PS,PU){
	var pfy='';var pg,pgs,S,X,Z;
	if(parseInt(P)>0 && parseInt(PS)>1){
		pg = (parseInt(P)-1)<1?1:(parseInt(P)-1);
		if(PU.indexOf("#P#") > -1){S=PU.replace('#P#',pg);X=PU.replace('#P#',(parseInt(P)+1));Z=PU.replace('#P#','1');}else{S=PU+pg;X=PU+(parseInt(P)+1);Z=PU+'1';}
		pfy +='<li class="previous"><a href="'+S+'">&larr;上一页</a></li><li class="center"><a href="'+Z+'">主页</a></li><li class="center"><a href="#top">顶部</a></li><li class="next"><a href="'+X+'">下一页&rarr;</a></li>';
	}else{
		pfy +='';
	}
	if(typeof(PU) == "undefined" || typeof(FY) == "undefined"){
		return '';
	}else{
		return FY.replace('@FY_L@',pfy);
	}
}
function ECHO(str,type){
	switch(type) {
		case 'D':
			document.write(str);
		break;
		case 'C':
			console.log(str);
		break;
		case 'H':
			document.getElementById("demo").innerHTML = str;
		break;
		case 'T':
			alert(str);
		break;
		case 'E':
			eval(str);
		break;
		case 'KJ':
			$('#MModal').modal({show:true});$("#KJ_IF").html(str.replace('undefined',''));
		break;
		default:
			console.log('Sorry');
	}
}
function TIME(type){
	var times;
	var date = new Date(date*1000);//如果date为13位不需要乘1000
	var Y = date.getFullYear();
	var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1);
	var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
	var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours());
	var m = (date.getMinutes() <10 ? '0' + date.getMinutes() : date.getMinutes());
	var s = (date.getSeconds() <10 ? '0' + date.getSeconds() : date.getSeconds());
	switch(type) {
		case 'T1':
			times=Date.parse(new Date());
		break;
		case 'T2':
			times=(new Date()).valueOf();
		break;
		case 'T':
			times=new Date().getTime();
		break;
		case 'Y':
			times=Y;
		break;
		case 'M':
			times=M;
		break;
		case 'D':
			times=D;
		break;
		case 'h':
			times=h;
		break;
		case 'm':
			times=m;
		break;
		case 's':
			times=s;
		break;
		case 'XQ':
			times=new Date().getDay();
		break;
		case 'SJ':
			times=Y+'-'+M+'-'+D+' '+h+':'+m+':'+s;
		break;
		default:
			times=new Date().getTime();
	}
	return times;
}
function JP_HG() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    if (sUserAgent.match(/(iphone|ipad|ipod|android|symbianos|windows phone|ucweb|BlackBerry|midp|mobile)/i)) {
        mys = "300";
		$("#MYsearch").addClass("navbar-form navbar-left input-s-lg m-t m-l-n-xs hidden-lg");
		//$("#MYsearch").removeClass("hidden-sm");
    } else {
        mys = "500";
		$("#MYsearch").addClass("navbar-form navbar-left input-s-lg m-t m-l-n-xs hidden-sm");
		//$("#MYsearch").removeClass("hidden-lg");
		
    }
    return (mys);
}
setTimeout(function(){init();$(".DH_KG").show();$(".GS_KG").hide();$(".JP_KG").hide();$("#UUUU_P").remove();$("#UUUU_PG").remove();}, 100);
