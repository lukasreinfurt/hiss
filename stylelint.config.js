const bemSelector = (block, presetOptions) => {
	const ns =
		presetOptions && presetOptions.namespace
			? `${presetOptions.namespace}-`
			: "";
	const WORD = "[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*";
	const element = `(?:__${WORD})?`;
	const modifier = `(?:\.-${WORD}){0,2}`;
	const attribute = "(?:\\[.+\\])?";
	return new RegExp(`^\\.${ns}${block}${element}${modifier}${attribute}$`);
};

module.exports = {
	extends: "stylelint-config-recommended",
	plugins: [
		"stylelint-high-performance-animation",
		"stylelint-no-unsupported-browser-features",
		"stylelint-order",
		"stylelint-selector-bem-pattern"
	],
	rules: {
		"block-no-empty": null,
		"order/order": ["custom-properties", "declarations"],
		"order/properties-alphabetical-order": true,
		"plugin/no-low-performance-animation-properties": true,
		"plugin/no-unsupported-browser-features": [
			true,
			{
				severity: "warning"
			}
		],
		"plugin/selector-bem-pattern": {
			implicitComponents: ["src/assets/css/components/**/*.css"],
			preset: "bem",
			componentSelectors: bemSelector
		}
	}
};
