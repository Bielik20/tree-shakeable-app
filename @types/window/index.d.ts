interface Ads {
	runtime: {
		bab?: any;
		disableSecondCall: boolean;
		disableBtf: boolean;
	};
}

interface Window {
	__cmp?: any;
	ads: Ads;
	adsQueue?: any;
	mw?: any;
	pbjs?: any;
	RLQ?: any;
	XMLHttpRequest?: any;
}
