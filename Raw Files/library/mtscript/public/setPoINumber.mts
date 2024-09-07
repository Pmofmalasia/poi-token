[h:abort(input(
	" newNumber |  | Pick a Number 0-100 "
))]

[h,if(!isNumber(newNumber)): assert(0,"Your input must be a number!")]

[h,if(newNumber < 0 || newNumber > 100): assert(0,"Your input must be between 0 and 100!")]

[h:setTokenImage("lib://com.pm.poi/numbers/marker-"+newNumber+".webp")]