// ════════════════════════════════════════════
//  CHEAT SHEETS DATA & FUNCTIONS
// ════════════════════════════════════════════

const CHEAT_SHEETS = [
  {
    id:1, title:'Горячие клавиши Blender', subtitle:'Базовое моделирование', icon:'⌨️',
    grad:['#f97316','#ef4444'],
    items:[
      {label:'G (Grab)',      title:'Перемещение',         desc:'Перемещение объекта. Нажмите X, Y или Z после G, чтобы зафиксировать движение по одной оси.'},
      {label:'R (Rotate)',    title:'Вращение',             desc:'Вращает объект вокруг пивота. R -> X -> 90: повернёт объект ровно на 90 градусов по оси X.'},
      {label:'S (Scale)',     title:'Масштаб',              desc:'Изменяет размер. S -> Shift+Z масштабирует толщину, не меняя высоту объекта.'},
      {label:'E (Extrude)',   title:'Выдавливание',         desc:'Основной инструмент создания формы. Вытягивает выбранный полигон, создавая новую геометрию.'},
      {label:'Ctrl+B',        title:'Фаска',                desc:'Сглаживает острые углы. Покрутите колёсико мыши для увеличения сегментов.'},
      {label:'I (Inset)',     title:'Вставка',               desc:'Создаёт внутреннюю грань внутри выделенного полигона. Удобно для создания панелей и углублений.'},
      {label:'F (Fill)',      title:'Заполнение',            desc:'Заполняет отверстие полигоном. Для выделения вершин и рёбер.'},
      {label:'Alt+Click',     title:'Выделение петли',       desc:'Выделяет всю петлю рёбер или граней. Двойной клик — выделение всей грани.'},
      {label:'Ctrl+R',        title:'Loop Cut',              desc:'Добавляет кольцевой разрез. Колёсико мыши — количество разрезов.'},
      {label:'M (Merge)',     title:'Объединение',           desc:'Объединяет вершины в центре, по курсору или по расстоянию.'},
      {label:'Shift+A',       title:'Добавить объект',      desc:'Открывает меню добавления объектов: меши, свет, камеры, эмиттеры и т.д.'},
      {label:'Tab',           title:'Edit/Object Mode',     desc:'Переключение между режимом редактирования и объектным режимом.'},
      {label:'X / Delete',    title:'Удалить',              desc:'Удаление вершин, рёбер, граней или целых объектов.'},
      {label:'Ctrl+Z',        title:'Отменить',             desc:'Отмена последнего действия. Ctrl+Shift+Z — повтор отменённого.'},
      {label:'Shift+D',       title:'Дублировать',          desc:'Создаёт копию выделенного объекта или геометрии.'},
      {label:'H',             title:'Скрыть',               desc:'Скрыть выделенное. Alt+H — показать всё. Shift+H — скрыть невыделенное.'},
      {label:'N',             title:'Панель свойств',       desc:'Открыть/закрыть боковую панель с трансформами и свойствами.'},
      {label:'O',             title:'Proportional Editing', desc:'Включить пропорциональное редактирование. Влияет на соседние вершины.'}
    ]
  },
  {
    id:2, title:'Сетка и топология', subtitle:'Правила построения геометрии', icon:'📐',
    grad:['#10b981','#06b6d4'],
    items:[
      {label:'Квады',          title:'Основа меша',           desc:'Четырёхугольники — стандарт игровой геометрии. Корректно делятся на треугольники.'},
      {label:'N-Gons',         title:'Избегать!',              desc:'Полигоны с 5+ вершинами дают непредсказуемые результаты при триангуляции.'},
      {label:'Edge Flow',      title:'Поток рёбер',            desc:'Рёбра должны огибать форму объекта, следуя его кривизне.'},
      {label:'Support Loops',  title:'Поддерживающие петли',   desc:'Дополнительные кольца рядом с острыми рёбрами для SubD.'},
      {label:'Manifold',       title:'Замкнутость меша',        desc:'Каждое ребро должно принадлежать ровно 2 полигонам.'},
      {label:'Apply Scale',    title:'Ctrl+A → Scale',         desc:'Перед экспортом масштаб должен быть (1,1,1).'},
      {label:'Нормали',        title:'Направление полигонов',  desc:'Alt+N → Recalculate Outside. Синий цвет = наружу.'},
      {label:'Pole Vertices',  title:'5-вершинные узлы',       desc:'Избегайте вершин с 5+ рёбрами в деформируемых областях. Только на плоских поверхностях.'},
      {label:'Subdivision',    title:'SubD готовность',        desc:'Меш должен выглядеть гладко после Catmull-Clark subdivision.'},
      {label:'Crease',         title:'Контроль острых рёбер',  desc:'Используйте Crease (Shift+E) для контроля острых углов без добавления петель.'},
      {label:'Bevel Weight',   title:'Вес фаски',              desc:'Назначайте вес рёбрам для контролируемой фаски через модификатор Bevel.'},
      {label:'Grid Fill',      title:'Заполнение сеткой',      desc:'Ctrl+F → Grid Fill заполняет отверстие правильной сеткой из квадов.'},
      {label:'Knife Tool',     title:'Инструмент нож',        desc:'K — разрезать геометрию вручную. Ctrl — под углом 45°. C — замкнуть разрез.'},
      {label:'Bridge Loops',   title:'Соединение петель',      desc:'Соединяет два выделенных края новой геометрией. Edge Menu → Bridge Edge Loops.'},
      {label:'Hook Modifier',  title:'Хук для анимации',      desc:'Привязывает вершины к объекту для деформации. Удобно для анимации частей.'},
      {label:'Lattice',        title:'Решётка деформации',    desc:'Модификатор Lattice деформирует объект через внешнюю решётку.'},
      {label:'Shrinkwrap',     title:'Обёртка на поверхность', desc:'Приклеивает геометрию к поверхности другого объекта.'},
      {label:'Decimate',       title:'Упрощение геометрии',    desc:'Модификатор уменьшает количество полигонов. Ratio задаёт процент сохранения.'}
    ]
  },
  {
    id:3, title:'PBR Текстурирование', subtitle:'Физически корректный рендеринг', icon:'🎨',
    grad:['#a855f7','#ec4899'],
    items:[
      {label:'Albedo',         title:'Базовый цвет',      desc:'Чистый цвет без освещения. Формат sRGB.'},
      {label:'Normal Map',     title:'Карта нормалей',    desc:'Симулирует рельеф без геометрии. DirectX vs OpenGL.'},
      {label:'Roughness',      title:'Шероховатость',     desc:'0 = зеркало, 1 = матовый. Определяет размытость бликов.'},
      {label:'Metallic',       title:'Металличность',     desc:'0 = диэлектрик, 1 = металл. Никаких 0.5!'},
      {label:'AO',             title:'Ambient Occlusion', desc:'Запечённые контактные тени в углублениях.'},
      {label:'Channel Packing',title:'Упаковка каналов',  desc:'ORM: R=Occlusion, G=Roughness, B=Metallic.'},
      {label:'Height Map',     title:'Карта высот',       desc:'Параллакс-окклюзия для псевдо-объёма. Требует UV и настройки.'},
      {label:'Emission',       title:'Свечение',          desc:'Эмиссивные поверхности светятся. Цвет + интенсивность.'},
      {label:'Opacity',        title:'Прозрачность',      desc:'Alpha канал или отдельная карта. Blend Mode: Opaque/Transparent.'},
      {label:'Subsurface',     title:'Подповерхностное рассеивание', desc:'SSS для кожи, воска, мрамора. Свет проходит сквозь материал.'},
      {label:'Clearcoat',      title:'Лаковое покрытие',  desc:'Дополнительный слой лака/краски. Для авто, металлов с покрытием.'},
      {label:'Anisotropy',     title:'Анизотропия',       desc:'Направленные блики как на шлифованном металле, волосах.'},
      {label:'Iridescence',    title:'Радужный эффект',   desc:'Тонкоплёночная интерференция: мыльные пузыри, бензиновые пятна.'},
      {label:'Specular',       title:'Зеркальность',      desc:'Для диэлектриков. Отдельный workflow от Metallic.'},
      {label:'Diffuse',        title:'Рассеянный свет',   desc:'Основной цвет без specular. Часть классического workflow.'},
      {label:'Displacement',   title:'Смещение вершин',   desc:'Реальное смещение геометрии по карте высот. Tessellation.'},
      {label:'Bent Normals',   title:'Согнутые нормали',  desc:'Улучшают AO и отражения. Учитывают затенение от соседней геометрии.'},
      {label:'Detail Maps',    title:'Детализация',       desc:'Мелкие детали поверх основной текстуры. Для крупных объектов.'}
    ]
  },
  {
    id:4, title:'Правила UV развёртки', subtitle:'Оптимальное наложение текстур', icon:'🗺️',
    grad:['#3b82f6','#6366f1'],
    items:[
      {label:'Seams',          title:'Размещение швов',     desc:'Швы прячут в местах, не видных игроку: под объектом, на сгибах.'},
      {label:'Stretching',     title:'Растяжение — ноль',   desc:'Проверяйте через UV → Show Stretch. Синий = ок.'},
      {label:'Padding',        title:'4–16 пикселей',       desc:'Отступ между UV-островами предотвращает «кровотечение» текстуры.'},
      {label:'Space Usage',    title:'80–90% заполнения',   desc:'Пустое место = потеря разрешения. Упаковывайте плотно.'},
      {label:'Hard Edges',     title:'Главное правило',     desc:'Каждое жёсткое ребро ДОЛЖНО иметь UV-шов.'},
      {label:'Texel Density',  title:'Единая плотность',    desc:'Все объекты в сцене должны иметь одинаковую плотность текселей для равномерного качества.'},
      {label:'UV Squares',     title:'Прямые углы',         desc:'Стремитесь к квадратным UV-формам. Избегайте L-образных и Т-образных островов.'},
      {label:'Mirror UV',      title:'Симметрия',           desc:'Для симметричных объектов используйте одну половину UV, затем отзеркальте.'},
      {label:'Pack Efficiently',title:'Упаковка',           desc:'Используйте автоматическую упаковку (Pack Islands) с минимальным отступом.'},
      {label:'Minimize Seams', title:'Минимум швов',        desc:'Чем меньше швов — тем лучше. Но не в ущерб качеству развёртки.'},
      {label:'Check Distortion',title:'Проверка искажений', desc:'Используйте checkerboard текстуру для визуальной проверки.'},
      {label:'Straight Cuts',  title:'Прямые разрезы',      desc:'Делайте разрезы прямыми там, где это возможно. Упрощает текстурирование.'},
      {label:'Island Grouping',title:'Группировка островов', desc:'Группируйте похожие детали вместе для эффективного использования пространства.'},
      {label:'UDIM Workflow',  title:'UDIM формат',         desc:'Для сложных ассетов используйте UDIM тайлы вместо одной огромной текстуры.'},
      {label:'Orient Islands', title:'Ориентация островов', desc:'Ориентируйте острова по осям UV для лучшего использования mipmaps.'},
      {label:'Overlap Check',  title:'Проверка пересечений', desc:'Убедитесь что острова не пересекаются. Иначе текстура «пропечётся» неправильно.'},
      {label:'Pivot Points',   title:'Пивоты островов',     desc:'Выровняйте пивоты островов для упрощения работы с три-planar проекциями.'},
      {label:'Relax Tool',     title:'Инструмент Relax',    desc:'Используйте Relax для распределения искажений равномерно по острову.'}
    ]
  },
  {
    id:5, title:'Экспорт в движок', subtitle:'FBX, настройки и подготовка', icon:'🎮',
    grad:['#f59e0b','#f97316'],
    items:[
      {label:'FBX формат',       title:'Стандартный экспорт',  desc:'FBX — универсальный формат. Для UE5 также поддерживается gLTF. OBJ теряет скелет и анимацию.'},
      {label:'Apply All',        title:'Ctrl+A перед экспортом', desc:'Все модификаторы применены, Scale=(1,1,1), Rotation=(0,0,0). Иначе объект «прыгнет» при импорте.'},
      {label:'Axis System',      title:'Ось Z вверх',           desc:'В Blender Z=вверх, X=вперёд. В Unreal Y=вперёд, Z=вверх. В настройках FBX выберите нужную систему координат.'},
      {label:'Scale Factor',     title:'100 для Unreal',        desc:'Blender 1м = Unreal 100 units. В настройках экспорта FBX: Scale = 100. Или настройте в импорте UE.'},
      {label:'LOD суффиксы',    title:'_LOD0, _LOD1...',       desc:'Unreal автоматически подхватывает LOD если меши названы SM_Name_LOD0, SM_Name_LOD1 и т.д.'},
      {label:'Коллизия UCX_',   title:'Префикс физики',         desc:'UCX_SM_Name — упрощённый меш коллизии. UBX_ для box, USP_ для sphere. Экспортируются вместе с основным.'},
      {label:'Сброс Origin',    title:'К основанию',            desc:'Пивот (Origin) ставьте в основание объекта или в центр нижней грани. Так проще ставить ассет в сцене.'},
      {label:'Materials Names', title:'Имена материалов',      desc:'Давайте осмысленные имена: MI_Metal_Rusty, MI_Glass_Clean. Unreal создаст слоты по этим именам.'},
      {label:'Tangent Space',   title:'Касательное пространство', desc:'В FBX включите Tangent Space для корректных нормалей. Иначе будут артефакты.'},
      {label:'Embed Textures',  title:'Встраивание текстур',   desc:'Можно включить Embed Media в FBX. Но для движка лучше отдельные файлы.'},
      {label:'Smoothing Groups',title:'Группы сглаживания',    desc:'Настройте Auto Smooth в Blender или группы сглаживания для корректного шейдинга.'},
      {label:'Vertex Colors',   title:'Вершинные цвета',       desc:'Если используете Vertex Paint — экспортируйте Vertex Colors. Полезно для масок.'},
      {label:'Animation',       title:'Экспорт анимации',      desc:'Для анимации: включите Animation в настройках FBX. Проверьте NLA tracks.'},
      {label:'Batch Export',    title:'Пакетный экспорт',      desc:'Используйте скрипты для пакетного экспорта множества объектов.'},
      {label:'Forward Axis',    title:'Направление осей',      desc:'Forward: -Y или Y Forward. Up: Z Up. Тестируйте под свой движок.'},
      {label:'Units Settings',  title:'Единицы измерения',     desc:'В Blender: Scene Properties → Units. Установите метры для соответствия движку.'},
      {label:'Normals Export',  title:'Экспорт нормалей',      desc:'Включите Normals в настройках FBX. Иначе движок пересчитает нормали.'},
      {label:'UVs Export',      title:'Экспорт UV',            desc:'Убедитесь что UV экспортируются. Для нескольких UV каналов настройте их порядок.'},
      {label:'Mesh Cleanup',    title:'Очистка меша',          desc:'Перед экспортом: Remove Doubles, Recalculate Normals, Apply Transforms.'},
      {label:'Test Import',     title:'Тестовый импорт',       desc:'Всегда делайте тестовый импорт одного объекта перед пакетным экспортом.'}
    ]
  },
  {
    id:6, title:'Ошибки новичков', subtitle:'Типичные проблемы и решения', icon:'⚠️',
    grad:['#ef4444','#f97316'],
    items:[
      {label:'Non-manifold',     title:'Незамкнутая геометрия', desc:'Дыры в mesh, внутренние грани. Решения: Mesh → Clean Up → Merge By Distance.'},
      {label:'Inverted Normals', title:'Перевёрнутые нормали',  desc:'Чёрные пятна на рендере. Alt+N → Recalculate Outside или Flip.'},
      {label:'Ngons on SubD',    title:'N-Gons на subdiv',      desc:'Пяти- и шестиугольники дают артефакты. Перестраивайте топологию на квады.'},
      {label:'Zero-scale Axis',  title:'Нулевой масштаб оси',   desc:'Объект сплюснут по оси. Примените Scale: Ctrl+A → Scale.'},
      {label:'Overlapping UVs',  title:'Пересечение UV',        desc:'Острова накладываются. Texture печатается дважды. Разложите острова.'},
      {label:'Bad Topology',     title:'Плохая топология',      desc:'Хаотичные рёбра, poles в деформируемых зонах. Перестройте edge flow.'},
      {label:'No Reference',     title:'Без референсов',        desc:'Моделирование «из головы». Всегда собирайте мудборд перед работой.'},
      {label:'Wrong PBR Values', title:'Неверные PBR значения', desc:'Metallic=0.5, слишком тёмный Albedo. Изучите физические значения материалов.'},
      {label:'Too Dense Mesh',   title:'Слишком плотная сетка', desc:'Тратит полигоны впустую. Оптимизируйте flat поверхности.'},
      {label:'Missing LODs',     title:'Нет LOD уровней',       desc:'Объект тормозит на расстоянии. Создайте LOD1, LOD2 с меньшим числом полигонов.'},
      {label:'Texture Bleeding', title:'Кровотечение текстур',  desc:'Швы видны на UV. Добавьте padding между островами (4-16 px).'},
      {label:'Stretching UV',    title:'Растянутые UV',         desc:'Текстура плывёт. Переразверните UV с минимальным stretching.'},
      {label:'Wrong Pivot',      title:'Неверный пивот',        desc:'Объект вращается не там. Установите Origin в логичное место.'},
      {label:'No Backface Cull', title:'Нет отсечения граней',  desc:'Видны внутренние полигоны. Включите Backface Culling в настройках.'},
      {label:'Unapplied Modifiers', title:'Неприменённые модификаторы', desc:'Меш выглядит иначе в движке. Apply All modifiers перед экспортом.'},
      {label:'Inconsistent Scale', title:'Несогласованный масштаб', desc:'Объекты разного размера в сцене. Используйте единую систему единиц.'}
    ]
  },
  {
    id:7, title:'Советы по оптимизации', subtitle:'Производительность и бюджет', icon:'⚡',
    grad:['#22c55e','#10b981'],
    items:[
      {label:'Poly Budget',      title:'Бюджет полигонов',     desc:'Соблюдайте лимиты: персонаж 10-50k, оружие 5-15k, пропсы 1-5k.'},
      {label:'LOD System',       title:'Система LOD',          desc:'Создавайте 3-4 уровня детализации. Дальние объекты = меньше полигонов.'},
      {label:'Texture Atlas',    title:'Текстурный атлас',     desc:'Объединяйте текстуры мелких объектов в один атлас. Меньше draw calls.'},
      {label:'Instancing',       title:'Инстансинг',           desc:'Одинаковые объекты (трава, камни) рендерите через instancing.'},
      {label:'Normal Map Bake',  title:'Запекание нормалей',   desc:'Детали с High-Poly на Low-Poly. Экономит полигоны без потери вида.'},
      {label:'Trim Sheets',      title:'Trim текстуры',        desc:'Используйте trim sheet для архитектурных элементов. Экономит память.'},
      {label:'Modular Design',   title:'Модульность',          desc:'Создавайте модульные наборы стен, полов. Переиспользуйте ассеты.'},
      {label:'Culling',          title:'Отсечение невидимого', desc:'Настройте occlusion culling. Не рендерить то, что за стенами.'},
      {label:'Compression',      title:'Сжатие текстур',       desc:'Используйте BC7/DXT5 сжатие. Меньше памяти, быстрее загрузка.'},
      {label:'Mipmaps',          title:'Мипмапы',              desc:'Включите генерацию mipmaps. Предотвращает алиасинг на расстоянии.'},
      {label:'Draw Calls',       title:'Оптимизация вызовов',  desc:'Меньше материалов = меньше draw calls. Объединяйте меши.'},
      {label:'GPU Instancing',   title:'GPU инстансинг',       desc:'Включите GPU instancing для массовых объектов в движке.'},
      {label:'Lightmap UV',      title:'UV для лайтмапов',     desc:'Второй UV канал без overlaps для запекания освещения.'},
      {label:'Collision Simplicity', title:'Простая коллизия', desc:'Используйте упрощённые примитивы для коллизии, не детальный mesh.'},
      {label:'Streaming',        title:'Потоковая загрузка',   desc:'Настройте level streaming. Загружать только видимые зоны.'},
      {label:'Profiler',         title:'Используйте профайлер', desc:'Анализируйте производительность в Unreal/Unity profiler.'}
    ]
  },
  {
    id:8, title:'Работа в Substance Painter', subtitle:'Текстурирование и умные материалы', icon:'🖌️',
    grad:['#f97316','#f59e0b'],
    items:[
      {label:'Smart Material',   title:'Умные материалы',      desc:'Готовые пресеты с генераторами грязи, потертостей. Экономят время.'},
      {label:'Anchor Points',    title:'Точки привязки',       desc:'Передают информацию между слоями. Для сложного procedural.'},
      {label:'Generator Masks',  title:'Маски генераторов',    desc:'Curvature, Ambient Occlusion, World Space Normal для масок.'},
      {label:'Tri-planar',       title:'Трипланарная проекция', desc:'Текстурирование без UV. Для terrain, камней, органики.'},
      {label:'Baking Setup',     title:'Настройка запекания',   desc:'Match by Mesh Name, Anti-aliasing 4x, Max Front/Rear 100.'},
      {label:'Layer Stack',      title:'Стек слоёв',           desc:'Organize layers in folders. Use masks for non-destructive workflow.'},
      {label:'Projection Bake',  title:'Проекционное запекание', desc:'Для деталей без UV. Project texture from high-poly directly.'},
      {label:'ID Map',           title:'ID карта',              desc:'Разные цвета для разных частей. Для selecitve masking.'},
      {label:'Particle Brushes', title:'Кисти с частицами',    desc:'Для грязи, пыли, волос. Adjustable size and density.'},
      {label:'Smudge Tool',      title:'Инструмент размазывания', desc:'Blend colors and materials. For smooth transitions.'},
      {label:'Clone Stamp',      title:'Штамп клонирования',    desc:'Copy texture from one area to another. Fix imperfections.'},
      {label:'Fill Layer',       title:'Слой заливки',         desc:'Base material layer. Add generators and masks on top.'},
      {label:'Paint Layer',      title:'Слой рисования',       desc:'Manual painting. Use with alpha brushes for details.'},
      {label:'Filter Layer',     title:'Слой фильтра',         desc:'Adjust color, hue, saturation. Non-destructive corrections.'},
      {label:'Export Config',    title:'Конфигурация экспорта', desc:'Setup export presets for your engine. PBR Metallic Roughness.'},
      {label:'UDIM Support',     title:'Поддержка UDIM',        desc:'Multi-tile textures for high-res assets. 1001, 1002, etc.'}
    ]
  },
  {
    id:9, title:'ZBrush основы', subtitle:'Скульптинг и детализация', icon:'🗿',
    grad:['#8b5cf6','#a855f7'],
    items:[
      {label:'Move Brush',       title:'Move (M)',             desc:'Перемещение больших форм. Основа скульптинга.'},
      {label:'Clay Buildup',     title:'Clay Buildup',         desc:'Наращивание массы. Основной инструмент для форм.'},
      {label:'Standard Brush',   title:'Standard',              desc:'Базовая кисть для деталей. Alpha для вариаций.'},
      {label:'Dam Standard',     title:'Dam Standard',         desc:'Глубокие канавки и складки. Для резких линий.'},
      {label:'Smooth Brush',     title:'Smooth (Shift)',        desc:'Сглаживание поверхности. Зажмите Shift.'},
      {label:'ZRemesher',        title:'Автоматическая топология', desc:'Перестраивает mesh на квады. Быстро и чисто.'},
      {label:'Dynamesh',         title:'Динамическая сетка',   desc:'Автоматически добавляет полигоны при скульптинге.'},
      {label:'Polypaint',        title:'Раскраска вершин',      desc:'Paint without UV. Color per vertex. Great for concepts.'},
      {label:'Masking',          title:'Маскирование',         desc:'Ctrl+Drag to mask. Invert: Ctrl+Click. Blur: Ctrl+Drag on mask.'},
      {label:'Transpose',        title:'Позирование',          desc:'Move, Rotate, Scale parts. For posing characters.'},
      {label:'Subdivision',      title:'Уровни subdivision',   desc:'Ctrl+D to subdivide. Higher levels = more detail.'},
      {label:'Alpha Brushes',    title:'Альфа кисти',          desc:'Import alphas for surface details. Scratches, pores, scales.'},
      {label:'Noise Maker',      title:'Генератор шума',       desc:'Procedural surface patterns. Skin pores, fabric.'},
      {label:'FiberMesh',        title:'Волокна и волосы',      desc:'Generate hair, fur, grass. Customizable strands.'},
      {label:'ZModeler',         title:'Полигональное моделирование', desc:'Hard surface tools in ZBrush. Extrude, inset, bevel.'},
      {label:'Decimation Master',title:'Децимация',            desc:'Reduce poly count while preserving detail. For game export.'}
    ]
  },
  {
    id:10, title:'Marvelous Designer', subtitle:'Одежда и ткани', icon:'👕',
    grad:['#06b6d4','#3b82f6'],
    items:[
      {label:'Pattern Tools',    title:'Паттерны одежды',      desc:'Create garment patterns. Import from real sewing patterns.'},
      {label:'Sewing',           title:'Сшивание',              desc:'Connect pattern pieces. Simulates real stitching.'},
      {label:'Fabric Presets',   title:'Пресеты тканей',       desc:'Denim, Silk, Leather, Cotton. Physical properties.'},
      {label:'Simulation',       title:'Симуляция',            desc:'Real-time cloth simulation. Gravity, wind, collisions.'},
      {label:'Avatar Import',    title:'Импорт аватара',       desc:'Import character from Blender/Maya. Fit clothes on body.'},
      {label:'Pressure Welding', title:'Сварка давлением',     desc:'Quick seam creation. Drag between pattern edges.'},
      {label:'Internal Lines',   title:'Внутренние линии',     desc:'Add folds and details. Stitching, darts, pleats.'},
      {label:'Fold Enhancement', title:'Усиление складок',     desc:'Increase folding complexity. More realistic draping.'},
      {label:'Particle Distance',title:'Расстояние частиц',    desc:'Lower = higher quality. 10-20 for games. 5 for cinema.'},
      {label:'Export Mesh',      title:'Экспорт меша',         desc:'Export as OBJ/FBX. Convert to quad mesh in Blender.'},
      {label:'Layering',         title:'Слои одежды',          desc:'Multiple garments. Jacket over shirt. Collision settings.'},
      {label:'Accessories',      title:'Аксессуары',           desc:'Belts, buttons, zippers. Add after main simulation.'},
      {label:'Wrinkle Maps',     title:'Карты складок',        desc:'Bake wrinkle details. Use as normal/displacement maps.'},
      {label:'Retopology',       title:'Ретопология',          desc:'MD creates dense mesh. Retopo for game-ready low-poly.'},
      {label:'Wind Force',       title:'Сила ветра',           desc:'Add wind for dynamic poses. Flags, capes, hair.'},
      {label:'Freeze Simulation',title:'Заморозка симуляции',  desc:'Cache simulation. Export frozen state for animation.'}
    ]
  },
  {
    id:11, title:'Marmoset Toolbag', subtitle:'Запекание и презентация', icon:'🔥',
    grad:['#f43f5e','#ec4899'],
    items:[
      {label:'Bake Normal Map',  title:'Запекание нормалей',   desc:'High-poly to Low-poly. Match groups, check tangents.'},
      {label:'Ray Distance',     title:'Дистанция лучей',      desc:'Max Front/Rear. Prevent baking errors from distant rays.'},
      {label:'Cage Mesh',        title:'Cage для запекания',   desc:'Custom cage for precise ray casting. Avoid artifacts.'},
      {label:'AO Bake',          title:'Запекание AO',         desc:'Ambient Occlusion. Add depth and contact shadows.'},
      {label:'Curvature Map',    title:'Карта кривизны',       desc:'Edge wear masks. Convex/concave detection.'},
      {label:'ID Map Bake',      title:'Запекание ID карты',   desc:'Material IDs for selective texturing.'},
      {label:'Texture Set',      title:'Наборы текстур',       desc:'Multiple materials on one mesh. Separate bake sets.'},
      {label:'Anti-aliasing',    title:'Сглаживание',          desc:'4x or 8x AA for clean bakes. Slower but better.'},
      {label:'Output Size',      title:'Размер вывода',        desc:'2048, 4096, 8192. Match your target resolution.'},
      {label:'Tangent Space',    title:'Касательное пространство', desc:'MikkTSpace standard. Consistent normals across apps.'},
      {label:'Backdrop',         title:'Фон сцены',            desc:'HDRI environments. Studio lighting setups.'},
      {label:'Material Editor',  title:'Редактор материалов',  desc:'PBR shader. Real-time preview of textures.'},
      {label:'Light Rig',        title:'Настройка света',      desc:'Three-point lighting. Key, fill, rim lights.'},
      {label:'Camera DOF',       title:'Глубина резкости',     desc:'Depth of field. Focus on details. Cinematic renders.'},
      {label:'Turntable',        title:'Вращение модели',      desc:'Animated turntable. Portfolio presentation videos.'},
      {label:'Render Settings',  title:'Настройки рендера',    desc:'Resolution, samples, output format. PNG for quality.'}
    ]
  },
  {
    id:12, title:'Unreal Engine 5', subtitle:'Интеграция и настройка', icon:'🎮',
    grad:['#1e3a8a','#3b82f6'],
    items:[
      {label:'Import Settings',  title:'Настройки импорта',    desc:'Auto-import LODs, collision. Correct scale (100 for Blender).'},
      {label:'Master Material',  title:'Мастер материал',      desc:'Universal PBR material. Instance for variations.'},
      {label:'Material Instances',title:'Инстансы материалов', desc:'Quick variations. No shader recompilation. Fast iteration.'},
      {label:'Nanite',           title:'Nanite геометрия',     desc:'Virtualized geometry. High-poly directly in engine.'},
      {label:'Lumen',            title:'Lumen освещение',      desc:'Dynamic global illumination. Real-time reflections.'},
      {label:'Virtual Texturing',title:'Виртуальное текстурирование', desc:'Stream textures efficiently. Reduce memory usage.'},
      {label:'Quixel Megascans', title:'Библиотека ассетов',   desc:'Free photorealistic assets. Direct import to UE5.'},
      {label:'Static Mesh',      title:'Статические меши',     desc:'Non-moving objects. Buildings, props. Lightmap baked.'},
      {label:'Skeletal Mesh',    title:'Скелетные меши',       desc:'Animated characters. Skeleton, animations, LODs.'},
      {label:'Collision Setup',  title:'Настройка коллизии',   desc:'Simple vs Complex. UCX_ prefix for custom collision.'},
      {label:'LOD Settings',     title:'Настройки LOD',        desc:'Auto-generate or manual. Screen size thresholds.'},
      {label:'Lightmass',        title:'Запекание света',      desc:'Static lighting. Lightmass Importance Volume.'},
      {label:'Post Process',     title:'Постобработка',        desc:'Color grading, bloom, vignette. Final look tuning.'},
      {label:'Blueprint',        title:'Блупринты',            desc:'Visual scripting. Interactive elements, logic.'},
      {label:'Level Streaming',  title:'Стриминг уровней',     desc:'Load/unload sections. Open world optimization.'},
      {label:'Profiler',         title:'Профайлер',            desc:'Performance analysis. GPU, CPU, memory stats.'}
    ]
  }
];

