// Campaign definition without scenes. Example layout for real campaigns.
export const META = {
  "id": "demo",
  "era": 1444,
  "title": "演示剧本",
  "coin": "金冠",
  "startDate": "1444年11月11日",
  "intro": [
    "绿潮退了。东坎诺的路上全是逃难的人和找活干的冒险者。"
  ],
  "tracks": [
    {
      "key": "order",
      "name": "帝国秩序",
      "desc": "皇帝的话还管不管用。",
      "start": 5,
      "min": 0,
      "max": 10,
      "labels": [
        "分崩离析",
        "摇摇欲坠",
        "勉强维持",
        "稳固",
        "如日中天"
      ]
    }
  ],
  "reputations": [
    {
      "key": "empire",
      "name": "安本纳尔帝国",
      "desc": "皇帝与选帝侯们",
      "start": 0
    }
  ],
  "origins": [
    {
      "id": "lorent",
      "name": "洛伦特王国",
      "region": "西坎诺",
      "flag": "A01",
      "blurb": "玫瑰与葡萄酒的王国，刚在丁香战争里吃了亏。",
      "tags": [
        "骑士",
        "宫廷"
      ],
      "startScene": "a",
      "start": {
        "rep": {
          "empire": -1
        },
        "gold": 5
      }
    },
    {
      "id": "wex",
      "name": "韦克斯大公国",
      "region": "帝国",
      "flag": "A30",
      "blurb": "皇帝的本家。",
      "tags": [
        "帝国",
        "军事"
      ],
      "startScene": "a",
      "start": {
        "rep": {
          "empire": 2
        }
      }
    }
  ],
  "factions": [
    {
      "id": "rose",
      "name": "玫瑰派",
      "motto": "洛伦特的朋友",
      "blurb": "主张与洛伦特修好。"
    },
    {
      "id": "moon",
      "name": "月派",
      "motto": "希尔穆纳的旧部",
      "blurb": "怀念达梅里亚的人。"
    }
  ],
  "premades": [
    {
      "id": "alvin",
      "name": "阿尔文·银原",
      "gender": "m",
      "race": "human",
      "cls": "fighter",
      "background": "soldier",
      "abil": {
        "str": 16,
        "dex": 13,
        "con": 15,
        "int": 10,
        "wis": 12,
        "cha": 9
      },
      "profs": [
        "perception",
        "survival"
      ],
      "blurb": "打了二十年绿潮的老兵。",
      "bio": "他在银原上长大，十六岁那年第一次看见兽人的营火。",
      "tags": [
        "简单上手"
      ]
    }
  ],
  "companions": {
    "ilse": {
      "id": "ilse",
      "name": "伊尔瑟",
      "blurb": "话很少的随军牧师。",
      "race": "human",
      "cls": "cleric",
      "abil": {
        "str": 12,
        "dex": 10,
        "con": 14,
        "int": 10,
        "wis": 16,
        "cha": 12
      },
      "profs": [
        "medicine",
        "religion"
      ],
      "equip": {
        "weapon": "mace",
        "armor": "chain",
        "offhand": "shield"
      }
    }
  },
  "quests": {
    "q1": {
      "title": "进城",
      "stages": [
        "想办法进卡斯托纳斯。"
      ],
      "doneText": "你进了城。"
    }
  },
  "chapters": [
    {
      "title": "第一幕：城门",
      "scene": "a"
    },
    {
      "title": "进城之后",
      "scene": "b"
    }
  ],
  "endingScenes": {
    "good": "end",
    "death": "dead"
  },
  "endings": {
    "good": {
      "title": "进了城",
      "subtitle": "演示结局",
      "text": [
        "不错。"
      ]
    },
    "death": {
      "title": "城门口的无名氏",
      "text": [
        "可惜。"
      ]
    }
  },
  "epilogues": [
    {
      "if": "is.god",
      "title": "{god}",
      "text": [
        "卡斯托纳斯城门口后来立了块碑，上面刻着你进城的日子。卖腌鱼的在碑旁边支了个摊，说他的鱼是神翻过面的。"
      ]
    },
    {
      "if": "world.order > 5",
      "title": "帝国",
      "text": [
        "帝国稳住了。"
      ]
    },
    {
      "if": "world.order <= 5",
      "title": "帝国",
      "text": [
        "帝国晃了晃。"
      ]
    }
  ]
};
