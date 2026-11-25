# 12 — Art inventory: what Anbennar art exists, what it looks like, what the game can use

Companion files:
- Catalog (989 entries): `/tmp/claude-0/-home-user-https-geraltzrk-github-io-/0ae42f4c-18a4-5527-aaa7-3ab22a420127/scratchpad/research/12_art_catalog.json`
- Flag tag map (1433 tags, 1016 with a Chinese name): `/tmp/claude-0/-home-user-https-geraltzrk-github-io-/0ae42f4c-18a4-5527-aaa7-3ab22a420127/scratchpad/research/12_flag_tags.json`
- Web-ready conversions of every mod image (4240 files): `/tmp/claude-0/-home-user-https-geraltzrk-github-io-/0ae42f4c-18a4-5527-aaa7-3ab22a420127/scratchpad/art/export/`
- Downloaded wiki images (393): `/tmp/claude-0/-home-user-https-geraltzrk-github-io-/0ae42f4c-18a4-5527-aaa7-3ab22a420127/scratchpad/art/wiki/`
- Contact sheets: `/tmp/claude-0/-home-user-https-geraltzrk-github-io-/0ae42f4c-18a4-5527-aaa7-3ab22a420127/scratchpad/art/preview/`
- Viewing notes: `/tmp/claude-0/-home-user-https-geraltzrk-github-io-/0ae42f4c-18a4-5527-aaa7-3ab22a420127/scratchpad/art/notes/`

Everything below was written after converting the files and looking at them. Inferences (who a figure is, whether an image is AI-made or vanilla Paradox art) are marked as such.

## 1. Overview

The three mod repositories hold about 4,200 image files; the Fandom wiki lists 2,107 more. Most of it is small UI art. What can carry a narrative game is a shorter list:

| Source | Count | Size | What it is | Usable as |
|---|---|---|---|---|
| `[eu4: gfx/loadingscreens]` | 37 | 2048×1536 (painting 2048×1010) | 36 captioned paintings + 1 title card | scene backdrops, campaign covers |
| `[eu4: gfx/event_pictures]` | 160 | 512×132 | 100 sepia ink sketches, 40 Halessi spirit plates, 20 UI plates | event headers, chapter strips |
| `[eu4: gfx/interface/advisors]` | 1,290 | 77×77 | portraits for 30 race groups × 22 roles × gender | NPC and PC portraits (small) |
| `[eu4: gfx/flags]` | 1,592 | 128×128 | 1,433 country flags + 159 rebel/faith flags | faction badges |
| `[eu4: gfx/interface/bookmarks]` | 162 | up to 301×74 | 15 region cards, 95 culture chips, lobby panels | region/race select, UI reference |
| `[eu4: gfx/interface/great_projects]` | 68 | 300×150 | 54 painted location thumbnails (+14 vanilla-looking) | location cards |
| `[eu4: gfx/interface/{ages,holy_orders,magic_menus,disasters,missions}]` | 514 | tiny | banners, emblem strips, menu panels, icons | icons, UI reference |
| `[ck3: gfx/interface/illustrations]` | 62 | up to 5000×2812 | 3 loading paintings, 55 unit cards, 4 terrain strips | 1022 cover, backdrops |
| `[ck3: gfx/interface/bookmarks]` | 3 | 1920×1080 | one inked parchment map + 2 overlays | map base texture |
| `[ck3: gfx/coat_of_arms]`, `[ck3: gfx/interface/icons/faith]` | 195 + 44 | 512 / 100 | recolourable heraldic charges, faith icons | faction emblems |
| `[vic3: gfx]` | 72 | 256 / 800×448 | 71 religion emblems + soundtrack card | religion icons |
| Fandom wiki (downloaded subset) | 393 of 2,107 | varied | 143 maps, character art, city art, heraldry | maps, a few backdrops |

Catalog totals by `kind`: illustration 308, bookmark 162, map 146, event 140, icon 94, flag 43, loading 40, portrait 39, coa 17.

Three facts shape everything else:

1. **Good scene art exists for about 45 subjects, and it is heavily weighted to 1444.** Of the 39 full paintings (36 from EU4, 3 from CK3), three are CK3-era, and only one (a gnomish ironclad) reads as industrial.
2. **Portraits exist only for the non-human races.** Generic humans, Cannorian elves, half-elves, Cannorian halflings and half-orcs use vanilla Europa Universalis IV art that is not in the repository (section 5).
3. **Nothing carries a licence.** No repository has a licence file. Credits can be assembled (section 9), but permission cannot be assumed.

## 2. Visual identity

Anbennar's art speaks in four registers. Pick one per surface; do not mix them inside a panel.

### 2.1 Painterly scene art (loading screens)

Digital paintings in a modern fantasy-illustration manner: a single named subject or place, a wide establishing view, strong directional light. Two compositions recur. The first is a three-quarter figure pushed to one side with their city or castle behind them (Lothane III, Jaddar, Laskaris, Carodin II, Sykar Riverclaw, Ayana, Grun Strongbellow, Corin). The second is a monument seen small-figures-for-scale (Hero's Gate, Hall of Ancestors, Salvation's Promise, the Zatsarya, Bim Lau). `[eu4: gfx/loadingscreens/load_1.dds … load_36.dds]`

Each file is 2048×1536, but the painting occupies only rows 262–1271. Above and below are slate bands (sampled `#2c363d`, vignetting to `#273036`) separated from the painting by a **double gold hairline** (two 3-pixel gold rules with a finer line between them; highlight `#d29f60`, mid `#93734b`, shadow `#5d4a2f`). A **maroon cloth ribbon with a rolled scroll end** (`#52221c`, shadow `#2f211c`) sits on the painting's lower left with the title in white old-style serif. `load_0` is the title card and has no caption. The 36 captions, read off the files:

Verkal Gulan's Hero's Gate · Hierarch Class Battleship · The Ascension, 1 AA · Jaddar Jexiszuir · The Slaughter at Rottenstep · Naegol's Invasion, 565 BA · The God Fragment · Corin, Goddess of War · The Black Demesne · The Struggle · The Samartal Summit · The Great City of Tianlou · A Hobgoblin Household · The Bloodgroves · The Necropolis of Bim Lau · The Faceless Queen · Castellos' Sacrifice · The Hall of Ancestors · Halt of the Hibernal Crusade · The Herald of Change · Lothane III síl Wex · Sykar Riverclaw · The Rending of Realms · Laskaris, the Conqueror · Carodin II, Lord of Arverynn · Salvation's Promise · Conclave of Elynáile · The Zatsarya of Zerat · Grun Strongbellow · Guru Suhan · Yawasichya Kobolds & Holohana · Harimar the Great · The Gunpowder Xhaz · Grandfather Moss Meets Kalei · Ídar Odančés Bimogíre Nephiuéda · Ayana, Covenbreaker.

Palettes differ by region, and the difference is useful for theming: Cannor is green meadow, slate armour and pale sky (`#314030 #808987 #acb1aa` at Rottenstep; `#8aa567 #7adffb` behind Corin); Bulwar is gold sand against cobalt (`#c8a159 #e6bf5c #7694aa`); the Dwarovar is near-black blue stone with amber fire (`#151920 #322e32 #6b503f`); Haless is turquoise and oxblood (`#679dab #274c5d`); the Black Demesne is black, wine and magenta (`#08090e #5b2437 #663840`).

