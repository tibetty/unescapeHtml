module.exports = s => s.replace(/&[#a-z0-9]+?;/ig, m => {
			const entities = {
				// grave accented letters
				'&Agrave;': 'À',
				'&Egrave;': 'È',
				'&Igrave;': 'Ì',
				'&Ograve;': 'Ò',
				'&Ugrave;': 'Ù',
				'&agrave;': 'à',
				'&egrave;': 'è',
				'&igrave;': 'ì',
				'&ograve;': 'ò',
				'&ugrave;': 'ù',
				// acute accented letters
				'&Aacute;': 'Á',
				'&Eacute;': 'É',
				'&Iacute;': 'Í',
				'&Oacute;': 'Ó',
				'&Uacute;': 'Ú',
				'&Yacute;': 'Ý',
				'&aacute;': 'á',
				'&eacute;': 'é',
				'&iacute;': 'í',
				'&oacute;': 'ó',
				'&uacute;': 'ú',
				'&yacute;': 'ý',
				// circumflex accented letters
				'&Acirc;': 'Â',
				'&Ecirc;': 'Ê',
				'&Icirc;': 'Î',
				'&Ocirc;': 'Ô',
				'&Ucirc;': 'Û',
				'&acirc;': 'â',
				'&ecirc;': 'ê',
				'&icirc;': 'î',
				'&ocirc;': 'ô',
				'&ucirc;': 'û',
				// tilde accented letters
				'&Atilde;': 'Ã',
				'&Ntilde;': 'Ñ',
				'&Otilde;': 'Õ',
				'&atilde;': 'ã',
				'&ntilde;': 'ñ',
				'&otilde;': 'õ',
				// umlaut accented letters
				'&Auml;': 'Ä',
				'&Euml;': 'Ë',
				'&Iuml;': 'Ï',
				'&Ouml;': 'Ö',
				'&Uuml;': 'Ü',
				'&Yuml;': 'Ÿ',
				'&auml;': 'ä',
				'&euml;': 'ë',
				'&iuml;': 'ï',
				'&ouml;': 'ö',
				'&uuml;': 'ü',
				'&yuml;': 'ÿ',
				// other foreign characters
				'&iexcl;': '¡',
				'&iquest;': '¿',
				'&Ccedil;': 'Ç',
				'&ccedil;': 'ç',
				'&OElig;': 'Œ',
				'&oelig;': 'œ',
				'&ordm;': 'º',
				'&ordf;': 'ª',
				'&szlig;': 'ß',
				'&Oslash;': 'Ø',
				'&oslash;': 'ø',
				'&Aring;': 'Å',
				'&aring;': 'å',
				'&AElig;': 'Æ',
				'&aelig;': 'æ',
				'&THORN;': 'Þ',
				'&thorn;': 'þ',
				'&ETH;': 'Ð',
				'&eth;': 'ð',
				// currency units
				'&cent;': '¢',
				'&pound;': '£',
				'&yen;': '¥',
				'&euro;': '€',
				'&curren;': '¤',
				'&fnof;': 'ƒ',
				// math symbols
				'&gt;': '>',
				'&lt;': '<',
				'&divide;': '÷',
				'&deg;': '°',
				'&not;': '¬',
				'&plusmn;': '±',
				'&micro;': 'µ',
				'&there4;': '∴',
				'&ne;': '≠',
				'&ge;': '≥',
				'&le;': '≤',
				'&asymp;': '≈',
				'&radic;': '√',
				'&infin;': '∞',
				'&int;': '∫',
				'&part;': '∂',
				'&prime;': '′',
				'&Prime;': '″',
				'&sum;': '∑',
				'&prod;': '∏',
				'&permil;': '‰',
				'&equiv;': '≡',
				'&oline;': '‾',
				'&frasl;': '⁄',
				'&weierp;': '℘',
				'&image;': 'ℑ',
				'&real;': 'ℜ',
				'&alefsym;': 'ℵ',
				'&forall;': '∀',
				'&exist;': '∃',
				'&empty;': '∅',
				'&nabla;': '∇',
				'&isin;': '∈',
				'&notin;': '∉',
				'&ni;': '∋',
				'&minus;': '−',
				'&lowast;': '∗',
				'&prop;': '∝',
				'&ang;': '∠',
				'&and;': '∧',
				'&or;': '∨',
				'&cap;': '∩',
				'&cup;': '∪',
				'&sim;': '∼',
				'&cong;': '≅',
				'&asymp;': '≈',
				'&sub;': '⊂',
				'&sup;': '⊃',
				'&nsub;': '⊄',
				'&sube;': '⊆',
				'&supe;': '⊇',
				'&oplus;': '⊕',
				'&otimes;': '⊗',
				'&perp;': '⊥',
				'&sdot;': '⋅',
				'&lceil;': '⌈',
				'&rceil;': '⌉',
				'&lfloor;': '⌊',
				'&rfloor;': '⌋',
				'&lang;': '〈',
				'&rang;': '〉',
				// punctuations and others
				'&nbsp;': ' ',
				'&amp;': '&',
				'&apos;': '\'',
				'&quot;': '"',
				'&laquo;': '«',
				'&raquo;': '»',
				'&lsaquo;': '‹',
				'&rsaquo;': '›',
				'&sbquo;': '‚',
				'&bdquo;': '„',
				'&ldquo;': '“',
				'&rdquo;': '”',
				'&lsquo;': '‘',
				'&rsquo;': '’',
				'&hellip;': '…',
				'&reg;': '®',
				'&copy;': '©',
				'&trade;': '™',
				'&para;': '¶',
				'&bull;': '•',
				'&middot;': '·',
				'&sect;': '§',
				'&ndash;': '–',
				'&mdash;': '—',
				'&dagger;': '†',
				'&Dagger;': '‡',
				'&loz;': '◊',
				'&uarr;': '↑',
				'&darr;': '↓',
				'&larr;': '←',
				'&rarr;': '→',
				'&harr;': '↔',
				'&crarr;': '↵',
				'&lArr;': '⇐',
				'&uArr;': '⇑',
				'&rArr;': '⇒',
				'&dArr;': '⇓',
				'&hArr;': '⇔',
				'&spades;': '♠',
				'&clubs;': '♣',
				'&hearts;': '♥',
				'&diams;': '♦',
				// Greek letters
				'&Alpha;': 'Α',
				'&Beta;': 'Β',
				'&Gamma;': 'Γ',
				'&Delta;': 'Δ',
				'&Epsilon;': 'Ε',
				'&Zeta;': 'Ζ',
				'&Eta;': 'Η',
				'&Theta;': 'Θ',
				'&Iota;': 'Ι',
				'&Kappa;': 'Κ',
				'&Lambda;': 'Λ',
				'&Mu;': 'Μ',
				'&Nu;': 'Ν',
				'&Xi;': 'Ξ',
				'&Omicron;': 'Ο',
				'&Pi;': 'Π',
				'&Rho;': 'Ρ',
				'&Sigma;': 'Σ',
				'&Tau;': 'Τ',
				'&Upsilon;': 'Υ',
				'&Phi;': 'Φ',
				'&Chi;': 'Χ',
				'&Psi;': 'Ψ',
				'&Omega;': 'Ω',
				'&alpha;': 'α',
				'&beta;': 'β',
				'&gamma;': 'γ',
				'&delta;': 'δ',
				'&epsilon;': 'ε',
				'&zeta;': 'ζ',
				'&eta;': 'η',
				'&theta;': 'θ',
				'&iota;': 'ι',
				'&kappa;': 'κ',
				'&lambda;': 'λ',
				'&mu;': 'μ',
				'&nu;': 'ν',
				'&xi;': 'ξ',
				'&omicron;': 'ο',
				'&pi;': 'π',
				'&rho;': 'ρ',
				'&sigmaf;': 'ς',
				'&sigma;': 'σ',
				'&tau;': 'τ',
				'&upsilon;': 'υ',
				'&phi;': 'φ',
				'&chi;': 'χ',
				'&psi;': 'ψ',
				'&omega;': 'ω',
				'&thetasym;': 'ϑ',
				'&upsih;': 'ϒ',
				'&piv;': 'ϖ'
			};
			let c = entities[m];
			if (c) return c;
			if (m.match(/^&#[0-9]{1,4};$/i)) return String.fromCharCode(parseInt(/^&#([0-9a-f]+);$/i.exec(m)[1]));
			if (m.match(/^&#x[0-9a-f]{1,4};$/i)) return String.fromCharCode(parseInt(/^&#x([0-9a-f]+);$/i.exec(m)[1], 16));
			return m;
		});