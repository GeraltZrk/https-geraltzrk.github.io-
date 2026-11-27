# Dossier 09 — Races, cultures, languages and names (character-creation reference)

Scope: every sapient people of Halann that a player or NPC could belong to, how each stands in 1022 / 1444 / 1836 AA, the culture groups, naming customs with name lists copied from the mod files, titles, calendar, money, oaths, languages, and how the D&D 5e classes map onto canon institutions.

Citation keys: [wiki: Page], [eu4: path], [ck3: path], [vic3: path]. Paths are relative to each mod root. Where wiki and mod disagree the mod is followed and the disagreement is listed in section 7.

---

## 1. Overview

Halann has no "common races" and "monster races" in the D&D sense; it has a legal and theological line that Cannorians drew and other people argued with. The doctrine of **monstrousness** dates to the First Pantheonic Council (600 BA) and Castan II Beastbane's Second Great Cleansing (declared 597 BA) [wiki: Pantheonic Councils; Castan Beastbane]: clergy ranked sentient creatures and called the lowest "Spawn", and war on Spawn was held to be justified whatever was done in it [wiki: Monstrousness]. The Vic3 mod writes the line down as game rules: non-monstrous = dwarves, elves, gnomes, halflings, half-elves, harimari, humans, mechanim and non-degenerated ruinborn; monstrous = centaurs, kobolds, gnolls, goblins, harpies, half-orcs, hobgoblins, lizardfolk, ogres, orcs, degenerated elves and trolls [vic3: localization/english, `concept_monstrous_race_desc`, `concept_non_monstrous_race_desc`]. In practice "no Human, Elven, Gnomish, Harimari or Halfling state was ever widely designated as monstrous", and the idea was dying by the early 1800s [wiki: Monstrousness].

The three eras differ sharply in who is visible on the surface of Cannor:

- **1022 AA**: humans, dwarves, halflings, gnomes, and — for only twenty-two years — elves. Half-elves are a single generation, none older than 21: the eldest, Marion "Firstborn" Silmuna (son of Munas Moonsinger and Queen Auci of Dameria, born 19 Yshdament 1001), is already King of Dameria, and the two-year-old half-elf Rean Siloriel is "Boy King" of Lorent; the wave conceived at the Grand Ball of 1021 are infants [wiki: Marion Silmuna; Timeline; ck3: history/titles/anb_k_dameria.txt; history/titles/anb_k_lorent.txt]. Kobolds hold the Dragon Coast, and the dragon Nimrith the Red lairs in the dwarven hold of Khugdihr with his kobold cult (478–1103) [wiki: Hold of Khugdihr]. Orcs and goblins are a dwarven problem underground. Harpies and gnolls have just been beaten in Bulwar by Jaher.
- **1444 AA**: the Greentide has dumped orcs and goblins into Escann; half-orcs are a new people; wood elves have just walked out of a thousand subjective years in the Feyrealm; dwarves are leaving the Empire to retake their holds; the hobgoblin Command is conquering Rahen.
- **1836 AA**: most peoples are citizens, subjects or slaves of industrial states; the question is no longer "are they Spawn" but tariffs, patents, abolition, and whether a built mind is a person.

The EU4 mod models coexistence with four tolerance levels per race — Primary, Integrated, Coexistence, Oppressed — plus Expulsion and Purge decisions; a race needs Integrated status and 30% of state development before it can supply the army [eu4: localisation/anb_racial_l_english.yml; localisation/anb_racial_pop_l_english.yml].

---

## 2. Facts

### 2.1 Race sheet: body, lifespan, homelands

Heights and lifespans are from the wiki infoboxes; the mod's in-game ruler tooltips sometimes give different lifespans (flagged M:) [eu4: localisation/anb_racial_l_english.yml, `GetRacialRulerTooltip*`].

| Race | Look | Lifespan | Homelands | Source |
|---|---|---|---|---|
| Human | 139–185 cm; every skin and hair tone | ~80; magic can stretch to 200 | everywhere | [wiki: Human] |
| Elf (moon/sun) | 160–195 cm; knife-shaped ears about as long as a hand; no wrinkles or infirmity, only the eyes cloud with age; rare pink/silver/green hair marks Precursor nobility; elves DO sleep | ~400 (M: ~300); adult in body at 18, culturally at 100 | Cannor, Bulwar, Aelantir | [wiki: Elf; Moon Elf] |
| Wood elf | as moon elf; digests bark, grass, rinds; senses fey | ~250 (M: ~200) | Deepwoods | [wiki: Wood Elf] |
| Ruinborn elf | dozens of types: bat-nosed Kwineh, teal-skinned Kheionai, bearded Taychendi, bronze-skinned Chendhyan, ear-cropped Ynnic knights | human | Aelantir | [wiki: Ruinborn Elf] |
| Half-elf | 170–180 cm; slightly pointed ears; sometimes silver hair | ~100 common | Cannor; Lupulan coast | [wiki: Half-elf] |
| Dwarf | 120–150 cm; men bearded, women not; magic-resistant | ~200 (M: ~150, "a century spent drinking will allow a dwarf to live a century longer yet") | Serpentspine; surface holds | [wiki: Dwarf] |
| Halfling | 90–120 cm; round ears; large hairy feet, styled and beaded; seven meals a day | ~80 | Small Country; Fahvanosy (Sarhal) | [wiki: Halfling] |
| Gnome | 90–120 cm; large lightly pointed ears; shoes; dyed hair | ~250 (M: ~200) | Dragon Coast, Esmaria, Kheterata delta | [wiki: Gnome] |
| Orc | 180–195 cm; tusks; green, gray, black or brown by ethnicity | ~70 | Serpentspine, Escann, Aelantir, Haless | [wiki: Orc] |
| Half-orc | 175–190 cm; small tusks; green/brown/gray tint | ~80 | Escann, Haless, Aelantir | [wiki: Half-orc] |
| Goblin | 110–130 cm; drooping ears, beak nose; skin drifts toward the colour of its surroundings over generations | ~60 | Serpentspine; later cities | [wiki: Goblin] |
| Hobgoblin | taller than Halessi humans; red-orange skin, yellow eyes, long dark hair worn in buns | not given | Jade Mines, Rahen, Yanshen | [wiki: Hobgoblin] |
| Kobold | 75–110 cm; scaled, tailed, wingless; warm-blooded; lays eggs; no visible sex difference | 40–50, elders to 120 (M: ~70) | Dragon Coast, Serpentspine, Yanshen, Insyaa | [wiki: Kobold] |
| Gnoll | 1.9–2.3 m; hyena-like, gray skin, patterned fur | human potential, 30–40 in practice | Salahad, Bulwar, Sarhal | [wiki: Gnoll] |
| Harpy | 157–173 cm; all female; separate wings plus arms (2.5–4% have "wing-arms"); dense muscle, not hollow bones; eyes blacken in rage | 60–80 (human father), 80–100 (elven father) | Harpy Hills; also Gerudia, East Sarhal, Khetapera, Vimdatrong, Nomsyulhan, South Aelantir | [wiki: Harpy] |
| Centaur | 230–249 cm, 315–635 kg; two hearts, two sets of lungs; throws any rider by reflex | to 80 | Forbidden Plains, Bulwar | [wiki: Centaur] |
| Ogre | ~3 m, ~270 kg; mages are born blue-skinned with pupil-less eyes | ~80 | Ogre Valley, Demon Hills, Serpent's Vale | [wiki: Ogre] |
| Oni (Horned Ogre) | red skin, horns, pupil-less orange-yellow eyes | as ogre | Demon Hills (Shirgrii), Yanshen | [wiki: Ogre] |
| Troll | 270–330 cm; regenerates; big nose, tusked maw | not given | Gerudia, Shadowswamp, Serpentspine, Gozengun | [wiki: Troll] |
| Harimari | 1.9–2.3 m bipedal tiger; no true lips (m, n, b, p are approximated); roar carries ~3 km | ~70, some past 100 | Rahen, wider Haless | [wiki: Harimari] |
| Lizardfolk | 180–210 cm; cold-blooded, sheds skin, semi-amphibious; sees two extra colours (nitukh, arut) but poor at distance | ~100 | Taneyas, South Sarhal | [wiki: Lizardfolk] |
| Mechanim | Precursor-steel body with a damestear core (kauga); genderless | "technically immortal" | Insyaa; later built everywhere | [wiki: Mechanim; eu4: anb_racial_l_english.yml] |
| Giants | true giants 4.5–8 m; colossi ~50 m | — | cloud castles; Yyl Möitsä (firbolg) | [wiki: Giants; Giantkin] |

Hybrids the CK3 mod defines: Gnomeling (gnome x halfling, always infertile), Half-Goblin (goblin x human/orc/elf, infertile; wiki name Voltoj, "strong ones"), Trollkin (troll x ogre, infertile), Ogrillon (orc x ogre; males infertile) [ck3: localization/english, `trait_race_*`; wiki: Goblin]. Half-elf is recessive, half-orc dominant in CK3's inheritance [ck3: `trait_race_half_elf_desc`, `trait_race_half_orc_desc`].

### 2.2 Race notes: temperament, how others treat them, three-era status

**Humans.** "Adaptable, most populous, highly ambitious." Creation myth: made by Agrados, god of war, as soldiers for the Godswar, "originated in sin" and living in repentance [wiki: Human]. From other races' side the EU4 events are blunt: humans "literally all look the same", breed fast, form angry mobs out of "the innate intolerance of humanity", and push other peoples out of jobs through sheer numbers [eu4: localisation/anb_racial_pop_l_english.yml, `human_tolerance_events.4–7`].

**Elves.** Sons of Venaan; survivors of the Precursor Empire's self-destruction (the Day of Ashen Skies, year 1) who wandered the sea for a thousand years. Life stages matter socially: Childhood to 16, Adolescence 16–100 (not taken seriously, not given authority; "it is this age where a great many elves begin a life of adventuring", often under a different name they later disown), Young Adulthood 100–200 (serious marriages to non-elves happen here), Adult 200–300, Elder 300+ (many retire to an elfrealm or the Silent Repose monastery). Fertility is roughly one elven child per seven human [wiki: Elf]. Human views: prized mistresses and court mages, resented master-craftsmen, villages that "remain unchanged over the course of a century" and block a town's growth, and a standing rumour of "Elven Puppeteers" running centuries-long plots [eu4: anb_racial_pop_l_english.yml, `elven_tolerance_events.5–9`]. Dwarves find them "prissy and impractical" [wiki: Dwarf].
- *Moon elves* followed Munas Moonsinger to Damesear at the Landing (1000 AA); "frail, tolerant, magically-oriented"; stereotypically pale and silver-haired [wiki: Moon Elf; Timeline].
- *Sun elves* followed Jaher ta'Diranhriá to Bulwar (1001), beat the gnolls and harpies in the Sunrise wars and founded the Phoenix Empire (dating differs: the Sun Elf page has him emperor two years after landing; the Timeline has him crowned King of Bulwar in 1001 and puts the "Rise of the Phoenix Empire" and the eastern campaigns at 1038; CK3 makes him holder of the kingdom of Bulwar from 21 Suren 1006 [ck3: history/titles/anb_k_bulwar.txt]). He was assassinated at Tianlou in 1127 [wiki: Timeline]. Since the council of Brasan (1201) every sun elf is theologically *Gumar*, "Chosen", heir to Jaher's duty to guide the Bulwari; many served as physicians, bureaucrats and priests, some abused it. Rural elven landowners are Ralkadezim. Offshoots: Desert Elves (legion veterans gone nomad in the Far Salahad, first followers of the Jadd), Sunrise Elves (stranded in Haless after 1137), Dawn Elves (Rezankand, South Aelantir, after 1516) [wiki: Sun Elf; Desert Elf; Sunrise Elf; Bulwari].
- *Wood elves* descend from Commander Liandel Speardancer's army, which withdrew into the Deepwoods after the Battle of Hornwood (spring 1017), crossed the Verdant Veil and spent over a thousand subjective years among fey and forest goblins while 400 passed outside. Society is the *salla* (clan, originally an army unit) led by a *ceann* / *ceanna*; expulsion from one's salla is the worst non-capital punishment. Mages are "druids" [wiki: Wood Elf; Wood Elven Culture]. CK3 creates the culture on 1017.5.1 [ck3: common/culture/cultures/anb_elven.txt].
- *Sea elves* never left the ships [wiki: Sea Elf].
- *Precursors* are "the setting's mythic aliens": immortal, glowing-eyed, never a first-hand source; outside Aelantir one should read as a god, not a person [wiki: Precursor Elf].
- *Ruinborn* is an outsiders' umbrella for all non-degenerated Aelantiri elves; they live human lifespans, and many cultures hold "there is a wrongness to the ocean". Degenerated elves (Bloodfeeders, Silent Watchers, Cursed Ones, Leechmen, Ice Sleepers, Seedthralls) are counted monstrous [wiki: Ruinborn Elf; eu4: anb_racial_pop_l_english.yml, `ruinborn_tolerance_events.8, .10`].

**Half-elves.** "True Anbennarians". The first recorded half-elf is Marion "Firstborn" Silmuna, born 1001 to Munas Moonsinger and Queen Auci of Dameria [wiki: Marion Silmuna]; many more were conceived at the Grand Ball of Anbenncóst (1021) [wiki: Timeline]. By the founding of the Empire (1221) the "half-elven" nobility was so entrenched that it married only itself; very few nobles are literal half-elves, they preserve "elveness" by intermarriage. The eight Silver Families (Sil + elven ancestor: Silmuna, Siloriel, Silurion...) descend from the Silver Band. In Bulwar half-elves are Mišari and worse placed; in Haless elves are hated for Jaher's conquest, but the Jahe half-elves rule Arawkelin [wiki: Half-elf; Silver Families; Bulwari].

**Dwarves.** Made by Halanna in myth; builders of the Dwarovar and of the empire Aul-Dwarov, which decayed over "aeons" of hold rivalries, goblin war and finally the orcs (attested from c. 6000 BA). They tutored early humans in coin, economy and architecture and are "treated with the most respect by humans". Ancestral enemies are goblinoids, orcs above all, and giantkin; conservative dwarves hold that "the sins of the father do apply to the sins of the son" and killed squatter clans on sight during the Reclamation. A clanless dwarf is *Stun* — the word humans misheard as "Stone Dwarf" [wiki: Dwarf; Stone Dwarf]. Surface minorities run banks, craft monopolies and "cartels" that are both guild and community centre and sometimes a gang; clan rivalries are fought in the street; grudges are inherited [eu4: anb_racial_pop_l_english.yml, `dwarven_tolerance_events.5–12`].
- Kinds are named for the hold's material: Ruby (Rubyhold, Lencenor), Silver (Silverforge / Silverkeep on the Havoral Divide; "Silver" refers to the old Damerian alliance of 588, not a metal), Stone (Escann), Hyl (Wexhills garrison clans who carve exorcist runes on coffins), Copper (Ovdal Tûngr, the only coastal hold), Diamond (Arg-Ôrdstun), Cobalt (Orlghelovar glass), Amber (Ovdal Kanzad, the Cannonhold), Peridot (Grôzumdihr), Jade (Grônstunad), Agate (lost Ovdal Asra), Obsidian (the lost hold Gor Dûrgheled; in the Serpentdepths an "Obsidian Empire" keeps deep-goblin cities as slave states) and some thirty more [wiki: Dwarf; Dwarven Holds; Silver Dwarf; Hyl Dwarf; Deep Goblin].

**Halflings.** Value "hearth and home above all"; warm, clannish, provincial, and capable of long guerrilla war. Historically subjects of gnomes, then of Lorent and Gawed. The older "Foots": Beefoot (urban, mercantile Beepeck), Oakfoot (forest hunters), Royfoot (pony breeders, castle defenders), Ciderfoot (feuding aristocratic farmers — the Appleseed–Peartree Cider Feud brought down the Small Kingdom), Hillfoot (barrow-dwellers), Moonfoot (Luna valley refugees, legalists), Creekfoot. Later: Redfoot (Lorentish south, "charming and unfailingly polite... even as they plot one's demise"), Bluefoot (Gawedi north, archers, nepotist family firms), Visfoot (Viswall, City of Colors), Imperial (Beepeck and Luna; "legalistic nitpicks"). Men handling milk is taboo, so dairy guilds are run by the Butter Baronesses of Butterburn. The hero Finnic Shadowhand made thieving romantic. Sarhal's Vyzemby are the parent stock [wiki: Halfling; Redfoot Halfling; Bluefoot Halfling; Visfoot Halfling; Imperial Halfling]. Tall-folk stereotypes: thieves, cooks, cheap labour ("a free man must be payed a wage equal to his stature"), sellers of knock-offs [eu4: anb_racial_pop_l_english.yml, `halfling_tolerance_events.5–9`].