The CK3 paintings are 16:9 and looser in handling. `The_Landing.dds` is a night piece in midnight navy, white sail and ember orange (`#12141f #3a3c46 #7b8a9a`). `[ck3: gfx/interface/illustrations/loading_screens/]`

### 2.2 Sepia ink (event pictures)

The 512×132 strips imitate vanilla EU4 event art: cross-hatched pen drawing on tan parchment with burnt edges. Sampled from `BLANK_eventPicture.dds`: paper `#edd1aa` / `#e6c59c`, mid `#dcb689`, edge `#b7895f`. Ink on the `HRE` plate runs `#332212 → #4d3a24 → #7d6143`. Several hands are visible: a tight engraver's line (HRE cartouche, Lilac Wars shields, Wood Elf Hunt), a comic-strip line (Goblin Ambush, Ogre Feast, Kobold Hoard), and soft charcoal washes (Looming Death, The Covenant, Dark Forest). Five files are animation strips (11–30 frames laid side by side, up to 15360 px wide); the catalog's `export` is the first frame. `[eu4: gfx/event_pictures/]`

The 40 `rending/GREAT_SPIRIT_*` plates are the one place where the sepia register takes colour: each Halessi Great Spirit is drawn in ink with an East-Asian woodcut flavour, then washed cyan-blue (default), crimson (`_EVIL`) or left bare (`_PLAIN`). The same drawing under a different wash is a cheap, canon-consistent way to show corruption or blessing in our own UI.

### 2.3 Flat heraldry (flags, emblems, religion icons)

Flags are crisp vector shapes at 128×128, no cloth texture. They carry three regional pattern languages, visible on the sheet of major flags `[eu4: gfx/flags/]`:

- **Cannorian**: European charges on plain or quartered fields. The signature device is the **Damerian crescent**, an ornate silver crescent on teal (`#117d8d`) or dark grey, usually with three white-sailed ships (Dameria `A58`, Anbenncóst `A38`, Verne `A33`, Damescrown `A25`, Sons of Dameria `B07`, the Empire `Z01`). Others: Gawed's gold eagle on navy (`#cfad67` on `#2f2f49`), Wex's white tower on purple (`#662d91`), Lorent's rose-star on lilac over green (`#a880ba` / `#4c833d`), Corintar's upright white sword on a red shield over coral (`#e7675a`), Castanor's white dragon and Black Castanor's black one.
- **Dwarven**: dense angular knotwork, square-spiral frets and gem-colour bands (Amldihr `I01`, Krakdhûmvror `I02`, Khugdihr `I07`, Er-Natvir `I06`, Aul-Dwarov `I24`).
- **Bulwari and eastern**: sun mandalas and phoenixes on orange and coral (Jaddari `F46` on `#c1590d`, Bulwar `F39`, Phoenix Empire `F38`); Halessi flags are seals with hanzi-like characters (Tianlou `Y19`, Bianfang `Y09`, Feiten `Y20`); The Command `R62` is a black wolf's head on rust (`#6b341f`); the Greentide `B01` a clawed glyph with a red eye on olive (`#696b19`).

CK3 adds 195 recolourable charges stored as channel masks (blue, green and magenta stand for three tinctures), including the crescent, three elven ships, dragons, Castanorian towers and about forty-five Bulwari sun devices `[ck3: gfx/coat_of_arms/colored_emblems/]`. Its faith icons draw the Cannorian cults as **stained-glass lunettes** — a white dragon on blue glass for the Castanorian pantheon, a gold horseshoe for Ara, a white rose, a moon and stars `[ck3: gfx/interface/icons/faith/]`. Vic3 supplies 71 painted religion emblems on transparent ground: Corinite = red shield with upright sword, Ravelian = white crystal between gold brackets, Regent Court = silver throne `[vic3: gfx/interface/icons/religion_icons/]`.

### 2.4 Parchment cartography (wiki maps)

Six map styles circulate; three are worth imitating.

- **"Chronicler Academia" plates** (by Stefus): pen-and-ink relief on beige parchment, steel-blue water, curved italic region names, a grey-green title plaque with the region in dark-red script and a line such as "1892, Chronicler Academia". The Serpentspine plate frames its title in dwarven runes. Sampled from `Escann_Map.png`: `#c1b89d #aba288 #918871 #777061`. `[wiki: File:Escann Map.png]`, `[wiki: File:Haless.jpg]`, `[wiki: File:Rahen Paper Map.png]`, `[wiki: File:Serpentspine paper.png]`
- **"Order of Chroniclers" atlas plates** (by Takasaki): clean cream sheets with pastel fills and Garamond-like labels, titled like "Taychend 1444 AA — In the midst of the Wars of the Two Heroes — Produced by the Order of Chroniclers".
- **Antique sepia history plates** for Bulwar, 1001–1454 AA.
- EU4 map-mode screenshots (Paradox rendering), teal contour-relief maps of Aelantir, and modern vector maps make up the rest.

The conceit that a scholarly order issues each map with a date and imprint is a ready-made voice for our map screens.

### 2.5 The interface kit

The mod's custom panels (lobby, age window, magic menus, event menus) share one vocabulary. Colours below are sampled from the files named.

| Token | Hex | Sampled from |
|---|---|---|
| Panel field (slate-blue linen) | `#2a343b` `#2c363d` `#2e3940` | `anb_lobby_left_bg.dds`, `age_base.dds` |
| Panel inset / row | `#1e2327` `#21292e` `#191f22` | `PATRON_EMPTY`, magic menu body |
| Panel highlight rim | `#364047` `#52595d` | `age_base.dds` |
| Info panel field | `#1b2227` `#20272d` `#293238` | `AZKARE_INFO_WINDOW` |
| Body text on panel | `#cfccc7` | `desc_icesmith.dds` |
| Gold/bronze frame, highlight | `#ba8f56` `#b19065` | lobby frame, culture chip |
| Gold/bronze frame, mid | `#947142` `#9f7b44` `#916938` | chip, age base, advisor frame |
| Gold/bronze frame, shade | `#76572f` `#5c3f21` `#3b2816` | age base |
| Blue scroll ribbon | `#3d536a` `#2c3f52` `#1f2833` | `dlc_button_human.dds`, `bookmark_banner.dds` |
| Maroon caption ribbon | `#52221c` `#411c18` | loading captions |
| Orange-red header ribbon | `#924526` `#7c3007` `#672401` | "Information" header |
| Crimson drape | `#582019` `#461a14` `#2f110e` | `age_base.dds` top |
| Teal drape | `#164b5e` `#213641` | magic menu header |
| Button, steel blue | `#3c5064` `#2c3841` `#202931` | `spell_rage.dds` |
| Button, danger/close | `#6b4644` `#5a3634` | `magic_button_close.dds` |
| Title field (teal-black damask) | `#001b20` `#031e22` `#03232a` | `load_0.dds` |
| Wordmark silver | `#a6b6be`, shadow `#4f5f63` | `load_0.dds` |
| Parchment | `#edd1aa` `#e6c59c` `#b7895f` | `BLANK_eventPicture.dds` |
| Sepia ink | `#332212` `#62462c` `#7d6143` | `HRE_eventPicture.dds` |
| Female portrait frame (silver) | `#9d9c9d` | `noAdvisorType_female.dds` |

