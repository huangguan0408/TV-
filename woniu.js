var WNJP,time,url_s,url_p,jp_lb,lb_lb,lb_fy,pns,pn,mys,myx,myy,myld,myid,mymz,mysrc,mypng,myxo;
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
    return null
}
function FX_ZYS(lsrc) {
    myx = lsrc.match(/^([A-Z]+)@@@(.+)@@@(.+)@@@(.+)$/, "$1$2$3$4");
    myid = myx[1];
    mysrc = (myx[2]).replace('?', '%25253F');
    mymz = myx[3];
    if ((myx[4]).indexOf("GS@") > -1) {
        mypng = (myx[4]).replace('GS@', 'http://i.gtimg.cn/music/photo/mid_singer_150/')
    } else if ((myx[4]).indexOf("//image") > -1) {
		//if ((myx[4]).indexOf(".xmcdn.com") > -1) {
			//mypng = myx[4];
		//}else{
			mypng = 'http:' + myx[4];
		//}
    } else {
        mypng = (myx[4]);
    }
    $("#FX_ZY").attr('href', 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=http://s.wo0.cn/%3F' + myid + '%3D' + encodeURIComponent(mysrc) + '&title=' + encodeURIComponent(mymz) + '&desc=%E9%BE%92%E8%9C%97%E7%89%9BD%E6%BB%9A%E7%90%83%E5%BD%B1%E9%9F%B3&site=%E9%BE%92%E8%9C%97%E7%89%9BD&summary=%E9%BE%92%E8%9C%97%E7%89%9BD%E6%BB%9A%E7%90%83%E5%BD%B1%E9%9F%B3_Q%3A121027740%0A&pics=' + encodeURIComponent(mypng) + '&showcount=1')
}
$(document).ready(function() {
    var item,so_val,so_so,so_str,so_s1,so_s2;
    $('#MModal').modal('hide');
    so_so = (window.location.search.substring(1)).replace(/\+/g, "%20");
    if (so_so.indexOf('so=') > -1) {
        QQYY(G_Q_S('so'))
    } else if (so_so.match(/klfm=/)) {
        KLFM(G_Q_S('klfm'))
    } else if (so_so.match(/sgdj=/)) {
        SGDJ(G_Q_S('sgdj'))
    } else if (so_so.match(/yyt=/)) {
        YYT(G_Q_S('yyt'))
    } else if (so_so.match(/zdzy=/)) {
        ZDZY(G_Q_S('zdzy'))
    } else if (so_so.match(/wyyy=/)) {
        WYYY(G_Q_S('wyyy'))
    } else if (so_so.match(/kgyy=/)) {
        KUGOU(G_Q_S('kgyy'))
    } else if (so_so.match(/xmlyfm=/)) {
        XMLYSO(G_Q_S('xmlyfm'))
    } else if (so_so.match(/aipai=/)) {
        AIPAISO(G_Q_S('aipai'))
    } else if (so_so.match(/QQYY=/)) {
        QQYY(G_Q_S('QQYY'))
    } else if (so_so.match(/XMLYFM=/)) {
        XMLYFM(G_Q_S('XMLYFM'))
	} else if (so_so.match(/XMLYSO=/)) {
        XMLYSO(G_Q_S('XMLYSO'))
    } else if (so_so.match(/KLFM=/)) {
        KLFM(G_Q_S('KLFM'))
    } else if (so_so.match(/YYT=/)) {
        YYT(G_Q_S('YYT'))
    } else if (so_so.match(/SGDJ=/)) {
        SGDJ(G_Q_S('SGDJ'))
	} else if (so_so.match(/YYHDJ=/)) {
		FX_ZYS('YYHDJ@@@'+G_Q_S('YYHDJ')+'@@@'+G_Q_S('YYHDJ')+'@@@http://static.yingyonghui.com/icon/128/6733512.png');
        YYHDJ(G_Q_S('YYHDJ'))
	} else if (so_so.match(/KUWOMV=/)) {
        QQYY('http://s.wo0.cn/o.php/KUWO_'+G_Q_S('KUWOMV')+'.json?&p=0')
    } else if (so_so.match(/ZDZY=/)) {
        ZDZY(G_Q_S('ZDZY'))
	} else if (so_so.match(/ZYSO=/)) {
		if (G_Q_S('ZYSO').indexOf("--") > -1) {
			so_str = (/^(.+)--([0-9]+)$/g).exec(G_Q_S('ZYSO'));
			so_s1 = so_str[1];
			so_s2 = so_str[2];
			FX_ZYS('ZYSO@@@'+so_s1+'--'+so_s2+'@@@'+so_s1+'@@@http://static.yingyonghui.com/icon/128/6609198.png');
			ZYSOTXT(so_s1,so_s2)
		}else{
			FX_ZYS('ZYSO@@@'+G_Q_S('ZYSO')+'@@@'+G_Q_S('ZYSO')+'@@@http://static.yingyonghui.com/icon/128/6609198.png');
			ZYSOTXT(G_Q_S('ZYSO'),'1')
		}
    } else if (so_so.match(/MEIPAI=/)) {
        MEIPAI(G_Q_S('MEIPAI'))
    } else if (so_so.match(/YYSQ=/)) {
        YYSQ(G_Q_S('YYSQ'))
    } else if (so_so.match(/AIPAISO=/)) {
        AIPAISO(G_Q_S('AIPAISO'))
    } else if (so_so.match(/QQDJS=/)) {
        QQDJS(G_Q_S('QQDJS'))
    } else if (so_so.match(/HUAJ=/)) {
        HUAJ(G_Q_S('HUAJ'))
    } else if (so_so.match(/DOUYU=/)) {
        DOUYU(G_Q_S('DOUYU'))
    } else if (so_so.match(/YZBSO=/)) {
        YZBSO(G_Q_S('YZBSO'))
    } else if (so_so.match(/WYYY=/)) {
        WYYY(G_Q_S('WYYY'))
    } else if (so_so.match(/KUGOU=/)) {
		FX_ZYS('KUGOU@@@'+G_Q_S('KUGOU')+'@@@'+G_Q_S('KUGOU')+'@@@http://static.yingyonghui.com/icon/128/6445467.png');
        KUGOU(G_Q_S('KUGOU'))
	} else if (so_so.match(/APK=/)) {
		FX_ZYS('APK@@@'+G_Q_S('APK')+'@@@'+G_Q_S('APK')+'@@@http://static.yingyonghui.com/icon/128/6445467.png');
        APKS(G_Q_S('APK'))
	} else if (so_so.match(/KANSP=/)) {
		FX_ZYS('KANSP@@@'+G_Q_S('KANSP')+'@@@'+G_Q_S('KANSP')+'@@@http://static.yingyonghui.com/icon/128/6729856.png');
        KANSP(G_Q_S('KANSP'))
	} else if (so_so.match(/KUWO=/)) {
		FX_ZYS('KUWO@@@'+G_Q_S('KUWO')+'@@@'+G_Q_S('KUWO')+'@@@http://static.yingyonghui.com/icon/128/6684181.png');
        KUWOS(G_Q_S('KUWO'))
	} else if (so_so.match(/XIAMI=/)) {
		FX_ZYS('XIAMI@@@'+G_Q_S('XIAMI')+'@@@'+G_Q_S('XIAMI')+'@@@http://static.yingyonghui.com/icon/128/6684181.png');
        XIAMIS(G_Q_S('XIAMI'))
	} else if (so_so.match(/MIGU=/)) {
		FX_ZYS('MIGU@@@'+G_Q_S('MIGU')+'@@@'+G_Q_S('MIGU')+'@@@http://static.yingyonghui.com/icon/128/6732387.png');
        MIGUS(G_Q_S('MIGU'))
    } else if (so_so.match(/LZTVSO=/)) {
        LZTVSO(G_Q_S('LZTVSO'))
    } else if (so_so.match(/TAOBAOSO=/)) {
        TAOBAOSO(G_Q_S('TAOBAOSO'))
	} else if (so_so.match(/HUYATV=/)) {
        HUYATV(G_Q_S('HUYATV'))
	} else if (so_so.match(/VIPJX=/)) {
        VIPJX(G_Q_S('VIPJX'))
	} else if (so_so.match(/MAPNG=/)) {
        MAPNG(G_Q_S('MAPNG'))
	} else if (so_so.match(/PNGS=/)) {
        PNGS(G_Q_S('PNGS'))
    } else {
        QQYY('http://w.wo0.cn/jp/jsonp/@x@.json')
    }
    $("#selectTest").change(function() {
        item = $("#selectTest").val()
    });
    $("#button_sotxt").click(function() {
        so_val = $("#sotxt").val();
        switch (item) {
			case 'QQ_SO':
				FX_ZYS('QQYY@@@'+so_val+'@@@'+so_val+'@@@http://static.yingyonghui.com/icon/128/6383836.png');
                QQYY(so_val);
                break;
			case 'KG_SO':
				FX_ZYS('KUGOU@@@'+so_val+'@@@'+so_val+'@@@http://static.yingyonghui.com/icon/128/6445467.png');
                KUGOU(so_val);
                break;
			case 'APK_SO':
				FX_ZYS('APK@@@'+so_val+'@@@'+so_val+'@@@https://www.zdfans.com/images/logo.png');
                APKS(so_val);
                break;
			case 'KANSP_SO':
				FX_ZYS('KANSP@@@'+so_val+'@@@'+so_val+'@@@http://static.yingyonghui.com/icon/128/6729856.png');
                KANSP(so_val);
                break;
			case 'MG_SO':
				FX_ZYS('MIGU@@@'+so_val+'@@@'+so_val+'@@@http://static.yingyonghui.com/icon/128/6732387.png');
                MIGUS(so_val);
                break;
			case 'KW_SO':
				FX_ZYS('KUWO@@@'+so_val+'@@@'+so_val+'@@@http://static.yingyonghui.com/icon/128/6684181.png');
                KUWOS(so_val);
                break;
			case 'KWMV_SO':
                QQYY('http://s.wo0.cn/o.php/KUWO_'+so_val+'.json?&p=0');
                break;
			case 'XM_SO':
				FX_ZYS('XIAMI@@@'+so_val+'@@@'+so_val+'@@@http://static.yingyonghui.com/icon/128/6684181.png');
                XIAMIS(so_val);
                break;
            case 'WY_SO':
				FX_ZYS('WYYY@@@'+so_val+'@@@'+so_val+'@@@http://static.yingyonghui.com/icon/128/5934938.png');
                WYYY(so_val);
                break;
            case 'YYT_SO':
                YYT(so_val);
                break;
            case 'SG_SO':
				FX_ZYS('SGDJ@@@'+so_val+'@@@'+so_val+'@@@http://static.yingyonghui.com/icon/128/6372775.png');
                SGDJ(so_val);
                break;
			case 'YYHDJ_SO':
				FX_ZYS('YYHDJ@@@'+so_val+'@@@'+so_val+'@@@http://static.yingyonghui.com/icon/128/6733512.png');
                YYHDJ(so_val);
                break;
            case 'ZD_SO':
				FX_ZYS('ZDZY@@@'+so_val+'@@@'+so_val+'@@@http://static.yingyonghui.com/icon/128/6609198.png');
                ZDZY(so_val);
                break;
			case 'ZYSOSO_TXT':
				FX_ZYS('ZYSO@@@'+so_val+'@@@'+so_val+'@@@http://static.yingyonghui.com/icon/128/6609198.png');
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
				FX_ZYS('XMLYSO@@@'+so_val+'@@@'+so_val+'@@@http://static.yingyonghui.com/icon/128/6389978.png');
                XMLYSO(so_val);
                break;
            case 'AP_SO':
                AIPAISO(so_val);
                break;
            case 'TBK_SO':
                TAOBAOSO(so_val);
                break;
            case 'YZB_SO':
                YZBSO(so_val);
                break;
            case 'LZTV_SO':
                LZTVSO(so_val);
                break;
            case 'HUAJ_SO':
                HUAJSO(so_val);
                break;
            case 'SGTP_SO':
                SGPNGS(so_val);
                break;
            case 'KL_SO':
                KLFM(so_val);
                break;
            case 'ERWMA':
				FX_ZYS('MAPNG@@@'+so_val+'@@@'+so_val+'@@@http://static.yingyonghui.com/icon/128/6609272.png');
                MAPNG(so_val);
                break;
            case 'VIPJX':
				FX_ZYS('VIPJX@@@'+so_val+'@@@'+so_val+'@@@http://static.yingyonghui.com/icon/128/6298559.png');
                VIPJX(so_val);
                break;
            default:
				FX_ZYS('QQYY@@@'+so_val+'@@@'+so_val+'@@@http://static.yingyonghui.com/icon/128/6383836.png');
                QQYY(so_val);
        }
    })
});
$(document).ready(function() {
    WNJP = new jPlayerPlaylist({
        jPlayer: "#jquery_jplayer_1",
        cssSelectorAncestor: "#jp_container_1"
    }, [], {
        ready: function() {
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
        supplied: "mp3,m4v,m4a",
        wmode: "window",
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
            document.title = event.jPlayer.status.media.title;
            if (event.jPlayer.status.formatType === "m4v") {
                $("#jquery_jplayer_1").css("height", JP_HG() + "px");
                $("#jp_video_0").css({
                    "height": "100%",
                    "margin-top": "0px"
                });
                $("#BBZY").css({
                    "margin-bottom": "" + (parseInt(JP_HG()) + 65) + "px"
                })
            } else if (event.jPlayer.status.formatType === "mp3" || event.jPlayer.status.formatType === "m4a") {
                $("#jquery_jplayer_1").css("height", "1px");
                $("#BBZY").css({
                    "margin-bottom": "65px"
                })
            }
            if (typeof(event.jPlayer.status.media.poster) === 'undefined') {
                mypng = 'http://s.wo0.cn/logo.png'
            } else {
                mypng = (event.jPlayer.status.media.poster)
            }
        },
        pause: function(event) {
            $("#jquery_jplayer_1").css("height", "1px");
            $("#jp_video_0").css("margin-top", "65px");
            $("#BBZY").css({
                "margin-bottom": "65px"
            })
        },
        stop: function(event) {
            $("#jquery_jplayer_1").css("height", "1px");
            $("#jp_video_0").css("margin-top", "65px");
            $("#BBZY").css({
                "margin-bottom": "65px"
            })
        },
        error: function(event) {
            $("#jquery_jplayer_1").css("height", "1px");
            $("#jp_video_0").css("margin-top", "65px");
            $("#BBZY").css({
                "margin-bottom": "65px"
            })
        },
        ended: function(event) {
            $("#jquery_jplayer_1").css("height", "1px");
            $("#jp_video_0").css("margin-top", "65px");
            $("#BBZY").css({
                "margin-bottom": "65px"
            })
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
        timeout: 8e3,
        success: function(data) {
            if(lsrc.match(/@([0-9a-zA-Z_-]+)@/)){
                QQYYS_success_jsonpCallback(data, lsrc);
                $(".JP_KG").hide();
                $(".GS_KG").show();
                $('html,body').animate({
                    scrollTop: '0px'
                }, 200);
				$("#UUUU_P").remove();
                $("img").lazyload({
                    effect: "fadeIn",
                    threshold: 200,
                    event: 'click',
                    container: $("#GS_HL"),
                    failurelimit: 10
                })
            }else{
                QQYY_success_jsonpCallback(data, lsrc);
                $(".GS_KG").hide();
                $(".JP_KG").show();
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
function JP_ADD(data){
	myx = data.match(/([a-z0-9]+),([A-Z0-9]+),(.+)/, "$1$2$3");
	myid = '{title:"'+myx[2]+'",'+myx[1]+':"'+myx[3]+'"}';
	WNJP.add(myid);
	WNJP.play(-1);
	return null;
}
function QQYY(lsrc) {
    if (lsrc.indexOf("http") > -1) {
		url_s = decodeURIComponent(lsrc);
		if (url_s.indexOf(".apk") > -1 || url_s.indexOf(".html") > -1) {
			window.open(url_s,'_blank');
		}else{
			AJAX(url_s);
		}
    } else {
        url_s = 'http://s.wo0.cn/o.php/QQZY_' + decodeURIComponent(lsrc)+'.jsonp?&p=1';//http://s.wo0.cn/php/qqyy.php?type=jsonp&so=
		AJAX(url_s);
    }
}

function QQYY_success_jsonpCallback(data, fy) {
    var myhz;
    jp_lb = '[';
    $.each(data, function(k, v) {
        jp_lb += '{' + v.type + ':"' + v.src + '",title:"' + v.label + '"},'
    });
    jp_lb += ']';
    eval("qqyy_lb=" + jp_lb);
    WNJP.setPlaylist(qqyy_lb);
    WNJP.play(0);
    if (fy.indexOf("http") > -1) {
        lb_lb = '';
        $.each(data, function(k, v) {
            if ((v.type).indexOf("m4v") > -1) {
                myhz = '.mp4'
            } else {
                myhz = '.mp3'
            }
			if (k % 2 == 0) {
                myxo = 'style="background-color: rgba(255, 255, 255, 0.3);"'
            } else {
                myxo = 'style="background-color: rgba(185, 185, 185, 0.5);"'
            }
			if ((v.src).indexOf(".html") > -1 || (v.src).indexOf("www.fun.tv") > -1 || (v.src).indexOf(".shtml") > -1 || (v.src).indexOf("bilibili.com/bangumi/play/") > -1 || (v.src).indexOf("bangumi.bilibili.com/anime/") > -1 || (v.src).indexOf("cntv.cn/video/") > -1) {
                lb_lb += '<div class="list-group-item" ' + myxo + '><span class="badge"><a href="#MModal" onclick="javascript:VIPJX(\'' + v.src + '\');"><span class="glyphicon glyphicon-download-alt" aria-hidden="true"></span></a></span><a href="#MModal" onclick="javascript:VIPJX(\'' + v.src + '\');"><p class="txt"><span class="glyphicon glyphicon-headphones" aria-hidden="true"></span>&nbsp;' + v.label + '</a></p></a></div>'
            } else {
                lb_lb += '<div class="list-group-item" ' + myxo + '><span class="badge"><a href="' + v.src + '" download="' + v.label + myhz + '"><span class="glyphicon glyphicon-download-alt" aria-hidden="true"></span></a></span><a href="javascript:WNJP.play(' + k + ');"><p class="txt"><span class="glyphicon glyphicon-headphones" aria-hidden="true"></span>&nbsp;' + v.label + '</a></p></a></div>'
            }
        });
        lb_lb += '';
        if (fy.indexOf("&p=") > -1) {
            myx = fy.match(/(.+)&p=([0-9]+)/, "$1$2");
            mys = myx[1];
            pn = myx[2];
            if ((parseInt(pn) - 5) <= 0) {
                pns = 1
            } else {
                pns = (parseInt(pn) - 5)
            }
            lb_fy = '</div><div class="text-center"><div class="pagination" id="UUUU_P" style="margin:3px 0 12px 0;"><ul class="pagination" style="margin:0 0 80px;"><li><a href="javascript:QQYY(\'' + mys + '&p=' + pns + '\');"><span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span></a></li>';
            for (var j = parseInt(pn) + 1; j < parseInt(pn) + 5; j++) {
                lb_fy += '<li><a href="javascript:QQYY(\'' + mys + '&p=' + j + '\');">' + j + '</a></li>'
            }
            lb_fy += '<li><a href="javascript:QQYY(\'' + mys + '&p=' + (parseInt(pn) + 5) + '\');"><span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span></a></li><li><a class="back-to-top" href="#top"><span class="glyphicon glyphicon-chevron-up" aria-hidden="true"></span></a></li></ul></div>'
        }
    } else {
        lb_lb = '';
        $.each(data, function(k, v) {
            if (k % 2 == 0) {
                myxo = 'style="background-color: rgba(255, 255, 255, 0.3);"'
            } else {
                myxo = 'style="background-color: rgba(185, 185, 185, 0.5);"'
            }
            lb_lb += '<div class="list-group-item" ' + myxo + '><span class="badge"><a href="' + v.src + '" download="' + v.label + '.m4a"><span class="glyphicon glyphicon-download-alt" aria-hidden="true"></span></a></span><a href="javascript:WNJP.play(' + k + ');"><p class="txt"><span class="glyphicon glyphicon-headphones" aria-hidden="true"></span>&nbsp;' + v.label + '</a></p></a></div>'
        });
		/*
		<span class="badge"><a href="' + v.src + '&type=flac" download="' + v.label + '.flac">FLAC</a></span><span class="badge"><a href="' + v.src + '&type=ape" download="' + v.label + '.ape">APE</a></span><span class="badge"><a href="' + v.src + '&type=MP3" download="' + v.label + '.mp3">MP3</a></span><span class="badge"><a href="' + v.src + '&type=aac" download="' + v.label + '.m4a">AAC</a></span><span class="badge"><a href="' + v.src + '&type=ogg" download="' + v.label + '.ogg">OGG</a></span><span class="badge"><a href="' + v.src + '&type=mp3" download="' + v.label + '.mp3">mP3</a></span><span class="badge"><a href="' + v.src + '&type=M4A" download="' + v.label + '.m4a">M4A</a></span><br>
		*/
        lb_lb += '';
        if (fy.indexOf("____") > -1) {
            myx = fy.match(/^(.+)____([0-9]+)$/, "$1$2");
            mys = myx[1];
            pn = myx[2]
        } else {
            mys = fy;
            pn = 1
        } if ((parseInt(pn) - 5) <= 0) {
            pns = 1
        } else {
            pns = (parseInt(pn) - 5)
        }
        lb_fy = '</div><div class="text-center"><div class="pagination" id="UUUU_P" style="margin:3px 0 12px 0;"><ul class="pagination" style="margin:0 0 80px;"><li><a href="javascript:QQYY(\'' + mys + '____' + pns + '\');"><span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span></a></li>';
        for (var j = parseInt(pn) + 1; j < parseInt(pn) + 5; j++) {
            lb_fy += '<li><a href="javascript:QQYY(\'' + mys + '____' + j + '\');">' + j + '</a></li>'
        }
        lb_fy += '<li><a href="javascript:QQYY(\'' + mys + '____' + (parseInt(pn) + 5) + '\');"><span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span></a></li><li><a class="back-to-top" href="#top"><span class="glyphicon glyphicon-chevron-up" aria-hidden="true"></span></a></li></ul></div>'
    }
	if (typeof(lb_fy) == "undefined" || fy.indexOf("KAN360_") > -1 || parseInt(data.length) <= 3) {
        lb_fy = ''
    }
    $("#JP_HL").html(lb_lb + lb_fy)
}

function QQYYS_success_jsonpCallback(data, fy) {
    lb_lb = '<div class="bs-glyphicons"><ul class="bs-glyphicons-list">';
    $.each(data, function(k, v) {
        mysrc = fy.match(/@([0-9a-zA-Z_]+)@/, "$1")[1];
        if ((v.PNG).indexOf("GS@") > -1) {
            mypng = (v.PNG).replace('GS@', 'http://i.gtimg.cn/music/photo/mid_singer_150/')
        } else {
            mypng = (v.PNG)
        } if ((v.HTML).indexOf("@@@") > -1) {
            myx = (/(.+)@@@(.+)@@@(.+)/g).exec(v.HTML);
            myld = myx[1];
            myid = myx[2];
            mymz = myx[3];
            if (mysrc === 'tbke') {
                lb_lb += '<li><a href="#MModal" onclick="javascript:' + myld + '(\'' + mymz + '__' + myid + '__' + mypng + '\');"><img src="/ing.gif" data-original="' + mypng + '" width="60" height="60" class="r r-2x img-full"></a><span class="glyphicon-class"><a href="#" class="text-ellipsis" title="' + mymz + '">' + mymz + '</a></span></li>'
            } else {
                lb_lb += '<li><a href="javascript:' + myld + '(\'' + myid + '\');" onclick="javascript:FX_ZYS(\'' + v.HTML + '@@@' + mypng + '\');"><img src="/ing.gif" data-original="' + mypng + '" width="60" height="60" class="r r-2x img-full"></a><span class="glyphicon-class"><a href="javascript:' + myld + '(\'' + myid + '\')" class="text-ellipsis" title="' + mymz + '">' + mymz + '</a></span></li>'
            }
        } else {
            lb_lb += '<li><a href="javascript:' + mysrc + '(\'' + v.HTML + '\');" onclick="javascript:FX_ZYS(\'' + v.HTML + '@@@' + mypng + '\');"><img src="/ing.gif" data-original="' + mypng + '" width="60" height="60" class="r r-2x img-full"></a><span class="glyphicon-class"><a href="javascript:' + mysrc + '(\'' + v.HTML + '\');" class="text-ellipsis" title="' + v.HTML + '">' + v.HTML + '</a></span></li>'
        }
    });
    lb_lb += '</ul></div>';
    if (fy.indexOf("&pg=") > -1) {
        var kj_fy;
        if (mysrc === 'tbke') {
            kj_fy = 'tbke'
        } else {
            kj_fy = 'all'
        }
        myx = fy.match(/(.+)&pg=([0-9]+)/, "$1$2");
        mys = myx[1];
        pn = myx[2];
        if ((parseInt(pn) - 5) <= 0) {
            pns = 1
        } else {
            pns = (parseInt(pn) - 5)
        }
        lb_fy = '</div><div class="text-center" style="margin: 0 1px 100px 1px;"><div class="PAGE"><ul class="pagination" id="UUUU_PG"><li><a href="javascript:QQYY(\'' + mys + '&pg=' + pns + '&@' + kj_fy + '@\');"><span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span></a></li>';
        for (var j = parseInt(pn) + 1; j < parseInt(pn) + 5; j++) {
            lb_fy += '<li><a href="javascript:QQYY(\'' + mys + '&pg=' + j + '&@' + kj_fy + '@\');">' + j + '</a></li>'
        }
        lb_fy += '<li><a href="javascript:QQYY(\'' + mys + '&pg=' + (parseInt(pn) + 5) + '&@' + kj_fy + '@\');"><span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span></a></li><li><a class="back-to-top" href="#top"><span class="glyphicon glyphicon-chevron-up" aria-hidden="true"></span></a></li></ul></div>'
    }else{
		lb_lb += '<div class="text-center" style="margin: 0 1px 100px 1px;"></div>';
	}
    if (fy.indexOf("@x@.json") > -1) {
        lb_fy = ''
    }
    if (typeof(lb_fy) == "undefined" || fy.indexOf(".txt") > -1 || parseInt(data.length) <= 3) {
        lb_fy = ''
    }
    $('#GS_HL').html(lb_lb + lb_fy)
}

function KUGOU(lsrc) {
    if (lsrc.indexOf("@") > -1) {
        myx = (/^(.+)@([0-9]+)$/g).exec(lsrc);
        url_s = myx[1];
        url_p = myx[2]
    } else {
        url_s = lsrc;
        url_p = 1
    }
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
            kglist_success_jsonpCallback(strdata.data.lists, url_s, url_p);//info
            $(".GS_KG").hide();
            $(".JP_KG").show();
            $('html,body').animate({
                scrollTop: '0px'
            }, 200)
        }
    })
}

function kglist_success_jsonpCallback(data, kid, pn) {
    jp_lb = '[';var myss,mysss;
    $.each(data, function(k, v) {
        jp_lb += '{mp3:"http://s.wo0.cn/o.php/KUGOU_' + v.FileHash + '.mp3",title:"' + safeStr(v.FileName) + '"},'//hash filename HQFileHash MvHash SQFileHash
    });
    jp_lb += ']';
    eval("kugou_lb=" + jp_lb);
    WNJP.setPlaylist(kugou_lb);
    WNJP.play(0);
    lb_lb = '';
    $.each(data, function(k, v) {
        if (k % 2 == 0) {
            myxo = 'style="background-color: rgba(255, 255, 255, 0.3);"'
        } else {
            myxo = 'style="background-color: rgba(185, 185, 185, 0.5);"'
        }
		if ((v.HQExtName).indexOf("mp3") > -1) {
			myss = '&nbsp;<a href="http://s.wo0.cn/o.php/KUGOU_' + v.HQFileHash + '.mp3" download="' + safeStr(v.FileName) + '.mp3">HQ</a>&nbsp;';
		}else{myss = '&nbsp;'}
		if ((v.SQExtName).indexOf("flac") > -1) {
			mysss = '&nbsp;<a href="http://s.wo0.cn/o.php/KUGOU_' + v.SQFileHash + '.mp3" download="' + safeStr(v.FileName) + '.flac">SQ</a>&nbsp;';
		}else{mysss = '&nbsp;'}
        lb_lb += '<div class="list-group-item" ' + myxo + '><span class="badge">' + mysss + myss + '&nbsp;<a href="http://s.wo0.cn/o.php/KUGOU_' + v.FileHash + '.mp3" download="' + safeStr(v.FileName) + '.mp3"><span class="glyphicon glyphicon-download-alt" aria-hidden="true"></span></a>&nbsp;</span><a href="javascript:WNJP.play(' + k + ');"><p class="txt"><span class="glyphicon glyphicon-headphones" aria-hidden="true"></span>&nbsp;' + safeStr(v.FileName) + '</a></p></a></div>'
    });
    lb_lb += '';
    if ((parseInt(pn) - 5) <= 0) {
        pns = 1
    } else {
        pns = (parseInt(pn) - 5)
    }
    lb_fy = '</div><div class="text-center"><div class="pagination" style="margin:3px 0 12px 0;"><ul class="pagination" style="margin:0 0 38px;"><li><a href="javascript:KUGOU(\'' + kid + '@' + pns + '\');"><span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span></a></li>';
    for (var j = parseInt(pn) + 1; j < parseInt(pn) + 5; j++) {
        lb_fy += '<li><a href="javascript:KUGOU(\'' + kid + '@' + j + '\');">' + j + '</a></li>'
    }
    lb_fy += '<li><a href="javascript:KUGOU(\'' + kid + '@' + (parseInt(pn) + 5) + '\');"><span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span></a></li><li><a class="back-to-top" href="#top"><span class="glyphicon glyphicon-chevron-up" aria-hidden="true"></span></a></li></ul></div>';
    if (typeof(lb_fy) == "undefined" || parseInt(data.length) <= 3) {
        lb_fy = ''
    }
    $("#JP_HL").html(lb_lb + lb_fy)
}

function KLFM(lsrc) {
    var kl_01;
    var kl_src;
    var kl_pg;
    var kl_url;
    var kl_data;
    if (lsrc.indexOf("@") > -1) {
        kl_01 = (/^([0-9]+)@([0-9]+)$/g).exec(lsrc);
        kl_src = kl_01[1];
        kl_pg = kl_01[2];
        kl_url = 'http://m.kaolafm.com/webapi/audios/list';
        kl_data = "id=" + kl_src + "&pagesize=50&pagenum=" + kl_pg + "&sorttype=1"
    } else if (lsrc.indexOf("_") > -1) {
        kl_01 = (/^([0-9]+)_([0-9]+)$/g).exec(lsrc);
        kl_src = kl_01[1];
        kl_pg = kl_01[2];
        kl_url = 'http://m.kaolafm.com/webapi/resource/search';
        kl_data = "cid=" + kl_src + "&rtype=20000&sorttype=HOT_RANK_DESC&pagesize=50&pagenum=" + kl_pg + ""
    } else {
        kl_src = lsrc;
        kl_pg = 1;
        kl_url = 'http://m.kaolafm.com/webapi/audios/list';
        kl_data = "id=" + kl_src + "&pagesize=50&pagenum=" + kl_pg + "&sorttype=1"
    }
    $.ajax({
        cache: true,
        async: true,
        url: kl_url,
        data: kl_data,
        type: "GET",
        dataType: "jsonp",
        jsonpCallback: 'success_jsonpCallback',
        contentType: "application/jsonp; charset=utf-8",
        timeout: 8e3,
        success: function(data) {
            if (lsrc.indexOf("_") > -1) {
                kaolalists_success_jsonpCallback(data.result, kl_src, kl_pg);
                $(".JP_KG").hide();
                $(".GS_KG").show();
                $('html,body').animate({
                    scrollTop: '0px'
                }, 200);
                $("img").lazyload({
                    effect: "fadeIn",
                    threshold: 200,
                    event: 'click',
                    container: $("#GS_HL"),
                    failurelimit: 10
                })
            } else {
                kaolalist_success_jsonpCallback(data.result, kl_src, kl_pg);
                $(".GS_KG").hide();
                $(".JP_KG").show();
                $('html,body').animate({
                    scrollTop: '0px'
                }, 200)
            }
        }
    })
}

function kaolalist_success_jsonpCallback(data, lid, pn) {
    var kid = data.dataList[0].albumId;
    jp_lb = '[';
    $.each(data.dataList, function(k, v) {
        jp_lb += '{mp3:"' + v.mp3PlayUrl + '",title:"' + v.audioName + '"},'
    });
    jp_lb += ']';
    eval("kaola_lb=" + jp_lb);
    WNJP.setPlaylist(kaola_lb);
    WNJP.play(0);
    lb_lb = '';
    $.each(data.dataList, function(k, v) {
        if (k % 2 == 0) {
            myxo = 'style="background-color: rgba(255, 255, 255, 0.3);"'
        } else {
            myxo = 'style="background-color: rgba(185, 185, 185, 0.5);"'
        }
        lb_lb += '<div class="list-group-item" ' + myxo + '><span class="badge"><a href="' + v.mp3PlayUrl + '" download="' + v.audioName + '.mp3"><span class="glyphicon glyphicon-download-alt" aria-hidden="true"></span></a></span><a href="javascript:WNJP.play(' + k + ');"><p class="txt"><span class="glyphicon glyphicon-headphones" aria-hidden="true"></span>&nbsp;' + v.audioName + '</a></p></a></div>'
    });
    lb_lb += '';
    if ((parseInt(pn) - 5) <= 0) {
        pns = 1
    } else {
        pns = (parseInt(pn) - 5)
    }
    lb_fy = '</div><div class="text-center"><div class="pagination" style="margin:3px 0 12px 0;"><ul class="pagination" style="margin:0 0 38px;"><li><a href="javascript:KLFM(\'' + kid + '@' + pns + '\');"><span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span></a></li>';
    for (var j = parseInt(pn) + 1; j < parseInt(pn) + 5; j++) {
        lb_fy += '<li><a href="javascript:KLFM(\'' + kid + '@' + j + '\');">' + j + '</a></li>'
    }
    lb_fy += '<li><a href="javascript:KLFM(\'' + kid + '@' + (parseInt(pn) + 5) + '\');"><span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span></a></li><li><a class="back-to-top" href="#top"><span class="glyphicon glyphicon-chevron-up" aria-hidden="true"></span></a></li></ul></div>';
    if (typeof(lb_fy) == "undefined" || parseInt((data.dataList).length) <= 3) {
        lb_fy = ''
    }
    $("#JP_HL").html(lb_lb + lb_fy)
}

function kaolalists_success_jsonpCallback(data, lid, pn) {
    lb_lb = '<div class="bs-glyphicons"><ul class="bs-glyphicons-list">';
    $.each(data.dataList, function(k, v) {
        if ((v.pic).indexOf("/default.jpg") > -1) {
            mypng = (v.pic).replace('/default.jpg', '/100_100.jpg')
        } else {
            mypng = (v.pic)
        }
        lb_lb += '<li><a href="javascript:KLFM(\'' + v.id + '@1\');" onclick="javascript:FX_ZYS(\'KLFM@@@' + v.id + '@@@' + v.name + '@@@' + mypng + '\');"><img src="/ing.gif" data-original="' + mypng + '" width="60" height="60" class="r r-2x img-full"></a><span class="glyphicon-class"><a href="javascript:KLFM(\'' + v.id + '@1\');" class="text-ellipsis" title="' + v.name + '">' + v.name + '</a></span></li>'
    });
    lb_lb += '</ul></div>';
    if ((parseInt(pn) - 5) <= 0) {
        pns = 1
    } else {
        pns = (parseInt(pn) - 5)
    }
    lb_fy = '</div><div class="text-center"><div class="pagination" style="margin:3px 0 12px 0;"><ul class="pagination" style="margin:0 0 38px;"><li><a href="javascript:KLFM(\'' + lid + '_' + (pns) + '\');"><span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span></a></li>';
    for (var j = parseInt(pn) + 1; j < parseInt(pn) + 5; j++) {
        lb_fy += '<li><a href="javascript:KLFM(\'' + lid + '_' + j + '\');">' + j + '</a></li>'
    }
    lb_fy += '<li><a href="javascript:KLFM(\'' + lid + '_' + (parseInt(pn) + 7) + '\');"><span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span></a></li><li><a class="back-to-top" href="#top"><span class="glyphicon glyphicon-chevron-up" aria-hidden="true"></span></a></li></ul></div>';
    if (typeof(lb_fy) == "undefined" || parseInt((data.dataList).length) <= 3) {
        lb_fy = ''
    }
    $('#GS_HL').html(lb_lb + lb_fy)
}

function SGDJ(lsrc) {
    if (lsrc.indexOf("/") > -1) {
        return QQYY('http://s.wo0.cn/php/ik123.php?lid=' + lsrc + '&p=1')
    } else {
        return QQYY('http://s.wo0.cn/php/ik123.php?kid=' + lsrc + '')
    }
}
function KANSP(lsrc) {
    return QQYY('http://s.wo0.cn/o.php/KAN360_' + lsrc + '.jsonp?@QQYY@')
}
function ZYSOTXT(lsrc,xxx) {
    return QQYY('http://s.wo0.cn/o.php/ZYSO_' + lsrc + '-1-S00' + xxx + '.txt?@all@@&pg=1')
}
function YYT(lsrc) {
    return QQYY('http://s.wo0.cn/php/yinyuetai.php?yyt=' + lsrc + '&p=1')
}

function ZDZY(lsrc) {
    return QQYY('http://s.wo0.cn/o.php/ZYSO_' + lsrc + '-1-SO.jsonp?@all@')
}

function WYYY(lsrc) {
    return QQYY('http://s.wo0.cn/php/163.php?so=' + lsrc + '&p=1')
}
function YYHDJ(lsrc) {
    QQYY('http://s.wo0.cn/o.php/YYHDJ_'+lsrc+'.jsonp?&p=1')
}
function MEIPAI(lsrc) {
    return QQYY('http://s.wo0.cn/php/meipai.php?j=' + lsrc + '&p=1')
}

function AIPAISO(lsrc) {
    return QQYY('http://s.wo0.cn/php/aipai.php?so=' + lsrc + '&p=1')
}
function KUGOUS(lsrc) {
    return QQYY('http://s.wo0.cn/o.php/KUGOU_' + lsrc + '.jsonp')
}
function APKS(lsrc) {
    return QQYY('http://s.wo0.cn/o.php/ZDFS_' + lsrc + '.jsonp?@apk@&pg=1')
}
function KUWOS(lsrc) {
    return QQYY('http://s.wo0.cn/o.php/KUWO_' + lsrc + '.jsonp?&p=0')
}
function XIAMIS(lsrc) {
    return QQYY('http://s.wo0.cn/o.php/XIAMI_' + lsrc + '.jsonp')
}
function MIGUS(lsrc) {
    return QQYY('http://s.wo0.cn/o.php/MIGU_' + lsrc + '.jsonp?&p=1')
}
function YYSQ(lsrc) {
    return QQYY('http://s.wo0.cn/o.php/YYMV_' + lsrc + '-1.jsonp')
}

function TAOBAOSO(lsrc) {
    return QQYY('http://s.wo0.cn/php/tbke.php?so=' + lsrc + '&pg=1&@tbke@.json')
}

function XMLYFM(lsrc) {
    return QQYY('http://s.wo0.cn/php/xmly.php?lid=' + lsrc + '&p=1')
}

function PANDA(lsrc) {
    return QQYY('http://s.wo0.cn/php/panda.php?lid=' + lsrc + '&p=1')
}

function YZBTV(lsrc) {
    return QQYY('http://s.wo0.cn/php/panda.php?yzbqid=' + lsrc + '&p=1')
}

function YZBSO(lsrc) {
    return QQYY('http://s.wo0.cn/php/panda.php?yzbso=' + lsrc + '&pg=1&@yzbtv@.json')
}

function DOUYU(lsrc) {
    return QQYY('http://s.wo0.cn/php/panda.php?dylid=' + lsrc + '&p=1')
}

function HUAJ(lsrc) {
    return QQYY('http://s.wo0.cn/php/panda.php?hjlid=' + lsrc + '&p=1')
}

function HUAJSO(lsrc) {
    return QQYY('http://s.wo0.cn/php/panda.php?hjso=' + lsrc + '&p=1')
}

function LZTVSO(lsrc) {
    return QQYY('http://s.wo0.cn/o.php/LZZB_' + lsrc + '.jsonp?&p=0')
}

function BLIBLI(lsrc) {
    return QQYY('http://s.wo0.cn/php/panda.php?blilid=' + lsrc + '&p=1')
}

function QQDJS(lsrc) {
    return QQYY('http://s.wo0.cn/o.php/QQZB_' + lsrc + '.jsonp?&p=1')
}

function ZQTV(lsrc) {
    return QQYY('http://s.wo0.cn/php/panda.php?zqlid=' + lsrc + '&p=1')
}
function HUYATV(lsrc) {
    return QQYY('http://s.wo0.cn/o.php/HYZB_' + lsrc + '.jsonp?&p=1')
}
function XMLYSO(lsrc) {
    if (lsrc.indexOf("@") > -1) {
        myx = (/^(.+)@([0-9]+)$/g).exec(lsrc);
        url_s = myx[1];
        url_p = myx[2];
        return QQYY('http://s.wo0.cn/php/xmly.php?so=' + url_s + '&pg=' + url_p + '&@xmlyfm@.json')
    } else {
        return QQYY('http://s.wo0.cn/php/xmly.php?so=' + lsrc + '&pg=1&@xmlyfm@.json')
    }
}

function MGTV(ty_iv, pn, st) {
    return('');
}

function mgtvlist_success_jsonpCallback(data, ty_iv, pn, st) {
    return('');
}

function mgtvlists_success_jsonpCallback(data, ty_iv, pn, st) {
    return('');
}

function mgtv_vid_pp(str) {
    return('');
}

function mgtv_vid_src(lid) {
    return('');
}

function mgtv_vid_list_success_jsonpCallback(strdata) {
    return('');
}

function mgtv_vid_id(data) {
    return('');
}

function VIPJX(data) {
    $(".jp-jplayer").jPlayer("stop");
    var sUserAgent = navigator.userAgent.toLowerCase();
    if (sUserAgent.match(/(iphone|ipad|ipod|android|symbianos|windows phone|ucweb|BlackBerry|midp|mobile)/i)) {
        mys = '<h5>友情提醒:以下为第三方-资源||且勿相信视频内广告信息</h5><hr><a class="btn btn-default" href="https://api.sigujx.com/?url=' + data + '" target="_Blank">25-思古</a>&nbsp;<a class="btn btn-default" href="https://jx.ivito.cn/?url=' + data + '" target="_Blank">30-WD</a>&nbsp;<a class="btn btn-default" href="https://www.ckmov.vip/api.php?url=' + data + '" target="_Blank">28-MOV</a>&nbsp;<a class="btn btn-default" href="https://www.administratorw.com/video.php?url=' + data + '" target="_Blank">21-无名</a>&nbsp;<a class="btn btn-default" href="http://17kyun.com/api.php?url=' + data + '" target="_Blank">24-17kyun</a>&nbsp;<a class="btn btn-default" href="https://jx.618g.com/?url=' + data + '" target="_Blank">-1</a>&nbsp;<a class="btn btn-default" href="https://www.myxin.top/jx/api/?url=' + data + '" target="_Blank">-2</a>&nbsp;<a class="btn btn-default" href="https://www.kkflv.com/index.php?url=' + data + '" target="_Blank">-3</a>&nbsp;<a class="btn btn-default" href="http://jiexi.380k.com/?url=' + data + '" target="_Blank">4-黑云</a>&nbsp;<a class="btn btn-default" href="http://api.baiyug.vip/index.php?url=' + data + '" target="_Blank">5-百域</a>&nbsp;<a class="btn btn-default" href="https://jx40.net/url=' + data + '" target="_Blank">6-40</a>&nbsp;<a class="btn btn-default" href="http://okjx.cc/?url=' + data + '" target="_Blank">7-OK</a>&nbsp;<a class="btn btn-default" href="http://jiexi.071811.cc/jx2.php?url=' + data + '" target="_Blank">-8</a>&nbsp;<a class="btn btn-default" href="https://jx.99yyw.com/99/?url=' + data + '" target="_Blank">-9</a>&nbsp;<a class="btn btn-default" href="http://jx.618ge.com/?url=' + data + '" target="_Blank">-10</a>&nbsp;<a class="btn btn-default" href="http://jx.598110.com/?url=' + data + '" target="_Blank">11-598110</a>&nbsp;<a class="btn btn-default" href="https://cdn.yangju.vip/k/?url=' + data + '" target="_Blank">-12</a>&nbsp;<a class="btn btn-default" href="https://j.wfss100.com/?url=' + data + '" target="_Blank">-13</a>&nbsp;<a class="btn btn-default" href="https://vip.bljiex.com/?v=' + data + '" target="_Blank">14-BL</a>&nbsp;<a class="btn btn-default" href="https://cs.drgxj.com/?url=' + data + '" target="_Blank">-15</a>&nbsp;<a class="btn btn-default" href="https://api.sigujx.com/jx/?url=' + data + '" target="_Blank">-16</a>&nbsp;<a class="btn btn-default" href="http://jx.wslmf.com/?url=' + data + '" target="_Blank">-17</a>&nbsp;<a class="btn btn-default" href="https://api.47ks.com/webcloud/?v=' + data + '" target="_Blank">18-47</a>&nbsp;<a class="btn btn-default" href="http://jx.du2.cc/?url=' + data + '" target="_Blank">19-二度</a>&nbsp;<a class="btn btn-default" href="https://www.1717yun.com/jx/ty.php?url=' + data + '" target="_Blank">-20</a>&nbsp;<a class="btn btn-default" href="https://vip.mpos.ren/v/?url=' + data + '" target="_Blank">-22</a>&nbsp;<a class="btn btn-default" href="http://jqaaa.com/jx.php?url=' + data + '" target="_Blank">23-金桥</a>&nbsp;<a class="btn btn-default" href="http://jx.idc126.net/jx/?url=' + data + '" target="_Blank">26-126</a>&nbsp;<a class="btn btn-default" href="http://vip.jlsprh.com/?url=' + data + '" target="_Blank">-27</a>&nbsp;</a>&nbsp;</a>&nbsp;<a class="btn btn-default" href="https://cs.drgxj.com/?url=' + data + '" target="_Blank">29-DR</a>&nbsp;<a class="btn btn-default" href="https://z1.m1907.cn/?jx=' + data + '" target="_Blank">31-1907</a>&nbsp;<a class="btn btn-default" href="https://cdn.yangju.vip/k/?url=' + data + '" target="_Blank">32-YJ</a>&nbsp;<a class="btn btn-default" href="https://vip.mcyanyu.com/index.php?url=' + data + '" target="_Blank">33-JA</a>&nbsp;<a class="btn btn-default" href="https://jx.rdhk.net/?v=' + data + '" target="_Blank">34-RD</a>&nbsp;<a class="btn btn-default" href="https://www.kpezp.cn/jlexi.php?url=' + data + '" target="_Blank">35-XJ</a>&nbsp;<a class="btn btn-default" href="https://api.lhh.la/vip/?url=' + data + '" target="_Blank">36-HHL</a>&nbsp;<a class="btn btn-default" href="https://jx.dianyingguan.cn/?url=' + data + '" target="_Blank">37-XL</a>&nbsp;<a class="btn btn-default" href="https://jx.mw0.cc/?url=' + data + '" target="_Blank">38-XL</a>&nbsp;<a class="btn btn-default" href="https://www.33tn.cn/?url=' + data + '" target="_Blank">39-33</a>&nbsp;<a class="btn btn-default" href="https://py.ha12.xyz/sos/index.php?url=' + data + '" target="_Blank">40-HA12</a>&nbsp;<a class="btn btn-default" href="https://www.8090g.cn/?url=' + data + '" target="_Blank">41-8090</a>&nbsp;<a class="btn btn-default" href="https://vip.mpos.ren/v/?url=' + data + '" target="_Blank">42-人人</a>&nbsp;<a class="btn btn-default" href="http://jx.cesms.cn/?url=' + data + '" target="_Blank">43-大亨</a>&nbsp;<a class="btn btn-default" href="https://660e.com/?url=' + data + '" target="_Blank">44-乐乐</a>&nbsp;<a class="btn btn-default" href="https://www.administratorw.com/video.php?url=' + data + '" target="_Blank">45-无名2</a>&nbsp;<a class="btn btn-default" href="http://j.zz22x.com/jx/?url=' + data + '" target="_Blank">46-花园</a>&nbsp;<a class="btn btn-default" href="https://api.123zx.net/m3u8/play.html?id=' + data + '" target="_Blank">447-33uu</a>&nbsp;<a class="btn btn-default" href="https://2.08bk.com/?url=' + data + '" target="_Blank">48-小七</a>&nbsp;<a class="btn btn-default" href="https://jx.ab33.top/vip/?url=' + data + '" target="_Blank">52-ab</a>&nbsp;<a class="btn btn-default" href="https://fy.maosp.me:7788/?url=' + data + '" target="_Blank">猫视频</a>&nbsp;';
        $('#MModal').modal({
            show: true
        })
    } else {
        mys = '<h5>友情提醒:以下为第三方-资源||且勿相信视频内广告信息</h5><hr><a class="btn btn-default" href="https://api.sigujx.com/?url=' + data + '" target="_Blank">25-思古</a>&nbsp;<a class="btn btn-default" href="https://jx.ivito.cn/?url=' + data + '" target="_Blank">30-WD</a>&nbsp;<a class="btn btn-default" href="https://www.ckmov.vip/api.php?url=' + data + '" target="_Blank">28-MOV</a>&nbsp;<a class="btn btn-default" href="https://www.administratorw.com/video.php?url=' + data + '" target="_Blank">21-无名</a>&nbsp;<a class="btn btn-default" href="http://17kyun.com/api.php?url=' + data + '" target="_Blank">24-17kyun</a>&nbsp;<a class="btn btn-default" href="https://jx.618g.com/?url=' + data + '" target="_Blank">-1</a>&nbsp;<a class="btn btn-default" href="https://www.myxin.top/jx/api/?url=' + data + '" target="_Blank">-2</a>&nbsp;<a class="btn btn-default" href="https://www.kkflv.com/index.php?url=' + data + '" target="_Blank">-3</a>&nbsp;<a class="btn btn-default" href="http://jiexi.380k.com/?url=' + data + '" target="_Blank">-4-黑云</a>&nbsp;<a class="btn btn-default" href="http://api.baiyug.vip/index.php?url=' + data + '" target="_Blank">5-百域</a>&nbsp;<a class="btn btn-default" href="https://jx40.net/url=' + data + '" target="_Blank">6-40</a>&nbsp;<a class="btn btn-default" href="http://okjx.cc/?url=' + data + '" target="_Blank">7-OK</a>&nbsp;<a class="btn btn-default" href="http://jiexi.071811.cc/jx2.php?url=' + data + '" target="_Blank">-8</a>&nbsp;<a class="btn btn-default" href="https://jx.99yyw.com/99/?url=' + data + '" target="_Blank">-9</a>&nbsp;<a class="btn btn-default" href="http://jx.618ge.com/?url=' + data + '" target="_Blank">-10</a>&nbsp;<a class="btn btn-default" href="http://jx.598110.com/?url=' + data + '" target="_Blank">11-598110</a>&nbsp;<a class="btn btn-default" href="https://cdn.yangju.vip/k/?url=' + data + '" target="_Blank">-12</a>&nbsp;<a class="btn btn-default" href="https://j.wfss100.com/?url=' + data + '" target="_Blank">-13</a>&nbsp;<a class="btn btn-default" href="https://vip.bljiex.com/?v=' + data + '" target="_Blank">14-BL</a>&nbsp;<a class="btn btn-default" href="https://cs.drgxj.com/?url=' + data + '" target="_Blank">-15</a>&nbsp;<a class="btn btn-default" href="https://api.sigujx.com/jx/?url=' + data + '" target="_Blank">-16</a>&nbsp;<a class="btn btn-default" href="http://jx.wslmf.com/?url=' + data + '" target="_Blank">-17</a>&nbsp;<a class="btn btn-default" href="https://api.47ks.com/webcloud/?v=' + data + '" target="_Blank">18-47</a>&nbsp;<a class="btn btn-default" href="http://jx.du2.cc/?url=' + data + '" target="_Blank">19-二度</a>&nbsp;<a class="btn btn-default" href="https://www.1717yun.com/jx/ty.php?url=' + data + '" target="_Blank">-20</a>&nbsp;<a class="btn btn-default" href="https://vip.mpos.ren/v/?url=' + data + '" target="_Blank">-22</a>&nbsp;<a class="btn btn-default" href="http://jqaaa.com/jx.php?url=' + data + '" target="_Blank">23-金桥</a>&nbsp;<a class="btn btn-default" href="http://jx.idc126.net/jx/?url=' + data + '" target="_Blank">26-126</a>&nbsp;<a class="btn btn-default" href="http://vip.jlsprh.com/?url=' + data + '" target="_Blank">-27</a>&nbsp;</a>&nbsp;<a class="btn btn-default" href="https://cs.drgxj.com/?url=' + data + '" target="_Blank">29-DR</a>&nbsp;<a class="btn btn-default" href="https://z1.m1907.cn/?jx=' + data + '" target="_Blank">31-1907</a>&nbsp;<a class="btn btn-default" href="https://cdn.yangju.vip/k/?url=' + data + '" target="_Blank">32-YJ</a>&nbsp;<a class="btn btn-default" href="https://vip.mcyanyu.com/index.php?url=' + data + '" target="_Blank">33-JA</a>&nbsp;<a class="btn btn-default" href="https://jx.rdhk.net/?v=' + data + '" target="_Blank">34-RD</a>&nbsp;<a class="btn btn-default" href="https://www.kpezp.cn/jlexi.php?url=' + data + '" target="_Blank">35-XJ</a>&nbsp;<a class="btn btn-default" href="https://api.lhh.la/vip/?url=' + data + '" target="_Blank">36-HHL</a>&nbsp;<a class="btn btn-default" href="https://jx.dianyingguan.cn/?url=' + data + '" target="_Blank">37-XL</a>&nbsp;<a class="btn btn-default" href="https://jx.mw0.cc/?url=' + data + '" target="_Blank">38-XL</a>&nbsp;<a class="btn btn-default" href="https://www.33tn.cn/?url=' + data + '" target="_Blank">39-33</a>&nbsp;<a class="btn btn-default" href="https://py.ha12.xyz/sos/index.php?url=' + data + '" target="_Blank">40-HA12</a>&nbsp;<a class="btn btn-default" href="https://www.8090g.cn/?url=' + data + '" target="_Blank">41-8090</a>&nbsp;<a class="btn btn-default" href="https://vip.mpos.ren/v/?url=' + data + '" target="_Blank">42-人人</a>&nbsp;<a class="btn btn-default" href="http://jx.cesms.cn/?url=' + data + '" target="_Blank">43-大亨</a>&nbsp;<a class="btn btn-default" href="https://660e.com/?url=' + data + '" target="_Blank">44-乐乐</a>&nbsp;<a class="btn btn-default" href="https://www.administratorw.com/video.php?url=' + data + '" target="_Blank">45-无名2</a>&nbsp;<a class="btn btn-default" href="http://j.zz22x.com/jx/?url=' + data + '" target="_Blank">46-花园</a>&nbsp;<a class="btn btn-default" href="https://api.123zx.net/m3u8/play.html?id=' + data + '" target="_Blank">447-33uu</a>&nbsp;<a class="btn btn-default" href="https://2.08bk.com/?url=' + data + '" target="_Blank">48-小七</a>&nbsp;<a class="btn btn-default" href="https://jx.ab33.top/vip/?url=' + data + '" target="_Blank">52-ab</a>&nbsp;<a class="btn btn-default" href="https://fy.maosp.me:7788/?url=' + data + '" target="_Blank">猫视频</a>&nbsp;';
        $('#MModal').modal({
            show: true
        })
    }
    $("#KJ_IF").html(mys)
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

function LETV(lsrc) {
    return('');
}

function LETV_lid(lid) {
    return('');
}

function LETV_vid_list_success_jsonpCallback(strdata) {
    return('');
}

function PNGS(lid) {
    if (lid.indexOf("_") > -1) {
        mys = 's.wo0.cn';
        myx = (/^([0-9]+)_([0-9]+)$/g).exec(lid);
        url_s = myx[1];
        url_p = parseInt((myx[2]) * 60);
        myid = myx[2]
    } else {
        url_s = lid;
        url_p = 0
    }
    $.ajax({
        cache: true,
        async: true,
        type: "GET",
        url: 'http://s.wo0.cn/php/apipng.php',
        data: "cid=" + url_s + "&start=" + url_p + "&count=30",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        timeout: 8e3,
        success: function(jsonData) {
            var datas = jsonData.data;
            lb_lb = '<div class="bs-glyphicons"><ul class="bs-glyphicons-list">';
            $.each(datas, function(k, v) {
                if (typeof(v.utag) == "undefined") {
                    mymz = '图片资源'
                } else {
                    mymz = v.utag
                }
                mypng = decode360Url((v.url), 48, 48, 100);
                lb_lb += '<li><a href="#MModal" onclick="javascript:KJ_PNG(\'' + v.url + '\');"><img src="/ing.gif" data-original="' + mypng + '" width="60" height="60" class="r r-2x img-full"></a><span class="glyphicon-class"><a href="#" class="text-ellipsis" title="' + mymz + '">' + mymz + '</a></span></li>'
            });
            lb_lb += '</ul></div>';
            pn = myid;
            if ((parseInt(pn) - 5) <= 0) {
                pns = 0
            } else {
                pns = (parseInt(pn) - 5)
            }
            lb_fy = '</div><div class="text-center"><div class="pagination" style="margin:3px 0 12px 0;"><ul class="pagination" style="margin:0 0 38px;"><li><a href="javascript:PNGS(\'' + url_s + '_' + pns + '\');"><span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span></a></li>';
            for (var j = parseInt(pn) + 1; j < parseInt(pn) + 5; j++) {
                lb_fy += '<li><a href="javascript:PNGS(\'' + url_s + '_' + j + '\');">' + j + '</a></li>'
            }
            lb_fy += '<li><a href="javascript:PNGS(\'' + url_s + '_' + (parseInt(pn) + 5) + '\');"><span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span></a></li><li><a class="back-to-top" href="#top"><span class="glyphicon glyphicon-chevron-up" aria-hidden="true"></span></a></li></ul></div>';
            if (typeof(lb_fy) == "undefined" || parseInt(datas.length) <= 3) {
                lb_fy = ''
            }
            $('#GS_HL').html(lb_lb + lb_fy);
            $(".JP_KG").hide();
            $(".GS_KG").show();
            $('html,body').animate({
                scrollTop: '0px'
            }, 200);
            $("img").lazyload({
                effect: "fadeIn",
                threshold: 200,
                event: 'click',
                container: $("#GS_HL"),
                failurelimit: 10
            })
        }
    })
}

function KJ_PNG(data) {
    var png_0;
    var png_1;
    var png_2;
    var png_3;
    var png_4;
    var png_5;
    var png_6;
    png_0 = decode360Url(data, 0, 0, 100);
    png_6 = decode360Url(data, 480, 320, 100);
    png_5 = decode360Url(data, 600, 420, 100);
    png_1 = decode360Url(data, 800, 600, 100);
    png_2 = decode360Url(data, 1024, 768, 100);
    png_3 = decode360Url(data, 1440, 900, 100);
    png_4 = decode360Url(data, 2560, 1600, 100);
    mys = '<h5>以下为第三方-资源||且勿疯狂下载图片谢谢</h5><hr><div class="text-center"><img src="' + png_6 + '" width="100%" height="320"></div><hr><a class="btn btn-default" href="' + png_0 + '"  target="_Blank">原始尺寸</a><a class="btn btn-default" href="' + png_6 + '" target="_Blank">480x320</a><a class="btn btn-default" href="' + png_5 + '" target="_Blank">600x420</a><a class="btn btn-default" href="' + decode360Url(data, 640, 1136, 100) + '" target="_Blank">640x1136</a><a class="btn btn-default" href="' + png_1 + '" target="_Blank">800x600</a><a class="btn btn-default" href="' + decode360Url(data, 800, 1280, 100) + '" target="_Blank">800x1280</a><a class="btn btn-default" href="' + decode360Url(data, 1080, 1920, 100) + '" target="_Blank">1080x1920</a><a class="btn btn-default" href="' + png_2 + '" target="_Blank">1024x768</a><a class="btn btn-default" href="' + decode360Url(data, 1440, 2960, 100) + '" target="_Blank">1440x2960</a><a class="btn btn-default" href="' + png_3 + '" target="_Blank">1440x900</a><a class="btn btn-default" href="' + png_4 + '" target="_Blank">2560x1600</a>';
    $('#MModal').modal({
        show: true
    });
    $("#KJ_IF").html(mys)
}

function decode360Url(oldUrl, width, height, quality) {
    return oldUrl.replace("r\/__85", "m\/" + parseInt(width) + "_" + parseInt(height) + "_" + quality)
}

function TAOBAOK(data) {
    return('');
}

function SGPNGS(lsrc) {
    if (lsrc.indexOf("_") > -1) {
        myx = (/^(.+)_([0-9]+)$/g).exec(lsrc);
        url_s = myx[1];
        url_p = parseInt((myx[2]) * 60);
        myid = myx[2]
    } else {
        url_s = lsrc;
        url_p = 0;
        myid = 1
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
            lb_lb = '<div class="bs-glyphicons"><ul class="bs-glyphicons-list">';
            $.each(datas, function(k, v) {
                if (typeof(v.title) == "undefined") {
                    mymz = '图片资源'
                } else {
                    mymz = safeStr(unescape((v.title).replace(/\\u/g, '%u')))
                }
                mypng = v.locImageLink;
                lb_lb += '<li><a href="#MModal" onclick="javascript:KJ_SGPNG(\'' + mypng + '\');"><img src="/ing.gif" data-original="' + mypng + '" width="60" height="60" class="r r-2x img-full"></a><span class="glyphicon-class"><a href="#" class="text-ellipsis" title="' + mymz + '">' + mymz + '</a></span></li>'
            });
            lb_lb += '</ul></div>';
            pn = myid;
            if ((parseInt(pn) - 5) <= 0) {
                pns = 0
            } else {
                pns = (parseInt(pn) - 5)
            }
            lb_fy = '</div><div class="text-center" style="margin:0 1px 100px 1px;"><div class="pagination"><ul class="pagination"><li><a href="javascript:SGPNGS(\'' + url_s + '_' + pns + '\');"><span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span></a></li>';
            for (var j = parseInt(pn) + 1; j < parseInt(pn) + 5; j++) {
                lb_fy += '<li><a href="javascript:SGPNGS(\'' + url_s + '_' + j + '\');">' + j + '</a></li>'
            }
            lb_fy += '<li><a href="javascript:SGPNGS(\'' + url_s + '_' + (parseInt(pn) + 5) + '\');"><span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span></a></li><li><a class="back-to-top" href="#top"><span class="glyphicon glyphicon-chevron-up" aria-hidden="true"></span></a></li></ul></div>';
            if (typeof(lb_fy) == "undefined" || parseInt(datas.length) <= 3) {
                lb_fy = ''
            }
            $('#GS_HL').html(lb_lb + lb_fy);
            $(".JP_KG").hide();
            $(".GS_KG").show();
            $('html,body').animate({
                scrollTop: '0px'
            }, 200);
            $("img").lazyload({
                effect: "fadeIn",
                threshold: 200,
                event: 'click',
                container: $("#GS_HL"),
                failurelimit: 10
            })
        }
    })
}

function KJ_SGPNG(data) {
    mys = '<h5>以下为第三方-资源||且勿疯狂下载图片谢谢</h5><hr><div class="text-center"><img src="' + data + '" width="120" height="120"></div><hr><a class="btn btn-default" href="' + data + '" target="_Blank">原始尺寸</a>';
    $('#MModal').modal({
        show: true
    });
    $("#KJ_IF").html(mys)
}

function MAPNG(data) {
    mys = '<h5>以下为虾米接口提供二维码图片生成</h5><hr><div class="text-center"><img src="https://www.xiami.com/qrcode?u=' + data + '&w=110" width="110" height="110"></div><hr><a class="btn btn-default" href="https://www.xiami.com/qrcode?u=' + data + '&w=110" target="_Blank">原始尺寸</a>';
    $('#MModal').modal({
        show: true
    });
    $("#KJ_IF").html(mys)
}

function safeStr(str) {
    return str.replace(/<1>/g, "").replace(/<\/1>/g, "").replace(/</g, '').replace(/>/g, '').replace(/"/g, "").replace(/'/g, "")
}
$("#BT_JPS").on("click", function() {
    if ($(".JP_KG").is(":visible")) {} else {
        $(".JP_KG").show();
        $(".GS_KG").hide()
    }
});
$("#BT_ZYS").on("click", function() {
    if ($(".GS_KG").is(":visible")) {} else {
        $(".GS_KG").show();
        $(".JP_KG").hide()
    }
});
$("#BT_JP").on("click", function() {
    if ($(".JP_KG").is(":visible")) {} else {
        $(".JP_KG").show();
        $(".GS_KG").hide()
    }
});
$("#BT_ZY").on("click", function() {
    if ($(".GS_KG").is(":visible")) {} else {
        $(".GS_KG").show();
        $(".JP_KG").hide()
    }
});

function JP_HG() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    if (sUserAgent.match(/(iphone|ipad|ipod|android|symbianos|windows phone|ucweb|BlackBerry|midp|mobile)/i)) {
        mys = "300"
		$("#MYsearch").addClass("navbar-form navbar-left input-s-lg m-t m-l-n-xs hidden-lg");
		//$("#MYsearch").removeClass("hidden-sm");
    } else {
        mys = "500"
		$("#MYsearch").addClass("navbar-form navbar-left input-s-lg m-t m-l-n-xs hidden-sm");
		//$("#MYsearch").removeClass("hidden-lg");
		
    }
    return (mys)
}