// ════════════════════════════════════════════
//  SHEET FUNCTIONS
// ════════════════════════════════════════════
const ITEMS_PER_PAGE = 6;
let sheetPage = 1;

function sheetGradStyle(sheet) {
  return `background: linear-gradient(135deg, ${sheet.grad[0]}, ${sheet.grad[1]})`;
}

function renderSheetTabs() {
  const tabs = document.getElementById('sheetTabs');
  if (!tabs) return;
  
  tabs.innerHTML = CHEAT_SHEETS.map(sheet => {
    const isActive = activeSheet === sheet.id;
    const activeStyle = isActive ? sheetGradStyle(sheet) : '';
    const words = sheet.title.split(' ');
    let label = words[0];
    if (label.length > 9) label = label.slice(0,8) + '.';
    return `
      <button onclick="setSheet(${sheet.id})" class="sheet-tab ${isActive ? 'active' : ''}"
        style="${activeStyle}" title="${sheet.title}">
        <span style="font-size:22px;line-height:1">${sheet.icon}</span>
        <span style="font-size:9px;font-weight:800;letter-spacing:.03em;text-transform:uppercase;
                     color:${isActive?'#fff':'#64748b'};line-height:1.2;text-align:center;
                     overflow:hidden;max-width:100%;word-break:break-all">${label}</span>
        ${isActive ? `<div style="position:absolute;bottom:-7px;left:50%;transform:translateX(-50%);
          width:6px;height:6px;border-radius:50%;background:${sheet.grad[0]}"></div>` : ''}
      </button>`;
  }).join('');
}

function renderSheetContent() {
  const sheet = CHEAT_SHEETS.find(s => s.id === activeSheet);
  if (!sheet) return;
  
  const totalPages = Math.ceil(sheet.items.length / ITEMS_PER_PAGE);
  if (sheetPage > totalPages) sheetPage = 1;
  const startIdx = (sheetPage - 1) * ITEMS_PER_PAGE;
  const pageItems = sheet.items.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  const kbdSvg = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M8 14h8"/></svg>`;

  const cardsHtml = pageItems.map(item => `
    <div class="item-card">
      <div class="item-card-top">
        <div class="item-kbd-icon">${kbdSvg}</div>
        <div class="item-badge" style="background:${sheet.grad[0]}22;color:${sheet.grad[0]};border:1px solid ${sheet.grad[0]}44">
          ${item.label}
        </div>
      </div>
      <div class="item-title">${item.title}</div>
      <div class="item-desc">${item.desc}</div>
    </div>
  `).join('');

  const content = document.getElementById('sheetContent');
  if (!content) return;
  
  content.innerHTML = `
    <div class="sheet-card fade-slide-in">
      <!-- Header -->
      <div class="sheet-header" style="${sheetGradStyle(sheet)}">
        <div class="sheet-header-left">
          <div class="sheet-icon-box">${sheet.icon}</div>
          <div>
            <div style="font-size:22px;font-weight:900;color:#fff;line-height:1.15">${sheet.title}</div>
            <div style="font-size:13px;color:rgba(255,255,255,.75);margin-top:3px">${sheet.subtitle}</div>
          </div>
        </div>
        <div style="display:flex;gap:8px;align-items:center">
          <button class="sheet-nav-btn" onclick="prevSheet()">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <button class="sheet-nav-btn" onclick="nextSheet()">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>
      </div>

      <!-- Cards Grid -->
      <div class="sheet-body">
        <div class="cards-grid">
          ${cardsHtml}
        </div>
      </div>

      <!-- Footer -->
      <div class="sheet-footer">
        <button onclick="prevSheetPage()" style="background:rgba(255,255,255,0.08);border:none;color:#e2e8f0;cursor:pointer;padding:10px 16px;border-radius:10px;display:flex;align-items:center;gap:8px;font-weight:600;font-size:14px;transition:all .2s" onmouseover="this.style.background='rgba(255,255,255,0.12)';this.style.transform='translateX(-2px)'" onmouseout="this.style.background='rgba(255,255,255,0.08)';this.style.transform='translateX(0)'">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          Предыдущая
        </button>
        <div class="page-pill">${sheetPage} / ${totalPages}</div>
        <button onclick="nextSheetPage()" style="background:rgba(255,255,255,0.08);border:none;color:#e2e8f0;cursor:pointer;padding:10px 16px;border-radius:10px;display:flex;align-items:center;gap:8px;font-weight:600;font-size:14px;transition:all .2s" onmouseover="this.style.background='rgba(255,255,255,0.12)';this.style.transform='translateX(2px)'" onmouseout="this.style.background='rgba(255,255,255,0.08)';this.style.transform='translateX(0)'">
          Следующая
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>
    </div>
  `;
}

function setSheet(id) {
  activeSheet = id;
  sheetPage = 1;
  renderSheetTabs();
  renderSheetContent();
}

function prevSheet() { 
  setSheet(activeSheet > 1 ? activeSheet - 1 : CHEAT_SHEETS.length); 
}

function nextSheet() { 
  setSheet(activeSheet < CHEAT_SHEETS.length ? activeSheet + 1 : 1); 
}

function prevSheetPage() {
  const sheet = CHEAT_SHEETS.find(s => s.id === activeSheet);
  const totalPages = Math.ceil(sheet.items.length / ITEMS_PER_PAGE);
  sheetPage = sheetPage > 1 ? sheetPage - 1 : totalPages;
  renderSheetContent();
}

function nextSheetPage() {
  const sheet = CHEAT_SHEETS.find(s => s.id === activeSheet);
  const totalPages = Math.ceil(sheet.items.length / ITEMS_PER_PAGE);
  sheetPage = sheetPage < totalPages ? sheetPage + 1 : 1;
  renderSheetContent();
}

// Initialize sheets on DOM load
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    renderSheetTabs();
    renderSheetContent();
  });
}