**Textures.** Panels are never flat: the slate field carries a fine linen or brushed-leather grain with a soft dark vignette; the title field is a teal damask with a ghost of a map in it; parchment has mottling and scorched edges.

**Frames and ornaments.** Thin bevelled gold rule with small corner knots (plain panels); rococo bronze filigree at corners and feet (age window, info window, country-shield cartouche); the double gold hairline (title card and loading frame); cloth drapes across the top of tall panels; rolled-scroll ribbons for headings; lozenge-capped bronze bars for buttons; round bronze-ringed medallions for icons; a blank steel heater shield with gold rim as a flag holder (`lobby_shield.dds`).

**Components worth copying outright.**
- *Region card* (`bookmark_<region>.dds`, 240×113): dark panel, painted vignette bleeding in from the right, blue ribbon title, two-line white serif pitch. The pitches are canon copy and usable as-is, for example Escann: "Orcs, adventurers building nations, powerful mage kings, wood elves and fey forests."; The Serpentspine: "Underground wonders, dwarven reclaimers, goblin clans & orcish warbands."; Bulwar: "A sun god, elven successor states and resurging monstrous races."; Cannor: "Birthplace of empires and revolutions, halflings, vikings & gnomish-kobold rivalry." All fifteen are in the catalog `caption` fields.
- *Culture chip* (`dlc_button_*.dds`, 301×74): a 60 px gold-framed portrait, a blue ribbon reading "Primary Race", the race name beneath.
- *Spell button* (`spell_*.dds`, 547×32): steel-blue bar in a bronze frame with pointed end-caps, white bold serif with dark outline, round icon at the left, grey when unavailable.
- *Portrait frame*: gold bevel for male files, silver for female, blue for mechanim.

**Typography.** Every label I read is a serif: white old-style (Garamond-like) text with a dark outline on panels and ribbons; the ANBENNAR wordmark is wide, high-contrast engraved capitals with a taller initial A in bevelled silver, set over a longsword with a round pommel and a crescent-shaped crossguard. Map plaques use a chancery italic or blackletter-leaning script. I saw no sans-serif lettering in the mod's own art. My suggestion for the web build (a suggestion, not something found in the files): Cinzel or Cormorant SC for display capitals, EB Garamond or Cormorant Garamond for Latin body text, a Song/Ming face such as Noto Serif SC for Chinese, with the same white-on-slate and ink-on-parchment pairings.

**Suggested tokens.**

```css
:root{
  --anb-title:#031e22;   --anb-panel:#2c363d;  --anb-panel-inset:#1e2327; --anb-panel-rim:#364047;
  --anb-gold:#ba8f56;    --anb-gold-mid:#947142; --anb-gold-deep:#5c3f21;
  --anb-ribbon-blue:#2c3f52; --anb-ribbon-maroon:#52221c; --anb-ribbon-orange:#7c3007;
  --anb-parchment:#e6c59c; --anb-parchment-edge:#b7895f; --anb-ink:#332212;
  --anb-text:#cfccc7;    --anb-silver:#a6b6be;
  --anb-dameria:#117d8d; --anb-wex:#662d91; --anb-gawed:#2f2f49; --anb-corin:#e7675a; --anb-jadd:#c1590d;
}
```

Use slate-and-gold for system chrome (menus, sheets, combat), parchment-and-ink for anything written in the world (journal, letters, maps, event text), and keep the painting the only saturated thing on a scene screen.

## 3. Best picks

IDs are catalog IDs. "Clean" means the `export_nocaption` file (2048×908) with the ribbon cut off.

### Title screen
- **Backdrop:** `ck3.loading.The_Landing` — the elven fleet entering harbour at night under a crescent moon. It is the founding image of the setting, it is dark enough to sit behind a menu, and at 5000×2812 it survives any crop. Alternates: `eu4.loading.10` (The Struggle; near-abstract gold on blue), `eu4.loading.18` (Hall of Ancestors; symmetrical).
- **Wordmark:** rebuild from `wiki.Anbennar_logo-white` (1042×271, transparent). Do not ship `eu4.loading.0` or `vic3.soundtrack_card` as they contain Paradox logos; use them as reference for the teal damask field and double gold rule.

### Campaign covers
| Campaign | First choice | Why | Alternates | Map |
|---|---|---|---|---|
| 1022 | `ck3.loading.Battle_of_Damesteeth` | Damerian knight in crescent tabard before a harbour town, burning ships; daylight contrasts with the title screen | `ck3.loading.The_Landing`, `ck3.loading.Barry` (feast hall) | `ck3.bookmark.bm_2000_test` (inked parchment Dameshead); `wiki.1001_AA_-_Bulwar_Before_Jaher_s_Landing`, `wiki.Jaherian_Eastern_Campaigns` for Bulwar |
| 1444 | `eu4.loading.5` (The Slaughter at Rottenstep) | the mod crops this painting for its "Age of Monsters" banner; knight against the Greentide | `eu4.loading.8` (Corin), `eu4.loading.21` (Emperor Lothane III) | `wiki.EoA_1444` (every imperial state labelled), `wiki.Escann_Map` |
| 1836 | `eu4.loading.2` (Hierarch Class Battleship) | the only industrial painting; the mod crops it for its "Age of Artificers" banner | `eu4.event.dwarovar.DWARVEN_RAIL`, `eu4.event.AIRSHIP_SKYPORT`, `eu4.great_project.feiten_aerodrome` (all small) | `wiki.Vicky3Anbennar` (1836 world, Paradox screenshot — reference only), `wiki.Trollsbay_Region` |

The mod's four age banners are crops of four of these paintings, and its localisation names the ages Age of Monsters, Age of Unraveling, Age of Witch-Kings and Age of Artificers. That gives a ready visual arc: Rottenstep → the God Fragment → the Black Demesne → the ironclad `[eu4: gfx/interface/ages/age_of_*.dds]`, `[eu4: localisation — age_of_discovery … age_of_revolutions]`. (In `[eu4: interface/ages_view.gfx]` the first two ages currently share the Rottenstep file, with a comment about swapped icons, so the God Fragment banner may not show in game.)

