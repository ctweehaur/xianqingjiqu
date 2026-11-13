// ==========================================================================
// 📖 《闲情记趣》深度文本赏析数据库 (analysis.js) - 马来西亚文言文黄金范例版
// ==========================================================================

const U_TAG = (text) => `<span class="proper-noun">${text}</span>`;

const OMISSION_TAG = (role, text) => 
    `<span style="display:inline-block; background:var(--wrong-bg); color:var(--wrong-text); border:1px dashed var(--wrong-border); padding:0 6px; margin:0 2px; border-radius:4px; font-size:12.5px; font-weight:800;" title="文言省略句补全成分">＋${role}：${text}</span>`;

const GRAMMAR_TAG = (type, text) => 
    `<span style="display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.22); padding:2px 8px; margin:2px 4px 2px 0; border-radius:5px; font-size:12px; font-weight:800; vertical-align:top;">${type}：${text}</span>`;

const ANCIENT_MODERN_TAG = (word, ancient, modern) => 
    `<div style="display:inline-flex; flex-direction:column; background:var(--notebook-bg); border:1px solid rgba(43,76,101,0.22); padding:5px 10px; margin:3px 6px 3px 0; border-radius:6px; font-size:12px; line-height:1.55; vertical-align:middle;">` +
        `<div style="color:var(--primary-color); font-weight:800;">🔹 【${word}】古义：${ancient}</div>` +
        `<div style="color:var(--text-muted); font-weight:600; border-top:1px dashed var(--input-border); margin-top:2px; padding-top:2px;">🔸 【${word}】今义：${modern}</div>` +
    `</div>`;

const CARET = `<span style="color:var(--wrong-color); font-weight:800; padding:0 2px;" title="此处省略了句子成分">‸</span>`;

