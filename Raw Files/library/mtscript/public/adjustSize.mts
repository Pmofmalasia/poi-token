[h:direction = macro.args]
[h:"<!-- direction is either 1 or -1 -->"]
[h:sizeArray = json.append("","Fine","Diminutive","Tiny","Small","Medium","Large","Huge","Gargantuan","Colossal")]

[h:startingIndex = json.indexOf(sizeArray,getSize())]
[h:newIndex = startingIndex + direction]

[h,if(newIndex<0),CODE:{
	[h:finalSize = "Fine"]
};{
	[h,if(newIndex > json.length(sizeArray)-1): finalSize = "Colossal"; finalSize = json.get(sizeArray,newIndex)]
}]

[h:setSize(finalSize)]