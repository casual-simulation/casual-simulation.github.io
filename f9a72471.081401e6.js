(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{145:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(1),o=n(9),i=(n(0),n(157)),r=n(127),b={id:"listen-tags",title:"Listen Tags",sidebar_label:"Listen Tags",description:"Listen tags are tags that can receive shouts and whispers from other bots and actoins that happen from the user."},c={id:"listen-tags",title:"Listen Tags",description:"Listen tags are tags that can receive shouts and whispers from other bots and actoins that happen from the user.",source:"@site/docs/listen-tags.mdx",permalink:"/docs/listen-tags",sidebar_label:"Listen Tags",sidebar:"docs",previous:{title:"Tags",permalink:"/docs/tags"},next:{title:"Actions",permalink:"/docs/actions"}},s=[{value:"Whisper Tags",id:"whisper-tags",children:[{value:"<code>@onCreate</code>",id:"oncreate",children:[]},{value:"<code>@onDestroy</code>",id:"ondestroy",children:[]},{value:"<code>@onModDrop</code>",id:"onmoddrop",children:[]},{value:"<code>@onModDropEnter</code>",id:"onmoddropenter",children:[]},{value:"<code>@onModDropExit</code>",id:"onmoddropexit",children:[]},{value:"<code>@onClick</code>",id:"onclick",children:[]},{value:"<code>@onPointerEnter</code>",id:"onpointerenter",children:[]},{value:"<code>@onPointerExit</code>",id:"onpointerexit",children:[]},{value:"<code>@onPointerDown</code>",id:"onpointerdown",children:[]},{value:"<code>@onPointerUp</code>",id:"onpointerup",children:[]},{value:"<code>@onDrag</code>",id:"ondrag",children:[]},{value:"<code>@onDrop</code>",id:"ondrop",children:[]},{value:"<code>@onDropEnter</code>",id:"ondropenter",children:[]},{value:"<code>@onDropExit</code>",id:"ondropexit",children:[]},{value:"<code>@onSaveInput</code>",id:"onsaveinput",children:[]},{value:"<code>@onCloseInput</code>",id:"oncloseinput",children:[]},{value:"<code>@onListen</code>",id:"onlisten",children:[]},{value:"<code>@onMaxLODEnter</code>",id:"onmaxlodenter",children:[]},{value:"<code>@onMinLODEnter</code>",id:"onminlodenter",children:[]},{value:"<code>@onMaxLODExit</code>",id:"onmaxlodexit",children:[]},{value:"<code>@onMinLODExit</code>",id:"onminlodexit",children:[]},{value:"<code>@[groupName][stateName]OnEnter</code>",id:"groupnamestatenameonenter",children:[]},{value:"<code>@[groupName][stateName]OnExit</code>",id:"groupnamestatenameonexit",children:[]}]},{value:"Shout Tags",id:"shout-tags",children:[{value:"<code>@onAnyCreate</code>",id:"onanycreate",children:[]},{value:"<code>@onAnyBotClicked</code>",id:"onanybotclicked",children:[]},{value:"<code>@onChat</code>",id:"onchat",children:[]},{value:"<code>@onChatTyping</code>",id:"onchattyping",children:[]},{value:"<code>@onGridClick</code>",id:"ongridclick",children:[]},{value:"<code>@onPlayerPortalChanged</code>",id:"onplayerportalchanged",children:[]},{value:"<code>@onBarcodeScanned</code>",id:"onbarcodescanned",children:[]},{value:"<code>@onBarcodeScannerOpened</code>",id:"onbarcodescanneropened",children:[]},{value:"<code>@onBarcodeScannerClosed</code>",id:"onbarcodescannerclosed",children:[]},{value:"<code>@onQRCodeScanned</code>",id:"onqrcodescanned",children:[]},{value:"<code>@onQRCodeScannerOpened</code>",id:"onqrcodescanneropened",children:[]},{value:"<code>@onQRCodeScannerClosed</code>",id:"onqrcodescannerclosed",children:[]},{value:"<code>@onTapCode</code>",id:"ontapcode",children:[]},{value:"<code>@onKeyDown</code>",id:"onkeydown",children:[]},{value:"<code>@onKeyUp</code>",id:"onkeyup",children:[]},{value:"<code>@onUniverseSubscribed</code>",id:"onuniversesubscribed",children:[]},{value:"<code>@onUniverseUnsubscribed</code>",id:"onuniverseunsubscribed",children:[]},{value:"<code>@onUniverseStreaming</code>",id:"onuniversestreaming",children:[]},{value:"<code>@onUniverseStreamLost</code>",id:"onuniversestreamlost",children:[]},{value:"<code>@onCheckout</code>",id:"oncheckout",children:[]},{value:"<code>@onPaste</code>",id:"onpaste",children:[]},{value:"<code>@onPaymentSuccessful</code>",id:"onpaymentsuccessful",children:[]},{value:"<code>@onPaymentFailed</code>",id:"onpaymentfailed",children:[]},{value:"<code>@onAnyBotDrag</code>",id:"onanybotdrag",children:[]},{value:"<code>@onAnyBotDrop</code>",id:"onanybotdrop",children:[]},{value:"<code>@onAnyListen</code>",id:"onanylisten",children:[]},{value:"<code>@onAnyMaxLODEnter</code>",id:"onanymaxlodenter",children:[]},{value:"<code>@onAnyMinLODEnter</code>",id:"onanyminlodenter",children:[]},{value:"<code>@onAnyMaxLODExit</code>",id:"onanymaxlodexit",children:[]},{value:"<code>@onAnyMinLODExit</code>",id:"onanyminlodexit",children:[]},{value:"<code>@onWebhook</code>",id:"onwebhook",children:[]},{value:"<code>@onUniverseAction</code>",id:"onuniverseaction",children:[]}]}],d={rightToc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,'Listen tags are tags that can receive shouts and whispers from other bots and actions that happen from the user.\nTo create a listen tag, you make a normal tag and enter a "@" as the first character of the tag\'s value.'),Object(i.b)("h2",{id:"whisper-tags"},"Whisper Tags"),Object(i.b)("p",null,"Whispers are shouts that are sent to specific bots instead of all bots."),Object(i.b)("h3",{id:"oncreate"},Object(i.b)("inlineCode",{parentName:"h3"},"@onCreate")),Object(i.b)("p",null,"A whisper that is sent to a bot when it is first created."),Object(i.b)("h3",{id:"ondestroy"},Object(i.b)("inlineCode",{parentName:"h3"},"@onDestroy")),Object(i.b)("p",null,"A whisper that is sent to a bot when it is being destroyed."),Object(i.b)("h3",{id:"onmoddrop"},Object(i.b)("inlineCode",{parentName:"h3"},"@onModDrop")),Object(i.b)("p",null,"A whisper that is sent to a bot that a mod was dropped on.\nIf a custom ",Object(i.b)("inlineCode",{parentName:"p"},"@onModDrop")," is not specified, then the mod will be applied automatically.\nIf a custom ",Object(i.b)("inlineCode",{parentName:"p"},"@onModDrop")," is specified, then the mod needs to be applied manually via ",Object(i.b)(r.ActionLink,{action:"applyMod(bot, ...mods)",mdxType:"ActionLink"}),"."),Object(i.b)("h4",{id:"arguments"},"Arguments:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"\ninterface Mod {\n  [tag: string]: any;\n}\n\nlet that: {\n  mod: Mod\n};\n")),Object(i.b)("h3",{id:"onmoddropenter"},Object(i.b)("inlineCode",{parentName:"h3"},"@onModDropEnter")),Object(i.b)("p",null,"A whisper that is sent to the bot that a mod started to be dragged onto."),Object(i.b)("h4",{id:"arguments-1"},"Arguments:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"let that: {\n  mod: Mod,\n  dimension: string\n};\n")),Object(i.b)("h3",{id:"onmoddropexit"},Object(i.b)("inlineCode",{parentName:"h3"},"@onModDropExit")),Object(i.b)("p",null,"A whisper that is sent to the bot that a mod was just dragged off of."),Object(i.b)("h4",{id:"arguments-2"},"Arguments:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"let that: {\n  mod: Mod,\n  dimension: string\n};\n")),Object(i.b)("h3",{id:"onclick"},Object(i.b)("inlineCode",{parentName:"h3"},"@onClick")),Object(i.b)("p",null,"A whisper that is sent to the bot that was clicked."),Object(i.b)("h4",{id:"arguments-3"},"Arguments:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"let that: {\n  face: 'left' | 'right' | 'front' | 'back' | 'top' | 'bottom',\n  dimension: string\n};\n")),Object(i.b)("h3",{id:"onpointerenter"},Object(i.b)("inlineCode",{parentName:"h3"},"@onPointerEnter")),Object(i.b)("p",null,"A whisper that is sent to a bot when the mouse cursor starts to hover over it."),Object(i.b)("h4",{id:"arguments-4"},"Arguments:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"let that: {\n  bot: Bot,\n  dimension: string\n};\n")),Object(i.b)("h3",{id:"onpointerexit"},Object(i.b)("inlineCode",{parentName:"h3"},"@onPointerExit")),Object(i.b)("p",null,"A whisper that is sent to a bot when the mouse cursor stops hovering over it."),Object(i.b)("h4",{id:"arguments-5"},"Arguments:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"let that: {\n  bot: Bot,\n  dimension: string\n};\n")),Object(i.b)("h3",{id:"onpointerdown"},Object(i.b)("inlineCode",{parentName:"h3"},"@onPointerDown")),Object(i.b)("p",null,"A whipser that is sent to a bot when the user starts clicking it."),Object(i.b)("h4",{id:"arguments-6"},"Arguments:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"let that: {\n  bot: Bot,\n  dimension: string\n};\n")),Object(i.b)("h3",{id:"onpointerup"},Object(i.b)("inlineCode",{parentName:"h3"},"@onPointerUp")),Object(i.b)("p",null,"A whisper that is sent to a bot when the user stops clicking it."),Object(i.b)("h4",{id:"arguments-7"},"Arguments:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"let that: {\n  bot: Bot,\n  dimension: string\n};\n")),Object(i.b)("h3",{id:"ondrag"},Object(i.b)("inlineCode",{parentName:"h3"},"@onDrag")),Object(i.b)("p",null,"A whisper that is sent whenever a bot is starting to be dragged."),Object(i.b)("h4",{id:"arguments-8"},"Arguments:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"let that: {\n  bot: Bot,\n  face: 'left' | 'right' | 'front' | 'back' | 'top' | 'bottom',\n  from: {\n    x: number,\n    y: number,\n    dimension: string\n  }\n};\n")),Object(i.b)("h3",{id:"ondrop"},Object(i.b)("inlineCode",{parentName:"h3"},"@onDrop")),Object(i.b)("p",null,"A whisper that is sent whenever a bot has been dropped after being dragged.\nThe whisper is sent to both the bot that was dropped and the bot that was dropped on."),Object(i.b)("h4",{id:"arguments-9"},"Arguments"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"let that: {\n  dragBot: Bot,\n  to: {\n    bot: Bot,\n    x: number,\n    y: number,\n    dimension: string\n  },\n  from: {\n    x: number,\n    y: number,\n    dimension: string\n  }\n};\n")),Object(i.b)("h3",{id:"ondropenter"},Object(i.b)("inlineCode",{parentName:"h3"},"@onDropEnter")),Object(i.b)("p",null,"A whisper that is sent to both bots when a bot is dragged onto another bot."),Object(i.b)("h4",{id:"arguments-10"},"Arguments"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"let that: {\n  dragBot: Bot,\n  to: {\n    bot: Bot,\n    x: number,\n    y: number,\n    dimension: string\n  },\n  from: {\n    x: number,\n    y: number,\n    dimension: string\n  }\n};\n")),Object(i.b)("h3",{id:"ondropexit"},Object(i.b)("inlineCode",{parentName:"h3"},"@onDropExit")),Object(i.b)("p",null,"A whisper that is sent to both bots when a bot is dragged off of another bot."),Object(i.b)("h4",{id:"arguments-11"},"Arguments"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"let that: {\n  dragBot: Bot,\n  to: {\n    bot: Bot,\n    x: number,\n    y: number,\n    dimension: string\n  },\n  from: {\n    x: number,\n    y: number,\n    dimension: string\n  }\n};\n")),Object(i.b)("h3",{id:"onsaveinput"},Object(i.b)("inlineCode",{parentName:"h3"},"@onSaveInput")),Object(i.b)("p",null,"A whisper that is sent when the input box for a bot has been changed by the user."),Object(i.b)("h4",{id:"arguments-12"},"Arguments:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"let that = null;\n")),Object(i.b)("h3",{id:"oncloseinput"},Object(i.b)("inlineCode",{parentName:"h3"},"@onCloseInput")),Object(i.b)("p",null,"A whisper that is sent when the input box for a bot has been closed by the user."),Object(i.b)("h4",{id:"arguments-13"},"Arguments:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"let that = null;\n")),Object(i.b)("h3",{id:"onlisten"},Object(i.b)("inlineCode",{parentName:"h3"},"@onListen")),Object(i.b)("p",null,"A whisper that is sent whenever a whisper or shout is sent to this bot."),Object(i.b)("h4",{id:"arguments-14"},"Arguments:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"let that: {\n  name: string,\n  that: any,\n  targets: Bot[],\n  listeners: Bot[],\n  responses: any[]\n};\n")),Object(i.b)("h3",{id:"onmaxlodenter"},Object(i.b)("inlineCode",{parentName:"h3"},"@onMaxLODEnter")),Object(i.b)("p",null,"A whisper that is sent whenever a bot enters its maximum Level-Of-Detail."),Object(i.b)("h4",{id:"arguments-15"},"Arguments:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"let that: {\n  bot: Bot,\n  dimension: string\n};\n")),Object(i.b)("h3",{id:"onminlodenter"},Object(i.b)("inlineCode",{parentName:"h3"},"@onMinLODEnter")),Object(i.b)("p",null,"A whisper that is sent whenever a bot enters its minimum Level-Of-Detail."),Object(i.b)("h4",{id:"arguments-16"},"Arguments:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"let that: {\n  bot: Bot,\n  dimension: string\n};\n")),Object(i.b)("h3",{id:"onmaxlodexit"},Object(i.b)("inlineCode",{parentName:"h3"},"@onMaxLODExit")),Object(i.b)("p",null,"A whisper that is sent whenever a bot exits its maximum Level-Of-Detail."),Object(i.b)("h4",{id:"arguments-17"},"Arguments:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"let that: {\n  bot: Bot,\n  dimension: string\n};\n")),Object(i.b)("h3",{id:"onminlodexit"},Object(i.b)("inlineCode",{parentName:"h3"},"@onMinLODExit")),Object(i.b)("p",null,"A whisper that is sent whenever a bot exits its minimum Level-Of-Detail."),Object(i.b)("h4",{id:"arguments-18"},"Arguments:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"let that: {\n  bot: Bot,\n  dimension: string\n};\n")),Object(i.b)("h3",{id:"groupnamestatenameonenter"},Object(i.b)("inlineCode",{parentName:"h3"},"@[groupName][stateName]OnEnter")),Object(i.b)("p",null,"A whisper that is sent whenever the ",Object(i.b)("inlineCode",{parentName:"p"},"[groupName]")," tag is set to ",Object(i.b)("inlineCode",{parentName:"p"},"[stateName]")," via the ",Object(i.b)(r.ActionLink,{action:"changeState(bot, stateName, groupName?)",mdxType:"ActionLink"})," function."),Object(i.b)("h4",{id:"arguments-19"},"Arguments:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"let that: {\n  /**\n   * The stateName that the bot is coming from.\n   */\n  from: string,\n\n  /**\n   * The stateName that the bot is going to.\n   */\n  to: string,\n};\n")),Object(i.b)("h3",{id:"groupnamestatenameonexit"},Object(i.b)("inlineCode",{parentName:"h3"},"@[groupName][stateName]OnExit")),Object(i.b)("p",null,"A whisper that is sent whenever the ",Object(i.b)("inlineCode",{parentName:"p"},"[groupName]")," tag is changed from ",Object(i.b)("inlineCode",{parentName:"p"},"[stateName]")," via the ",Object(i.b)(r.ActionLink,{action:"changeState(bot, stateName, groupName?)",mdxType:"ActionLink"})," function."),Object(i.b)("h4",{id:"arguments-20"},"Arguments:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"let that: {\n  /**\n   * The stateName that the bot is coming from.\n   */\n  from: string,\n\n  /**\n   * The stateName that the bot is going to.\n   */\n  to: string,\n};\n")),Object(i.b)("h2",{id:"shout-tags"},"Shout Tags"),Object(i.b)("p",null,"Shouts are events which are sent to all bots."),Object(i.b)("h3",{id:"onanycreate"},Object(i.b)("inlineCode",{parentName:"h3"},"@onAnyCreate")),Object(i.b)("p",null,"A shout that is sent to all bots when a bot is created. Sent immediately after ",Object(i.b)(r.TagLink,{tag:"@onCreate",mdxType:"TagLink"})," is sent."),Object(i.b)("h4",{id:"arguments-21"},"Arguments:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"let that: {\n  bot: Bot\n};\n")),Object(i.b)("h3",{id:"onanybotclicked"},Object(i.b)("inlineCode",{parentName:"h3"},"@onAnyBotClicked")),Object(i.b)("p",null,"A shout that is sent to all bots when a bot is clicked."),Object(i.b)("h4",{id:"arguments-22"},"Arguments:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"let that: {\n  bot: Bot,\n  face: 'left' | 'right' | 'front' | 'back' | 'top' | 'bottom',\n  dimension: string\n};\n")),Object(i.b)("h3",{id:"onchat"},Object(i.b)("inlineCode",{parentName:"h3"},"@onChat")),Object(i.b)("p",null,'A shout that is sent to all bots when the player sends a chat message.\nChat messages can be sent when the player presses the Enter key while writing a message or by clicking/tapping the "Send Message" button to the right of the chat bar.'),Object(i.b)("h4",{id:"arguments-23"},"Arguments:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"let that: {\n  message: string\n};\n")),Object(i.b)("h3",{id:"onchattyping"},Object(i.b)("inlineCode",{parentName:"h3"},"@onChatTyping")),Object(i.b)("p",null,"A shout that is sent to all bots when the player changes the text in the chat bar.\nOnly triggered when the chat bar is visible."),Object(i.b)("h4",{id:"arguments-24"},"Arguments:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"let that: {\n  message: string\n};\n")),Object(i.b)("h3",{id:"ongridclick"},Object(i.b)("inlineCode",{parentName:"h3"},"@onGridClick")),Object(i.b)("p",null,"A shout that is sent to all bots when the user clicks on empty space."),Object(i.b)("h4",{id:"arguments-25"},"Arguments:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"let that: {\n  position: {\n    x: number,\n    y: number\n  },\n  dimension: string\n};\n")),Object(i.b)("h3",{id:"onplayerportalchanged"},Object(i.b)("inlineCode",{parentName:"h3"},"@onPlayerPortalChanged")),Object(i.b)("p",null,"A shout that is sent to all bots when a portal changes on the player."),Object(i.b)("h4",{id:"arguments-26"},"Arguments:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"let that: {\n  portal: string;\n  dimension: string;\n};\n")),Object(i.b)("h3",{id:"onbarcodescanned"},Object(i.b)("inlineCode",{parentName:"h3"},"@onBarcodeScanned")),Object(i.b)("p",null,"A shout that is sent to all bots when the player scans a barcode."),Object(i.b)("h4",{id:"arguments-27"},"Arguments:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"let that: string;\n")),Object(i.b)("h3",{id:"onbarcodescanneropened"},Object(i.b)("inlineCode",{parentName:"h3"},"@onBarcodeScannerOpened")),Object(i.b)("p",null,"A shout that is sent to all bots when the barcode scanner is opened."),Object(i.b)("h3",{id:"onbarcodescannerclosed"},Object(i.b)("inlineCode",{parentName:"h3"},"@onBarcodeScannerClosed")),Object(i.b)("p",null,"A shout that is sent to all bots when the barcode scanner is closed."),Object(i.b)("h3",{id:"onqrcodescanned"},Object(i.b)("inlineCode",{parentName:"h3"},"@onQRCodeScanned")),Object(i.b)("p",null,"A shout that is sent to all bots when a QR Code is scanned."),Object(i.b)("h4",{id:"arguments-28"},"Arguments:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"let that: string;\n")),Object(i.b)("h3",{id:"onqrcodescanneropened"},Object(i.b)("inlineCode",{parentName:"h3"},"@onQRCodeScannerOpened")),Object(i.b)("p",null,"A shout that is sent to all bots when the QR Code Scanner is opened."),Object(i.b)("h3",{id:"onqrcodescannerclosed"},Object(i.b)("inlineCode",{parentName:"h3"},"@onQRCodeScannerClosed")),Object(i.b)("p",null,"A shout that is sent to all bots when the QR Code Scanner is closed."),Object(i.b)("h3",{id:"ontapcode"},Object(i.b)("inlineCode",{parentName:"h3"},"@onTapCode")),Object(i.b)("p",null,"A shout that is sent to all bots whenever a 4-digit tap code is entered."),Object(i.b)("h4",{id:"arguments-29"},"Arguments:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"let that: string;\n")),Object(i.b)("h3",{id:"onkeydown"},Object(i.b)("inlineCode",{parentName:"h3"},"@onKeyDown")),Object(i.b)("p",null,"A shout that is sent to all bots whenever the user starts pressing a key."),Object(i.b)("h4",{id:"arguments-30"},"Arguments:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"let that: {\n  keys: string[]\n};\n")),Object(i.b)("h3",{id:"onkeyup"},Object(i.b)("inlineCode",{parentName:"h3"},"@onKeyUp")),Object(i.b)("p",null,"A shout that is sent to all bots whenever the user stops pressing a key."),Object(i.b)("h4",{id:"arguments-31"},"Arguments:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"let that: {\n  keys: string[]\n};\n")),Object(i.b)("h3",{id:"onuniversesubscribed"},Object(i.b)("inlineCode",{parentName:"h3"},"@onUniverseSubscribed")),Object(i.b)("p",null,"A shout that is sent when a universe is loaded.\nSent to every universe that is loaded."),Object(i.b)("h4",{id:"arguments-32"},"Arguments:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"let that: {\n  universe: string\n};\n")),Object(i.b)("h3",{id:"onuniverseunsubscribed"},Object(i.b)("inlineCode",{parentName:"h3"},"@onUniverseUnsubscribed")),Object(i.b)("p",null,"A shout that is sent when a universe is unloaded.\nSent to every universe that is loaded."),Object(i.b)("h4",{id:"arguments-33"},"Arguments:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"let that: {\n  universe: string\n};\n")),Object(i.b)("h3",{id:"onuniversestreaming"},Object(i.b)("inlineCode",{parentName:"h3"},"@onUniverseStreaming")),Object(i.b)("p",null,"A shout that is sent when a universe is connected and fully synced.\nSent to every universe that is loaded."),Object(i.b)("h4",{id:"arguments-34"},"Arguments:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"let that: {\n  universe: string\n};\n")),Object(i.b)("h3",{id:"onuniversestreamlost"},Object(i.b)("inlineCode",{parentName:"h3"},"@onUniverseStreamLost")),Object(i.b)("p",null,"A shout that is sent when a universe has been temporarily disconnected from the server.\nSent to every universe that is loaded."),Object(i.b)("h4",{id:"arguments-35"},"Arguments:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"let that: {\n  universe: string\n};\n")),Object(i.b)("h3",{id:"oncheckout"},Object(i.b)("inlineCode",{parentName:"h3"},"@onCheckout")),Object(i.b)("p",null,"A shout that is sent when the user submits their credit card info to purchase something."),Object(i.b)("h4",{id:"arguments-36"},"Arguments:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"let that: {\n  token: string, \n  productId: string, \n  user: { \n    username: string, \n    device: string, \n    token: string\n  }\n};\n")),Object(i.b)("h3",{id:"onpaste"},Object(i.b)("inlineCode",{parentName:"h3"},"@onPaste")),Object(i.b)("p",null,"A shout that is sent when some text is pasted into the universe."),Object(i.b)("p",null,"This happens by pressing ",Object(i.b)("kbd",null,"Ctrl"),"+",Object(i.b)("kbd",null,"V")," or ",Object(i.b)("kbd",null,"Cmd"),"+",Object(i.b)("kbd",null,"V")," while something is in your clipboard."),Object(i.b)("h4",{id:"arguments-37"},"Arguments:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"let that: {\n  text: string;\n};\n")),Object(i.b)("h3",{id:"onpaymentsuccessful"},Object(i.b)("inlineCode",{parentName:"h3"},"@onPaymentSuccessful")),Object(i.b)("p",null,"A shout that is sent when payment has been approved for a checkout."),Object(i.b)("h4",{id:"arguments-38"},"Arguments:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"let that: {\n  /**\n   * The bot that was created for the transaction.\n   */\n  bot: Bot,\n  charge: any,\n  extra: any\n};\n")),Object(i.b)("h3",{id:"onpaymentfailed"},Object(i.b)("inlineCode",{parentName:"h3"},"@onPaymentFailed")),Object(i.b)("p",null,"A shout that is sent when payment has been rejected for a checkout."),Object(i.b)("h4",{id:"arguments-39"},"Arguments:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"let that: {\n  /**\n   * The bot that was created for the transaction.\n   */\n  bot: Bot,\n  error: any,\n  extra: any\n};\n")),Object(i.b)("h3",{id:"onanybotdrag"},Object(i.b)("inlineCode",{parentName:"h3"},"@onAnyBotDrag")),Object(i.b)("p",null,"A shout that is sent whenever a bot starts to be dragged."),Object(i.b)("h4",{id:"arguments-40"},"Arguments:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"let that: {\n  bot: Bot,\n  face: 'left' | 'right' | 'front' | 'back' | 'top' | 'bottom',\n  from: {\n    x: number,\n    y: number,\n    dimension: string\n  }\n};\n")),Object(i.b)("h3",{id:"onanybotdrop"},Object(i.b)("inlineCode",{parentName:"h3"},"@onAnyBotDrop")),Object(i.b)("p",null,"A shout that is sent whenever a bot is dropped after being dragged."),Object(i.b)("h4",{id:"arguments-41"},"Arguments:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"let that: {\n  bot: Bot,\n  to: {\n    x: number,\n    y: number,\n    dimension: string\n  },\n  from: {\n    x: number,\n    y: number,\n    dimension: string\n  }\n};\n")),Object(i.b)("h3",{id:"onanylisten"},Object(i.b)("inlineCode",{parentName:"h3"},"@onAnyListen")),Object(i.b)("p",null,"A shout that is sent whenever a whisper or shout is issued."),Object(i.b)("h4",{id:"arguments-42"},"Arguments:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"let that: {\n  name: string,\n  that: any,\n  targets: Bot[],\n  listeners: Bot[],\n  responses: any[]\n};\n")),Object(i.b)("h3",{id:"onanymaxlodenter"},Object(i.b)("inlineCode",{parentName:"h3"},"@onAnyMaxLODEnter")),Object(i.b)("p",null,"A shout that is sent whenever a bot enters its maximum Level-Of-Detail."),Object(i.b)("p",null,"Only sent for bots that have one of ",Object(i.b)(r.TagLink,{tag:"@onMaxLODEnter",mdxType:"TagLink"}),",  ",Object(i.b)(r.TagLink,{tag:"@onMaxLODExit",mdxType:"TagLink"}),", ",Object(i.b)(r.TagLink,{tag:"@onMinLODEnter",mdxType:"TagLink"}),", ",Object(i.b)(r.TagLink,{tag:"@onMinLODExit",mdxType:"TagLink"}),", ",Object(i.b)(r.TagLink,{tag:"auxMaxLODThreshold",mdxType:"TagLink"})," or ",Object(i.b)(r.TagLink,{tag:"auxMinLODThreshold",mdxType:"TagLink"})," specified."),Object(i.b)("h4",{id:"arguments-43"},"Arguments:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"let that: {\n  bot: Bot,\n  dimension: string\n};\n")),Object(i.b)("h3",{id:"onanyminlodenter"},Object(i.b)("inlineCode",{parentName:"h3"},"@onAnyMinLODEnter")),Object(i.b)("p",null,"A shout that is sent whenever a bot enters its minimum Level-Of-Detail."),Object(i.b)("p",null,"Only sent for bots that have one of ",Object(i.b)(r.TagLink,{tag:"@onMaxLODEnter",mdxType:"TagLink"}),", ",Object(i.b)(r.TagLink,{tag:"@onMaxLODExit",mdxType:"TagLink"}),", ",Object(i.b)(r.TagLink,{tag:"@onMinLODEnter",mdxType:"TagLink"}),", ",Object(i.b)(r.TagLink,{tag:"@onMinLODExit",mdxType:"TagLink"}),", ",Object(i.b)(r.TagLink,{tag:"auxMaxLODThreshold",mdxType:"TagLink"})," or ",Object(i.b)(r.TagLink,{tag:"auxMinLODThreshold",mdxType:"TagLink"})," specified."),Object(i.b)("h4",{id:"arguments-44"},"Arguments:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"let that: {\n  bot: Bot,\n  dimension: string\n};\n")),Object(i.b)("h3",{id:"onanymaxlodexit"},Object(i.b)("inlineCode",{parentName:"h3"},"@onAnyMaxLODExit")),Object(i.b)("p",null,"A shout that is sent whenever a bot exits its maximum Level-Of-Detail."),Object(i.b)("p",null,"Only sent for bots that have one of ",Object(i.b)(r.TagLink,{tag:"@onMaxLODEnter",mdxType:"TagLink"}),", ",Object(i.b)(r.TagLink,{tag:"@onMaxLODExit",mdxType:"TagLink"}),", ",Object(i.b)(r.TagLink,{tag:"@onMinLODEnter",mdxType:"TagLink"}),", ",Object(i.b)(r.TagLink,{tag:"@onMinLODExit",mdxType:"TagLink"}),", ",Object(i.b)(r.TagLink,{tag:"auxMaxLODThreshold",mdxType:"TagLink"})," or ",Object(i.b)(r.TagLink,{tag:"auxMinLODThreshold",mdxType:"TagLink"})," specified."),Object(i.b)("h4",{id:"arguments-45"},"Arguments:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"let that: {\n  bot: Bot,\n  dimension: string\n};\n")),Object(i.b)("h3",{id:"onanyminlodexit"},Object(i.b)("inlineCode",{parentName:"h3"},"@onAnyMinLODExit")),Object(i.b)("p",null,"A shout that is sent whenever a bot exits its minimum Level-Of-Detail."),Object(i.b)("p",null,"Only sent for bots that have one of ",Object(i.b)(r.TagLink,{tag:"@onMaxLODEnter",mdxType:"TagLink"}),", ",Object(i.b)(r.TagLink,{tag:"@onMaxLODExit",mdxType:"TagLink"}),", ",Object(i.b)(r.TagLink,{tag:"@onMinLODEnter",mdxType:"TagLink"}),", ",Object(i.b)(r.TagLink,{tag:"@onMinLODExit",mdxType:"TagLink"}),", ",Object(i.b)(r.TagLink,{tag:"auxMaxLODThreshold",mdxType:"TagLink"})," or ",Object(i.b)(r.TagLink,{tag:"auxMinLODThreshold",mdxType:"TagLink"})," specified."),Object(i.b)("h4",{id:"arguments-46"},"Arguments:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"let that: {\n  bot: Bot,\n  dimension: string\n};\n")),Object(i.b)("h3",{id:"onwebhook"},Object(i.b)("inlineCode",{parentName:"h3"},"@onWebhook")),Object(i.b)("p",null,"A shout that is sent whenever a webhook is received."),Object(i.b)("h4",{id:"arguments-47"},"Arguments:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"let that: {\n  method: string,\n  url: string,\n  data: any,\n  headers: any\n};\n")),Object(i.b)("h3",{id:"onuniverseaction"},Object(i.b)("inlineCode",{parentName:"h3"},"@onUniverseAction")),Object(i.b)("p",null,"A shout that is sent whenever an action happens."),Object(i.b)("h4",{id:"arguments-48"},"Arguments:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"let that: {\n  action: any\n};\n")))}l.isMDXComponent=!0}}]);