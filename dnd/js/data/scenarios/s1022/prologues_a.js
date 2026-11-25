// 序章甲：达梅里亚、洛伦特、乌霜边区（BIBLE §11.1、§15.3）
// 骨架：每场只有标题、出口和“保证”类效果（等级、同伴、必给的物品、任务），选项是占位，
// 只为让整张图从每个出身连到结局、让各组标记在指定场景恰好立一个。写的时候整场替换掉，
// 但 first 里的保证和每组标记的立法要照 BIBLE 留下。自检：node tools/check-part.mjs s1022 prologues_a.js
export const SCENES = {
  p_dameria_01: {
    "id": "p_dameria_01",
    "title": "第七天的早饭",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "flag.f_rites && item.holy_oil < 1",
        "then": [
          "item +holy_oil"
        ]
      },
      "flag saw_sleeper"
    ],
    "next": "p_dameria_02"
  },
  p_dameria_02: {
    "id": "p_dameria_02",
    "title": "只记得出门打水",
    "text": [
      "（待写）"
    ],
    "next": "p_dameria_03"
  },
  p_dameria_03: {
    "id": "p_dameria_03",
    "title": "帐篷城",
    "text": [
      "（待写）"
    ],
    "first": [
      "flag met_edith"
    ],
    "next": "p_dameria_04"
  },
  p_dameria_04: {
    "id": "p_dameria_04",
    "title": "夜里起身的人",
    "text": [
      "（待写）"
    ],
    "next": "p_dameria_05"
  },
  p_dameria_05: {
    "id": "p_dameria_05",
    "title": "元帅要结案",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（骨架）达梅里亚：三个老兵绞了",
        "goto": "p_dameria_06",
        "effects": [
          "flag p_knife_hanged"
        ]
      },
      {
        "text": "（骨架）达梅里亚：三个老兵押着",
        "goto": "p_dameria_06",
        "effects": [
          "flag p_knife_held"
        ]
      },
      {
        "text": "（骨架）达梅里亚：三个老兵放了",
        "goto": "p_dameria_06",
        "effects": [
          "flag p_knife_released"
        ]
      }
    ]
  },
  p_dameria_06: {
    "id": "p_dameria_06",
    "title": "登记桌",
    "text": [
      "（待写）"
    ],
    "first": [
      "level 2",
      {
        "if": "item.witness_seal < 1",
        "then": [
          "item +witness_seal"
        ]
      },
      "quest witness start"
    ],
    "next": "a1_01"
  },
  p_lorent_01: {
    "id": "p_lorent_01",
    "title": "王座上的两岁",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "flag.f_rites && item.holy_oil < 1",
        "then": [
          "item +holy_oil"
        ]
      }
    ],
    "next": "p_lorent_02"
  },
  p_lorent_02: {
    "id": "p_lorent_02",
    "title": "太后的茶",
    "text": [
      "（待写）"
    ],
    "first": [
      "quest lance start"
    ],
    "next": "p_lorent_03"
  },
  p_lorent_03: {
    "id": "p_lorent_03",
    "title": "对大厅说什么",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（骨架）洛伦特：对大厅说没这回事",
        "goto": "p_lorent_04",
        "effects": [
          "flag p_hall_denied"
        ]
      },
      {
        "text": "（骨架）洛伦特：对大厅说了实话",
        "goto": "p_lorent_04",
        "effects": [
          "flag p_hall_truth"
        ]
      },
      {
        "text": "（骨架）洛伦特：答应大厅彻查",
        "goto": "p_lorent_04",
        "effects": [
          "flag p_hall_inquiry"
        ]
      }
    ]
  },
  p_lorent_04: {
    "id": "p_lorent_04",
    "title": "红宝石矮人的箱子",
    "text": [
      "（待写）"
    ],
    "next": "p_lorent_05"
  },
  p_lorent_05: {
    "id": "p_lorent_05",
    "title": "莫尔班平原来的车",
    "text": [
      "（待写）"
    ],
    "first": [
      "flag saw_empty_graves",
      "flag p_met_valeran",
      "item +lance_ledger"
    ],
    "next": "p_lorent_06"
  },
  p_lorent_06: {
    "id": "p_lorent_06",
    "title": "登记桌",
    "text": [
      "（待写）"
    ],
    "first": [
      "level 2",
      {
        "if": "item.witness_seal < 1",
        "then": [
          "item +witness_seal"
        ]
      },
      "quest witness start"
    ],
    "next": "a1_01"
  },
  p_ebonmarck_01: {
    "id": "p_ebonmarck_01",
    "title": "围城第九十一天",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "flag.f_rites && item.holy_oil < 1",
        "then": [
          "item +holy_oil"
        ]
      },
      "flag p_old_coin"
    ],
    "next": "p_ebonmarck_02"
  },
  p_ebonmarck_02: {
    "id": "p_ebonmarck_02",
    "title": "自己人的申辩",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（骨架）乌霜边区：把申辩“受慑”的老兵交了出去",
        "goto": "p_ebonmarck_03",
        "effects": [
          "flag p_gave_legionary"
        ]
      },
      {
        "text": "（骨架）另一条路",
        "goto": "p_ebonmarck_03"
      }
    ]
  },
  p_ebonmarck_03: {
    "id": "p_ebonmarck_03",
    "title": "过营",
    "text": [
      "（待写）"
    ],
    "first": [
      "flag saw_sleeper"
    ],
    "choices": [
      {
        "text": "（骨架）乌霜边区：用旧口令使唤过沉睡者",
        "goto": "p_ebonmarck_04",
        "effects": [
          "flag p_used_watchword"
        ]
      },
      {
        "text": "（骨架）另一条路",
        "goto": "p_ebonmarck_04"
      }
    ]
  },
  p_ebonmarck_04: {
    "id": "p_ebonmarck_04",
    "title": "按亲戚价",
    "text": [
      "（待写）"
    ],
    "first": [
      "flag met_liv_early"
    ],
    "next": "p_ebonmarck_05"
  },
  p_ebonmarck_05: {
    "id": "p_ebonmarck_05",
    "title": "克拉丽蒙德的一句话",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（骨架）乌霜边区：沼泽堡那天放下了兵器",
        "goto": "p_ebonmarck_06",
        "effects": [
          "flag p_laid_arms"
        ]
      },
      {
        "text": "（骨架）乌霜边区：沼泽堡那天没放下兵器",
        "goto": "p_ebonmarck_06",
        "effects": [
          "flag p_fought_on"
        ]
      },
      {
        "text": "（骨架）另一条路",
        "goto": "p_ebonmarck_06"
      }
    ]
  },
  p_ebonmarck_06: {
    "id": "p_ebonmarck_06",
    "title": "登记桌",
    "text": [
      "（待写）"
    ],
    "first": [
      "level 2",
      {
        "if": "item.witness_seal < 1",
        "then": [
          "item +witness_seal"
        ]
      },
      "quest witness start"
    ],
    "next": "a1_01"
  },
};
