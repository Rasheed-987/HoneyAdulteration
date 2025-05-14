"use client"

import { useState } from "react"
import axios from "axios"

function PredictionForm() {
  const [file, setFile] = useState(null)
  const [prediction, setPrediction] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!file) {
      setError("Please upload a CSV file.")
      return
    }

    const formData = new FormData()
    formData.append("file", file)

    setLoading(true)
    setError("")

    try {
      const response = await axios.post("/predict", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })

      console.log("Full response:", response.data)
      setPrediction(response.data.predictions[0][0])
    } catch (err) {
      setError("An error occurred while fetching predictions.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-honey-900">Honey Adulteration Prediction</h1>
        <p className="text-honey-700">Upload a CSV file with honey sample data to predict adulteration</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Upload Card */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-honey-200">
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-honey-800">Upload Data</h2>
            <p className="text-honey-600">Upload a CSV file containing honey sample data for analysis</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="file" className="block text-lg font-medium text-honey-700">
                CSV File
              </label>
              <div className="flex items-center gap-2">
                <input
                  id="file"
                  type="file"
                  accept=".csv"
                  onChange={handleFileChange}
                  className="w-full p-2 border border-honey-300 rounded text-honey-700 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-honey-100 file:text-honey-700 hover:file:bg-honey-200"
                />
              </div>
              {file && (
                <p className="text-sm text-honey-600 flex items-center">
                  <span className="mr-1 text-green-500">✓</span>
                  {file.name}
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 px-4 rounded-md font-semibold flex items-center justify-center ${
                loading ? "bg-honey-300 cursor-not-allowed" : "bg-honey-500 hover:bg-honey-600 text-white"
              }`}
            >
              {loading ? "Processing..." : "Analyze Sample"}
              {!loading && <span className="ml-2">📤</span>}
            </button>
          </form>
        </div>

        {/* Results Card */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-honey-200">
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-honey-800">Prediction Results</h2>
            <p className="text-honey-600">Analysis results will appear here after processing</p>
          </div>

          {error && (
            <div className="p-4 mb-4 border border-red-300 bg-red-50 rounded-md text-red-800">
              <div className="flex items-center">
                <span className="mr-2">⚠️</span>
                <div>
                  <h3 className="font-bold">Error</h3>
                  <p>{error}</p>
                </div>
              </div>
            </div>
          )}

          {prediction !== null && !isNaN(prediction) && (
            <div className="space-y-4">
              <div className="flex flex-col items-center justify-center p-6 border border-honey-200 rounded-lg bg-honey-50">
                <h3 className={`text-2xl font-bold mb-2 ${prediction === 1 ? "text-red-600" : "text-green-600"}`}>
                  {prediction === 1 ? "Adulterated" : "Pure"}
                </h3>
                <div className="w-full bg-honey-100 rounded-full h-2.5 mb-4">
                  <div
                    className={prediction === 1 ? "bg-red-600 h-2.5 rounded-full" : "bg-green-600 h-2.5 rounded-full"}
                    style={{ width: `${Math.round(Number(prediction) * 100)}%` }}
                  ></div>
                </div>
                <p className="text-sm text-honey-700">Confidence Score: {Math.round(Number(prediction) * 100)}%</p>
              </div>

              <div className="text-sm text-honey-600 bg-honey-50 p-4 rounded-lg border border-honey-200">
                <p>
                  This prediction is based on the chemical composition and properties of the honey sample provided in
                  the CSV file.
                </p>
              </div>
            </div>
          )}

          {!error && prediction === null && (
            <div className="flex flex-col items-center justify-center h-40 text-honey-500">
              <p>No prediction results yet</p>
              <p className="text-sm">Upload a CSV file to get started</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default PredictionForm

