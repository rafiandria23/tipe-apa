export function isArray(input: any): boolean {
	return (
		input &&
		typeof input === "object" &&
		input.constructor === Array &&
		Array.isArray(input)
	);
}

export function isBoolean(input: any): boolean {
	return typeof input === "boolean";
}

export function isDate(input: any): boolean {
	return input instanceof Date;
}

export function isError(input: any): boolean {
	return input instanceof Error && typeof input.message !== "undefined";
}

export function isFunction(input: any): boolean {
	return typeof input === "function";
}

export function isNull(input: any): boolean {
	return input === null;
}

export function isNumber(input: any): boolean {
	return typeof input === "number" || input instanceof Number;
}

export function isObject(input: any): boolean {
	return input && typeof input === "object" && input.constructor === Object;
}

export function isRegExp(input: any): boolean {
	return input && typeof input === "object" && input.constructor === RegExp;
}

export function isString(input: any): boolean {
	return typeof input === "string" || input instanceof String;
}

export function isSymbol(input: any): boolean {
	return typeof input === "symbol";
}

export function isUndefined(input: any): boolean {
	return typeof input === "undefined";
}

export type CheckTypeOutput = {
	type: string;
	target: any;
};

export type CheckTypeOptions = {
	throwUnknown: boolean;
};

export function checkType(
	input: any,
	options: CheckTypeOptions = {
		throwUnknown: false,
	}
): CheckTypeOutput {
	if (isString(input)) {
		return {
			type: "string",
			target: input,
		};
	} else if (isNumber(input)) {
		return {
			type: "number",
			target: input,
		};
	} else if (isArray(input)) {
		return {
			type: "array",
			target: input,
		};
	} else if (isObject(input)) {
		return {
			type: "object",
			target: input,
		};
	} else if (isFunction(input)) {
		return {
			type: "function",
			target: input,
		};
	} else if (isNull(input)) {
		return {
			type: "null",
			target: input,
		};
	} else if (isUndefined(input)) {
		return {
			type: "undefined",
			target: input,
		};
	} else if (isBoolean(input)) {
		return {
			type: "boolean",
			target: input,
		};
	} else if (isRegExp(input)) {
		return {
			type: "regexp",
			target: input,
		};
	} else if (isError(input)) {
		return {
			type: "error",
			target: input,
		};
	} else if (isDate(input)) {
		return {
			type: "date",
			target: input,
		};
	} else if (isSymbol(input)) {
		return {
			type: "symbol",
			target: input,
		};
	}

	if (options.throwUnknown) {
		const err = new Error("Cannot check type of unknown!");
		err.name = "Unknown Type";

		throw err;
	}

	return {
		type: "unknown",
		target: input,
	};
}
