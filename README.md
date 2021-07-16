# FREEDTV

TV端自建接口地址： http://www.fj365.ml/tv/   http://fj365.gitee.io/cmp4/tv/

TV端自建CDN接口地址:  https://cdn.jsdelivr.net/gh/fj365/CMP4@master/tv/
<hr>

# ZYplayer

接口地址： http://www.fj365.ml/tv/zyplayer.json

CDN:  https://cdn.jsdelivr.net/gh/fj365/CMP4@master/tv/zyplayer.json
<hr>

# CMP4 

演示地址： http://www.fj365.ml/n.swf https://fj365.gitee.io/CMP4/

随机开场演示地址： http://www.fj365.ml/n9.swf?skin_id=2
<hr>
龒蜗牛V3皮肤功能配置
<hr>
<h3>config.xml使用说明：实例地址： http://www.fj365.ml/config.xml</h3>
<hr>
  so_handler = "http://s.wo0.cn/so.php" 设置搜索接口
  
  so_bg_xywh="-1200,0,2000,1000,0.8" 设置列表背景，位置，宽高，透明
  
  so_xywh="0,0,35P,240" 搜索尺寸位置
  
  so_info="酷狗音乐,kugou|蜗牛测试,woniu|M3U8测试,m3u8|音乐测试,music|视频测试,video|SWF测试,swf|merge测试,merge|WMP测试,wmp|列表测试,lists" 下拉搜索列表配合搜索接口使用
  
  so_keyduration="5000" 初始搜索内容滚动时间
  
  so_keywords="dj,孙露,雷婷,7妹,邓紫棋,庄心妍,孙燕姿,童可可,tara" 初始搜索滚动内容
  
  lists__xywh="0,50,35P,100P" 列表尺寸位置
  
  lists_info_xywh="0,80,120,1,5,0,50,0" 列表缩略图尺寸位置
  
  lists_info="默认列表,/logo.png#/list.xml|自己添加,/jp/logo.png#/list.xml" 缩略图下拉分类列表
  
  so_info1="默认列表,/list.xml|自己添加,/list.xml" 下拉分类列表
  
  lianxi_qq="121027740" 联系QQ
  
  share_url="http://w.wo0.cn/n.swf" 分享头CMP地址
  
  history_label = "历史记录" 历史记录名字
  
  history_position = "1" 
  
  history_max = "50000" 历史记录条数
  
  quickkeys_config = "view_play:p,view_stop:ctrl+shift+space,view_next:ctrl+right,view_prev:ctrl+left,view_fullscreen:ctrl+f,view_rewind:left,view_forward:right" 快捷键
<hr>
<h3>list.xml使用说明：实例地址：http://www.fj365.ml/list.xml</h3>
<hr>
  皮肤内置支持KRC歌词插件

  清晰度切换(列表格式：《m type="woniu" src="地址1" hd1="地址2" hd2="地址3"  hd3="地址4" label="清晰度切换"/》配合颓废新版清晰度切换插件

  支持RTMP(列表格式：《m type="woniu" src="rtmp://地址1" label="rtmp全址"/》

  注意插件解析识别后缀读取,代理解析没有后缀的使用 &.mp3 &.mp4 补后缀
  
  <p>代理解析多地址生成格式 <h5>1. 地址1@__@地址2@__@地址3@__@地址4@__@</h5> 实例地址：http://www.fj365.ml/p.txt</p>
<hr>
<hr>
<h3>crossdomain.xml使用说明：实例地址：http://www.fj365.ml/crossdomain.xml</h3>
<hr>
  策略文件限制白名单添加 《allow-access-from domain="*.fj365.ml" /》 白名单域名*.fj365.ml

  播放m3u8文件 或 代理解析 时要注意 对方网站策略文件是否限制域名
