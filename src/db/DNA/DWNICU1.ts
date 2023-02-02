import * as g from '../../types/genetics'

export const ABC: g.snapMargin = [] as any;
export const MDL: g.OrganelleType[] = [ "hypText" ];
export const DNA: g.hypGene[] = [
	{
		"title"		: "Hallo!",
		"avatarURL"	: "https://static.dw.com/image/37384538_401.jpg",
		hyperText	: [
			[
				"Hallo, Sarah. Wie geht’s dir\nHi, Tom! Super, danke. Und dir?",
				{},
				[
					{ type: "dAudio", sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E0_L1_S3_A1_Loesungsaudio_dwdownload.mp3" }
				]
			],
			[
				"Guten Tag! Wie geht es Ihnen?\nSehr gut, danke. Und Ihnen?",
				{ standoff: "block" },
				[
					{ type: "dAudio", sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E0_L1_S3_A2_Loesungsaudio_dwdownload.mp3" }
				]
			],
			[
				"Hi, Wie geht’s?",
				{},
				[
					{ type: "dAudio", sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E0_L1_S14_A3_Audio1_dwdownload.mp3" }
				]
			],
			[
				"Guten Tag, Herr Kaiser. Wie geht es Ihnen?",
				{ standoff: "block" },
				[
					{ type: "dAudio", sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E0_L1_S14_A4_Audio1_dwdownload.mp3" }
				]
			],
			[
				"Es geht mir gut.\nSuper.",
				{},
				[
					{ type: "dImage", sourceURL: "https://static.dw.com/image/37211944_401.jpg", location: "before" },
					{ type: "dAudio", sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E0_L1_S11_A1_Loesungsaudio_dwdownload.mp3" },

				]
			],
			[
				"Es geht mir nicht so gut.\nNicht so gut.",
				{ standoff: "block" },
				[
					{ type: "dImage", sourceURL: "https://static.dw.com/image/37211932_401.jpg", location: "before" },
					{ type: "dAudio", sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E0_L1_S11_A3_Loesungsaudio_dwdownload.mp3" }
				]
			],
			[
				"Hallo, wie geht’s dir?\\nDanke, gut. Und dir?\\nDanke, auch gut.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E0_L1_S12_A1_Audio1_dwdownload.mp3"
					}
				]
			],
			[
				"Hey, Lena! Na, wie geht’s?\\nSuper! Und dir?\\nAuch sehr gut!",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E0_L1_S12_A3_Audio1_dwdownload.mp3"
					}
				]
			],
			[
				"Guten Tag, Frau Kamp. Wie geht es Ihnen?\\nGuten Tag, Herr Müller. Danke, gut. Und Ihnen?\\nNa ja, es geht mir nicht so gut.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E0_L1_S12_A2_Audio1_dwdownload.mp3"
					}
				]
			],
			[
				"Guten Tag, Frau Mohr! Wie geht es Ihnen?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E0_L1_S4_A1_Audio1_dwdownload.mp3"
					}
				]
			],
			[
				"Guten Tag! Danke, gut. Und Ihnen?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E0_L1_S4_A2_Audio1_dwdownload.mp3"
					}
				]
			],
			[
				"Hallo, Peter! Wie geht’s?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E0_L1_S4_A3_Audio1_dwdownload.mp3"
					}
				]
			],
			[
				"Hallo! Gut. Und dir?",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E0_L1_S4_A4_Audio1_dwdownload.mp3"
					}
				]
			],
			[
				"Guten Tag, Herr Brunner",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37212011_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E0_L1_S7_A1_Loesungsaudio_dwdownload.mp3"
					}
				]
			],
			[
				"Guten Tag, Frau Kohlhaas.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37212023_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E0_L1_S7_A2_Loesungsaudio_dwdownload.mp3"
					}
				]
			],
			[
				"Guten Tag, Frau Jacobi.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37211969_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E0_L1_S7_A3_Loesungsaudio_dwdownload.mp3"
					}
				]
			],
			[
				"Guten Tag, Herr Stöpel.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37211999_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E0_L1_S7_A4_Loesungsaudio_dwdownload.mp3"
					}
				]
			],
			[
				"Guten Morgen.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/42086090_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E0_L1_S8_A1_Loesungsaudio_dwdownload.mp3"
					}
				]
			],
			[
				"Guten Tag.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/42152031_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E0_L1_S8_A2_Loesungsaudio_dwdownload.mp3"
					}
				]
			],
			[
				"Guten Abend.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/42152053_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E0_L1_S8_A3_Loesungsaudio_dwdownload.mp3"
					}
				]
			],
			[
				"Hi, wie geht’s?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E0_L1_S16_A1_Audio1_dwdownload.mp3"
					}
				]
			],
			[
				"Hallo, danke, gut, und dir?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E0_L1_S16_A1_Loesungsaudio1_dwdownload.mp3"
					}
				]
			],
			[
				"Guten Morgen, wie geht es Ihnen?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E0_L1_S16_A2_Audio_dwdownload.mp3"
					}
				]
			],
			[
				"Guten Morgen, es geht mir nicht so gut.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E0_L1_S16_A2_Loesungsaudio_dwdownload.mp3"
					}
				]
			],
			[
				"Guten Abend.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E0_L1_S16_A3_Audio_dwdownload.mp3"
					}
				]
			],
			[
				"Guten Abend, wie geht es Ihnen?!",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E0_L1_S16_A3_Loesungsaudio_dwdownload.mp3"
					}
				]
			]
		]
	},
	{
		"title"		: "Was machst du hier?",
		"avatarURL"	: "https://static.dw.com/image/37384554_401.jpg",
		hyperText	: [
			[
				"Wer ist denn das?\nWas machst du hier?\nWoher kommst du?\nWie alt bist du?",
				{ standoff: "block" },
				[
					{ type: "dAudio", sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L1_S1_A1_Loesungsaudio_dwdownload.mp3" }
				]
			],
			[
				"Hallo, wie heißt du?",
				{},
				[
					{ type: "dAudio", sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L1_S3_A1_Audio1_dwdownload.mp3" }
				]
			],
			[
				"Woher kommst du?",
				{},
				[
					{ type: "dAudio", sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L1_S3_A2_Audio1_dwdownload.mp3" }
				]
			],
			[
				"Wie alt bist du?",
				{},
				[
					{ type: "dAudio", sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L1_S3_A3_Audio1_dwdownload.mp3" }
				]
			],
			[
				"Wo wohnst du?",
				{},
				[
					{ type: "dAudio", sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L1_S3_A5_Audio1_dwdownload.mp3" }
				]
			],
			[
				"Wie ist deine Adresse?",
				{},
				[
					{ type: "dAudio", sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L1_S3_A6_Audio1_dwdownload.mp3" }
				]
			],
			[
				"Wie ist deine Telefonnummer?",
				{ standoff: "block" },
				[
					{ type: "dAudio", sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L1_S3_A4_Audio1_dwdownload.mp3" }
				]
			],
			[
				"",
				{},
				[
					{ type: "dAudio", sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L1_S5_A1_Loesungsaudio_dwdownload.mp3" }
				]
			],
			[
				"",
				{},
				[
					{ type: "dAudio", sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L1_S5_A2_Loesungsaudio_dwdownload.mp3" }
				]
			],
			[
				"",
				{},
				[
					{ type: "dAudio", sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L1_S5_A3_Loesungsaudio_dwdownload.mp3" }
				]
			],
			[
				"",
				{},
				[
					{ type: "dAudio", sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L1_S5_A4_Loesungsaudio_dwdownload.mp3" }
				]
			],
			[
				"",
				{ standoff: "block" },
				[
					{ type: "dAudio", sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L1_S5_A5_Loesungsaudio_dwdownload.mp3" }
				]
			],
			[
				"Ah, guten Morgen, Frau Schröder. … Entschuldigung, wollen wir uns nicht duzen?",
				{},
				[
					{ type: "dAudio", sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L1_S7_A1_Loesungsaudio_dwdownload.mp3" }
				]
			],
			[
				"Gern. Ich heiße Kerstin.",
				{ standoff: "block" },
				[
					{ type: "dAudio", sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L1_S7_A2_Loesungsaudio_dwdownload.mp3" }
				]
			],
			[
				"Ich heiße Stefan Müller. Ich bin ein Freund von Sebastian.\nUnd ich bin Nico González. Woher kommen Sie? \nAus Deutschland. Aber wollen wir uns nicht duzen?\nGern. Ich bin Nico.\nWoher kommst du, Nico?\nIch komme aus Spanien.\n",
				{ standoff: "block" },
				[
					{ type: "dAudio", sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L1_S8_A1_Loesungsaudio_dwdownload.mp3" }
				]
			]
		]
	},
	{
		title		: "Was trinkst du?",
		"avatarURL"	: "https://static.dw.com/image/37397393_509.jpg",
		hyperText	: [
			[
				"Was möchtet ihr trinken? Bier oder Wein? Kaffee, Tee, Cola oder Wasser?\nBier bitte.",
				{ standoff: "block" },
				[
					{ type: "dAudio", sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L2_S10_A1_Audio1_dwdownload.mp3" }
				]
			],
			[
				"Kaffee mit viel Zucker",
				{},
				[
					{ type: "dImage", location: "before", sourceURL: "https://static.dw.com/image/37283179_501.jpg" },
					{ type: "dAudio", sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L2_S11_A1_Loesungsaudio_dwdownload.mp3" }
				]
			],
			[
				"Kaffee mit wenig Zucker und viel Milch	",
				{},
				[
					{ type: "dImage", location: "before", sourceURL: "https://static.dw.com/image/37283153_501.jpg" },
					{ type: "dAudio", sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L2_S11_A2_Loesungsaudio_dwdownload.mp3" }
				]
			],
			[
				"Kaffee ohne Milch und Zucker",
				{ standoff: "block" },
				[
					{ type: "dImage", location: "before", sourceURL: "https://static.dw.com/image/37283205_501.jpg" },
					{ type: "dAudio", sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L2_S11_A3_Loesungsaudio_dwdownload.mp3" }
				]
			],
			[
				"Ich trinke Kaffee. Mit viel Milch bitte.",
				{},
				[
					{ type: "dAudio", sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L2_S12_A1_Audio1_dwdownload.mp3" }
				]
			],
			[
				"Und ich möchte Tee mit Zucker bitte.",
				{},
				[
					{ type: "dAudio", sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L2_S12_A2_Audio1_dwdownload.mp3" }
				]
			],
			[
				"Ich nehme Kaffee mit Milch und wenig Zucker bitte.",
				{ standoff: "block" },
				[
					{ type: "dAudio", sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L2_S12_A3_Audio1_dwdownload.mp3" }
				]
			],
			[
				"",
				{},
				[
					{ type: "dAudio", sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L2_S13_A2_Audio1_dwdownload.mp3" }
				]
			],
			[
				"",
				{ standoff: "block" },
				[
					{ type: "dAudio", sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L2_S13_A3_Audio1_dwdownload.mp3" }
				]
			],
			[
				"",
				{},
				[
					{ type: "dAudio", sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L2_S14_A1_Loesungsaudio_dwdownload.mp3" }
				]
			],
			[
				"",
				{},
				[
					{ type: "dAudio", sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L2_S14_A2_Loesungsaudio_dwdownload.mp3" }
				]
			],
			[
				"",
				{},
				[
					{ type: "dAudio", sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L2_S14_A3_Loesungsaudio_dwdownload.mp3" }
				]
			],
			[
				"",
				{ standoff: "block" },
				[
					{ type: "dAudio", sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L2_S14_A4_Loesungsaudio_dwdownload.mp3" }
				]
			],
		]
	},
	{
		title		: "Eine Pizza bitte!",
		"avatarURL"	: "https://static.dw.com/image/37397474_401.jpg",
		hyperText	: [
			[
				"Nawin möchte eine Pizza mit Thunfisch essen.",
				{},
				[
					{"type":"dAudio","sourceURL":"https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L3_S2_A1_Loesungsaudio.mp3"}
				]
			],
			[
				"Nico möchte eine Pizza mit Salami essen.",
				{},
				[
					{"type":"dAudio","sourceURL":"https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L3_S2_A2_Loesungsaudio.mp3"}
				]
			],
			[
				"Nina möchte eine Pizza mit Ananas ohne Schinken essen.",
				{"standoff":"block"},
				[
					{"type":"dAudio","sourceURL":"https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L3_S2_A3_Loesungsaudio.mp3"}
				]
			],
			[
				"ich nehme",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L3_S7_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"du nimmst",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L3_S7_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"er, sie, es nimmt",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L3_S7_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"wir nehmen",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L3_S7_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"ihr nehmt",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L3_S7_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"sie (Plural) nehmen",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L3_S7_A6_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Mann 1: Was essen essen isst esse wir heute Abend? Pizza? Sushi?\nFrau 1: Pizza? Schon wieder? Nein, danke. Ich möchte heute Sushi. Marie, isst esst essen isst du gern Sushi?\nFrau 2: Ja, ich esse isst esse esst sehr gern Sushi. Aber Oli isst esse isst essen nicht gern Sushi. Oli? Möchtest du Sushi?\nMann 2: Sushi? Nein, ...",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L3_S8_Audio1.mp3"
					}
				]
			],
			[
				"ich esse\ndu isst\ner/sie/es isst",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L3_S9_Loesungsaudio.mp3"
					}
				]
			],
			[
				"ich nehme\ndu nimmst\ner/sie/es nimmt",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L3_S11_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Nico, was nimmst du?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L3_S12_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Ich nehme eine Pizza.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L3_S12_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Und Sebastian? Was nimmt er?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L3_S12_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Er nimmt auch eine Pizza.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L3_S12_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Nina, was isst du?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L3_S12_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Ich esse eine Pizza mit Ananas.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L3_S12_A6_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Was isst Lisa?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L3_S12_A7_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Was essen Sie?",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L3_S12_A8_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Nina und Lisa haben auch Hunger. Und Durst. :-)",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L3_S13_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Was bestellen wir?",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L3_S13_A6_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Pizza Luigi, guten Tag?\nGuten Tag, ich möchte gern bestellen.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L3_S14_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Ja gern, was nehmen Sie?\nIch nehme dreimal Pizza mit Salami und einmal mit Thunfisch.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L3_S14_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Gern. Sonst noch etwas?\nJa, eine Pizza mit Ananas, aber ohne Schinken bitte.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L3_S13_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Vielen Dank. Wo wohnen Sie? Und wie ist Ihr Name?\nIn der Wagnergasse 136. Mein Name ist Hanusch.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L3_S14_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Pizza Luigi. Guten Tag?\nIch möchte gern bestellen.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L3_S15_A1_Audio1.mp3"
					}
				]
			],
			[
				"Gern. Was möchten Sie?\nEine Pizza mit Tomaten und Käse bitte.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L3_S15_A2_Audio1.mp3"
					}
				]
			],
			[
				"Sonst noch etwas?\nJa, bitte. Ich nehme auch eine Pizza mit Thunfisch.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L3_S15_A3_Audio1.mp3"
					}
				]
			],
			[
				"Also, eine Pizza mit Tomaten und Käse? Und eine Pizza mit Thunfisch?\nJa, richtig.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L3_S15_A4_Audio1.mp3"
					}
				]
			],
			[
				"Vielen Dank. Wie ist Ihre Adresse?\nWagnergasse 136.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L3_S15_A5_Audio1.mp3"
					}
				]
			]
			
		]
	},
	{
		title		: "Zahlen, bitte!",
		"avatarURL"	: "https://static.dw.com/image/37397490_401.jpg",
		hyperText	: [
			[
				"Das Essen kostet 40,50 Euro.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L4_S1_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Zahlen Sie zusammen oder getrennt?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutsch…weg/wortschatz/BAKU_A1_zahlen_sie_zusammen_oder_getrennt.mp3"
					}
				]
			],
			[
				"1,99 Euro",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L4_S5_A1_Audio1.mp3"
					}
				]
			],
			[
				"0,99 Euro",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L4_S5_A2_Audio1.mp3"
					}
				]
			],
			[
				"9,99 Euro",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L4_S5_A3_Audio1.mp3"
					}
				]
			],
			[
				"7,80 Euro",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L4_S5_A4_Audio1.mp3"
					}
				]
			],
			[
				"14,80 Euro",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L4_S5_A5_Audio1.mp3"
					}
				]
			],
			[
				"29,95 Euro",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L4_S5_A6_Audio1.mp3"
					}
				]
			],
			[
				"Das macht 7,55 Euro.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37283829_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L4_S6_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Das macht 16,20 Euro.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37284102_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L4_S6_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Das macht 33,50 Euro.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37284090_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L4_S6_A3_Loesungsaudio.mp3"
					}
				]
			], 
			[
				"Der Kaffee kostet 2,99 Euro.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L4_S7_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Die Pizza kostet 7,80 Euro.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L4_S7_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Der Tee kostet 0,90 Euro.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L4_S7_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Das Bier kostet 2,60 Euro.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L4_S7_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Wie viel kostet die Pizza?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L4_S9_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Was kostet das Sushi?",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L4_S9_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Was kostet der Salat?\nWie viel kostet der Salat?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L4_S10_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Was kostet der Apfelsaft?\nWie viel kostet der Apfelsaft?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L4_S10_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Was kostet die Milch?\nWie viel kostet die Milch?",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L4_S10_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Wir möchten bitte zahlen!\nHier ist die Rechnung. Zahlen Sie zusammen oder getrennt?\nZusammen bitte.\nZwei Kaffee, das macht 6 €. Zahlen Sie bar oder mit Karte?\nIch zahle bar. Hier sind 9 €. Stimmt so!\nDanke! Auf Wiedersehen.\nAuf Wiedersehen.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L4_S11_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"...",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L4_S16_Audio1.mp3"
					}
				]
			],
			[
				"Der Gast gibt 1,50 Euro Trinkgeld.\nDer Gast zahlt ein Wasser und eine Pizza mit Tomaten und Käse.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E3_L4_S16_A1_Loesungsaudio.mp3"
					}
				]
			],
			
		]
	},
	{
		"title": "Ich war schon in Berlin",
		"avatarURL": "https://static.dw.com/image/37397426_401.jpg",
		hyperText	: [
			[
				"Nawin begrüßt die Gäste. Nawin und Nico sprechen über deutsche Städte. Nina möchte ein Spiel spielen.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L1_S1_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Der Dom ist eine Sehenswürdigkeit in Köln .\nDas Brandenburger Tor ist eine Sehenswürdigkeit in Berlin .\nDer Neue Zollhof ist eine Sehenswürdigkeit in Düsseldorf .",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L1_S4_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Das Brandenburger Tor ist in Berlin.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L1_S5_A1_Audio1.mp3"
					}
				]
			],
			[
				"Der Kölner Dom ist in Köln",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L1_S5_A2_Audio1.mp3"
					}
				]
			],
			[
				"Der Neue Zollhof ist in Düsseldorf.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L1_S5_A3_Audio1.mp3"
					}
				]
			],
			[
				"Nico: Was ist das?\nNina: Das ist das Uhrenmuseum.\nNico: Wo ist denn das?\nNina: Das Uhrenmuseum ist in Zürich. Kennst du Zürich?\nNico: Nein. In welchem Land ist das?\nNina: Zürich ist in der Schweiz.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37287189_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L1_S8_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Nico: Was ist das?\nNina: Das ist der Stephansdom.\nNico: Wo ist denn das?\nNina: Der Stephansdom ist in Wien. Kennst du Wien?\nNico: Nein. In welchem Land ist das?\nNina: Wien ist in Österreich.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37287331_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L1_S8_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Nico: Was ist das?\nNina: Das ist das Heidelberger Schloss.\nNico: Wo ist das denn?\nNina: Das Heidelberger Schloss ist in Heidelberg. Kennst du Heidelberg?\nNico: Nein, in welchem Land ist das?\nNina: Heidelberg ist in Deutschland.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37287288_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L1_S8_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Mann: Woher kommen Sie?\nFrau: Ich komme aus Kolumbien.\nMann: Wo wohnen Sie im Moment?\nFrau: Ich wohne im Moment in Neustadt.\nMann: Wohin fahren Sie am Wochenende?\nFrau: Ich fahre nach Bonn. Ich möchte das Haus der Geschichte und das Beethovenhaus besichtigen.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L1_S10_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Nawin war schon mal in Hamburg und in Köln.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L1_S11_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Er war noch nie in Heidelberg.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L1_S11_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"...",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L1_S12_A1_Audio1.mp3"
					}
				]
			],
			[
				"Ja, ich war schon mal in Berlin. / Nein, ich war noch nie in Berlin.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L1_S12_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Nico: Ich war noch nie in Berlin. warst du schon mal in Berlin?\nNawin: Nein, ich war auch noch nie in Berlin. Aber Nina war schon mal in Berlin. Und Sebastian war auch schon dort.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L1_S13_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Nina: Wir waren zusammen am Brandenburger Tor. Das war toll.\nNico: Cool. Ihr wart in Berlin. Ich möchte auch mal nach Berlin. Wart ihr denn schon mal in Sevilla?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L1_S13_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Nina: Ich war noch nie da. Aber meine Eltern waren letztes Jahr in Sevilla. Sie waren auch in Cádiz und in Madrid.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L1_S13_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"...",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L1_S15_A1_Audio1.mp3"
					}
				]
			],
			[
				"...",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L1_S15_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"...",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L1_S15_A2_Audio1.mp3"
					}
				]
			],
			[
				"...",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L1_S15_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Entschuldigung. Wo ist Chi im Moment?\n...",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L1_S16_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Noch einmal, bitte. Wohin fährt Chi?\n...",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L1_S16_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Wie bitte? Wo waren Chi und ein Freund gestern?\n...",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L1_S16_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Wie bitte? Was ist in Weimar?\n...",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L1_S16_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"...",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L1_S17_Audio1.mp3"
					}
				]
			]
		]
	},
	{
		title		: "Wo liegt das?",
		"avatarURL": "https://static.dw.com/image/54965162_401.jpg",
		hyperText	: [
			[
				"Hamburg ist eine Stadt im von Norden Deutschland.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37346969_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L2_S5_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Köln ist eine Stadt im von Westen Deutschland.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37346953_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L2_S5_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"München und Stuttgart sind Städte im von Süden Deutschland.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37346899_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L2_S5_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Berlin und Leipzig sind Städte im von Osten Deutschland.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37346915_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L2_S5_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Wien ist im von Osten sterreich.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37347452_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L2_S5_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Zürich ist im Norden von der Schweiz.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37347468_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L2_S5_A6_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Hallo, ich bin Anna.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L2_S15_A1_Audio1.mp3"
					}
				]
			],
			[
				"...",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L2_S15_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Ist das die Wagnergasse?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L2_S15_A2_Audio1.mp3"
					}
				]
			],
			[
				"...",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L2_S15_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Wie heißt du?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L2_S15_A3_Audio1.mp3"
					}
				]
			],
			[
				"W-Frage",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L2_S15_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Ja, Tübingen ist in der Nähe von Stuttgart.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L2_S17_A3_Loesungsaudio.mp3"
					}
				]
			],
		]
	},
	{
		"title": "In Europa",
		"avatarURL": "https://static.dw.com/image/37397442_401.jpg",
		hyperText	: [
			[
				"Sie essen Spezialitäten aus verschiedenen Ländern.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L3_S1_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Lisa isst Sushi.\n\nIch esse gern Sushi.\n\nWir essen Sushi\n\nIn Japan isst man Sushi.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L3_S7_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Man viel Brot in Deutschland.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37287246_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L3_S8_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Man Köttbullar in Schweden.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37287260_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L3_S8_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"In Japan man viel Tee.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37287231_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L3_S8_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Was ist das? Das ist Sushi. Und woher kommt das? Sushi ist eine Spezialität aus Japan.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37287203_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L3_S10_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Was ist das? Das ist Sushi. Und woher kommt das? Sushi ist eine Spezialität aus Japan.",
				{
					"standoff": "block"
				},				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37287203_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L3_S10_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Hallo Lisa,\n\nPaul und ich sind in Italien. Gestern waren wir in Rom. Wir waren im Kolosseum. Das war super! Heute besichtigen wir den Dom. Das Essen ist auch super! Hier isst man sehr gut und viel. Typische Spezialitäten in Italien sind Pizza und Pasta. Pizza ist mein Lieblingsessen ! Warst du schon mal in Italien?\n\nLiebe Grüße und bis bald\nJana",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L3_S11_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Warst du schon mal in Frankreich?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L3_S12_A2_Audio1.mp3"
					}
				]
			],
			[
				"...",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L3_S12_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Warst du schon mal in Sevilla?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L3_S12_A3_Audio1.mp3"
					}
				]
			],
			[
				"...",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L3_S12_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Warst du schon mal in Berlin?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L3_S12_A4_Audio1.mp3"
					}
				]
			],
			[
				"...",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L3_S12_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"...",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L3_S13b_A1_Audio.mp3"
					}
				]
			],
			[
				"...",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L3_S13b_A2_Audio.mp3"
					}
				]
			]
		]
	},
	{
		"title": "Andere Länder",
		"avatarURL": "https://static.dw.com/image/41127686_401.jpg",
		hyperText	: [
			[
				"Schweden ist im Norden von Europa . Dort spricht man Schwedisch .",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37347364_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L4_S3_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Marokko ist im Nordwesten von Afrika . Dort spricht man Arabisch .",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37347404_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L4_S3_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Japan ist im Osten von Asien . Dort spricht man Japanisch .",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37347348_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L4_S3_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Kanada ist im Norden von Amerika . Dort spricht man Englisch und Französisch .",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37347332_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L4_S3_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"In Frankreich spricht man Französisch.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L4_S5_A1_Audio1.mp3"
					}
				]
			],
			[
				"In Spanien spricht man Spanisch.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L4_S5_A2_Audio1.mp3"
					}
				]
			],
			[
				"In Deutschland spricht man Deutsch.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L4_S5_A3_Audio1.mp3"
					}
				]
			],
			[
				"In Schweden spricht man Schwedisch.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L4_S5_A4_Audio1.mp3"
					}
				]
			],
			[
				"In Italien spricht man Italienisch.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L4_S5_A5_Audio1.mp3"
					}
				]
			],
			[
				"In Russland spricht man Russisch.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L4_S5_A6_Audio1.mp3"
					}
				]
			],
			[
				"Nicos Muttersprache ist Spanisch.\nNico spricht ein bisschen Englisch und ein bisschen Deutsch.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L4_S6_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Spanisch ist meine Muttersprache. Ich spreche sehr gut Englisch. Ich spreche gut Italienisch. Ich spreche ein bisschen Deutsch. Ich spreche ein bisschen Russisch, aber sehr schlecht.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L4_S7_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"...",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L4_S8_A1_Audio1.mp3"
					}
				]
			],
			[
				"...",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L4_S8_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"...",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L4_S8_A2_Audio1.mp3"
					}
				]
			],
			[
				"...",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L4_S8_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"...",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L4_S8_A3_Audio1.mp3"
					}
				]
			],
			[
				"...",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L4_S8_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L4_S8_A4_Audio1.mp3",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L4_S8_A4_Audio1.mp3"
					}
				]
			],
			[
				"...",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L4_S8_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Das ist . Sie kommt aus . Nagoya ist in der Mitte von . Ries Muttersprache ist . Sie spricht zwei Fremdsprachen: Englisch und .",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37347173_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L4_S11_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Das sind und Veronique. Sie kommen aus . Das ist im Süden von .\n\nMarcs und Veroniques ist Französisch. Sie auch ein bisschen .",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37347153_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L4_S11_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Das ist . Sie kommt aus . Nagoya ist in der Mitte von . Ries Muttersprache ist . Sie spricht zwei Fremdsprachen: Englisch und .",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37347173_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L4_S11_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Das sind und Veronique. Sie kommen aus . Das ist im Süden von .\n\nMarcs und Veroniques ist Französisch. Sie auch ein bisschen .",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37347153_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L4_S11_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"...",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L4_S12_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"...",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L4_S13_Audio1.mp3"
					}
				]
			],
			[
				"...",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L4_S14_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"...",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L4_S14_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"...",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E4_L4_S14_A3_Loesungsaudio.mp3"
					}
				]
			]
		]
	},
	{
		"title": "Was ist das?",
		"avatarURL": "https://static.dw.com/image/37405595_401.jpg",
		hyperText	: [
			[
				"Artikel im Singular: der, die, das\nArtikel im Plural: die",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E5_L1_S7_A1_Loesungsaudio.mp3"
					}
				]
			],
				
		
		]
	},
	{
		"title": "Wem gehört das?",
		"avatarURL": "https://static.dw.com/image/37400037_401.jpg",
		hyperText	: [
			[
				"Lisa spricht mit den Kursteilnehmern im Deutschkurs.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E5_L2_S1_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Wie heißt das auf Deutsch? Ist das ein Bleistift?\nNein. Das ist ein Radiergummi. Das ist der Radiergummi von Lisa.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37354727_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "http://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E5_L2_S7_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Wie heißt das auf Deutsch? Ist das ein Radiergummi?\n\nNein. Das ist ein Buch. Das ist das Buch von Rana.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37356924_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E5_L2_S7_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Wie heißt das auf Deutsch? Ist das ein Buch?\nNein. Das ist eine Brille. Das ist die Brille von Max.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37354691_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E5_L2_S7_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Wie heißt das auf Deutsch? Sind das - die - Brillen?\nNein. Das sind - die - Schlüssel. Das sind die die - Schlüssel von Nico.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37355234_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E5_L2_S8_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Wie heißt das auf Deutsch? Ist das ein der ein Notizblock?\nNein. Das ist ein der ein Stift. Das ist der der ein Stift von Rana.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37357205_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E5_L2_S8_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"...",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E5_L2_S16_A1_Audio1.mp3"
					}
				]
			],
			[
				"...",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E5_L2_S16_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E5_L2_S16_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E5_L2_S16_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E5_L2_S16_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E5_L2_S16_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E5_L2_S16_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E5_L2_S16_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E5_L2_S16_A5_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E5_L2_S16_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"...",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E5_L2_S18_Audio1.mp3"
					}
				]
			],
		]
	},
	{
		"title": "Ich habe kein …",
		"avatarURL": "https://static.dw.com/image/37400021_401.jpg",
		hyperText	: [
			[
				"...",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E5_L3_S6_Audio1.mp3"
					}
				]
			],
			[
				"die Brille und das Brillenetui",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37355077_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E5_L3_S7_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"der Stift und der Zettel",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37355053_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E5_L3_S7_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"der Bleistift und der Radiergummi",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37884662_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E5_L3_S7_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"der Ordner\nDas ist ein Ordner. Der Das Der Die Ordner ist schön.\ndie Brille\nDas ist eine ein - eine Brille. Die Brille ist cool.\ndas Buch\nDas ist ein der ein eine Buch. Das Buch ist super.\die Bücher\nDas sind Bücher. Die Die Eine Das Bücher sind gut.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E5_L3_S9_A1_Loesungsaudio_neu.mp3"
					}
				]
			],
			[
				"Ich habe einen den einen ein Ordner. Der Ordner ist schön.\nIch habe eine die ein eine Brille. Die Brille ist cool.\nIch habe ein das ein einen Buch. Das Buch ist super.\Ich habe - die eine - Bücher. Die Bücher sind gut.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E5_L3_S10_A1_Loesungsaudio_neu.mp3"
					}
				]
			],
			[
				"Ich habe , aber .",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37782749_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E5_L3_S12_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Ich habe , aber .",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37354980_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E5_L3_S12_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Ich habe , aber .",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37354992_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E5_L3_S12_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Ich habe , aber .",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37357916_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E5_L3_S12_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"...",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E5_L3_S17_A1_Audio1.mp3"
					}
				]
			],
			[
				"Wie viele Zimmer hat die Wohnung?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E5_L3_S18_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E5_L3_S18_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Hat die Wohnung eine Terrasse?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E5_L3_S18_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E5_L3_S18_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Hat die Wohnung eine Garage?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E5_L3_S18_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E5_L3_S18_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Was kostet das Zimmer?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E5_L3_S18_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E5_L3_S18_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Wie ist die Telefonnummer?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E5_L3_S18_A5_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E5_L3_S18_A5_Loesungsaudio.mp3"
					}
				]
			]
		]
	},
	{
		"title": "Das Auto ist rot",
		"avatarURL": "https://static.dw.com/image/37400085_401.jpg",
		hyperText	: [
			[
				"Yara ist die Tante von Nico. Sie hat einen Fahrradladen . Der Fahrradladen von Yara ist nicht groß . Er ist klein . Yara liebt Fahrräder . Manche Fahrräder im Fahrradladen von Yara sind billig . Andere Fahrräder sind teuer . Yara hat zwei Fahrräder. Ein Fahrrad ist alt . Das andere ist neu .",
				{
					"standoff": "block"
				},				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E5_L4_S7_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Yara hat ein Fahrrad. Ist das Fahrrad von Yara alt und billig?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E5_S12_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E5_L4_S12_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Und das T-Shirt von Nico. Ist das T-Shirt von Nico klein und neu?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E5_S12_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E5_L4_S12_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Und der Computer von Lisa. Ist der Computer von Lisa billig und klein?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E5_S12_A3_Audio1.mp3"
					}
				]
			],
			[
				"...",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E5_L4_S12_A3_Loesungsaudio.mp3"
					}
				]
			]
		]
	},
	{
		"title": "So wohne ich",
		"avatarURL": "https://static.dw.com/image/37400101_401.jpg",
		hyperText	: [
			[
				"Eine Wohnung in der Stadt ist oft teuer.\nViele Studenten leben in einer WG.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L1_S4_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L1_S7_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L1_S7_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L1_S7_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L1_S7_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L1_S7_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L1_S7_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L1_S7_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L1_S7_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Das ist auf dem Land.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37403621_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L1_S11_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Das ist auf dem Land.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37403585_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L1_S11_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Lisa schreibt an Freunde und Bekannte.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L1_S18_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Lisa sucht ein freies Zimmer für Nico.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L1_S18_A2_Loesungsaudio.mp3"
					}
				]
			],
		]
	},
	{
		"title": "Meine Wohnung",
		"avatarURL": "https://static.dw.com/image/37400053_401.jpg",
		hyperText	: [
			[
				"Marvin isst Pommes Frites.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L2_S1_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Unsere Wohnung hat vier Zimmer, eine Küche, ein Bad, eine Toilette, einen Flur und einen Balkon. Unser Wohnzimmer ist groß und gemütlich. Das Arbeitszimmer ist sehr hell. Das Schlafzimmerist zwar klein, aber es ist ruhig. Man hört keine Autos. Der Flur ist lang und dunkel. Wir haben auch einen Keller. Der Keller hat keine Fenster und ist sehr ungemütlich",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L2_S5_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Die Wohnung hat zwei Zimmer und kostet 2000 Euro. Das ist nicht billig, das ist sehr teuer.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L2_S6_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Die Wohnung ist nicht groß. Sie hat 20 Quadratmeter. Für drei Personen ist das klein.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L2_S6_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Die Wohnung ist im Stadtzentrum. Hier fahren viele Autos und es ist nicht sehr ruhig. Im Stadtzentrum ist es laut.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L2_S6_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Die Wohnung ist nicht neu. Sie ist von 1876. Die Wohnung ist sehr alt.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L2_S6_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Die Küche ist nicht groß, sie ist klein.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L2_S10_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Das Wohnzimmer ist nicht gemütlich, es ist ungemütlich.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L2_S10_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Der Flur ist nicht hell, er ist dunkel.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L2_S10_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Die Wohnung ist groß. Sie hat 5 Zimmer .\n\nDas Zimmer von Nawin ist 11 Quadratmeter groß. 11 Quadratmeter sind nicht groß, aber auch nicht klein. Die Miete ist nicht so hoch . Das Zimmer kostet 400 Euro im Monat .",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L2_S14_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Meine Wohnung hat 65 Quadratmeter .",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L2_S15_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L2_S16_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L2_S16_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L2_S16_A8_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L2_S16_A8_Loesungsaudio.mp3"
					}
				]
			],

		]
	},
	{
		"title": "Sofa, Sessel und Tisch",
		"avatarURL": "https://static.dw.com/image/37400069_401.jpg",
		hyperText	: [
			[
				"Unser Wohnzimmer ist sehr schön. Wir haben ein großes Sofa , zwei Sessel und einen Tisch. Drei Teppiche und vier Bilder machen das Wohnzimmer sehr gemütlich. Oder nicht?",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37799189_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L3_S4_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Hier ist unser Schlafzimmer . Unser Schrank ist sehr groß und die zwei Betten sind sehr gemütlich. Ich liebe auch die drei Spiegel .",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37799217_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L3_S4_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Und das ist unser Arbeitszimmer . Hier arbeiten mein Mann und ich zusammen. Wir haben zwei Schreibtische und natürlich zwei Stühle . Drei Stehlampen machen das Zimmer sehr hell. Wir haben viele Bücher. Die sind im Bücherregal .",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37799161_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L3_S4_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Der Tisch und die Stühle stehen in der Küche.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L3_S8_A1_Audio1.mp3"
					}
				]
			],
			[
				"Der Tisch ist schön und die Stühle sind bequem.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L3_S8_A2_Audio1.mp3"
					}
				]
			],
			[
				"In der Küche stehen auch eine Waschmaschine und ein Kühlschrank.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L3_S8_A3_Audio1.mp3"
					}
				]
			],
			[
				"Die Waschmaschine ist alt und der Kühlschrank ist neu.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L3_S8_A4_Audio1.mp3"
					}
				]
			],
			[
				"a",
				{},
				[]
			],
			[
				"die Bücher + das Regal = Bücherregal",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L3_S11_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"der Spiegel + der Schrank = Spiegelschrank",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L3_S11_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"das Büro + der Stuhl = Bürostuhl",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L3_S11_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"1. das\n\n2. der Kleiderschrank\n\n3. die\n\n4. der\n\n5. der Schreibtischstuhl\n\n6. der\n\n7. der\n\n8. der",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37798646_505.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L3_S13_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Küche: Esstisch, Küchenstuhl , Küchenschrank, Spüle , Kühlschrank\n\nWohnzimmer: Sofa/ Couch , Sessel , Couchtisch, Fernseher , Teppich\n\nSchlafzimmer: Bett , Nachttisch , Kleiderschrank , Nachttischlampe\n\nArbeitszimmer: Schreibtisch , Schreibtischstuhl , Schreibtischlampe, Bücherregal",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L3_S12_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37799330_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L3_S15_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37799259_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L3_S15_A2_Audio1.mp3"
					}
				]
			],
			[
				"Wolf findet das Wohnzimmer zu spießig.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L3_S16_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Wir zahlen 700 Euro Miete für unsere Wohnung. Das ist - zu - teuer, aber nicht zu zu - teuer für zwei Personen. Unser Wohnzimmer ist groß und - zu - hell, hier sind zwei Fenster. Aber der Flur ist zu zu - dunkel, deswegen sind hier drei Stehlampen. Die Wohnung ist - zu - schön, aber wir suchen jetzt eine neue Wohnung. Wir brauchen bald ein Kinderzimmer. Die Wohnung ist dann zu zu - klein.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L3_S17_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Der Stuhl ist zu klein.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37799231_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L3_S18_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Die Gardine ist zu lang.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37799175_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L3_S18_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L3_S19_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L3_S19_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L3_S19_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L3_S19_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L3_S19_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L3_S19_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L3_S20_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L3_S20_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L3_S20_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L3_S20_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L3_S20_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L3_S20_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L3_S20_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L3_S20_A4_Loesungsaudio.mp3"
					}
				]
			],
		]
	},
	{
		"title": "Unser Haus",
		"avatarURL": "https://static.dw.com/image/37400117_401.jpg",
		hyperText	: [
			[
				"Nina: Nawin, ist das deine Unterhose ?\nNawin: Nein, das ist nicht meine Unterhose. Das ist die Unterhose von Sebastian.\nNina: Ah, das ist seine Unterhose.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L4_S6_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Nawin: Sebastian, ist das dein Föhn ?\nSebastian: Nein, das ist nicht mein Föhn. Das ist ihr Föhn.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L4_S6_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Sebastian: Nina, ist das dein Handtuch ?\nNina: Nein, das ist nicht mein Handtuch. Das ist sein Handtuch.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L4_S6_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Ist das dein Spiegel, Anna? – Nein, das ist nicht mein Spiegel.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L4_S12_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Ist das Ihr Bild, Herr Meier? – Ja, das ist mein Bild.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L4_S12_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Ist das Ihre Lampe, Frau Meier? – Ja, das ist meine Lampe.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L4_S12_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Frau Meier und Herr Meier, sind das Ihre Handtücher? – Ja, das sind unsere Handtücher.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L4_S12_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Lisa: Hallo, Peter und Maria! Danke für die Einladung.\n\nPeter: Hallo, Lisa! Gerne. Komm rein .\n\nL: Eure Euer Eure Wohnung ist aber schön! Und euer euer eure Flur ist so groß. Maria, ist das da dein dein deine Zimmer?\n\nMaria: Ja, das ist mein mein meine Arbeitszimmer. Und hier ist unser unser unsere Wohnzimmer.\n\nLisa: Das ist aber gemütlich. Und da ist eure euer eure Küche?\n\nPeter: Ja, genau. Und gleich daneben unser unser unsere Schlafzimmer mit Bad. Kommt, jetzt gehen wir erst mal ins Wohnzimmer. Möchtest du etwas trinken?",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E6_L4_S13_A1_Loesungsaudio.mp3"
					}
				]
			],
		]
	},
	{
		title		: "Emmas Tag",
		"avatarURL": "https://static.dw.com/image/37400138_401.jpg",
		hyperText	: [
			[
				"Wann bist du auf der Arbeit?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L1_S10_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L1_S10_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Wann hast du einen Termin beim Arzt?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L1_S10_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L1_S10_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Wann hast du Volleyball?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L1_S10_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L1_S10_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Von wann bis wann ist der Englischkurs?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L1_S10_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L1_S10_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Um halb eins mache ich Mittagspause.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L1_S11_A1_Audio1.mp3"
					}
				]
			],
			[
				"Von vier bis halb fünf bin ich im Supermarkt.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L1_S11_A2_Audio1.mp3"
					}
				]
			],
			[
				"Von halb neun bis halb zehn bin ich im Sportkurs.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L1_S11_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L1_S13_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L1_S13_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L1_S13_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L1_S13_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L1_S13_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L1_S13_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L1_S15_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L1_S15_A2_Audio1.mp3"
					}
				]
			],
			[
				"https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L1_S15_A3_Audio1.mp3",
				{},
				[]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L1_S15_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L1_S16_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L1_S16_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L1_S16_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L1_S16_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L1_S16_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L1_S16_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L1_S16_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L1_S16_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L1_S16_A5_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L1_S16_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L1_S17_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L1_S17_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L1_S18_A1_Audio1.mp3"
					}
				]
			],
			[
				"Um neun studiert Nawin .\n\nVon zwölf bis halb eins isst er .\n\nVon eins bis halb sechs ist er auf der Arbeit .\n\nUm acht bestellt er Essen .",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L1_S18_A1_Loesungsaudio.mp3"
					}
				]
			]
		]
	},
	{
		title		: "Tageszeiten",
		"avatarURL": "https://static.dw.com/image/37400154_401.jpg",
		hyperText	: [
			[
				"Um neun studiert Nawin .\n\nVon zwölf bis halb eins isst er .\n\nVon eins bis halb sechs ist er auf der Arbeit .\n\nUm acht bestellt er Essen .",
				{},
				[]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L2_S8_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L2_S8_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L2_S8_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L2_S8_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L2_S8_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L2_S8_A6_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L2_S13_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L2_S13_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L2_S13_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L2_S15_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L2_S15_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L2_S15_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L2_S15_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L2_S15_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L2_S15_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L2_S17_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L2_S18_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L2_S18_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L2_S18_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L2_S18_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L2_S18_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L2_S18_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L2_S18_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L2_S18_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L2_S18_A5_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L2_S18_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L2_S18_A6_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L2_S18_A6_Loesungsaudio.mp3"
					}
				]
			]
		]
	},
	{
		title		: "Am Sonntag koche ich",
		"avatarURL": "https://static.dw.com/image/37400170_401.jpg",
		hyperText	: [
			[
				"Mo. = Montag\nDi. = Dienstag\nMi. = Mittwoch\nDo. = Donnerstag\nFr. = Freitag\nSa. = Samstag\nSo. = Sonntag",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L3_S4_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Heute ist Dienstag. Welcher Tag ist morgen?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L3_S5_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L3_S5_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Heute ist Freitag. Welcher Tag ist morgen?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L3_S5_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L3_S5_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Heute ist Freitag. Welcher Tag war gestern?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L3_S5_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L3_S5_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Heute ist Samstag. Welcher Tag war gestern?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L3_S5_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L3_S5_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Am Donnerstag hat Lisa einen Termin beim Arzt.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L3_S6_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Am Dienstag und am Mittwoch ist der Deutschkurs.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L3_S6_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Am Montag kochen Lisa und Nina.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L3_S6_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Am Samstagvormittag putzt Lisa.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L3_S6_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Am kocht Lisa mit Nina.\nAm und am ist der Deutschkurs.\nAm geht Lisa zum Arzt.\nAm putzt sie die Wohnung.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L3_S8_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L3_S10_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L3_S10_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L3_S10_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L3_S10_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L3_S10_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L3_S10_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Sebastian: Wann stehst du am am von um Sonntag auf?\nNico: Am Am Von Um Sonntag stehe ich spät auf, um am von um elf. Und du?\nSebastian: Ich schlafe nicht lange . Am Am Von Um Sonntag stehe ich schon um am von um neun auf. Um Am Von Um zehn mache ich Sport.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L3_S11_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Nawin: Ich gehe am am von um bis Freitag ins Café. Kommst du mit ?\nNina: Wann denn?\nNawin: Um Am Von Um Bis sieben.\nNina: Das geht nicht. Am Freitag habe ich von am von um bis sechs bis am von um bis acht einen Englischkurs. Aber was machst du am am von um bis Samstag? \nNawin: Am Am Von Um Bis Samstag habe ich Zeit .",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L3_S11_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Am Samstag bereitet sie den Unterricht vor.\nAm Dienstag und Mittwoch fängt der Unterricht um 9:00 Uhr an.\nSie liest einen Text vor.\nDie Schüler schreiben mit.\nDer Kurs hört immer um 12:00 Uhr auf.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L3_S12_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L3_S14_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L3_S14_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L3_S14_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L3_S14_A4_Audio1.mp3"
					}
				]
			]
		]
	},
	{
		title		: "Emmas Wochenende",
		"avatarURL": "https://static.dw.com/image/37400255_401.jpg",
		hyperText	: [
			[
				"Lisa denkt : „Emma isst Müsli.“ Aber Emma isst Schokoladencreme .\nLisa denkt: „Emma macht Hausaufgaben.“ Aber Nico macht Emmas Hausaufgaben .\nLisa denkt: „Emma isst Gemüse.“ Aber Emma und Nico essen Eis und Pizza .\nLisa denkt: „Emma übt Flöte.“ Aber Emma und Nico spielen zusammen .\nLisa denkt: „Emma sieht nicht fern.“ Aber Emma sieht fern .",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L4_S2_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L4_S5_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L4_S5_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L4_S5_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Zuerst macht Emma am Samstag das Frühstück. Dann frühstücken alle zusammen. Danach gehen Lisa und Emma nach draußen und spielen Fußball.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L4_S6_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Am Samstagnachmittag kauft Lisa ein. Dann kochen Emma und Nico. Danach gehen Emma und Lisa ins Kino.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L4_S6_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Am Sonntag besucht Jürgen Emma und Lisa. Danach geht Emma ins Bett und dann liest Lisa ein Buch.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L4_S6_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Am Sonntag habe ich Zeit. Zuerst schlafe ich lange. Dann stehe ich auf und mache Frühstück.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L4_S7_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Emma isst zu viel Eis. Danach geht es Emma schlecht.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L4_S7_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Ich komme um sechs nach Hause. Zuerst koche ich, danach räume ich die Küche auf.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L4_S7_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Am Samstag fängt das Wochenende an und Sebastian arbeitet nicht. Zuerst kauft er ein, dann geht er aus, danach schläft er viel. Und dann ist wieder Montag.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L4_S7_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L4_S8_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L4_S8_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L4_S8_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L4_S8_A5_Audio1.mp3"
					}
				]
			],
			[
				"Am Wochenende schlafen wir aus.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L4_S9_A1_Audio1.mp3z"
					}
				]
			],
			[
				"Okay, am Wochenende schlafen wir aus.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L4_S9_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Am Samstag machen wir zuerst Frühstück.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L4_S9_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L4_S9_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Und danach gehen wir ins Kino.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L4_S9_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L4_S9_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Und dann essen wir, lesen ein Buch und gehen ins Bett.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L4_S9_A6_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L4_S9_A6_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L4_S11_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L4_S11_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L4_S11_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L4_S11_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L4_S11_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Sebastian ist am Wochenende viel draußen.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L4_S12_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"spielen: Fußball, Volleyball,\nspielen: Flöte,\nmachen: das Frühstück, das\nmachen: Yoga,\nfahren: Fahrrad,\ngehen: ins Kino, ins Restaurant, ins Theater, ins",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L4_S13_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Lisa und Emma spielen draußen Fußball.\nEmma spielt Flöte.\nEmma macht Hausaufgaben.\nEmma und Nico gehen ins Kino.\nEmma und Lisa fahren Auto.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L4_S14_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L4_S15_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L4_S15_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L4_S15_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L4_S15_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L4_S15_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L4_S15_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L4_S15_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L4_S15_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L4_S15_A5_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L4_S15_A6_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L4_S16a_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L4_S16_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L4_S17_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E7_L4_S17_A2_Loesungsaudio.mp3"
					}
				]
			]	
		]
	},
	{
		title		: "Wie spät ist es?",
		"avatarURL": "https://static.dw.com/image/37399924_401.jpg",
		hyperText	: [
			[
				"Anruf 1:\nMann: Von wann bis wann hat das Restaurant geöffnet ?\nTarek: Von 9:00 Uhr bis 23:00 Uhr .\n\nAnruf 2:\nFrau: Hat das Restaurant am Dienstag um 13:00 Uhr geöffnet?\nTarek: Ja, da haben wir geöffnet.\nFrau: Und hat das Restaurant am Montag geöffnet?\nTarek: Nein, da haben wir leider geschlossen .\n\nAnruf 3:\nMann: Ab wann hat das Restaurant geöffnet?\nTarek: Ab 9:00 Uhr .",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L1_S4_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L1_S5_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L1_S5_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L1_S5_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L1_S5_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L1_S5_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L1_S5_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L1_S5_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L1_S5_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L1_S7_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L1_S7_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L1_S7_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L1_S7_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Tarek : „Das Marek“. Hier ist Tarek.\nLisa : Hallo, hier ist Lisa.\nTarek : Hallo, Lisa!\nLisa : Ist Nico da?\nTarek : Nico? Ja, der ist hier.\nLisa : Ich komme erst um Viertel vor eins. Sagst du das Nico bitte?\nTarek : Okay. Ich sage es Nico. Bis gleich! Tschüss!\nLisa : Ja, bis gleich!\nNico : War das Lisa?\nTarek : Ja. Sie kommt um Viertel vor eins, also um 12 Uhr 45.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L1_S8_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Es ist Viertel nach zwölf.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37583753_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L1_S10_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Es ist fünf vor zwölf.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37584032_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L1_S10_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Es ist zwanzig vor sechs.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37584016_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L1_S10_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Es ist zehn nach sieben.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37584000_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L1_S10_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Es ist fünf vor halb sechs.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37583984_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L1_S10_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Viertel vor eins = 12:45 13:15 12:45\nViertel nach eins = 13:15 13:15 12:45\nViertel nach drei = 3:15 3:15 2:45\nViertel vor drei = 2:45 3:15 2:45\nzehn vor fünf = 16:50 16:50 17:10\nzehn nach fünf = 17:10 16:50 17:10",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L1_S9_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Um zehn nach acht bin ich im Restaurant.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L1_S11_A1_Audio1.mp3"
					}
				]
			],
			[
				"Um Viertel vor zehn schreibe ich das Mittagsangebot.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L1_S11_A2_Audio1.mp3"
					}
				]
			],
			[
				"Ab fünf vor halb elf bereite ich das Essen vor.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L1_S11_A3_Audio1.mp3"
					}
				]
			],
			[
				"Von zehn nach elf bis zwölf räume ich auf.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L1_S11_A4_Audio1.mp3"
					}
				]
			],
			[
				"Um kurz nach zwölf gehe ich dann nach Hause.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L1_S11_A5_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L1_S12_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L1_S12_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L1_S12_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L1_S12_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L1_S12_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L1_S12_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L1_S12_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L1_S12_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Wann bist du da?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L1_S15_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L1_S15_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L1_S15_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L1_S15_A3_Loesungsaudio.mp3"
					}
				]
			]
		]
	},
	{
		title		: "Hast du morgen Zeit?",
		"avatarURL": "https://static.dw.com/image/37397825_401.jpg",
		hyperText	: [
			[
				"Max hat vom 1. bis zum 7. November Frühdienst.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L2_S2_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"1. = der Erste\n2. = der Zweite\n3. = der Dritte\n4. = der Vierte\n5. = der Fünfte\n6. = der Sechste\n7. = der Siebte\n8. = der Achte\n9. = der Neunte\n10. = der Zehnte\n11. = der Elfte",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L2_S4_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"20. = der Zwanzigste\n21. = der Einundzwanzigste\n22. = der Zweiundzwanzigste\n23. = der Dreiundzwanzigste\n30. = der Dreißigste\n31. = der Einunddreißigste",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L2_S4_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Vorgestern war der Neunzehnte.\nGestern war der Zwanzigste .\nHeute ist der Einundzwanzigste.\nMorgen ist der Zweiundzwanzigste .\nÜbermorgen ist der Dreiundzwanzigste .",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L2_S5_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Heute ist der Sechste.\n\nÜbermorgen ist der Achte .\n\nGestern war der Fünfte .\n\nVorgestern war der Vierte .\n\nMorgen ist der Siebte .",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L2_S5_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Morgen ist der Zwölfte.\n\nGestern war der Zehnte .\n\nHeute ist der Elfte .\n\nÜbermorgen ist der Dreizehnte .\n\nVorgestern war der Neunte .",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L2_S5_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Der Wievielte ist morgen?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L2_S6_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L2_S6_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Der Wievielte ist übermorgen?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L2_S6_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L2_S6_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Der Wievielte ist morgen?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L2_S6_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L2_S6_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L2_S6_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L2_S7_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L2_S7_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L2_S7_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L2_S7_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Januar – Februar – März",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L2_S8_A1_Audio1.mp3"
					}
				]
			],
			[
				"April – Mai – Juni",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L2_S8_A2_Audio1.mp3"
					}
				]
			],
			[
				"Juli – August – September",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L2_S8_A3_Audio1.mp3"
					}
				]
			],
			[
				"Oktober – November – Dezember",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L2_S8_A4_Audio1.mp3"
					}
				]
			],
			[
				"Wie heißen die Monate auf Deutsch?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L2_S9_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L2_S9_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L2_S10_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L2_S10_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L2_S10_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L2_S10_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L2_S11_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L2_S11_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L2_S11_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L2_S11_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L2_S11_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L2_S11_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Restaurant „Das Marek“, guten Tag. Kretz, guten Tag. Ich möchte einen Tisch reservieren. Wann möchten Sie kommen, Herr Kretz? Geht es am Freitagabend um sieben? Das ist der Vierte. Ja, das geht. Also am Vierten um 19:00 Uhr. Vielen Dank. Auf Wiederhören.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L2_S13_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L2_S14_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L2_S14_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L2_S14_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L2_S14_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L2_S14_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L2_S14_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L2_S14_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L2_S14_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L2_S16_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L2_S16_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L2_S16_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L2_S16_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L2_S17_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L2_S17_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L2_S17_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L2_S17_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L2_S17_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L2_S17_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L2_S17_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L2_S17_A4_Loesungsaudio.mp3"
					}
				]
			],
				
			
			
			
		
			
		
		]
	},
	{
		"title": "Wann spielen wir?",
		"avatarURL": "https://static.dw.com/image/37397842_401.jpg",
		hyperText	: [
			[
				"",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://learngerman.dw.com/#"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L3_S4_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L3_S4_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37584621_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L3_S4_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L3_S4_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L3_S6_A1_Audio1.mp3"
					}
				]
			],
			[
				"Diese Woche? Nein, da kann ich leider nicht.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L3_S6_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L3_S6_A2_Audio1.mp3"
					}
				]
			],
			[
				"Nächste Woche? Ja, da kann ich.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L3_S6_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L3_S6_A3_Audio1.mp3"
					}
				]
			],
			[
				"Diesen Sonntag? Nein, da kann ich leider nicht.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L3_S6_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L3_S6_A4_Audio1.mp3"
					}
				]
			],
			[
				"Nächsten Sonntag? Ja, da kann ich.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L3_S6_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Ja, aber ich kann erst ab 14:30 Uhr. Ich arbeite bis mittags.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L3_S7_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L3_S7_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L3_S7_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L3_S7_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Yanis: Wann gehen wir mal wieder zusammen ins Kino ? Am Montagabend ?\nMax: Ja, gerne. Wann treffen wir uns?\nYanis: Um sechs?\nMax: Das ist zu früh. Ich kann erst ab halb sieben.\nYanis: Okay, dann treffen wir uns um halb sieben. Treffen wir uns im Kino?\nMax: Okay.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L3_S10_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Lisa: Wann gehen wir mal wieder zusammen aus ? Am Freitagabend ?\nNina: Ja, gern. Wann treffen wir uns?\nLisa: Um zehn?\nNina: Das ist zu früh. Ich kann erst ab elf.\nLisa: Okay, dann treffen wir uns um elf. Treffen wir uns im „Das Marek“?\nNina: Okay.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L3_S10_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Lasse: Ich gehe am Sonntag ins Schwimmbad . Kommst du mit? \nTarek: Ja, gern. Wann treffen wir uns?\nLasse: Um fünf?\nTarek: Das ist zu spät. Ich kann nur bis halb fünf. Geht es auch schon um zwei?\nLasse: Okay, dann treffen wir uns um zwei . Treffen wir uns im Schwimmbad?\nTarek: Gut.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L3_S10_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L3_S11_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L3_S11_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L3_S11_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L3_S11_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L3_S12_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L3_S12_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L3_S12_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L3_S12_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L3_S12_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L3_S13_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L3_S13_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L3_S13_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L3_S13_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L3_S14_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L3_S14_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L3_S14_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L3_S14_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L3_S14_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L3_S14_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L3_S14_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L3_S14_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L3_S14_A5_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L3_S14_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L3_S15_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L3_S15_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L3_S15_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L3_S15_A1_Loesungsaudio.mp3"
					}
				]
			],
		]
	},
	{
		title		: "Zu spät!?",
		"avatarURL": "https://static.dw.com/image/37397900_401.jpg",
		hyperText	: [
			[
				"Es waren zu viele Autos auf den Straßen. Ich war im Stau.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37584481_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L4_S3_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Mein Auto hatte eine Panne.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37584457_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L4_S3_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Der Bus hatte Verspätung.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37584497_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L4_S3_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L4_S4_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L4_S4_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L4_S4_A3_Audio1.mp3"
					}
				]
			],
			[
				"Lisa kommt später.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L4_S5_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Tarek sagt das Treffen ab.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L4_S5_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L4_S6_A1_Audio1.mp3"
					}
				]
			],
			[
				"Guten Tag, mein Name ist Lisa Brunner.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L4_S6_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L4_S6_A2_Audio1.mp3"
					}
				]
			],
			[
				"Ich habe heute um 14:00 Uhr einen Termin. Aber ich bin im Stau. Ich kann leider nicht kommen.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L4_S6_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L4_S6_A3_Audio1.mp3"
					}
				]
			],
			[
				"Ja, das geht. Vielen Dank. Auf Wiederhören.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L4_S6_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Hey, Yanis! \nEntschuldigung, wir waren gestern Abend nicht bei der Party. Wir hatten eine Panne . Und ich hatte kein Handy und kein Geld für den Bus. Tarek hatte ein Handy, aber er hatte deine Nummer leider nicht. Hattet ihr Spaß ? Lisa und Nina sagen, die Party war toll. :-)\nViele Grüße \nMax",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L4_S7_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Hallo Max, \nkein Problem. :-) Die Party war toll. Wir hatten Glück. Das Wetter war gut und wir waren lange draußen. Lasse war zu spät. Wie immer. Sein Zug hatte Verspätung . Aber das war kein Problem. Das Essen war super und ich glaube , niemand hatte Langeweile . Aber ich hatte zu viel Arbeit … ;-)\nBis bald \nYanis",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L4_S7_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L4_S8_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L4_S9_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L4_S9_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L4_S9_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L4_S9_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L4_S10_A1_Audio1.mp3"
					}
				]
			],
			[
				"Entschuldigung, der Bus hatte Verspätung. Ich komme in 15 Minuten.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L4_S10_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L4_S10_A2_Audio1.mp3"
					}
				]
			],
			[
				"Ja, der Zug hatte eine halbe Stunde Verspätung. Es tut mir sehr leid.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L4_S10_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L4_S10_A3_Audio1.mp3"
					}
				]
			],
			[
				"Entschuldigen Sie bitte! Ich war im Stau.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L4_S10_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Am 21. November war Lisa zu spät.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L4_S13_A1_Audio1.mp3"
					}
				]
			],
			[
				"Sie war im Stau.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L4_S13_A2_Audio1.mp3"
					}
				]
			],
			[
				"Nico war lange im Restaurant.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L4_S13_A3_Audio1.mp3"
					}
				]
			],
			[
				"Nico hatte keine Langeweile.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L4_S13_A5_Audio1.mp3"
					}
				]
			],
			[
				"Im Hostel gibt es kein Zimmer für Nico.\nInge hat ein Zimmer für Nico.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L4_S14_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Nico bleibt ein paar Tage bei Inge.\nInge gibt Nico die Adresse.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E8_L4_S14_A2_Loesungsaudio.mp3"
					}
				]
			]	
		]
	},
	{
		title		: "Ich bin Lehrerin",
		"avatarURL": "https://static.dw.com/image/38272750_401.jpg",
		hyperText	: [
			[
				"‚DAS MAREK‘ ist das Restaurant von Max und Tarek. Da sind sie die Chefs. Aber sie sind eigentlich nicht Koch oder Kellner von Beruf . Max ist Bankkaufmann . Die Arbeit in der Bank findet er nicht interessant. Er arbeitet lieber im Restaurant. Tarek ist Elektriker von Beruf und arbeitet auch lieber im Restaurant. Und Lisa arbeitet als Lehrerin für Deutsch und Englisch und sucht eine feste Arbeit . Sie hat heute ein Bewerbungsgespräch .",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L1_S2_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L1_S3_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L1_S3_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L1_S3_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L1_S9_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L1_S7_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Ich arbeite als Friseur . Ich arbeite im Friseursalon .\nIch bin Ingenieurin . Ich arbeite in der Fabrik .\nIch bin Bankkauffrau . Ich arbeite in der Bank .\nIch arbeite als Lehrer . Ich arbeite in der Schule.\nIch arbeite als Verkäuferin . Ich arbeite in einem Geschäft .",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L1_S8_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L1_S10_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L1_S11_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L1_S11_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L1_S11_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L1_S12_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L1_S12_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L1_S12_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L1_S12_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Singular\ndas Büro: Ich liebe das/mein/unser - - e en Büro.\ndie Arbeit: Ich liebe die/mein e - e en /unsere Arbeit.\nder Job: Ich liebe den/mein en - e en /unser en er e en Job.\n\nPlural\ndie Kollegen : Ich liebe die/mein e er e en /unser e - e en Kollegen.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L1_S14_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L1_S15_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L1_S15_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L1_S15_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L1_S15_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Meine Freundin ist Informatikerin . Für die Arbeit braucht sie einen ein einen Computer und einen ein einen Schreibtisch. Sie ruft ihre ihr ihre Kunden auch oft an. Ihr Ihr Ihre Kalender liegt immer auf dem Schreibtisch. Sie arbeitet allein im Büro.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L1_S16_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Ich bin Köchin in einem Restaurant in Köln. Meine Mein Meine Schwester arbeitet als Kellnerin hier und unser unser uns Vater leitet das Restaurant. Ich mag die Arbeit. Aber meine mein meine Arbeitszeiten mag ich nicht. Wenn ich frei habe , räume ich meine mein meine Wohnung auf oder lese ein Buch. ",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L1_S16_A2_Loesungsaudio.mp3"
					}
				]
			]
		]
	},
	{
		"title": "Mein Beruf",
		"avatarURL": "https://static.dw.com/image/37397884_401.jpg",
		hyperText	: [
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L2_S3_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L2_S3_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L2_S3_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L2_S5_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L2_S5_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L2_S5_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Eine Sekretärin muss E-Mails schreiben.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L2_S6_A1_Audio1.mp3"
					}
				]
			],
			[
				"Ein Elektriker muss Geräte reparieren.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L2_S6_A3_Audio1.mp3"
					}
				]
			],
			[
				"Ein Taxifahrer muss das Auto kontrollieren.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L2_S6_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L2_S7_A1_Audio.mp3"
					}
				]
			],
			[
				"Ich auch. Ich muss auch jeden Tag früh aufstehen.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L2_S7_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L2_S7_A2_Audio.mp3"
					}
				]
			],
			[
				"Ich auch. Ich muss auch sehr viele E-Mails schreiben.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L2_S7_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L2_S7_A3_Audio.mp3"
					}
				]
			],
			[
				"Ich auch. Ich muss auch viel organisieren und planen.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L2_S7_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L2_S7_A4_Audio.mp3"
					}
				]
			],
			[
				"Ich auch. Ich muss auch oft Kunden treffen.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L2_S7_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L2_S8_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L2_S8_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L2_S11_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L2_S11_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L2_S12_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L2_S12_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L2_S12_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L2_S12_A4_Loesungsaudio.mp3"
					}
				]
			],
				
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L2_S13_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L2_S13_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L2_S13_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L2_S14_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Ich muss jeden Tag früh aufstehen.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L2_S15_A1_Audio1.mp3"
					}
				]
			],
			[
				"Du kannst nicht ausschlafen.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L2_S15_A2_Audio1.mp3"
					}
				]
			],
			[
				"Er muss jedes Wochenende arbeiten.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L2_S15_A3_Audio1.mp3"
					}
				]
			],
			[
				"Er kann am Wochenende keine Freunde treffen.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L2_S15_A4_Audio1.mp3"
					}
				]
			]
		]
	},
	{
		title		: "Wo ist der Aufzug?",
		"avatarURL": "https://static.dw.com/image/37397917_401.jpg",
		hyperText	: [
			[
				"Die Information ist im Erdgeschoss . Die Toiletten sind in der ersten Etage . Die Bibliothek ist in der zweiten Etage . Die Cafeteria ist in der dritten Etage .",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37586532_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L3_S4_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L3_S5_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L3_S5_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L3_S5_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L3_S6_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L3_S6_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L3_S6_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L3_S8_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L3_S8_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L3_S8_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L3_S8_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Nico und Max sind neben den Toiletten.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L3_S9_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Zimmer 431 ist zwischen den Konferenzräumen.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L3_S9_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Emma ist neben dem Stuhl.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37586575_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L3_S10_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Emma ist auf dem Stuhl.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37586688_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L3_S10_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Emma ist hinter dem Stuhl.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37586727_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L3_S10_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Emma ist vor dem Stuhl.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37586402_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L3_S10_A4_Loesungsaudiov.mp3"
					}
				]
			],
			[
				"Emma ist zwischen den Stühlen.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37586388_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L3_S10_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Das Schild ist über der Tür.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37586417_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L3_S11_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Das Schild ist unter dem Fenster.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37586431_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L3_S11_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Das Schild ist an der Tür.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37586445_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L3_S11_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Das Schild ist in der Küche.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37586502_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L3_S11_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L3_S12_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L3_S13_A1_Loesungsaudio.mp3"
					}
				]
			]
		]
	},
	{
		title		: "Traumberufe",
		"avatarURL": "https://static.dw.com/image/37397933_401.jpg",
		hyperText	: [
			[
				"Nico und Max sitzen vor Zimmer 431.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L4_S1_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Nico und Max sprechen über Nicos Reise.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L4_S1_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L4_S4_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L4_S5_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L4_S5_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L4_S5_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L4_S7_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L4_S7_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L4_S7_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Ich will ins Kino gehen.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L4_S11_A1_Audio1.mp3"
					}
				]
			],
			[
				"Ich kann nicht ins Kino gehen.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L4_S11_A2_Audio1.mp3"
					}
				]
			],
			[
				"Ich muss im Büro arbeiten.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L4_S11_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L4_S12_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E9_L4_S12_A2_Loesungsaudio.mp3"
					}
				]
			]
		]
	},
	{
		title		: "Wo ist der Bahnhof?",
		"avatarURL": "https://static.dw.com/image/37397949_401.jpg",
		hyperText	: [
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L1_S5_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L1_S5_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L1_S5_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L1_S5_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L1_S5_A5_Audio1.mp3"
					}
				]
			],
			[
				"Wohnst du in der Borngasse?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L1_S6_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L1_S6_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Arbeitest du in der Kälberstraße?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L1_S6_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L1_S6_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Wohnst du am Friedensplatz?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L1_S6_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L1_S6_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Arbeitest du im Tulpenweg?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L1_S6_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L1_S6_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Wohnst du im Zentrum?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L1_S6_A5_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L1_S6_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Die Oper ist in der Nähe vom Museum.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L1_S8_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L1_S9_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L1_S9_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L1_S9_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L1_S9_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L1_S9_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L1_S9_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L1_S9_A5_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L1_S9_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L1_S9_A6_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L1_S9_A6_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L1_S11_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L1_S11_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L1_S11_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L1_S12_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L1_S12_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L1_S12_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L1_S12_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L1_S12_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L1_S12_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L1_S12_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L1_S12_A4_Loesungsaudio.mp3"
					}
				]
			]
		]
	},
	{
		title		: "An der Ampel links",
		"avatarURL": "https://static.dw.com/image/37397769_401.jpg",
		hyperText	: [
			[
				"Ihr fahrt bis zum Grafenplatz.\nIhr überquert die Kreuzung.\nAn der nächsten Ampel geht ihr rechts.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L2_S3_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L2_S4_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L2_S4_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L2_S4_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L2_S4_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L2_S4_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L2_S4_A6_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Ihr geht bis zum Platz.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37761625_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L2_S6_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Ihr geht hier links.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37764754_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L2_S6_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Ihr geht die Straße entlang und dann immer geradeaus.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37764738_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L2_S6_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Ihr geht am Theater vorbei.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37764722_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L2_S6_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Ihr geht hier rechts.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37764706_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L2_S6_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Ihr geht bis zur Kreuzung.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37764797_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L2_S7_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Ihr geht an der Kreuzung (nach) links.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37764754_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L2_S7_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Ihr geht über die Kreuzung.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37764814_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L2_S7_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Ihr geht am Supermarkt vorbei und die zweite Straße links.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/38749944_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L2_S7_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L2_S10_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L2_S10_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L2_S10_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L2_S11_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L2_S11_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L2_S12_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L2_S12_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L2_S12_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L2_S13_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L2_S13_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L2_S15_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L2_S15_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L2_S15_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L2_S15_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L2_S15_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L2_S15_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L2_S15_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L2_S15_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L2_S16_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L2_S16_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L2_S16_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L2_S16_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L2_S16_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Entschuldigung, können Sie mir helfen? Wie komme ich zur Friedrichstraße?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L2_S18_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Entschuldigung, können Sie mir helfen? Gibt es hier einen Supermarkt?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L2_S18_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Entschuldigung, können Sie mir helfen? Wo ist der Bahnhof?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L2_S18_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Entschuldigung, können Sie mir helfen? Wir suchen die Touristeninformation.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L2_S18_A4_Loesungsaudio.mp3"
					}
				]
			]
		]
	},
	{
		title		: "Mit Bus und Bahn",
		"avatarURL": "https://static.dw.com/image/37397548_401.jpg",
		hyperText	: [
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L3_S4_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L3_S4_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L3_S4_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L3_S4_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L3_S5_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L3_S5_A2_Audio1.mp3"
					}
				]
			],
			[
				"Wie kommst du zur Arbeit?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L3_S6_A1_Audio1.mp3"
					}
				]
			],
			[
				"Ich fahre mit dem Bus und mit dem Zug zur Arbeit.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L3_S6_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Wie kommst du zur Sprachschule?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L3_S6_A2_Audio1.mp3"
					}
				]
			],
			[
				"Ich fahre mit der Straßenbahn zur Sprachschule.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L3_S6_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Wie kommst du zum Supermarkt?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L3_S6_A3_Audio1.mp3"
					}
				]
			],
			[
				"Ich fahre immer mit dem Fahrrad zum Supermarkt.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L3_S6_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Nimmst du den Bus zur Arbeit?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L3_S6_A5_Audio1.mp3"
					}
				]
			],
			[
				"Nein, ich gehe zu Fuß. Ich fahre nur manchmal mit dem Bus.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L3_S6_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L3_S8_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L3_S8_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L3_S8_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L3_S9_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L3_S10_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L3_S10_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L3_S10_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L3_S10_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L3_S10_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L3_S10_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L3_S10_A5_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L3_S10_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Hey Nico,\nnein, du musst die Linie 712 Richtung „Rosenpark“ nehmen. An der Haltestelle „Nelkenweg“ musst du umsteigen . Du kannst dann mit der Linie 18 oder 20 fahren. Sie fahren direkt zur Haltestelle „Tulpenplatz“. Der Tulpenweg ist ganz in der Nähe. Die Fahrt dauert eine halbe Stunde. Ach ja, du musst eine Fahrkarte beim Fahrer kaufen. Ich glaube, die Fahrt kostet hin und zurück 4 Euro.\nLisa",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L3_S11_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L3_S12_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L3_S12_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L3_S12_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L3_S12_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Hallo. Können Sie mir helfen? Welche Buslinie fährt zum Theaterplatz?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L3_S13_A1_Audio1.mp3"
					}
				]
			],
			[
				"Die Linie 20 fährt zum Theaterplatz.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L3_S13_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Entschuldigung. Wie kommt man zum Bahnhof?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L3_S13_A2_Audio1.mp3"
					}
				]
			],
			[
				"Nehmen Sie die Straßenbahn oder den Bus. Die Linie 2 und die Buslinien 9 und 16 fahren zum Bahnhof.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L3_S13_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Entschuldigung. Fährt der Bus zum Schwimmbad?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L3_S13_A3_Audio1.mp3"
					}
				]
			],
			[
				"Nein. Sie können mit dem Bus bis zur Haltestelle Marktplatz fahren. Da müssen Sie umsteigen.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L3_S13_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Wie lange dauert die Fahrt bis zum Marktplatz?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L3_S13_A4_Audio1.mp3"
					}
				]
			],
			[
				"Die Fahrt dauert 25 Minuten.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L3_S13_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Entschuldigung, was kostet eine Fahrkarte?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L3_S13_A5_Audio1.mp3"
					}
				]
			],
			[
				"Eine Fahrkarte kostet 4 Euro.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L3_S13_A5_Loesungsaudio.mp3"
					}
				]
			]
		]
	},
	{
		title		: "Im Büro",
		"avatarURL": "https://static.dw.com/image/37397628_401.jpg",
		hyperText	: [
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L4_S2_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Das Geld liegt unter der Tastatur.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37762074_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L4_S3_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Das Geld liegt zwischen dem Drucker und der Tastatur.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37762040_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L4_S3_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Das Geld liegt auf der Tastatur.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37762174_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L4_S3_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Das Geld liegt neben der Tastatur.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37762158_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L4_S3_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37761872_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L4_S4_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37762056_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L4_S4_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37761975_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L4_S4_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L4_S5_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L4_S5_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L4_S5_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L4_S5_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/43803256_505.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L4_S7_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"rechts neben dem Radiergummi – neben dem Büro – am Schreibtisch – im Brief von Rita – Richtung Grünpark – geradeaus in den Richardweg",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L4_S8_A2_Audio1.mp3"
					}
				]
			],
			[
				"vor der Tür – über dem Drucker – Papier im Hefter – hinter dem Locher – unter der Tastatur",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L4_S8_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L4_S9_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L4_S9_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L4_S9_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L4_S9_A4_Audio1.mp3"
					}
				]
			],
			[
				"Wo ist das Papier? Ist es auf dem Schreibtisch oder unter dem Schreibtisch?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L4_S10_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L4_S10_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Wo sind die Stifte? Sind sie neben der Tastatur oder hinter der Tastatur?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L4_S10_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L4_S10_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Ist Lisa im Schwimmbad? – Nein sie ist im Kino.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L4_S11_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Die Sprachschule ist in der Beethovenstraße.\nÜber der Tür hängt ein Schild.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L4_S12_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Das Café „Rickys“ ist neben der Brücke.\nDas Restaurant „Capri“ ist neben der Sprachschule.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L4_S12_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L4_S13_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L4_S13_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L4_S13_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L4_S13_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L4_S13_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L4_S13_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Nico: Da bist du ja. Endlich!\nLisa: Entschuldigung. Ich war im Stau. Der Verkehr ist abends immer schrecklich .&nbsp;\nNico: Stimmt.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L4_S16_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Sebastian: Mein Handy ist weg.&nbsp;\nNina: Das kann nicht sein. &nbsp;Es war doch hier auf dem Tisch.\nSebastian: Ah, da ist es.&nbsp;\nNina: Gut.&nbsp;–&nbsp;Du, Sebastian, wie spät ist es?\nSebastian: Halb drei.&nbsp;\nNina: Oh, ich muss los . Tschüss.&nbsp;\nSebastian: Schönen Tag noch.\nNina: Danke.&nbsp;",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E10_L4_S16_A2_Loesungsaudio.mp3"
					}
				]
			],
		]
	},
	{
		title		: "Lebensmittel",
		"avatarURL": "https://static.dw.com/image/37397644_401.jpg",
		hyperText	: [
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L1_S1_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37734596_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L1_S4_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37734614_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L1_S4_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37734718_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L1_S4_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L1_S5_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L1_S5_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L1_S5_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L1_S5_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L1_S6_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L1_S6_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L1_S6_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L1_S6_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L1_S6_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L1_S6_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L1_S6_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L1_S6_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L1_S7_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L1_S7_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://logs1187.xiti.com/hit.xiti?s=580963&idclient=6adba315-ed5a-4ad7-bd93-6b03bdf78f37&col=2&ts=1636950874917&vtag=5.29.2&ptag=js&r=2560x1080x24x24&re=1280x963&hl=7x34x34&lng=en-US&context=%5B%7B%22data%22%3A%7B%22page%22%3A%7B%22url%22%3A%22https%253A%252F%252Flearngerman.dw.com%252Fen%252Fbeginners%252Fc-36519789%22%7D%7D%7D%5D&events=%5B%7B%22name%22%3A%22page.display%22%2C%22data%22%3A%7B%22page%22%3A%7B%22%24%22%3A%22Food%20in%20Germany%22%2C%22chapter1%22%3A%22LEARN%20GERMAN%20NEU%22%2C%22chapter2%22%3A%22BAKU-EN%22%2C%22chapter3%22%3A%22A1%22%7D%2C%22site%22%3A%7B%22level2%22%3A%222%22%7D%2C%22course%22%3A%7B%22id%22%3A36519789%2C%22difficulty%22%3A%22A1%22%7D%2C%22contenttyp%22%3A1338%2C%22ausspielform%22%3A5%2C%22sprache%22%3A%222%22%2C%22maca%22%3A%7B%22parameter%22%3Anull%7D%2C%22oid%22%3A37602044%2C%22veroffentlichungsdatum%22%3A20170217%2C%22sid%22%3A36655909%2C%22url%22%3A%22https%3A%2F%2Flearngerman.dw.com%2Fen%2Ffood-in-germany%2Fl-37597045%2Fe-37602044%22%2C%22reihe%22%3A%7B%22string%22%3A%22Nicos%20Weg%22%7D%7D%7D%5D&ref="
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L1_S9_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L1_S9_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L1_S9_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Emma isst gern ein Brot mit Nugatcreme zum Frühstück. Was isst du gern zum Frühstück?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L1_S10_A1_Audio1.mp3"
					}
				]
			],
			[
				"Ich esse gern Müsli zum Frühstück.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L1_S10_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Nico isst gern ein Steak oder zwei zu Mittag. Was isst du gern zu Mittag?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L1_S10_A2_Audio1.mp3"
					}
				]
			],
			[
				"Zu Mittag esse ich gern einen Hamburger.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L1_S10_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Nina mag kein Fleisch. Was magst du nicht?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L1_S10_A4_Audio1.mp3"
					}
				]
			],
			[
				"Ich mag keinen Fisch.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L1_S10_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Inge hat Hunger. Sie möchte ein Schnitzel essen. Hast du Hunger? Was möchtest du essen?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L1_S10_A5_Audio1.mp3"
					}
				]
			],
			[
				"Ich habe auch Hunger. Ich möchte einen Hamburger essen.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L1_S10_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L1_S11_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L1_S13_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L1_S13_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L1_S13_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L1_S13_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Was isst du gern zum Frühstück?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L1_S15_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L1_S15_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Und was trinkst du gern zum Frühstück?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L1_S15_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L1_S15_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Was isst du gern zum Mittagessen?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L1_S15_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L1_S15_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Und was trinkst du gern zum Mittagessen?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L1_S15_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L1_S15_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Und was isst du gern zum Abendessen?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L1_S15_A5_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L1_S15_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Und was trinkst du gern zum Abendessen?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L1_S15_A6_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L1_S15_A6_Loesungsaudio.mp3"
					}
				]
			]	
		]
	},
	{
		title		: "Ich mag (nicht)!",
		"avatarURL": "https://static.dw.com/image/37397697_401.jpg",
		hyperText	: [
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L2_S1_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L2_S2_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L2_S2_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Trinkst du gern Kaffee?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L2_S6_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L2_S6_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Trinkst du lieber Kaffee oder Tee?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L2_S6_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L2_S6_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Was trinkst du am liebsten – Kaffee, Milch oder Tee?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L2_S6_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L2_S6_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Isst du gern Pizza?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L2_S6_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L2_S6_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Isst du lieber Pizza oder Hamburger?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L2_S6_A5_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L2_S6_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Was isst du am liebsten – Pizza, Hamburger oder Fisch mit Gemüse?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L2_S6_A6_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L2_S6_A6_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Nico, Max und Jürgen trinken gern&nbsp;Kaffee.\nNico trinkt 4 Tassen Kaffee pro &nbsp;Tag. Max trinkt 6 Tassen Kaffee pro Tag. Und Jürgen trinkt 7 Tassen Kaffee pro Tag.\n\nNico trinkt viel Kaffee. Max trinkt mehr Kaffee. Jürgen trinkt am meisten Kaffee.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L2_S7_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Lisa und Nina trinken nicht gern Kaffee aus dem Automaten. Sie trinken gern frischen Kaffee. Sie finden, der Kaffee in der Unicafeteria schmeckt gut . Aber im Café „Zum Glück“ schmeckt der Kaffee besser . Am besten schmeckt der Kaffee natürlich im „Das Marek“ – dem Restaurant von Max und Tarek.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L2_S7_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Lisa macht sich zwei- bis dreimal pro Woche zu Hause ihr Essen. Sie ist eine Hobbyköchin und kocht gut . Max hat ein Restaurant und kocht manchmal neue Gerichte für das Restaurant. Er kocht besser als &nbsp;Lisa. Aber Tarek kocht am besten . Er ist ein absoluter Kochprofi.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L2_S10_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Obst und Gemüse sind gesund . Nina, Lisa und Inge achten auf gesunde Ernährung. Lisa isst drei- bis viermal pro Woche Obst und Gemüse. Man kann also sagen: Sie isst viel Obst und Gemüse. Nina isst fast jeden Tag&nbsp;Obst und Gemüse – also fünf- bis sechsmal pro Woche. Sie isst mehr Obst und Gemüse als Lisa. Inge isst jeden Tag Obst und Gemüse. Also isst sie am meisten Obst und Gemüse.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L2_S10_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Lisa: Ich esse gern Fisch mit Reis. Aber lieber esse ich Pfannkuchen . Und am liebsten esse ich Spaghetti mit Tomatensoße. Das ist mein Lieblingsessen.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L2_S10_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Trinkst du viel Kaffee?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L2_S11_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L2_S11_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Welches Getränk magst du am liebsten?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L2_S11_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L2_S11_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Isst du gern Obst und Gemüse?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L2_S11_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L2_S11_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Welches Obst und Gemüse magst du am liebsten?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L2_S11_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L2_S11_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Magst du lieber Reis oder Kartoffeln?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L2_S11_A5_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L2_S11_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Welche Beilage findest du am besten?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L2_S11_A6_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L2_S11_A6_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L2_S13_A1_Audio1.mp3"
					}
				]
			],
			[
				"Max sagt, der Rotwein aus Italien ist am besten.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L2_S13_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L2_S13_A2_Audio1.mp3"
					}
				]
			],
			[
				"Max sagt, Menü 2 ist am besten.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L2_S13_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L2_S13_A3_Audio1.mp3"
					}
				]
			],
			[
				"Max sagt, die Pizza mit Schinken und Käse ist am besten.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L2_S13_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Welch er er es e Wein ist am besten?\nWelch es er es e Fleisch ist am besten?\nWelch e er es e Pizza ist am besten?\n\n\nWelch e er es e Weine sind am besten?\nWelch e er es e Menüs sind am besten?\nWelch e er es e Pizzen sind am besten?",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L2_S14_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Welches Gemüse magst du gern? Welches Gemüse magst du nicht gern?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L2_S17_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L2_S17_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Welches Obst isst man in deinem Heimatland gern?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L2_S17_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L2_S17_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Welches Getränk trinkt man in deinem Heimatland am liebsten?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L2_S17_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L2_S17_A3_Loesungsaudio2.mp3"
					}
				]
			],
			[
				"Welches Getränk magst du nicht gern?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L2_S17_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L2_S17_A4_Loesungsaudio.mp3"
					}
				]
			]	
		]
	},
	{
		title		: "Haushaltsarbeit",
		"avatarURL": "https://static.dw.com/image/37397009_401.jpg",
		hyperText	: [
			[
				"Nico hängt zuerst Inges Wäsche auf. Danach möchte Nico das Geschirr abwaschen. Dann fällt ein Glas runter. Dann möchte Inge saugen, hat aber keinen Staubsaugerbeutel. Sie sucht den Besen. Zum Schluss kehrt Nico.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L3_S3_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Inge: Ich sauge &nbsp;nicht so oft. Ich hasse Hausarbeit : abwaschen , abtrocknen ,&nbsp; kochen , staubsaugen , waschen , putzen !&nbsp;Und dann alles wieder von vorn?&nbsp;Furchtbar!",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L3_S4_A1_Audio1.mp3"
					}
				]
			],
			[
				"Er putzt, saugt und räumt die Spülmaschine ein und aus.",
				{
					"standoff": "block"
				},				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L3_S5_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Er putzt, saugt und räumt die Spülmaschine ein und aus.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L3_S5_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Liebe Nina,\nich habe lange nicht geschrieben. Selten habe ich Zeit. Jamie, mir und unserer Josephine geht es gut. Jamie ist ein toller Hausmann. Regelmäßig putzt und saugt er und räumt die Spülmaschine ein und aus. Zum Glück haben uns Jamies Eltern ihre alte Spülmaschine geschenkt! Endlich müssen wir nie mehr selbst und . Jamie jeden Tag . Verrückt, oder? So ein Baby produziert viel . Meine Arbeit als Köchin macht Spaß. Oft bringe ich Jamie meine Schoko-Creme mit nach Hause. Wann kommst du und probierst sie?\n\nLiebe Grüße\nMarina",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L3_S6_A1_Audio1.mp3"
					}
				]
			],
			[
				"Das Zimmer von Emma ist unordentlich. Alles liegt auf dem Boden. Das ist ein großes Chaos. Sie will morgen aufräumen.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L3_S7_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Lisa möchte einen Salat machen. Zuerst muss sie den Salat waschen und Tomaten schneiden. Sie muss das Essen vorbereiten.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L3_S7_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Das Geschirr ist nicht sauber. Aber wir haben ja eine Spülmaschine und müssen nicht mit der Hand abwaschen. Wir müssen nur die Spülmaschine einräumen.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L3_S7_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Nach der Hausarbeit hat man Zeit zu relaxen. Man kann ein Buch lesen oderfernsehen.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L3_S7_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L3_S8_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L3_S8_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L3_S8_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L3_S9_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L3_S9_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L3_S9_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L3_S9_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"immer/ständig\n\noft/ häufig\n\nregelmäßig\n\nmanchmal\n\nselten\n\nnie/ niemals",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L3_S10_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Ich hänge die Wäsche selten auf – und du?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L3_S11_A1_Audio1.mp3"
					}
				]
			],
			[
				"Ich hänge die Wäsche oft/regelmäßig/manchmal/selten/nie auf.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L3_S11_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Was machst du oft im Haushalt?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L3_S11_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L3_S11_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Was machst du nie im Haushalt?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L3_S11_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L3_S11_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Ich putze regelmäßig das Bad – und du?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L3_S11_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L3_S11_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L3_S12_A1_Audio1.mp3"
					}
				]
			],
			[
				"Max mag Hausarbeit lieber als Nina.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L3_S12_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L3_S12_A2_Audio1.mp3"
					}
				]
			],
			[
				"Max macht mehr Hausarbeit als Lisa.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L3_S12_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L3_S12_A3_Audio1.mp3"
					}
				]
			],
			[
				"Max putzt besser als Sebastian.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L3_S12_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L3_S12_A4_Audio1.mp3"
					}
				]
			],
			[
				"Max macht genauso gern Hausarbeit wie Tarek.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L3_S12_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L3_S12_A5_Audio1.mp3"
					}
				]
			],
			[
				"Tarek hängt genauso oft Wäsche auf wie Max.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L3_S12_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Max isst gern Pizza. Tarek isst nicht so gern Pizza. Max isst Pizza lieber als Tarek.\n\nLisa ist eine gute Köchin. Max ist auch ein guter Koch. Sie kochen gleich gut. Lisa kocht genauso gut wie Max.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L3_S13_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Machst du lieber Hausarbeit als dein bester Freund?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L3_S14_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L3_S14_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Trinkst du mehr Kaffee als deine beste Freundin?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L3_S14_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L3_S14_A2_Loesungsaudio.mp3"
					}
				]
			]	
		]
	},
	{
		title		: "Was macht dir Spaß?",
		"avatarURL": "https://static.dw.com/image/37397660_401.jpg",
		hyperText	: [
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L4_S1_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Nico angelt am liebsten.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L4_S2_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"36 % der Deutschen treiben einmal pro Woche&nbsp; Sport . Joggen ist ein Volkssport. Immer mehr Menschen&nbsp; laufen regelmäßig. Auch Nordic Walking und Wandern &nbsp;sind beliebt. Viele gehen auch ins Fitnessstudio oder fahren mit dem Fahrrad zur Arbeit.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L4_S4_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Nico schwimmt manchmal, hört viel Musik und fährt gern Fahrrad. Max und Tarek gehen gern ins Kino oder ins Theater. Tarek, Max und Nico spielen gern Fußball , aber am liebsten gehen sie angeln . Inge geht gern spazieren .",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L4_S4_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L4_S5_A1_Audio1.mp3"
					}
				]
			],
			[
				"Ja, ich spiele gern Fußball. / Nein, ich spiele nicht gern Fußball.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L4_S5_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L4_S5_A2_Audio1.mp3"
					}
				]
			],
			[
				"Ja, ich wandere gern. / Nein, ich wandere nicht gern.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L4_S5_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L4_S5_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L4_S5_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L4_S5_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L4_S5_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L4_S5_A5_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L4_S5_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L4_S7_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L4_S7_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L4_S8_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L4_S8_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L4_S8_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L4_S8_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L4_S8_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L4_S8_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L4_S8_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L4_S8_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L4_S8_A5_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L4_S8_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L4_S8_A6_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L4_S8_A6_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Sebastian sieht oft fern.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L4_S10_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Lisa sieht manchmal fern.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L4_S10_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Sebastian treibt häufig Sport.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L4_S10_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Nawin treibt jeden Tag Sport.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E11_L4_S10_A4_Loesungsaudio.mp3"
					}
				]
			]
		]
	},
	{
		title		: "Mengen und Preise",
		"avatarURL": "https://static.dw.com/image/37397679_401.jpg",
		hyperText	: [
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L1_S4_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L1_S4_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L1_S4_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/38697880_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L1_S6_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/38788238_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L1_S6_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/38788212_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L1_S6_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/38788257_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L1_S6_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L1_S8_A1_Audio1.mp3"
					}
				]
			],
			[
				"Ich kaufe Brot auch am liebsten in der Bäckerei. / Ich kaufe Brot nie in der Bäckerei. / Ich kaufe Brot oft im Supermarkt.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L1_S8_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L1_S8_A2_Audio1.mp3"
					}
				]
			],
			[
				"Ich kaufe Fleisch und Wurst auch immer in der Metzgerei. / Ich kaufe Fleisch und Wurst auf dem Markt. / Ich kaufe Fleisch und Wurst selten im Supermarkt.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L1_S8_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L1_S8_A3_Audio1.mp3"
					}
				]
			],
			[
				"Ich kaufe Obst und Gemüse auch immer auf dem Markt. / Ich kaufe Obst und Gemüse nie auf dem Markt.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L1_S8_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L1_S8_A6_Audio1.mp3"
					}
				]
			],
			[
				"Ich kaufe nie auf dem Markt ein. / Ich kaufe normalerweise Obst, Gemüse und Fisch auf dem Markt ein.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L1_S8_A6_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Mengenangaben\n\nein halbes Pfund = 250 Gramm = ein Viertel Kilo\nein Pfund = 500 Gramm = ein halbes Kilo\nzwei Pfund = 1000 Gramm = ein Kilo\n500 Milliliter = ein halber Liter\n1000 Milliliter = ein Liter\n&nbsp;",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L1_S10_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L1_S11_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L1_S11_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L1_S11_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L1_S11_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L1_S11_A5_Audio1.mp3"
					}
				]
			],
			[
				"Das ist eine Flasche Bier.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37283098_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L1_S14_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Das ist eine Packung Käse.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37768544_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L1_S14_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Das ist eine Tafel Schokolade.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/43821834_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L1_S14_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Das ist eine Dose Mais.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37768060_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L1_S14_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Der Einkaufszettel von Inge:\n\n1 Dose Mais\n250 Gramm Fetakäse\n20 Äpfel\n2 Flaschen Olivenöl\n5 Packungen Scheibenkäse\n1 Tafel Schokolade\n2,5 Kilo Rindfleisch\n1 Kilo Mehl\n4 Packungen Zucker\n1 Hähnchen\n3 Gurken\n1 Pfund Tomaten\n&nbsp;",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L1_S15_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L1_S16_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L1_S16_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L1_S16_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L1_S16_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L1_S16_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L1_S16_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L1_S16_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L1_S16_A4_Loesungsaudio.mp3"
					}
				]
			]
		]
	},
	{
		title		: "Was darf es sein?",
		"avatarURL": "https://static.dw.com/image/37397713_401.jpg",
		hyperText	: [
			[
				"Guten Tag. Was kann ich für Sie tun? Guten Tag. Ich möchte gern fünf Pfund Rindfleisch. Darf es sonst noch etwas sein? Wie viel kostet die spanische Salami? 100 g Salami kosten 1,49 Euro. Ich nehme 200 g. Das ist alles. Was kostet das zusammen? Das macht zusammen 5,00 Euro. Hier, bitte. Auf Wiedersehen.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L2_S6_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Was darf es sein?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L2_S7_A1_Audio1.mp3"
					}
				]
			],
			[
				"Ich hätte gern 350 g Salami.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L2_S7_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Darf es sonst noch etwas sein?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L2_S7_A2_Audio1.mp3"
					}
				]
			],
			[
				"Ich nehme bitte noch 200 g Schinken.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L2_S7_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Sonst noch etwas?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L2_S7_A3_Audio1.mp3"
					}
				]
			],
			[
				"Ja, ich hätte gern noch 1 kg Rindfleisch.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L2_S7_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Ist das alles?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L2_S7_A4_Audio1.mp3"
					}
				]
			],
			[
				"Ja, das ist alles.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L2_S7_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Das macht 18 Euro 25.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L2_S7_A5_Audio1.mp3"
					}
				]
			],
			[
				"Hier, bitte. Auf Wiedersehen.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L2_S7_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L2_S8_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L2_S8_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L2_S8_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L2_S8_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L2_S8_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L2_S8_A6_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L2_S9_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L2_S9_A2_Audio1.mp3"
					}
				]
			],
			[
				"Verkäufer: Was hätten Sie gern?\nKunde: vier Brötchen.\nVerkäufer: Welche Brötchen möchten Sie?\nKunde: zwei Weizenbrötchen und zwei Roggenbrötchen.\nVerkäufer: Sehr gern. Darf es sonst noch etwas sein?\nKunde: noch vier Stück Käsekuchen.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L2_S10_A1_Loesungsaudio1.mp3"
					}
				]
			],
			[
				"Verkäufer: Sonst noch etwas?\nKunde: Ja, ein Vollkornbrot bitte.\nVerkäufer: Geschnitten oder am Stück ?\nKunde: Am Stück&nbsp;bitte.&nbsp;\nVerkäufer: Haben Sie sonst noch einen Wunsch?\nKunde: Nein, danke. .\nVerkäufer: 10,30 Euro.\nKunde: Hier&nbsp;bitte.\nVerkäufer: Und 70 Cent für Sie. .\nKunde: Auf Wiedersehen.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L2_S10_A1_Loesungsaudio2.mp3"
					}
				]
			],
			[
				"In Deutschland gibt es mehr als 300 Brotrezepte.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L2_S12_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L2_S11_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L2_S11_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L2_S11_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L2_S11_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L2_S11_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L2_S11_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L2_S11_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L2_S11_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L2_S11_A5_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L2_S11_A6_Loesungsaudio.mp3"
					}
				]
			]
		]
	},
	{
		title		: "Sonst noch etwas?",
		"avatarURL": "https://static.dw.com/image/37397731_401.jpg",
		hyperText	: [
			[
				"Auf Wochenmärkten gibt es viele frische Produkte.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L3_S3_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Bananen sind im Angebot .1 Kilo kostet 1,10 Euro .\nÄpfel sind auch günstig : 1 Kilo kostet 1,75 Euro .\n&nbsp;",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L3_S5_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Wie viel kostet ein Pfund Tomaten?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L3_S7_A1_Audio1.mp3"
					}
				]
			],
			[
				"Wie viel kosten drei Kilo Kartoffeln?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L3_S7_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Wie teuer ist der Salat?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L3_S7_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Wie teuer sind die Karotten?",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L3_S7_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L3_S8_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L3_S8_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L3_S8_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L3_S8_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L3_S8_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L3_S8_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L3_S8_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L3_S8_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Verkäuferin: Sie wünschen? &nbsp;\nKunde: Ich hätte gern zwei Kilo Tomaten. Wie viel kosten die Tomaten?\nVerkäuferin: Zwei Kilo Tomaten kosten 2,99 Euro.\nKunde: Oh, das ist aber billig.\nVerkäuferin: Ja, die Tomaten sind heute im Angebot.\nKunde: Dann nehme ich drei Kilo. Und wie teuer ist der Salat?\nVerkäuferin: Der Salat kostet 99 Cent. Ein Stück für 99 Cent. Zwei Stück für 1,50 Euro.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L3_S9_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a2/A2_E4_L3_S9_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L3_S11_A1_Audio2.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L2_S7_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L3_S11_A2_Audio2.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L3_S11_A3_Audio1a.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L3_S11_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L3_S11_A4_Audio1a.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L3_S11_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L3_S11_A5_Audio1a.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L3_S11_A5_Audio2.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L3_S12_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L3_S12_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L3_S12_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L3_S12_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L3_S12_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L3_S12_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L3_S12_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L3_S12_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L3_S12_A5_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L3_S14_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L3_S14_A2_Audio1.mp3"
					}
				]
			],
			[
				"Guten Tag. Haben Sie Trauben? Ja, hier sind die Trauben. Die sind ganz süß und lecker. Wie viel kosten die Trauben denn? Trauben sind im Angebot: Ein Kilo kostet 2,00 Euro. Oh, das ist aber günstig. Dann nehme ich zwei Kilo. Sonst noch etwas? Nein, danke. Das ist alles.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L3_S15_A1_Loesungsaudio.mp3"
					}
				]
			]
		]
	},
	{
		title		: "Wie viel Mehl?",
		"avatarURL": "https://static.dw.com/image/37396868_401.jpg",
		hyperText	: [
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L4_S4_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L4_S4_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L4_S4_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Zuerst schneiden Sie die Zwiebeln. Dann braten Sie die Zwiebeln in einer Pfanne an. Geben Sie danach das Fleisch dazu. Zum Schluss geben Sie ein Stück Butter auf das Fleisch.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L4_S6_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L4_S8_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L4_S8_A2_Audio1.mp3"
					}
				]
			],
			[
				"Kochen Sie zuerst die Nudeln. Schneiden ​​​​​​Sie dann die Zwiebeln in Würfel. Braten Sie danach die Zwiebeln in einer Pfanne an. Verrühren Sie Sahne , Salz , Pfeffer und den Käse und gießen Sie alles über den Auflauf.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L4_S9_A1_Loesungsaudio.mp3"
					}
				]
			],






			[
				"Schälen Sie die Kartoffeln. Schneiden Sie dann die Kartoffeln in Scheiben . Hacken Sie den Knoblauch klein. Verrühren Sie die Milch und die Sahne. Würzen Sie&nbsp;die Mischung mit etwas&nbsp;Salz und Pfeffer. Geben Sie auch den Knoblauch dazu. Legen&nbsp;Sie die Kartoffeln in eine&nbsp; Form und gießen Sie die Milch-Sahne-Mischung dazu. Bestreuen Sie alles mit Käse und backen Sie das Gratin bei 200 Grad 15 bis 20 Minuten.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L4_S10_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Reis kochen . Die Paprika in Streifen schneiden . Die Zwiebeln und die Tomaten in Würfel schneiden. Das Gemüse in einer Pfanne braten . Den Fisch in eine Form geben und mit etwas Salz und Pfeffer würzen . Im Backofen bei 200 Grad ca. 20 Minuten backen .&nbsp;",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L4_S11_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Zuerst waschen Sie das Gemüse und dann schneiden Sie es klein.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L4_S12_A1_Audio1.mp3"
					}
				]
			],
			[
				"Dann geben Sie etwas Butter in die Pfanne.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L4_S12_A2_Audio1.mp3"
					}
				]
			],
			[
				"Braten Sie das Gemüse und würzen Sie mit Pfeffer und Salz.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L4_S12_A3_Audio1.mp3"
					}
				]
			],
			[
				"Kochen Sie dann die Nudeln ca. 8 Minuten.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L4_S12_A4_Audio1.mp3"
					}
				]
			],
			[
				"Servieren Sie die Nudeln mit dem Gemüse zusammen.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L4_S12_A5_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L4_S13_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L4_S13_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L4_S13_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L4_S13_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L4_S13_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L4_S13_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L4_S13_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L4_S13_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L4_S13_A5_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L4_S13_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Sie brauchen ein wenig Wasser, Mehl und Margarine.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L4_S14_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Sie brauchen Pfeffer, Salz und Kurkuma.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L4_S14_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L4_S16_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L4_S16_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L4_S16_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L4_S16_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L4_S16_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L4_S16_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L4_S16_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L4_S16_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L4_S16_A5_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L4_S16_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L4_S16_A6_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E12_L4_S16_A6_Loesungsaudio.mp3"
					}
				]
			]
		]
	},
	{
		title		: "Wie war dein Urlaub?",
		"avatarURL": "https://static.dw.com/image/37397753_401.jpg",
		hyperText	: [
			[
				"Das Taxi stoppt vor einem Hotel. Ein Mann steigt aus und telefoniert. Der Taxifahrer holt das Gepäck aus dem Auto. Der Mann nimmt seinen Koffer. Eine Reisetasche bleibt auf der Straße stehen.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L1_S1_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L1_S2_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Im Urlaub kann man am Meer zelten.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L1_S4_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Im Urlaub kann man in einem Hotel übernachten.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L1_S4_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Im Urlaub kann man eine Wanderung machen.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L1_S4_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Im Urlaub kann man Sehenswürdigkeiten besichtigen.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L1_S4_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Im Urlaub kann man am Strand faulenzen.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L1_S4_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Sommer, Sonne und Strand – viele Urlauber machen im Juli und August Ferien an der Ostsee, zum Beispiel&nbsp;auf der Insel Rügen. Hier kann man gut im Meer schwimmen und Wanderungen machen.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L1_S5_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Viele Urlauber fahren in die Alpen. In den Bergen kann man wandern . Das Schloss Neuschwanstein im Allgäu ist eine berühmte Sehenswürdigkeit . Es ist so schön wie in einem Märchen . Jedes Jahr besichtigen viele Touristen diese Sehenswürdigkeit &nbsp;und machen Fotos. Aber&nbsp;eine Besichtigung kostet viel Zeit. Es gibt fast immer Warteschlangen vor dem Schloss.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L1_S5_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L1_S6_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L1_S6_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L1_S6_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L1_S6_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L1_S6_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L1_S6_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L1_S6_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L1_S6_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Im Urlaub habe ich im Hotel übernachtet.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L1_S8_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Ich habe im Urlaub eine Wanderung in den Bergen gemacht.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L1_S8_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Im Urlaub habe ich viel gefaulenzt.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L1_S8_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Karl macht gerade eine Wanderung.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L1_S9_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Karl hat gestern auch eine Wanderung gemacht.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L1_S9_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Karls Mutter faulenzt gerade.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L1_S9_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Karls Mutter hat gestern auch gefaulenzt.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L1_S9_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L1_S11_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L1_S10_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L1_S10_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L1_S10_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L1_S10_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L1_S12_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L1_S12_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L1_S12_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L1_S13_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L1_S13_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L1_S13_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L1_S13_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L1_S13_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L1_S13_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L1_S13_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L1_S13_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L1_S16_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Liebe Nina&nbsp;(oder Grüezi – wie man hier sagt),\n\nviele Grüße aus der Schweiz. Gestern waren wir in Luzern und ich habe viele Fotos gemacht . Morgens haben wir im Café gefrühstückt . Wir hatten wirklich Glück mit dem Wetter. Natürlich hat Erik nachmittags auch ein bisschen im Hotelzimmer gefaulenzt . Ich war in der Sauna . Morgen gehen wir in den Zoo. Ich komme bald mal mit Fine auf einen Kaffee bei euch in der WG vorbei. Ich freue mich schon.\n\nLiebe Grüße\nMarina\n\nPS: Viele Grüße von Jamie und Josefine",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L1_S17_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L1_S18_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L1_S18_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L1_S18_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L1_S18_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L1_S18_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L1_S18_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L1_S18_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L1_S18_A4_Loesungsaudio.mp3"
					}
				]
			]	
		]
	},
	{
		title		: "Jahreszeiten",
		"avatarURL": "https://static.dw.com/image/37397788_401.jpg",
		hyperText	: [
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L2_S2_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Im Dezember, Januar und Februar ist Winter. Es ist kalt.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L2_S5_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Im März, April und Mai ist Frühling.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L2_S5_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Im Juni, Juli und August ist Sommer. Es ist warm.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L2_S5_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Im September, Oktober und November ist Herbst.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L2_S5_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L2_S6_Audio1.mp3"
					}
				]
			],
			[
				"Welche Jahreszeit ist im Juni, Juli und August?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L2_S6_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L2_S6_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Welche Jahreszeit ist im März, April und Mai?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L2_S6_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L2_S6_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Welche Jahreszeit ist im Dezember, Januar und Februar?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L2_S6_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L2_S6_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Welche Jahreszeit ist im September, Oktober und November?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L2_S6_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L2_S6_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L2_S7_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L2_S7_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L2_S7_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L2_S7_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L2_S9_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L2_S9_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L2_S10b_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L2_S10b_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L2_S10c_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L2_S11_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L2_S11_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L2_S11_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L2_S11_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L2_S12_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L2_S12_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L2_S12_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L2_S12_A4_Loesungsaudio.mp3"
					}
				]
			],
				
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L2_S13_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L2_S13_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L2_S13_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L2_S13_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L2_S13_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L2_S13_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Nina: Also, ich finde einen Winterurlaub einen&nbsp;Sommerurlaub.\nLisa: Was? Ein Skiurlaub ist doch&nbsp; ein Urlaub am Strand.\n&nbsp;",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L2_S14_A1_Audio1.mp3"
					}
				]
			],
			[
				"Nina: Ich war noch nicht so im Winterurlaub im Sommerurlaub. Ich war erst einmal Ski fahren . Der Skiurlaub war alle Strandurlaube.&nbsp;\nLisa: Ich habe auch schon Urlaub im Sommer als im Winter gemacht. Aber ich finde einen Skiurlaub gut einen Strandurlaub.\n&nbsp;",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L2_S14_A2_Loesungsaudio1.mp3"
					}
				]
			],
			[
				"Lisa: ist ein Urlaub mit allen Jahreszeiten und Aktivitäten. Ich möchte Ski fahren&nbsp;und am Strand liegen.\nNina: Ja, da komme ich auch mit. Und dann möchte ich auch noch auf ein Festival gehen.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L2_S14_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L2_S15_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L2_S15_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L2_S15_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L2_S15_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L2_S15_A5_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L2_S15_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L2_S15_A6_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L2_S15_A6_Loesungsaudio.mp3"
					}
				]
			]
		]
	},
	{
		title		: "Der Ausflug",
		"avatarURL": "https://static.dw.com/image/37396835_401.jpg",
		hyperText	: [
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L3_S4_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L3_S4_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L3_S4_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L3_S6_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L3_S6_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L3_S7_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L3_S7_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L3_S7_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L3_S7_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L3_S8_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L3_S8_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L3_S10_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L3_S10_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L3_S10_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L3_S10_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L3_S10_A5_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L3_S10_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L3_S10_A6_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L3_S10_A6_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L3_S11_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L3_S11_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L3_S11_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L3_S11_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L3_S11_A6_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L3_S12_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L3_S14_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L3_S14_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L3_S14_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Bist du schon mal in die USA geflogen?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L3_S15_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L3_S15_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Hast du schon mal den Eiffelturm in Paris besichtigt?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L3_S15_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L3_S15_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Hast du schon mal Currywurst gegessen?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L3_S15_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L3_S15_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Bist du schon mal im Meer geschwommen?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L3_S15_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L3_S15_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Hast du schon mal die Pyramiden in Ägypten gesehen?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L3_S15_A5_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L3_S15_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Hast du schon mal einen Fallschirmsprung gemacht?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L3_S15_A6_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L3_S15_A6_Loesungsaudio.mp3"
					}
				]
			]	
		]
	},
	{
		title		: "Wie wird das Wetter?",
		"avatarURL": "https://static.dw.com/image/37396851_401.jpg",
		hyperText	: [
			[
				"Es ist sonnig.\nDie Sonne scheint.\nEs ist heiter.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37785969_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L4_S4_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Es regnet.\nEs ist regnerisch.\nEs gibt Regen.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37785984_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L4_S4_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Es ist windig.\nWind weht.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37785999_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L4_S4_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Es schneit.\nEs gibt Schnee.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37786013_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L4_S4_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L4_S5_A1_Audio1.mp3"
					}
				]
			],
			[
				"Heute gibt es keinen Regen.\nAm Freitag scheint die Sonne.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L4_S5_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L4_S5_A2_Audio1.mp3"
					}
				]
			],
			[
				"Im Süden von Portugal liegen die Temperaturen bei 20 Grad.\nIm Süden gibt es viel Wind und viele Wolken.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L4_S5_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Nawin: Hey, Jean, wie ist das Wetter in Frankreich?\nJean: Hallo, Nawin, es regnet hier in Paris seit drei Tagen. Das ist normal. Im Herbst regnet es hier mehr als im Sommer . Es ist oft bewölkt und windig. Und es ist früh dunkel.\nNawin: Also wie in Deutschland. Okay.\nJean: Wie ist es denn in Thailand? Habt ihr Jahreszeiten?\nNawin: Wir haben drei Jahreszeiten : eine heiße Jahreszeit, die Regenzeit und eine&nbsp; kühle &nbsp;Jahreszeit.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L4_S6_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Nawin: Die Regenzeit ist von Juli bis Oktober. Dann regnet es nachmittags so zwei Stunden, aber dann ist es wieder heiter . Von November bis Februar sind es nur so 25 bis 30 Grad.\nJean: Nur? Das ist doch warm !\nNawin: Das ist die kühle Jahreszeit . „heiß“ sagen wir zu 35 Grad und mehr. Von März bis Juni liegen die Temperaturen bei über 30 Grad .\nJean: Vielleicht gibt es hier im Winter Schnee . Findest du das nicht zu kalt ?\nNawin: Ja, Kälte ist ein Problem, aber Schnee finde ich toll. Hoffentlich schneit es oft diesen Winter.&nbsp;",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L4_S6_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L4_S7_A1_Audio1.mp3"
					}
				]
			],
			[
				"Gibt es in deiner Heimat Jahreszeiten? Welche?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L4_S8_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L4_S8_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Regnet es in deiner Heimat oft? Wann regnet es am meisten?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L4_S8_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L4_S8_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Ist es in deiner Heimat oft sonnig und warm?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L4_S8_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L4_S8_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Schneit es in deiner Heimat?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L4_S8_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L4_S8_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Wie findest du das Wetter in Deutschland?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L4_S8_A5_Audio1.mp3"
					}
				]
			],
			[
				"Ich finde das Wetter in Deutschland zu kalt und zu regnerisch. / Ich finde das Wetter okay.",
				{
					"standoff": "block"
				},				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L4_S8_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Wir sind in den Zoo gegangen.\nWir haben eine Radtour gemacht.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L4_S9_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Wir sind in ein gemütliches Café gegangen.\nWir haben ein Museum besucht.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L4_S9_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Wir sind im Hotel geblieben und haben gewartet.\nWir haben drinnen ein Spiel gespielt.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L4_S9_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L4_S10_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L4_S10_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L4_S10_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L4_S10_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Fußball, Autos, Politik oder Prominente sind interessant und ein gutes Smalltalk- Thema . Auf Platz eins aber steht das . Warum sprechen alle so gerne über , Regen , und Wärme ? Alle müssen mit dem Wetter leben, also interessiert es alle. Alle können etwas zum Thema Wetter sagen. Es ist nämlich immer zu kalt, zu , zu , manchmal auch zu trocken oder zu heiß. Es ist nicht so kompliziert wie Politik. Du bist mit deinem Chef im Aufzug? Das Thema Wetter funktioniert immer.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L4_S12_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L4_S13_A1_Audio1.mp3"
					}
				]
			],
			[
				"Das Wetter ist fast immer gut.\nGestern war das Wetter nicht so gut.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L4_S13_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L4_S13_A2_Audio1.mp3"
					}
				]
			],
			[
				"Sie fotografieren viel.\nSie übernachten im Hotel.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L4_S13_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Bist du letzte Woche ins Kino gegangen?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L4_S15_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L4_S15_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Hast du letzte Woche im Restaurant gegessen?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L4_S15_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L4_S15_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Hast du letzte Woche zu Hause gekocht?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L4_S15_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L4_S15_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Bist du letzte Woche Fahrrad gefahren?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L4_S15_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L4_S15_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Hast du gestern Deutsch gelernt?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L4_S15_A5_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E13_L4_S15_A5_Loesungsaudio.mp3"
					}
				]
			],
		]
	},
	{
		title		: "Das ist jetzt modern",
		"avatarURL": "https://static.dw.com/image/41128772_401.jpg",
		hyperText	: [
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L1_S5_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L1_S5_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L1_S6a_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L1_S6a_A2_Audio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L1_S6a_A3_Audio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L1_S7_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Das ist eine große Hose.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37786981_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L1_S9_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Das sind neue Schuhe.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37786911_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L1_S9_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Das ist ein langer Rock.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37786925_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L1_S9_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Das ist ein dunkler Pullover.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37786939_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L1_S9_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Lieber Nico,\n\nich fliege nächste Woche nach Sevilla. Welche Kleidung soll ich für den Urlaub einpacken ? In Spanien ist es warm, also nehme ich eine kurz Hose und ein weit T-Shirt mit. Brauche ich auch eine lang Hose und einen dick Pullover? Glaubst du, ich brauche eine dick Jacke? Ich habe jetzt eine dünn Regenjacke in den Koffer getan. Und was ist mit Schuhen? Ich habe jetzt schon neu Turnschuhe und alt Sandalen im Koffer. Ist das genug? Vielen Dank für deine Hilfe.&nbsp;\n\nViele Grüße&nbsp;\nThomas",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L1_S8_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L1_S10_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L1_S10_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L1_S10_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L1_S10_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Inge trägt gern große Hüte.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L1_S11_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L1_S11_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Lisa hat gestern einen dunklen Mantel gekauft.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L1_S11_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L1_S11_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Tarek trägt heute eine günstige Jeans.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L1_S11_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L1_S11_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Max hat ein helles T-Shirt.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L1_S11_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L1_S11_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L1_S12_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L1_S12_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L1_S12_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L1_S12_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L1_S12_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L1_S12_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L1_S12_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L1_S12_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L1_S12_A5_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L1_S12_A5_Loesungsaudio.mp3"
					}
				]
			]	
		]
	},
	{
		title		: "Mein Lieblingspulli",
		"avatarURL": "https://static.dw.com/image/37397025_401.jpg",
		hyperText	: [
			[
				"Ich mische Schwarz &nbsp;und Weiß . Meine Lieblingsfarbe ist also Grau .\n\nDu mischst Rot und Weiß . Deine Lieblingsfarbe ist also Rosa .\n\nEr mischt Gelb und Blau . Seine Lieblingsfarbe ist also Grün .\n\nSie mischt Blau und Rot. Ihre Lieblingsfarbe ist also Lila .\n\nWir mischen Gelb und Rot . Unsere Lieblingsfarbe ist also Orange .\n\nIhr mischt Rot und Grün . Eure Lieblingsfarbe ist also Braun .",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L2_S5_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L2_S7_A1_Audio1.mp3"
					}
				]
			],
			[
				"Sebastian findet den schwarzen Pullover schöner.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L2_S7_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L2_S7_A2_Audio1.mp3"
					}
				]
			],
			[
				"Nina mag die gelbe Mütze lieber.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L2_S7_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L2_S8_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L2_S8_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L2_S8_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L2_S8_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Magst du diesen Pullover?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L2_S10_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L2_S10_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Findest du diese Tasche schön?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L2_S10_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L2_S10_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L2_S11_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Dieses T-Shirt ist modern, aber dieser Rock ist altmodisch . Ich finde diesen Rock nicht gut.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L2_S12_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Diese Hose ist alt, aber diese Schuhe sind neu. Ich mag diese Schuhe.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L2_S12_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Diese Mütze ist schön, aber dieses Hemd ist hässlich. Ich finde diese Mütze toll.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L2_S12_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Trägst du gern rote Röcke?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L2_S13_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L2_S13_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Ziehst du gern weiße T-Shirts an?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L2_S13_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L2_S13_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Trägst du gern Hemden?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L2_S13_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L2_S13_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Trägst du gern schwarze Jeans?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L2_S13_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L2_S13_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Nawin: Welchen Pullover findest du schöner? Diesen &nbsp;oder diesen ?\nNina: Ich finde diesen hier schöner. Aber welcher ist wärmer?\nNawin: Beide sind warm. Ich nehme diesen hier.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L2_S15_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Selma: Welche Schuhe trägst du denn gern?\nNico: Ich trage diese Turnschuhe gern. Und welche Schuhe sind deine Lieblingsschuhe?\nSelma: Meine Lieblingsschuhe sind diese hier.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L2_S15_A2_Loesungsaudio.mp3"
					}
				]
			]
		]
	},
	{
		title		: "Das passt gut!",
		"avatarURL": "https://static.dw.com/image/37396890_401.jpg",
		hyperText	: [
			[
				"Nico trägt Größe M.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L3_S2_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Selma: Wie findest du das Hemd?\nNico: Wie viel kostet das?\nSelma: 25 Euro. Ist das okay?\nNico: Ja, das ist okay.\nSelma: Super! Das steht dir gut!\nNico: Ja, das passt auch.\nNico: Wie findest&nbsp;du den Pullover ?\nSelma: Schön. Probier mal das andere Hemd an . Welche Größe ist das?\nNico: Ich weiß nicht.\nSelma: L. Probier mal M an. Das ist zu groß .",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L3_S3_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L3_S16_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Passt dir das Hemd?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L3_S4_A1_Audio1.mp3"
					}
				]
			],
			[
				"Nein, das Hemd passt mir nicht. Das Hemd ist zu klein.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L3_S4_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Steht mir die Hose?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L3_S4_A2_Audio1.mp3"
					}
				]
			],
			[
				"Nein, die Hose steht dir nicht. Die Hose ist altmodisch.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L3_S4_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Steht mir der Mantel?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L3_S4_A3_Audio1.mp3"
					}
				]
			],
			[
				"Nein, die Farbe ist nicht gut. Grau steht dir nicht.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L3_S4_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Passt dir der Pullover?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L3_S4_A4_Audio1.mp3"
					}
				]
			],
			[
				"Nein, der Pullover passt mir nicht. Der Pullover ist zu groß.",
				{
					"standoff": "block"
				},				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L3_S4_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L3_S5_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L3_S5_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Verkäufer: Kann ich Ihnen helfen?\nInge: Ja, ich suche eine kurze Jacke.\nVerkäufer: Welche Größe haben Sie denn?\nInge: Ich habe Größe 40 oder 42.\nVerkäufer: Wir haben hier eine braune Jacke in 40 und eine blaue in 42.\nInge: Die blaue Jacke mag ich nicht. Kann ich die braune Jacke anprobieren ?\nVerkäufer: Gern. Hinten rechts sind die Umkleidekabinen .",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L3_S7_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Guten Tag, kann ich Ihnen helfen?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L3_S8_A1_Audio1.mp3"
					}
				]
			],
			[
				"Ja, bitte. Ich suche eine Hose.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L3_S8_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Welche Größe haben Sie denn?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L3_S8_A2_Audio1.mp3"
					}
				]
			],
			[
				"Größe 34. Haben Sie eine schwarze Hose fürs Büro?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L3_S8_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Nein, leider nicht. Wir haben hier eine elegante Hose in Blau und hier noch eine in Beige.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L3_S8_A3_Audio1.mp3"
					}
				]
			],
			[
				"Kann ich die in Blau anprobieren?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L3_S8_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Ja, natürlich. Hier vorne ist eine Umkleidekabine. Und wie finden Sie die Hose?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L3_S8_A4_Audio1.mp3"
					}
				]
			],
			[
				"Die gefällt mir sehr gut. Sie ist auch sehr bequem. Steht sie mir denn auch?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L3_S8_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Ja, die Hose steht Ihnen sehr gut. Die Farbe passt auch gut zu Ihrem Typ.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L3_S8_A5_Audio1.mp3"
					}
				]
			],
			[
				"Gut, dann nehme ich sie. Wie teuer ist die Hose?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L3_S8_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Die Hose ist im Angebot. Sie kostet jetzt nur noch 39,90 Euro.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L3_S8_A6_Audio1.mp3"
					}
				]
			],
			[
				"Oh, das ist wirklich ein guter Preis.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L3_S8_A6_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Kann ich Ihnen helfen?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L3_S9_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L3_S9_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Fahrradhosen finden Sie im zweiten Stock. Nehmen Sie am besten den Aufzug.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L3_S9_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L3_S9_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Hier sind die Fahrradhosen.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L3_S9_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L3_S9_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Ja, gleich hier. Eine lange Hose in Rot und eine kurze Hose in Rot. Möchten Sie die Hosen anprobieren?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L3_S9_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L3_S9_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Die Umkleidekabinen sind hier rechts. Wie passt die Hose?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L3_S9_A5_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L3_S9_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Die Hose kostet 45,90 Euro.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L3_S9_A6_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L3_S9_A6_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Guten Tag, ich brauche neue Schuhe. Welche Größe haben Sie denn? Ich trage Schuhgröße 42. In Ihrer Größe habe ich ein braunes Paar im Angebot. Kann ich die mal anprobieren? Moment, ich bringe Ihnen die Schuhe. Die passen mir sehr gut. Die nehme ich.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L3_S10_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Verkäufer: Kann ich helfen ?\nKundin: Ich suche eine schwarze Bluse.\nVerkäufer: Eine bestimmte Marke ?\nKundin: Die Marke ist egal . Aber die Bluse soll nicht so teuer sein.\nVerkäufer: Welche Größe brauchen Sie denn?\nKundin: Größe 44.&nbsp;\nVerkäufer: Gut.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L3_S11_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Verkäufer: Wie gefällt Ihnen diese Bluse?\nKundin: Ich finde die Bluse schön. Aber die Farbe gefällt mir nicht. Die Bluse ist dunkelblau und nicht schwarz.\nVerkäufer: Ja, aber sie ist im Angebot.\nKundin: Wie viel kostet sie denn?\nVerkäufer: Sie kostet nur 19,90 Euro.\nKundin: Super. Ich probiere die Bluse mal an .\n…",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L3_S11_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Verkäufer: Passt die Bluse?\nKundin: Nein, die Ärmel sind zu lang .\nVerkäufer: Möchten Sie noch eine weiße Bluse anprobieren?\nKundin: Nein, danke. Ich suche weiter.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L3_S11_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Der Pullover ist zu groß.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37842726_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L3_S13_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Das T-Shirt ist zu eng.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37842714_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L3_S13_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Passt dir der Mantel?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L3_S14_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L3_S14_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Steht mir die Hose?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L3_S14_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L3_S14_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Wie gefällt dir der Schal?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L3_S14_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L3_S14_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Wie findest du den Mantel?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L3_S14_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L3_S14_A4_Loesungsaudio.mp3"
					}
				]
			]	
		]
	},
	{
		title		: "Schick!",
		"avatarURL": "https://static.dw.com/image/37396906_401.jpg",
		hyperText	: [
			[
				"Lisa trägt ein geblümtes Kleid.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37787281_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L4_S3_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Nico und Emma tragen ein kariertes Hemd.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37787267_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L4_S3_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Emma trägt ein gepunktetes Halstuch.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37787253_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L4_S3_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Lisa trägt ein geblümtes Kleid.\n\nLisa trägt eine karierte Bluse.\n\nLisa trägt einen gepunkteten Rock.\n\nLisa trägt gestreifte Socken.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L4_S4_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Nico trägt eine gestreifte Hose.\n\nNico trägt einen karierten Mantel.\n\nNico trägt ein gepunktetes T-Shirt.\n\nNico trägt geblümte Handschuhe.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L4_S4_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Trägt Nico heute einen karierten Mantel?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L4_S5_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L4_S5_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Hat Lisa heute ein geblümtes Kleid an?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L4_S5_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L4_S5_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Trägt Inge heute einen gestreiften Hosenanzug?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L4_S5_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L4_S5_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Hat Emma heute ein gepunktetes Hemd an?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L4_S5_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L4_S5_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Trägt Nico heute einen karierten Mantel?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L4_S5_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L4_S5_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Hat Lisa heute ein geblümtes Kleid an?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L4_S5_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L4_S5_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Trägt Inge heute einen gestreiften Hosenanzug?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L4_S5_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L4_S5_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Hat Emma heute ein gepunktetes Hemd an?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L4_S5_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L4_S5_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L4_S6_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L4_S6_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L4_S6_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L4_S6_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L4_S7_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L4_S7_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L4_S7_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L4_S7_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Maria trägt beruflich viel schwarz.\nJenny trägt in der Freizeit kein Weiß.\nMaria trägt bei der Arbeit Handschuhe und einen Hut.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L4_S9_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L4_S10_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L4_S10_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L4_S10_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L4_S10_A4_Loesungsaudio.mp3"
					}
				]
			],
				
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L4_S11_A1_Audio1.mp3"
					}
				]
			],
			[
				"Bei der Arbeit trägt sie gern Kleider.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L4_S11_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L4_S11_A2_Audio1.mp3"
					}
				]
			],
			[
				"In der Freizeit zieht er gern schicke Kleidung an.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L4_S11_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Was trägst du in deiner Freizeit lieber? Bunte T-Shirts oder weiße Hemden?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L4_S12_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L4_S12_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Trägst du in deiner Freizeit oft graue Anzüge?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L4_S12_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L4_S12_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Trägst du im Büro manchmal alte Jeans und T-Shirts?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L4_S12_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L4_S12_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Im Büro tragen viele Menschen&nbsp; formelle&nbsp; Kleidung. Männer tragen schicke Schuhe , ein Hemd in Blau oder Weiß und eine gute Hose. Bei großen&nbsp; Unternehmen&nbsp; gehört elegante Kleidung zum Alltag. Dann tragen Männer immer einen&nbsp; Anzug&nbsp; mit Krawatte .",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L4_S13_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Frauen können ein schickes&nbsp; Kostüm oder einen eleganten Hosenanzug wählen. Meist ziehen sie dazu hohe Schuhe an. Aber auch eine Bluse und eine Hose oder einen Rock tragen Frauen gern bei der Arbeit . Im Büro sieht man selten grelle Farben . Die Kleidung ist insgesamt eher schlicht und dunkel: Blau, Grau und Schwarz kombiniert mit Weiß oder Hellblau.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E14_L4_S13_A2_Loesungsaudio.mp3"
					}
				]
			]
		]
	},
	{
		title		: "Meine Familie",
		"avatarURL": "https://static.dw.com/image/37396935_401.jpg",
		hyperText	: [
			[
				"Selma lebt seit fast zwölf Monaten in Deutschland.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L1_S2_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Selmas Eltern leben in Deutschland.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L1_S2_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Sie wohnen in Hamburg.",
				{
					"standoff": "block"
				},				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L1_S2_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L1_S3_Audio1.mp3"
					}
				]
			],
			[
				"Das bin ich und das sind meine Eltern : Mein Vater &nbsp;heißt Ibrahim und meine Mutter Aya.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/38110062_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L1_S3_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Ich habe zwei Geschwister : Das sind meine beiden älteren &nbsp; Brüder , Safi und Khalil. Mein Bruder Khalil ist ledig , er hat noch keine Frau und auch keine Kinder . Safi ist verheiratet .",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/38110062_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L1_S3_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Die Frau von meinem Bruder &nbsp;Safi heißt Djamila. Safi und Djamila haben zwei Kinder , einen Jungen und ein Mädchen . Ali ist ihr Sohn , also mein Neffe . Und das ist ihre Tochter , meine kleine Nichte Rabia.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/38110085_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L1_S3_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Das hier sind meine Großeltern , die Eltern &nbsp;meiner Mutter : Mein Großvater Abdulrahman und meine Großmutter Laila. Sie leben noch in Syrien. Und das hier sind die Eltern meines Vaters : Links Opa Salim und rechts Oma Fatima . Leider leben sie nicht mehr, sie sind schon lange tot .",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/38110113_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L1_S3_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Mein Vater hat noch eine Schwester , meine Tante Asma. Der Mann neben Asma ist ihr Ehemann Sufyan, mein Onkel . Die beiden haben drei Kinder : Meine Cousine Zahra und meine Cousine Nour. Ihr Bruder Bassam ist mein Cousin .",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/38110099_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L1_S3_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Die Mutter und der Vater von Selma sind die Eltern von Selma.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L1_S5_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Selma hat zwei Brüder: Khalil und Safi. Sie sind die Geschwister von Selma.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L1_S5_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Die Großmutter und der Großvater von Selma sind die Großeltern von Selma.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L1_S5_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Die Schwester von Selmas Vater ist Selmas Tante.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L1_S5_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Der Mann von Selmas Tante ist Selmas Onkel.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L1_S5_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L1_S6_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L1_S6_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L1_S6_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L1_S6_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L1_S6_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L1_S6_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L1_S6_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L1_S6_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L1_S6_A5_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L1_S6_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L1_S6_A6_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L1_S6_A6_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L1_S6_A7_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L1_S6_A7_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Wie viele Geschwister haben Sie?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L1_S7_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L1_S7_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Sind Sie verheiratet?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L1_S7_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L1_S7_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Haben Sie Kinder?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L1_S7_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L1_S7_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Sind Ihre Kinder verheiratet?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L1_S7_A5_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L1_S7_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Haben Sie Enkelkinder?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L1_S7_A6_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L1_S7_A6_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Liegt es auf dem Stuhl?",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37840306_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L1_S8_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Liegt es hinter dem Bett?",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37840473_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L1_S8_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Ist es in der Hosentasche?",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37840453_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L1_S8_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Liegt es zwischen den Büchern?",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37840400_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L1_S8_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Liegt es auf dem Regal?",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37840384_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L1_S8_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Ah, es ist in der Jacke!",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37840346_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L1_S8_A6_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Der Pulli ist grün: der grüne Pulli Die Hose ist blau: die blaue Hose Das Portemonnaie ist braun: das braune Portemonnaie Die Schuhe sind schwarz: die schwarzen Schuhe",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L1_S9_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Der weiße Pullover\nDer Pullover ist weiß . Nico mag den weißen Pullover.\n\n&nbsp;\n\nDie blaue Jacke\nDie Jacke ist blau . Nico mag die blaue Jacke.\n\n&nbsp;\n\nDas braune T-Shirt\nDas T-Shirt ist braun . Nico mag das braune T-Shirt.\n\n&nbsp;\n\nDie karierten Hemden\nDie Hemden sind kariert . Nico mag die karierten Hemden.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L1_S12_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L1_S11_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L1_S11_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L1_S11_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L1_S11_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L1_S11_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L1_S11_A6_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Nico mag den weißen Pullover.\n\nNico mag die blaue Jacke.\n\nNico mag das braune T-Shirt.\n\nNico mag die karierten Hemden.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L1_S13_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L1_S14_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L1_S14_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L1_S14_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L1_S14_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L1_S14_A5_Loesungsaudio.mp3"
					}
				]
			]
		]
	},
	{
		title		: "Meine Eltern",
		"avatarURL": "https://static.dw.com/image/39344868_401.jpg",
		hyperText	: [
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L2_S3_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L2_S3_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L2_S3_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L2_S3_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L2_S3_A5_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L2_S4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L2_S6_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L2_S6_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L2_S6_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L2_S6_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L2_S6_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L2_S6_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L2_S6_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L2_S6_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L2_S6_A5_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L2_S6_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L2_S6_A6_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L2_S6_A6_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Hey Nico,\nich habe mit meinem Vater&nbsp;gesprochen. Er sagt, du willst deine Eltern nicht anrufen. Warum?\nLisa\n\nHallo Lisa,\nich soll meine Eltern anrufen? Ich möchte sie nicht anrufen!!! Mein Vater und meine Mutter , sie sagen immer, ich muss studieren. Aber ich möchte nicht das Leben von meinen Eltern haben. Mein Vater arbeitet und arbeitet. Ich habe ihn fast nie gesehen. Er hat mich immer nur gefragt: „Wie ist das Studium ? Bist du gut?“ Meine Eltern verstehen mich nicht. &nbsp;\nNico",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L2_S7_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Hey Nico,\nich verstehe dich gut. Mein Vater ist cool. Aber er denkt auch,&nbsp;ich bin noch ein Kind. Na ja, ich bin auch heute noch seine Tochter .&nbsp;Aber jetzt ist es besser. Er hat ein neues „Kind“. Du kennst es! Emma!!! Mein Vater ist jetzt ein Großvater .\nVielleicht haben deine Eltern Informationen über deine Tante ? Ruf sie an!!!\nLisa\n\nHey Lisa,\nYara! Ich muss sie alleine finden. Und was machst du, Lisa? Hast du morgen Zeit? Wann kann ich dich wieder treffen?\nNico",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L2_S7_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Hey Nico,\nmorgen kommen Freunde in die WG. Wir kochen zusammen. Kommst du auch?\nLisa\nPS: Sind dein Vater und Yara eigentlich Geschwister ?\n\nHey Lisa,\nich komme gerne. Meine Mutter und Yara sind Geschwister. Yara ist die kleine Schwester . Und meine Mutter ist die große Schwester.\nBis morgen\nNico",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L2_S7_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Nico sieht Emma. Emma fragt: „Rufst du mich heute an?“\nNico sagt zu Emma: „Ich rufe dich heute an.“",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L2_S9_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Nico ruft Max an. Nico ruft ihn an.\nNico ruft Emma an. Nico ruft sie an.\nNico ruft das Kind an. Nico ruft es an.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L2_S9_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Nico ruft Emma und Lisa an. Nico ruft sie an.\nNico sagt: „Frau Reimann, ich rufe Sie morgen an.“",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L2_S9_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Nico sieht Emma. Nico sieht sie.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L2_S10_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Nico sieht Emma und Lisa. Nico sieht sie.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L2_S10_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Hinter Nico ist ein Mann. Nico sieht ihn nicht.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L2_S10_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Nico sieht das Taxi. Nico sieht es.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L2_S10_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Hallo Mark,\nkommst du oft in den Fahrradladen? Du hast recht: Ich kenne dich nicht. Hast du schon mal hier ein Fahrrad gekauft? Komm doch morgen in den Fahrradladen. Dann sehe ich dich und wir können uns kennenlernen. Du kannst mich immer von 9 bis 18 Uhr hier finden.\n\nViele Grüße\nYara\n\nPS: Du kannst mich auch im Fahrradladen anrufen.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L2_S12_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L2_S14_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L2_S14_A2_Audio1.mp3"
					}
				]
			],
			[
				"Wir haben sie oft besucht. Sie hatten immer Schokolade für uns. Wir hatten zusammen immer viel Spaß. Heute sind sie alt . Sie rufen uns oft an. Dann fragen sie: „Wann besucht ihr uns	wieder? Wir möchten euch treffen. Wir haben immer noch Schokolade für euch.“",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L2_S14_A3_Audio1.mp3"
					}
				]
			],
			[
				"Emma sagt: „Nico mag Lisa und mich. Nico mag uns .“ &nbsp;\nNico sagt zu Emma und Lisa: „Emma und Lisa, ich mag euch .“",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L2_S17_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Ist das T-Shirt für deinen Neffen?",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L2_S19_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L2_S19_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Ist der Schal für deine Mutter?",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L2_S19_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L2_S19_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Sind die Handschuhe und die Mütze für deine Nichte und deinen Bruder?",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L2_S19_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L2_S19_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Selma, ist die Jeans für mich?",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L2_S19_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L2_S19_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Selma, ist das Buch für uns?",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L2_S19_A5_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L2_S19_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Selma, ist die Bluse für dich?",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L2_S19_A6_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L2_S19_A6_Loesungsaudio.mp3"
					}
				]
			]	
		]
	},
	{
		title		: "Meine Tante",
		"avatarURL": "https://static.dw.com/image/37396979_401.jpg",
		hyperText	: [
			[
				"Meine liebe Enkelin,\ndu warst das schönste Mädchen in Sevilla. Aber nun lebst du in Deutschland. Und was machst du da? Eine Ausbildung zur Fahrradmechatronikerin! Deine zarten Hände sind nun schmutzig &nbsp;. Für meine Generation ist das undenkbar . Warum hast du nicht geheiratet , meine liebe Yara?! Ich mache mir Sorgen um dich. Aber ich liebe dich. Ich hoffe, dass du irgendwann heiratest. Ich träume von deiner Hochzeit . Denkst du vielleicht manchmal an deinen alten Opa und&nbsp; deine Heimat?\nDein Opa Pepe",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L3_S7_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Yara ist ihre eigene Chefin.\nYara liest in der Pause ihre E-Mails.\nAm Samstag räumt sie ihr Fahrradgeschäft auf.\n\nMax: Tarek, wo stehen Yaras Fahrräder?\nTarek: Ich weiß es nicht. Yara, wo stehen deine Fahrräder?\nYara: Meine Fahrräder stehen im Geschäft.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L3_S8_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Max und Tarek haben ein Restaurant. Ihr Restaurant heißt „Das Marek“.\nMax und Tarek sind ihre eigenen Chefs.\nMax mag seine Arbeitszeiten .\n\nLisa: Max, Tarek, seit wann habt ihr euer Restaurant?\nTarek: Wir haben unser Restaurant seit ein paar Jahren.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L3_S8_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Immer mehr Frauen arbeiten in Männerberufen.\nIn der Bäcker-Ausbildung gibt es immer mehr Frauen.\nEs gibt mehr Friseurinnen als Friseure.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L3_S10_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Yara hat einen typischen Männerberuf.\nYara ist Fahrradmechatronikerin.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L3_S10_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Tarek hat heute ein Restaurant.\nTarek hat eine Ausbildung zum Elektriker gemacht.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L3_S10_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Er hat eine Ausbildung bei der Bank gemacht. Das ist der Bankkaufmann .\n\nSie fliegt ein Flugzeug.\nDas ist die Pilotin .\n\nEr hilft kranken Menschen .\nDas ist der Arzt .\n\nEr repariert Autos.\nDas ist der KFZ-Mechatroniker .\n\nSie macht Essen.\nDas ist die Köchin .\n\nSie macht Brot.\nDas ist die Bäckerin .\n\nEr verkauft Fahrräder.\nDas ist der Fahrradhändler .\n\nSie macht schöne Frisuren.\nDas ist die Friseurin .",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L3_S11_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Er verkauft Fahrräder.",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L3_S12_A5_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L3_S12_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Sie hilft kranken Menschen.",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L3_S12_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L3_S12_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Er fliegt ein Flugzeug.",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L3_S12_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L3_S12_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Er arbeitet in der Bank.",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L3_S12_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L3_S12_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Sie macht Essen.",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L3_S12_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L3_S12_A4_Loesungsaudio.mp3"
					}
				]
			]
		]
	},
	{
		title		: "Mein Bruder",
		"avatarURL": "https://static.dw.com/image/37397041_401.jpg",
		hyperText	: [
			[
				"Das Mädchen hat eine Schwester.\nDas Mädchen ist kein Einzelkind.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37840663_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L4_S4_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Der Junge hat zwei Schwestern.\nDer Junge hat Geschwister.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37840647_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L4_S4_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Der Junge hat einen jüngeren Bruder.\nDer Junge hat keine Schwestern.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37840595_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L4_S4_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Das Baby hat keinen Bruder und keine Schwester.\nEs ist ein Einzelkind.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37840609_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L4_S4_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Das Mädchen hat eine Schwester.\nDas Mädchen hat eine Zwillingsschwester.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37840624_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L4_S4_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Du sprichst zu viel.\nDu nervst mich!",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L4_S5_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Du hast für 50 Euro Schokolade gekauft?\nDu spinnst!",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L4_S5_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Siehst du dir schon wieder diesen Film an?\nDu langweilst mich!",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L4_S5_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Du hast mir sehr geholfen.\nIch mag dich.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L4_S5_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Ich brauche einen Tipp. Wir können immer sprechen.\nDu verstehst mich.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L4_S5_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L4_S6_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L4_S6_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L4_S6_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L4_S6_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L4_S7_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L4_S9_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L4_S9_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L4_S9_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L4_S9_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L4_S9_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L4_S9_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L4_S9_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L4_S9_A4_Audio1.mp3"
					}
				]
			],
			[
				"Dein Freund macht morgen eine Party. Du fragst deinen Freund: „Wann soll ich morgen kommen?“\nDu ziehst in eine neue Wohnung um. Du fragst: „Wann muss ich die Miete bezahlen?“\n\n&nbsp;\n\nDer Arzt sagt zu dir: „Sie müssen mehr Sport machen. Nur dann werden Sie nicht krank.“\nDu erzählst deiner Frau: „Der Arzt hat gesagt, wir sollen Sport machen. Das ist gesund.“",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L4_S13a_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E15_L4_S14_A1_Loesungsaudio.mp3"
					}
				]
			]	
		]
	},
	{
		title		: "Von Kopf bis Fuß",
		"avatarURL": "https://static.dw.com/image/37397057_401.jpg",
		hyperText	: [
			[
				"Sie nehmen Fußbälle mit.\nSie nehmen eine Ballpumpe mit.\nSie nehmen Würste zum Grillen mit.\nSie nehmen Getränke mit.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L1_S2_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Max: Toll! Waren die Fußbälle teuer ?\nTarek: Nein, die waren super billig . Ein Fußball hat 4,99 Euro gekostet&nbsp;– weniger als die Getränke.\nMax: Tja, Verpflegung ist immer am teuersten .",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L1_S5_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Die&nbsp; Fußbälle kosten 4,99 Euro. Sie sind billig. Die Basketbälle kosten 4,49 Euro. Sie sind billiger . Die Tennisbälle kosten 3,99 Euro. Sie sind am billigsten .\n\nEin Tischtennisschläger kostet 6,99 Euro. Er ist nicht teuer. Ein Tennisschläger kostet 69 Euro. Er ist teurer . Ein Golfschläger kostet 569 Euro. Er ist am teuersten .",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L1_S6_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L1_S7_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L1_S7_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L1_S7_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L1_S7_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L1_S7_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L1_S7_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L1_S7_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L1_S7_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L1_S7_A5_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L1_S7_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L1_S7_A6_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L1_S7_A6_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L1_S8_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L1_S8_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L1_S8_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L1_S8_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L1_S8_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L1_S8_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L1_S8_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L1_S8_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Die Person spielt den Ball mit dem Fuß.",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L1_S10_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Die Person spielt den Ball mit dem Knie.",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L1_S10_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Die Person spielt den Ball mit der Hand.",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L1_S10_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Die Person spielt den Ball mit dem Kopf.",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L1_S10_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Tom ist sehr groß . Er hat braune Haare und grüne Augen. Er hat sehr starke Arme und Beine und eine breite Brust . Er macht viel Bodybuilding.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L1_S11_A1_Loesungsaudio.mp3"
					}
				]
			]	
		]
	},
	{
		title		: "Bist du fit?",
		"avatarURL": "https://static.dw.com/image/48250827_401.jpg",
		hyperText	: [
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L2_S4_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L2_S4_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L2_S4_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L2_S4_A4_Loesungsaudio.mp3"
					}
				]
			],
				
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L2_S5_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L2_S5_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L2_S5_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L2_S6_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L2_S6_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L2_S6_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L2_S6_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L2_S6_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L2_S6_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L2_S6_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L2_S6_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L2_S6_A5_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L2_S6_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Liebe Fußball-Freunde,\n\nich habe einen neuen Trainingsplan für uns gemacht. In den letzten Wochen waren wir zu faul . Wir müssen mehr trainieren und alle müssen mitmachen . Nächste Woche spielen wir gegen den Verein „Ballsport Neustadt“. Da wollen wir alle gewinnen , oder?\nWir müssen darum fit sein. Am besten, ihr trainiert jeden Tag und joggt oder fahrt Fahrrad. Das ist anstrengend, aber nach dem Spiel können wir entspannen.&nbsp;\n\nViele Grüße\nMax\n&nbsp;",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L2_S7_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Tarek: Max sagt immer: Ihr seid alle faul und . Er sagt, wir müssen mehr trainieren. Aber wir sind gar nicht so schlecht. Letzten Monat haben wir sogar gewonnen. Das andere hat nicht fair gespielt. Sie haben viele Fouls gemacht und zwei rote Karten bekommen. Das war super für uns. Wir konnten ganz spielen. Ich habe zwei Tore geschossen und Yanis hat drei Tore . Wir haben 5 zu 0 . Wir sind also richtig gut.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L2_S9_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L2_S10_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L2_S10_Audio2.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L2_S10_Audio3.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L2_S10_Audio4.mp3"
					}
				]
			],
			[
				"Machst du regelmäßig Sport, manchmal Sport oder nie Sport?",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L2_S11_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L2_S11_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Wie oft machst du normalerweise Sport?",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L2_S11_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L2_S11_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Machst du lieber allein oder mit Freunden Sport?",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L2_S11_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L2_S11_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Wann machst du normalerweise Sport? Am Wochenende, morgens, abends?",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L2_S11_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L2_S11_A4_Loesungsaudio.mp3"
					}
				]
			]	
		]
	},
	{
		title		: "Fitness",
		"avatarURL": "https://static.dw.com/image/37397073_401.jpg",
		hyperText	: [
			[
				"Max möchte weitertrainieren.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L3_S2_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Tarek möchte sich ausruhen.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L3_S2_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Zuerst laufen sie. Emma läuft schnell, aber Charlotte läuft schneller . Emma verliert. Tina läuft am schnellsten . Sie gewinnt.\nDann springen sie. Tina kann weit springen, aber Emma springt weiter . Charlotte springt am weitesten . Charlotte kann aber nicht sehr hoch springen. Tina springt höher . Emma springt&nbsp; am höchsten . Sie gewinnt.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L3_S4_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L3_S5_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L3_S5_A2_Audio1.mp3"
					}
				]
			],
			[
				"Lisa spricht gut Englisch. Nina spricht Englisch als Lisa. Aber Max spricht Englisch.",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L3_S6_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Die Zugspitze ist hoch. Der Fuji ist als die Zugspitze. Der Mount Everest ist .",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L3_S6_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Der Rhein ist ein langer Fluss . Der Mekong ist als der Rhein. Der Nil ist .",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L3_S6_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Berlin ist groß. In Berlin leben 3,5 Millionen Menschen. New York ist als Berlin. In New York leben 8,5&nbsp;Millionen Menschen. In Tokio leben 9,5&nbsp;Millionen Menschen. Tokio ist .",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L3_S6_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Welche Sprache findest du schwerer? Deutsch oder Englisch?",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L3_S7_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L3_S7_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Was isst du lieber? Pizza oder Hamburger?",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L3_S7_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L3_S7_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Ich trinke am liebsten Tee. Und du?",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L3_S7_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L3_S7_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"In Berlin wohnen 3,5 Millionen Menschen, in Hamburg wohnen 1,8 Millionen Menschen, in München wohnen 1,5 Millionen Menschen. Welche deutsche Stadt ist am größten?",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L3_S7_A6_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L3_S7_A6_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Iss viel Obst.\nTrink regelmäßig Alkohol.\nTrink keinen Alkohol.\nTrink viel Wasser.\nRauch nicht.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L3_S8_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Gesundheitstipps für den Alltag\nTipps zur Ernährung",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L3_S9_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Viel bewegen!\nObst und Gemüse essen!\nAusruhen!",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L3_S9_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L3_S10_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L3_S10_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L3_S10_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L3_S10_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L3_S10_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L3_S10_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L3_S11_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L3_S11_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L3_S11_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L3_S11_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Ich habe oft Schmerzen im Rücken.",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L3_S12_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L3_S12_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Ich möchte fitter werden, aber ich habe keine Zeit für Sport.",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L3_S12_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L3_S12_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Ich möchte gesünder leben.",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L3_S12_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L3_S12_A3_Loesungsaudio.mp3"
					}
				]
			]
		]
	},
	{
		title		: "Ist das gesund?",
		"avatarURL": "https://static.dw.com/image/37397089_401.jpg",
		hyperText	: [
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://dwhlsondemand-vh.akamaihd.net/i/dwtv_video/flv/nicosweg/A1_E16_L4_F68_sd_,sor,avc,.mp4.csmil/master.m3u8"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L4_S3_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L4_S3_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Das Wichtigste ist die Ernährung.\nIss viel Obst !\nTrink keinen Alkohol und rauch nicht!\nTrink viel Wasser und iss keine Süßigkeiten !",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L4_S3_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Rauch nicht!",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L4_S5_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Trinkt viel Wasser!",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L4_S5_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Esst viel Obst!",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L4_S5_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Fahr mit dem Fahrrad, nicht mit dem Auto!",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L4_S5_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Gib mir endlich den Kartoffelsalat!",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L4_S5_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L4_S6_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L4_S6_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L4_S6_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L4_S6_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Ich möchte fitter werden, aber ich habe keine Zeit für Sport.",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L4_S7_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L4_S7_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Ich habe oft Schmerzen im Rücken. ",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L4_S7_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L4_S7_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Ich habe ein Problem. Ich bin oft krank.",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L4_S9_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L4_S9_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Ich habe ein Problem. Ich bin immer müde.",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L4_S9_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L4_S9_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Ich habe ein Problem. Ich bin zu dick.",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L4_S9_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L4_S9_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L4_S8_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L4_S8_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L4_S8_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L4_S8_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L4_S8_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L4_S11_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L4_S11_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L4_S11_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L4_S11_A4_Loesungaudio.mp3"
					}
				]
			],
			[
				"Du möchtest abnehmen ? Dann musst du dich gesund ernähren. Iss viel Obst wie Ananas, Äpfel und Kirschen und Gemüse wie Karotten, Tomaten und Brokkoli. Trink viel Wasser, aber keine süßen Getränke. Vorsicht mit Fett ! Iss kein fettes Fleisch oder Mayonnaise und nur wenig Butter.\n\nAber nicht nur die Ernährung ist wichtig, du musst dich auch bewegen . Geh regelmäßig joggen oder ins Fitnessstudio. Abnehmen kann auch Spaß machen. Triff dich mit deinen Freunden zum Fußballspielen oder zum Schwimmen.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L4_S12_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L4_S13_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L4_S13_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L4_S13_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L4_S13_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L4_S13_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L4_S13_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L4_S13_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L4_S13_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L4_S13_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L4_S13_A5_Audo1.mp3"
					}
				]
			],
			[
				"",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L4_S13_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Alle spielen Fußball.\nAlle bewegen sich viel.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L4_S14_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Yanis isst Süßigkeiten.\nNach dem Sport gibt es Würste und Kartoffelsalat.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E16_L4_S14_A2_Loesungsaudio.mp3"
					}
				]
			]
		]
	},
	{
		title		: "Geht es dir gut?",
		"avatarURL": "https://static.dw.com/image/37397126_401.jpg",
		hyperText	: [
			[
				"Yanis: Autsch! … Aua …\nMax: Was ist denn passiert?&nbsp;\nYanis: Ich bin gestürzt . Meine Hand tut weh .&nbsp;\nMax: Die rechte oder die linke Hand (1)?&nbsp;\nYanis: Die rechte.&nbsp;\nMax: Und deine Finger (2)? Zeig mal . Hmm, zwei sind geschwollen . Aber der Daumen sieht okay aus. &nbsp;",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L1_S5_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Yanis: Autsch! … Aua …\nMax: Was ist denn los?&nbsp;\nYanis: Ich habe Schmerzen. Mein Bein (1) tut weh.\nMax: Wo tut es denn genau weh?&nbsp;\nYanis: Ich habe Schmerzen am Knie (2).\n&nbsp;",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L1_S5_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Yanis: Meine Nase (1)!&nbsp;\nMax: Schon wieder ?&nbsp;\nYanis: Meine Nase (1) tut so weh. Ich glaube, sie blutet .&nbsp;\nMax: Zeig mal. Tun deine Augen (2) auch weh? Dein linkes Auge (2) sieht nicht gut aus. Es ist ganz rot. Ich glaube, du musst zum Arzt.&nbsp;",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L1_S5_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Max: Kannst du nicht mehr?\nYanis: Ich habe schlimme&nbsp;Schmerzen am Rücken (1).\nMax: Kannst du sitzen?&nbsp;\nYanis: Ja, mein Po ist in Ordnung . Es sind die Schultern (2). Die rechte tut sehr weh. Und die linke Schulter auch.&nbsp;\nMax: Kannst du die Arme (3) bewegen?\nYanis: Ja, das geht.&nbsp;",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L1_S5_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L1_S6_A1_Audio.mp3"
					}
				]
			],
			[
				"Nein, ich habe Schmerzen. Mein Kopf tut weh. ",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L1_S6_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L1_S6_A3_Audio.mp3"
					}
				]
			],
			[
				"Nein, ich habe Schmerzen. Meine Brust tut weh.",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L1_S6_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L1_S6_A4_Audio.mp3"
					}
				]
			],
			[
				"Nein, ich habe Schmerzen. Meine Beine tun weh.",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L1_S6_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L1_S6_A6_Audio.mp3"
					}
				]
			],
			[
				"Nein, ich habe Schmerzen. Mein linker Arm tut weh. ",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L1_S6_A6_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L1_S7_Audio.mp3"
					}
				]
			],
			[
				"Geht es dir nicht gut?\nAlles okay?\nWas ist denn passiert?\nWas ist denn los?",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L1_S7_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L1_S9_Audio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L1_S9_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Nico hat Schmerzen am Fuß. Der Fuß ist ganz dick . Er braucht ein Kühlkissen .\n\nMax hat eine kleine Wunde am Finger. Sie&nbsp; blutet . Er braucht ein Pflaster .\n\nYanis hat eine große Verletzung am Knie. Sein Knie blutet stark . Ein Pflaster ist zu klein. Er braucht einen Verband . Daniel hat plötzlich starke Bauchschmerzen&nbsp;und kann nicht mehr Fußball spielen. Er braucht eine Schmerztablette .&nbsp;",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L1_S10_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Emma hat zu viel Eis gegessen. Jetzt hat sie Bauchschmerzen .\n\nNico war viel draußen,&nbsp;aber war nicht so warm angezogen.&nbsp;Jetzt tut sein Kopf weh. Er hat auch Halsschmerzen , Husten und Schnupfen . Am Abend bekommt er dann Fieber .&nbsp;\n\nYanis hat eine Verletzung am Kopf. Seine Stirn blutet und er hat Kopfschmerzen . Beim Arzt bekommt er eine Schmerztablette und einen Verband .",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L1_S12_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Viele Leute haben eine Erkältung.\nViele Leute haben Hals- und Kopfschmerzen.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L1_S14_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Man soll Sport machen.\nMan soll abwechselnd heiß und kalt duschen.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L1_S14_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Man soll viel Wasser, Orangensaft und Tee trinken.\nMan soll viel Obst und Gemüse essen.\nMan soll zweimal pro Woche Fisch essen.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L1_S14_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L1_S15_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Lisa: Ich bin erkältet. Was kann ich machen?",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L1_S16_A1_Audio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L1_S16_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				" Lisa: Hast du noch mehr Tipps für mich?",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L1_S16_A2_Audio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L1_S16_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Yanis: Ich habe Fieber. Was kann ich machen?",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L1_S16_A4_Audio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L1_S16_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Herr Stöpsel: Mein Knie tut weh. Haben Sie einen Tipp für mich?",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L1_S16_A5_Audio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L1_S16_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Herr Stöpsel: Was kann ich noch machen?",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L1_S16_A6_Audio.mp3"
					}
				]
			],
			[
				"",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L1_S16_A6_Loesungsaudio.mp3"
					}
				]
			]
		]
	},
	{
		title		: "Beim Arzt",
		"avatarURL": "https://static.dw.com/image/37397209_401.jpg",
		hyperText	: [
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L2_S2_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L2_S2_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L2_S2_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L2_S2_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L2_S3_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L2_S3_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L2_S3_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L2_S3_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L2_S3_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L2_S3_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L2_S3_A5_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L2_S3_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L2_S3_A6_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L2_S3_A6_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Für viele Medikamente braucht man ein Rezept.\nKrankenversicherungen gibt es schon lange in Deutschland.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L2_S5_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Sprechstundenhilfe : Arztpraxis Dr. Grube, guten Tag.\nMax: Guten Tag, hier ist Max Stöpel. Mein&nbsp;Freund hatte einen kleinen Unfall auf dem Fußballplatz. Sein Fuß ist dick und tut sehr weh. Können wir sofort kommen?\nSprechstundenhilfe: Wann können Sie denn hier sein?\nMax: In etwa 15 Minuten.\nSprechstundenhilfe: Gut. Dann bis gleich .&nbsp;\nMax: Vielen Dank. Auf Wiederhören.&nbsp;",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L2_S6_A1_Audio1.mp3"
					}
				]
			],
			[
				"Sprechstundenhilfe: Praxis Dr. Werner und Dr. Fries, guten Tag.\nMann: Guten Tag, hier&nbsp;ist Thomas Baier. Mein Sohn hat Bauchschmerzen. Die Schmerzen sind sehr schlimm und er trinkt nichts mehr. Wir haben keinen Termin. Aber können wir trotzdem vorbeikommen ?\nSprechstundenhilfe: Kommen Sie bitte um 11:30 Uhr. Aber Sie müssen etwas warten. Unsere Praxis ist heute sehr voll.&nbsp;\nMann: Das ist kein Problem.\nSprechstundenhilfe: Gut. Dann kommen Sie bitte um 11:30 Uhr.&nbsp;\nMann: Vielen Dank. Auf Wiederhören.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L2_S6_A2_Audio1.mp3"
					}
				]
			],
			[
				"Sprechstundenhilfe: Praxis Dr. Grube, guten Tag?\nMann: Guten Tag, hier ist Helbig. Ich habe am 10. Oktober einen Termin um 15 Uhr. Aber mein Rücken tut heute sehr weh. Ich kann gar nicht laufen. Kann ich heute schon kommen?\nSprechstundenhilfe: Heute hat Dr. Grube keine Sprechstunde . Haben Sie morgen Vormittag um 11 Uhr Zeit?&nbsp;\nMann: Ja, das geht. Vielen Dank.\nSprechstundenhilfe: Auf Wiederhören.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L2_S6_A3_Audio1.mp3"
					}
				]
			],
			[
				"Praxis Dr. Kerz, guten Tag?",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L2_S7_A1_Audio1.mp3"
					}
				]
			],
			[
				"Mein Name ist Nina Jacobi.",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L2_S7_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Ja, Frau Jacobi?",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L2_S7_A2_Audio1.mp3"
					}
				]
			],
			[
				"Ich habe starke Bauchschmerzen. Kann ich heute noch vorbeikommen?",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L2_S7_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Können Sie um 11 vorbeikommen?",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L2_S7_A3_Audio1.mp3"
					}
				]
			],
			[
				"Ja, das geht. Vielen Dank.",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L2_S7_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Sie müssen aber etwas warten. Die Praxis ist sehr voll.",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L2_S7_A4_Audio1.mp3"
					}
				]
			],
			[
				"Das ist kein Problem.",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L2_S7_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Gut, Frau Jacobi. Bitte bringen Sie Ihre Versichertenkarte mit. ",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L2_S7_A5_Audio1.mp3"
					}
				]
			],
			[
				"Gut. Auf Wiederhören.",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L2_S7_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Sie dürfen nicht essen.\nSie dürfen etwas trinken.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L2_S9_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Sie dürfen Tee trinken.\nSie dürfen keinen Alkohol trinken.\nSie dürfen nicht nach draußen gehen.\nSie dürfen duschen.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L2_S9_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Sie dürfen keinen Sport machen.\nSie dürfen arbeiten.\nSie dürfen schwimmen.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L2_S9_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"„Du musst zum Arzt gehen.“",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L2_S10_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"„Sie müssen im Bett bleiben.“",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L2_S10_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"„Sie dürfen nicht schwimmen.“",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L2_S10_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"„Du musst heute nicht putzen. Ich putze für dich.“",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L2_S10_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"„Du darfst nicht Gitarre spielen. Die Nachbarn schlafen.“ ",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L2_S10_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L2_S12_Audio.mp3"
					}
				]
			],
			[
				"Sebastian muss oft zum Zahnarzt gehen.\nBeim Zahnarzt muss Sebastian lange warten.\nSebastian darf nicht sofort ins Behandlungszimmer gehen.\nSebastian war beim Zahnarzt. Danach darf er nichts essen.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L2_S12_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37804000_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L2_S13_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37804060_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L2_S13_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37804106_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L2_S13_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37804030_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L2_S13_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37804046_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L2_S13_A5_Loesungsaudio.mp3"
					}
				]
			]
		]
	},
	{
		title		: "Gute Besserung!",
		"avatarURL": "https://static.dw.com/image/37397248_401.jpg",
		hyperText	: [
			[
				"Lisa spricht mit der Sprechstundenhilfe. Sie sucht Nico.",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L3_S2_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Lisa ist im falschen Behandlungsraum.",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L3_S2_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Lisa findet Nico in einem anderen Behandlungsraum.",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L3_S2_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L3_S4_Audio.mp3"
					}
				]
			],
			[
				"Sebastian muss mit dem Aufzug fahren.\nEs ist das dritte Zimmer auf der linken Seite.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L3_S4_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L3_S5_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L3_S5_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L3_S5_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L3_S5_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L3_S5_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L3_S5_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L3_S5_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L3_S5_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Wir haben zusammen Fußball gespielt. Aber dann ist Nico gestürzt. Sein Bein hat wehgetan. Dann haben wir beim Arzt angerufen. Und danach sind wir mit dem Auto zum Arzt gefahren. Jetzt sind wir hier. Vielleicht ist Nicos Fuß nur verletzt.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L3_S7_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L3_S11_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L3_S11_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L3_S11_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"machen:\nTarek hat mit einem Freund eine Fahrradtour gemacht .\n\nliegen:\nPlötzlich hat&nbsp;er auf dem Boden gelegen .\n\nbluten:\nEr hat geblutet .\n\nbringen:\nEin Krankenwagen hat Tarek ins Krankenhaus gebracht .\n\naufwachen:\nIm Krankenhaus ist er aufgewacht .",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L3_S12b_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"fahren:\nMax ist Snowboard gefahren .\n\nstürzen:\nPlötzlich ist er gestürzt .\n\nrufen:\nEin Mann hat einen Krankenwagen gerufen .\n\nuntersuchen:\nEin Arzt hat Max untersucht .\n\nwehtun:\nEs hat sehr wehgetan .",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L3_S12b_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Hallo Nina,&nbsp;\nNico ist beim Fußballspiel . Sein Fuß ist verletzt . Max und Tarek haben Nico zum Arzt . Den Krankenwagen haben sie nicht . So schlimm war es nicht. Jetzt warten wir hier. Der Arzt hat Nico noch nicht . Vielleicht ist sein Fuß gebrochen.\nLisa",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L3_S13_Audio.mp3"
					}
				]
			],
			[
				"Hast du schon einmal im Krankenhaus gelegen?",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L3_S14_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L3_S14_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Hast du schon einmal den Krankenwagen gerufen?",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L3_S14_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L3_S14_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Hat dich schon einmal ein Krankenwagen ins Krankenhaus gebracht?",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L3_S14_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L3_S14_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Bist du schon einmal mit dem Fahrrad gestürzt?",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L3_S14_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L3_S14_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Bist du schon einmal im Krankenhaus aufgewacht?",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L3_S14_A5_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L3_S14_A5_Loesungsaudio.mp3"
					}
				]
			]
		]
	},
	{
		title		: "Nehmen Sie …",
		"avatarURL": "https://static.dw.com/image/37397142_401.jpg",
		hyperText	: [
			[
				"Nico darf nicht alleine laufen. Er braucht Krücken. ",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L4_S3_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Nico hat Schmerzen. Er nimmt eine Tablette. ",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L4_S3_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Nico hat eine Salbe bekommen.",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L4_S3_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Nico darf das Bein nicht bewegen.",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L4_S3_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://dwhlsondemand-vh.akamaihd.net/i/dwtv_video/flv/nicosweg/A1_E17_L4_S4_Video1_sd_,sor,avc,.mp4.csmil/master.m3u8"
					}
				]
			],
			[
				"Nico soll die Tabletten dreimal täglich nehmen.",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L4_S4_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Nico soll die Tabletten nach dem Essen nehmen.",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L4_S4_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Er soll die Salbe vor dem Schlafengehen benutzen.",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L4_S4_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Nico nimmt morgens, mittags und abends eine Tablette.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L4_S5_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Nico nimmt die Tablette nach dem Essen.\n\nNico benutzt die Salbe vor dem Schlafengehen.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L4_S6_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L4_S7_A1_Audio1.mp3"
					}
				]
			],
			[
				"Der Fuß tut sehr weh.\nDer Arzt möchte den Fuß in Zimmer 11 röntgen.",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L4_S7_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L4_S7_A2_Audio1.mp3"
					}
				]
			],
			[
				"Nico bekommt Krücken und muss Medizin nehmen.\nNico darf den Fuß nicht bewegen.\nNico bekommt die Tabletten und die Salbe in der Apotheke.",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L4_S7_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L4_S7_A3_Audio1.mp3"
					}
				]
			],
			[
				"Nico darf in einem Monat wieder Sport machen.\nNico braucht keine Krankschreibung.",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L4_S7_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Nico: Lisa, was ist ein Rezept?\nLisa: Der Arzt hat dich untersucht und denkt, du brauchst Medizin . Er muss zuerst ein Rezept schreiben. Auf dem Rezept stehen&nbsp;deine Medikamente. Sieh mal, hier steht: Tabletten und eine Salbe . Die Medikamente bekommst du dann in der Apotheke.&nbsp;\nNico: Okay, danke.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L4_S8_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Nico: Lisa, was ist eine Krankschreibung?\nLisa: Du bist krank und darfst nicht arbeiten. Der Arzt schreibt dich dann krank . Er kann dich einen Tag, zwei Tage oder länger krankschreiben. Das muss aber auch dein Arbeitgeber&nbsp;wissen. Du bekommst eine Krankschreibung und musst sie deinem Arbeitgeber geben.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L4_S8_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Nico: Und was&nbsp; bedeutet &nbsp;„Medizin verschreiben“?\nLisa: Der Arzt hat dir&nbsp;Tabletten und eine Salbe verschrieben . Man sagt: Der Arzt schreibt ein Rezept . Aber er verschreibt Medizin oder Medikamente.&nbsp;",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L4_S8_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Guten Tag, Herr Aigner. Was fehlt Ihnen denn? Ich habe Fieber und mein Hals tut weh. Öffnen Sie bitte den Mund. Und sagen Sie laut „Aaaaaaah!“ Aaaaaah! Alles rot. Sie haben eine Angina. Wie bitte?",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L4_S10_A1_Audio1.mp3"
					}
				]
			],
			[
				"Sie haben eine Halsentzündung. Ich verschreibe Ihnen Tabletten. Bitte nehmen Sie die Tabletten dreimal täglich.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L4_S10_A2_Audio1.mp3"
					}
				]
			],
			[
				"Ich schreibe Sie eine Woche krank. Sie müssen im Bett bleiben. Sie brauchen jetzt viel Ruhe. Und trinken Sie viel. Kommen Sie bitte nächste Woche noch einmal in meine Praxis.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L4_S10_A3_Audio1.mp3"
					}
				]
			],
			[
				"Gute Besserung. Vielen Dank. Auf Wiedersehen. Auf Wiedersehen.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L4_S10_A4_Audio1.mp3"
					}
				]
			],
			[
				"Sie dürfen keinen Alkohol trinken.",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L4_S11_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Mir geht es nicht gut. Ich habe Fieber.",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L4_S11_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Ich schreibe Sie krank. Trinken Sie viel Tee. Sie brauchen Ruhe. Mir geht es nicht gut. Ich habe Fieber.",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L4_S11_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Sie haben eine Erkältung. Bleiben Sie zwei Tage zu Hause. ",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L4_S11_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Wann muss ich die Medikamente nehmen? ",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L4_S11_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L4_S12_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L4_S12_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L4_S12_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L4_S12_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L4_S12_A5_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L4_S12_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L4_S12_A6_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L4_S12_A6_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L4_S13_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L4_S13_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L4_S13_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Machen Sie keinen Sport.",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L4_S14_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L4_S14_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Nehmen Sie dreimal täglich eine Tablette.",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L4_S14_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L4_S14_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Schlafen Sie viel. ",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L4_S14_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L4_S14_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Bewegen Sie das Bein nicht.",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L4_S14_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L4_S14_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Benutzen Sie die Salbe vor dem Schlafengehen.",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L4_S14_A5_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L4_S14_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Kommen Sie in sieben Tagen wieder.",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L4_S14_A6_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L4_S14_A6_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Susi denkt, sie ist zu dick. Sie hat mit ihrer Freundin Claudia gesprochen. Claudia hat Susi Tipps gegeben: „Du möchtest abnehmen? Du darfst nicht mehr so viele Süßigkeiten essen. Und du musst ein bisschen mehr Sport machen.“",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://learngerman.dw.com/en/nico-is-learning-german-recommendations/l-37782214/e-37793992"
					}
				]
			],
			[
				"Klausi ist oft erkältet. Seine Mutter gibt ihm Tipps: „Du musst abwechselnd heiß und kalt duschen. Du darfst nicht mit nassen Haaren aus dem Haus gehen! Trink viel Wasser und Tee!“",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L4_S15_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Herr Müller hat hohen Blutdruck . Seine Ärztin untersucht ihn und sagt: „Herr Müller, Sie müssen etwas ändern . Sie dürfen Kaffee trinken – aber Sie dürfen nicht so viel Kaffee trinken! Und Sie dürfen das Essen nicht zu stark salzen .“",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L4_S15_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L4_S16_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L4_S16_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L4_S16_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Die Ärztin möchte das Bein röntgen. Die Krankenschwester bringt die Patientin in das Röntgenzimmer. Die Patientin darf das Bein nicht bewegen.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37804014_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L4_S17_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Die Patientin hat starken Husten. Die Ärztin möchte ihre Lunge abhören. Die Patientin &nbsp;soll tief einatmen und ausatmen . Danach soll sie husten.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37804347_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L4_S17_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Die Ärztin möchte das Blut untersuchen. Die Arzthelferin muss das Blut abnehmen . Die Patientin muss ruhig sitzen.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37804447_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L4_S17_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Die Patientin kann nicht arbeiten. Die Ärztin schreibt sie krank. Die Sprechstundenhilfe hat eine Krankschreibung und ein Rezept. Sie schreibt den neuen Termin auf.",
				{},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37804419_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L4_S17_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Die Patientin hatte einen Unfall. Die Ärztin muss ihr Bein operieren . Die Krankenschwester muss helfen. Die Patientin muss schlafen.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dImage",
						"location": "before",
						"sourceURL": "https://static.dw.com/image/37804433_501.jpg"
					},
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E17_L4_S17_A5_Loesungsaudio.mp3"
					}
				]
			]
		]
	},
	{
		title		: "Meine Heimat",
		"avatarURL": "https://static.dw.com/image/37397158_401.jpg",
		hyperText	: [
			[
				"ein großes Haus – das große Haus",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L1_S5_A1_Audio1.mp3"
					}
				]
			],
			[
				"ein kleiner Vogel – der kleine Vogel",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L1_S5_A2_Audio1.mp3"
					}
				]
			],
			[
				"eine alte Großmutter – die alte Großmutter",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L1_S5_A3_Audio1.mp3"
					}
				]
			],
			[
				"alte Großväter – die alten Großväter",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L1_S5_A4_Audio1.mp3"
					}
				]
			],
			[
				"Selmas Familie hat ein großes Haus. Das große Haus ist in Damaskus",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L1_S4_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Selma hat einen kleinen Vogel. Der kleine Vogel heißt Leli",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L1_S4_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Selma hat eine alte Großmutter. Die alte Großmutter ist noch in Damaskus",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L1_S4_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Selma hat alte	Großeltern. Die alten Großeltern leben in Syrien",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L1_S4_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Wie findest du die Großeltern?",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L1_S7_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L1_S7_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Wie findest du die Frau?",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L1_S7_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L1_S7_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Wie ist der Pullover?",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L1_S7_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L1_S7_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Und das Auto?",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L1_S7_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L1_S7_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Und das Haus?",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L1_S7_A5_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L1_S7_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Wir haben in einem großen Haus in Syrien gewohnt. Meine Großeltern haben auch bei uns gelebt. Eines Tages &nbsp; sind wir auf den Markt gegangen und haben uns Leli, unseren kleinen Papagei, gekauft. Ich habe mich sehr über Leli gefreut . Ich habe immer viel mit Leli gesprochen. Nachts ist er immer in meinem Zimmer geblieben.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L1_S9_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L1_S11_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L1_S11_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L1_S11_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L1_S11_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L1_S12_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L1_S12_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L1_S12_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L1_S12_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L1_S12_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L1_S13_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L1_S13_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L1_S13_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L1_S13_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L1_S13_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L1_S13_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L1_S13_A5_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L1_S13_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L1_S15_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Meine Mutter hat gesagt , wir können in Deutschland bleiben. Wir haben einen Brief bekommen . Papa hat den Brief ganz nervös geöffnet , sagt Mama. Das BAMF hat geschrieben , wir können erst mal hierbleiben. Mama und Papa haben sich sehr gefreut . Papa hat sogar ein bisschen getanzt .",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L1_S16_A1_Loesungsaudio.mp3"
					}
				]
			]
		]
	},
	{
		title		: "Leben in Deutschland",
		"avatarURL": "https://static.dw.com/image/37397231_401.jpg",
		hyperText	: [
			[
				"Inge: Ich habe noch nicht so viele spanische Gerichte gegessen. Kannst du mir etwas empfehlen?\n\nNico: Ich esse sehr gern Gazpacho. Das ist eine kalte Suppe.\n\nInge: Eine kalte Suppe? Also, ich weiß nicht ...\n\nNico: Sie ist wirklich gut.\n\nInge: Also, zuerst esse ich noch etwas von dieser leckeren Paella! Tarek, kannst du mir noch ein bisschen Paella bringen?\n\nTarek: Natürlich! Ich bringe sie dir sofort.",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L2_S14_Audio1.mp3"
					}
				]
			],
			[
				"Ja, die Paella schmeckt ihm.",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L2_S14_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Nico empfiehlt ihr ein kaltes Gericht.",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L2_S14_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Er bringt ihr noch mehr Paella.",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L2_S14_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L2_S3_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L2_S3_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L2_S3_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L2_S3_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L2_S3_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Tarek: Fehlt dir das spanische Essen? Vermisst du es?\nNico : Ja, manchmal fehlt mir das spanische Essen. Und dir, Tarek? Fehlt dir das türkische Essen?\nTarek: Ja, manchmal fehlt mir das türkische Essen. Aber hier in Deutschland gibt es ja zum Glück viele gute türkische Restaurants.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L2_S5_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Tarek: Magst du das Leben in Deutschland? Gefällt&nbsp;es dir hier?\nNico: Ja, das Leben in Deutschland gefällt mir gut. Ich mag die Leute und das Essen … nur das Wetter gefällt mir in Deutschland nicht so gut.\nTarek: Ja, das Wetter in Spanien ist besser, oder? Das Wetter hier in Deutschland gefällt mir&nbsp;auch nicht so gut. In der Türkei ist es auch wärmer und sonniger.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L2_S5_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L2_S6_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L2_S6_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L2_S6_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Gefällt dir das Wetter in Deutschland?",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L2_S7_A1_Audio1.mp3"
					}
				]
			],
			[
				"Ja, das Wetter in Deutschland gefällt mir. / Nein, das Wetter in Deutschland gefällt mir nicht.",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L2_S7_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Fehlt dir das Essen aus deiner Heimat?",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L2_S7_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L2_S7_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Gefällt dir der Deutschkurs „Nicos Weg”?",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L2_S7_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L2_S7_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Fehlen dir deine guten Freunde?",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L2_S7_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L2_S7_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L2_S9_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L2_S9_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L2_S9_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L2_S9_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L2_S10_A1_Audio1.mp3"
					}
				]
			],
			[
				"Ja, uns fehlen noch Tomaten.",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L2_S10_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L2_S10_A2_Audio1.mp3"
					}
				]
			],
			[
				"Nein, die Jeans gefällt mir nicht.",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L2_S10_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L2_S10_A3_Audio1.mp3"
					}
				]
			],
			[
				"Ja, natürlich. Wir helfen dir am Samstag beim Umzug.",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L2_S10_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L2_S11_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L2_S11_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L2_S11_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L2_S11_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Tarek vermisst seine Freunde.\nTarek mag das Wetter in der Türkei lieber.\nTarek findet Lebensmittel in Deutschland teuer.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L2_S12_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Welche deutsche Stadt gefällt dir besser: Berlin oder München?",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L2_S13_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L2_S13_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Welche deutsche Stadt gefällt dir besser: Berlin oder München?",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L2_S13_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L2_S13_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Schmeckt dir das deutsche Essen?",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L2_S13_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L2_S13_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Welches Lebensmittel aus deiner Heimat fehlt dir am meisten?",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L2_S13_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L2_S13_A4_Loesungsaudio.mp3"
					}
				]
			]	
		]
	},
	{
		title		: "Anders als zu Hause",
		"avatarURL": "https://static.dw.com/image/37397193_401.jpg",
		hyperText	: [
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L3_S4_A1_Audio1.mp3"
					}
				]
			],
			[
				"Das Essen in Deutschland schmeckt anders als in Spanien.",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L3_S4_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L3_S4_A2_Audio1.mp3"
					}
				]
			],
			[
				"Die spanische Musik fehlt Nico.",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L3_S4_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L3_S4_A3_Audio1.mp3"
					}
				]
			],
			[
				"Die Deutschen sind gerne zu Hause.",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L3_S4_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L3_S6_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L3_S6_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L3_S6_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L3_S6_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L3_S6_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L3_S7_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L3_S7_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L3_S7_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L3_S7_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L3_S7_A5_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Das Leben in Syrien ist anders in Deutschland. In Syrien essen wir viel mehr Fleisch in Deutschland. Wir kaufen auch öfter auf Märkten ein in Deutschland. Und die Geschäfte in Deutschland haben nicht so lange geöffnet in Syrien. Die syrischen Geschäfte haben meistens keine festen Öffnungszeiten. Die Menschen hier sind genauso nett&nbsp;und hilfsbereit zu Hause, aber in Syrien ist man viel spontaner in Deutschland. Deutsch lernen ist nicht einfach , aber ich glaube, Arabisch ist genauso schwer Deutsch.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L3_S8_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"In Syrien isst man mehr Obst und Gemüse als in Deutschland.\nIn Syrien haben Geschäfte immer von 8 bis 18 Uhr geöffnet.\nIn Syrien sind die Menschen nicht so spontan.\nArabisch ist leichter als Deutsch.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L3_S9_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L3_S10_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L3_S10_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L3_S10_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L3_S10_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L3_S10_A5_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L3_S10_A6_Audio1.mp3"
					}
				]
			],
			[
				"Sind die Lebensmittel in deiner Heimat teurer oder billiger als in Deutschland?",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L3_S11_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L3_S11_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Ist das Wetter in deiner Heimat besser oder schlechter als in Deutschland?",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L3_S11_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L3_S11_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Ist die deutsche Sprache leichter oder schwerer als deine Muttersprache?",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L3_S11_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L3_S11_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Sind die Menschen in Deutschland genauso nett wie die Menschen in deiner Heimat?",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L3_S11_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L3_S11_A4_Loesungsaudio.mp3"
					}
				]
			]	
		]
	},
	{
		title		: "Ich träume von …",
		"avatarURL": "https://static.dw.com/image/37397328_401.jpg",
		hyperText	: [
			[
				"Nico wünscht sich einen Fahrradladen.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L4_S2_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L4_S4_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Ich würde gerne &nbsp;wieder als Lehrerin arbeiten. Ich möchte eine feste Stelle bei einer Schule bekommen, das ist mein Traum . Und ich möchte Emma öfter sehen. Ich würde gern mehr Zeit mit ihr verbringen. Ich würde dann mit ihr schöne Ausflüge machen.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L4_S5_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Ich möchte einen netten Mann treffen . Zuerst würden wir vielleicht ein paar &nbsp; Ausflüge machen und schön essen gehen. Dann würde ich gern wieder heiraten. Mein Traum war schon immer ein weißes Kleid. Danach würde ich gern mit meinem Mann in Urlaub fahren. Und dann würden wir zusammen in eine größere Wohnung ziehen.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L4_S5_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L4_S7_A1_Audio1.mp3"
					}
				]
			],
			[
				"Nawin wünscht sich einen guten Job.\nNawin möchte in Frankreich neue Freunde finden.",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L4_S7_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Zuerst möchte ich meine Ausbildung beenden. Dann hätte ich gern einen guten Job. Danach hätte ich gern mein eigenes Geschäft. Später möchte ich noch eine große Familie haben.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L4_S10_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Zuerst ich mein Studium beenden . Das finde ich wichtig. Dann ich gerne als freier Fotograf für verschiedene Unternehmen arbeiten und den ganzen Tag nur fotografieren. Ich auch gern ein kleines Büro. Dort ich die Fotos am Computer bearbeiten.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L4_S8_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L4_S11_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L4_S11_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L4_S11_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L4_S11_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L4_S11_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E18_L4_S11_A3_Loesungsaudio.mp3"
					}
				]
			]
		]
	},
	{
		title		: "Final Test A1",
		"avatarURL": "https://static.dw.com/image/37397328_401.jpg",
		hyperText	: [
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E19_L1_S1_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E19_L1_S1_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E19_L1_S1_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E19_L1_S1_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E19_L1_S2_A1_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E19_L1_S2_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E19_L1_S2_A2_Audio1.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E19_L1_S2_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E19_L1_S2_A3_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E19_L1_S2_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E19_L1_S3_A1_Audio1.mp3"
					}
				]
			],
			[
				"Herr Künzel und seine Frau kommen heute nicht ins Restaurant.\nHerr Künzel möchte einen Tisch für Mittwoch reservieren.",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E19_L1_S3_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E19_L1_S3_A2_Audio1.mp3"
					}
				]
			],
			[
				"Max geht am Vormittag zum Arzt.\nDie Nudeln sollen genau acht Minuten kochen.",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E19_L1_S3_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E19_L1_S3_A3_Audio1.mp3"
					}
				]
			],
			[
				"Tareks Mutter macht eine Tour durch Berlin.\nTareks Mutter ist am Brandenburger Tor.",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E19_L1_S3_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Nina kommt um sechs Uhr zu Dario.\nNina möchte mit Dario im Restaurant essen.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E19_L1_S4_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Sprachferien in Europa\n\nWollen Sie Englisch in Irland lernen? Spanisch in Spanien? Kein Problem! Bei uns gibt es tolle Angebote für viele europäische Sprachen!\n\nNeue Sprachschule im Stadtzentrum\n\nUnsere neuen Unterrichtsräume sind fertig! Sie finden uns jetzt auch in der Bonner Innenstadt. Lernen Sie die wichtigsten Sprachen der Welt in unserer zweiten Schule!\n\nVerkaufe Übungsbuch\n\nWer möchte ein neues Französischbuch für 10 € kaufen? Bei Interesse bitte eine E-Mail schreiben an v.maiser@dw.com!",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E19_L1_S5_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Suche Sprachpartner\n\nDu bist französischer Muttersprachler und möchtest dich einmal pro Woche mit mir treffen und Französisch und Deutsch sprechen? Dann ruf mich an!\n\nSuche WG-Zimmer\n\nHallo! Ich heiße Juana, bin 20 Jahre alt und lerne hier an der Schule Deutsch. Ich suche ein kleines, helles Zimmer in einer Wohngemeinschaft. Wer kann mir weiterhelfen?\n\nZimmer frei!\n\nWir suchen eine neue Mitbewohnerin für unsere WG. Du bist unkompliziert, humorvoll und interessierst dich für Politik? Dann ruf uns an!",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E19_L1_S5_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Heute ist Sprachunterricht.",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E19_L1_S6_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Die Buslinie 33 fährt heute nicht in die Nordstadt.",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E19_L1_S6_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Heute Nachmittag kann man hier keine Bücher kaufen.",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E19_L1_S6_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Lieferschein\n\nNachname: Akca\n\nVorname:\n\nStraße und Hausnummer:\n\nPLZ: 04103\n\nOrt:\n\nTelefon: 0154 - 578637\n\nLiefergegenstand: Kühlschrank Modell Nr. X32738\n\nPreis: €\n\nDatum: 28.04.2018",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E19_L1_S7_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Nico aus Spanien und Spanisch, Englisch und ein bisschen Deutsch.\n\nLisa viel, sie hat wenig Zeit.\n\nSebastian Student.\n\nLisas Nichte Emma.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n\nNicos Familie in Spanien.\n\nMax und Tarek ein Restaurant.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E19_L1_S8_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"heißen Sie? – Ich heiße Lisa Brunner.\n\nmacht ihr heute? – Wir gehen ins Kino.\n\ngeht's dir? – Danke, gut!\n\nwohnt ihr? – Wir wohnen in Köln.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E19_L1_S9_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"bist du? – Ich bin Nico.\n\nkommt ihr? – Wir kommen aus der Schweiz.\n\nalt bist du? – Ich bin 34 Jahre alt.\n\ngehen Nina und Lisa? – In den Supermarkt.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E19_L1_S9_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Hallo Lena! ihr heute auch frei? Ich heute keine Schule. Es zu heiß. Ich mit Tante Lisa im Park. Nico und Sebastian auch dabei. Wir einen Fußball mit. Das Wetter super. &nbsp;Es viele Leute im Park. Wir viel Spaß. Wo du heute?\nLG\nEmma",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E19_L1_S10_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E19_L1_S11_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E19_L1_S11_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E19_L1_S11_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E19_L1_S12_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E19_L1_S12_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E19_L1_S13_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E19_L1_S13_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Nico hat seine Tasche verloren.\n\nEr sucht den Fahrradladen von seiner Tante Yara.\n\nNico hatte ihre Adresse auf einen Zettel notiert, aber der Zettel ist in seiner Tasche.\n\nLisa: Nico, kannst du deine Eltern nicht anrufen und nach der Adresse von deiner Tante fragen?\nNico: Nein, ich habe keinen Kontakt mit meinen Eltern. Und meine Eltern kennen Yaras Telefonnummer und ihren Laden in Deutschland nicht.",
				{},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E19_L1_S14_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Nina, Lisa und Sebastian wohnen in einer WG. Sie mögen ihre helle und große Wohnung.\n\nNawin, ihr Mitbewohner, ist ausgezogen. Jetzt ist in ihrer Wohnung ein Zimmer frei.\n\nNico besucht seine neuen Freunde oft in der WG.\n\nNico: Habt ihr schon einen neuen Mitbewohner für eure WG gefunden?\nSebastian: Leider nicht. Es haben sich schon viele Leute unsere Wohnung angeguckt, aber wir haben unseren neuen Mitbewohner noch nicht gefunden.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E19_L1_S14_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Ergänze die Negationswörter. Inge lebt allein. Sie hat Partner. Ihr Mann lebt mehr. Inge ist gern allein. Sie braucht Ruhe. Oft geht sie ins Marek. Da hat sie &nbsp; Langeweile. Sie kennt alle Leute dort, aber das ist Problem. Inge unterhält sich oft mit Max und Tarek und fühlt sich im Restaurant dann mehr allein.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E19_L1_S15_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Wann stehst du morgens auf?",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E19_L1_S16_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E19_L1_S16_A1_Audio1.mp3"
					}
				]
			],
			[
				"Was machst du im Haushalt am liebsten?",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E19_L1_S16_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E19_L1_S16_A2_Audio1.mp3"
					}
				]
			],
			[
				"Und was machst du nicht so gern?",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E19_L1_S16_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E19_L1_S16_A3_Audio1.mp3"
					}
				]
			],
			[
				"Was machst du nach der Arbeit?",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E19_L1_S16_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E19_L1_S16_A4_Audio1.mp3"
					}
				]
			],
			[
				"",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E19_L1_S17_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Ich liebe meine Arbeit im Restaurant und möchte keinen anderen Job mehr machen. Ich muss fast jeden Tag früh aufstehen, aber viele Dinge kann ich mit Tarek ganz frei entscheiden. Natürlich darf man bei diesem Job keine Angst vor körperlicher Arbeit haben. Oft müssen wir schwere Kisten tragen. Und manchmal sind die Arbeitszeiten anstrengend. Meine Mutter sagt, wir sollen nicht so viel nachts arbeiten, aber manchmal müssen wir einfach länger arbeiten. An einem anderen Tag können wir dann das Restaurant früher schließen.",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E19_L1_S18_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E19_L1_S19_A1_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E19_L1_S19_A2_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E19_L1_S19_A3_Loesungsaudio.mp3"
					}
				]
			],
			[
				"",
				{
					standoff: "block"
				},
				[
					{
						type: "dAudio",
						sourceURL: "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E19_L1_S19_A4_Loesungsaudio.mp3"
					}
				]
			],
			[
				"Ein Freund und ich haben eine Radtour gemacht . Wir waren schon fast zu Hause. Dann bin ich plötzlich gestürzt . Mein Freund hat sofort den Krankenwagen gerufen . Der Krankenwagen hat mich ins Krankenhaus gebracht . Im Krankenhaus haben mich die Ärzte untersucht . Ich hatte eine Gehirnerschütterung. Ich bin zwei Tage im Krankenhaus geblieben .",
				{
					"standoff": "block"
				},
				[
					{
						"type": "dAudio",
						"sourceURL": "https://radiodownloaddw-a.akamaihd.net/Events/dwelle/deutschkurse/nicosweg/kurse/a1/A1_E19_L1_S20_A1_Loesungsaudio.mp3"
					}
				]
			]
		]
	}
]