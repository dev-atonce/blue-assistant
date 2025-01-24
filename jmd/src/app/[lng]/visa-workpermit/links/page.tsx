import FadeHeading from "@/components/website/atom/heading/FadeHeading";
import MainHeading from "@/components/website/atom/heading/MainHeading";

import CoverVisa from "@/components/website/layout/CoverVisa";

import { useTranslations } from "next-intl";

const LinkJP = () => {
  return (
    <div className="grid grid-cols-1 gap-6 text-[#333333] font-medium">
      <div className="">
        <MainHeading text="お役立ちリンク" heading="1" />
        <div className="py-4 md:py-10 border-b-2 border-slate-200 ">
          <FadeHeading text="労働省(ワークパーミット)" heading="2" />

          <div className="detail-sty text-sm ">
            <div className="detail-sty">
              <ul className="list-disc pl-6 text-blue-900">
                <li>
                  <p>
                    <a target="_blank" href="http://www.pubanzen.mofa.go.jp/">
                      外務省 海外安全ホームページ
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a target="_blank" href="http://www.th.emb-japan.go.jp/">
                      在タイ日本国大使館
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a
                      target="_blank"
                      href="http://www.chiangmai.th.emb-japan.go.jp/"
                    >
                      チェンマイ総領事館
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a target="_blank" href="http://www.thaiembassy.jp/">
                      在東京タイ王国大使館
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a target="_blank" href="http://www.thaiconsulate.jp/wwwj/">
                      タイ王国大阪総領事館
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a
                      target="_blank"
                      href="http://www.nagoya-thaiconsulate.jp/"
                    >
                      タイ王国名古屋名誉総領事館
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a
                      target="_blank"
                      href="http://vientiane.thaiembassy.org/vientiane/th/index.php"
                    >
                      タイ大使館（ラオス・ビエンチャン）
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a target="_blank" href="http://www.thaiembassy.sg/">
                      タイ大使館（シンガポール）
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a
                      target="_blank"
                      href="http://www.thaiembassy.org/penang/"
                    >
                      タイ王国総領事館（マレーシア・ペナン）
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a
                      target="_blank"
                      href="http://www.thaiembassy.org/kualalumpur/"
                    >
                      タイ大使館（マレーシア・クアラルンプール）
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a
                      target="_blank"
                      href="http://www.thaiembassy.org/hochiminh/en/home"
                    >
                      タイ王国総領事館（ベトナム・ホーチミン）
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a target="_blank" href="http://www.thaiembassy.org/hanoi/">
                      タイ大使館（ベトナム・ハノイ）
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a target="_blank" href="http://www.immigration.go.th/">
                      タイ国 入国管理局
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a
                      target="_blank"
                      href="http://www.boi.go.th/index.php?page=index&language=en"
                    >
                      タイ国 投資委員会
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a
                      target="_blank"
                      href="http://www.mol.go.th/en/anonymouse/home"
                    >
                      タイ国 労働省
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a target="_blank" href="https://www.jetro.go.jp/">
                      日本貿易振興機構（JETRO）
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LinkEN = () => {
  return <LinkJP />;
};
const LinkTH = () => {
  return <LinkJP />;
};

export default function Work({ params }: { params: { lng: string } }) {
  const t = useTranslations("header");
  const s = useTranslations("service-section");
  const lang = params.lng;
  const content =
    lang == "jp" ? <LinkJP /> : lang == "en" ? <LinkEN /> : <LinkTH />;
  return (
    <>
      <div className="">
        <CoverVisa
          pageName={s("links")}
          prevPage={{ pageName: t("visa-work"), url: "/visa-workpermit" }}
        />
        <div className="container mx-auto  ">{content}</div>
      </div>
    </>
  );
}