### Backdrops by region
| Region | Paintings | Sketches and thumbnails |
|---|---|---|
| Empire / western Cannor | `eu4.loading.21`, `ck3.loading.Barry`, `ck3.loading.Battle_of_Damesteeth` | `eu4.event.HRE`, `eu4.event.LILAC_WARS`, `eu4.event.WEX_PRECIPICE`, `eu4.great_project.teal_keep` |
| Escann (东坎诺) | `eu4.loading.5`, `eu4.loading.8`, `eu4.loading.9` | `eu4.event.ADVENTURERS_ESTATE`, `eu4.event.racial.ORC_WITH_AXE`, `eu4.event.UNDEAD_ARMY`, `eu4.great_project.bal_hyl`, `eu4.great_project.bladeskeep` |
| Deepwoods | `eu4.loading.27` | `eu4.event.WOOD_ELF_HUNT`, `eu4.event.FEYFOREST`, `eu4.event.TREANTS`, `eu4.event.racial.WOOD_ELVEN_THRONE_ROOM`, `eu4.great_project.feyrealm_portal` |
| Serpentspine / Dwarovar | `eu4.loading.1`, `eu4.loading.18`, `eu4.loading.29` | `eu4.event.dwarovar.FORGE`, `eu4.event.dwarovar.DWARVEN_RAIL`, `eu4.event.CAVE`, ten `eu4.great_project.dungeon_*`, `ck3.terrain.dwarven_hold` |
| Bulwar | `eu4.loading.4`, `eu4.loading.11`, `eu4.loading.10` | `eu4.event.bulwar.*` (five), `eu4.event.GENIE_RUINS`, `wiki.Azka-Sur`, `wiki.University_Ulmis_Idiqlat`, `wiki.Bulwar_Artistic_Map` |
| Kheterata, Sarhal | `eu4.loading.33`, `eu4.loading.36`, `eu4.loading.22`, `eu4.loading.28` | `eu4.event.SARHEL_MENGI_TEMPLE`, `eu4.event.LIZARDFOLK_NAGA`, three `HAGS_*`, `wiki.Tower_of_Muhaqaar` |
| Rahen | `eu4.loading.3`, `eu4.loading.30`, `eu4.loading.32` | `eu4.event.racial.TIGER_THRONE`, `eu4.event.ELEPHANT_KING`, `eu4.event.WAR_ELEPHANT`, `eu4.great_project.palace_of_divine_call` |
| Haless | `eu4.loading.12`, `eu4.loading.13`, `eu4.loading.15`, `eu4.loading.16`, `eu4.loading.23` | forty `eu4.event.rending.*`, `eu4.event.TREASURE_FLEET_SHIP`, `eu4.event.racial.ONI_FORTRESS`, `eu4.great_project.sarisung` |
| Forbidden Plains | `eu4.loading.6`, `eu4.loading.26` | `eu4.event.CENTAUR_CAMPFIRE`, `eu4.event.OGRE_FEAST`, `eu4.event.OGRE_YETI_SMITHING` |
| Aelantir | `eu4.loading.14`, `eu4.loading.19`, `eu4.loading.24`, `eu4.loading.25` | `eu4.event.HIGH_TEMPLE_CITY`, `eu4.event.HIGH_TEMPLE_IN_DISTANCE`, `eu4.event.EFFELAI_*`, `eu4.event.racial.MECHANIM_AWAKENING`, `wiki.Nanru_Nakar_by_Bee` |
| Insyaa, Kanolowele | `eu4.loading.31`, `eu4.loading.34` | `eu4.event.gene_pillars.GENE_PILLAR_SPIRIT` |

### Backdrops by scene type
- **Battle:** `eu4.loading.5`, `eu4.loading.19` (ice magic on a snowfield), `eu4.event.UNDEAD_ARMY`, `eu4.event.WAR_ELEPHANT`, `eu4.event.racial.HARPY_IMMORTAL_FIGHT`.
- **Court and council:** `eu4.loading.27`, `eu4.loading.11`, `eu4.loading.30`, `eu4.event.MAGES_ESTATE`, `eu4.event.PIETY`, `eu4.event.racial.DIVERSE_COURT`, `eu4.event.bulwar.SUN_CULT_DEBATE`.
- **Tavern and feast:** `ck3.loading.Barry`, `eu4.event.OGRE_FEAST`, `eu4.great_project.dungeon_stramolgiv` (a dwarven brewery). This is thin.
- **Dwarven hold:** see the Serpentspine row; this is the best-served scene type in the whole corpus.
- **Forest:** `eu4.loading.14` (blood-red birch wood), `eu4.event.DARK_FOREST`, `eu4.event.FEYFOREST`, `eu4.event.WOOD_ELF_HUNT`.
- **Sea and ships:** `eu4.loading.12`, `eu4.loading.35`, `eu4.loading.33`, `eu4.loading.2`, `ck3.loading.The_Landing`.
- **Magic and study:** `eu4.loading.7`, `eu4.event.FIREBALL`, `eu4.event.MAGE_MOON`, `eu4.event.MAGIC_STUDY_AND_RELAX` (a witch-hatted mage at a cluttered desk with a raven — the best "character sheet" backdrop).
- **Villainy:** `eu4.loading.9`, `eu4.event.APOSTLE`, `eu4.event.THE_COVENANT`, `eu4.event.racial.ONI_HUMANS`, `eu4.event.COMBINED_HAGS`.
- **Road and ambush:** `eu4.event.racial.GOBLIN_AMBUSH`, `eu4.event.racial.MULTI_RACIAL_MERC`, `eu4.event.DRAGON_ATTACK`.
- **Blank surfaces:** `eu4.event.BLANK` (clean parchment strip), `wiki.Sorrow_paper` (pale blotched paper), `ck3.bookmark.bm_2000_test` (inked map).

## 4. Key characters who have canonical art

