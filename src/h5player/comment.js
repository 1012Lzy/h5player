// ==UserScript==
// @name         HTML5视频播放器增强脚本
// @name:en      HTML5 video player enhanced script
// @name:zh      HTML5视频播放器增强脚本
// @name:zh-TW   HTML5視頻播放器增強腳本
// @name:ja      HTML5ビデオプレーヤーの拡張スクリプト
// @name:ko      HTML5 비디오 플레이어 고급 스크립트
// @name:ru      HTML5 видео плеер улучшенный скрипт
// @name:de      HTML5 Video Player erweitertes Skript
// @namespace    https://github.com/xxxily/h5player
// @homepage     https://github.com/xxxily/h5player
// @version      3.7.8
// @description  视频增强脚本，支持所有H5视频网站，例如：B站、抖音、腾讯视频、优酷、爱奇艺、西瓜视频、油管（YouTube）、微博视频、知乎视频、搜狐视频、网易公开课、百度网盘、阿里云盘、ted、instagram、twitter等。全程快捷键控制，支持：倍速播放/加速播放、视频画面截图、画中画、网页全屏、调节亮度、饱和度、对比度、自定义配置功能增强等功能，为你提供愉悦的在线视频播放体验。还有视频广告快进、在线教程/教育视频倍速快学、视频文件下载等能力
// @description:en  Video enhancement script, supports all H5 video websites, such as: Bilibili, Douyin, Tencent Video, Youku, iQiyi, Xigua Video, YouTube, Weibo Video, Zhihu Video, Sohu Video, NetEase Open Course, Baidu network disk, Alibaba cloud disk, ted, instagram, twitter, etc. Full shortcut key control, support: double-speed playback/accelerated playback, video screenshots, picture-in-picture, full-screen web pages, adjusting brightness, saturation, contrast
// @description:zh  视频增强脚本，支持所有H5视频网站，例如：B站、抖音、腾讯视频、优酷、爱奇艺、西瓜视频、油管（YouTube）、微博视频、知乎视频、搜狐视频、网易公开课、百度网盘、阿里云盘、ted、instagram、twitter等。全程快捷键控制，支持：倍速播放/加速播放、视频画面截图、画中画、网页全屏、调节亮度、饱和度、对比度、自定义配置功能增强等功能，为你提供愉悦的在线视频播放体验。还有视频广告快进、在线教程/教育视频倍速快学、视频文件下载等能力
// @description:zh-TW  視頻增強腳本，支持所有H5視頻網站，例如：B站、抖音、騰訊視頻、優酷、愛奇藝、西瓜視頻、油管（YouTube）、微博視頻、知乎視頻、搜狐視頻、網易公開課、百度網盤、阿里雲盤、ted、instagram、twitter等。全程快捷鍵控制，支持：倍速播放/加速播放、視頻畫面截圖、畫中畫、網頁全屏、調節亮度、飽和度、對比度、自定義配置功能增強等功能，為你提供愉悅的在線視頻播放體驗。還有視頻廣告快進、在線教程/教育視頻倍速快學、視頻文件下載等能力
// @description:ja  ビデオ拡張スクリプトは、Bilibili、Douyin、Tencent Video、Youku、iQiyi、Xigua Video、YouTube、Weibo Video、Zhihu Video、Sohu Video、NetEase Open Course、Baidu ネットワーク ディスク、Alibaba クラウド ディスクなど、すべての H5 ビデオ Web サイトをサポートします。テッド、インスタグラム、ツイッターなど 完全なショートカット キー コントロール、サポート: 倍速再生/加速再生、ビデオ スクリーンショット、ピクチャー イン ピクチャー、フルスクリーン Web ページ、明るさ、彩度、コントラストの調整、カスタム構成の強化、その他の機能により、快適なオンラインを提供します。ビデオ再生体験。 ビデオ広告、オンライン チュートリアル/教育ビデオなどを早送りする機能もあります。
// @description:ko  비디오 향상 스크립트는 Bilibili, Douyin, Tencent Video, Youku, iQiyi, Xigua Video, YouTube, Weibo Video, Zhihu Video, Sohu Video, NetEase Open Course, Baidu 네트워크 디스크, Alibaba 클라우드 디스크와 같은 모든 H5 비디오 웹사이트를 지원합니다. 테드, 인스타그램, 트위터 등 전체 바로 1가기 키 제어, 지원: 배속 재생/가속 재생, 비디오 스크린샷, PIP(Picture-in-Picture), 전체 화면 웹 페이지, 밝기, 채도, 대비, 사용자 정의 구성 향상 및 기타 기능 조정, 쾌적한 온라인 환경 제공 비디오 재생 경험. 비디오 광고, 온라인 자습서/교육 비디오 등을 빨리 감기하는 기능도 있습니다.
// @description:ru  Сценарий улучшения видео поддерживает все видео-сайты H5, такие как: Bilibili, Douyin, Tencent Video, Youku, iQiyi, Xigua Video, YouTube, Weibo Video, Zhihu Video, Sohu Video, NetEase Open Course, сетевой диск Baidu, облачный диск Alibaba, Тед, инстаграм, твиттер и т.д. Полное управление клавишами быстрого доступа, поддержка: воспроизведение с удвоенной скоростью/ускоренное воспроизведение, скриншоты видео, картинка в картинке, полноэкранные веб-страницы
// @description:de  Videoverbesserungsskript, unterstützt alle H5-Videowebsites, wie z. ted, instagram, twitter usw. Vollständige Tastenkombinationssteuerung, Unterstützung: Wiedergabe mit doppelter Geschwindigkeit/beschleunigte Wiedergabe, Video-Screenshots, Bild-in-Bild, Vollbild-Webseiten, Anpassung von Helligkeit, Sättigung, Kontrast, benutzerdefinierte Konfigurationsverbesserungen und andere Funktionen
// @author       ankvps
// @icon         data:image/png;base64,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
// @match        *://*/*
// @exclude      *://yiyan.baidu.com/*
// @exclude      *://*.bing.com/search*
// @grant        unsafeWindow
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @grant        GM_listValues
// @grant        GM_addValueChangeListener
// @grant        GM_removeValueChangeListener
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_getTab
// @grant        GM_saveTab
// @grant        GM_getTabs
// @grant        GM_openInTab
// @grant        GM_setClipboard
// @run-at       document-start
// @license      GPL
// ==/UserScript==
(function (w) { if (w) { w.name = 'h5player' } })()
