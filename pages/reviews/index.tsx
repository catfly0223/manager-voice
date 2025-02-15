import { ReviewList } from "../../components/Reviews/ReviewList"

export default function Reviews() {
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <h1 className="text-2xl font-semibold text-gray-900">Reviews</h1>
        <ReviewList />
      </div>
    </div>
  )
}

