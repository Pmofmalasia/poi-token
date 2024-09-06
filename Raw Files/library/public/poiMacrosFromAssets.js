function poiMacrosFromAssets(images,ParentTokenID){
	let macroData = [];
	for(let image of images){
		if(image.substring(0,7) != "public/" || image.substring(7,14) == "numbers"){
			continue;
		}

		let groupID;
		if(image.substring(7,12) === "icons"){
			groupID = "02. Icons";
		}
		if(image.substring(7,12) === "items"){
			groupID = "03. Items";
		}

		if(groupID !== undefined){
			let imageName = image.substring(image.indexOf("/",8) + 1,image.indexOf(".",10));
			let imagePath = "lib://com.pm.poi/"+image.substring(7);
			let thisMacroData = JSON.stringify({
				label:"<!--"+imageName+"--> <img height=40 width=40 src="+'"'+imagePath+'"'+"></img>",
				command:`[h:setTokenImage("${imagePath}")]`,
				group:groupID,
				applyToSelected:1,
				color:"white",
				fontColor:"black",
				minWidth:89
			});

			MTScript.setVariable("thisMacroData",thisMacroData);
			MTScript.evalMacro(`[h:createMacro(thisMacroData,"${ParentTokenID}")]`);
		}
	}
}

MTScript.registerMacro("pm.poi.MacrosFromAssets",poiMacrosFromAssets);