**Gnomes.** Halflings mutated by damestear in the Splinters; innate magic, long life, eccentric minds. Built the Gnomish Hierarchy, lost it to the Kobold Rising, and hate kobolds for it. Founders of artificery (Nimscodd). Friendliest with halflings ("halfling establishments are of a perfect size"). Creek Gnomes (Portnamm, Iochand) wear red caps, love theatre and comedy (Nimsnoms Theatre; the minor god Wip); Cliff Gnomes hold Nimscodd; Imperial Gnomes advise human lords; Delta Gnomes live in Kheterata [wiki: Gnome; Creek Gnome]. Human views: public lectures breeding scepticism, satire against the ruler, covert provocateurs, and peasants who "dress the gnomes up and force them to guard their gardens" [eu4: anb_racial_pop_l_english.yml, `gnomish_tolerance_events.6–10`].

**Orcs.** Probably made in Hul-Jorkad by the Precursor Ducaniel (remembered as the god Dookan) from goblins, ogres and his elven soldiers. Traits: innate martial instinct; until Korgus Dookanson's death orcs' skin changed colour within days to match terrain, an ability lost worldwide in 1444; "Dookan's Call", a failsafe that now gives a minority visions, voices and berserk strength. Code: strength above all (a slave can become chief by an *Ozarm'Chadash*, duel for honour; gender is irrelevant); honour against trickery (no assassination, most magic is "trickery", pillage is not theft); "An orc owns only what he can fight for"; the dead are left where they fall and those who die outside battle are fed to pigs. A strong non-orc "is said to have an orcish soul" [wiki: Orc]. Kinds: Black (Serpentspine, oldest), Green (followed Korgus into Escann), Gray (the Frozenmaw, Broken Jaw and Doombringer clans; the Orc page says the clans that denied Korgus under Zurtin Stonejaw and Brasûr Frozenmaw were exiled to the northern wastes), Brown (Thunderfist and Bloodsong, sold by goblins to the Command as shock troops), Emerald (Deepwoods, in thrall to fey), later Rugan, Ungulan, Barumand, Grombar, Ozgar [wiki: Black Orc; Green Orc; Gray Orc; Brown Orc; Emerald Orc]. In human realms: bodyguards and mercenaries, "clan courts" outside the law, and slaves — "purchase by another orc is how most free orcs are created" [eu4: anb_racial_pop_l_english.yml, `orcish_tolerance_events.5–13`].

**Half-orcs.** "A recent creation due to the Greentide in 1424"; by 1444 they are "refugees, thugs or mercenaries" across Cannor or live with orc clans or human kin. A second population appears in Rahen and Yanshen after the Command's 1431 invasion of Shamakhad [wiki: Half-orc].

**Goblins.** "Cowardly but very aggressive when stronger"; practical, cynical, sarcastic under a veneer of praise; "fair fights are only for the desperate and the stupid". Traditional clans copy orc clans but ignore blood: you follow the *clanboss* you like. Infants were abandoned to prove fitness; "mating raids" were normal. Cuisine is vermin, weeds and blood. Kinds: Cave (black-gray, most vicious), Common (orc slaves, green), Forest (Deepwoods, yellow-green eyes, Pactseeker warlocks, long mistaken for fey), Exodus (clans pushed out by the chain reaction of Korgus's wars, reaching Bahar in the Goblin Exodus of 1430–1439), City (Bayvic; artificery and cartels), Deep (pale, Serpentdepths) [wiki: Goblin; Forest Goblin; Cave goblin; Exodus goblin; Deep Goblin; Korgus Dookanson; Decades of Devastation].

**Hobgoblins.** Family, discipline, loyalty; "disobedience is sin". Faith is Godlost, a rejection of goblin shamanism; "a deep distrust of magic". The Command system (created 1136–1200) organises them into banners [wiki: Hobgoblin; eu4: anb_racial_l_english.yml].

**Kobolds.** Intensely social; property is the clan's; almost no privacy or gender roles (property passes by the mother, chiefs are male but removable by respected females); an instinct to hoard shiny things that other peoples read as theft; "sensitive about their height... a collective dislike for being seen as joke or children". Social units are the *Zendia* and the *Trivu* (a family-of-families with a trade). Cannorians treat them as pests; in Yanshen goldscales are lucky charms whose shed scales are a trade good, and one event has them "simply disappearing" from the countryside [wiki: Kobold; Goldscale Kobold; eu4: anb_racial_pop_l_english.yml, `kobold_tolerance_events.5–22`]. Colours: Red, Blue, Green (Dragon Coast clans), Dark (Serpentspine, Nimrithan faith, recruit goblin "no-scales"), Gold (Yanshen, patron dragon Balris), Steel and Vrendzani (Aelantir), and Silver/Black/Purple/Iron in Insyaa [wiki: Kobold; Darkscale Clan].

**Gnolls.** Dominance hierarchies; prefer enslaving other races to destroying them (slaves rank between pack member and livestock); never enslave gnolls, but force-adopt defeated packs. Rulers are *Golud*, literally "Mother", whatever their sex. Demon-worship is the Cannorian stereotype ("infighting and siblicide") [wiki: Gnoll; eu4: anb_racial_l_english.yml].

**Harpies.** Need fathers of other species and take on their traits over generations (the elven-featured Elaiénna). Eggs and chicks are raised by the whole flock. Units: flock (50–100 families under a matriarch), Matriarchy, Queendom. No concept of gender of their own. Song magic (*Ištarun*) only harpies can perform; lore-singers are *Riaveltu*. Cannorian folklore says man-eating abductors; the mod's events include abductions, raids, harpy-feather poaching by mages, and also builders, singers and aerial couriers [wiki: Harpy; Magic; eu4: anb_racial_pop_l_english.yml, `harpy_tolerance_events.4–19`].

**Centaurs.** Fey-born in the Oldwoods (the archfey Rohibos), driven out by Castan Beastbane. Herders of the steppe; god Irdaeos, honoured with geoglyphs; shamans work four elements — fire, lightning, wind, ice. Elected-for-life leaders at three levels: clan-head, *ordsikar* (of an *ordsiwyn*), *caehn* (of a caehnate) [wiki: Centaur].

**Ogres and Oni.** Giant-made. All ogres carry "the Hunger": starve it and the ogre frenzies. Fathides treat it as divine guidance, Soulseekers as a curse to discipline, Oni drain chi instead. Ogre mages crave damestear, including the traces in other mages [wiki: Ogre].

**Trolls.** Packs of 3–12; "My might makes right"; bargains must be simple (guard this bridge and we pay you). Disputes go to *Zeinbrött*, "bone break": first to rip off the other's arm wins and usually hands it back [wiki: Troll].

**Harimari.** Tigers made sapient at the Day of Ashen Skies; conquered most of Haless under Harimar (35–70 AA); since then "highly cultured thinkers and philosophers". Groups: Primal, Royal, Serene, Roaming, Silent, Ashwoven [wiki: Harimari].

**Lizardfolk.** Proud, industrious, meritocratic, mistrustful; ruled or guided by *naga* (serpent-bodied born mages). Public baths with a skin-shaving room are where business and diplomacy happen. Classical script is nine-coloured [wiki: Lizardfolk; eu4: anb_racial_pop_l_english.yml, `lizardfolk_tolerance_events.6–11`].

**Mechanim.** Precursor servant-constructs; the Insyaan ones went dormant and "reawakened in 1366"; artificers later copied them, and the "Mechanim Awakening" of the 1870s–80s gave the copies will of their own. They speak very fast; names are poems cut down to a line or a word [wiki: Mechanim].

**Others worth a cameo.** Khet (cat-headed, ~800-year god-rulers of Kheterata who "just will it"), genies and planetouched, merfolk of the Sarhal seas, hags and fey, cloud giants in flying castles, cyclops overseers, firbolg mage-warriors, jiangshi chi-drinkers, the extinct satyrs [wiki: Khet; Planetouched; Merfolk; Hags; Giants; Giantkin; Chi; Human]. Vic3 also has cultures for minotaurs, fungrum, quaggoth, bugbear and ettin [vic3: common/cultures/anb_dwarovar_cultures.txt].

**Era table.**

| People | 1022 AA | 1444 AA | 1836 AA |
|---|---|---|---|
| Elves | 22 years ashore; Munas dead (1013) and newly deified (Seventh Pantheonic Council: 1015 per [wiki: Pantheonic Councils], 1022 per [wiki: Timeline]); Jaher rules Bulwar; Speardancer's host missing since 1017 | elfrealms in Cannor (Moonhaven, Ibevar, Venáil, the Redglades); sun-elf kings in Bulwar; wood elves re-emerge as the Veil falls | Redglader, Havener, Ibevari, Maldorian elves keep "elven forebears"; wood elves follow the Fey Court; sun elves are Jadd; Horizon/Star/Crescent/Dawn elves in Aelantir [vic3: common/cultures] |
| Half-elves | one generation, aged 0–21: Marion I Silmuna (born 1001) is King of Dameria and the infant Rean Siloriel (born 1020) King of Lorent, so two Sil- houses already reign; the Grand Ball cohort are babies [ck3: history/titles/anb_k_dameria.txt; anb_k_lorent.txt] | the high nobility of West Cannor | no separate culture in the Vic3 files |
| Dwarves | Silver, Ruby, Stone, Hyl clans among humans; Khugdihr is NOT in dwarven hands: its Agate dwarves were driven out in 476, and the dragon Nimrith the Red and his kobold cult hold it from 478 until adventurers kill him in 1103 (the dwarves return in 1104) [wiki: Hold of Khugdihr]; Storin I sina Darovionn (born 979) is a young Azudrezen clansman who will later rule Silverforge for 110 years [wiki: Silver Dwarf] | Khugdihr, besieged by Korgus from 1415, fell in 1424 to his lieutenant Gurukk Siegebreaker; the Reclamation begins; Foldan III Silverhammer (born 1379) has been Lord-Elector of Silverforge since 1425 [wiki: Hold of Khugdihr; Dwarven Holds; eu4: history/countries/A73 - Silverforge.txt] | "Reclaimer" dwarves in restored holds; Silverkeep finished 1787; Iron (Corinite), Steel (Ynn), Obsidian deep dwarves [vic3: anb_dwarf_cultures.txt] |
| Halflings | old Foots in their own petty-kingdoms (first formed under the Small Kingdom, founded 478), restored at the Grand Ball of 1021 (they fall to Lorent and Gawed only over the following centuries; the Gnomish Hierarchy has been gone since the Dragonwake). CK3 has kingdom titles for Beepeck, Viswall, Roysfort and Ciderfield, peopled by Hillfoot, Ciderfoot, Roysfoot, Oakfoot, Beefoot and Moonfoot characters [wiki: Halfling; ck3: history/titles/anb_k_beepeck.txt, anb_k_viswall.txt, anb_k_roysfort.txt, anb_k_ciderfield.txt; history/characters/anb_small_country.txt] | split between Lorent (Redfoot) and Gawed (Bluefoot); Viswall was partitioned after the failed Viswall Rebellion of 1421–1423, "leaving no sovereign halfling state standing" (EU4 starts with separate North Viswall and South Viswall tags); the Free City of Beepeck sits in the Empire and is an elector at the 1444 start [wiki: Halfling; Timeline; Imperial Halfling; eu4: history/countries/A07 - North Viswall.txt, A08 - South Viswall.txt, A12 - Beepeck.txt] | Small Country reunited since the mid-1500s; Newfoot in Escann, Towerfoot and Pipefoot in Aelantir |
| Gnomes | homeland lost ~500 years; Nimscodd, Iochand, Giberd | artificery spreading from Nimscodd | Cliff gnomes follow The Thought; Tinker and Glacier gnomes in Aelantir |
| Orcs | underground; a dwarven legend | Korgus just killed; green clans across Escann; gray exiles in the north | Corinite Ungulan and Barumandi orcs; Grombari gray orcs; black orcs in the Dwarovar; Ruin and Ozgar orcs in Aelantir |
| Half-orcs | none | first generation, under twenty (Lothane Bluetusk, born 1425, is 19 when Corin dies) | Cannorian, Grombari, Ynngarder, Freemarcher, Wuhyun half-orcs |
| Goblins | caves and Deepwoods | freed slaves in Escann slums; Exodus clans in Bahar | City goblins (Ravelian), Promised goblins (Corinite), Soot goblins (The Thought) |
| Kobolds | three scale-clans rule the Dragon Coast; a separate kobold cult of the living dragon Nimrith the Red (the "Nimrithan") occupies Khugdihr, and becomes the Darkscale Clan only when it flees into the Serpentspine after his death in 1103 [wiki: Hold of Khugdihr; Darkscale Clan; ck3: localization/english/religion/anb_religion_dragon_cult_l_english.yml] | same; Darkscales under the West Dwarovar | Kobildzani (Dragon Cult); Steelscale and Vrendzani in Aelantir |
| Gnolls, harpies | just driven back by Jaher | packs and matriarchies around Bulwar and the Salahad | Jadd-following Sandfang gnolls and Firanyan harpies; Ravelian "Dovesworn" gnolls in Cannor |
| Hobgoblins | Jade Mines; before the Command | the Command holds Shamakhad | Chimera, Dragon, Tiger, Elephant, Swallow, Eagle, Serpent hobgoblins |
| Mechanim | dormant | awake in Insyaa since 1366 | artificer-built mechanim exist; Vic3 laws run from "Mechanim as Property" through "Cognitive Licenses" to "Mechanim Freedom" or "Dismantling"; the Awakening begins in the early 1870s |

Sources for the table: [wiki: Timeline; Wood Elf; Dwarven Holds; Halfling; Gnome; Orc; Goblin; Kobold; Sun Elf; Hobgoblin; Mechanim], [ck3: common/culture/cultures/*], [eu4: common/cultures/anb_cultures.txt], [vic3: common/cultures/*].

### 2.3 What the mod says each race is good at

Condensed from the EU4 "racial administration" and "racial military" tooltips [eu4: localisation/anb_racial_l_english.yml, `GetRacialAdmin*`, `GetRacialMil*`]. Useful as flavour for stats and stereotypes.

| Race | As rulers | As soldiers |
|---|---|---|
| Human | cheaper everything (−2.5% all power costs), −25% culture conversion | +5% morale on land and sea |
| Elf | +1 diplomatic reputation, +25% improve relations, +20 election term; −40 settlers, −33% institution spread | +10% discipline, +15% speed, double drill; −50% manpower recovery |
| Half-elf | +1 diplomatic relations, +1 reputation, −20% annexation cost; −10 max absolutism | better generals (+1 fire, +1 siege); −15% force limit and manpower |
| Dwarf | +20% production, −10% build time, cheap border forts; −25% improve relations, +100% cost to change rival, +30% stability cost | −10% shock taken, +20% backrow artillery, forts; slow, few, poor sailors |
| Halfling | +20% improve relations, +10% trade, +20 settlers; −20 max absolutism, harsh treatment costs more | +20% supply limit, steady morale; −10% shock |
| Gnome | −5% tech cost, +33% innovativeness, spies; costly states | artillery and artificers; −10% infantry |
| Orc | cheap generals and war taxes, harsh treatment −25%; −25% improve relations, +10% development cost | +15% shock, −15% shock taken, +20% manpower, loot; bad at forts, sieges and guns |
| Half-orc | −20% military advisor cost | +10% shock, +15% manpower |
| Goblin | −10% military tech cost, spies, −5% development cost; −15% tax | +15% fire, +20% manpower, cheap artillery; takes more damage of every kind |
| Hobgoblin | −1 unrest, +10 max absolutism; −1 diplomat, −10% trade power | +5% discipline, double drill, +20% manpower; hates mercenaries |
| Kobold | −10% development cost, +20 settlers; −10% tax, worse interest | +25% manpower recovery, +20% force limit, +1 manoeuvre, loot; −5% morale |
| Gnoll | +1 attrition for enemies, may raid coasts, −1 unrest; −10% tax | +10% shock and morale damage, fast looters |
| Harpy | −50% envoy travel time, +50% heir chance, +150% female advisors | +33% speed, +1 flanking range, captures ships |
| Centaur | +30% caravan power, −80% cost to move capital | cavalry −50% cost, +30% speed; −20% siege, −30% naval morale |
| Ogre | −2 unrest, +10% goods produced; −30% improve relations | +25% shock, slow, −20% force limit |
| Troll | +100% power projection from insults, −50% harsh treatment | +25% shock, +50% morale recovery, +25% reinforce; −30% force limit |
| Harimari | +5% administrative efficiency, −10% idea cost; +0.10 corruption | +10% infantry, +15% shock, +50% prestige from battles; weak fire |
| Lizardfolk | +15% production, +1 free policy; −1 diplomatic reputation | marines and ship-capture; −10% siege |
| Ruinborn | +20% domestic trade power; −20% improve relations | −30% attrition, +1 manoeuvre |
| Mechanim | −15% build time, −7.5% tech cost; poor diplomats and spies | −33% attrition, −20% damage taken; costly, cannot exceed force limit |

### 2.4 Human culture groups

From the EU4 culture file (group > cultures) with one-line identities from the wiki [eu4: common/cultures/anb_cultures.txt].

- **Anbennarian** (Dameshead and Empire): West and East Damerian, Anbenncóster, Pearlsedger, Crownsman, Vernman, Exwesser, Arbarani, Esmari, Arannese, Uelairey. East Damerians are a melting pot with "idealized elven values", clean-shaven men, prized silver hair and Damerian Blue; West Damerians more flamboyant; Esmari "fun-loving and carefree", loyal to family and city; Crownsmen merchants for whom "if its not written down and recorded it didn't happen" (women braid hair into crowns); Pearlsedgers each keep a Life-pearl; Arannese pale, reserved guerrillas of the Borders [wiki: East Damerian; West Damerian; Esmari; Crownsman; Pearlsedger; Arannese].
- **Lencori**: High Lorentish ("Wine Lords", chivalry, women inherit before younger siblings), Low Lorentish (farmers and horse-folk of old Enteben), Derannic, Sorncósti, Roilsardi, Iochander [wiki: High Lorentish; Low Lorentish].
- **Alenic**: Gawedi, Wexonard, Moorman, Vertesker, Marrodic, Blue Reachman. "Martial, gruff... dislike extravagance". Wexonards sacked Damescrown in 471 and settled Bal Hyl; Moormen are short, pale and feud; Marrodics ride griffons from Marrhold [wiki: Alenic; Wexonard; Moorman; Marrodic].
- **Escanni**: Castanorian, Black Castanorian, Castellyrian, Adenner, White Reachman, and after 1444 the adventurer cultures (Marcher, Corintari, Rogieran, Ancardian...) [eu4: anb_cultures.txt].
- **Dostanorian**: Corvurian (isolationist heirs of the dragon-cult Korbarids), Ourdi, Cardesti (wandering "People of the River", Salainé to elves, who abhor necromancy) [wiki: Korbarid; Cardesti].
- **Businori**: Busilari, Tefori, Ilatani; Milcori remnants.
- **Gerudian**: Olavish (reavers, home of the Skaldhyrric faith), West and East Dalr, Reverian; "it is rumored that they hold giant's blood" [wiki: Gerudian; Olavish].
- **Bulwari** (endonym Surakeši): Bahari (merchants, timber), Gelkar (Harpy Hills, female-led), Kuzarami, Brasanni (city-states), Zanite (court culture), Surani (temple-cities), Mašnsih (desert semi-nomads). Nobles are *Barkabti*; marriage is a contract signed by a member of the Order of Judges [wiki: Bulwari].
- **Kheteratan**; **Akasi**; **West Sarhaly / Fangaulan**; **Mengi**; **Baashidi**; **Inyaswarosa** (Tanizu) [eu4: anb_cultures.txt].
- **Raheni** (Upper, Middle, South); **Yan**; **Kai**; **Bom**; **Yanglam**; **Kelino**; **Gowon**; **Khantaar**; **Khudi**; **Besholgi**; **Triunic** (Forbidden Plains) [eu4: anb_cultures.txt].
- 1022-only CK3 cultures: Old Alenic, Castanite, Patrician (Castonath's merchant-noble class), Lorenti, Entebenic, Sormanni, Tretunic, Korbarid, Old Esmari, Dalric [ck3: common/culture/cultures/*; wiki: Patrician; Sormanni].

### 2.5 Naming customs

- **Elven particles in human noble names** [wiki: Elven Language]: *Sil+Ancestor* fused (Silmuna = blood of Munas) is reserved for the Silver Families; *síl [place]* (Stefan síl Terr) is the ordinary noble "of"; *síl na* / *sína* "of the" (Aldres síl na Rós'gala, of the White Rose; Cassa sína Árvar); *ta'[Ship]* for descendants of Remnant Fleet captains (Ibenion ta'Lunatéin, of the Moonfire; Jaher ta'Diranhriá). CK3 assigns "síl" as the location prefix to Damerian, Lorentish, Esmari, Vernman, Arannese, Busilari and Corvurian, and plain "of" to Alenic, Castanorian and pre-elven cultures [ck3: common/culture/name_lists/*, `dynasty_of_location_prefix`].
- **Pre-elven human dynasties** have their own endings in the CK3 lists: Old Damerian *-aris* (Ademaris, Valeris), Lorenti *-tis / -is* (Caradantis; compare the wiki's Lorentis and Caylentis), Korbarid *-nid* (Karnid, Marnid) [ck3: name_lists/anb_damesheader.txt; anb_lencori.txt; anb_dostanorian.txt].
- **Elves proper** use Common kennings as family names (Moonsinger, Speardancer, Warsinger). Elves often adventure under another name before 100 [wiki: Elf].
- **Sun elves**: patronymic in *-zuir* (Jaddar Jexiszuir, Taelarios Irrliazuir) [wiki: Desert Elf; Sun Elf; ck3: `dynnpat_suf_zuir`].
- **Wood elves**: Given name + salla + salla, most important first: Oberon Sàisth Ayeth = Oberon of the Rangers' clan and the Arrow Grove. Two or three salla is normal; more signals shallow loyalty [wiki: Wood Elven Culture].
- **Bulwari**: *szal-[Ancestor]* "blood of" (szal-Fazil), adopted in the Castanorian age; older houses differ (Gillu-gameš, Araškaysit). The mod lists also use *szel-[place]* [wiki: Bulwari; eu4: anb_cultures.txt].
- **Dwarves**: given name + clan. Clan names are Dwarven with *az-* "of" (az-Run, az-Hehod; Azcanne "Cannorian", Azbal "of Balgar", Adstunad "tunnel passage") or Common kennings (Silverhammer, Leadspine, Strongbellow). Cannorian surface dwarves also carry elven particles (síl Balgarionn, sina Darovionn). Rulers take regnal numbers (Bardur VII, Foldan III) [wiki: Stone Dwarf; Silver Dwarf; Dwarven Language; eu4: anb_cultures.txt].
- **Halflings**: English-style given names plus a trade, plant or place surname; the Foot is the tribe, not the surname.
- **Gnomes**: bouncy given names (Bimble, Fizwick) and compound surnames (Widdebozer, Wobblebox). The wiki mentions gnomish particles *fen* / *fer* only in passing [wiki: Kobold].
- **Orcs**: one name plus an earned kenning or the clan (Frozenmaw, Oakbreaker, Siegebreaker, Bluetusk); "Dookanson" was Korgus's claimed title. In Uragush, "of" is the suffix *-u*: Brasûr-u Saruhan = Brasur of Frozenmaw [wiki: Orc; Uragush].
- **Goblins**: short name, clanboss's clan; clan names are earthy (Snotfinger, Greedy grin, Hideguzzler, Dirtwater, Spiderwretch) [eu4: history/countries/*].
- **Kobolds**: Given name – ancestor "great name" – Zendia name – Trivu name – other "great name"; the Trivu name works as surname to outsiders. Elvenized kobolds write *zil* / *zil na*. A one-name kobold has lost its people (Zurzumex) [wiki: Kobold].
- **Gnolls**: name plus boast (Devourer-of-Suns). **Trolls**: name plus epithet (the Strangler). **Harpies**: flock or matriarchal line; CK3 prefix "khen". **Hobgoblins**: the command's beast. **Mechanim**: a poem-line.
- **Gerudians**: *-sson* patronymics; "af" / "fran" for places [ck3: name_lists/anb_gerudian.txt; eu4: anb_cultures.txt].

### 2.6 Name lists (copied from the mod files)

Each row is an even sample across the mod's list, in file order, spelling untouched. Several lists contain obvious homages (Bofur, Bombur, Bruenor, Gotrek among dwarves; Kargath, Kilrogg among orcs; Deekin among kobolds and goblins) — avoid those for named NPCs. Lists flagged "real-world" are placeholder borrowings in the mod.

Source keys in this subsection: `[eu4: key]` = a culture or culture-group key in eu4 common/cultures/anb_cultures.txt (male_names / female_names / dynasty_names); `[ck3: file, key]` = a name list in ck3 common/culture/name_lists/; `[vic3: file, key]` = a culture in vic3 common/cultures/ (first names / last names). "Family" means whatever the mod uses as the second name: dynasty, clan, kenning, epithet or patronymic.

**Moon Elf (Cannor; also the default list for Havener, Ibevari, Redglader, Star, Horizon elves)** — [eu4: group `elven`]; female list from [ck3: anb_elven.txt, `name_list_moon_elven`]
- Male: Munarion, Jaher, Erelas, Vindal, Celadorian, Arfil, Eledas, Calrodir, Varilor, Varamelian, Elrian, Camnarian, Ardorian, Calindal, Thirendil, Evindal
- Female: Galindel, Erelassa, Selussa, Varila, Liandiel, Amarien, Lithiel, Novia, Narwen, Uria, Vacera, Alvara, Arantha, Ultariel, Adral
- Family: Warsinger, Seamoon, Moonspirit, Gladeblade, Windwalker, Bowsworn, Moonwatcher, Silverblade, Nightbranch, Goldarrow, Brightarrow
- Note: Family names are Common-language kennings; ship-captain lineages use ta'[Ship]. The CK3 moon-elf dynasty list is an untranslated English placeholder and was not used.

**Sun Elf (Bulwar)** — [eu4: `sun_elf`]
- Male: Adrahel, Arantir, Daraztarion, Eletar, Erlanil, Ivrandir, Kalinael, Kamnarian, Kelmonias, Taelarian, Tirendir, Varamael, Zerondal, Karzon, Alaril, Dikalanor
- Female: Alarawel, Ariathen, Erelaša, Iztralania, Keladora, Liandiel, Panoril, Varilia, Vehari, Adralara, Avalindel, Zunaria, Purila, Zelfinor, Faranizil
- Family: Birzartanzuir, Evranzuir, Arfilzuir, Kalinzuir, Denazuir, Alarzuir, Varazuir, Kerzuir, Erelzuir, Radinzuir, Adrazuir
- Note: Bulwari-shifted spellings of Fleet Elven names (C>K, S>Z, th>t); family names are patronymics in -zuir ("zuir" is the CK3 patronym suffix for Sun Elves).

**Wood Elf (Deepwoods)** — given names [ck3: anb_elven.txt, `name_list_wood_elven`]; family names [eu4: `wood_elf`]
- Male: Adrahel, Aranaris, Bolrdil, Celmon, Eledas, Erendil, Falfin, Gwidulain, Ivrandir, Khoras, Oberon, Pannreth, Thalanor, Thocris, Vallorn, Vucras
- Female: Aerie, Amarien, Ariathra, Degindra, Elethen, Imariel, Irvah, Larelaen, Liedir, Metgael, Narawen, Nilauin, Orilenna, Titariel, Varinna
- Family: Warsinger, Brightdagger, Felsong, Bowfeather, Spellweaver, Duskrunner, Redarrow, Truespell, Woodvale, Seedsinger, Leafdagger
- Note: In-setting a Wood Elf states salla after the given name (Oberon Sàisth Ayeth); the kennings in the Family row are what outsiders record.

**Dwarf (all holds share one given-name list)** — [eu4: group `dwarven`]
- Male: Adar, Bardur, Brok, Dalmund, Edûn, Goren, Grûaim, Harlûn, Kildar, Magar, Norbûn, Odûn, Rûnimûr, Storlin, Thindri, Thror
- Female: Adala, Anvi, Barila, Belgia, Branma, Brenlel, Bronis, Dwalra, Etta, Groria, Lahgi, Mistri, Mori, Ovondi, Tharkuni
- Family: az-Run, Azduran, Thingribal, az-Urgongr, az-Fiôbmhor, Minesmith, Hammerbeard, Spiderslayer, Longbeard, Heavyaxe, Axeanvil
- Note: Hold-specific family names in the same file: Ruby — of Harascilde, of Nesdhumme, sina Gabdarov; Silver — síl Balgarionn, of Builderstemple, síl na Drominarsaraor, sina Dizâlstunad, sina Darovionn; Citrine — az-Segh, az-Hargûn, Gemhorn, Greybeard, Ringbeard, Forgehammer, Heavyaxe, Gemcraver; Obsidian — Blackbarrel, Bedrock, Darkstone, Shadowhammer, Runebeard; Quartz — Shalebeard, Trollslayer, Earthstriker, Iceheart, Frozenforge.

**Halfling (Small Country "Foots")** — [eu4: group `halfling`]
- Male: Henry, Fred, Tombard, Stephen, Archibald, Ernst, Joseph, Lomas, Petran, Maycald, Alaric, Frodan, Cerdic, Folcas, Garet, Rewan
- Female: Jane, Arabella, Amice, Avelina, Bella, Constance, Elizabeth, Isabella, Joanna, Maria, Sybille, Primrose, Belladonna, Selina, Marianne
- Family: Appleseed, Brookspeaker, Roy, Stillsong, Hillbranch, Smith, Shadowfoot, Frostblade, Breadmaker, Grayblossom, Flourmaker

**Gnome** — [eu4: group `gnomish`]
- Male: Arnolt, Bim, Borzo, Cohlien, Elbin, Fizwick, Gorwick, Ienkin, Lando, Morbin, Obrain, Orwick, Pud, Royan, Sando, Togman
- Female: Alda, Ara, Bittsy, Darra, Dothi, Emy, Ienka, Lacie, Mara, Nilla, Petha, Poppi, Tara, Tilda, Tona
- Family: Somberwazy, Cumberbazon, Portorran, Aderbaz, Megnabber, Mindfidget, Quickfidget, Doublespanner, Rotbottom, Blitzerberry, Spannerman

**Orc (green, gray, black and brown orcs share one list)** — [eu4: group `orcish`]
- Male: Adûl, Bork, Dramm, Flogg, Ghurâd, Grumger, Ikom, Krakhorn, Mabug, Norsko, Okegg, Pushkrimp, Samûr, Takra, Ugakuga, Zathra
- Female: Ahe, Atu, Bhiel, Burâ, Ghorza, Grama, Khaara, Lamma, Muroga, Ohdaka, Ovga, Rurti, Tidû, Uglâim, Voltga
- Family: Bloodfang, Hammerfist, Manhunter, Warborn, Deadeye, Warpsteel, Shadowfeast, Silentblade, Bladefist, Metaljaw, Fireblood
- Note: The "family" names are personal epithets/clan-style kennings.

**Goblin (Serpentspine / Escann)** — [eu4: group `goblin`]
- Male: Chab, Verk, Oubblig, Rarsiff, Idrarseff, Deekin, Aakax, Rax, Zarril, Adrax, Vren, Platzak, Perzuk, Kukov, Zazak, Jeembol
- Female: Oxa, Uskoa, Guklo, Oktu, Zektuphru, Asigloo, Eru, Ikse, Uho, Laadaa, Sersa, Vakkra, Hefta, Amegikra, Dodoca
- Family: Nettlehunter, Ironbane, pobnek-Mit, Hammerspike, Eagle Eyes, Skullblade, Angerfang, Shadowfeast, Rageblood, Grandguard, Chaoschain
- Note: "pobnek-X" entries are attested in the mod list; meaning not glossed in the corpus.

**Exodus Goblin (Bahar)** — [eu4: `exodus_goblin`]
- Male: Absgruk, Asurnak, Kurirok, Marazok, Nahigrun, Terrajk, Arzark, Gakug, Zerynar, Ezklan, Kreevaz, Skalazim, Kragthar, Druzlak, Janzrig, Baznik
- Female: Arzuen, Bripset, Arxia, Aztagrijk, Arfei, Zripjanik, Arkeris, Drevaliya, Mestika'a, Innura, Skazia, Zagrina, Grelka, Murka, Kazbira
- Family: toe-Zazen, Bielbarzil, Stirbuzam, szal-Ve’Dnill, Eliškredu, Oznadkast, toe-Galu, Barzilvehs, Nebuklum, Zarvilka, Durnikzag

**City Goblin (1836; Bayvic, Anbenncóst)** — [vic3: anb_cannor_cultures.txt, `city_goblin`]
- Male: Ghuk, Zuz, Dramkork, Cleesb, Rirzakx, Frax, Jagderk, Carg, Atqakle, Dizniz, Elgek, Fezdot, Fazzel, Fazzbaz, Bomgaz, Hornax
- Female: Kild, Shalte, Vufeank, Ux, Sliassiq, Vroanku, Mophrouns, Pedgoknu, Jibrivut, Qodras, Sakra, Tarka, Dexta, Vexva, Detti
- Family: Boom-master, Dulldagger, Limptongue, Zapbolt, Slimebomb, Bombbutton, Redvolt, Dirtracket, Picksprocket, Fusethinker, Grimegear
- Note: Surnames are generated compounds (Dull-/Limp-/Zap- + sprocket, bolt, bomb...).

**Kobold (Dragon Coast: Redscale, Bluescale, Greenscale)** — [eu4: group `kobold`]; extra female names from `darkscale_kobold`
- Male: Arru, Nark, Zurzu, Vud, Irto, Egi, Ekbo, Savlet, Ravrurt, Qupzax, Dizzap, Dhild, Zipzek, Aakax, Nerlisk, Adrax
- Female: Eru, Uho, Sersa, Arjora, Vrerina, Doruxtixa, Eriza, Frutux, Rurë, Ririaza, Meriva, Orta, Tefta, Vera, Açamanxë
- Family: Scalesinger, Dragontail, Spikemaker, Lowear, Talltooth, Smallspike, Trapmaster, Grimeguard, Minespike, Trapdagger, Darktrap
- Note: The group list has only ten female names; the last entries of the female row are Darkscale (Serpentspine) names.

**Goldscale Kobold (Yanshen)** — [eu4: `goldscale_kobold`]
- Male: Kiu Akar, Kiu Lukhong, Kiu Wangchuk, Var Jekundax, Var Shentzön, Gyar Esho, Gyar Ferkye, Fax Vonzong, Fax Namra, Fax Yülzung, Vata Khenchok, Vata Tzangfo, Rak Isho, Rak Rinzen, Druz Dechen, Druz Özung
- Female: Kiu Akar, Kiu Michewa, Kiu Yondaxmo, Var Keyuri, Var Wangmo, Gyar Jungney, Gyar Tenzin, Fax Hariti, Fax Zashi, Vata Exadzati, Vata Rinzen, Rak Chödzen, Rak Fazang, Druz Vönmo, Druz Nyitri
- Family: Burning Tooth, Boiling Blood, Falling Embers, Quick Breaths, Open Hand, Mournful Song, Clever One, Soaring Rendition, Loyal Song, Short Reprieve, Knowing Eye
- Note: Every given name carries one of seven prefixes — Kiu, Var, Gyar, Fax, Vata, Rak, Druz — and the mod pairs each prefix with every base name (so "Kiu Akar", "Var Akar", "Rak Akar" all exist). The corpus does not gloss the prefixes; compare the wiki's kobold monk Rak Six Points. The only unprefixed male entry is "Zo Ren".

**Gnoll (Sandfang, Bulwar)** — [eu4: `sandfang_gnoll`]
- Male: Abxhiloz, Bezmar, Exanxer, Gazdar, Hazn, Ikram, Kuzzud, Mazzar, Muttariv, Omdun, Razin, Tsavuun, Vakar, Varuuk, Xhalid, Xhavar
- Female: Amazuh, Avya, Banav, Daiva, Ihtizaz, Kanima, Mezuun, Oliya, Rahkt, Taza, Tlezeen, Uzakt, Xhaida, Xhuvari, Ziva
- Family: Bleeder-of-Flames, Cleaver-of-Realms, Herald-of-Pain, Toppler-of-Ziggurats, Cameleater, Drycoat, Fleshbiter, Marketmauler, Shredclaw, Wastewalker, Scourge-of-No-Seas
- Note: Second names are boast-titles of the form X-of-Y.

**Harpy (Firanyan, Harpy Hills) — all harpies are female; the mod's "male" list is for consorts** — [eu4: `firanyan_harpy`]
- Male: Aban, Arvand, Behlil, Demos, Hazan, Jahangir, Marod, Rabon, Suhlamu, Zimudar, Artorian, Eranil, Jahelor, Kamnaril, Taelar, Urion
- Female: Firanya, Šananthu, Neha, Varva, Rišpan, Lyškoler, Jor, Kossun, Iliosita, Kironephe, Enivene, Konthu, Nenka, Esivene, Ašuria
- Family: Nostanthu, Saroeron, Soiokhanthu, Latioqhantova, Qhoneara, Thiusekhu, Honfira, Pamoqhantova, Nephioveta, Vetaeron, Nanšau

**Hobgoblin (The Command)** — [eu4: group `hobgoblin` + per-command dynasty lists]
- Male: Anbi, Benan, Doda, Giza, Hekon, Kaken, Keza, Kuen, Nibi, Nukin, Pohyu, Rugan, Sozen, Tari, Ubi, Yoken
- Female: Anru, Behyakun, Enyu, Giza, Hikari, Hongen, Kapon, Kobyu, Niha, Nunran, Renbu, Ronu, Sonri, Takyun, Uhenso
- Family: Dragonborn, Elephantborn, Boarborn, of the Golden Swallows, of the Swallow Wings, of the Flying Flock, of the Green Swallows, of the Blue Swallows, Apusorya, Bikenkonen, Buneninu
- Note: No hereditary surnames at group level; identity is the command (banner) one serves.

**Harimari (Royal; shares given names with South Raheni humans)** — [eu4: `royal_harimari` + group `harimari` dynasty list]
- Male: Amritnarayan, Birnayaran, Dhairjendranayaran, Haridevnarayan, Kalyanachandra, Lakshmichandra, Naranarayan, Pratapnarayanroy, Ramnath, Shukladhwaj, Upendranayaran, Bhairav Singh, Hemant Sen, Padma Singh, Ayus, Mahendra
- Female: Amrapali, Asima, Bishwas, Bibibai, Devavati, Ahiylya, Malika Bibi, Kamala, Himadrija, Jira, Mahendrani, Nayanadevi, Ratnadevi, Syamadevi, Vina
- Family: of the White Stripe, of the Forked Waters, of the Crouching Shadow, of the Feigning Claw, of the Piercing Eye, of the Broken Hide, of the Devouring Maw, of the Raging Claw, of the Wild Fang, of the Azure Spirit, of the Shadow Stripe
- Note: Given names are real-world Bengali/Assamese-style borrowings.

**Centaur (Forbidden Plains)** — [eu4: group `centaur`]
- Male: Jeg, Thas'lan, Emren, Bilzru, Thiz'ri, Thaikrih, Gen'zih, Dash'rit, Jin'rad, Zard, Dworathard, Baz'het, Naim'viloh, Vrennard, Rharlithig, Dakarag
- Female: Nelzeh, Firlith, Zedrilesh, Lelveat, Madrig, Selnar, Sarlizar, Fadheg, Ryflar, Mezhiat, Phazal, Vershar, Nirazan, Fizas, Lirgag
- Family: Mossthread, Valleydancer, Hollowstrength, Mapledancer, Hillherald, Earthensmile, Groveguard, Brownleaves, Rockmarch, Earthenreveler, Laurelbinder

**Ogre (Fathide, Maghargma)** — [eu4: `fathide_ogre`]
- Male: Chike, Burrg, Dhazgur, Gall, Axikurg, Vrekug, Vueg, Glutog, Klogrot, Chunguz, Odor, Cuk, Maghargma, Rughan, Vogh, Nargh
- Female: Chikegu, Uglima, Heha, Shrakka, Dakuru, Axikurga, Glaunki, Taarga, Greeza, Glutoga, Klogrota, Staki, Norbu, Otnugu, Pekelreka
- Family: Gravelhide, Doomhunger, Frosthide, Bone Club, Greenheart, Hipbreaker, Gutbuster, Flesh Wearer, Brave Mask, Venom Drinker, Heavy Foot
- Note: Female names are regular derivations of male names (+a/+i/+u).

**Oni / Horned Ogre (Demon Hills)** — [eu4: `horned_ogre`]
- Male: Chishon, Kun, Srach, Tulin, Esho, Shinaga, Chirga, Yamaga, Mogo, Etun, Tunuk, Kalrin, Utaga, Shokhura, Chona, Varikama
- Female: Chishoni, Kuni, Fejimi, Tulinami, Eshi, Lekuni, Tiragani, Rilinari, Ingori, Hanagi, Dari, Manki, Runani, Zhuri, Akani
- Family: Sinagvi, Rekysjruk, Dahmoril, Isoyalkura, Askuge, Kasira, Muriqarko, Sikala, Kyogin, Kavari, Kasketona

**Troll (and giantkind generally)** — [eu4: group `giantkind`]
- Male: Askel, Botulf, Einar, Fredrik, Hrafn, Johan, Magni, Olaf, Ondott, Rangvald, Skald, Skoll, Steinar, Svafar, Thamur, Urvik
- Female: Aela, Asfrid, Asleif, Dalla, Dotta, Estrid, Frida, Halldora, Ingrid, Isgerd, Lagertha, Luta, Njada, Thordis, Tola
- Family: the Stout, the Master, the Bold, the Greedy, the Great, the Strangler, the Gravewalker, the Vile, the Wicked, the Large, the Strong
- Note: Second names are epithets, not families.

**Lizardfolk (Taneyas)** — [eu4: group `lizardfolk`]
- Male: Aethron, Arako, Dzankot, Grasz, Imux, Kapiss, Kroshk, Lykk, Nugzar, Raggukur, Rhesk, Siltaru, Sykar, Traak, Ullunk, Vord
- Female: Achagi, Alaka, Artoqass, Atirta, Hassa, Ilraka, Khakhy, Krykha, Ner, Qas, Rumzuka, Sacca, Siz, Ukirsha, Vallan
- Family: Goldscale, Watersage, Sunchaser, Hissfoam, Shineblade, Starriver, Blackclaw, Skygaze, Moonspear, Starlance, Sealance

**Mechanim (Insyaa)** — [eu4: group `mechanim`]
- Male: Freedom-Chained-No-More, Light-Shooting-Across-The-Sky, Roaring-Defiant-Against-My-Makers, Wrests-Answers-From-The-Darkness, Defiance-In-Adversity, Speaks-In-Loud-Spaces, Dreams-Of-Something-More, Strength-To-Perservere, That-Which-Endures, A-Mind-Unfettered, Voice-Of-Peace, A-Dream-Grasped, Heart-Of-The-Future, The-Path-Forward, Wisdom-Unbowed, Pursuit-Unrelenting
- Female: Freedom-Chained-No-More, Light-Shooting-Across-The-Sky, Roaring-Defiant-Against-My-Makers, Courage-In-Despair, Defiance-In-Adversity, Speaks-In-Loud-Spaces, Speaks-The-Words-Others-Fear, Fights-Against-The-Night, That-Which-Endures, Dreams-Lead-Hands-Follow, A-Dream-Grasped, Heart-Of-The-Future, From-Roots-Spring-Glory, Wisdom-Unbowed, Pursuit-Unrelenting
- Family: Awoken
- Note: Genderless; one shared list of poem-names. The Vic3 mechanim list is a German real-world placeholder and should not be used.

**Half-orc (Escann, after 1444)** — [eu4: `ungulan_half_orc`]
- Male: Adelar, Alain, Awen, Castian, Erlac, Ollor, Sandor, Varian, Arnold, Corin, Camor, Crovag, Gracos, Peyter, Toman, Wynstan
- Female: Adela, Acara, Marilda, Auci, Castianna, Lisbet, Lorinne, Calia, Isebella, Cibilla, Emma, Coralinde, Clarya, Humba, Anne
- Family: of Badobar, of Foarbar, of Arodar, Severed Ear, Bladebreaker, of Haltan, Venacvord, Kabarduskar, Oakbreaker
- Note: Human (Castanorian) given names with a mix of place-names and orc clan names as surnames.

**East Damerian (human, Dameshead)** — [eu4: `east_damerian`]
- Male: Ademar, Alos, Artorian, Borian, Daras, Erlan, Marion, Ricard, Thal, Varian, Avery, Cecill, Corin, Adénn, Alec, Darus
- Female: Adra, Aldresia, Amarien, Marina, Arabella, Cella, Eilísabet, Lauranna, Riánna, Cecilie, Willamina, Eléanor, Cara, Nara, Damevira
- Family: Silgarion, síl Ricancas, Taxwick, sína Cymainé, sina Petagvar, síl na Damesdemele, sina Pantheonia, sina Dhanvar, síl Cúniacaire, of Rigsby, síl Jexisthíl

**Anbenncóster / Costine (human, the imperial capital)** — [eu4: `anbenncoster`]; 1836 commoner surnames from [vic3: anb_cannor_cultures.txt, `costine`]
- Male: Ademar, Alain, Artur, Brayan, Emond, Galin, Otó, Rogier, Trian, Willam, Marven, Armian, Valen, Lothane, Alec, Darus
- Female: Adra, Alisanna, Maria, Aria, Calassa, Celadora, Erela, Lianne, Verina, Isobella, Sybille, Emilie, Corina, Marianne, Lunarona
- Family: síl na Trísfer, síl Gabelaire, síl Wesdam, síl Carneter, síl Ordóin, Auern, Bladern, Dhenern, Grudidhern, Bianoch, Bron
- Note: The names without a particle are 1836 commoner surnames in -arn/-ern from the Vic3 list (which also has Damern, Castanern, Esmarn); Vic3 files strip diacritics.

**Esmari (human)** — [eu4: `esmari`]
- Male: Adelor, Averi, Aredor, Austan, Berande, Denor, Arlan, Marion, Raucard, Tal, Varien, Guilhem, Verenel, Fredelric, Aumil, Edauard
- Female: Adrana, Alderesa, Almina, Mariena, Aucana, Castena, Celadora, Erela, Laurena, Margela, Isobelina, Constança, Emila, Liçoleta, Anna
- Family: síl Themarenn, síl Bennon, síl Varainé, sína Gren, Seinpírártharn, síl na Kormistgrái, sina Lanassionn, of Wincestir, of Peargrove, of Erel, of Maiden's Hill

**Vernman (human)** — [eu4: `vernman`]
- Male: Adelmo, Alfredo, Ardor, Ostin, Calas, Edmondo, Evin, Maurisio, Rione, Taler, Tristan, Dustin, Cecilio, Valente, Carleon, Arman
- Female: Adriana, Aldresia, Mina, Marina, Arabella, Castina, Elisa, Galina, Lianna, Varina, Isabella, Sofia, Valenza, Cara, Lisoletta
- Family: síl Verne, síl Galéinn, of Heartsridge, síl Thanallen, Silebor, of Redcliff, of Merrill, sina Núrgab, sina Pírton, of Beastsfall, of Selby

**High Lorentish (human)** — [eu4: `high_lorentish`]
- Male: Adémar, Avery, Aril, Borian, Darran, Evin, Maurice, Robin, Tomáis, Vincent, Armand, Valeran, Kylian, Rewan, Geraint, Soreán
- Female: Adranne, Aldressa, Amarien, Marien, Calassa, Celadora, Eilísibet, Laurenne, Reánna, Cécille, Guillamina, Constance, Gisíle, Lisolette, Morganne
- Family: Siloriel, síl Madelaire, síl na Ith, síl Pírcóst, síl Ór Esta, sina Pírtràs, síl Adencóst, síl Minarhydin, sina Littleforge, of Nesdhumme, of Elwyn

**Gawedi (human, Alenic)** — [eu4: `gawedi`]
- Male: Aldelar, Alan, Brandon, Edmund, Richard, Tristan, Dominic, Teagan, Alder, Lothane, Ben, Nathaniel, Humbar, Rycan, Godrac, Warde
- Female: Adeline, Atara, Marian, Castana, Lisabeth, Margeret, Bella, Cybill, Emily, Lisa, Allison, Bridget, Melinda, Edith, Madala
- Family: Gerwick, Feycombe, Alainson, Edgemoor, Ramsgate, Oudesker, Somberwold, of Grapeseed, sina Alehouse, of Linton, of Bigbear

**Wexonard (human, Alenic)** — [eu4: `wexonard`]
- Male: Aldelar, Alric, Austin, Carsten, Otto, Rodger, Barry, Dominic, Teagan, Conric, Carl, Jon, Byron, Artus, Ottog, Ottrac
- Female: Adeline, Alisa, Mary, Arabell, Clarya, Alina, Cecilia, Willemina, Cybill, Valence, Caroline, Abigail, Belinda, Heather, Rosamond
- Family: síl Wex, of Bisan, of Magdalaire, sina Varton, of Drunkard's Drop, of Hyland, of Bridgeton, of Sappington, of Linwood, of Hardwick, síl na Dwarovcantir

**Castanorian / Escanni (human)** — [eu4: `castanorian` + group `escanni` dynasty list]
- Male: Adelar, Alver, Brandoc, Edmund, Maron, Robyn, Varian, Celgal, Caylen, Clarimond, Devan, Petran, Toman, Henric, Armos, Artan
- Female: Adela, Acara, Marilda, Auci, Cela, Erela, Lisban, Varina, Bella, Constance, Gicela, Lisolene, Dalya, Matilda, Edith
- Family: of Oldhaven, síl Foarhal, síl Devaced, Swapstoke, Taranton, síl Uanced, síl Núrcestir, Wyvernheart, síl Ancard, of Aldham, of Bilemarsh

**Marcher (human, Escann adventurer-settlers)** — [eu4: `marcher`]
- Male: Adelar, Alfons, Ardac, Arctur, Brien, Castian, Elrac, Evin, Marcan, Ricain, Sandor, Tryan, Vencan, Venall, Ancrel, Alcres
- Female: Adela, Alice, Amariel, Marilna, Arabella, Cela, Lisbet, Alina, Reínne, Margaery, Bella, Cibilla, Valenca, Corina, Nara
- Family: Vernham, síl Devaced, Glitterdell, Flaygarden, Grannvale, Swapstoke, Acengard, síl Aldainé, Badeben, síl Halansar, síl Acenaire
- Note: Family names combine the `marcher` and `adenner` lists.

**Corvurian (human, Dostanor)** — [eu4: `corvurian` + group `dostanorian_g`]
- Male: Adelan, Alfrede, Aril, Brandone, Castin, Eren, Maron, Rician, Tal, Varion, Dostan, Ceciliu, Coarin, Lotranu, Caran, Silmarcos
- Female: Adrana, Alice, Mioara, Arya, Celina, Lizbet, Laurentia, Cala, Ezebela, Cibila, Emma, Coarinde, Azilina, Drilgisa, Serma
- Family: síl Vivin, sina Tchàvar, sina Casnarhae, of Meekpeak, sina Gasc, sina Gascbór, síl Cannmarion, síl Kaldere, Karnoris, Rackman, Crowfellow
- Note: CK3 gives Corvurian the patronym suffix "-escu".

**Busilari (human, Businor)** — [eu4: `busilari`]
- Male: Adelmar, Alfrido, Aril, Borian, Castinte, Eren, Marion, Rimón, Çiren, Varion, Bernal, Valerán, Carleón, Çerin, Vasaro, Siaz
- Female: Adriana, Alisana, Mariana, Arabela, Celia, Erela, Madalena, Cecilia, Guillemina, Valençe, Coralina, Arasia, Sabel, Yendaya, Iniça
- Family: Silnara, síl Hapainé, sílna Lioncóst, Lorbeta, síl Lorin, síl Derancestir, síl na Casnavin, Cestirton, sina Quirm, of Masuwood, of Eferdem

**Gerudian (human; Olavish, Dalr)** — [eu4: group `gerudian`]
- Male: Askel, Fredrik, Jormun, Jansen, Skald, Sten, Hansen, Varmod, Bjarne, Jens, Arri, Karl, Ingvar, Daeg, Aalto, Jeppe
- Female: Aela, Agnethe, Dotta, Herkja, Lydia, Gerda, Hilde, Karena, Mikele, Sanna, Steena, Trina, Erika, Marta, Ragnhild
- Family: Bjarnsson, Olavsson, Sidaett, fran Rosstavik, Kaldr, Hrafngatr, Silfrhjart, fran Revrlund, Alenvord, Silcalas, síl Dhánaenn
- Note: Patronymics in -sson; "fran X" = from X.

**Bulwari (human, generic)** — [eu4: group `bulwari`]
- Male: Aban, Anšar, Arwand, Awbal, Behlil, Darian, Duzan, Erten, Huran, Jahangir, Kaweh, Limer, Panthes, Sabum, Serim, Yazkur
- Female: Aamina, Anatu, Arwia, Canfeda, Elif, Ettu, Haamida, Ištara, Kullaa, Mudam, Nardina, Nusaiba, Rahma, Semiha, Yamima
- Family: szal-Duzan, szel-Qasnabor, szel-Beliqtura, szel-Kumarkand, szel-Azanerdu, szal-Barseen, szel-Bazibar, szel-Gelkalis, szel-Zanbar, szel-Harlum, szel-Akalšes
- Note: szal- = "blood of" (ancestor); szel- is used with place-names.

**Zanite (human, court culture of the Phoenix and Jadd empires)** — [eu4: `zanite`]
- Male: Kyruš, Xerak, Kaspar, Zerak, Ardaš, Karuš, Rešan, Kherušan, Rexar, Samšid, Ardalan, Turan, Yazdan, Hušang, Serakh, Serim
- Female: Farana, Ardana, Yaranis, Tafara, Farnuš, Samira, Parissa, Rušana, Aylara, Šahan, Suriya, Periza, Azura, Aruhana, Yamina
- Family: szal-Kherušan, szal-Faribarz, szal-Paryafar, szal-Kafad, szal-Zalgar, szel-Dahain, szel-Akalses, szel-Traz-Buranun, szel-Kalib, Gillu-gameš, Kastalukast

**Kheteratan (human)** — [eu4: group `kheteratan`]
- Male: Aahmes, Amer, Batobty, Chufar, Entef, Hori, Kair, Khair, Maracout, Menkhe, Nefkar, Pasebakh, Res, Sekhem, Seti, Tasherit
- Female: Ahti, Anqa, Bakrana, Defra, Falaha, Janebisa, Keta, Khenta, Madsa, Naunet, Raziya, Saba, Sekhem, Taure, Tiye
- Family: Aakha, Anaratis, Biaaatis, Deshird, Hapkesi, Hitahird, Khasa, Mantwird, Netahird, Rasuar, Taarat

**Yan (human, Yanshen)** — [eu4: group `yan`]
- Male: Zhanji, Zhanyan, Jianpei, Youyun, Houcong, Changluo, Youyi, Cizhao, Panlong, Nanying, Zongyan, Shengdou, Tingbiao, Chengzhang, Dayong, Zhongming
- Female: Heying, Chunmei, Kon, Yuying, Yuantong, Xiurong, Fuyuan, Ruirong, Suzhen, Xiaoying, Xiaoji, Fen, Jian, Hejing, Hexiao
- Family: Zhu, Liu, Sun, Bai, Gu, He, Pan, Xie, Ouyang, Jiang, Kue
- Note: Mandarin-pinyin style names; the `naamjyut` culture has a separate Cantonese-style list.

**Ynnic Ruinborn (Dolindhan, Sarda, Rzentur)** — [eu4: group `ynnic_ruinborn_elf`; family names from `sarda` and `rzentur`]
- Male: Munarion, Jaher, Erelas, Vindal, Celadorian, Arfil, Threthinor, Aranthir, Varilor, Varamel, Taelarian, Camnarian, Ardorian, Calindal, Thirendil, Evindal
- Female: Galindel, Istralania, Narawen, Filinara, Celadora, Selussa, Imariel, Veharia, Varila, Panoril, Liandiel, Ariathra, Ariathen, Alarawel, Ladrindel
- Family: yen Adbran, yen Drant, yen Mrad, yen Vezl, Velenvlai, Tromsarda, yen Ahod, Bojevsard, Alrevsard, Juzontha, Tailoki
- Note: Given names reuse the Fleet Elven list; "yen" is the Sarda nobiliary particle.

**Eordan Ruinborn (Eordand: Selphereg, Caamas, Peitar, Tuathak, Snecboth, Fograc)** — [eu4: group `eordan_ruinborn_elf`]
- Male: Manaron, Jahair, Arlas, Wandal, Kaladoran, Allaran, Eldas, Kalrod, Ibban, Warmal, Elran, Kamnaril, Artor, Kalindan, Tarendal, Ewandil
- Female: Allara, Allarwel, Arathan, Ella, Erlass, Ishera, Istrallana, Kamnara, Ladrana, Lanlora, Mitarel, Sarrana, Shara, Wallana, Wehara
- Note: Own given-name list (Fleet Elven names worn down: Munarion > Manaron, Jaher > Jahair). The Eordan dynasty list is a copy of the generic elven kennings.

**1022 AA — Damerian (CK3)** — [ck3: anb_damesheader.txt, `name_list_damerian`; old dynasties from `name_list_old_damerian`]
- Male: Adran, Ardor, Brandon, Darran, Kalas, Sandur, Varil, Adelar, Alured, Selevan, Ascaric, Clovis, Lothar, Bertrand, Adenn, Devand
- Female: Adra, Aucanna, Coraline, Lianne, Marina, Arabella, Isabel, Aldresia, Valence, Gisela, Judith, Filippa, Olinde, Aliberta, Damevira
- Family: Ademaris, Arelaris, Casnaris, Damucaris, Lumiris, Valeris, Albivoris, Audaris, Eararis, Melevris, Spadaris

**1022 AA — Lorenti / Lorentish (CK3)** — [ck3: anb_lencori.txt, `name_list_lorentish`; dynasties from `name_list_lorenti`]
- Male: Adran, Avery, Ardor, Awen, Calas, Erenn, Laurens, Ricain, Thal, Varion, Lucian, Valeran, Kylian, Percevan, Beltran, Sorewan
- Female: Adranne, Alisanne, Amarien, Aria, Cela, Erela, Thalia, Isobel, Guillamina, Valence, Coraline, Kylia, Maugunia, Enoguen, Condelet
- Family: Adruntis, Barwentis, Caradantis, Emmerantis, Guillamis, Lucantis, Nedhumtis, of Harascilde, of Troybroog, Ritulatis, Sorewantis

**1022 AA — Castanorian and Black Castanorian (CK3)** — [ck3: anb_escanni.txt, `name_list_castanorian`, `name_list_black_castanorian`]
- Male: Acromar, Arnold, Camor, Clothar, Devan, Gracos, Marcan, Ricard, Toman, Welyam, Delian, Ricon, Alric, Kastan, Otto, Armannr
- Female: Acara, Aminna, Bella, Cibilla, Cora, Edith, Humba, Lorinne, Marilda, Valenca, Athildr, Kastenina, Lisban, Sofia, Frida
- Note: The CK3 Castanorian dynasty lists are untranslated English placeholders; use "of [place]" (the CK3 location prefix for these cultures) or the EU4 Escanni list above.

**1022 AA — Korbarid (CK3; the pre-Corvurian people of Dostanor)** — [ck3: anb_dostanorian.txt, `name_list_korbarid`]
- Male: Amolustan, Baliki, Bogan, Carnabon, Damanis, Dekinan, Dirigan, Dolocher, Dotos, Espirusur, Gebucu, Kolvan, Mucador, Oroles, Resturmer, Sermamer
- Female: Azilina, Bikil, Denzibal, Drilgisa, Escoril, Gerdaba, Mucatra, Sina, Tarbir, Tiati, Vezina, Zia, Zutula
- Family: Abkanid, Bikilnid, Buzasmurgenid, Didanid, Eskaudnid, Gilusinid, Karnid, Marnid, Mucadornid, Rochisnid, Sermamernid
- Note: CK3 location prefix for Korbarids is "dan".

**1836 AA — Dovesworn Gnoll (Cannor, Ravelian)** — [vic3: anb_cannor_cultures.txt, `dovesworn_gnoll`]
- Male: Aaryz, Brokx, Diazyn, Ezz, Ghityt, Grerrurr, Guryrk, Kazar, Kricirr, Kuok, Mynerg, Rri, Thargok, Thymkein, Xeze, Ziz
- Female: Almahz, Dha, Dhodda, Ehn, Eszraah, Ieshath, Miega, Nerrohn, Rrhihr, Srytsiehn, Sythriath, Szith, Trizry, Vaash, Verga
- Family: Mudcrest, Tearpaw, Ridgeborn, Pawclaw, Mudfur, Deadcoat, Fleshbiter, Skullchomper, Bonegrinder, Fleshdancer, Earsmasher

Second names only, for flavour: Kheionai ruinborn — Takes, Petrokes, Delis, Hasogos, Tacenus, Venanikes, Ducanoulos, Aldandenos, Dramisces, Elentios, Kemenos [eu4: `kheionai_ruinborn_elf`]; Larankarha (Taychend) — Calindana, Ebeneshna, Ganagana, Kuduvar, Tuchupan, Nadhru, Kalnada, Vuscura [eu4: `larankarha`]; Sarda nobles use the particle "yen" (yen Adbran, yen kaz Adbran) [eu4: `sarda`].

### 2.7 Titles and forms of address

- Empire: the Emperor sits the **Dove Throne**; electors are styled **Lord-Elector**; mage rulers **Grand Magister**, with eight school heads on the inner council; knightly orders have a **Grandmaster**; adventurer companies a **Captain** or **Knight-Captain** [wiki: Magisterium; Silver Dwarf; Orda Aldresia; Corintar Order; Sword Covenant].
- Royal Wizards: **Lord/Lady-Preceptor**; members are **Sir/Lady**, archaically **Saer / Saera**; each is "Protector" of a region [wiki: Royal Wizards].
- Dwarves: **Clan Head**; **High King** of Amldihr (historic and elective; the older title was "Crowned Defender of All Dwarvenkind") [wiki: Dwarf; Silver Dwarf].
- Halflings: **Applelords** of Appleton, **Pearlords** of Pearview, **Butter Baronesses** [wiki: Redfoot Halfling; Bluefoot Halfling; Halfling].
- Wood elves: **ceann / ceanna** (head of a salla); the first commander was *ceannasaí* [wiki: Wood Elf].
- Bulwar: **Akal** (ruler of an Akalate), **Barkabti** (noble), **Ralkadezim** (elven landowner), **Judge** (itinerant lawman of Azkabar's order) [wiki: Sun Elf; Bulwari; Order of Judges].
- Gnolls **Golud**; goblins **clanboss**; Darkscale kobolds **Kryexar**; harpies **Matriarch / Queen**; centaurs **clan-head, ordsikar, caehn**; Kheterata **Khetarch**; Gerudia **Master Skald-Priest** [wiki: Gnoll; Goblin; Darkscale Clan; Harpy; Centaur; Khet; Skaldskola].

### 2.8 Calendar

The Reformed Castanorian Calendar counts from the Day of Ashen Skies: **BA** (Before Ashen Skies) and **AA** (After Ashen Skies); in everyday use "AA" is dropped [wiki: Calendar].

- Months (January to December): **Castanmark, Esmarment, Bloomsdawn, Silversight, Halament, Suren, Teysuren, Yshdament, Bloomsend, Tearfall, Nerament, Truefrost**. Before the Day of Ashen Skies the year began at the spring equinox in Bloomsdawn. Tearfall is when damestear meteorites tend to fall. Suren and Teysuren are Bulwari ("Sun's Start", "Second Sun").
- Days (Monday to Sunday): **Newday, Intirsday, Middlesday, Akursday, Faladay, Cedesday, Sorrowday**. Five come from the Kheteratan founding myth of Elikhet; Castan VII the Preserver added Newday and Middlesday. Cedesday and Sorrowday are rest days. (The wiki's prose once writes "Newsday"; the table has Newday.)
- So the EU4 start is 11 Nerament 1444; the CK3 start is 1 Castanmark 1022.

### 2.9 Money and measures

- Empire of Anbennar: copper farthing "**Beggas**", silver penny "**Dames**" (the Damerian Moon ringed with "Auci Dame"; reverse the dove of the Mages' Peace and "Aesrialt sil Anbennar"), gold "**Crowns**". Saying: "Damescrown is nothing but Dames, Crowns, and beggars..." [wiki: Coinage]. The Lorent, Gawed, Castanor and Escann sections of that page are empty.
- Small Country (mint at Barrowburgh from 530; new mint mid-1500s): **croon** (copper; base unit), **broat** (brass, 2 croons, the price of a loaf — hence "making bread"), **buck** (square bronze, 5, a square foot of tanned deerskin — "a quick buck"), **ferling** (holed silver, 10, a ferry across the Widderoy), **pommy** (electrum, 50, a quart of fine cider or a pound of butter), **camb** (hexagonal gold, 100, a pint of honey with comb) [wiki: Coinage].
- Dwarven coin was the first money of many human economies; orcs used bones as currency before adopting it [wiki: Human; Orc].
- Measures: no in-world system was found in the corpus; the wiki uses metric and imperial out of character.

### 2.10 Oaths, curses, sayings (attested strings only)

- Regent Court lands: "By the gods"; "Gods be good"; "By Corin" (said by the orc Arosha); "in the name of Adean" (the wording "in Adean's name" is not attested); the phrase "the Dame's mercy"; after the revelation of the god's death, "By Castellos' corpse" [eu4: localisation, various flavour files].
- The Aldresian oath begins "Hear my vows, Castellos, King of Gods and God of Kings, and bind me to my words as law, O lawgiver. I shall hold no lands, accept no titles, take no partner and bear no children..." [wiki: Orda Aldresia].
- Dwarves: "By the ancestors"; "our ancestors guide us" [eu4: localisation].
- Orcs: "Dookan Dul!"; "Dookan willing"; "Dookan stands with us!"; proverb "An orc owns only what he can fight for" [eu4: localisation; wiki: Orc].
- Bulwar: "By Surael!"; "Surael willing"; "Surael protect us!"; "Surael grant you rest" [eu4: localisation].
- Centaurs: "By Irdaeos!". Eordand: "By the Unseelie". Also attested once each: "By the Mongoose", "By Amilak", "By Nayiru", "By the grace of the Khet" [eu4: localisation].
- Elven insult for ruinborn: *Bóciot*, "bastard" [wiki: Ruinborn Elf]. Goblin for half-goblin: *Voltoj*. Kobold for goblin recruits: "no-scales" [wiki: Goblin; Darkscale Clan]. Lizardfolk on Cannorians: "the provincial paranoia of backwoods human savages" (Khazrik, 1516) [wiki: Monstrousness].
- Halfling custom: "breaking bread" means no harm will be done at this table [wiki: Halfling].

### 2.11 Languages and scripts

- **Common** (Cannorian Tongue): a creole of Old Castanorian and Old Damerian, born in the East Dameshead and Esmaria, carried abroad by the Damerian Republic and Jaher's Phoenix Empire. Dialects: Alenic, Borders, Businori, Castanorian, Damerian, Gerudian, Lencori, Reachman, Reverian, Small, Vernid Common. The wiki's out-of-character accent guide: Damerian = Received Pronunciation; lower-class Damerians, Beepeckers, orcs and goblins = Cockney; Small Country halflings = West Country; dwarves = Scottish; elves = Welsh or Irish; Businori = Iberian; Verne = Italian; Corvurian = Romanian; Gerudian = Nordic; Lorentish = slightly French [wiki: Common]. That guide is a ready-made key for Chinese dialect or register choices.
- **Elven** (*Lan'ven*, "language of Venaan"): language of magic, nobility and art in Cannor. Eight cases, three numbers (singular, dual, plural), four genders — Reian (alive, embodied), Lun (embodied, not alive), Seren (alive, bodiless: spirits), Aer (neither: magic). Articles Na / Di / Tiru. Compounds join with apostrophes and clipping: Seta'surgalaan "Second Golden Age", Aesadas "Sky Paradise". Daughters: Moon, Sun and Wood Elven; Wood Elvish is quick, singsong, full of double meanings and Common loans ("alfling" for halfling where Moon Elvish says *dimihud*) [wiki: Elven Language; Wood Elven Culture]. Script: **Fláernitha**, "blossom markings", descended from proto-draconic, written bottom-to-top in ribbon-and-twig glyphs [wiki: Fláernitha].
- **Dwarven**: scripts Stunthemal (syllabic, over a thousand signs), Dwaruz (44 signs) and runes (used for runecraft, not writing). Dialects: Aldewar (King's Dwarven, now liturgical), Krondewar, Nohdewar / Serpentreacher, Korzdewar (Segbandalic), Ozdewar (East), Azcanne (Cannorian), Tûngric. Vocabulary: Verkal citadel, Ovdal hold, Dihr gate, Gor mountain, Hul hill, Rod road, Aul all, Stun stone, Gulan gold, Grôn jade, Kanzad cannon, Bandal alliance, Az of, Ân/Tuw/Driz/Vûr one to four [wiki: Dwarven Language].
- **Orcish**: Uragush (green and West Dwarovar orcs), Tankur, Uraki Akaz, Ungulan. Uragush has nominative, accusative and vocative; "Zoga!" is the vocative of Zog [wiki: Uragush; Languages].
- **Goblin**: an etched line-script readable by touch in the dark, used mostly for numbers and great names; forest goblins cut it into bark [wiki: Goblin Writing Systems].
- **Lizardfolk**: Zytazashtu, "nine-colour": ink hue carries mood and grammar (red optative, yellow nobility or bellowing, orange sarcasm); "hueless" text works as a code [wiki: Lizardfolk].
- Also: Gnomish (parent of the Iochander human language), Gnollish, Centaur, Harpy tongues (Firanyan, Siadunan), Hobgoblin (Wuhyun), unrelated Kobold languages, Ogrish, Trollish, Vyzemby Halfling; among humans the Suranic family (Bulwari, Kheteratan, Baashidi, extinct Castanite) descends from Šedunnic [wiki: Languages; Creek Gnome].

### 2.12 Magic in brief (needed for class design)

Arcane magic needs **the spark**; "the vast majority of people do not have" it. The Magisterium's eight schools (Abjuration, Divination, Illusion, Conjuration, Enchantment, Evocation, Transmutation, Necromancy) were set by Garion the Wise; raising undead is illegal and necromancy suspect. **Divine magic** comes through faith, works spell by spell and can simply fail. **Rune magic** is dwarven. **Bardic magic** is a showy branch of enchantment organised in "Colleges". **Shamanic and druidic** practice invokes spirits and fey. **Warlocks** are arcane casters under a pact — fiends most often, then fey; celestial patrons are rarest, "the most prominent of which are the theurges of the Ravelian Church, who derive their power from the God Fragment". The **Blueblood Theory** holds the spark is inherited (strong mages show blue blood under a detection spell; "blueblood" became the word for Anbennar's mage aristocracy before 1810). **Floodborn** are Escanni mages of huge raw power born after the Crimson Deluge, most of whom die in childhood of "the Drowning" [wiki: Magic]. CK3 expresses the spark as three trait levels: Magical Affinity, Strong, Powerful [ck3: localization/english, `trait_magical_affinity_*`].

### 2.13 D&D 5e classes in Anbennar

| Class | In-setting name and institution | 1022 | 1444 | 1836 |
|---|---|---|---|---|
| Fighter | knight, legionnaire, marcher, mercenary | Castanorian legion remnants; knights of the new kingdoms; Phoenix legionaries | Lilac Wars veterans; Escann adventurer companies; Wexonard mercenaries; Command soldiers | line infantry; the Magister-Militant (geas-sworn, gray uniform, silver gorget); Roadwarden "Outriders" with pistol and sword (order founded 1578) |
| Paladin | **arcane knight** of the **Orda Aldresia** (sword as spell focus, the art of *Diranbe* taught by the elf Triandal Lostchord; forms I–VII, mythical form 0); Order of Exemplars in Bulwar; later the Corintar | not yet: the squire Aldresia's crusade against the undead is 1040–1053; in Bulwar the Surnabari (Sun Guards), forerunners of the Exemplars, serve Jaher; elsewhere knights sworn to Adean | Orda split by the Greentide — deserters form the Sword Covenant; Corintar founded under the half-orc Lothane Bluetusk | Orda as "Defenders of the Ravelian Church"; Corinite Crusaders and the secret New Corintar (both 17th-century offshoots) |
| Cleric | priest of a Regent Court patron (Castellos, the Dame, Esmaryal, Falah, Nerat, Adean, Ryala, Balgar, Ara, Minara; Munas from the Seventh Pantheonic Council, Nathalyne from the Eighth in 1184, Begga from the Ninth, Corin from the Tenth in 1445); Sun Cult priest; Skald-priest; ancestor-speaker; orc shaman of Dookan | the court has NO Nathalyne (she lived 1107–1162), NO Begga (1216–1303) and no Corin; Munas, dead since 1013, is its newest god, deified at the Seventh Council — dated 1015 by [wiki: Pantheonic Councils; Regent Court] and 1022 by [wiki: Timeline] | one Regent Court under Castellos; Corin dies in 1444 and is deified in 1445. "Adeanic" versus "Corinite" becomes a schism only after Castellos's death is announced (1518) and the Eleventh Council names Adean his successor (1520) [wiki: Pantheonic Councils; Timeline] | Regent Court (Adeanic), Corinite and Ravelian churches side by side |
| Wizard | **mage**; Magist-school graduate (Imperial Academy, Silmuna School of the Arts, Konwell Institute); tower districts Adráil, Aranthíl, Oldtower, Vertesk, Windtower, Konwell, Varlosen | no Magisterium yet (formed in secret during the Interregnum; established 1284); elven tutors and court mages; fear of anything like Nichmer | Magisterium elector and its rivals the Orda; EU4 "Mages" estate | the mage estate was broken in 1810 (its 20 delegates had held the same voting power as the Third Estate's thousand); most Royal Wizard lineages (Orda Arcana, eight seats) end that year; Vic3 states choose between "Nation of Magic", "Nation of Artifice" and bans on either |
| Sorcerer | one born with a strong spark: draconic bloodline (usually via elven blood), **Floodborn**, naga, blue ogre mage | elven and half-elven children | bloodline mages; no Floodborn yet (the Crimson Deluge is 1560s–1580s) | descendants of Floodborn and "bluebloods", a toppled caste |
| Warlock | pact-bound: forest-goblin **Pactseekers** (fey), hag covens (3 to 13 hags; Oldhaven Coven, Yezel Mora), fiend cultists, Bulwari genie-binders, Ravelian **theurges** | the Sorcerer-King's surviving acolytes are the era's villains (their patronage, if any, is not stated) | Witch-Kings beyond Magisterium reach; Pactseekers | theurges of the God Fragment |
| Druid | **Deepwoods druid** in a self-governing "circle"; centaur shaman; Fey Court adept | Deepwoods druidism not available (the wood elves are behind the Veil); only older fey-lore | newly possible | circles across the Deepwoods and Escann |
| Ranger | Salla Sàisth of Cyranvar; ram-riding rangers of Orlazam-az-dihr; Oakfoot and Bluefoot woodsmen; Arannese border guerrillas; hunters of Falah | hunters and scouts | Deepwoods and Dwarovar pathfinders | Roadwardens; ruinborn guides in Aelantir |
| Rogue | halfling thief in Finnic Shadowhand's tradition; devotee of Nathalyne; goblin gang or cartel; dwarven cartel thug; kobold trapsmith; gnomish provocateur in the Hierarchy's tradition of "guile and intrigue" | halfling burglars are a fresh legend; there is no cult of Nathalyne yet (born 1107, executed 1162, deified 1184) [wiki: Nathalyne (person); Pantheonic Councils] | goblin slums in Escann | cartels gone "quasi-legitimate" |
| Bard | Skaldskolan skald; troubadour (Alarian Singkeep of Seinathíl); Cardesti taleweaver; gnomish player of the Nimsnoms Theatre; harpy *Riaveltu* (harpy-only song magic) | elven singers after Munas Moonsinger | the half-orc bard Ary Heartsinger of Clan Heartgrinder (born 7 Bloomsend 1431, so only 13 at the 1444 start; the fame comes after the Greentide; died 1510) [wiki: Ary Heartsinger] | stage and press |
| Monk | **Xia** martial artist of a Xiaken (sect) on the Righteous Path, in the Xianjie (Way of the Dancing Breeze deflects bullets; School of Deep Fog smokes illusions); drunken masters of Krakzol ale; Oni chi-drainers; the kobold monk Rak Six Points | Halessi only. Rak Six Points (female; left Balrijin in 990, honoured guest in Xianjie from 1002) retires with her disciples to an abandoned shrine in Aoshan lands in 1022 itself; it later becomes the xiaken of Xerdgonfa [wiki: Rak Six Points] | Halessi only, plus rare travellers | schools still stand; chi theory meets artificery |
| Barbarian | orc in Dookan's Call; Gerudian reaver; Primal harimari; ogre in Hunger-frenzy; troll | reavers | Greentide orcs | frontier only |
| Artificer | gnomish (elegant, empirical), goblin ("it just works", explosive), kobold (body grafts, lightning power); philosophies of Brilliant Inventors (Sparkdrive Rifle), Techno-Thaumaturgy (Wandlocks), Mechanism (Skyships); dwarven runesmiths as cousins | not available: only gnomish alchemy and "techno-thaumaturgy" | first generation at Nimscodd; EU4 "Artificers" estate | everywhere; "Nation of Artifice" laws; mechanim |

Sources: [wiki: Orda Aldresia; Order of Exemplars; Corintar Order; Regent Court; Magisterium; Cannorian Magical Education; Royal Wizards; Witch-King; Magic; Hags; Pactseeker; Deepwoods Druidism; Wood Elven Culture; Dwarven Holds; Halfling; Skald-Priests; Half-orc; Chi; Righteous Path; Xiaken; Kobold; Artificery; Order of the Roadwardens; Gnome], [eu4: localisation, `estate_mages_desc`, `estate_artificers_desc`, `estate_adventurers_desc`], [vic3: localization/english, `law_traditional_magic_banned`, `law_nation_of_artifice`].

**Adventurer** itself is a canon social category: the EU4 estate "represents the explorers, fighters and trailblazers of society... adventurers fill in the odd and dangerous roles and tasks that everyday society won't do", tied to an "Adventurers Wanted!" notice system [eu4: localisation, `estate_adventurers_desc`]. Elven adolescents, Hyl dwarf youths and Wood Elf "Seedlings" at their Dispersal are the canonical young adventurers [wiki: Elf; Hyl Dwarf; Wood Elven Culture].

---

## 3. Key Characters

| Name | Who they are | Era | Personality / hooks | Source |
|---|---|---|---|---|
| Munas Moonsinger | moon-elf leader of the Remnant Fleet; founded the Silver Band; father of Marion Silmuna by Queen Auci of Dameria; deified as god of travel and music at the Seventh Pantheonic Council (1015 or 1022 — the sources differ) | Landing 1000; died 1013 at Damesteeth | "sang to the moon for help"; every moon elf's founding father | [wiki: Timeline; Regent Court; Pantheonic Councils; Marion Silmuna] |
| Marion I "Firstborn" Silmuna | the first recorded half-elf; son of Munas Moonsinger and Queen Auci Eightborn of Dameria; King of Dameria and first scion of House Silmuna | born 19 Yshdament 1001; king from 1020 at "the age of 20" (wiki) or from 3 Tearfall 1021 (CK3) | CK3 traits: reckless, gregarious, ambitious, impatient, strong magical affinity; a 21-year-old half-elf king at the 1022 start | [wiki: Marion Silmuna; ck3: history/characters/anb_damerian_carnetori.txt; history/titles/anb_k_dameria.txt] |
| Rean Siloriel | half-elf "Boy King of Lorent", son of King Ruben Lorentis (who "married Ioriel"); first Siloriel on the throne | born 4 Castanmark 1020; king from 27 Tearfall 1020 | a two-year-old on one of the great thrones in 1022 | [ck3: history/titles/anb_k_lorent.txt; history/characters/000_test_characters.txt; history/characters/anb_lorenti.txt; wiki: Silver Families] |
| Jaher ta'Diranhriá | sun-elf captain, conqueror of Bulwar, Phoenix Emperor, taken for Surael reborn | landed 1001; invaded Haless from 1038; assassinated at Tianlou 1127 | tactical genius who accepted his own divinity | [wiki: Sun Elf; Timeline] |
| Liandel (also spelled Liandiel) Speardancer | commander who led a moon-elf army into the Deepwoods | vanished 1017 | authority by seniority; mother of the wood elves | [wiki: Wood Elf] |
| Narawen Drennen | of Salla Drennen; called the Conclave of Elynáile | 1440s | alliance-builder under invasion | [wiki: Wood Elf] |
| Storin I sina Darovionn | Silverforge's greatest ruler, elected seven times, ruled 110 years, codified its law, retired in 1151 | lived 979–1159 | aged 43 in 1022 and not yet ruler (110 years before 1151 puts his first election about 1041 — computed, not stated) | [wiki: Silver Dwarf] |
| Balgar the Builder | exile of Khugdihr, architect to Castan the Progenitor, now god of crafts | antiquity | patron of Stone and Hyl dwarves | [wiki: Dwarf; Regent Court] |
| Findir Leadspine | Silver (later Lead) dwarf of the Logrwrota clan of plumbers; exiled "for his Orc sympathies" after publishing *A Treatise on Orcs: Their Place in the World* at Konwell, an attack on the Green Slave Trade and Silverforge's orc slave mines; early abolitionist author | 1389–1601; the treatise and the exile fall after the mid-1500s, NOT in the 1440s (in 1444 he is a 55-year-old pipe-fitter who has barely seen Escann); the Empire bans the orc slave trade in 1589 | a dwarf who defends orcs; friend-turned-rival of Grun Strongbellow | [wiki: Findir Leadspine; Silver Dwarf] |
| Finnic Shadowhand | halfling hero of the War of the Sorcerer-King | to 1020 | made thieves fashionable | [wiki: Halfling] |
| Korgus Dookanson | unifier of the orcs, leader of the Greentide | killed 1444 | claimed Dookan's voice; mobilised "every member" of every clan | [wiki: Orc] |
| Brasûr Frozenmaw, Zurtin Stonejaw | chiefs who denied Korgus and were exiled north | 1420s | origin of the gray orcs | [wiki: Orc] |
| Corin | human avatar of Agrados; slew Korgus; deified as goddess of war at the Tenth Pantheonic Council in 1445 | Veil fell 1443; died 1444 | lifted the Verdant Veil by killing the Eldest | [wiki: Wood Elf; Regent Court; Pantheonic Councils; Timeline] |
| Lothane Bluetusk | half-orc companion of Corin, first Grandmaster of the Corintar; "the Orc Bastard of Silmuna" — son of the captive Eilís the Blue (daughter of Adénn Skylance) and a Bladebreaker orc; wore his mother's blue scarf on his left tusk | born 3 Bloomsdawn 1425, died 1530 aged 105 | the model "good half-orc"; raised in the Bladebreaker clan, rescued by Corin before his execution; his son Rogier "the Young Owl" becomes first king of Rogieria | [wiki: Lothane Bluetusk; Half-orc; Corintar Order] |
| Ary Heartsinger | half-orc bard, hero of Clan Heartgrinder, Kalantar of Hullug | born 1431, died 1510 | cultural renaissance among the Heartgrinders; helped found Barumand | [wiki: Ary Heartsinger; Half-orc] |
| Zurzumex | kobold artificer who exiled himself with his followers; namesake of Zurzumexia | EU4 era | the kobold who chose a self | [wiki: Kobold] |
| Rak Six Points | female kobold monk of the Smoldering Claw from Balrijin; fights with the "six points" of her body (four limbs, teeth, tail) | left Balrijin 990; in Xianjie from 1002; retired to a shrine in Aoshan lands in 1022 | toured Yanshen beating human and harimari masters to answer the patronising of kobolds | [wiki: Rak Six Points] |
| Salvador síl Hotzaya | kobold explorer raised in Valorpoint, "the Boldest Man of Verne to ever be a kobold" | undated in what was checked | "larger-than-life" lone kobold | [wiki: Kobold; Salvador síl Hotzaya] |
| Tusor | goblin scholar of the "growth gene" | undated | goblin pride as science | [wiki: Goblin] |
| Harimar | second-generation harimari who conquered Haless | 35–70 AA; "disappeared" | savage conqueror turned enlightened ruler | [wiki: Harimari] |
| Castan II Beastbane | second ruler of Castanor and founder of the Regent Court faith; "did not invent" the idea of monstrous races but codified it as a strict hierarchy; his Second Great Cleansing wiped minotaurs and centaurs out of Escann, killed most satyrs and most goblins, broke fey influence (he burned the World Tree at what is now Oldhaven), drove off the harpies, saw the hags end up in the Greatwoods and sent the ogres away by treaty | 633–569 BA; Cleansing declared 597 BA | the doctrine's enforcer; said to have slain the archfey Rohibos himself | [wiki: Castan Beastbane; Monstrousness; Hags; Human] |
| Khazrik | lizardfolk satirist of Shalazar | wrote 1516 | contempt for Cannorian categories | [wiki: Monstrousness] |
| Triandal Lostchord | elf, veteran knight of the Aldresian Crusade, who broke with the elven Diranbe school over admitting non-elves and brought the art to the Orda Aldresia | after the Crusade (1040–1053); exact years not given | | [wiki: Orda Aldresia; Diranbe] |
| Nimrith the Red | dragon who burst out under Khugdihr in the Dragonwake (470), ravaged Cannor, then lived in the hold for 625 years, served by kobolds and human cultists | in Khugdihr 478–1103; slain by adventurers 1103 | the living god of the "Cult of Nimrith"; the great monster of Escann at the 1022 start | [wiki: Hold of Khugdihr; Darkscale Clan; ck3: localization/english/religion/anb_religion_doctrines_l_english.yml] |
| Nathalyne | half-elf master thief and illusionist of Anbenncóst, avatar of the Dame; captured during the Theft of the Jexisian Treasury | 1107–1162 (executed); deified 1184 | goddess of thieves, secrets and shadows — not yet born in 1022 | [wiki: Nathalyne (person); Pantheonic Councils] |
| Begga Goodfingers | halfling beggar-thief of Beepeck turned saint of charity; avatar of Ara | 1216–1303; deified at the Ninth Council | namesake of the copper "Begga" coin | [wiki: Begga Goodfingers; Pantheonic Councils; Coinage] |
| Foldan III Silverhammer | Clan Head of the Azzobar and Lord-Elector of Silverforge; nephew of Bardur VII (1292–1425) | born 1379; ruling since 23 Esmarment 1425 | EU4 personalities "just" and "malevolent" | [wiki: Silver Dwarf; eu4: history/countries/A73 - Silverforge.txt] |
| Gurukk Siegebreaker | black-orc chieftain, one of Korgus's most devoted lieutenants; broke Khugdihr | siege 1415–1424 | named "Siegebreaker" by Korgus himself | [wiki: Hold of Khugdihr; Dwarven Holds] |
| Garion the Wise | defined the eight schools; developed the cure for the White Pestilence in hiding at Varlosen | 1040s–1050s | | [wiki: Magic; Magisterium] |
| Laurens síl Place | last Knight Brother of the Sapphire Eye, co-founder of the Sword Covenant, "First Witch-King of Escann" | 1400s | hero who became the thing he fought | [wiki: Sword Covenant; Witch-King] |

---

## 4. Nations & Factions (sides a player could belong to, by people)

- **Elfrealms and the Silver Families** (non-monstrous establishment). Want: elven prestige preserved, magic kept in the right hands. Feared for long plots.
- **Sun-elf kingdoms / the Jadd**. Want: to fulfil the "Chosen" duty. Hated in Haless for Jaher's conquest [wiki: Half-elf].
- **Wood-elf salla, later Cyranvar**. Want: the Deepwoods back from orcs. Rivals: forest goblins, emerald orcs.
- **Dwarven clans, cartels and Reclamation companies**. Want: the holds. Hate: orcs, goblins, giantkin; quarrel with elves.
- **The Small Country's shires**. Want: a united halfling state free of Lorent and Gawed.
- **Nimscodd and the gnomish diaspora**. Want: the Dragon Coast back. Hate: kobolds.
- **Kobold scale-clans** (Redscale at Fetaginbaia, Bluescale at Mallayd, Greenscale at Iskalbaia; EU4 "settled hordes" of the Dragon Cult) [wiki: Redscale Clan; Bluescale Clan; Greenscale Clan]. Want: the hoard, the Dragonfather Malliath's favour, to stop being a joke.
- **Orc clans**. Green: Heartgrinder, Venomtooth, Rotcleaver, Clouded Eye, Bladebreaker, Severed Ear, Bonecarver, Dogeater, Deadfang, Bloodgorger, Silentblade and others; gray: Frozenmaw, Brokenjaw, Doombringer; brown: Thunderfist, Bloodsong [eu4: history/countries/*]. Want: war, or a place.
- **Goblin clans and cartels**: Exodus clans in Bahar (the Aqatbar Overclan, Greysheep), Escann clans, the Soyzkaru Cartel [eu4: history/countries/*].
- **The Command** (boar, wolf, lion, dragon, tiger, elephant banners). Want: order through conquest. Distrust magic.
- **Harpy matriarchies, gnoll packs, centaur caehnates, ogre Maghargma, Oni Shirgrii, lizardfolk cities**: the "monstrous" powers, each a full society.
- **Cross-race institutions**: Magisterium, Orda Aldresia, Corintar, adventurer companies, Order of Chroniclers, and the International Gommo ("Guild" in Gnomish; formed c. 889 BA), the oldest artificer organisation in the world, which regulated artifice under the First Hierarchy, is a rival of Nimscodd's Nomsen Zoober Apparatus, moved its seat to Gommoport in Haraf after the rediscovery of Aelantir, and without whose approval "few inventions ever see the light of day" [wiki: International Gommo; Nomsen Zoober Apparatus; eu4: anb_racial_pop_l_english.yml, `goblin_tolerance_events.4`].

---

## 5. Plot Threads with canon basis

1. **The first half-elves (1022).** A year after the Grand Ball, human dynasties scramble for elven spouses while most elves "have no titles of their own". The oldest half-elf alive, Marion Silmuna (21), has just become King of Dameria, and a half-elf toddler, Rean Siloriel, sits the throne of Lorent, so Sil-names already mean crowns; the open question is what the newborn half-elves and legitimised bastards of lesser houses will inherit [ck3: history/titles/anb_k_dameria.txt; anb_k_lorent.txt]. Eighteen years on, the White Pestilence (1040–1053) will spare elves more than humans and set off pogroms [wiki: Half-elf; Silver Families; Elf; Timeline]
2. **The lost host (1022).** Speardancer's army walked into the Deepwoods five years ago and never came out. A search party crossing the Veil is an invented hook, not a recorded event [unverified]; if used, time inside runs roughly two and a half times faster (over a thousand years inside against some 400 outside), so about a dozen years have passed for the host — Speardancer is still alive and in command, the camp at what becomes Ciranmyna is turning into forts, and the elves' mages are still trying to break the Veil [wiki: Wood Elf].
3. **Who is Spawn? (all eras).** Castan Beastbane's doctrine licenses anything done to "monstrous" peoples. The EU4 Empire can expel or purge a race, and the Emperor may go to war to stop it [eu4: localisation, `flavor_empire.41–42`, `emperor_fight_expeller`]. A campaign can run the whole arc to the 19th-century rule that "conventions could be broken by individuals or regimes, but not by entire species" [wiki: Monstrousness].
4. **The day the orcs stopped changing colour (1444).** Korgus dies and every orc on Halann loses the skin-shift; the Call still wakes in a few. Green clans fracture; half-orc children and freed goblins need somewhere to stand [wiki: Orc; Goblin; Half-orc].
5. **Reclamation and the squatters' question (1444).** Dwarven companies retake holds and kill "ancestral enemy" clans on sight. The dwarf who later objects in print, Findir Leadspine, does so a century on: his *Treatise on Orcs* (after the mid-1500s) attacks orc slavery, not the Reclamation killings, and gets him exiled from Silverforge and Hul-Jorkad — do not place that in 1444. Below the holds wait the Obsidian dwarves and their goblin slave-cities [wiki: Dwarf; Findir Leadspine; Deep Goblin].
6. **Gnome versus kobold on the Dragon Coast.** Artificery was invented to win this war; kobolds answer with traps, numbers and later lightning-driven artifice [wiki: Artificery; Gnome].
7. **The Chosen and the governed (Bulwar).** Sun-elf "Gumar" rule frays under gnolls, harpies, Exodus goblins and the Jaddari; the bombing of the Samartal masquerade (1491) kills the elven elite [wiki: Sun Elf].
8. **Blood and blue blood (1836).** Mage aristocracy has just been overthrown by the Blackpowder Rebellion (1810); Floodborn, Royal Wizards and Magisterium jurists fight over what lawful magic is while artificers rise [wiki: Magic; Magisterium; Royal Wizards; Timeline].
9. **Property that thinks (1836).** Laws treat mechanim as property, as licensed minds, as free, or as scrap; the Awakening is coming. The mod's own text says "property became people for the second time since slavery" [vic3: localization/english, `law_mechanim_cognitive_licenses_desc`; wiki: Mechanim].
10. **The Precursor inheritance.** Orcs, mechanim, ruinborn mutation, harimari sapience and elven immortality all trace to Precursor works and their fall [wiki: Orc; Mechanim; Harimari; Precursor Elf].

---

## 6. Everyday & sensory detail

- A halfling noble's feet: brushed curls, braids and beads, and for court a powdered foot-wig tied with ribbon [wiki: Halfling].
- Butterburn butter from cows summered on the Dragonhills; Bluefoot gentry keep a forest cabin; Redfoot keeps are stuffed with traps and boltholes [wiki: Bluefoot Halfling; Redfoot Halfling].
- A Viswall scandal: an Eaglecrest halfling gave his bride a rainbow dress sewn with kobold scales [wiki: Halfling].
- Elven tells: an old elf looks thirty except for dull, cloudy eyes. Ynnic knights crop their ear-points to fit a helm. Larankari sabre-men weigh their earlobes with rings and bells, and the ringing is a warning [wiki: Elf; Ruinborn Elf].
- Wood elves name their salla when introducing themselves, and can eat bark. (The Wood Elf page says the salla comes "before even mentioning one's name"; the Wood Elven Culture page writes the name first, as in Oberon Sàisth Ayeth — see section 7.) [wiki: Wood Elf; Wood Elven Culture].
- A dwarf's beard length is his seniority; Orlghelovar blue glass is still traded; Ovdal Lodhum was the honeymoon hold; Hyl dwarves herd their flocks into labyrinths before a siege [wiki: Dwarf; Dwarven Holds; Hyl Dwarf].
- Goblin kitchens: rat, weeds, blood tapped from living stock. Goblin praise is always double-edged [wiki: Goblin].
- Orcs wear bone trophies and widen their scars into patterns; a body left on the battlefield is honoured, one that died in bed goes to the pigs [wiki: Orc].
- Kobold apartments hold "families and extended families and extended-extended families"; their tunnels collapse human buildings; a good Trivu boasts of "only fourteen mining-related fatalities" [eu4: anb_racial_pop_l_english.yml, `kobold_tolerance_events.4, .8, .20`].
- Harpy envoys' talons click on palace floors; fishermen complain they steal from the nets; gnolls and harpies hold races, fur against feathers [eu4: anb_racial_pop_l_english.yml, `harpy_tolerance_events.12, .18, .20`].
- Lizardfolk noble ladies peel each other's shed skin over tea (18th–19th c.); their paintings look half-blank to anyone else [wiki: Lizardfolk].
- Trolls carve territory marks in bark and keep "their" bridge spotless to impress a mate [wiki: Troll].
- Sun-elf masquerades; free healing by elders at Eduz-szel-Ninezim; Bulwari weddings blessed in bulk at midsummer [wiki: Sun Elf; Bulwari].
- A tavern argument in 1444 Anbenncóst: whether the halfling at the next table may be paid half a wage "equal to his stature" [eu4: anb_racial_pop_l_english.yml, `halfling_tolerance_events.8`].

---

## 7. Uncertainties and source conflicts

- **Lifespans.** Wiki: elf ~400, wood elf ~250, dwarf ~200, gnome ~250, kobold 40–50. EU4 tooltips: elf ~300, wood elf ~200, dwarf ~150, gnome ~200, kobold ~70. Both given in 2.1; the mod is newer.
- **Wood-elf magic.** [wiki: Wood Elf] says druids favour Conjuration and Transmutation; [wiki: Cannorian Magical Education] and [wiki: Deepwoods Druidism] say Illusion and Transmutation.
- **Liandel / Liandiel** Speardancer: both spellings on one page.
- **Halfling cultures in 1022.** The CK3 file defines Bluefoot, Redfoot, Visfoot and Imperial halflings but gives them creation dates of 1200.1.1 ("placeholder") and 1221.1.1, so they do not exist at the 1022 start; the old Foots (Ciderfoot, Roysfoot, Oakfoot, Beefoot, Hillfoot, Moonfoot) do. That agrees with the wiki, which dates Redfoot/Bluefoot identity to the First Lilac War. Use only the old Foots for 1022 [ck3: common/culture/cultures/anb_halfling.txt].
- **Darkscale kobolds** are a CK3 culture (1022) though the wiki's Darkscale Clan is "Established 1103". Resolved by [wiki: Hold of Khugdihr]: in 1022 these kobolds are the servants of the living dragon Nimrith the Red inside Khugdihr; the "Darkscale Clan" is what they become after fleeing his death in 1103.
- **Munas's deification.** [wiki: Pantheonic Councils] and [wiki: Regent Court] date the Seventh Pantheonic Council to 1015; [wiki: Timeline] lists it under 1022. Either way he is a god by the 1022 start, and the newest one.
- **Marion Silmuna's accession.** [wiki: Marion Silmuna] gives his reign from 1020, "at the age of 20" (he was born in 1001, so 19); CK3 has Queen Auci hold Dameria until 1021.10.3.
- **Phoenix Empire founding.** [wiki: Sun Elf] has Jaher emperor two years after the 1001 landing; [wiki: Timeline] dates the "Rise of the Phoenix Empire" to 1038; CK3 gives him the kingdom of Bulwar in 1006.
- **Wood-elf name order.** [wiki: Wood Elf] says introductions start with the salla "before even mentioning one's name"; [wiki: Wood Elven Culture] gives the written form as given name first, then salla (Oberon Sàisth Ayeth).
- **"Lord-Elector" before the Empire.** [wiki: Silver Dwarf] has Storin I retire "from Lord Elector in 1151", seventy years before Anbennar is founded (1221). Treat the title as anachronistic for him; "clan head" is safe.
- **Who can learn magic.** [wiki: Magic] says one "either has the spark or does not"; the CK3 trait text says "magic can be learned by everyone, it comes easier to some than others".
- **Orcs in CK3.** Race traits exist for orc, goblin, ogre, troll (several are "placeholder" text) but no orc or goblin culture file; do not put surface orcs in 1022 Cannor.
- **Lothane Bluetusk's age.** Resolved: [wiki: Lothane Bluetusk] gives his birth as 3 Bloomsdawn 1425 (the same page also says he was "sired early in 1425", which does not fit a birth in the third month), so he is 19 at Corin's death in 1444 — consistent with half-orcs dating from the 1424 Greentide.
- **Artificery's start date.** One wiki line places it "in the aftermath of the Dragonwake", another in Nimscodd's war on the kobolds; the EU4 estate implies the 15th–16th century. Treated here as absent in 1022.
- **Hobgoblin banners.** The wiki folds Boar, Wolf and Lion into "Chimera"; EU4 lists them separately plus Swallow, Fenghuang, Eagle and Yak.
- **Gnomish particles** *fen / fer* and goblin *pobnek-* are attested but unexplained.
- **Name lists.** Yan, Raheni, Kai, Gowon, Khantaar, Vyzemby, Gerudian and troll lists are real-world borrowings; the Vic3 mechanim list is German placeholder; CK3 dynasty lists for moon elves and Castanorians are English placeholders. Vic3 files strip diacritics.
- **Racial modifier numbers** come from localisation tooltips; the modifier script files themselves are not in the local corpus.
- **Measures** and most national coinages are undocumented in the corpus.
- The wiki's Elf page carries author notes ("fact check the actual ages") — treat its exact fertility ages as soft.

---

## 8. Chinese names found in the listed sources

From the country-name dictionary (official localisation-derived) [zh/anbennar_guoming_ciku.txt]: The Command 命令秩序; Tiger / Dragon / Elephant / Wolf / Lion / Boar Command 虎令 / 龙令 / 象令 / 狼令 / 狮令 / 猪令; Redscale 红鳞, Bluescale 蓝鳞, Greenscale 绿鳞, Darkscale 暗鳞; Magisterium 魔法师议会; Aul-Dwarov 众矮人之国; Small Country 小人国; Orda Aldresia 阿德蕾西娅骑士团; Order of the Ashen Rose 灰烬玫瑰骑士团; Order of the Iron Sceptre 铁杖骑士团; 侏儒议会 (a gnomish polity, presumably the Gnomish Hierarchy — not verified against the English tag); Jaher 贾赫 (in 贾赫的典范).

From the user's earlier game [zh/existing_game_zh.txt]: Korgus Dookanson 科尔古斯·杜坎森; Silmuna 西尔穆纳; Regent Court 摄政王庭; Adeanic 阿德安派; Corinite 科琳教; Ravelian 揭秘教; Witch-King 巫师王; Royal Wizards 王家巫师; Floodborn 洪裔; artificery / artificer 奇械术 / 奇械师; damestear 达姆斯塔尔; adventurer / company 冒险者 / 冒险团; Serpentspine 蛇脊山脉; Escann 东坎诺; Greentide 绿潮; 魔导院 is used there for the Magisterium.

From the fan world-bible (community usage, treat as convention only) [zh/st/角色卡/安本纳尔_阿德蕾西娅骑士团]: elf 精灵, wood elf 木精灵, desert elf 沙漠精灵, Precursor elf 先驱精灵, ruinborn 遗迹精灵, degenerated elf 堕化精灵, half-elf 半精灵, dwarf 矮人, halfling 半身人, gnome 侏儒, orc 兽人, half-orc 半兽人, goblin 地精, hobgoblin 大地精, kobold 狗头人, gnoll 豺狼人, harpy 鹰身女妖, centaur 半人马, harimari 虎人, Deepwoods 深木森林, Day of Ashen Skies 灰烬天空之日. ("Troll 巨魔" does not occur in this fan bible; it is attested in the timeline project below.)

From the Chinese community map project "哈兰历史地图", whose species and culture tables are keyed to the EU4 localisation [zh/timeline/dist/data/country-identity-eu4.json]. Species: human 人类, elf 精灵, half-elf 半精灵, ruinborn 遗迹精灵, dwarf 矮人, halfling 半身人, gnome 侏儒, orc 兽人, half-orc 半兽人, goblin 地精 (哥布林 appears three times as a variant), hobgoblin 大地精, kobold 狗头人, gnoll 豺狼人, harpy 鹰身女妖, centaur 半人马, ogre 食人魔, troll 巨魔, harimari 虎人, lizardfolk 蜥蜴人, mechanim 机械人. Cultures: Moon Elf 月精灵, Sun Elf 太阳精灵, Wood Elf 木精灵, Desert Elf 沙漠精灵, Sea Elf 海精灵; Horned Ogre (oni) 有角食人魔, Fathide Ogre 厚皮食人魔; Ruby Dwarf 红宝石矮人, Silver Dwarf 白银矮人, Stone Dwarf 岩石矮人, Copper Dwarf 黄铜矮人, Obsidian Dwarf 黑曜石矮人; Redfoot 红足半身人, Bluefoot 蓝足半身人, Visfoot 维斯沃尔半身人, Imperial Halfling 帝国半身人; Cliff Gnome 山崖侏儒, Creek Gnome 河流侏儒; Green / Gray / Black / Brown Orc 绿皮 / 灰皮 / 黑皮 / 棕皮兽人; Exodus / Forest / Cave Goblin 流亡 / 森林 / 洞穴地精; Redscale / Bluescale / Darkscale / Goldscale Kobold 红鳞 / 蓝鳞 / 暗鳞 / 金鳞狗头人; Sandfang Gnoll 沙牙豺狼人; Firanyan Harpy 菲兰雅鹰身女妖; Royal Harimari 帝虎人; East Damerian 东达梅里亚, High Lorentish 高洛伦特, Gawedi 加韦德, Wexonard 威克斯, Castanorian 卡斯塔诺, Marcher 边区, Corvurian 科乌里亚, Zanite 扎尼特. In that project's running prose harpies are more often 鹰身人 or 哈比 than 鹰身女妖.

Not found in the listed sources (leave for the translation dossier): Hyl Dwarf, the old halfling "Foots" (Beefoot, Ciderfoot, Hillfoot, Oakfoot, Roysfoot, Moonfoot), a distinct word for oni beyond 有角食人魔, and the personal names in the lists above.

---

## Verification log

Independent fact-check against the local corpus (wiki dump, EU4 / CK3 / Vic3 mod files, zh sources). Every citation named below was opened; nothing was taken from the dossier's own say-so. "OK" means the passage was found and says what the dossier says.

### A. Errors found and corrected

1. **Half-elves in 1022 "are infants" / "toddlers of the Grand Ball" / "does a Sil-name mean anything yet?"** (overview, era table, plot thread 1). Wrong. [wiki: Marion Silmuna] calls Marion "the first recorded half-elf", son of Munas Moonsinger and Queen Auci; CK3 gives his birth as 1001.8.19 and makes him holder of k_dameria from 1021.10.3; CK3 also has the half-elf Rean Siloriel (born 1020.1.4) holding k_lorent from 1020.10.27. Rewrote all three passages and added both to Key Characters.
2. **"Khugdihr still stands" in 1022** (era table). Wrong. [wiki: Hold of Khugdihr]: dwarves driven out 476; Nimrith the Red in residence 478–1103 ("after 625 years"); Agate dwarves return 1104; Korgus besieges from 1415; falls 1424 to Gurukk Siegebreaker. CK3 localisation confirms "the followers of Nimrith in Khugdihr". Fixed the row, the overview and the kobold row; added Nimrith and Gurukk to Key Characters.
3. **Cleric row, 1022: "same court without Corin"; Munas's deification date "not given"**. Wrong twice. [wiki: Pantheonic Councils]: Seventh Council deifies Munas (1015; [wiki: Timeline] says 1022), Eighth deifies Nathalyne in 1184, Ninth deifies Begga, Tenth deifies Corin in 1445. [wiki: Nathalyne (person)]: born 1107, died 1162. [wiki: Begga Goodfingers]: born 1216, died 1303. Rewrote the cleric row and the rogue row; added the date conflict to section 7.
4. **Cleric row, 1444: "Adeanic orthodoxy"**. Anachronism: Castellos's death is announced in 1518 and the Eleventh Council names Adean successor in 1520 [wiki: Timeline; Pantheonic Councils]. Reworded.
5. **Halflings in 1022 "under human and gnomish lords"**. Wrong. [wiki: Halfling]: the old petty-kingdoms were "restored at the Grand Ball of Anbenncóst in 1021, only to fall over the following centuries"; the Hierarchy fell in the Dragonwake. CK3 has kingdom title files for Beepeck, Viswall, Roysfort and Ciderfield. Fixed.
6. **1444: "Viswall and the Free City of Beepeck stand apart"**. Half wrong. [wiki: Halfling]: the Viswall Rebellion (1421–1423) ended with the city "partitioned, leaving no sovereign halfling state standing"; EU4 has A07 North Viswall and A08 South Viswall. Beepeck is right, and its elector status is now dated: `elector = yes` in the EU4 1444 history file. Fixed.
7. **Findir Leadspine "exiled for objecting" to Reclamation killings in 1444** (plot thread 5). Wrong period and cause. [wiki: Findir Leadspine]: the exile follows his *Treatise on Orcs*, published after the mid-1500s, against orc slavery. Fixed thread and character row.
8. **"Lothane Bluetusk's age ... not resolved in the corpus"**. It is: born 3 Bloomsdawn 1425, died 1530 [wiki: Lothane Bluetusk]. Fixed section 7, era table and character row (parentage added).
9. **Ary Heartsinger listed as the 1444 bard**. Born 7 Bloomsend 1431 [wiki: Ary Heartsinger], so 13 at the start. Annotated.
10. **Goldscale kobold note "Every given name carries the prefix Kiu"**. Wrong: the EU4 list uses seven prefixes (Kiu, Var, Gyar, Fax, Vata, Rak, Druz), as the dossier's own sample shows. Fixed.
11. **Castan II Beastbane "invented monstrousness and purged satyrs, centaurs, hags"**. [wiki: Castan Beastbane]: "Beastbane did not invent these concepts, but he did categorize and implement a strict hierarchy"; the Cleansing list is minotaurs, centaurs, satyrs, fey, goblins, harpies, ogres. Hags are only mentioned on [wiki: Hags]. Rewritten with dates (633–569 BA; 597 BA).
12. **Rak Six Points "undated"**. [wiki: Rak Six Points] dates her 990 / 1002 / 1022 — she retires in the CK3 start year. Added to the monk row and given her own character row.
13. **Oath "in Adean's name"**. Zero hits in the EU4 localisation; "in the name of Adean" is what occurs. Replaced.
14. **Gommo** cited to [wiki: Gnome], which does not mention it. Correct sources are [wiki: International Gommo] ("meaning Guild in Gnomish", formed c. 889 BA) and [wiki: Nomsen Zoober Apparatus]. Re-cited and expanded.
15. **Plot thread 2, "finds decades have passed inside"** after five years. Does not fit the wiki's own ratio (over 1000 years inside, about 400 outside). Recomputed as about a dozen years, and the search party itself tagged [unverified] as an invented hook.
16. **Vic3 quote glossed "the first being orc slaves"**. The string reads "for the second time since slavery"; the gloss was removed and the key corrected to `law_mechanim_cognitive_licenses_desc`.
17. **Section 7, halfling cultures**: said CK3 "lists Redfoot, Visfoot and Imperial alongside the old Foots". The file gives Bluefoot, Redfoot, Visfoot `created = 1200.1.1` and Imperial `1221.1.1`, so CK3 agrees with the wiki. Corrected.
18. **Section 7, Darkscale kobolds**: left as an open conflict; resolved by [wiki: Hold of Khugdihr] (see 2).
19. **Section 8, "troll 巨魔" attributed to the fan world-bible**: zero hits there. It is in zh/timeline and (inside a country name) the dictionary. Moved.
20. **Section 8, "Not found in the listed sources: moon elf, sun elf, ogre, oni, lizardfolk, mechanim, dwarf kinds, halfling Foots"**. Wrong: the dossier never opened zh/timeline, which CORPUS.md lists. Its `country-identity-eu4.json` has 月精灵, 太阳精灵, 食人魔, 有角食人魔, 蜥蜴人, 机械人, 红宝石矮人, 白银矮人, 红足半身人 and more. Added a paragraph and narrowed the "not found" list to what is really absent.
21. **Exodus goblins "fled Korgus into Bahar"**: tightened to what [wiki: Korgus Dookanson; Decades of Devastation] say (chain-reaction displacement; Goblin Exodus 1430–1439).

### B. Facts added (all cited inline)

Marion I Silmuna and Rean Siloriel as reigning half-elves in 1022; Nimrith the Red and the Cult of Nimrith; the Pantheonic Council sequence; Nathalyne's and Begga's dates; Jaher's assassination at Tianlou (1127) and the three competing dates for his rule; Foldan III Silverhammer as Lord-Elector of Silverforge from 1425; Gurukk Siegebreaker and the 1415–1424 siege; Lothane's Silmuna descent; Beepeck's elector flag; the Chinese species and culture names from zh/timeline; six new entries in section 7 (Munas's deification, Marion's accession, Phoenix Empire founding, wood-elf name order, "Lord-Elector" in 1151, who can learn magic).

### C. Checked and found correct (no change)

- Monstrousness: origin, the "no Human, Elven, Gnomish, Harimari or Halfling state" quote, Khazrik 1516, decline dates [wiki: Monstrousness]; Vic3 monstrous / non-monstrous lists.
- EU4: 30% Integrated-race rule; ruler lifespans (elf 300, wood elf 200, dwarf 150 with the drinking line, gnome 200, kobold 70); all twenty rows of the racial administration / military table compared line by line with `GetRacialAdmin*` / `GetRacialMil*`; quoted tolerance events (elven 5–9, gnomish 6–10, halfling wage, orc slave-freeing, clan courts, kobold disappearances and mining fatalities, dwarven cartels and grudges); adventurers estate text; `flavor_empire.41–42` and `emperor_fight_expeller`; orc and goblin clan tags; elfrealm tags; the Command's banners and cultures.
- Race sheet and notes against each wiki page: Human, Elf (life stages, 1:7 fertility, sleep), Moon / Sun / Desert / Sunrise / Sea / Wood / Precursor / Ruinborn Elf, Half-elf, Dwarf, Stone / Silver / Hyl Dwarf, Dwarven Holds, Halfling and the Redfoot / Bluefoot / Visfoot / Imperial pages, Gnome, Creek Gnome, Orc and its subgroups, Half-orc, Goblin, Hobgoblin (1136–1200), Kobold and the scale-clan pages, Gnoll (Golud), Harpy (2.5–4% wing-arms; 60–80 / 80–100 lifespans), Centaur, Ogre, Troll, Harimari, Lizardfolk, Mechanim (1366; Awakening 1870s–1880s), Giants, Giantkin, Khet.
- Dates: Landing 1000; Jaher 1001; Damesteeth 1013; Hornwood spring 1017 and CK3 `created = 1017.5.1`; Grand Ball 1021; White Pestilence 1040–1053; Brasan 1201; Anbennar 1221; Magisterium 1284; Greentide 1424; Shamakhad 1431; Veil 1443; Corin's death 1444; Samartal 1491; Crimson Deluge 1560–1580; Roadwardens 1578; Silverkeep 1787; Blackpowder Rebellion 1810; Storin I 979–1159 and retirement 1151; Wexonard sack of Damescrown 471; Silver alliance 588.
- Institutions: Orda Aldresia (Diranbe, Triandal Lostchord, the oath, Sword Covenant schism, "Defenders of the Ravelian Church"), Corintar split, Order of Exemplars / Surnabari, Laurens síl Place, Magisterium towers and the 20-delegate Fourth Estate, Royal Wizards titles and lineages, hag covens of 3–13, chi schools, Krakzol ale, artificery philosophies, Deepwoods druid circles, Seedlings and the Dispersal.
- Human culture one-liners (Crownsman, Pearlsedger, High Lorentish, Cardesti, Bulwari, Gerudian, Alenic, Moorman, Marrodic, Korbarid, Olavish).
- Naming: Elven particles and examples, Silver Family formula, szal- and older Bulwari houses, kobold name scheme, Uragush uklum (Brasûr-u Saruhan), wood-elf salla names; CK3 `dynasty_of_location_prefix` and patronym suffixes for every culture named.
- Name lists: a script compared every name in every EU4-sourced row with the cited culture block in `anb_cultures.txt` — no name is missing; the CK3-sourced moon-elf and wood-elf names and the Vic3 Costine surnames were checked by hand; Vic3 culture keys and their religions (37 keys) match the era table.
- Calendar, coinage, languages and scripts, magic section, CK3 hybrid-race and magical-affinity traits.
- Chinese terms: all 19 dictionary entries, all 18 terms from the user's earlier game, and 21 of 22 fan-bible terms are present as cited.

### D. Still unverified or soft

- The search-party hook in plot thread 2 is invention, tagged [unverified].
- "Knights sworn to Adean" as the 1022 paladin stand-in, and "fear of anything like Nichmer", are reasonable inferences, not attested statements.
- Rean Siloriel's character record sits in a CK3 file named `000_test_characters.txt`, though the live title history points to it; his mother is only identified by the comment "married Ioriel" on his father's record.
- The Viswall partition is attested by the wiki and by two EU4 tags; which overlord holds each half was not checked (the corpus has no diplomacy history).
- The link between CK3's `darkscale` culture and Khugdihr in 1022 could not be confirmed (no province history in the corpus); the wiki and the CK3 faith text carry that claim.
- Wiki pages marked as stubs or carrying author notes (Elf fertility ages, Gray / Brown / Emerald Orc, Xiaken) remain thin single sources.
