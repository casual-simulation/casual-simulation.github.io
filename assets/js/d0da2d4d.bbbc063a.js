"use strict";(self.webpackChunkcasual_simulation=self.webpackChunkcasual_simulation||[]).push([[2169],{8296:(o,s,t)=>{t.r(s),t.d(s,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var e=t(5250),i=t(5545);const a=JSON.parse('{"hash":"types/debuggers","pageTitle":null,"pageDescription":null,"pageSidebarLabel":null,"contents":[],"references":{"CasualOSError":"types/error","id-3545":"CasualOSError","Quaternion":"types/math/rotations","id-127":"Quaternion","Rotation":"types/math/rotations","id-154":"Rotation","Vector2":"types/math/vectors","id-1":"Vector2","Vector3":"types/math/vectors","id-58":"Vector3","AIChatMessage":"types/ai","id-3564":"AIChatMessage","AIChatOptions":"types/ai","id-3334":"AIChatOptions","AIGenerateImageSuccess":"types/ai","id-2481":"AIGenerateImageSuccess","AIGenerateImageOptions":"types/ai","id-3348":"AIGenerateImageOptions","AIGenerateSkyboxOptions":"types/ai","id-3344":"AIGenerateSkyboxOptions","AIGenerateSkyboxRequest":"types/ai","id-2474":"AIGenerateSkyboxRequest","AIGenerateSkyboxResult":"types/ai","id-2478":"AIGenerateSkyboxResult","AIGeneratedImage":"types/ai","id-2484":"AIGeneratedImage","ARSupportedAction":"types/os/xr","id-3076":"ARSupportedAction","AddCountFailure":"types/records/events","id-3750":"AddCountFailure","AddCountSuccess":"types/records/events","id-3745":"AddCountSuccess","AddDropSnapAction":"types/os/portals","id-2705":"AddDropSnapAction","AddDropSnapPointsAction":"types/os/portals","id-2709":"AddDropSnapPointsAction","AnalyticsRecordEventAction":"types/os/portals","id-3279":"AnalyticsRecordEventAction","AnimateTagOptions":"types/animation","id-2078":"AnimateTagOptions","AttachDebuggerOptions":"types/debuggers/common","id-2454":"AttachDebuggerOptions","AuthData":"types/os/records","id-3218":"AuthData","CasualOSDevice":"types/os/system","id-3532":"CasualOSDevice","CasualOSVersion":"types/os/system","id-3524":"CasualOSVersion","AxisAndAngle":"types/math/rotations","id-200":"AxisAndAngle","BeginRecordingAction":"types/os/audio","id-3161":"BeginRecordingAction","BotTagMasks":"types/core","id-3501":"BotTagMasks","BotTags":"types/core","id-3416":"BotTags","BotState":"types/core","id-3514":"BotState","BufferFormAddressGLTFAction":"types/os/portals","id-3286":"BufferFormAddressGLTFAction","BufferSoundAction":"types/os/audio","id-2887":"BufferSoundAction","CalculateRayFromCameraAction":"types/os/portals","id-3259":"CalculateRayFromCameraAction","CancelSoundAction":"types/os/audio","id-2893":"CancelSoundAction","CompiledBotListeners":"types/core","id-3495":"CompiledBotListeners","ConfigureWakeLockAction":"types/os/portals","id-3266":"ConfigureWakeLockAction","ConvertGeolocationToWhat3WordsAction":"types/os/geolocation","id-2651":"ConvertGeolocationToWhat3WordsAction","ConvertGeolocationToWhat3WordsOptions":"types/os/geolocation","id-2640":"ConvertGeolocationToWhat3WordsOptions","CreatePublicRecordKeyFailure":"types/records/key","id-3686":"CreatePublicRecordKeyFailure","CreatePublicRecordKeySuccess":"types/records/key","id-3682":"CreatePublicRecordKeySuccess","DebuggerCallFrame":"types/debuggers/common","id-2407":"DebuggerCallFrame","DebuggerFunctionLocation":"types/debuggers/common","id-2442":"DebuggerFunctionLocation","DebuggerPause":"types/debuggers/common","id-2436":"DebuggerPause","DebuggerTagMaskUpdate":"types/debuggers/common","id-2415":"DebuggerTagMaskUpdate","DebuggerTagUpdate":"types/debuggers/common","id-2421":"DebuggerTagUpdate","DebuggerVariable":"types/debuggers/common","id-2448":"DebuggerVariable","DefineGlobalBotAction":"types/os/portals","id-2644":"DefineGlobalBotAction","DownloadAction":"types/os/files","id-2899":"DownloadAction","Easing":"types/animation","id-2622":"Easing","EnableARAction":"types/os/xr","id-3072":"EnableARAction","EnableCollaborationAction":"types/os/spaces","id-3031":"EnableCollaborationAction","EnableCustomDraggingAction":"types/os/portals","id-2735":"EnableCustomDraggingAction","EnablePOVAction":"types/os/portals","id-3090":"EnablePOVAction","EnableVRAction":"types/os/xr","id-3086":"EnableVRAction","EnableXROptions":"types/os/xr","id-2942":"EnableXROptions","EndRecordingAction":"types/os/audio","id-3169":"EndRecordingAction","EraseDataFailure":"types/records/data","id-3721":"EraseDataFailure","EraseDataSuccess":"types/records/data","id-3717":"EraseDataSuccess","EraseFileFailure":"types/records/files","id-3740":"EraseFileFailure","EraseFileSuccess":"types/records/files","id-3736":"EraseFileSuccess","EulerAnglesRotation":"types/math/rotations","id-203":"EulerAnglesRotation","ExitFullscreenAction":"types/os/portals","id-3105":"ExitFullscreenAction","FocusOnOptions":"types/os/camera","id-2689":"FocusOnOptions","FocusOnRotation":"types/os/camera","id-2701":"FocusOnRotation","FormAnimationData":"types/os/animations","id-2987":"FormAnimationData","FromToRotation":"types/math/rotations","id-197":"FromToRotation","GenericError":"types/error","id-3542":"GenericError","GetAverageFrameRateAction":"types/os/portals","id-3239":"GetAverageFrameRateAction","GetCountFailure":"types/records/events","id-3761":"GetCountFailure","GetCountSuccess":"types/records/events","id-3755":"GetCountSuccess","GetDataFailure":"types/records/data","id-3712":"GetDataFailure","GetDataSuccess":"types/records/data","id-3703":"GetDataSuccess","GetGeolocationAction":"types/os/geolocation","id-3202":"GetGeolocationAction","GetRoomOptionsFailure":"types/os/portals","id-2169":"GetRoomOptionsFailure","GetRoomOptionsSuccess":"types/os/portals","id-2165":"GetRoomOptionsSuccess","GetRoomRemoteOptionsFailure":"types/os/portals","id-2212":"GetRoomRemoteOptionsFailure","GetRoomRemoteOptionsSuccess":"types/os/portals","id-2207":"GetRoomRemoteOptionsSuccess","GetRoomTrackOptionsFailure":"types/os/portals","id-2188":"GetRoomTrackOptionsFailure","GetRoomTrackOptionsSuccess":"types/os/portals","id-2183":"GetRoomTrackOptionsSuccess","GetVoicesAction":"types/os/audio","id-3197":"GetVoicesAction","GetWakeLockConfigurationAction":"types/os/portals","id-3272":"GetWakeLockConfigurationAction","GoToTagAction":"types/os/portals","id-3207":"GoToTagAction","GrantMarkerPermissionFailure":"types/records/policies","id-3789":"GrantMarkerPermissionFailure","GrantMarkerPermissionSuccess":"types/records/policies","id-3787":"GrantMarkerPermissionSuccess","GrantRoleFailure":"types/records/roles","id-3775":"GrantRoleFailure","GrantRoleSuccess":"types/records/roles","id-3773":"GrantRoleSuccess","HideHtmlAction":"types/os/portals","id-2541":"HideHtmlAction","HideTooltipAction":"types/os/portals","id-2530":"HideTooltipAction","HtmlAppEventAction":"types/os/portals","id-2551":"HtmlAppEventAction","HtmlAppMethodCallAction":"types/os/portals","id-2556":"HtmlAppMethodCallAction","ImageClassifierOptions":"types/os/image-classification","id-2740":"ImageClassifierOptions","InstUpdate":"types/os/spaces","id-3538":"InstUpdate","JoinRoomFailure":"types/os/portals","id-2150":"JoinRoomFailure","JoinRoomSuccess":"types/os/portals","id-2147":"JoinRoomSuccess","LeaveRoomFailure":"types/os/portals","id-2159":"LeaveRoomFailure","LeaveRoomSuccess":"types/os/portals","id-2156":"LeaveRoomSuccess","ListDataFailure":"types/records/data","id-3731":"ListDataFailure","ListDataSuccess":"types/records/data","id-3726":"ListDataSuccess","ListFormAnimationsAction":"types/os/animations","id-2991":"ListFormAnimationsAction","ListStudiosFailure":"types/records/studios","id-3804":"ListStudiosFailure","ListStudiosSuccess":"types/records/studios","id-3801":"ListStudiosSuccess","ListedStudio":"types/records/studios","id-3808":"ListedStudio","LoadInstAction":"types/os/spaces","id-2812":"LoadInstAction","LoadSpaceAction":"types/os/spaces","id-2932":"LoadSpaceAction","LocalFormAnimationAction":"types/os/animations","id-3043":"LocalFormAnimationAction","LocalPositionTweenAction":"types/os/animations","id-3057":"LocalPositionTweenAction","LocalTweenAction":"types/os/animations","id-3047":"LocalTweenAction","LookRotation":"types/math/rotations","id-211":"LookRotation","MediaPermissionAction":"types/os/media","id-3232":"MediaPermissionAction","MediaPermissionOptions":"types/os/media","id-2939":"MediaPermissionOptions","MeetCommandAction":"types/os/meets","id-3174":"MeetCommandAction","MeetFunctionAction":"types/os/meets","id-3181":"MeetFunctionAction","Debugger":"types/debuggers/debugger","id-2219":"Debugger","NormalDebuggerOptions":"types/debuggers/common","id-2426":"NormalDebuggerOptions","OpenCircleWipeAction":"types/os/portals","id-3151":"OpenCircleWipeAction","OpenCircleWipeOptions":"types/os/portals","id-3158":"OpenCircleWipeOptions","OpenConsoleAction":"types/os/system","id-2787":"OpenConsoleAction","PhotoCameraOptions":"types/camera","id-3015":"PhotoCameraOptions","OpenURLAction":"types/os/portals","id-2876":"OpenURLAction","ParsedBotLink":"types/core","id-3520":"ParsedBotLink","PartialBotState":"types/core","id-3517":"PartialBotState","PausableDebugger":"types/debuggers/pausable-debugger","id-2275":"PausableDebugger","PausableDebuggerOptions":"types/debuggers/common","id-2431":"PausableDebuggerOptions","PauseTrigger":"types/debuggers/common","id-2394":"PauseTrigger","PauseTriggerOptions":"types/debuggers/common","id-2402":"PauseTriggerOptions","Photo":"types/camera","id-3027":"Photo","PlaySoundAction":"types/os/audio","id-2880":"PlaySoundAction","PossiblePauseTriggerLocation":"types/debuggers/common","id-2389":"PossiblePauseTriggerLocation","PseudoRandomNumberGenerator":"types/core","id-2463":"PseudoRandomNumberGenerator","QuaternionRotation":"types/math/rotations","id-215":"QuaternionRotation","RaycastFromCameraAction":"types/os/portals","id-3244":"RaycastFromCameraAction","RaycastInPortalAction":"types/os/portals","id-3251":"RaycastInPortalAction","RaycastRay":"types/os/portals","id-2143":"RaycastRay","RaycastResult":"types/os/portals","id-2140":"RaycastResult","RecordActionOptions":"types/records/extra","id-3297":"RecordActionOptions","RecordDataFailure":"types/records/data","id-3696":"RecordDataFailure","RecordDataSuccess":"types/records/data","id-3692":"RecordDataSuccess","RecordFileFailure":"types/records/files","id-2110":"RecordFileFailure","RecordFileSuccess":"types/records/files","id-2106":"RecordFileSuccess","RecordedFile":"types/experimental","id-3002":"RecordedFile","Recording":"types/experimental","id-3000":"Recording","RecordingOptions":"types/experimental","id-3007":"RecordingOptions","RegisterBuiltinPortalAction":"types/os/portals","id-3115":"RegisterBuiltinPortalAction","RegisterCustomAppAction":"types/os/portals","id-3121":"RegisterCustomAppAction","RegisterHtmlAppAction":"types/os/portals","id-3134":"RegisterHtmlAppAction","RegisterPrefixOptions":"types/core","id-2997":"RegisterPrefixOptions","RejectAction":"types/os/event","id-2905":"RejectAction","RemoteAction":"types/os/event","id-3814":"RemoteAction","ReportInstAction":"types/os/moderation","id-3292":"ReportInstAction","RequestAuthDataAction":"types/os/records","id-3212":"RequestAuthDataAction","RequestFullscreenAction":"types/os/portals","id-3103":"RequestFullscreenAction","RevokeMarkerPermissionFailure":"types/records/policies","id-3796":"RevokeMarkerPermissionFailure","RevokeMarkerPermissionSuccess":"types/records/policies","id-3794":"RevokeMarkerPermissionSuccess","RevokeRoleFailure":"types/records/roles","id-3782":"RevokeRoleFailure","RevokeRoleSuccess":"types/records/roles","id-3780":"RevokeRoleSuccess","RoomJoinOptions":"types/os/portals","id-3300":"RoomJoinOptions","RoomOptions":"types/os/portals","id-3309":"RoomOptions","RoomRemoteOptions":"types/os/portals","id-3325":"RoomRemoteOptions","RoomTrackOptions":"types/os/portals","id-3313":"RoomTrackOptions","RunScriptAction":"types/os/system","id-2919":"RunScriptAction","RuntimeBot":"types/core","id-3361":"RuntimeBot","RuntimeBotLinks":"types/core","id-3507":"RuntimeBotLinks","RuntimeBotVars":"types/core","id-3504":"RuntimeBotVars","SequenceRotation":"types/math/rotations","id-222":"SequenceRotation","SerializableMutationRecord":"types/os/portals","id-2565":"SerializableMutationRecord","SessionSelector":"types/os/event","id-2489":"SessionSelector","SetAppOutputAction":"types/os/portals","id-3146":"SetAppOutputAction","SetClipboardAction":"types/os/clipboard","id-2908":"SetClipboardAction","SetRoomOptionsSuccess":"types/os/portals","id-2174":"SetRoomOptionsSuccess","SetRoomTrackOptions":"types/os/portals","id-3331":"SetRoomTrackOptions","SetRoomTrackOptionsFailure":"types/os/portals","id-2200":"SetRoomTrackOptionsFailure","SetRoomTrackOptionsSuccess":"types/os/portals","id-2195":"SetRoomTrackOptionsSuccess","ShareAction":"types/os/input","id-3107":"ShareAction","ShareOptions":"types/os/input","id-2685":"ShareOptions","ShowChatBarAction":"types/os/input","id-2911":"ShowChatBarAction","ShowChatOptions":"types/os/input","id-2679":"ShowChatOptions","ShowConfirmAction":"types/os/input","id-2761":"ShowConfirmAction","ShowConfirmOptions":"types/os/input","id-2756":"ShowConfirmOptions","ShowHtmlAction":"types/os/portals","id-2536":"ShowHtmlAction","ShowInputOptions":"types/os/input","id-2745":"ShowInputOptions","ShowJoinCodeAction":"types/os/barcodes","id-3099":"ShowJoinCodeAction","ShowToastAction":"types/os/portals","id-2516":"ShowToastAction","ShowTooltipAction":"types/os/portals","id-2521":"ShowTooltipAction","ShowUploadAuxFileAction":"types/os/input","id-2925":"ShowUploadAuxFileAction","ShowUploadFilesAction":"types/os/input","id-2927":"ShowUploadFilesAction","SnapAxis":"types/os/portals","id-2659":"SnapAxis","SnapGrid":"types/os/portals","id-2714":"SnapGrid","SnapGridTarget":"types/os/portals","id-2115":"SnapGridTarget","SnapPoint":"types/os/portals","id-2671":"SnapPoint","SpeakTextAction":"types/os/audio","id-3188":"SpeakTextAction","SpeakTextOptions":"types/experimental","id-2459":"SpeakTextOptions","StartFormAnimationAction":"types/os/animations","id-2968":"StartFormAnimationAction","StartFormAnimationOptions":"types/os/animations","id-2944":"StartFormAnimationOptions","StopFormAnimationAction":"types/os/animations","id-2957":"StopFormAnimationAction","StopFormAnimationOptions":"types/os/animations","id-2965":"StopFormAnimationOptions","SuccessfulGeolocation":"types/os/geolocation","id-2626":"SuccessfulGeolocation","SyntheticVoice":"types/experimental","id-3011":"SyntheticVoice","TweenOptions":"types/experimental","id-2456":"TweenOptions","UnloadInstAction":"types/os/spaces","id-2816":"UnloadInstAction","UnregisterCustomAppAction":"types/os/portals","id-3128":"UnregisterCustomAppAction","UnregisterHtmlAppAction":"types/os/portals","id-3141":"UnregisterHtmlAppAction","UnsuccessfulGeolocation":"types/os/geolocation","id-2636":"UnsuccessfulGeolocation","UpdateEventRecordFailure":"types/records/events","id-3768":"UpdateEventRecordFailure","UpdateEventRecordSuccess":"types/records/events","id-3766":"UpdateEventRecordSuccess","UpdateHtmlAppAction":"types/os/portals","id-2545":"UpdateHtmlAppAction","UploadedFile":"types/os/files","id-2136":"UploadedFile","VRSupportedAction":"types/os/xr","id-3081":"VRSupportedAction","WakeLockConfiguration":"types/os/portals","id-3277":"WakeLockConfiguration","WebhookOptions":"types/web","id-2059":"WebhookOptions","WebhookResult":"types/web","id-2071":"WebhookResult","AddCountResult":"types/records/events","id-3744":"AddCountResult","AvailablePermissions":"types/permissions","id-3570":"AvailablePermissions","BarcodeFormat":"types/os/barcodes","id-2739":"BarcodeFormat","BotFilter":"types/core","id-2093":"BotFilter","BotSpace":"types/core","id-3491":"BotSpace","CameraType":"types/os/camera","id-2738":"CameraType","CreatePublicRecordKeyResult":"types/records/key","id-3681":"CreatePublicRecordKeyResult","EaseMode":"types/animation","id-2621":"EaseMode","EaseType":"types/animation","id-2620":"EaseType","EraseDataResult":"types/records/data","id-3716":"EraseDataResult","EraseFileResult":"types/records/files","id-3735":"EraseFileResult","Geolocation":"types/os/geolocation","id-2625":"Geolocation","GetCountResult":"types/records/events","id-3754":"GetCountResult","GetDataResult":"types/records/data","id-3702":"GetDataResult","GetRoomOptionsResult":"types/os/portals","id-2164":"GetRoomOptionsResult","GetRoomRemoteOptionsResult":"types/os/portals","id-2206":"GetRoomRemoteOptionsResult","GetRoomTrackOptionsResult":"types/os/portals","id-2182":"GetRoomTrackOptionsResult","GrantMarkerPermissionResult":"types/records/policies","id-3786":"GrantMarkerPermissionResult","GrantRoleResult":"types/records/roles","id-3772":"GrantRoleResult","JoinRoomResult":"types/os/portals","id-2146":"JoinRoomResult","LeaveRoomResult":"types/os/portals","id-2155":"LeaveRoomResult","ListDataResult":"types/records/data","id-3725":"ListDataResult","ListStudiosResult":"types/records/studios","id-3800":"ListStudiosResult","Mod":"types/core","id-2088":"Mod","PortalType":"types/core","id-3523":"PortalType","PossiblePauseTriggerStates":"types/debuggers/common","id-2393":"PossiblePauseTriggerStates","RecordDataResult":"types/records/data","id-3691":"RecordDataResult","RecordFileResult":"types/records/files","id-2105":"RecordFileResult","RevokeMarkerPermissionResult":"types/records/policies","id-3793":"RevokeMarkerPermissionResult","RevokeRoleResult":"types/records/roles","id-3779":"RevokeRoleResult","SetRoomOptionsResult":"types/os/portals","id-2173":"SetRoomOptionsResult","SetRoomTrackOptionsResult":"types/os/portals","id-2194":"SetRoomTrackOptionsResult","ShowInputSuptype":"types/os/input","id-2755":"ShowInputSuptype","ShowInputType":"types/os/input","id-2754":"ShowInputType","SnapTarget":"types/os/portals","id-2678":"SnapTarget","TagFilter":"types/core","id-2089":"TagFilter","UpdateEventRecordResult":"types/records/events","id-3765":"UpdateEventRecordResult","animateTag-byOptions":"actions/utility","id-591":"animateTag-byOptions","getbot-tag":"actions/data","id-256":"getbot-tag","getbots-tag":"actions/data","id-240":"getbots-tag","animateTag-byTag":"actions/utility","id-585":"animateTag-byTag","changeState":"actions/data","id-401":"changeState","create":"actions/data","id-385":"create","destroy":"actions/data","id-389":"destroy","getbot-filters":"actions/data","id-249":"getbot-filters","getbots-filters":"actions/data","id-233":"getbots-filters","priorityShout":"actions/os/event","id-450":"priorityShout","shout":"actions/os/event","id-463":"shout","updateBotLinks":"actions/data","id-423":"updateBotLinks","whisper":"actions/os/event","id-489":"whisper","action.perform":"actions/os/event","id-1594":"action.perform","action.reject":"actions/os/event","id-1598":"action.reject","ai.chat-string":"actions/ai","id-650":"ai.chat-string","ai.chat-message":"actions/ai","id-653":"ai.chat-message","ai.chat-messages":"actions/ai","id-656":"ai.chat-messages","ai.generateImage-string":"actions/ai","id-669":"ai.generateImage-string","ai.generateImage-request":"actions/ai","id-673":"ai.generateImage-request","ai.generateSkybox-string":"actions/ai","id-661":"ai.generateSkybox-string","ai.generateSkybox-request":"actions/ai","id-665":"ai.generateSkybox-request","applyDiffToSnapshot":"actions/data","id-306":"applyDiffToSnapshot","applyMod":"actions/mods","id-375":"applyMod","assert":"actions/debuggers","id-634":"assert","assertEqual":"actions/debuggers","id-639":"assertEqual","atPosition":"actions/bot-filters","id-520":"atPosition","byCreator":"actions/bot-filters","id-541":"byCreator","byID":"actions/bot-filters","id-508":"byID","byMod":"actions/bot-filters","id-512":"byMod","bySpace":"actions/bot-filters","id-537":"bySpace","byTag":"actions/bot-filters","id-503":"byTag","bytes.fromBase64String":"actions/bytes","id-1807":"bytes.fromBase64String","bytes.fromBase64Url":"actions/bytes","id-1824":"bytes.fromBase64Url","bytes.fromHexString":"actions/bytes","id-1815":"bytes.fromHexString","bytes.toBase64String":"actions/bytes","id-1803":"bytes.toBase64String","bytes.toBase64Url":"actions/bytes","id-1819":"bytes.toBase64Url","bytes.toHexString":"actions/bytes","id-1811":"bytes.toHexString","clearAnimations":"actions/utility","id-605":"clearAnimations","clearTagMasks":"actions/data","id-329":"clearTagMasks","crypto.hash-raw":"actions/crypto","id-1830":"crypto.hash-raw","crypto.hash-string":"actions/crypto","id-1836":"crypto.hash-string","crypto.hmac-raw":"actions/crypto","id-1867":"crypto.hmac-raw","crypto.hmac-string":"actions/crypto","id-1860":"crypto.hmac-string","crypto.asymmetric.decrypt":"actions/crypto","id-1925":"crypto.asymmetric.decrypt","crypto.asymmetric.encrypt":"actions/crypto","id-1920":"crypto.asymmetric.encrypt","crypto.asymmetric.isEncrypted":"actions/crypto","id-1931":"crypto.asymmetric.isEncrypted","crypto.asymmetric.isKeypair":"actions/crypto","id-1916":"crypto.asymmetric.isKeypair","crypto.asymmetric.keypair":"actions/crypto","id-1912":"crypto.asymmetric.keypair","crypto.encrypt":"actions/crypto","id-1896":"crypto.encrypt","crypto.hmacSha256":"actions/crypto","id-1886":"crypto.hmacSha256","crypto.hmacSha512":"actions/crypto","id-1891":"crypto.hmacSha512","crypto.isEncrypted":"actions/crypto","id-1906":"crypto.isEncrypted","crypto.keypair":"actions/crypto","id-1935":"crypto.keypair","crypto.sha256":"actions/crypto","id-1852":"crypto.sha256","crypto.sha512":"actions/crypto","id-1856":"crypto.sha512","crypto.sign":"actions/crypto","id-1939":"crypto.sign","deleteTagMaskText":"actions/data","id-356":"deleteTagMaskText","deleteTagText":"actions/data","id-349":"deleteTagText","diffSnapshots":"actions/data","id-301":"diffSnapshots","either":"actions/bot-filters","id-545":"either","os.beginAudioRecording":"actions/os/audio","id-1641":"os.beginAudioRecording","experiment.beginRecording":"actions/experimental","id-1648":"experiment.beginRecording","os.endAudioRecording":"actions/os/audio","id-1645":"os.endAudioRecording","experiment.endRecording":"actions/experimental","id-1652":"experiment.endRecording","experiment.getAnchorPointPosition":"actions/experimental","id-1631":"experiment.getAnchorPointPosition","experiment.getVoices":"actions/experimental","id-1660":"experiment.getVoices","experiment.localFormAnimation":"actions/experimental","id-1604":"experiment.localFormAnimation","experiment.localPositionTween":"actions/experimental","id-1609":"experiment.localPositionTween","experiment.localRotationTween":"actions/experimental","id-1620":"experiment.localRotationTween","experiment.speakText":"actions/experimental","id-1655":"experiment.speakText","getBotLinks":"actions/data","id-419":"getBotLinks","getBotPosition":"actions/data","id-275":"getBotPosition","getBotRotation":"actions/data","id-280":"getBotRotation","getBotTagValues":"actions/data","id-265":"getBotTagValues","getFormattedJSON":"actions/data","id-293":"getFormattedJSON","getID":"actions/data","id-285":"getID","getJSON":"actions/data","id-289":"getJSON","getLink":"actions/data","id-415":"getLink","getMod":"actions/mods","id-270":"getMod","getSnapshot":"actions/data","id-297":"getSnapshot","getTag":"actions/data","id-311":"getTag","inDimension":"actions/bot-filters","id-516":"inDimension","inStack":"actions/bot-filters","id-526":"inStack","insertTagMaskText":"actions/data","id-341":"insertTagMaskText","insertTagText":"actions/data","id-334":"insertTagText","math.abs":"actions/math","id-1677":"math.abs","math.addVectors":"actions/math","id-1747":"math.addVectors","math.areClose":"actions/math","id-1778":"math.areClose","math.avg":"actions/math","id-1669":"math.avg","math.degreesToRadians":"actions/math","id-1703":"math.degreesToRadians","math.getAnchorPointOffset":"actions/math","id-1743":"math.getAnchorPointOffset","math.getForwardDirection":"actions/math","id-1711":"math.getForwardDirection","math.getSeededRandomNumberGenerator":"actions/math","id-1685":"math.getSeededRandomNumberGenerator","math.intersectPlane":"actions/math","id-1720":"math.intersectPlane","math.negateVector":"actions/math","id-1757":"math.negateVector","math.normalizeVector":"actions/math","id-1762":"math.normalizeVector","math.radiansToDegrees":"actions/math","id-1707":"math.radiansToDegrees","math.random":"actions/math","id-1698":"math.random","math.randomInt":"actions/math","id-1693":"math.randomInt","math.scaleVector":"actions/math","id-1772":"math.scaleVector","math.setRandomSeed":"actions/math","id-1689":"math.setRandomSeed","math.sqrt":"actions/math","id-1673":"math.sqrt","math.stdDev":"actions/math","id-1681":"math.stdDev","math.subtractVectors":"actions/math","id-1752":"math.subtractVectors","math.sum":"actions/math","id-1665":"math.sum","math.vectorLength":"actions/math","id-1767":"math.vectorLength","neighboring":"actions/bot-filters","id-531":"neighboring","not":"actions/bot-filters","id-552":"not","os.attachDebugger":"actions/debuggers","id-1550":"os.attachDebugger","os.createDebugger-normal":"actions/debuggers","id-1539":"os.createDebugger-normal","os.createDebugger-pausable":"actions/debuggers","id-1543":"os.createDebugger-pausable","os.focusOn-bot":"actions/os/portals","id-737":"os.focusOn-bot","os.focusOn-position":"actions/os/portals","id-742":"os.focusOn-position","os.getExecutingDebugger":"actions/debuggers","id-1547":"os.getExecutingDebugger","showChat-options":"actions/os/input","id-764":"showChat-options","showChat-placeholder":"actions/os/input","id-760":"showChat-placeholder","os.showInput":"actions/os/portals","id-983":"os.showInput","os.addBotDropGrid":"actions/os/portals","id-1053":"os.addBotDropGrid","os.addBotDropSnap":"actions/os/portals","id-1044":"os.addBotDropSnap","os.addDropGrid":"actions/os/portals","id-1049":"os.addDropGrid","os.addDropSnap":"actions/os/portals","id-1040":"os.addDropSnap","os.applyUpdatesToInst":"actions/os/spaces","id-1502":"os.applyUpdatesToInst","os.arSupported":"actions/os/xr","id-808":"os.arSupported","os.bufferFormAddressGLTF":"actions/os/animations","id-1460":"os.bufferFormAddressGLTF","os.bufferSound":"actions/os/audio","id-1016":"os.bufferSound","os.calculateRayFromCamera":"actions/os/portals","id-1455":"os.calculateRayFromCamera","os.cancelSound":"actions/os/audio","id-1020":"os.cancelSound","os.capturePhoto":"actions/os/camera","id-903":"os.capturePhoto","os.closeBarcodeScanner":"actions/os/barcodes","id-881":"os.closeBarcodeScanner","os.closeCircleWipe":"actions/os/portals","id-1032":"os.closeCircleWipe","os.closeImageClassifier":"actions/os/image-classification","id-896":"os.closeImageClassifier","os.closePhotoCamera":"actions/os/camera","id-907":"os.closePhotoCamera","os.closeQRCodeScanner":"actions/os/barcodes","id-867":"os.closeQRCodeScanner","os.compileApp":"actions/os/app","id-1167":"os.compileApp","os.convertGeolocationToWhat3Words":"actions/os/geolocation","id-1440":"os.convertGeolocationToWhat3Words","os.countEvents":"actions/os/records","id-1430":"os.countEvents","os.createInitializationUpdate":"actions/os/spaces","id-1498":"os.createInitializationUpdate","os.device":"actions/os/system","id-782":"os.device","os.disableAR":"actions/os/xr","id-798":"os.disableAR","os.disablePointOfView":"actions/os/portals","id-823":"os.disablePointOfView","os.disableVR":"actions/os/xr","id-805":"os.disableVR","os.disableWakeLock":"actions/os/portals","id-829":"os.disableWakeLock","os.download":"actions/os/files","id-835":"os.download","os.downloadBots":"actions/os/files","id-841":"os.downloadBots","os.downloadBotsAsInitialzationUpdate":"actions/os/files","id-846":"os.downloadBotsAsInitialzationUpdate","os.downloadInst":"actions/os/files","id-854":"os.downloadInst","os.enableAR":"actions/os/xr","id-794":"os.enableAR","os.enableCollaboration":"actions/os/spaces","id-788":"os.enableCollaboration","os.enableCustomDragging":"actions/os/portals","id-1058":"os.enableCustomDragging","os.enablePointOfView":"actions/os/portals","id-814":"os.enablePointOfView","os.enableVR":"actions/os/xr","id-801":"os.enableVR","os.eraseData":"actions/os/records","id-1373":"os.eraseData","os.eraseManualApprovalData":"actions/os/records","id-1379":"os.eraseManualApprovalData","os.exitFullscreenMode":"actions/os/portals","id-708":"os.exitFullscreenMode","os.getAverageFrameRate":"actions/os/portals","id-1115":"os.getAverageFrameRate","os.getCameraPosition":"actions/os/portals","id-1071":"os.getCameraPosition","os.getCameraRotation":"actions/os/portals","id-1075":"os.getCameraRotation","os.getCurrentDimension":"actions/os/portals","id-954":"os.getCurrentDimension","os.getCurrentInst":"actions/os/portals","id-960":"os.getCurrentInst","os.getCurrentInstUpdate":"actions/os/spaces","id-1506":"os.getCurrentInstUpdate","os.getData":"actions/os/records","id-1355":"os.getData","os.getDimensionalDepth":"actions/os/portals","id-973":"os.getDimensionalDepth","os.getFocusPoint":"actions/os/portals","id-1083":"os.getFocusPoint","os.getGeolocation":"actions/os/geolocation","id-1065":"os.getGeolocation","os.getInputList":"actions/os/portals","id-1108":"os.getInputList","os.getInputState":"actions/os/portals","id-1103":"os.getInputState","os.getInstStateFromUpdates":"actions/os/spaces","id-1494":"os.getInstStateFromUpdates","os.getManualApprovalData":"actions/os/records","id-1361":"os.getManualApprovalData","os.getMediaPermission":"actions/os/media","id-1111":"os.getMediaPermission","os.getMenuDimension":"actions/os/portals","id-963":"os.getMenuDimension","os.getMiniPortalDimension":"actions/os/portals","id-966":"os.getMiniPortalDimension","os.getPointerDirection":"actions/os/portals","id-1099":"os.getPointerDirection","os.getPointerPosition":"actions/os/portals","id-1087":"os.getPointerPosition","os.getPointerRotation":"actions/os/portals","id-1091":"os.getPointerRotation","os.getPortalDimension":"actions/os/portals","id-969":"os.getPortalDimension","os.getPublicRecordKey":"actions/os/records","id-1280":"os.getPublicRecordKey","os.getRoomOptions":"actions/os/rooms","id-1133":"os.getRoomOptions","os.getRoomRemoteOptions":"actions/os/rooms","id-1148":"os.getRoomRemoteOptions","os.getRoomTrackOptions":"actions/os/rooms","id-1137":"os.getRoomTrackOptions","os.getSubjectlessPublicRecordKey":"actions/os/records","id-1284":"os.getSubjectlessPublicRecordKey","os.getWakeLockConfiguration":"actions/os/portals","id-832":"os.getWakeLockConfiguration","os.goToDimension":"actions/os/portals","id-997":"os.goToDimension","os.goToURL":"actions/os/portals","id-1001":"os.goToURL","os.grantInstAdminPermission":"actions/os/records","id-1302":"os.grantInstAdminPermission","os.grantInstRole":"actions/os/records","id-1322":"os.grantInstRole","os.grantRecordMarkerPermission":"actions/os/records","id-1288":"os.grantRecordMarkerPermission","os.grantUserRole":"actions/os/records","id-1307":"os.grantUserRole","os.hasBotInMiniPortal":"actions/os/portals","id-1024":"os.hasBotInMiniPortal","os.hideBarcode":"actions/os/barcodes","id-889":"os.hideBarcode","os.hideChat":"actions/os/input","id-772":"os.hideChat","os.hideHtml":"actions/os/portals","id-715":"os.hideHtml","os.hideQRCode":"actions/os/barcodes","id-874":"os.hideQRCode","os.hideTips":"actions/os/portals","id-696":"os.hideTips","os.importAUX":"actions/os/files","id-938":"os.importAUX","os.inSheet":"actions/os/portals","id-1068":"os.inSheet","os.isCollaborative":"actions/os/spaces","id-785":"os.isCollaborative","os.isInDimension":"actions/os/portals","id-950":"os.isInDimension","os.isRecordKey":"actions/os/records","id-1337":"os.isRecordKey","os.joinRoom":"actions/os/rooms","id-1118":"os.joinRoom","os.leaveRoom":"actions/os/rooms","id-1123":"os.leaveRoom","os.listBuiltinTags":"actions/os/app","id-1268":"os.listBuiltinTags","os.listData":"actions/os/records","id-1367":"os.listData","os.listFormAnimations":"actions/os/animations","id-1475":"os.listFormAnimations","os.listInstUpdates":"actions/os/spaces","id-1491":"os.listInstUpdates","os.listUserStudios":"actions/os/records","id-1436":"os.listUserStudios","os.loadInst":"actions/os/spaces","id-930":"os.loadInst","os.log":"actions/os/system","id-1061":"os.log","os.meetCommand":"actions/os/meets","id-1527":"os.meetCommand","os.meetFunction":"actions/os/meets","id-1532":"os.meetFunction","os.mergeInstUpdates":"actions/os/spaces","id-1509":"os.mergeInstUpdates","os.openBarcodeScanner":"actions/os/barcodes","id-877":"os.openBarcodeScanner","os.openCircleWipe":"actions/os/portals","id-1036":"os.openCircleWipe","os.openDevConsole":"actions/os/system","id-1009":"os.openDevConsole","os.openImageClassifier":"actions/os/image-classification","id-892":"os.openImageClassifier","os.openPhotoCamera":"actions/os/camera","id-899":"os.openPhotoCamera","os.openQRCodeScanner":"actions/os/barcodes","id-863":"os.openQRCodeScanner","os.openURL":"actions/os/portals","id-1005":"os.openURL","os.parseBotsFromData":"actions/os/files","id-942":"os.parseBotsFromData","os.playSound":"actions/os/audio","id-1012":"os.playSound","os.raycast":"actions/os/portals","id-1449":"os.raycast","os.raycastFromCamera":"actions/os/portals","id-1444":"os.raycastFromCamera","os.recordData":"actions/os/records","id-1341":"os.recordData","os.recordEvent":"actions/os/records","id-1424":"os.recordEvent","os.recordFile":"actions/os/records","id-1385":"os.recordFile","os.recordManualApprovalData":"actions/os/records","id-1348":"os.recordManualApprovalData","os.registerApp":"actions/os/app","id-1158":"os.registerApp","os.registerTagPrefix":"actions/os/app","id-1153":"os.registerTagPrefix","os.remoteCount":"actions/os/remotes","id-1513":"os.remoteCount","os.remotes":"actions/os/remotes","id-1488":"os.remotes","os.replaceDragBot":"actions/os/portals","id-946":"os.replaceDragBot","os.reportInst":"actions/os/moderation","id-1271":"os.reportInst","os.requestAuthBot":"actions/os/records","id-1274":"os.requestAuthBot","os.requestAuthBotInBackground":"actions/os/records","id-1277":"os.requestAuthBotInBackground","os.requestFullscreenMode":"actions/os/portals","id-705":"os.requestFullscreenMode","os.requestWakeLock":"actions/os/portals","id-826":"os.requestWakeLock","os.revokeInstRole":"actions/os/records","id-1330":"os.revokeInstRole","os.revokeRecordMarkerPermission":"actions/os/records","id-1295":"os.revokeRecordMarkerPermission","os.revokeUserRole":"actions/os/records","id-1315":"os.revokeUserRole","os.run":"actions/os/system","id-775":"os.run","os.setClipboard":"actions/os/clipboard","id-718":"os.setClipboard","os.setRoomOptions":"actions/os/rooms","id-1128":"os.setRoomOptions","os.setRoomTrackOptions":"actions/os/rooms","id-1142":"os.setRoomTrackOptions","os.share":"actions/os/input","id-1028":"os.share","os.showBarcode":"actions/os/barcodes","id-884":"os.showBarcode","os.showConfirm":"actions/os/portals","id-993":"os.showConfirm","os.showHtml":"actions/os/portals","id-711":"os.showHtml","os.showInputForTag":"actions/os/portals","id-977":"os.showInputForTag","os.showJoinCode":"actions/os/barcodes","id-700":"os.showJoinCode","os.showQRCode":"actions/os/barcodes","id-870":"os.showQRCode","os.showUploadAuxFile":"actions/os/files","id-857":"os.showUploadAuxFile","os.showUploadFiles":"actions/os/files","id-860":"os.showUploadFiles","os.sleep":"actions/os/system","id-680":"os.sleep","os.startFormAnimation":"actions/os/animations","id-1464":"os.startFormAnimation","os.stopFormAnimation":"actions/os/animations","id-1470":"os.stopFormAnimation","os.tip":"actions/os/portals","id-689":"os.tip","os.toast":"actions/os/portals","id-684":"os.toast","os.totalRemoteCount":"actions/os/remotes","id-1517":"os.totalRemoteCount","os.unloadInst":"actions/os/spaces","id-934":"os.unloadInst","os.unregisterApp":"actions/os/app","id-1163":"os.unregisterApp","os.version":"actions/os/system","id-779":"os.version","os.vrSupported":"actions/os/xr","id-811":"os.vrSupported","os.agreedUponTime":"actions/os/time","id-911":"os.agreedUponTime","os.deadReckoningTime":"actions/os/time","id-919":"os.deadReckoningTime","os.instLatency":"actions/os/time","id-913":"os.instLatency","os.instTimeOffset":"actions/os/time","id-915":"os.instTimeOffset","os.instTimeOffsetSpread":"actions/os/time","id-917":"os.instTimeOffsetSpread","os.localTime":"actions/os/time","id-909":"os.localTime","remote":"actions/os/event","id-559":"remote","sendRemoteData":"actions/os/event","id-571":"sendRemoteData","removeTags":"actions/data","id-364":"removeTags","renameTag":"actions/data","id-369":"renameTag","setTag":"actions/data","id-316":"setTag","setTagMask":"actions/data","id-322":"setTagMask","subtractMods":"actions/mods","id-380":"subtractMods","superShout":"actions/os/event","id-445":"superShout","uuid":"actions/data","id-582":"uuid","web.get":"actions/web","id-1958":"web.get","web.hook":"actions/web","id-1969":"web.hook","web.post":"actions/web","id-1963":"web.post","configBot":"actions/os/system","id-645":"configBot"}}');var n=t(1601);t(5058),t(6967);const r={id:"debuggers",title:"debuggers",sidebar_label:"debuggers",description:"API Docs for debuggers"},c=void 0,d={id:"types/debuggers",title:"debuggers",description:"API Docs for debuggers",source:"@site/docs/types/debuggers.mdx",sourceDirName:"types",slug:"/types/debuggers",permalink:"/types/debuggers",draft:!1,unlisted:!1,editUrl:"https://github.com/casual-simulation/casualos/tree/develop/docs/docs/types/debuggers.mdx",tags:[],version:"current",frontMatter:{id:"debuggers",title:"debuggers",sidebar_label:"debuggers",description:"API Docs for debuggers"}},p={},l=[...(0,n.KO)(a)];function m(o){return(0,e.jsx)(n.hl,{doc:a})}function u(o={}){const{wrapper:s}={...(0,i.a)(),...o.components};return s?(0,e.jsx)(s,{...o,children:(0,e.jsx)(m,{...o})}):m()}}}]);