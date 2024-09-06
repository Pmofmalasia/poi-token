[h,if(macro.args != ""): switchToken(macro.args)]
[h,if(getProperty("com.pm.poi.IsPoIToken") == ""): assert(0,"Token "+getName()+" was not updated as it is not a PoI token.")]
[h:currentMacros = getMacros("json")]
[h:allIndexes = "[]"]
[h,foreach(macro,currentMacros): allIndexes = json.merge(allIndexes,getMacroIndexes(macro,"json"))]
[h,foreach(index,allIndexes): removeMacro(index)]

[h:createMacro(json.set("",
	"label","bigger",
	"command",'[h,macro("adjustSize@Lib:com.pm.poi"): 1]',
	"group","01. Settings",
	"applyToSelected",1,
	"color","black",
	"fontColor","white",
	"minWidth",89
))]

[h:createMacro(json.set("",
	"label","smaller",
	"command",'[h,macro("adjustSize@Lib:com.pm.poi"): -1]',
	"group","01. Settings",
	"applyToSelected",1,
	"color","black",
	"fontColor","white",
	"minWidth",89
))]

[h:createMacro(json.set("",
	"label","Check for New Images",
	"command",'[h,macro("updatePoIToken@Lib:com.pm.poi"): currentToken()]',
	"group","01. Settings",
	"applyToSelected",1,
	"color","white",
	"fontColor","black",
	"minWidth",192
))]

[h:createMacro(json.set("",
	"label","Pick a Number",
	"command",'[h,macro("setPoINumber@Lib:com.pm.poi"): ""]',
	"group","02. Icons",
	"applyToSelected",1,
	"color","black",
	"fontColor","white",
	"fontSize","1.25em",
	"minWidth",192
))]

[h:Images = library.getContents("com.pm.poi")]
[h:js.pm.poi.MacrosFromAssets(Images,currentToken())]