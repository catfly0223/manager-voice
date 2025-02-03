"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { colors } from "../../../styles/colors"
import { mockReviews } from "../../../lib/mockData"

type PageProps = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: PageProps): Promise<JSX.Element> {
  // モックデータから該当するレビューを取得
  const review = mockReviews.find((r) => r.id === Number(params.id))

  if (!review) {
    return <div>レビューが見つかりませんでした</div>
  }

  const metrics = [
    { label: "リーダーシップ", value: review.leadership },
    { label: "コミュニケーション", value: review.communication },
    { label: "公平性", value: review.fairness },
    { label: "部下育成", value: review.employee_development },
    { label: "意思決定力", value: review.decision_making },
    { label: "チームビルディング", value: review.team_building },
    { label: "感情管理", value: review.emotional_management },
  ]

  const details = [
    { label: "部署", value: "エンジニアリング部" },
    { label: "役職", value: "シニアマネージャー" },
    { label: "在籍期間", value: "3年" },
    { label: "従業員規模", value: "1000名以上" },
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.base3 }}>
      {/* ヘッダー */}
      <div className="py-6" style={{ backgroundColor: colors.base2 }}>
        <div className="max-w-7xl mx-auto px-4">
          <Link href="/" className="inline-flex items-center text-sm mb-4" style={{ color: colors.blue }}>
            <ArrowLeft className="w-4 h-4 mr-1" />
            戻る
          </Link>
          <h1 className="text-3xl font-bold" style={{ color: colors.base01 }}>
            {review.companyName}のレビュー
          </h1>
          <p className="mt-2" style={{ color: colors.base00 }}>
            投稿日: {new Date(review.created_at).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 左カラム: 評価メトリクス */}
          <div className="lg:col-span-2 space-y-6">
            <div className="p-6 rounded-lg" style={{ backgroundColor: colors.base3, borderColor: colors.base1 }}>
              <h2 className="text-xl font-semibold mb-4" style={{ color: colors.base01 }}>
                評価項目
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {metrics.map((metric) => (
                  <div key={metric.label} className="p-4 rounded-lg" style={{ backgroundColor: colors.base2 }}>
                    <div className="flex justify-between items-center mb-2">
                      <span style={{ color: colors.base01 }}>{metric.label}</span>
                      <span className="font-semibold" style={{ color: colors.blue }}>
                        {metric.value}/10
                      </span>
                    </div>
                    <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: colors.base1 }}>
                      <div
                        className="h-full rounded-full"
                        style={{
                          backgroundColor: colors.blue,
                          width: `${metric.value * 10}%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* コメントセクション */}
            <div className="p-6 rounded-lg" style={{ backgroundColor: colors.base3, borderColor: colors.base1 }}>
              <h2 className="text-xl font-semibold mb-4" style={{ color: colors.base01 }}>
                詳細コメント
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-2" style={{ color: colors.cyan }}>
                    良かった点
                  </h3>
                  <p style={{ color: colors.base00 }}>{review.positives}</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2" style={{ color: colors.orange }}>
                    改善してほしい点
                  </h3>
                  <p style={{ color: colors.base00 }}>{review.improvements}</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2" style={{ color: colors.violet }}>
                    具体的なエピソード
                  </h3>
                  <p style={{ color: colors.base00 }}>{review.specific_episodes}</p>
                </div>
              </div>
            </div>
          </div>

          {/* 右カラム: 基本情報 */}
          <div>
            <div
              className="p-6 rounded-lg sticky top-6"
              style={{ backgroundColor: colors.base3, borderColor: colors.base1 }}
            >
              <h2 className="text-xl font-semibold mb-4" style={{ color: colors.base01 }}>
                基本情報
              </h2>
              <div className="space-y-4">
                {details.map((detail) => (
                  <div key={detail.label}>
                    <dt className="text-sm" style={{ color: colors.base01 }}>
                      {detail.label}
                    </dt>
                    <dd className="mt-1 font-medium" style={{ color: colors.base00 }}>
                      {detail.value}
                    </dd>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

