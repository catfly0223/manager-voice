import { useState, useEffect } from "react"
import { mockReviews } from "../../lib/mockData"

interface Review {
  id: number
  leadership: number
  communication: number
  fairness: number
  employee_development: number
  decision_making: number
  team_building: number
  emotional_management: number
  positives: string
  improvements: string
  specific_episodes: string
  created_at: string
}

export function ReviewList() {
  const [reviews, setReviews] = useState<Review[]>([])

  useEffect(() => {
    // Simulate fetching reviews
    setTimeout(() => {
      setReviews(mockReviews)
    }, 1000)
  }, [])

  return (
    <div className="space-y-6">
      {reviews.map((review) => (
        <div key={review.id} className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Review #{review.id}</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Submitted on {new Date(review.created_at).toLocaleDateString()}
            </p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Leadership</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{review.leadership}</dd>
              </div>
              {/* Repeat similar div blocks for other quantitative metrics */}
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Positives</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{review.positives}</dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Areas for Improvement</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{review.improvements}</dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Specific Episodes</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{review.specific_episodes}</dd>
              </div>
            </dl>
          </div>
        </div>
      ))}
    </div>
  )
}

