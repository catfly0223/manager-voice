import { useState } from "react"
import { mockReviews } from "../../lib/mockData"

export function ReviewForm() {
  const [leadership, setLeadership] = useState(0)
  const [communication, setCommunication] = useState(0)
  const [fairness, setFairness] = useState(0)
  const [employeeDevelopment, setEmployeeDevelopment] = useState(0)
  const [decisionMaking, setDecisionMaking] = useState(0)
  const [teamBuilding, setTeamBuilding] = useState(0)
  const [emotionalManagement, setEmotionalManagement] = useState(0)
  const [positives, setPositives] = useState("")
  const [improvements, setImprovements] = useState("")
  const [specificEpisodes, setSpecificEpisodes] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      // Simulate adding a new review
      const newReview = {
        id: mockReviews.length + 1,
        leadership,
        communication,
        fairness,
        employee_development: employeeDevelopment,
        decision_making: decisionMaking,
        team_building: teamBuilding,
        emotional_management: emotionalManagement,
        positives,
        improvements,
        specific_episodes: specificEpisodes,
        created_at: new Date().toISOString(),
      }
      mockReviews.push(newReview)
      console.log("Review submitted successfully:", newReview)
      // Reset form or show success message
    } catch (error) {
      console.error("Error submitting review:", error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <label htmlFor="leadership" className="block text-sm font-medium text-gray-700">
            Leadership
          </label>
          <input
            type="range"
            id="leadership"
            min="0"
            max="10"
            value={leadership}
            onChange={(e) => setLeadership(Number.parseInt(e.target.value))}
            className="mt-1 block w-full"
          />
          <span>{leadership}</span>
        </div>
        {/* Repeat similar input fields for other quantitative metrics */}
      </div>
      <div>
        <label htmlFor="positives" className="block text-sm font-medium text-gray-700">
          Positives
        </label>
        <textarea
          id="positives"
          value={positives}
          onChange={(e) => setPositives(e.target.value)}
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="improvements" className="block text-sm font-medium text-gray-700">
          Areas for Improvement
        </label>
        <textarea
          id="improvements"
          value={improvements}
          onChange={(e) => setImprovements(e.target.value)}
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="specificEpisodes" className="block text-sm font-medium text-gray-700">
          Specific Episodes
        </label>
        <textarea
          id="specificEpisodes"
          value={specificEpisodes}
          onChange={(e) => setSpecificEpisodes(e.target.value)}
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit Review
        </button>
      </div>
    </form>
  )
}

