export function parseDate(dateString: string | number | unknown): Date | null {
	try {
		if (typeof dateString === 'number') {
			const baseDate = new Date(Date.UTC(1899, 11, 30))
			return new Date(
				baseDate.getTime() + dateString * 24 * 60 * 60 * 1000
			)
		}

		if (typeof dateString !== 'string') {
			return null
		}

		const dateRegex = /^\d{2}\.\d{2}\.\d{4}$/
		if (!dateRegex.test(dateString)) {
			return null
		}

		const [day, month, year] = dateString.split('.').map(Number)
		const date = new Date(Date.UTC(year, month - 1, day))

		if (
			date.getFullYear() === year &&
			date.getMonth() === month - 1 &&
			date.getDate() === day
		) {
			return date
		}

		return null
	} catch {
		return null
	}
}
