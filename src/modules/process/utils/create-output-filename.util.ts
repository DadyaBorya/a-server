export function createOutputFilename(date: Date, owner: string, type: string) {
	const formatDate = (date: Date): string => {
		const year = date.getFullYear()
		const month = String(date.getMonth() + 1).padStart(2, '0')
		const day = String(date.getDate()).padStart(2, '0')
		const hours = String(date.getHours()).padStart(2, '0')
		const minutes = String(date.getMinutes()).padStart(2, '0')
		const seconds = String(date.getSeconds()).padStart(2, '0')

		return `${year}-${month}-${day}_${hours}-${minutes}-${seconds}`
	}

	const sanitizeString = (str: string): string => {
		return str.replace(/\s+/g, '_').toLowerCase()
	}

	const formattedDate = formatDate(date)
	const sanitizedOwner = sanitizeString(owner)
	const sanitizedType = sanitizeString(type)

	return `${sanitizedType}_${sanitizedOwner}_${formattedDate}.docx`
}
