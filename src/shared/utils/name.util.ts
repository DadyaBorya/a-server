export function capitalizeFullName(lastName, firstName, patronymic) {
	const capitalize = (str: string) =>
		str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()

	return `${capitalize(lastName)} ${capitalize(firstName)} ${capitalize(patronymic)}`
}

export function getFullnameFromParts({
	lastName,
	firstName,
	patronymic
}: {
	lastName: string
	firstName: string
	patronymic: string
}) {
	const result = `${lastName} ${firstName} ${patronymic}`

	return result.replace(/\s+/g, ' ')
}

export function getShortenedFullName({
	lastName,
	firstName,
	patronymic
}: {
	lastName: string
	firstName: string
	patronymic: string
}): string {
	const capitalize = (str: string) =>
		str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()

	const shortFirstName = firstName.charAt(0).toUpperCase()
	const shortPatronymic = patronymic.charAt(0).toUpperCase()

	const result = `${capitalize(lastName)} ${shortFirstName}.${shortPatronymic}.`

	return result.replace(/\s+/g, ' ')
}

export function parseFullName(fullName: string): {
	lastName: string
	firstName: string
	patronymic: string
} {
	const parts = fullName.trim().split(/\s+/)

	const [lastName, firstName, patronymic] = parts

	return { lastName, firstName, patronymic }
}
