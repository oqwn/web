// Translations for all supported languages
const translations = {
    'English': {
        selectLanguage: 'Select Language',
        selectLanguageSubtitle: 'Choose your preferred language',
        menu: 'Menu',
        nearbyBins: 'Nearby bins',
        nearbyBinsDesc: 'Find the closest recycling bins.',
        tutorialVideos: 'Tutorial Videos',
        tutorialVideosDesc: 'Learn how to recycle properly.',
        chooseProduct: 'Choose product to dispose',
        chooseProductDesc: 'Get specific disposal instructions.',
        nearbyBinsMap: 'Nearby Bins Map',
        mapInfo: 'Showing recycling bins in your area',
        disposalMap: 'Disposal Map',
        disposalMapInfo: 'Select location for specific disposal instructions',
        videoTitles: ['Recycling Basics', 'Composting 101', 'Electronic Waste', 'Hazardous Materials'],
        playingVideo: 'Playing Video',
        videoInfo: 'Educational content about waste disposal',
        scrollMore: 'Scroll for more',
        scanQR: 'Scan Product QR Code',
        categoriesTitle: 'Or choose category:',
        plastic: 'Plastic',
        paper: 'Paper',
        glass: 'Glass',
        metal: 'Metal',
        organic: 'Organic',
        electronics: 'E-waste',
        disposalInstructions: 'Disposal Instructions',
        disposalGuide: 'Disposal Guide',
        clickToPlay: 'Click to play',
        tip: 'Tip',
        localRegulationsTip: 'Check local regulations as recycling rules may vary by location.',
        bins: [
            'Federation Square Recycling',
            'Flinders Station Bins',
            'State Library Recycling Point',
            'MCG Waste Station'
        ],
        disposalSteps: {
            plastic: [
                'Rinse container to remove food residue',
                'Check recycling number (1-7)',
                'Place in yellow recycling bin',
                'Do not include plastic bags or film'
            ],
            paper: [
                'Remove any plastic windows from envelopes',
                'Flatten cardboard boxes',
                'Place in blue recycling bin',
                'No waxed or food-soiled paper'
            ],
            glass: [
                'Rinse bottles and jars',
                'Remove lids and caps',
                'Sort by color if required',
                'Place in green recycling bin'
            ],
            metal: [
                'Rinse cans and tins',
                'Crush aluminum cans to save space',
                'Place in yellow recycling bin',
                'Include clean aluminum foil'
            ],
            organic: [
                'Collect food scraps in compost bin',
                'Include vegetable peels and coffee grounds',
                'No meat or dairy products',
                'Place in brown organic waste bin'
            ],
            electronics: [
                'Never place in regular bins',
                'Remove batteries if possible',
                'Take to designated e-waste collection point',
                'Consider donating if still functional'
            ]
        }
    },
    'Español': {
        selectLanguage: 'Seleccionar Idioma',
        selectLanguageSubtitle: 'Elige tu idioma preferido',
        menu: 'Menú',
        nearbyBins: 'Contenedores cercanos',
        nearbyBinsDesc: 'Encuentra los contenedores de reciclaje más cercanos.',
        tutorialVideos: 'Videos Tutoriales',
        tutorialVideosDesc: 'Aprende cómo reciclar correctamente.',
        chooseProduct: 'Elegir producto para desechar',
        chooseProductDesc: 'Obtén instrucciones específicas de eliminación.',
        nearbyBinsMap: 'Mapa de Contenedores Cercanos',
        mapInfo: 'Mostrando contenedores de reciclaje en tu área',
        disposalMap: 'Mapa de Eliminación',
        disposalMapInfo: 'Selecciona ubicación para instrucciones específicas',
        videoTitles: ['Conceptos Básicos de Reciclaje', 'Compostaje 101', 'Residuos Electrónicos', 'Materiales Peligrosos'],
        playingVideo: 'Reproduciendo Video',
        videoInfo: 'Contenido educativo sobre eliminación de residuos',
        scrollMore: 'Desplázate para más',
        scanQR: 'Escanear código QR del producto',
        categoriesTitle: 'O elige categoría:',
        plastic: 'Plástico',
        paper: 'Papel',
        glass: 'Vidrio',
        metal: 'Metal',
        organic: 'Orgánico',
        electronics: 'E-residuos',
        disposalInstructions: 'Instrucciones de Eliminación',
        disposalGuide: 'Guía de Eliminación',
        clickToPlay: 'Clic para reproducir',
        tip: 'Consejo',
        localRegulationsTip: 'Consulta las regulaciones locales ya que las reglas de reciclaje pueden variar según la ubicación.',
        bins: [
            'Reciclaje Plaza Federación',
            'Contenedores Estación Flinders',
            'Punto de Reciclaje Biblioteca Estatal',
            'Estación de Residuos MCG'
        ],
        disposalSteps: {
            plastic: [
                'Enjuagar el contenedor para eliminar residuos de comida',
                'Verificar el número de reciclaje (1-7)',
                'Colocar en el contenedor amarillo de reciclaje',
                'No incluir bolsas o films plásticos'
            ],
            paper: [
                'Quitar ventanas plásticas de los sobres',
                'Aplanar las cajas de cartón',
                'Colocar en el contenedor azul de reciclaje',
                'No papel encerado o con restos de comida'
            ],
            glass: [
                'Enjuagar botellas y frascos',
                'Quitar tapas y tapones',
                'Clasificar por color si es necesario',
                'Colocar en el contenedor verde de reciclaje'
            ],
            metal: [
                'Enjuagar latas',
                'Aplastar latas de aluminio para ahorrar espacio',
                'Colocar en el contenedor amarillo de reciclaje',
                'Incluir papel aluminio limpio'
            ],
            organic: [
                'Recoger restos de comida en contenedor de compost',
                'Incluir cáscaras de vegetales y posos de café',
                'No carne ni productos lácteos',
                'Colocar en el contenedor marrón de residuos orgánicos'
            ],
            electronics: [
                'Nunca colocar en contenedores regulares',
                'Quitar baterías si es posible',
                'Llevar a punto de recolección de e-residuos designado',
                'Considerar donar si aún funciona'
            ]
        }
    },
    'Français': {
        selectLanguage: 'Sélectionner la langue',
        selectLanguageSubtitle: 'Choisissez votre langue préférée',
        menu: 'Menu',
        nearbyBins: 'Poubelles à proximité',
        nearbyBinsDesc: 'Trouvez les bacs de recyclage les plus proches.',
        tutorialVideos: 'Vidéos Tutorielles',
        tutorialVideosDesc: 'Apprenez à recycler correctement.',
        chooseProduct: 'Choisir le produit à jeter',
        chooseProductDesc: 'Obtenez des instructions d\'élimination spécifiques.',
        nearbyBinsMap: 'Carte des Poubelles à Proximité',
        mapInfo: 'Affichage des bacs de recyclage dans votre région',
        disposalMap: 'Carte d\'Élimination',
        disposalMapInfo: 'Sélectionnez l\'emplacement pour des instructions spécifiques',
        videoTitles: ['Bases du Recyclage', 'Compostage 101', 'Déchets Électroniques', 'Matières Dangereuses'],
        playingVideo: 'Lecture de la Vidéo',
        videoInfo: 'Contenu éducatif sur l\'élimination des déchets',
        scrollMore: 'Faites défiler pour plus',
        scanQR: 'Scanner le code QR du produit',
        categoriesTitle: 'Ou choisissez une catégorie:',
        plastic: 'Plastique',
        paper: 'Papier',
        glass: 'Verre',
        metal: 'Métal',
        organic: 'Organique',
        electronics: 'Déchets électroniques',
        disposalInstructions: 'Instructions d\'Élimination',
        disposalGuide: 'Guide d\'Élimination',
        clickToPlay: 'Cliquez pour lire',
        tip: 'Astuce',
        localRegulationsTip: 'Vérifiez les réglementations locales car les règles de recyclage peuvent varier selon l\'endroit.',
        bins: [
            'Recyclage Place de la Fédération',
            'Poubelles Station Flinders',
            'Point de Recyclage Bibliothèque d\'État',
            'Station de Déchets MCG'
        ],
        disposalSteps: {
            plastic: [
                'Rincer le contenant pour enlever les résidus alimentaires',
                'Vérifier le numéro de recyclage (1-7)',
                'Placer dans le bac de recyclage jaune',
                'Ne pas inclure de sacs ou films plastiques'
            ],
            paper: [
                'Enlever les fenêtres plastiques des enveloppes',
                'Aplatir les boîtes en carton',
                'Placer dans le bac de recyclage bleu',
                'Pas de papier ciré ou souillé par la nourriture'
            ],
            glass: [
                'Rincer les bouteilles et bocaux',
                'Enlever les couvercles et bouchons',
                'Trier par couleur si nécessaire',
                'Placer dans le bac de recyclage vert'
            ],
            metal: [
                'Rincer les canettes et boîtes',
                'Écraser les canettes en aluminium pour gagner de la place',
                'Placer dans le bac de recyclage jaune',
                'Inclure le papier d\'aluminium propre'
            ],
            organic: [
                'Collecter les déchets alimentaires dans le bac à compost',
                'Inclure les épluchures de légumes et le marc de café',
                'Pas de viande ni de produits laitiers',
                'Placer dans le bac brun de déchets organiques'
            ],
            electronics: [
                'Ne jamais placer dans les bacs réguliers',
                'Retirer les piles si possible',
                'Apporter au point de collecte désigné',
                'Envisager de donner si encore fonctionnel'
            ]
        }
    },
    'Deutsch': {
        selectLanguage: 'Sprache wählen',
        selectLanguageSubtitle: 'Wählen Sie Ihre bevorzugte Sprache',
        menu: 'Menü',
        nearbyBins: 'Mülleimer in der Nähe',
        nearbyBinsDesc: 'Finden Sie die nächsten Recyclingbehälter.',
        tutorialVideos: 'Tutorial-Videos',
        tutorialVideosDesc: 'Lernen Sie, richtig zu recyceln.',
        chooseProduct: 'Produkt zum Entsorgen wählen',
        chooseProductDesc: 'Erhalten Sie spezifische Entsorgungsanweisungen.',
        nearbyBinsMap: 'Karte der Mülleimer in der Nähe',
        mapInfo: 'Zeigt Recyclingbehälter in Ihrer Umgebung',
        disposalMap: 'Entsorgungskarte',
        disposalMapInfo: 'Standort für spezifische Anweisungen auswählen',
        videoTitles: ['Recycling-Grundlagen', 'Kompostierung 101', 'Elektronikschrott', 'Gefährliche Materialien'],
        playingVideo: 'Video wird abgespielt',
        videoInfo: 'Bildungsinhalte zur Abfallentsorgung',
        scrollMore: 'Scrollen für mehr',
        scanQR: 'Produkt-QR-Code scannen',
        categoriesTitle: 'Oder Kategorie wählen:',
        plastic: 'Plastik',
        paper: 'Papier',
        glass: 'Glas',
        metal: 'Metall',
        organic: 'Organisch',
        electronics: 'Elektroschrott',
        disposalInstructions: 'Entsorgungsanweisungen',
        disposalGuide: 'Entsorgungsführer',
        clickToPlay: 'Zum Abspielen klicken',
        tip: 'Tipp',
        localRegulationsTip: 'Prüfen Sie lokale Vorschriften, da Recyclingregeln je nach Standort variieren können.',
        bins: [
            'Recycling Federation Square',
            'Mülleimer Flinders Station',
            'Recycling-Punkt Staatsbibliothek',
            'Abfallstation MCG'
        ],
        disposalSteps: {
            plastic: [
                'Behälter ausspülen, um Speisereste zu entfernen',
                'Recyclingnummer prüfen (1-7)',
                'In gelbe Recyclingtonne geben',
                'Keine Plastiktüten oder Folien einschließen'
            ],
            paper: [
                'Plastikfenster von Umschlägen entfernen',
                'Kartons flach machen',
                'In blaue Recyclingtonne geben',
                'Kein gewachstes oder mit Lebensmitteln verschmutztes Papier'
            ],
            glass: [
                'Flaschen und Gläser ausspülen',
                'Deckel und Verschlüsse entfernen',
                'Nach Farbe sortieren falls erforderlich',
                'In grüne Recyclingtonne geben'
            ],
            metal: [
                'Dosen ausspülen',
                'Aluminiumdosen zerdrücken um Platz zu sparen',
                'In gelbe Recyclingtonne geben',
                'Saubere Aluminiumfolie einschließen'
            ],
            organic: [
                'Essensreste in Kompostbehälter sammeln',
                'Gemüseschalen und Kaffeesatz einschließen',
                'Kein Fleisch oder Milchprodukte',
                'In braune Biotonne geben'
            ],
            electronics: [
                'Niemals in reguläre Behälter geben',
                'Batterien wenn möglich entfernen',
                'Zu designierter Sammelstelle bringen',
                'Spenden erwägen wenn noch funktionsfähig'
            ]
        }
    },
    '中文': {
        selectLanguage: '选择语言',
        selectLanguageSubtitle: '选择您的首选语言',
        menu: '菜单',
        nearbyBins: '附近的垃圾箱',
        nearbyBinsDesc: '查找最近的回收箱。',
        tutorialVideos: '教程视频',
        tutorialVideosDesc: '学习如何正确回收。',
        chooseProduct: '选择要处理的产品',
        chooseProductDesc: '获取特定的处理说明。',
        nearbyBinsMap: '附近垃圾箱地图',
        mapInfo: '显示您所在地区的回收箱',
        disposalMap: '处理地图',
        disposalMapInfo: '选择位置以获取特定说明',
        videoTitles: ['回收基础', '堆肥101', '电子废物', '危险材料'],
        playingVideo: '正在播放视频',
        videoInfo: '关于废物处理的教育内容',
        scrollMore: '向下滚动查看更多',
        scanQR: '扫描产品二维码',
        categoriesTitle: '或选择类别：',
        plastic: '塑料',
        paper: '纸张',
        glass: '玻璃',
        metal: '金属',
        organic: '有机物',
        electronics: '电子垃圾',
        disposalInstructions: '处理说明',
        disposalGuide: '处理指南',
        clickToPlay: '点击播放',
        tip: '提示',
        localRegulationsTip: '查看当地法规，因为回收规则可能因地而异。',
        bins: [
            '联邦广场回收站',
            '弗林德斯车站垃圾箱',
            '州立图书馆回收点',
            'MCG废物站'
        ],
        disposalSteps: {
            plastic: [
                '冲洗容器以去除食物残渣',
                '检查回收编号（1-7）',
                '放入黄色回收箱',
                '不包括塑料袋或薄膜'
            ],
            paper: [
                '从信封上去除塑料窗口',
                '压平纸板箱',
                '放入蓝色回收箱',
                '不包括蜡纸或被食物弄脏的纸'
            ],
            glass: [
                '冲洗瓶子和罐子',
                '去除盖子和瓶盖',
                '如需要按颜色分类',
                '放入绿色回收箱'
            ],
            metal: [
                '冲洗罐头',
                '压扁铝罐以节省空间',
                '放入黄色回收箱',
                '包括干净的铝箔'
            ],
            organic: [
                '在堆肥箱中收集食物残渣',
                '包括蔬菜皮和咖啡渣',
                '不包括肉类或乳制品',
                '放入棕色有机废物箱'
            ],
            electronics: [
                '绝不放入常规垃圾箱',
                '如可能请取出电池',
                '送到指定的电子废物收集点',
                '如仍可用考虑捐赠'
            ]
        }
    },
    '日本語': {
        selectLanguage: '言語を選択',
        selectLanguageSubtitle: 'お好みの言語を選択してください',
        menu: 'メニュー',
        nearbyBins: '近くのゴミ箱',
        nearbyBinsDesc: '最寄りのリサイクルビンを見つけます。',
        tutorialVideos: 'チュートリアルビデオ',
        tutorialVideosDesc: '正しくリサイクルする方法を学びます。',
        chooseProduct: '処分する製品を選択',
        chooseProductDesc: '特定の処分方法を入手します。',
        nearbyBinsMap: '近くのゴミ箱マップ',
        mapInfo: 'お住まいの地域のリサイクルビンを表示',
        disposalMap: '処分マップ',
        disposalMapInfo: '特定の指示のために場所を選択',
        videoTitles: ['リサイクルの基本', 'コンポスト101', '電子廃棄物', '危険物質'],
        playingVideo: 'ビデオ再生中',
        videoInfo: '廃棄物処理に関する教育コンテンツ',
        scrollMore: 'スクロールして詳細を表示',
        scanQR: '製品のQRコードをスキャン',
        categoriesTitle: 'またはカテゴリを選択：',
        plastic: 'プラスチック',
        paper: '紙',
        glass: 'ガラス',
        metal: '金属',
        organic: '有機物',
        electronics: '電子廃棄物',
        disposalInstructions: '処分方法',
        disposalGuide: '処分ガイド',
        clickToPlay: 'クリックして再生',
        tip: 'ヒント',
        localRegulationsTip: 'リサイクルルールは場所によって異なる場合があるため、地域の規制を確認してください。',
        bins: [
            'フェデレーションスクエアリサイクル',
            'フリンダース駅ゴミ箱',
            '州立図書館リサイクルポイント',
            'MCG廃棄物ステーション'
        ],
        disposalSteps: {
            plastic: [
                '容器をすすいで食品残留物を取り除く',
                'リサイクル番号を確認（1-7）',
                '黄色のリサイクルビンに入れる',
                'ビニール袋やフィルムは含めない'
            ],
            paper: [
                '封筒からプラスチック窓を取り除く',
                '段ボール箱を平らにする',
                '青いリサイクルビンに入れる',
                'ワックス紙や食品で汚れた紙は不可'
            ],
            glass: [
                'ボトルや瓶をすすぐ',
                'ふたやキャップを取り除く',
                '必要に応じて色で分類',
                '緑のリサイクルビンに入れる'
            ],
            metal: [
                '缶をすすぐ',
                'スペースを節約するためアルミ缶を潰す',
                '黄色のリサイクルビンに入れる',
                'きれいなアルミホイルを含める'
            ],
            organic: [
                'コンポストビンに食品くずを集める',
                '野菜の皮やコーヒーかすを含める',
                '肉や乳製品は不可',
                '茶色の有機廃棄物ビンに入れる'
            ],
            electronics: [
                '通常のビンには絶対に入れない',
                '可能であれば電池を取り外す',
                '指定された電子廃棄物収集場所に持参',
                'まだ機能する場合は寄付を検討'
            ]
        }
    },
    '한국어': {
        selectLanguage: '언어 선택',
        selectLanguageSubtitle: '선호하는 언어를 선택하세요',
        menu: '메뉴',
        nearbyBins: '근처 쓰레기통',
        nearbyBinsDesc: '가장 가까운 재활용 통을 찾으세요.',
        tutorialVideos: '튜토리얼 비디오',
        tutorialVideosDesc: '올바르게 재활용하는 방법을 배우세요.',
        chooseProduct: '폐기할 제품 선택',
        chooseProductDesc: '특정 폐기 지침을 받으세요.',
        nearbyBinsMap: '근처 쓰레기통 지도',
        mapInfo: '귀하의 지역 재활용통 표시',
        disposalMap: '폐기 지도',
        disposalMapInfo: '특정 지침을 위한 위치 선택',
        videoTitles: ['재활용 기초', '퇴비화 101', '전자 폐기물', '위험 물질'],
        playingVideo: '비디오 재생 중',
        videoInfo: '폐기물 처리에 관한 교육 콘텐츠',
        scrollMore: '더 보려면 스크롤하세요',
        scanQR: '제품 QR 코드 스캔',
        categoriesTitle: '또는 카테고리 선택:',
        plastic: '플라스틱',
        paper: '종이',
        glass: '유리',
        metal: '금속',
        organic: '유기물',
        electronics: '전자 폐기물',
        disposalInstructions: '폐기 지침',
        disposalGuide: '폐기 가이드',
        clickToPlay: '클릭하여 재생',
        tip: '팁',
        localRegulationsTip: '재활용 규칙은 지역마다 다를 수 있으므로 현지 규정을 확인하세요.',
        bins: [
            '페더레이션 스퀘어 재활용',
            '플린더스 역 쓰레기통',
            '주립 도서관 재활용 포인트',
            'MCG 폐기물 스테이션'
        ],
        disposalSteps: {
            plastic: [
                '음식물 찌꺼기를 제거하기 위해 용기를 헹구기',
                '재활용 번호 확인 (1-7)',
                '노란색 재활용 통에 넣기',
                '비닐봉지나 필름은 포함하지 않기'
            ],
            paper: [
                '봉투에서 플라스틱 창 제거',
                '골판지 상자 평평하게 하기',
                '파란색 재활용 통에 넣기',
                '왁스 처리되거나 음식물이 묻은 종이는 불가'
            ],
            glass: [
                '병과 항아리 헹구기',
                '뚜껑과 캡 제거',
                '필요시 색상별로 분류',
                '녹색 재활용 통에 넣기'
            ],
            metal: [
                '캔 헹구기',
                '공간 절약을 위해 알루미늄 캔 압축',
                '노란색 재활용 통에 넣기',
                '깨끗한 알루미늄 호일 포함'
            ],
            organic: [
                '퇴비통에 음식물 쓰레기 수집',
                '채소 껍질과 커피 찌꺼기 포함',
                '고기나 유제품은 불가',
                '갈색 유기 폐기물 통에 넣기'
            ],
            electronics: [
                '일반 쓰레기통에 절대 넣지 않기',
                '가능하면 배터리 제거',
                '지정된 전자 폐기물 수집 장소로 가져가기',
                '아직 작동하면 기부 고려'
            ]
        }
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = translations;
}