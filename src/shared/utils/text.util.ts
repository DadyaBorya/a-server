export function cleanText(text: string): string {
	return text
		.replace(/[\n\r\t]+/g, ' ')
		.replace(/\s+/g, ' ')
		.trim()
}
