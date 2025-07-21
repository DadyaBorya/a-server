export function translateUkrainian(ukrainianName) {
	const transliterationMap = {
		а: 'a',
		б: 'b',
		в: 'v',
		г: 'h',
		ґ: 'g',
		д: 'd',
		е: 'e',
		є: 'ie',
		ж: 'zh',
		з: 'z',
		и: 'y',
		і: 'i',
		ї: 'i',
		й: 'i',
		к: 'k',
		л: 'l',
		м: 'm',
		н: 'n',
		о: 'o',
		п: 'p',
		р: 'r',
		с: 's',
		т: 't',
		у: 'u',
		ф: 'f',
		х: 'kh',
		ц: 'ts',
		ч: 'ch',
		ш: 'sh',
		щ: 'shch',
		ь: '',
		ю: 'iu',
		я: 'ia',
		"'": ''
	}

	const specialRules = {
		є: 'ye',
		ї: 'yi',
		й: 'y',
		ю: 'yu',
		я: 'ya'
	}

	if (!ukrainianName || typeof ukrainianName !== 'string') {
		return ''
	}

	let result = ''
	const words = ukrainianName.trim().split(/\s+/)

	words.forEach((word, wordIndex) => {
		if (wordIndex > 0) {
			result += ' '
		}

		for (let i = 0; i < word.length; i++) {
			const char = word[i]
			const lowerChar = char.toLowerCase()
			const prevChar = i > 0 ? word[i - 1].toLowerCase() : ''
			const isWordStart = i === 0
			const isUpperCase = char !== lowerChar

			let transliterated = ''

			if (isWordStart && specialRules[lowerChar]) {
				transliterated = specialRules[lowerChar]
			} else if (lowerChar === 'г' && prevChar === 'з') {
				transliterated = 'gh'
			} else if (transliterationMap.hasOwnProperty(lowerChar)) {
				transliterated = transliterationMap[lowerChar]
			} else {
				transliterated = char
			}

			if (isUpperCase && transliterated) {
				transliterated =
					transliterated.charAt(0).toUpperCase() +
					transliterated.slice(1)
			}

			result += transliterated
		}
	})

	return result
}
