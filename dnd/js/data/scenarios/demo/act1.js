// Scenes of one part. Each part file exports SCENES.
export const SCENES = {
  "a": {
    "id": "a",
    "art": "load_8",
    "title": "卡斯托纳斯城门",
    "shop": {
      "name": "板车老板",
      "blurb": "腌鱼底下什么都有。",
      "stock": [
        "healing_potion",
        "bandage",
        "dagger",
        {
          "id": "longsword",
          "price": 20
        }
      ]
    },
    "chapter": "序章 · 灰烬之路",
    "loc": "东坎诺 · 卡斯托纳斯城外",
    "date": "1444年11月11日",
    "text": [
      "城门口排着长队。{pc}，你排在一辆拉腌鱼的板车后面，已经闻了半个钟头。",
      {
        "speaker": "守卫",
        "text": "下一个。名字，打哪来，进城干什么。"
      },
      {
        "if": "race == 'elf'",
        "text": "他抬眼看见你的耳朵，把“干什么”三个字咽回去一半。"
      },
      {
        "if": "party.ilse && is.mortal",
        "speaker": "伊尔瑟",
        "text": "别跟他吵。"
      },
      {
        "if": "is.god",
        "text": "他抬头看了你一眼，手里的炭笔掉了。排在你后面的人往后退了三步，板车上的腌鱼不知道为什么全翻了个面。"
      },
      {
        "if": "is.god && party.ilse",
        "speaker": "伊尔瑟",
        "text": "你能不能收一收。他只是个看门的。"
      }
    ],
    "first": [
      "quest q1 start",
      "companion +ilse",
      "codex greentide"
    ],
    "choices": [
      {
        "text": "老老实实报上名字，顺便套套近乎",
        "check": {
          "skill": "persuasion",
          "dc": 10
        },
        "ok": {
          "text": "他在名册上划了一道，朝门洞里偏了偏头。",
          "effects": [
            "rep empire +1"
          ],
          "goto": "b"
        },
        "fail": {
          "text": "“近乎留着跟你娘套去。”他招了招手，门洞里走出两个不像是当兵的。",
          "goto": "fight"
        }
      },
      {
        "text": "把手按在剑柄上",
        "tag": "战士",
        "req": "class == 'fighter'",
        "reqText": "需要战士",
        "goto": "fight"
      },
      {
        "text": "从板车老板那儿买两瓶药水",
        "once": true,
        "cost": {
          "gold": 10
        },
        "effects": [
          "item +potion 2"
        ],
        "result": "老板从腌鱼底下摸出两个瓶子。你决定不去想它们为什么在那儿。"
      },
      {
        "text": "用精灵语低声说句祝福",
        "if": "race == 'elf'",
        "goto": "b"
      },
      {
        "text": "告诉他你是谁",
        "tag": "神",
        "if": "is.god",
        "effects": [
          "rep empire +2",
          "world order -1"
        ],
        "result": "“{god}。”你说。他跪下去的时候磕到了门槛。城门口三百来号人跟着跪了一地。明天全城都会知道，后天皇帝也会知道。",
        "goto": "b"
      }
    ]
  },
  "fight": {
    "id": "fight",
    "title": "门洞里的麻烦",
    "art": "ev_adventurers_estate",
    "text": [
      "两个兽人，一个地精，身上的锁甲还带着别人的家徽。"
    ],
    "combat": {
      "title": "城门伏击",
      "enemies": [
        {
          "id": "orc",
          "n": 2
        },
        {
          "id": "goblin",
          "n": 1
        }
      ],
      "win": {
        "effects": [
          "world order +1"
        ],
        "goto": "b"
      },
      "lose": "dead",
      "specials": [
        {
          "id": "rock",
          "name": "踹翻腌鱼板车",
          "desc": "让一车腌鱼和木桶滚向他们",
          "check": {
            "skill": "athletics",
            "dc": 12
          },
          "success": {
            "text": "木桶一路滚过去。",
            "dmgAll": "2d6"
          },
          "fail": {
            "text": "板车比看上去沉得多。"
          }
        }
      ]
    }
  },
  "b": {
    "id": "b",
    "title": "卡斯托纳斯",
    "loc": "东坎诺 · 卡斯托纳斯",
    "text": [
      "你进了城。半座城是废墟，另外半座在卖东西给来挖废墟的人。"
    ],
    "first": [
      "quest q1 done",
      "level 3"
    ],
    "next": "end"
  },
  "dead": {
    "id": "dead",
    "text": [
      "你倒在了城门口。"
    ],
    "ending": "death"
  },
  "end": {
    "id": "end",
    "text": [
      "演示到此为止。"
    ],
    "ending": "good"
  }
};