| Name | Who they are | Era | What the art shows / hooks | Source image |
|---|---|---|---|---|
| Corin | Red-haired adventurer who fought the Greentide; later the Corinite war goddess (科琳教) | 1444 | plain steel plate, crimson cloak, bare-headed on a green hill with a ruined castle; no crown, no halo | `eu4.loading.8`; `[wiki: Corin]` |
| Lothane III síl Wex | Ruler of Wex (born 1401), Emperor of Anbennar 1422–1470; his election opened the Fourth Lilac War | 1444 | grey hair, heavy moustache, ornate plate, purple-gem pendant, purple-roofed castle on a crag; painted as an older man than his 43 years at the start | `eu4.loading.21`; `[wiki: Lothane III síl Wex]`, `[eu4: history/countries/A30 - Wex.txt]` |
| Jaddar Jexiszuir | Sun elf born 1161, ruler of the Jaddari since 1310; founder of the Jadd, self-declared heir of the Phoenix Empress | 1444 | orange turban, dark hooded cloak, longbow and sabre, desert gate | `eu4.loading.4`; `[wiki: Jaddar]`, `[eu4: history/countries/F46 - Jaddari.txt]` |
| Laskaris the Conqueror | Kheionai commander, Kylakas of Ameion 1432–1461, conqueror of Taychend | 1444 | blue skin, bronze cuirass, purple-crested helmet, seated under an autumn tree above a city of broken arches | `eu4.loading.24`; `[wiki: Laskaris the Conqueror]` |
| Carodin II Vyrekynn | Born 1414; heir of Arverynn in 1444 under his father Calrodiy IV, later ruler; founded the Veykodan Guard | 1444 | green hair, jewelled gold crown, teal-and-gold robes, sword and prayer beads | `eu4.loading.25`; `[wiki: Carodin II]`, `[eu4: history/countries/G35 - Arverynn.txt]` |
| Sykar I Riverclaw | Lizardfolk ruler of Rayaz from 1420 (born 1403), chosen by the naga to lead toward the "333rd and final Empire" | 1444 | blue-and-yellow scales, red war paint, striped cloak, spear and hide shield | `eu4.loading.22`; `[eu4: history/countries/L95 - Rayaz.txt]`, `[eu4: localisation — L96_the_rival_city_desc]` |
| Grun Strongbellow | Dwarven inventor of Silverforge, 15th–16th centuries | 1444 | red beard, goggles, blue coat, tool belt, blueprints; a paddle steamer on the lake behind him | `eu4.loading.29`; `[wiki: Grun Strongbellow]` |
| Guru Suhan | Harimar guru from Guhe, founder of Suhan's Praxis in the mid-fifteenth century | 1444 | lamp-lit palace room; seated harimar in red patterned robe and a small gold-scaled kobold in monk's wrap | `eu4.loading.30`; `[wiki: Guru Suhan]` |
| Harimar the Great | First leader of the harimari, founder of the Harimraj | ancient | lion-maned giant in gold lamellar over a canal city of balconies and red awnings | `eu4.loading.32`; `[wiki: Harimar]` |
| The Faceless Queen | Uniter of the Shuvüüsh tribes of northern Haless; terror-bird cavalry | not dated in what I read | blank white mask, blue steppe robe, red beads, recurve bow, a bridled giant bird | `eu4.loading.16`; `[wiki: Faceless Queen]` |
| Ayana zor Dejen | Mengi hero who killed the hag Hireet (who died in 1777) | c.1777 | silver beaked half-mask, feathered crown, blue-white robes with gold discs, canyon city | `eu4.loading.36`; `[wiki: Hireet Smoketusk]` |
| Barry Moonbeam | Wexonard moon-elf baron of Amberflow from 1020, "Knight of the Empty Mug" | 1022 | stout, laughing, purple and gold, beer mug raised in a feast hall; family arms bear a padlock and a barrel | `ck3.loading.Barry`, `wiki.MoonbeamCoA`; `[wiki: Barry Moonbeam]` |
| Auci Eightborn Dameris | Queen of Dameria, wife of Munas Moonsinger, mother of the first half-elf | c.1000 | white-haired woman in a blue gown on battlements, seen from behind | `wiki.Auci_Dameris` (crop of The Landing); `[wiki: Auci Eightborn]` |
| Jaher ta'Diranhriá | Sun King of Bulwar, Emperor of the Phoenix Empire | 1022 | rough sketch: long hair, armour with a sun-wheel breastplate | `wiki.Jaher`; `[wiki: Jaher ta'Diranhriá]` |
| Jaerel and Elizarian Jaherzuir | Jaher's line; Jaerel was the second Phoenix emperor | 1022–1137 | green-tinted "chronicler's sketches": diadem and sun disc; visored helm and inscribed greatsword | `wiki.JaerelJaherzuir`, `wiki.Elizarian_Jaherzuir` |
| Narawen Drennen, Alara Cenág, Oberon Fealgarn, Bricena Myna, Cinrthir Elyn, Irvah Ayleth | Wood-elf clan leaders at the Conclave of Elynáile that forged the Verdant Pact | 1444 | six character crops: red cape and travelling leathers; green-black leather with sword; fur mantle, arms spread mid-shout; silver leaf tiara | `eu4.loading.27` and `wiki.*` crops; `[wiki: Conclave of Elynáile]` |
| Aucanna Silistra "Ironside" | Duchess of Istralore 1443–1467 | 1444 | short hair, plate, ermine-spotted tabard, helmet under arm | `wiki.Aucanna_silistra` |
| Alvar IV "the Shining" síl Verne | Duke of Verne 1443–1478 | 1444 | red hair and moustache, white-and-gold armour, frieze of silver crescents | `wiki.Alvar_IV_the_Shining` |
| Ghurad Heartgrinder | Orc chieftain who left the Greentide after Rottenstep | 1444 | scarred, tusked, skull pendant, sword on back | `wiki.Ghurad_Heartgrinder_(2)` |
| Kraig Balgarsblood | Stone-dwarf leader of the Iron Hammers company | 1444 | wolf-pelt hood, raven on shoulder | `wiki.Balgarsblood` |
| Derhilde Reaverqueen | Gerudian reaver who carved out Deranne | not dated in what I read | shield-woman with spear on a cliff, longhouses burning | `wiki.Derhilde-reaverqueen-on-art-by-rubennar` |
| Hireet, Ilfani, Komina | The hags of the Coven of Yezel Mora | to 1777 | three ink portraits in one twisted-tree hut, plus pencil studies in "humanoid disguise" | `eu4.event.HAGS_*`, `wiki.Hireet`, `wiki.Illfanil`, `wiki.Komina` |
| Aakhet the Bronze | Bronze dragon who ruled Kheterata in human guise | long-lived | smirking crowned man with dragon wings over a burning city | `eu4.event.AAKHET_DRAGON_SMUG`, `wiki.Aakhet_the_Bronze` |
| Lithiel Oathkeeper, Elrandar Silverspite, Erankar the Defiant | Empress of Aelnar; relic-lord of Taychend (1609); rival of Laskaris | 1444–1600s | stylised fan portraits | `wiki.Lithiel-oathkeeper`, `wiki.Elrandar_Silverspite_by_Lusa`, `wiki.Erankar_Deck_of_Cards` |

## 5. Portrait coverage by race

`[eu4: gfx/interface/advisors/]` holds 1,290 portraits at 77×77 with the frame baked in. Each set has the same 22 roles (listed in every catalog portrait entry). File pattern: `<set>_<role>[_female].dds`. Roles map loosely onto classes (court_mage → mage, inquisitor/theologian → cleric, commandant/army_reformer → fighter, spymaster → rogue, navigator → ranger/sailor, natural_scientist → artificer, artist → bard).

| Set | What you see | Genders |
|---|---|---|
| dwarven | braided beards, helms, goggles, a monocle | M + F distinct |
| gnome | dyed hair, goggles, pointed hats, ruffs | M + F distinct |
| sun_elf | tan elves in turbans and Bulwari dress | M + F distinct |
| exodus_goblin | green long-nosed goblins in turbans and headscarves | M + F distinct |
| green_orc / gray_orc | one set in two skin colours; morions, fur hats, braids | M + F distinct |
| black_orc / brown_orc | one set in two skin colours; purple helms, bone masks | M + F distinct |
| blue/gold/green/redscale_kobold | one set in four colours; dragon heads in tricornes, wigs, ruffs | female = male art |
| gnoll | hyena heads in red veils | M + F distinct; no court_mage |
| harimari | tiger heads in turbans; a white tiger mage | M + F distinct |
| hobgoblin | red skin, kabuto-style helms, topknots | 9 of 22 female reuse male |
| ogre / oni | pale tusked ogres; red horned oni in Japanese-style dress | M + F distinct |
| giantkind | blue-purple tusked trolls in furs | M + F distinct |
| harpy | feather-crested women | female only |
| lizardfolk / ashhana_lizardfolk | frilled lizards; crocodile-snouted Ashhana | female = male art |
| mechanim | teal metal faces, some overgrown | one set, blue frame |
| caamas, kheionai, peitar, selphereg, snecboth, taychendi, tuathak | seven ruinborn-elf peoples: bronze-masked red skin; blue skin with Corinthian helms; tattooed forest elves; spring, winter and autumn courts; brown-skinned bearded Taychendi | M + F mostly distinct |
| vyzemby | dark-skinned halflings in feather headdresses | M + F distinct |

The "female = male" and recolour claims are measured (pixel difference and grey-level correlation between files).

**Races with no portrait set in the repository:**
- **Humans of every culture.** `[eu4: interface/anb_advisors.gfx]` points the alenic, white_reachman and grombar_half_orc sprite sets at vanilla `cossack_*` files, gerudian at vanilla `russian_*`, and wexonard at vanilla names. None of those files is in the repo; they are Paradox art. Only seven human *court mages* exist (generic, Bulwari, Halessi, Insyaan, Raheni, Sarhali, south-east Halessi), two files each.
- **Cannorian elves** (moon and wood elves): the `elven` sprite set resolves to the sun-elf art.
- **Half-elves, Cannorian halflings, half-orcs, centaurs, generic goblins and generic ruinborn**: no sets. Half-orcs fall back to vanilla art.
- Single race illustrations exist only on the wiki: `wiki.Half-elf` and `wiki.Halfling` (by Valorique), `wiki.Elf_Racial_Screen_Art`, `wiki.Gnome`, `wiki.Harpy`, `wiki.Centaur`, `wiki.Goblin`, `wiki.Orc`, `wiki.Kobold`, `wiki.Troll`, `wiki.Gnoll`, `wiki.Fathide_Ogre`, `wiki.Lizardfolk_Portrait`, `wiki.Hobgoblin`, `wiki.Dwarf_Racial_Screen_Art` (132×150).

A western-Cannor party of human knight, elf mage, halfling rogue and half-orc sellsword — the default D&D line-up, and the natural cast for 1022 and 1444 — therefore has **no ready portraits at all**. That is the largest art gap.

## 6. Nations and factions as visual kits

Chinese names are from the community project in `zh/timeline` (tag-keyed `nameZh`), copied into `12_flag_tags.json`.

| Side | Flag as seen | Colours | Scene art | Opposed to (visually and in canon) |
|---|---|---|---|---|
| Empire of Anbennar (安本纳尔帝国) `Z01`, Wex (威克斯) `A30` | quartered teal/white with crescents, wyvern, eagle, dove inescutcheon; white tower on purple | teal `#117d8d`, purple `#662d91` | `eu4.loading.21`, `eu4.event.HRE`, `wiki.EoA_1444` | Dameria's Silmuna remnant; Lorent and Gawed, both shown holding "occupied imperial land" on the 1444 map |
| Dameria (达梅里亚) `A58`, Sons of Dameria (达梅里亚之子) `B07` | ships and silver crescents on teal and dark grey; great crescent on teal over tan | teal, silver, charcoal | `ck3.loading.*`, `eu4.event.LILAC_WARS`, coin `wiki.Dame_Coin` | Wex and the Rose Party |
| Lorent (洛伦特) `A01` | rose-star roundel on lilac over green | `#a880ba`, `#4c833d`, red rose | `wiki.ThornFormation` (diagram only) | the Empire (Lorent occupies Ordóin and Roilsard on the 1444 map) |
| Gawed (加韦德) `A13` | gold eagle on navy | `#2f2f49`, `#cfad67` | `wiki.Gawedi_Tribes` | the Empire (Gawed occupies Tenbury and Westmere on the 1444 map) |
| Corintar (科琳塔尔) `B02` and Escanni adventurers | white sword on red shield on coral; company badges (crossed axes, wheel, chevrons) | `#e7675a`, white | `eu4.loading.8`, `eu4.loading.5`, `eu4.event.ADVENTURERS_ESTATE` | The Greentide (绿潮) `B01`: red-eyed claw glyph on olive |
| Black Demesne (黑暗领域) `Z99`, Black Castanor (黑卡斯塔诺) `Z34` | horned skull in a ring of grey flame on black; black dragon on white | black, wine, magenta | `eu4.loading.9`; generic sketches that fit: `eu4.event.UNDEAD_ARMY`, `eu4.event.APOSTLE` | everyone outside its magocracy: the ideology aims to unify Halann under mages `[wiki: Black Demesne]` |
| Castanor (卡斯塔诺) `B32` | white dragon rampant on white | white, grey | CK3 stained-glass icon | — |
| Dwarven holds: Amldihr `I01`, Krakdhûmvror (冰霜锻炉) `I02`, Verkal Gulan (金堡) `F47`, Aul-Dwarov (众矮人之国) `I24`, Silverforge (银锻炉) `A73` | angular knotwork; three gold rune pillars; anvil with blue flame | navy, gold, gem colours | `eu4.loading.1`, `eu4.loading.18`, `eu4.loading.29` | goblin clans and orc warbands of the Serpentspine |
| Magisterium (魔法师议会) `A85` | pale-blue star ringed by eight orbs (orange, yellow, cyan, white, green, red, purple, black) on grey | grey plus the eight orb colours | `eu4.event.MAGES_ESTATE`, `eu4.event.MAGIC_STUDY_AND_RELAX` | not checked |
| Jaddari (贾达尔军团) `F46`, Jadd Empire (贾德帝国) `F51` | white sun on orange; rayed sun with flame ring | `#c1590d`, white | `eu4.loading.4`, `eu4.loading.10` | the older Sun Cult of Bulwar |
| Phoenix Empire (凤凰帝国) `F38` | gold phoenix on white | gold, white | `wiki.Jaherian_Eastern_Campaigns`, `wiki.Zanite_phoenix` | the states it overran: the maps date the Jaherian conquests 1001–1127 |
| The Command (命令秩序) `R62` | black wolf's head on a black banner over rust | `#6b341f`, black | `eu4.loading.13`, `eu4.event.racial.ONI_THINK_HOBGOBLIN`, `wiki.Hobgoblin_Invasion_of_Shamakhad_Map` | Rahenraj (罗祆罗阇) `R71`: white lotus on dark red |
| Kheterata (赫特拉塔) `U01`, gnoll states `U07`/`U09` | winged red drop over rays; hyena skull on black | orange, black, bone | `eu4.loading.33` | each other: the Gunpowder Xhaz brought Kheterata to the brink `[wiki: Horutep]` |
| Venáil (维奈尔) `A21`, Aelnar (埃纳尔) `Z43` | pale swan-ship on navy; blue compass-star | navy, ice blue | `ck3.loading.The_Landing` | — |
| Small Country (小人国) `A97`, Nimscodd (尼姆斯科德) `A06`, kobold clans | wheat-sheaf shield on a four-colour saltire; pink cog on grey | bright quarters; grey and pink | `eu4.loading.2` (gnomish ironclad), kobold portraits | gnome–kobold rivalry on the Dragon Coast |

