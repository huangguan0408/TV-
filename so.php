<?php
error_reporting(0);
//header("Content-type: text/html; charset=utf-8");
if ($hash){
	hashcode($hash);
}
if ($_SESSION['founduser']) {
    echo getListContent();   
}else{
	$page = $_POST["username"];$keyword=URLdecode(iconv('gbk','utf-8',$_POST["password"]));
	//开始
	if ($page === 'music' || $page === 'video' || $page === 'wmp' || $page === 'swf' || $page === 'woniu' || $page === 'm3u8' || $page === 'merge' || $page === 'lists' && $keyword) {
		$src = strtr($page,array('music'=>'type="1" src','video'=>'type="2" src','wmp'=>'type="3" src','swf'=>'type="4" src','merge'=>'type="woniu" src','lists'=>'list_src','woniu'=>'type="woniu" src','m3u8'=>'type="m3u8" src'));
		$xml.= '<m '.$src.'="'.$keyword.'" label="'.$keyword.'"/>'."\n";
	}else if ($page === 'rtmp' && $keyword) {
		$sarr=substr(strrchr($keyword, "/"), 1);
		$sar=strtr($keyword,array(''.$sarr.''=>''));
		$xml.= '<m type="2" src="'.$sarr.'" rtmp="'.$sar.'" label="'.$keyword.'"/>'."\n";
	}else if ($page === 'kugou' && $keyword) {
		$b2 = C_R("http://mobilecdn.kugou.com/api/v3/search/song?format=jsonp&page=1&pagesize=1000&showtype=1&callback=kgJSONP833810229&keyword=".urlencode($keyword));
		$b = strtr($b2,array('kgJSONP833810229({'=>'{','})'=>'}'));
		$json = json_decode($b)->data->info;
		foreach($json as $k=>$v){
			//$label=preg_replace("#\\\u([0-9a-f]{4})#ie","iconv('UCS-2BE','UTF-8',pack('H4','\\1'))",$c_2[1][$k]);
			$label = $v->filename;
			$u = explode(" - ",$label);
			//kugou代理解析自己写个
			$xmls .= '<m src="http://s.wo0.cn/o.php/KUGOU_'.($v->hash).'.mp3" image="http://pics.sc.chinaz.com/files/pic/pic9/201806/zzpic12286.jpg" label="'.TTHH($label).'"/>'."\n";
		}
		$xml.= "<m label=\"$keyword - KuGou\">".$xmls.'</m>';
	}
	echo "<list>\n".$xml."</list>";
}
//结束
//替换
function TTHH($str) {
	$strs = strtr($str,array('"'=>' ','\''=>' ','<'=>'《','>'=>'》','&amp;'=>'-','&lt;'=>' ','&gt;'=>' '));
	return $strs;
}
//抓取
function C_R($url) {
	$ch=curl_init();
  	curl_setopt($ch, CURLOPT_URL, $url);
  	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
  	curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 5);
  	curl_setopt($ch, CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']);
	curl_setopt ($ch, CURLOPT_REFERER, $url);
	curl_setopt($ch, CURLOPT_HTTPHEADER, array('X-FORWARDED-FOR:'.$_SERVER["REMOTE_ADDR"], 'CLIENT-IP:'.$_SERVER["REMOTE_ADDR"]));
  	$data=curl_exec($ch);
  	curl_close($ch);
  	return $data;
}
?>