const lessonTeacherAnalysis = {
    overview: "<strong>【全文白话译文（含省略成分补全）】</strong><br>" +
        "<span style='font-weight:500; display:inline-block; margin-top:6px; line-height:1.95;'>" +
        "<strong>（第1段）</strong>我回想自己在年幼的时候，能够睁大眼睛直视太阳，连极细微的事物都能看得清清楚楚。每当见到细小微妙的事物，" + OMISSION_TAG("主语", "我") + "必定仔细观察它的花纹条理，所以常常能体会到超出事物本身的乐趣。<br>" +
        "<strong>（第2段）</strong>夏天的蚊群嗡嗡作响，声音像雷鸣一样，" + OMISSION_TAG("主语", "我") + "私下里把它们比作一群仙鹤在天空中飞舞，心里这么想象着，那成百上千的蚊子便果真变成仙鹤了。" + OMISSION_TAG("主语", "我") + "抬头观赏它们，脖颈也因为这样而变得僵硬了。" + OMISSION_TAG("主语", "我") + "又把几只蚊子留在白色蚊帐里，用烟慢慢地喷向它们，让它们冲着烟雾边飞边叫，" + OMISSION_TAG("主语", "我") + "把这当作一幅“青云白鹤”的景观，果然就像仙鹤在云端高亢鸣叫一样，不禁高兴得拍手称快。<br>" +
        "<strong>（第3段）</strong>在土墙高低不平的地方、花台边小草繁密杂乱的地方，" + OMISSION_TAG("主语", "我") + "常常蹲下自己的身子，使" + OMISSION_TAG("宾语", "身子") + "跟花台一样高，聚精会神地仔细观察：把成丛的小草当作森林，把小虫和蚂蚁当作野兽，把土块碎石高起的部分当作山丘，低陷的部分当作山沟，" + OMISSION_TAG("主语", "我") + "在想象中游历其间，感到非常愉快满足。<br>" +
        "<strong>（第4段）</strong>有一天，" + OMISSION_TAG("主语", "我") + "看见两只小虫在草丛间争斗，观看得正兴致浓厚时，忽然有一个庞然大物，搬开土山、撞倒大树般地冲了过来，原来是一只癞蛤蟆！它的舌头一伸出，两只小虫就全被" + OMISSION_TAG("介词宾语", "它") + "吞进肚里了。我当时年纪还小，正看得入迷，不由得张大嘴巴惊叫起来。等心神安定下来后，" + OMISSION_TAG("主语", "我") + "便捉住那只癞蛤蟆，鞭打了它几十下，把它赶到了别的院子里去。" +
        "</span><br><br>" +
        "<strong>【古代文化常识与阅读提示（课本第7页）】</strong><br>" +
        "<span style='font-weight:500; display:inline-block; margin-top:4px;'>《闲情记趣》节选自" + U_TAG("清代") + "文学家" + U_TAG("沈复") + "（字三白，号梅逸）的自传体散文集《浮生六记》（全书原分六卷：《闺房记乐》《闲情记趣》《坎坷记愁》《浪游记快》《中山记历》《养生记道》，后两卷佚失）。本文采用<strong>“先总后分”</strong>的结构，以<strong>“物外之趣”</strong>为全篇文眼，依次记叙了<strong>“观蚊成鹤”、“神游山林”、“观虫斗与驱虾蟆”</strong>三件童年趣事，将孩童敏锐的观察力与天马行空的想象力表现得淋漓尽致。</span>",

    paragraphs: {
        1: "<strong>【第1段（总起全篇）：目力敏锐，细察纹理，点出“物外之趣”】</strong>" +
           "<div style='margin-top:10px; display:flex; flex-direction:column; gap:10px;'>" +
               "<div style='padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
                   "<div style='color:var(--text-color); font-weight:800;'>" +
                       "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                       "[余]忆[童稚]时，能[张目]对日，[明察秋毫]。见[藐小微物]，" + CARET + "必细[察]其[纹理]，[故][时]有[物外之趣]。" +
                   "</div>" +
                   "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                       "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                       "[我]✓回想[幼年]✓的时候，能够[睁大眼睛]✓直视太阳，[看清极细微的事物]✓。每当看见[细小微弱的事物]✓，" + OMISSION_TAG("主语", "我") + "必定仔细[观察]✓它的[花纹条理]✓，[所以]✓[常常]✓有[超出事物本身的乐趣]✓。" +
                   "</div>" +
                   "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                       ANCIENT_MODERN_TAG("余", "我（第一人称代词）", "剩下、多余") +
                       ANCIENT_MODERN_TAG("时（时有）", "常常、时常（副词）", "时间、时候（名词）") +
                       GRAMMAR_TAG("课本阅读指引", "总写儿时目力敏锐（明察秋毫）、观察入微（细察纹理），点明全文文眼“物外之趣”") +
                   "</div>" +
               "</div>" +
           "</div>",

        2: "<strong>【第2段（趣事一）：夏蚊成雷 → 群鹤舞空与青云白鹤观】</strong>" +
           "<div style='margin-top:10px; display:flex; flex-direction:column; gap:10px;'>" +
               "<div style='padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
                   "<div style='color:var(--text-color); font-weight:800;'>" +
                       "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                       "夏蚊成雷，" + CARET + "[私][拟]作群鹤舞" + CARET + "空，[心之所向]，则或千或百果然鹤也。" + CARET + "昂首[观]之，[项][为]之[强]。又留蚊于[素帐]中，[徐]喷[以]烟，使其冲烟飞鸣，作青云白鹤[观]，果如鹤[唳]" + CARET + "云端，[怡然称快]。" +
                   "</div>" +
                   "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                       "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                       "夏天的蚊群声如雷鸣，" + OMISSION_TAG("主语", "我") + "[私下里]✓把它[比]✓作群鹤" + OMISSION_TAG("介词", "在") + "空中飞舞，[心里这么想象]✓，那成百上千的蚊子就果真是仙鹤了。" + OMISSION_TAG("主语", "我") + "抬头[观看]✓它们，[脖颈]✓[因为]✓这样而变得[僵硬]✓了。又把蚊子留在[白色的蚊帐]✓里，[慢慢地]✓[用]✓烟喷它们，让它们冲着烟雾边飞边叫，当作一幅“青云白鹤”的[景象]✓，果然像仙鹤" + OMISSION_TAG("介词", "在") + "云端[高亢地鸣叫]✓，不禁[愉快地拍手叫好]✓。" +
                   "</div>" +
                   "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                       ANCIENT_MODERN_TAG("私", "私下里、暗自", "自私、私人") +
                       ANCIENT_MODERN_TAG("项", "脖颈、脖子后部", "项目、款项") +
                       ANCIENT_MODERN_TAG("强(jiāng)", "通“僵”，僵硬", "强壮、强大（读 qiáng）") +
                       ANCIENT_MODERN_TAG("徐", "慢慢地", "姓氏") +
                       GRAMMAR_TAG("状语后置句", "徐喷以烟 ＝ 以烟徐喷（用烟慢慢地喷）") +
                       GRAMMAR_TAG("一词多义", "昂首观之（动词：观看） vs 作青云白鹤观（名词：景象）") +
                   "</div>" +
               "</div>" +
           "</div>",

        3: "<strong>【第3段（趣事二）：蹲身花台，以小见大，神游山林】</strong>" +
           "<div style='margin-top:10px; display:flex; flex-direction:column; gap:10px;'>" +
               "<div style='padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
                   "<div style='color:var(--text-color); font-weight:800;'>" +
                       "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                       "于土墙凹凸处、花台小草丛杂处，" + CARET + "常蹲[其]身，使" + CARET + "与台[齐]，定神细视，[以]丛草[为]林，以虫蚁为兽，以[土砾]凸者为丘，凹者为[壑]，[神游]其中，[怡然自得]。" +
                   "</div>" +
                   "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                       "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                       "在土墙高低不平的地方、花台小草繁密杂乱的地方，" + OMISSION_TAG("主语", "我") + "常常蹲下[自己的]✓身子，使" + OMISSION_TAG("宾语", "身子") + "跟花台[一样高]✓，聚精会神地仔细看：[把]✓成丛的小草[当作]✓森林，把虫蚁当作野兽，把[土块碎石]✓高起的部分当作山丘，低陷的部分当作[山沟]✓，[在想象中游历]✓其间，[愉快而满足]✓。" +
                   "</div>" +
                   "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                       ANCIENT_MODERN_TAG("其（蹲其身）", "自己的（第一人称反身代词）", "他的、它的（第三人称）") +
                       GRAMMAR_TAG("课本词句品味（第17页）", "连用四个“以……为……”构成排比句，以小见大，并为第4段观虫斗、驱虾蟆作铺垫") +
                   "</div>" +
               "</div>" +
           "</div>",

        4: "<strong>【第4段（趣事三）：观二虫相斗，惊虾蟆吞虫，鞭而驱之】</strong>" +
           "<div style='margin-top:10px; display:flex; flex-direction:column; gap:10px;'>" +
               "<div style='padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
                   "<div style='color:var(--text-color); font-weight:800;'>" +
                       "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                       "一日，" + CARET + "见二虫斗" + CARET + "草间，观之正[浓]，忽有[庞然大物]，[拔山倒树]而来，[盖]一癞虾蟆也，舌一吐而二虫[尽][为]" + CARET + "[所]吞。余年幼，[方]出神，不觉[呀然]惊恐。神定，" + CARET + "捉虾蟆，[鞭]数十，驱之" + CARET + "别院。" +
                   "</div>" +
                   "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                       "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                       "有一天，" + OMISSION_TAG("主语", "我") + "看见两只小虫" + OMISSION_TAG("介词", "在") + "草丛间争斗，观看得正[兴致浓厚]✓，忽然有个[极其高大笨重的东西]✓，[搬开土山、撞倒大树]✓般地冲来，[原来是]✓一只癞蛤蟆，舌头一吐，两只小虫就[全都]✓[被]✓" + OMISSION_TAG("宾语", "它") + "吞掉了。我年纪小，[正在]✓看得入迷，不由得[张着嘴惊叫]✓害怕起来。心神安定后，" + OMISSION_TAG("主语", "我") + "捉住癞蛤蟆，[鞭打]✓了它几十下，把它赶" + OMISSION_TAG("介词", "到") + "别的院子里去了。" +
                   "</div>" +
                   "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                       ANCIENT_MODERN_TAG("盖", "原来是（句首语气词）", "盖子、建造") +
                       ANCIENT_MODERN_TAG("方", "正在、正当（时间副词）", "方向、方形") +
                       ANCIENT_MODERN_TAG("鞭", "用鞭子抽打（名词作动词）", "鞭子（名词）") +
                       GRAMMAR_TAG("文言被动句", "二虫尽为（之）所吞（“为……所……”表被动）") +
                       GRAMMAR_TAG("课本核心考点", "“庞然大物、拔山倒树”运用夸张修辞，生动写出孩童沉浸微观世界时的惊骇视角") +
                   "</div>" +
               "</div>" +
           "</div>"
    }
};