## 7. What the art supports as marquee story beats

The mod's artists chose to paint these scenes; a campaign that passes through them gets a finished backdrop.

- **1022:** the Landing of the elven fleet at Damesear in 1000 AA `[wiki: The Landing]`; the Battle of the Damesteeth; the feast of Barry Moonbeam, the Wexonard baron of Amberflow.
- **1444, Escann:** Rottenstep, "the Last Battle of Chivalry" `[wiki: Battle of Rottenstep]`; Corin on the hillside; the Black Demesne's tower as the magocratic end-state `[wiki: Black Demesne]`.
- **1444, Deepwoods:** the Conclave of Elynáile arguing its way to the Verdant Pact `[wiki: Conclave of Elynáile]`.
- **1444, Bulwar:** the Samartal Summit — the wiki calls it the Tragedy of Samartal (1491), conceived as a summit of sun-elf and Bulwari notables at an estate outside Kumarkand, after which the mod speaks of "the ashes of Samartal" and the death of the notables of Bulwar `[wiki: Tragedy of Samartal]`, `[eu4: localisation — flavor_vacyn.4.d]`; the painting shows the gathering, not the bloodshed.
- **Dwarovar:** standing before the Hero's Gate, "the most famous of the Three Golden Gates of Verkal Gulan" `[eu4: localisation — heros_gate_desc]`, then the Hall of Ancestors in Amldihr.
- **Religion:** the finding of the God Fragment, core of the Ravelian faith (揭秘教) `[wiki: God Fragment]`.
- **Haless, later:** the Rending of Realms, about 1751–1783 `[wiki: Rending of Realms]`, with forty spirit plates in three moral states.
- **1836:** the Hierarch-class battleship `[eu4: localisation — nimscodd_the_hierarch]`, dwarven rail, airship skyports.

