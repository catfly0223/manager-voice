"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { colors } from "../../styles/colors"
import { mockReviews } from "../../lib/mockData"

export default function CompanySearch() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q")?.toLowerCase() || ""

  // 会社名でグループ化し、レビュー数をカウント
  const companies = mockReviews.reduce(
    (acc, review) => {
      const company = acc.find((c) => c.name === review.companyName)
      if (company) {
        company.reviewCount++
      } else {
        acc.push({ name: review.companyName, reviewCount: 1 })
      }
      return acc
    },
    [] as { name: string; reviewCount: number }[],
  )

  // 検索クエリでフィルタリング
  const filteredCompanies = companies.filter((company) => company.name.toLowerCase().includes(query))

  // 平均スコアを計算
  const getAverageScores = (companyName: string) => {
    const companyReviews = mockReviews.filter((review) => review.companyName === companyName)
    const avgLeadership = companyReviews.reduce((sum, review) => sum + review.leadership, 0) / companyReviews.length
    const avgCommunication =
      companyReviews.reduce((sum, review) => sum + review.communication, 0) / companyReviews.length
    return { leadership: avgLeadership, communication: avgCommunication }
  }

  return (
    <div className="min-h-screen py-8" style={{ backgroundColor: colors.base3 }}>
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-6" style={{ color: colors.base01 }}>
          {query ? `"${query}" の検索結果` : "全ての会社"}
        </h1>

        <div className="space-y-4">
          {filteredCompanies.map((company) => {
            const avgScores = getAverageScores(company.name)

            return (
              <Link key={company.name} href={`/companies/${encodeURIComponent(company.name)}`} className="block">
                <div
                  className="p-6 rounded-lg transition-transform hover:-translate-y-1"
                  style={{ backgroundColor: colors.base2 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-xl font-semibold mb-1" style={{ color: colors.base01 }}>
                        {company.name}
                      </h2>
                      <p className="text-sm" style={{ color: colors.base00 }}>
                        レビュー数: {company.reviewCount}件
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 rounded-md" style={{ backgroundColor: colors.base3 }}>
                      <p className="text-sm mb-1" style={{ color: colors.base01 }}>
                        平均リーダーシップスコア
                      </p>
                      <p className="text-lg font-semibold" style={{ color: colors.blue }}>
                        {avgScores.leadership.toFixed(1)}/10
                      </p>
                    </div>
                    <div className="p-3 rounded-md" style={{ backgroundColor: colors.base3 }}>
                      <p className="text-sm mb-1" style={{ color: colors.base01 }}>
                        平均コミュニケーションスコア
                      </p>
                      <p className="text-lg font-semibold" style={{ color: colors.blue }}>
                        {avgScores.communication.toFixed(1)}/10
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}

          {filteredCompanies.length === 0 && (
            <div className="p-6 rounded-lg text-center" style={{ backgroundColor: colors.base2, color: colors.base00 }}>
              検索結果が見つかりませんでした
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

