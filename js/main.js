// Copyright Yannai A. Gonczarowski, all rights reserved.
function header(menu, current, mode) {
if (window.navigator.userAgent.match(/webkit/i) &&
window.navigator.userAgent.match(/mobile/i)) {
document.write('<div id="mobileclipper" style="display: none">' +
'<div id="scientificormusical" class="' + mode + '">' +
'<div class="scientific"></div>' +
'<div class="musical"></div>' +
'</div>' +
'</div>');
} else {
document.write('<div id="mobileclipper" style="display: none">' +
'<table id="scientificormusical" class="' + mode + '">' +
'<tr>' +
'<td class="scientific"></td>' +
'<td class="wave"></td>' +
'<td class="musical"></td>' +
'</tr>' +
'</table>' +
'</div>');
}
drawMenu(menu, current);
document.write('<br>');
}
function footer(menu, current, opt_other, opt_last_modified) {
document.write('<br clear="all">');
drawMenu(menu, current);
drawCopyright(opt_other, opt_last_modified);
}
function drawCopyright(opt_other, opt_last_modified) {
document.write('<p class="copyright preload">');
document.write('&copy; Yannai A. Gonczarowski');
if (opt_other != null) {
document.write('; ' + opt_other);
}
if (opt_last_modified != null) {
document.write('; content last modified: ' + opt_last_modified);
}
document.write('</p>');
}
function drawMenu(menu, current) {
document.write('<p class="menu">');
for (var i = 0; i < menu.length; ++i) {
var shouldLink = (i == current || menu[i].length == 1);
var external = (menu[i].length > 1 && menu[i][1].substr(0, 4) == 'http');
document.write('<' +
(shouldLink ?
'span' :
'a class="menuitem" href="' + menu[i][1] + '"' +
(menu[i].length == 2 ?
'' :
(' onclick="' + menu[i][2] + '; return ' +
(external ? 'true' : 'false') + '"'
)
) +
(external? ' target="_blank"' : '')
) +
' class="menuitem">');
document.write(menu[i][0]);
document.write('</' + (shouldLink ? 'span' : 'a') + '> ');
}
document.write('</p>');
}
function switchMode(mode) {
if (mode == 'undecided') {
document.body.style.overflow = 'hidden';
}
document.getElementById('mobileclipper').style.display = '';
window.setTimeout(function() {
setScientificOrMusicalHeight();
document.getElementById('scientificormusical').className = mode;
}, 20);
window.setTimeout(function() {
document.location = (mode == 'undecided' ? '../' : '../' + mode + '/');
}, mode == 'undecided' ? 1000 : 1200);
}
function reload() {
window.location.reload();
}
function setupListeners() {
window.onpageshow = reset;
window.onorientationchange = reload;
window.screen.onmozorientationchange = reload;
}
function resetToMode(mode) {
document.body.style.overflow = '';
document.getElementById('mobileclipper').style.display = 'none';
document.getElementById('scientificormusical').className = mode;
}
function setScientificOrMusicalHeight() {
var ua = window.navigator.userAgent;
if ((ua.match(/mobile/i) ||
ua.match(/android/i)) &&
!ua.match(/firefox/i) && !ua.match(/OPR/)) {
window.onresize = function() { window.setTimeout(reload, 700); };
var clipperHeight = window.innerHeight;
var sheet = document.styleSheets[0];
sheet.insertRule("#scientificormusical { height: " + clipperHeight*1.8 + " !important; top: 0 !important; }", 0);
sheet.insertRule("table#scientificormusical.erdosbacon { top: " + clipperHeight*-.8 + " !important; }", 0);
}
}
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-44056000-1']);
_gaq.push(['_trackPageview']);
(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