## 8. Everyday and sensory detail visible in the art

- **Money.** The imperial silver penny, "the Dame": a dove with a sprig ringed by AESRIALT SIL ANBENNAR on one side, the crescent moon and four stars ringed by AUCI DAME on the other. Copper farthings are "Beggas", gold coins "Crowns"; the saying goes "Damescrown is nothing but Dames, Crowns, and beggars..." `[wiki: Coinage]`, `wiki.Dame_Coin`.
- **A Wexonard feast:** gothic windows, amber light, mugs raised in a toast, a lord in purple with a thin gold circlet (`ck3.loading.Barry`).
- **An ogre table:** a row of fat diners shoulder to shoulder behind platters and mugs (`eu4.event.OGRE_FEAST`); an ogre smith at a brick forge while his neighbour drinks (`OGRE_YETI_SMITHING`).
- **A hobgoblin home:** bare timber hall, paper-screen walls, a father with a sword in the doorway, a child holding a toy sword, red clan banners outside (`eu4.loading.13`).
- **A dwarven brewery:** copper vats, stacked barrels, pipework (`eu4.great_project.dungeon_stramolgiv`); dwarven rail with boxy carriages in an angular station (`DWARVEN_RAIL`).
- **A mage's study:** raven on a perch, crescent moon in the window, globe, skull, a tall pointed hat (`MAGIC_STUDY_AND_RELAX`). Court wizards wear wide-brimmed pointed hats and stand beside fur-robed kings (`MAGES_ESTATE`).
- **Bulwar:** red-and-ochre pointed arches, wind-tower turrets, white banners with gold suns, reflecting pools, palms; terraced "sun gardens"; ziggurats with blue shrines (`eu4.loading.11`, `SURAKES_SUN_GARDEN`, `wiki.The_Temple_of_Eduz-Vacyn`).
- **Rahen:** harimari rulers under cusped arches and lattice screens with turbaned human viziers; canal cities with stacked balconies, red awnings and market boats; elephants beside stooping field hands (`TIGER_THRONE`, `eu4.loading.32`, `ELEPHANTS_AND_PEASANTS`).
- **Kobolds wear Cannorian hats** — tricornes, bicornes, powdered wigs, ruffs — over dragon faces (advisor sets). Goblins carry long spiked flintlocks and goggles (`GOBLIN_GUNNER`).
- **Dress by people:** Damerian soldiers in kettle helms and dark-blue gambesons under crescent banners (`wiki.Rean_Aranern`); wood elves in leather, fur mantles and silver leaf tiaras; Kheionai in bronze cuirasses and crested helmets; winter-court elves in fur parkas and snow goggles; autumn-court elves crowned with leaves.
- **Sacred art:** Cannorian cults as stained-glass lunettes; the Regent Court's empty silver throne; Corin's sword on a red shield; Begga Goodfingers, the halfling-born goddess of charity called Lady Luck, whose sign is "coins, in a circle, in a beseeching palm" and whose chief temple is at Beepeck `[wiki: Begga Goodfingers]`, `wiki.Begga_Goodfingers`.

## 9. Credits and licence

**Mod repositories.** None has a licence file. `[eu4: Anbennar-PublicFork.mod]` and `[ck3: descriptor.mod]` are bare descriptors; `[vic3: README.md]` is the unedited GitLab template. The in-game credits `[eu4: interface/credits.txt]` list these *Artists*: Blaziy, Denormos, Drakeven, Fwaser, Helgi, jalle7370, Jojo, Karguin, Lambo12233, murphyslawbroke, Oxtrooo, RightHandSun, Schwendigo, Sovereign, Tators, TheForsaken, trashboat, Trumble Bumpet, Valorique, Walthorn.

**Per-image attribution I could establish:**

| Work | Artist | Evidence |
|---|---|---|
| `load_1` Hero's Gate, `load_5` Rottenstep, `load_28` Zatsarya; Azka-Sur, Eduz-Vacyn, University of Ulmis Idiqlat | Biegeltoren | wiki file pages ("Made by Biegeltoren") |
| `load_8` Corin, `load_21` Lothane III, `load_29` Grun Strongbellow, `load_35` harpy captain, `load_27` Conclave; CK3 `Barry`; wiki Half-elf, Halfling | Valorique | signature on the paintings; wiki file pages |
| `load_24` Laskaris; Nanru Nakar | "Bee", commissioned by Bojnik | wiki file pages |
| `load_31`, `load_34` | monogram "MW" | on the paintings |
| `load_33` Gunpowder Xhaz | "@noway_JIN" | written on the painting |
| `load_30` Guru Suhan | orange signature (reads like "Hugo '25") | on the painting; uncertain reading |
| Chronicler Academia maps (Escann, Haless, Rahen, Serpentspine, Harpy Matriarchies) | Stefus | file pages and uploader |
| Order of Chroniclers maps (Taychend, Andeios, Cannor 300 BA) | Takasaki | file pages |
| `EoA_1444`, `Iochand_1263` | Rhó Lavelle | file pages |
| `Bulwar_1417` | "Chronicler Jandi Alvez" (attribution requested on the page) | file page |
| `Anbennar_Region_Map` | Draco Lazarus (DeviantArt) | file page |
| character sketches | Loop; u/Deck_of_Cards_04; Lusa; Trumble; Crayonling; RuBennar; u/Eldritch_Fruits | file pages |

Every catalog entry carries `credit` (when known), `uploader` and a `rights` line.

**Wiki.** Site licence is CC-BY-SA `[wiki: api siteinfo rightsinfo]`, which covers text; images carry their own status. Of the 393 downloaded: 21 state on their file page that they were made with Midjourney or Stable Diffusion (the Arverynn, Dovemarket, Newdocks, Red Night and Bilge cityscapes, the cave flora set, several sepia "photograph" portraits), 29 more look AI-made to me, 8 are third-party art from ArtStation or DeviantArt used as "examples", and 62 are Paradox screenshots or renders. All of these are tagged `do-not-use` or marked reference-only. About 270 remain usable with credit.

