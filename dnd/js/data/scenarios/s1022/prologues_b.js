// 序章乙：伊贝瓦尔、威克斯（BIBLE §11.1、§15.3）
// 骨架：每场只有标题、出口和“保证”类效果（等级、同伴、必给的物品、任务），选项是占位，
// 只为让整张图从每个出身连到结局、让各组标记在指定场景恰好立一个。写的时候整场替换掉，
// 但 first 里的保证和每组标记的立法要照 BIBLE 留下。自检：node tools/check-part.mjs s1022 prologues_b.js
export const SCENES = {
  p_ibevar_01: {
    "id": "p_ibevar_01",
    "title": "两条命",
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
    "next": "p_ibevar_02"
  },
  p_ibevar_02: {
    "id": "p_ibevar_02",
    "title": "雪橇",
    "text": [
      "（待写）"
    ],
    "first": [
      "flag saw_sleeper"
    ],
    "next": "p_ibevar_03"
  },
  p_ibevar_03: {
    "id": "p_ibevar_03",
    "title": "法拉内安的人来了",
    "text": [
      "（待写）"
    ],
    "next": "p_ibevar_04"
  },
  p_ibevar_04: {
    "id": "p_ibevar_04",
    "title": "亲王问你",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（骨架）伊贝瓦尔：两条命按血偿判",
        "goto": "p_ibevar_05",
        "effects": [
          "flag p_ibevar_blood"
        ]
      },
      {
        "text": "（骨架）伊贝瓦尔：两条命按命价判",
        "goto": "p_ibevar_05",
        "effects": [
          "flag p_ibevar_weregild"
        ]
      },
      {
        "text": "（骨架）伊贝瓦尔：两条命押后再判",
        "goto": "p_ibevar_05",
        "effects": [
          "flag p_ibevar_held"
        ]
      }
    ]
  },
  p_ibevar_05: {
    "id": "p_ibevar_05",
    "title": "月火号的船板",
    "text": [
      "（待写）"
    ],
    "first": [
      "item +lunatein_plank"
    ],
    "next": "p_ibevar_06"
  },
  p_ibevar_06: {
    "id": "p_ibevar_06",
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
  p_wex_01: {
    "id": "p_wex_01",
    "title": "路沟",
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
    "next": "p_wex_02"
  },
  p_wex_02: {
    "id": "p_wex_02",
    "title": "公爵的小马",
    "text": [
      "（待写）"
    ],
    "first": [
      "companion +barry"
    ],
    "next": "p_wex_03"
  },
  p_wex_03: {
    "id": "p_wex_03",
    "title": "第十二具",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（骨架）威克斯：第十二具尸首埋了",
        "goto": "p_wex_04",
        "effects": [
          "flag p_wex_buried_legionary"
        ]
      },
      {
        "text": "（骨架）威克斯：第十二具尸首扔出了屠夫原",
        "goto": "p_wex_04",
        "effects": [
          "flag p_wex_cast_out"
        ]
      },
      {
        "text": "（骨架）另一条路",
        "goto": "p_wex_04"
      }
    ]
  },
  p_wex_04: {
    "id": "p_wex_04",
    "title": "扒束腰的",
    "text": [
      "（待写）"
    ],
    "next": "p_wex_05"
  },
  p_wex_05: {
    "id": "p_wex_05",
    "title": "十六座空坟",
    "text": [
      "（待写）"
    ],
    "first": [
      "flag saw_empty_graves",
      "quest sixteen_graves start"
    ],
    "next": "p_wex_06"
  },
  p_wex_06: {
    "id": "p_wex_06",
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
