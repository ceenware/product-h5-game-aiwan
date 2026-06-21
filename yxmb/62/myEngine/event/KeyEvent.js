/**
 * keytext
 */
(function() {var KeyEvent = function() {}
 /**
 * textkeytextasciitext
 */
 KeyEvent.__keyCodeMap = {VK_ESCAPE: 27, // ESCkey
 VK_RETURN: 13, // textkey
 VK_TAB: 9, // TABkey
 VK_CAPITAL: 20, // Caps Lockkey
 VK_SHIFT: 16, // Shiftkey
 VK_CONTROL: 17, // Ctrlkey
 VK_MENU: 18, // Altkey
 VK_SPACE: 32, // Space key
 VK_BACK: 8, // textkey
 VK_LWIN: 91, // lefttextkey
 VK_RWIN: 92, // righttextkey
 K_APPS: 93, // textrightkeytextkey

 VK_INSERT: 45, // Insertkey
 VK_HOME: 36, // Homekey
 VK_PRIOR: 33, // Page Up
 VK_NEXT: 34, // Page Down
 VK_END: 35, // Endkey
 VK_DELETE: 46, // Deletekey
 VK_LEFT: 37, // Arrow keys(←)
 VK_UP: 38, // Arrow keys(↑)
 VK_RIGHT: 39, // Arrow keys(→)
 VK_DOWN: 40, // Arrow keys(↓)

 VK_F1: 112, // F1key
 VK_F2: 113, // F2key
 VK_F3: 114, // F3key
 VK_F4: 115, // F4key
 VK_F5: 116, // F5key
 VK_F6: 117, // F6key
 VK_F7: 118, // F7key
 VK_F8: 119, // F8key
 VK_F9: 120, // F9key
 VK_F10: 121, // F10key
 VK_F11: 122, // F11key
 VK_F12: 123, // F12key

 VK_NUMLOCK: 144, // Num Lockkey
 VK_NUMPAD0: 96, // keypad0
 VK_NUMPAD1: 97, // keypad1
 VK_NUMPAD2: 98, // keypad2
 VK_NUMPAD3: 99, // keypad3
 VK_NUMPAD4: 100, // keypad4
 VK_NUMPAD5: 101, // keypad5
 VK_NUMPAD6: 102, // keypad6
 VK_NUMPAD7: 103, // keypad7
 VK_NUMPAD8: 104, // keypad8
 VK_NUMPAD9: 105, // keypad9
 VK_DECIMAL: 110, // keypad.
 VK_MULTIPLY: 106, // keypad*
 VK_PLUS: 107, // keypad+
 VK_SUBTRACT: 109, // keypad-
 VK_DIVIDE: 111, // keypad/
 VK_PAUSE: 19, // Pause Breakkey
 VK_SCROLL: 145, // Scroll Lockkey

 A: 65, // Akey
 B: 66, // Bkey
 C: 67, // Ckey
 D: 68, // Dkey
 E: 69, // Ekey
 F: 70, // Fkey
 G: 71, // Gkey
 H: 72, // Hkey
 I: 73, // Ikey
 J: 74, // Jkey
 K: 75, // Kkey
 L: 76, // Lkey
 M: 77, // Mkey
 N: 78, // Nkey
 O: 79, // Okey
 P: 80, // Pkey
 Q: 81, // Qkey
 R: 82, // Rkey
 S: 83, // Skey
 T: 84, // Tkey
 U: 85, // Ukey
 V: 86, // Vkey
 W: 87, // Wkey
 X: 88, // Xkey
 Y: 89, // Ykey
 Z: 90, // Zkey

 NUMPAD0: 48, // 0key
 NUMPAD1: 49, // 1key
 NUMPAD2: 50, // 2key
 NUMPAD3: 51, // 3key
 NUMPAD4: 52, // 4key
 NUMPAD5: 53, // 5key
 NUMPAD6: 54, // 6key
 NUMPAD7: 55, // 7key
 NUMPAD8: 56, // 8key
 NUMPAD9: 57 // 9key}
 /**
 * textkeytext
 */
 KeyEvent.__keyDownMap = {};

 /**
 * addtextkeyEvent listener
 */
 KeyEvent.addListener = function() {document.onkeydown = function(e) {var e = e || event, code = e.keyCode || e.which;
 KeyEvent.__keyDownMap[code] = true;}

 document.onkeyup = function(e) {var e = e || event, code = e.keyCode || e.which;
 KeyEvent.__keyDownMap[code] = false;}}
 /**
 * textkeyEvent listener
 */
 KeyEvent.removeListener = function() {document.onkeydown = null;
 document.onkeyup = null;}
 /**
 * textkeytextdown
 * @param {String} key
 */
 KeyEvent.check = function(key) {var code = KeyEvent.__keyCodeMap[key];
 return!!KeyEvent.__keyDownMap[code];}

 my.KeyEvent = KeyEvent;})();
