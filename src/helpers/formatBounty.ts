const formatBounty = (bounty: number): string => {
	const bountyString = bounty.toString();
	const bountyLength = bountyString.length;
	const bountyArray = [];
	let counter = 0;
	let tempString = '';
	for (let i = bountyLength - 1; i >= 0; i--) {
		tempString = bountyString[i] + tempString;
		counter++;
		if (counter === 3) {
			bountyArray.unshift(tempString);
			tempString = '';
			counter = 0;
		}
	}
	if (tempString !== '') {
		bountyArray.unshift(tempString);
	}
	const formattedBounty = bountyArray.join(',');
	return formattedBounty;
};

export default formatBounty;
