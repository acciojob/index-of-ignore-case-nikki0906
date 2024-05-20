function indexOfIgnoreCase(s1, s2) {
  // write your code here
	const lowerStr = s1.toLowerCase();
    const lowerSubStr = s2.toLowerCase();
    
    // Use the indexOf method to find the first occurrence
    return lowerStr.indexOf(lowerSubStr);
}

const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