**Paradox material inside the mod.** I judged these to be vanilla art and tagged them `paradox-asset-suspect`: 27 `ab_*` age-ability icons, 14 `misc_great_projects` thumbnails, and most CK3 men-at-arms cards. File hashing confirmed that the CK3 cards are heavily duplicated placeholders (27 files, 18 distinct images). Only five look made for Anbennar: bladedancers, bladesworn, damerian_longbowmen, mages, wayknights. `eu4.loading.0`, `vic3.soundtrack_card` and `vic3.thumbnail` contain Paradox logos.

**A workable credit line**, modelled on the Chinese community project in the corpus, which credits "EU4 Anbennar团队及其贡献者", the Vic3 team and Paradox separately and grants no blanket licence `[zh: timeline/THIRD_PARTY_NOTICES.md]`: *"Setting and artwork from Anbennar, a fan-made total conversion for Europa Universalis IV, Crusader Kings III and Victoria 3 (gitlab.com/anbennar). Paintings by Biegeltoren, Valorique, Bee and other Anbennar artists; maps by Stefus, Takasaki and Rhó Lavelle. Not affiliated with the Anbennar team or Paradox Interactive."*

## 10. Gaps: scene types with no usable art

1. **Castonath (卡斯托纳斯) and Anbenncóst.** The two great cities of the western story have no painting at all. The only Cannorian street scenes are AI-made wiki images.
2. **Ordinary Cannorian places:** village, roadside inn, market square, farmstead, temple interior, harbour-side tavern, prison, camp at night. One feast hall is all there is.
3. **Human, elf, half-elf, halfling and half-orc portraits** (section 5).
4. **1022 as a whole.** Three paintings, one parchment map of the Dameshead, no political map of Cannor in 1022, no art of Castanor, the Sorcerer-King's aftermath, early Escann or Jaher in person beyond a rough sketch.
5. **1836 as a whole.** No factory, railway city, parliament, barricade, colonial port, trench or dreadnought-era battle that is safe to use; the Red Night crowd scene and the "viewcatcher" portraits are AI output; the 1836 world map is a Paradox screenshot. No art of the Damerian Republic, Grombar or the Trollsbay Concord beyond flags and maps.
6. **Gerudia, the Alenic Reach, Lencenor, the Small Country, the Borders:** flags and maps only.
7. **Dungeon interiors outside the Dwarovar:** no crypt, sewer, ruined keep, wizard's tower interior or Precursor vault interior.
8. **Combat close-ups and monsters:** one basilisk, one treant, one spider, dragons in sketch; no undead close-up, no fey creature, no demon apart from the gnoll Xhaz.
9. **Items and inventory:** two swords (Calindal, Dazinkion), one coin, one pendant (looks AI-made). Mission icons at 59×63 can stand in.
10. **A full-size world map with labels that is not a game screenshot.** `wiki.River_Map` (terrain) and the Draco Lazarus region map are unlabelled; the labelled world maps are Paradox renders.

New images should stay inside the four registers. The cheapest gap-fillers are sepia ink strips at 512×132: the style is forgiving and 100 real examples exist to match.

## 11. Technical notes

- **Formats.** 2,610 files with a `.dds` extension across the three mods: uncompressed BGRA 1,692; DXT1 287; DXT5 174; DXT3 133; 24-bit 34; DX10 header with DXGI 91 (BGRA sRGB) 285; DXGI 72 (BC1 sRGB) 1; DXGI 99 (BC7 sRGB) 1; and three PNG files wearing a `.dds` extension (`konolkhatep_disaster.dds`, CK3 `cult_of_balgar.dds`, `munas.dds`). Flags are TGA.
- **Decoding.** Pillow 13 refused DXGI 91 and 72 ("Unimplemented DXGI format"), and ImageMagick refused them too. I decoded DXGI 91 as raw BGRA and rewrote the DXGI 72 header as legacy DXT1; the BC7 file opened in Pillow. **No file remains unreadable.** The loader is `tools/artlib.py`; `tools/art_export.py` regenerates all conversions.
- **Wiki download.** The image host returned 403 for Fandom's default `revision/latest` URL from this environment but served `scale-to-width-down/…` and `format=original` requests. Images wider than 2,400 px were fetched at 2,400 (53 files; the catalog records `original_size`). Not obtained: `United_rivers_map.png` and `United_rivers_map2.png` (17917×8192; 403 and 409). I skipped 36 minor maps to stay under 400 files (listed in `tools/art_wiki_dl.py`). The wiki also holds about 760 images at 533×533 (almost all flags) and 755 at 128×128 that I did not fetch; the full list with URLs is `art/wiki_allimages.json`, and they are a higher-resolution source than the mod's 128 px flags.
- **Extra catalog fields:** `export`, `export_nocaption`, `art_box`, `frames`, `style`, `credit`, `rights`, `source`, `hires_alt` (seven loading paintings are on the wiki at up to 5000×2500 without letterbox); portrait sets add `roles`, `genders`, `filename_pattern`, `used_by_sprite_sets`.

## 12. Uncertainties and source conflicts

- **Identifications from caption plus lore, not from an explicit label:** `load_10` "The Struggle" as Surael's struggle against the Darkness (it matches `wiki.Surael` and Jadd doctrine text, but no file says so); `load_20` "The Herald of Change" placed in Sarhal because the name appears in lizardfolk event text; `load_35`'s harpy placed in Sarhal on the strength of a Nephiuéda dynasty mention; `load_34`'s mossy giant as the dragon turtle Grandfather Moss.
- **`load_17` "Castellos' Sacrifice":** the wiki's myth has Castellos lose an arm and a leg saving Adean from the dragon Malliath; the painting shows a robed god flying at a floating city and casting sigils. I could not match the two.
- **`load_30`:** the wiki says Guru Suhan was a harimar; I cannot tell from the image whether the seated harimar or the gesturing kobold is the teacher in the scene.
- **Era fit:** Ayana's painting belongs to the 1770s, not 1444. The Landing is 1000 AA, twenty-two years before the CK3 start. The Hierarch battleship belongs to EU4's late game, not strictly to 1836. Lothane III, Jaddar, Laskaris and Sykar I rule in 1444; Carodin II is only the heir of Arverynn then, although his caption calls him Lord; Harimar, Naegol, the Ascension and Castellos are ancient.
- **Wiki against mod on Lothane:** the wiki says he was Grand Duke Lothane VI of Wex until he took the name Lothane III on election in 1422; the EU4 history file names him Lothane III as ruler of Wex from 1417. I followed the mod for the name and the wiki for the reign as emperor.
- **Naming conflict:** the mod captions "The Samartal Summit"; the wiki article is "Tragedy of Samartal" and dates it 1491.
- **`wiki.Narawen_Drennen`:** the upload comment credits Valorique and the image is plainly a crop of the Conclave painting, but the file page text says "Made in Midjourney", probably left from an earlier upload.
- **AI and vanilla judgements** not backed by a file-page statement are my own reading of the image. Vanilla Paradox files are not in the corpus, so I could not compare against them directly.
- **Chinese names** come from one community project; a few are compound (Gawed appears as 加韦德／北方联盟) and one looks like a meaning-translation I could not confirm (Amldihr as 议会之门), so I left Amldihr unglossed above.
- **Glyph substitution:** EU4 localisation writes macron vowels with stand-in characters; I confirmed two (‹ = ū, € = ā, from Tūtū Pālimu) and normalised only those in the flag map.
