export function normalizeCarPlateNumber(plateNumber: string): string {
	const cleanNumber = plateNumber.replace(/\s+/g, '')

	if (cleanNumber.length !== 8) {
		return plateNumber
	}

	const firstPart = cleanNumber.substring(0, 2)
	const middlePart = cleanNumber.substring(2, 6)
	const lastPart = cleanNumber.substring(6, 8)

	return `${firstPart}\u00A0${middlePart}\u00A0${lastPart}`
}

export function normalizeCarColor(color: string): string {
	const cleanColor = color.replace(/^\d+\s*-\s*/, '').trim()

	const colorMap: Record<string, string> = {
		СІРИЙ: 'сірого',
		ЧЕРВОНИЙ: 'червоного',
		СИНІЙ: 'синього',
		ЧОРНИЙ: 'чорного',
		БІЛИЙ: 'білого',
		ЗЕЛЕНИЙ: 'зеленого',
		ЖОВТИЙ: 'жовтого',
		КОРИЧНЕВИЙ: 'коричневого',
		ФІОЛЕТОВИЙ: 'фіолетового',
		РОЖЕВИЙ: 'рожевого',
		ОРАНЖЕВИЙ: 'оранжевого',
		БЕЖЕВИЙ: 'бежевого',
		ЗОЛОТИЙ: 'золотого',
		СРІБНИЙ: 'срібного',
		'ТЕМНО-СІРИЙ': 'темно-сірого',
		'СВІТЛО-СІРИЙ': 'світло-сірого',
		'ТЕМНО-СИНІЙ': 'темно-синього',
		'СВІТЛО-СИНІЙ': 'світло-синього',
		'ТЕМНО-ЗЕЛЕНИЙ': 'темно-зеленого',
		'СВІТЛО-ЗЕЛЕНИЙ': 'світло-зеленого',
		БОРДОВИЙ: 'бордового',
		МЕТАЛІК: 'металік'
	}

	const normalizedColor = colorMap[cleanColor.toUpperCase()]

	return normalizedColor || cleanColor.toLowerCase()
}

export function normalizeTransfer(transfer: string): string {
	return transfer
		.replace(/^\d+\s*-\s*/, '')
		.replace(/\s*\(.*?\)\s*$/, '')
		.trim()
		.toLowerCase()
		.replace('тз', 'ТЗ')
}

export function normalizeDriverLicenceIssuedBy(text: string): string {
	const lowercaseWords = new Set([
		'в',
		'з',
		'та',
		'по',
		'до',
		'на',
		'із',
		'за',
		'при',
		'для',
		'у',
		'о',
		'об',
		'над',
		'під',
		'біля',
		'без',
		'від',
		'обслуговування',
		'район',
		'району',
		'районів',
		'область',
		'області',
		'областях',
		'м.',
		'м',
		'с.',
		'с',
		'смт.',
		'смт',
		'місто',
		'село'
	])

	const keepUpper = new Set(['ДАІ', 'ТСЦ', 'МВС', 'РСЦ', 'ВРЕР'])

	const words = text.trim().split(/\s+/)
	const normalizedWords: string[] = []

	for (let i = 0; i < words.length; i++) {
		const word = words[i]
		const upperWord = word.toUpperCase()
		const lowerWord = word.toLowerCase()

		if (keepUpper.has(upperWord)) {
			normalizedWords.push(upperWord)
		} else if (lowercaseWords.has(lowerWord) && i !== 0) {
			normalizedWords.push(lowerWord)
		} else if (/^[А-ЯЇЄІҐ]+\.$/u.test(word)) {
			normalizedWords.push(
				word[0].toUpperCase() + word.slice(1).toLowerCase()
			)
		} else {
			normalizedWords.push(
				word[0].toUpperCase() + word.slice(1).toLowerCase()
			)
		}
	}

	return normalizedWords.join(' ')
}

export function normalizeRegistrationPlace(text: string): string {
	const REGIONAL_CITIES = new Set([
		'Київ',
		'Харків',
		'Львів',
		'Одеса',
		'Дніпро',
		'Житомир',
		'Чернівці',
		'Івано-Франківськ',
		'Полтава',
		'Чернігів',
		'Хмельницький',
		'Тернопіль',
		'Рівне',
		'Ужгород',
		'Миколаїв',
		'Запоріжжя',
		'Суми',
		'Луцьк',
		'Кропивницький',
		'Черкаси',
		'Херсон'
	])

	const REPLACEMENTS: Record<string, string> = {
		ОБЛ: 'обл',
		'Р-Н.': 'р-н',
		РН: 'р-н',
		'С.': 'с',
		С: 'с',
		М: 'м',
		ВУЛ: 'вул',
		'ПР-Т': 'пр-т',
		ПР: 'пр',
		ПРОВ: 'пров',
		ПЛ: 'пл',
		'Б-Р': 'б-р'
	}

	const parts = text.split(',').map(part => part.trim())
	const cleanedParts: string[] = []

	let cityFound: string | null = null

	for (let part of parts) {
		for (const [key, val] of Object.entries(REPLACEMENTS)) {
			const regex = new RegExp(`\\b${key}\\b`, 'gi')
			part = part.replace(regex, val)
		}

		const words = part.split(/\s+/).map(word => {
			if (word.endsWith('.') || word.includes('-')) {
				return word.toLowerCase()
			}
			return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
		})

		const normPart = words.join(' ')

		if (/^м\. /i.test(normPart)) {
			const cityName = normPart.slice(3).trim()
			if (REGIONAL_CITIES.has(cityName)) {
				cityFound = cityName
			}
		}

		cleanedParts.push(normPart)
	}

	const finalParts = cityFound
		? cleanedParts.filter(p => !/обл\.|р-н/i.test(p))
		: cleanedParts

	return finalParts.join(', ')
}
