function maxNumber(mass) {
	maxN = mass[0];
for (var i = 0; i < mass.length; i++) {
	if (maxN < mass[i]) {
		maxN = mass[i];
	}
}  
return (alert(maxN));
}
var list = [34, 1, 529, -78, 89.7, 1243];

maxNumber(list);
