"use client"

import { colors } from "../styles/colors"
import { mockReviews } from "../lib/mockData"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.base3 }}>
      {/* Hero Section */}
      <div className="py-20 text-center" style={{ backgroundColor: colors.base2 }}>
        <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ color: colors.base01 }}>
          ManagerVoice
        </h1>
        <p className="text-xl md:text-2xl mb-8" style={{ color: colors.base00 }}>
          マネージャーの声から、より良い職場づくりへ
        </p>
      </div>

      {/* Recent Reviews Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-8" style={{ color: colors.base01 }}>
          最新のレビュー
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockReviews.map((review) => (
            <Link
              key={review.id}
              href={`/reviews/${review.id}`}
              className="block transition-transform hover:-translate-y-1"
            >
              <div
                className="rounded-lg shadow-sm p-6 h-full"
                style={{ backgroundColor: colors.base3, borderColor: colors.base1 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold mb-1" style={{ color: colors.base01 }}>
                      {review.companyName}
                    </h3>
                    <p className="text-sm" style={{ color: colors.base00 }}>
                      {new Date(review.created_at).toLocaleDateString()}
                    </p>
                  </div>
                  <div
                    className="px-3 py-1 rounded-full text-sm"
                    style={{ backgroundColor: colors.blue, color: colors.base3 }}
                  >
                    {review.leadership}/10
                  </div>
                </div>

                <div className="space-y-2">
                  <div>
                    <h4 className="text-sm font-medium" style={{ color: colors.cyan }}>
                      良かった点
                    </h4>
                    <p className="text-sm" style={{ color: colors.base00 }}>
                      {review.positives.length > 100 ? `${review.positives.substring(0, 100)}...` : review.positives}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium" style={{ color: colors.orange }}>
                      改善点
                    </h4>
                    <p className="text-sm" style={{ color: colors.base00 }}>
                      {review.improvements.length > 100
                        ? `${review.improvements.substring(0, 100)}...`
                        : review.improvements}
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2">
                  {[
                    { label: "コミュニケーション", value: review.communication },
                    { label: "公平性", value: review.fairness },
                    { label: "部下育成", value: review.employee_development },
                    { label: "チームビルディング", value: review.team_building },
                  ].map((item) => (
                    <div key={item.label} className="text-xs rounded p-2" style={{ backgroundColor: colors.base2 }}>
                      <span style={{ color: colors.base01 }}>{item.label}</span>
                      <span className="ml-1 font-semibold" style={{ color: colors.violet }}>
                        {item.value}/10
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

