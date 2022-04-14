let metas = {
	twitterTitle: {
		property: "twitter:title",
		content: "Twitter Title"
	},
	twitterCard: {
		name: "twitter:card",
		content: "app"
	},
	twitterDesc: {
		name: "twitter:description",
		content: "Twitter Description"
	},
	ogTitle: {
		property: "og:title",
		content: "OG Title"
	},
	ogDescription: {
		property: "og:description",
		content: "OG Description"
	}
};

// self-executing function
(function generateMetas() {
	for (const [metaName, metaObject] of Object.entries(metas)) {
		let metaEl = document.createElement("meta");
		metaEl.setAttribute(Object.entries(metaObject)[0][0], Object.entries(metaObject)[0][1]);
		metaEl.setAttribute(Object.entries(metaObject)[1][0], Object.entries(metaObject)[1][1]);

		document.head.appendChild(metaEl);
	}
})();
